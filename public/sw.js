// Service Worker for PWA functionality
const CACHE_NAME = 'starter-template-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/logo.svg',
  '/manifest.json',
];

// Routes to cache with network-first strategy
const DYNAMIC_ROUTES = [
  '/components-demo',
  '/team',
  '/contact',
  '/cookies',
  '/privacy',
  '/terms',
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installed and static assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker: Error caching static assets', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
            })
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated and old caches cleaned');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Strategy for static assets (images, fonts, etc.)
  if (request.destination === 'image' ||
      request.destination === 'font' ||
      request.destination === 'style' ||
      request.destination === 'script') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy for HTML pages
  if (request.destination === 'document' ||
      DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Default strategy
  event.respondWith(cacheFirst(request));
});

// Cache-first strategy (for static assets)
async function cacheFirst(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      console.log('Service Worker: Serving from cache', request.url);
      return cached;
    }

    const response = await fetch(request);

    if (response.status === 200) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.error('Service Worker: Cache-first strategy failed', error);

    // Return offline fallback if available
    if (request.destination === 'document') {
      const cache = await caches.open(STATIC_CACHE);
      return cache.match('/') || new Response('Offline', { status: 503 });
    }

    return new Response('Network Error', { status: 503 });
  }
}

// Network-first strategy (for dynamic content)
async function networkFirst(request) {
  try {
    const response = await fetch(request);

    if (response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache', request.url);

    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    // Fallback for HTML pages
    if (request.destination === 'document') {
      const staticCache = await caches.open(STATIC_CACHE);
      return staticCache.match('/') || new Response('Offline', { status: 503 });
    }

    return new Response('Offline', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Service Worker: Performing background sync');
  // Implement your offline action sync here
  // Example: sync form submissions, analytics, etc.
}

// Push notifications
self.addEventListener('push', event => {
  if (!event.data) {
    return;
  }

  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/favicon/android-chrome-192x192.png',
    badge: '/favicon/android-chrome-192x192.png',
    vibrate: [100, 50, 100],
    data: data.data || {},
    actions: data.actions || []
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action) {
    // Handle action buttons
    console.log('Service Worker: Notification action clicked', event.action);
  } else {
    // Handle notification click
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handler for communication with main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});