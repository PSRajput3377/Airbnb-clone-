import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
}

interface Review {
  id: string;
  author: string;
  date: string;
  avatar: string;
  content: string;
  rating: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Emily Watson',
    date: 'August 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    content: 'The views from this villa are simply unbelievable. We spent hours watching dolphins from the infinity pool deck. Sarah was an exceptional host, super responsive and had great local dining recommendations. Cannot wait to return!',
    rating: 5,
  },
  {
    id: '2',
    author: 'Michael Chang',
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Absolute paradise! The kitchen had everything we needed to cook gourmet dinners with panoramic ocean sunsets. Beds were cloud-level comfortable. 10/10 stay.',
    rating: 5,
  },
  {
    id: '3',
    author: 'Sophia Martinez',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    content: 'Worth every single penny. Direct beach access and the heated pool made our family holiday unforgettable. Check-in was completely seamless with the smart keypad.',
    rating: 5,
  },
  {
    id: '4',
    author: 'David Reynolds',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'Stunning modern architecture, ultra clean, and peaceful. Working remotely from the living room overlooking the Pacific was a dream. Fast wifi too!',
    rating: 5,
  },
];

export default function ReviewsSection({ rating, reviewCount }: ReviewsSectionProps) {
  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <Star size={22} fill="currentColor" className="star-icon-reviews" />
        <h2 className="reviews-title">
          {rating} · {reviewCount} reviews
        </h2>
      </div>

      {/* Ratings Categories Grid */}
      <div className="rating-bars-grid">
        <div className="rating-bar-item">
          <span className="rating-category">Cleanliness</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '98%' }}></div>
            </div>
            <span className="rating-score">4.9</span>
          </div>
        </div>

        <div className="rating-bar-item">
          <span className="rating-category">Accuracy</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '98%' }}></div>
            </div>
            <span className="rating-score">4.9</span>
          </div>
        </div>

        <div className="rating-bar-item">
          <span className="rating-category">Communication</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '100%' }}></div>
            </div>
            <span className="rating-score">5.0</span>
          </div>
        </div>

        <div className="rating-bar-item">
          <span className="rating-category">Location</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '98%' }}></div>
            </div>
            <span className="rating-score">4.9</span>
          </div>
        </div>

        <div className="rating-bar-item">
          <span className="rating-category">Check-in</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '100%' }}></div>
            </div>
            <span className="rating-score">5.0</span>
          </div>
        </div>

        <div className="rating-bar-item">
          <span className="rating-category">Value</span>
          <div className="rating-progress-row">
            <div className="rating-bar-track">
              <div className="rating-bar-fill" style={{ width: '96%' }}></div>
            </div>
            <span className="rating-score">4.8</span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="reviews-cards-grid">
        {mockReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-author-info">
              <img
                src={review.avatar}
                alt={review.author}
                className="review-author-avatar"
              />
              <div>
                <h3 className="review-author-name">{review.author}</h3>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <p className="review-content">{review.content}</p>
          </div>
        ))}
      </div>

      <button className="outline-button show-all-reviews-btn">
        Show all {reviewCount} reviews
      </button>
    </div>
  );
}
