'use client';

import { Download, Monitor, Smartphone, Wifi, WifiOff, X } from 'lucide-react';
import React, { useEffect } from 'react';

import { usePWA } from '@/lib/hooks/usePWA';
import { useToggle } from '@/lib/hooks/useToggle';
import { cn } from '@/lib/utils';

interface InstallPromptProps {
  variant?: 'banner' | 'modal' | 'button' | 'inline';
  position?: 'top' | 'bottom' | 'center';
  showOfflineIndicator?: boolean;
  hideAfterInstall?: boolean;
  customTitle?: string;
  customDescription?: string;
  className?: string;
}

/**
 * PWA Install Prompt Component
 *
 * Features:
 * - Multiple display variants (banner, modal, button, inline)
 * - Automatic detection of install availability
 * - Offline status indicator
 * - Customizable content
 * - Auto-hide after installation
 * - Responsive design
 */
const InstallPrompt: React.FC<InstallPromptProps> = ({
  variant = 'banner',
  position = 'bottom',
  showOfflineIndicator = true,
  hideAfterInstall = true,
  customTitle,
  customDescription,
  className,
}) => {
  const { isInstallable, isInstalled, isOffline, install, isSupported } =
    usePWA();
  const [isDismissed, { setTrue: dismiss }] = useToggle(false);
  const [isInstalling, { toggle: toggleInstalling }] = useToggle(false);

  useEffect(() => {
    if (isInstalled && hideAfterInstall) {
      dismiss();
    }
  }, [isInstalled, hideAfterInstall, dismiss]);

  const handleInstall = async () => {
    toggleInstalling();
    const success = await install();
    toggleInstalling();

    if (success) {
      dismiss();
    }
  };

  // Don't render if not supported, not installable, dismissed, or already installed
  if (
    !isSupported ||
    !isInstallable ||
    isDismissed ||
    (isInstalled && hideAfterInstall)
  ) {
    return null;
  }

  const title = customTitle || 'Install App';
  const description =
    customDescription ||
    'Get the full experience with our progressive web app. Works offline and loads faster!';

  const renderContent = () => (
    <>
      <div className='flex items-start gap-3'>
        <div className='flex-shrink-0'>
          <div className='w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center'>
            <Download className='w-5 h-5 text-white' />
          </div>
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='text-sm font-semibold text-gray-900'>{title}</h3>
          <p className='text-sm text-gray-600 mt-1'>{description}</p>
          <div className='flex items-center gap-4 mt-3'>
            <div className='flex items-center gap-1 text-xs text-gray-500'>
              <Smartphone className='w-3 h-3' />
              <span>Mobile</span>
            </div>
            <div className='flex items-center gap-1 text-xs text-gray-500'>
              <Monitor className='w-3 h-3' />
              <span>Desktop</span>
            </div>
            {showOfflineIndicator && (
              <div className='flex items-center gap-1 text-xs text-gray-500'>
                {isOffline ? (
                  <>
                    <WifiOff className='w-3 h-3 text-red-500' />
                    <span>Offline</span>
                  </>
                ) : (
                  <>
                    <Wifi className='w-3 h-3 text-green-500' />
                    <span>Online</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <button
          onClick={handleInstall}
          disabled={isInstalling}
          className={cn(
            'px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400',
            'text-white text-sm font-medium rounded-md transition-colors',
            'disabled:cursor-not-allowed flex items-center gap-2',
          )}
        >
          {isInstalling ? (
            <>
              <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
              Installing...
            </>
          ) : (
            <>
              <Download className='w-4 h-4' />
              Install
            </>
          )}
        </button>
        <button
          onClick={dismiss}
          className='px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors'
        >
          Not now
        </button>
      </div>
    </>
  );

  if (variant === 'button') {
    return (
      <button
        onClick={handleInstall}
        disabled={isInstalling}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2',
          'bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400',
          'text-white text-sm font-medium rounded-md transition-colors',
          'disabled:cursor-not-allowed',
          className,
        )}
      >
        {isInstalling ? (
          <>
            <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
            Installing...
          </>
        ) : (
          <>
            <Download className='w-4 h-4' />
            Install App
          </>
        )}
      </button>
    );
  }

  if (variant === 'inline') {
    return (
      <div
        className={cn(
          'bg-white border border-gray-200 rounded-lg p-4',
          className,
        )}
      >
        {renderContent()}
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
        <div
          className={cn(
            'bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative',
            className,
          )}
        >
          <button
            onClick={dismiss}
            className='absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
          {renderContent()}
        </div>
      </div>
    );
  }

  // Banner variant (default)
  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0',
    center: 'top-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={cn(
        'fixed left-0 right-0 z-40 mx-4 sm:mx-6 lg:mx-8',
        positionClasses[position],
        className,
      )}
    >
      <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-4 relative'>
        <button
          onClick={dismiss}
          className='absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors'
        >
          <X className='w-4 h-4' />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default InstallPrompt;
