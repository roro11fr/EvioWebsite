'use client';

import { useEffect, useCallback } from 'react';
import styles from './VideoModal.module.css';

interface VideoModalProps {
  youtubeId: string;
  onClose: () => void;
}

export default function VideoModal({ youtubeId, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close video"
        >
          ✕
        </button>
        <div className={styles.player}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Portfolio video"
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}
