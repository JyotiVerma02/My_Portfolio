const CACHE_NAME = 'jyoti-portfolio-v2'
const APP_SHELL = [
  '/',
  '/offline.html',
  '/manifest.webmanifest',
  '/pwa-180.png',
  '/pwa-192.png',
  '/pwa-512.png',
  '/pwa-maskable-512.png',
  '/pwa-screenshot-wide.png',
  '/pwa-screenshot-narrow.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)))
      await self.skipWaiting()
    }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      await self.clients.claim()
    }),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)

  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
          }
          return response
        })
        .catch(async () => (await caches.match(request)) || (await caches.match('/offline.html')) || (await caches.match('/'))),
    )
    return
  }

  if (url.pathname.startsWith('/_next/static/') || /^\/pwa-(180|192|512|maskable-512|screenshot-(wide|narrow))\.png$/.test(url.pathname) || url.pathname === '/icon.svg') {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
        }
        return response
      })),
    )
  }
})
