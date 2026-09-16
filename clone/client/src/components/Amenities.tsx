import { useState, useEffect } from 'react';
import {
  Wifi,
  Waves,
  Tv,
  Car,
  Wind,
  Flame,
  Utensils,
  Eye,
  ShieldCheck,
  Dumbbell,
  Laptop,
  Sun,
  X
} from 'lucide-react';

interface AmenitiesProps {
  amenities: string[];
}

// Icon mapper helper
const getAmenityIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('wifi')) return <Wifi size={24} />;
  if (lower.includes('pool') || lower.includes('hot tub') || lower.includes('beach') || lower.includes('ocean')) return <Waves size={24} />;
  if (lower.includes('tv')) return <Tv size={24} />;
  if (lower.includes('parking')) return <Car size={24} />;
  if (lower.includes('air conditioning') || lower.includes('heating')) return <Wind size={24} />;
  if (lower.includes('kitchen') || lower.includes('dining')) return <Utensils size={24} />;
  if (lower.includes('workspace')) return <Laptop size={24} />;
  if (lower.includes('grill') || lower.includes('fire')) return <Flame size={24} />;
  if (lower.includes('gym')) return <Dumbbell size={24} />;
  if (lower.includes('view')) return <Eye size={24} />;
  if (lower.includes('safety') || lower.includes('alarm')) return <ShieldCheck size={24} />;
  return <Sun size={24} />;
};

export default function Amenities({ amenities }: AmenitiesProps) {
  const [showAllModal, setShowAllModal] = useState(false);

  useEffect(() => {
    if (!showAllModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAllModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAllModal]);

  // Preview first 10 amenities on the main page
  const displayedAmenities = amenities.slice(0, 10);

  return (
    <div className="amenities-section">
      <h2 className="section-heading">What this place offers</h2>

      <div className="amenities-grid">
        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
            <span className="amenity-name">{amenity}</span>
          </div>
        ))}
      </div>

      {amenities.length > 10 && (
        <button
          className="outline-button show-all-amenities-btn"
          onClick={() => setShowAllModal(true)}
        >
          Show all {amenities.length} amenities
        </button>
      )}

      {/* All Amenities Modal */}
      {showAllModal && (
        <div className="modal-overlay" onClick={() => setShowAllModal(false)}>
          <div
            className="amenities-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenities-modal-title"
          >
            <div className="modal-header">
              <button
                className="close-icon-btn"
                onClick={() => setShowAllModal(false)}
                aria-label="Close amenities modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <h2 id="amenities-modal-title" className="modal-title">
                What this place offers
              </h2>

              <div className="all-amenities-list">
                {amenities.map((item, idx) => (
                  <div key={idx} className="modal-amenity-row">
                    <span className="amenity-icon">{getAmenityIcon(item)}</span>
                    <span className="amenity-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
