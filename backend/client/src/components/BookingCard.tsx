import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

interface BookingCardProps {
  price: number;
  rating: number;
  reviewCount: number;
}

export default function BookingCard({ price, rating, reviewCount }: BookingCardProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const serviceFee = nights > 0 ? Math.round(price * nights * 0.14) : 0;
  const cleaningFee = nights > 0 ? 125 : 0;
  const total = nights > 0 ? price * nights + serviceFee + cleaningFee : 0;

  return (
    <div className="booking-card">
      <div className="booking-header">
        <div className="booking-price">
          <span className="price-amount">${price}</span>
          <span className="price-period">night</span>
        </div>
        <div className="booking-rating">
          <Star size={14} fill="currentColor" />
          <span className="rating-value">{rating}</span>
          <span className="rating-separator">·</span>
          <button className="reviews-link">{reviewCount} reviews</button>
        </div>
      </div>

      <div className="booking-form">
        <div className="date-inputs-row">
          <div className="date-input-wrapper">
            <label htmlFor="check-in" className="input-label">
              CHECK-IN
            </label>
            <input
              id="check-in"
              type="date"
              className="date-input"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="date-input-wrapper">
            <label htmlFor="check-out" className="input-label">
              CHECKOUT
            </label>
            <input
              id="check-out"
              type="date"
              className="date-input"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        <div className="guests-input-wrapper">
          <button
            className="guests-input"
            onClick={() => setShowGuestPicker(!showGuestPicker)}
            aria-expanded={showGuestPicker}
            aria-label="Select number of guests"
          >
            <div>
              <div className="input-label">GUESTS</div>
              <div className="guests-value">
                {guests} {guests === 1 ? 'guest' : 'guests'}
              </div>
            </div>
            {showGuestPicker ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showGuestPicker && (
            <div className="guests-dropdown">
              <div className="guest-row">
                <div>
                  <div className="guest-type">Adults</div>
                  <div className="guest-subtext">Age 13+</div>
                </div>
                <div className="guest-controls">
                  <button
                    className="guest-btn"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                    aria-label="Decrease guests"
                  >
                    -
                  </button>
                  <span className="guest-count">{guests}</span>
                  <button
                    className="guest-btn"
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    disabled={guests >= 8}
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="reserve-button">
          {nights > 0 ? 'Reserve' : 'Check availability'}
        </button>

        {nights === 0 && (
          <p className="no-charge-text">You won&apos;t be charged yet</p>
        )}

        {nights > 0 && (
          <>
            <div className="pricing-breakdown">
              <div className="pricing-row">
                <span className="pricing-label">
                  ${price} x {nights} {nights === 1 ? 'night' : 'nights'}
                </span>
                <span className="pricing-value">${price * nights}</span>
              </div>
              <div className="pricing-row">
                <span className="pricing-label">Cleaning fee</span>
                <span className="pricing-value">${cleaningFee}</span>
              </div>
              <div className="pricing-row">
                <span className="pricing-label">Service fee</span>
                <span className="pricing-value">${serviceFee}</span>
              </div>
            </div>

            <div className="pricing-total">
              <span className="total-label">Total</span>
              <span className="total-value">${total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
