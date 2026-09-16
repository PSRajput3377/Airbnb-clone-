import { useEffect } from 'react';
import { X } from 'lucide-react';

interface PhotoTourProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  onImageClick: (index: number) => void;
}

export default function PhotoTour({ images, isOpen, onClose, onImageClick }: PhotoTourProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="photo-tour-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <div className="photo-tour-content" onClick={(e) => e.stopPropagation()}>
        <div className="photo-tour-header">
          <button
            className="close-photo-tour-btn"
            onClick={onClose}
            aria-label="Close photo tour"
          >
            <X size={20} />
          </button>
        </div>

        <div className="photo-tour-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="photo-tour-item"
              onClick={() => {
                onImageClick(index);
                onClose();
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo ${index + 1} in lightbox`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onImageClick(index);
                  onClose();
                }
              }}
            >
              <img src={image} alt={`Property photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
