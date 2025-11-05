'use client';

import { useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  videoUrl?: string;
  youtubeId?: string;
}

// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url: string): string | null => {
  try {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2] && match[2].length === 11 ? match[2] : null;
  } catch {
    return null;
  }
};

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'Our Story',
  description = 'Discover how Dr.Aqua is transforming the digital landscape, one project at a time.',
  videoUrl,
  youtubeId,
}) => {
  // Extract YouTube ID from URL if provided
  const extractedYouTubeId = videoUrl ? extractYouTubeId(videoUrl) : null;
  const finalYouTubeId = youtubeId || extractedYouTubeId || null;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='video-modal-title'
      aria-describedby={description ? 'video-modal-description' : undefined}
    >
      <div
        className='relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95'
          aria-label='Close video'
        >
          <FaTimes className='w-4 h-4' />
        </button>

        {/* Video Container */}
        <div className='aspect-video bg-black rounded-t-2xl relative overflow-hidden'>
          {finalYouTubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${finalYouTubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&playsinline=1`}
              title={`Video: ${title}${description ? ` - ${description}` : ''}`}
              className='w-full h-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              frameBorder='0'
              aria-label={`Embedded video player for ${title}`}
              role='region'
              tabIndex={0}
            />
          ) : videoUrl && !finalYouTubeId ? (
            <iframe
              src={videoUrl}
              title={`Video: ${title}${description ? ` - ${description}` : ''}`}
              className='w-full h-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              frameBorder='0'
              aria-label={`Embedded video player for ${title}`}
              role='region'
              tabIndex={0}
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900'>
              <div className='text-center'>
                <FaPlay className='w-16 h-16 text-white/50 mx-auto mb-4' />
                <p className='text-white/70'>Video will be available soon</p>
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        {(title || description) && (
          <div className='p-6 bg-white animate-fade-in animation-delay-200'>
            {title && (
              <h3
                id='video-modal-title'
                className='text-2xl font-bold text-slate-900 mb-2'
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                id='video-modal-description'
                className='text-slate-600 leading-relaxed'
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
