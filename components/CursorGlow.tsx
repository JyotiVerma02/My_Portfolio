'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const revealSelector = [
  '.home-featured .project-card',
  '.home-experience > div',
  '.home-contact',
  '.about-page-grid > *',
  '.skills-page-grid .skill-box',
  '.experience-page-card',
  '.projects-page-grid .project-card',
  '.project-detail-header',
  '.project-detail-layout',
  '.contact-next',
  '.about-education .education-card',
  '.page-note',
].join(', ')

export default function CursorGlow() {
  const pathname = usePathname()
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    const dot = dotRef.current
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!cursor || !ring || !dot || !hasFinePointer.matches || prefersReducedMotion.matches) return

    let targetX = -100
    let targetY = -100
    let ringX = targetX
    let ringY = targetY
    let hasPosition = false
    let frame = 0
    let activeGlowTarget: HTMLElement | null = null

    const moveRing = () => {
      ringX += (targetX - ringX) * 0.28
      ringY += (targetY - ringY) * 0.28
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`

      if (Math.abs(targetX - ringX) > 0.35 || Math.abs(targetY - ringY) > 0.35) {
        frame = window.requestAnimationFrame(moveRing)
      } else {
        ringX = targetX
        ringY = targetY
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
        frame = 0
      }
    }

    const clearGlowTarget = () => {
      if (!activeGlowTarget) return
      activeGlowTarget.classList.remove('is-pointer-lit')
      activeGlowTarget.style.removeProperty('--pointer-x')
      activeGlowTarget.style.removeProperty('--pointer-y')
      activeGlowTarget.style.removeProperty('--tilt-x')
      activeGlowTarget.style.removeProperty('--tilt-y')
      activeGlowTarget = null
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return

      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      if (!hasPosition) {
        ringX = targetX
        ringY = targetY
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
        hasPosition = true
      }
      cursor.classList.add('is-visible')

      const target = event.target instanceof Element ? event.target : null
      const interactive = target?.closest('a, button, input, select, textarea, label, [role="button"], .project-card')
      cursor.classList.toggle('is-interactive', Boolean(interactive))

      const glowTarget = target?.closest<HTMLElement>('.hero-visual, .project-card') ?? null
      if (glowTarget !== activeGlowTarget) {
        clearGlowTarget()
        activeGlowTarget = glowTarget
        activeGlowTarget?.classList.add('is-pointer-lit')
      }

      if (glowTarget) {
        const bounds = glowTarget.getBoundingClientRect()
        const x = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))
        const y = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100))
        glowTarget.style.setProperty('--pointer-x', `${x}%`)
        glowTarget.style.setProperty('--pointer-y', `${y}%`)

        if (glowTarget.matches('.project-card')) {
          const tiltX = ((bounds.height / 2 - (event.clientY - bounds.top)) / bounds.height) * 3
          const tiltY = (((event.clientX - bounds.left) - bounds.width / 2) / bounds.width) * 3
          glowTarget.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`)
          glowTarget.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`)
        }
      }

      if (!frame) frame = window.requestAnimationFrame(moveRing)
    }

    const onPointerOut = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return
      cursor.classList.remove('is-visible', 'is-interactive', 'is-pressed')
      clearGlowTarget()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') cursor.classList.add('is-pressed')
    }
    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') cursor.classList.remove('is-pressed')
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerout', onPointerOut)
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerout', onPointerOut)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      document.documentElement.classList.remove('has-custom-cursor')
      if (frame) window.cancelAnimationFrame(frame)
      clearGlowTarget()
    }
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    try {
      elements.forEach((element) => {
        observer.observe(element)
        element.classList.add('scroll-reveal')
      })
    } catch {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('scroll-reveal', 'is-revealed'))
      return
    }

    const onVisibilityChange = () => {
      document.body.classList.toggle('motion-paused', document.visibilityState === 'hidden')
    }
    onVisibilityChange()
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      document.body.classList.remove('motion-paused')
    }
  }, [pathname])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span ref={ringRef} className="custom-cursor-ring" />
      <span ref={dotRef} className="custom-cursor-dot" />
    </div>
  )
}
