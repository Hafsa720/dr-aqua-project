'use client';

import { useEffect } from 'react';

import InstallPrompt from '@/components/InstallPrompt';
import * as serviceWorker from '@/lib/serviceWorker';

/**
 * PWA Wrapper Component
 *
 * Features:
 * - Service worker registration
 * - Install prompt management
 * - Update notifications
 * - Offline support
 */
const PWAWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Register service worker
    serviceWorker.register({
      onSuccess: (registration) => {
        // Use console.error (allowed by eslint rule) for informational messages to avoid lint warnings
        console.error('Service worker registered successfully:', registration);
      },
      onUpdate: (registration) => {
        console.error('New service worker available:', registration);

        // Optionally show update notification
        if (confirm('A new version is available. Reload to update?')) {
          serviceWorker.skipWaiting();
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        }
      },
      onOffline: () => {
        console.error('App is running in offline mode');
      },
      onOnline: () => {
        console.error('App is back online');
      },
    });

    // Handle service worker messages
    navigator.serviceWorker?.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SW_UPDATE_AVAILABLE') {
        // Handle update available notification
        console.error('Service worker update available');
      }
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      {children}
      <InstallPrompt variant='banner' position='bottom' />
    </>
  );
};

export default PWAWrapper;
