import { useState } from 'react';
import { Star, Share, Heart, Award, Key, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyInfoProps {
  property: Property;
}

export default function PropertyInfo({ property }: PropertyInfoProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="property-info-section">
      {/* Title & Actions */}
      <div className="property-header">
        <h1 className="property-title">{property.title}</h1>
        <div className="property-sub-header">
          <div className="property-stats">
            <span className="stat-item rating">
              <Star size={14} className="star-icon fill-current" />
              <strong>{property.rating}</strong>
            </span>
            <span className="stat-separator">·</span>
            <button className="link-button reviews-link">
              {property.reviewCount} reviews
            </button>
            <span className="stat-separator">·</span>
            {property.host.isSuperhost && (
              <>
                <span className="superhost-tag">
                  <Award size={14} /> Superhost
                </span>
                <span className="stat-separator">·</span>
              </>
            )}
            <button className="link-button location-link">
              {property.location}
            </button>
          </div>

          <div className="property-actions">
            <button className="action-button" aria-label="Share property">
              <Share size={16} />
              <span>Share</span>
            </button>
            <button
              className={`action-button ${isSaved ? 'saved' : ''}`}
              onClick={() => setIsSaved(!isSaved)}
              aria-label={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
            >
              <Heart size={16} fill={isSaved ? '#FF385C' : 'none'} color={isSaved ? '#FF385C' : 'currentColor'} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Info Columns */}
      <div className="property-main-details">
        {/* Host Summary & Capacity */}
        <div className="host-summary-row">
          <div>
            <h2 className="room-type-title">
              Entire villa hosted by {property.host.name}
            </h2>
            <p className="room-capacities">
              {property.guests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.baths} baths
            </p>
          </div>
          <div className="host-avatar-wrapper">
            <img
              src={property.host.avatar}
              alt={property.host.name}
              className="host-avatar-img"
            />
            {property.host.isSuperhost && (
              <span className="superhost-badge-icon" title="Superhost">
                <Award size={12} color="#fff" />
              </span>
            )}
          </div>
        </div>

        <div className="divider"></div>

        {/* Listing Highlights */}
        <div className="highlights-list">
          <div className="highlight-item">
            <div className="highlight-icon">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="highlight-title">Dedicated workspace</h3>
              <p className="highlight-desc">A common area with wifi that’s well-suited for working.</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <Key size={24} />
            </div>
            <div>
              <h3 className="highlight-title">Self check-in</h3>
              <p className="highlight-desc">Check yourself in with the smart lock keypad.</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="highlight-title">Great location</h3>
              <p className="highlight-desc">95% of recent guests gave the location a 5-star rating.</p>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* AirCover Protection Box */}
        <div className="aircover-section">
          <div className="aircover-header">
            <span className="aircover-red">air</span>
            <span className="aircover-black">cover</span>
          </div>
          <p className="aircover-text">
            Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
          </p>
          <button className="link-button learn-more">Learn more</button>
        </div>

        <div className="divider"></div>

        {/* Description */}
        <div className="description-section">
          <p className={`description-text ${!showFullDescription ? 'truncated' : ''}`}>
            {property.description}
          </p>
          <button
            className="show-more-button"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            <span>{showFullDescription ? 'Show less' : 'Show more'}</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="divider"></div>

        {/* Where you'll sleep */}
        <div className="sleeping-section">
          <h2 className="section-heading">Where you&apos;ll sleep</h2>
          <div className="sleeping-cards-grid">
            <div className="sleep-card">
              <div className="sleep-card-icon">🛏️</div>
              <h3 className="sleep-card-title">Bedroom 1</h3>
              <p className="sleep-card-sub">1 king bed</p>
            </div>
            <div className="sleep-card">
              <div className="sleep-card-icon">🛏️</div>
              <h3 className="sleep-card-title">Bedroom 2</h3>
              <p className="sleep-card-sub">1 queen bed</p>
            </div>
            <div className="sleep-card">
              <div className="sleep-card-icon">🛏️</div>
              <h3 className="sleep-card-title">Bedroom 3</h3>
              <p className="sleep-card-sub">2 single beds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
