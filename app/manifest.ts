import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Jyoti Verma Portfolio',
    short_name: 'Jyoti',
    description: 'Jyoti Verma’s frontend development portfolio and selected projects.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#17120f',
    theme_color: '#17120f',
    icons: [
      { src: '/pwa-180.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
      { src: '/pwa-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    screenshots: [
      { src: '/pwa-screenshot-wide.png', sizes: '1280x720', type: 'image/png', form_factor: 'wide' },
      { src: '/pwa-screenshot-narrow.png', sizes: '390x844', type: 'image/png', form_factor: 'narrow' },
    ],
  }
}
