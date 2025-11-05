'use client';

const isLocalhost = Boolean(
  typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
      )),
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onOffline?: () => void;
  onOnline?: () => void;
};

/**
 * Service Worker Utilities
 *
 * Features:
 * - Service worker registration
 * - Update detection and handling
 * - Offline/online status
 * - Cache management
 * - Background sync
 */

export function register(config?: Config) {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  const publicUrl = new URL(process.env.PUBLIC_URL || '', window.location.href);
  if (publicUrl.origin !== window.location.origin) {
    return;
  }

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

    if (isLocalhost) {
      checkValidServiceWorker(swUrl, config);
      navigator.serviceWorker.ready.then(() => {
        console.error(
          'This web app is being served cache-first by a service worker.',
        );
      });
    } else {
      registerValidSW(swUrl, config);
    }

    // Handle online/offline events
    window.addEventListener('online', () => {
      console.error('App is online');
      config?.onOnline?.();
    });

    window.addEventListener('offline', () => {
      console.error('App is offline');
      config?.onOffline?.();
    });
  });
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.error(
                'New content is available and will be used when all tabs for this page are closed.',
              );
              config?.onUpdate?.(registration);
            } else {
              console.error('Content is cached for offline use.');
              config?.onSuccess?.(registration);
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.error(
        'No internet connection found. App is running in offline mode.',
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

export function skipWaiting() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
  }
}

export async function getCacheSize(): Promise<number> {
  if (!('caches' in window)) return 0;

  try {
    const cacheNames = await caches.keys();
    let totalSize = 0;

    for (const name of cacheNames) {
      const cache = await caches.open(name);
      const requests = await cache.keys();

      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const blob = await response.blob();
          totalSize += blob.size;
        }
      }
    }

    return totalSize;
  } catch (error) {
    console.error('Error calculating cache size:', error);
    return 0;
  }
}

export async function clearCache(): Promise<boolean> {
  if (!('caches' in window)) return false;

  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
    return true;
  } catch (error) {
    console.error('Error clearing cache:', error);
    return false;
  }
}

export function requestPersistentStorage(): Promise<boolean> {
  if (!('storage' in navigator) || !('persist' in navigator.storage)) {
    return Promise.resolve(false);
  }

  return navigator.storage.persist();
}

export async function getStorageEstimate() {
  if (!('storage' in navigator) || !('estimate' in navigator.storage)) {
    return null;
  }

  try {
    return await navigator.storage.estimate();
  } catch (error) {
    console.error('Error getting storage estimate:', error);
    return null;
  }
}
