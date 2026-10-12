import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react'

type ProjectDetails = {
  title: string
  description: string
  features: readonly string[]
  tech: string
  links: {
    live?: string
    github?: string
  }
}

type ProjectModalProps = {
  project: ProjectDetails | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeRef.current?.focus()
    return () => previousFocus?.focus()
  }, [project])

  if (!project) return null

  const trapDialogFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return
    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay show" onClick={handleOverlayClick}>
      <div ref={dialogRef} className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title" onKeyDown={trapDialogFocus}>
        <button ref={closeRef} className="close-btn" type="button" aria-label="Close project details" onClick={onClose}>&times;</button>
        <h3 id="modal-title">{project.title}</h3>
        <div className="modal-body">
          <p>{project.description}</p>
          <h4>Key Features:</h4>
          <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <h4>Technologies Used:</h4>
          <p>{project.tech}</p>
        </div>
        <div className="modal-links">
          {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
        </div>
      </div>
    </div>
  )
}
