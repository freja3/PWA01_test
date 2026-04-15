const CACHE_NAME = 'temp-app-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installer og cache filer
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Netværksstrategi: Prøv netværk, ellers cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
