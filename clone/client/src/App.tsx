import { useState, useEffect } from 'react';
import { Property } from './types/property';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyGallery from './components/PropertyGallery';
import PropertyInfo from './components/PropertyInfo';
import Amenities from './components/Amenities';
import HostInfo from './components/HostInfo';
import BookingCard from './components/BookingCard';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';


const API_URL = 'https://airbnb-clone-fo0c.onrender.com/api/property';

export default function App() {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchPropertyData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const data: Property = await response.json();
      setProperty(data);
    } catch (err) {
      console.error('Backend API unavailable or error occurred:', err);
      setError('Unable to load property data. Please ensure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNextImage = () => {
    if (property && currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="app-container">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="app-container">
        <Header />
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>{error || 'Unable to load property data.'}</p>
          <button className="outline-button" onClick={fetchPropertyData}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Top Header & Search Bar */}
      <Header />
      <SearchBar />

      {/* Main Listing Body */}
      <main className="main-content">
        {/* Photo Gallery Grid */}
        <PropertyGallery
          images={property.images}
          onShowAllPhotos={handleOpenPhotoTour}
          onImageClick={handleOpenLightbox}
        />

        {/* Content Layout: 2 Columns (Left Details, Right Sticky Booking Card) */}
        <div className="listing-layout">
          <div className="listing-details-col">
            <PropertyInfo property={property} />
            <div className="divider"></div>
            <Amenities amenities={property.amenities} />
          </div>

          <aside className="listing-booking-col">
            <div className="sticky-booking-card-wrapper">
              <BookingCard
                price={property.price}
                rating={property.rating}
                reviewCount={property.reviewCount}
              />
            </div>
          </aside>
        </div>

        <div className="divider full-width-divider"></div>

        {/* Reviews Section */}
        <ReviewsSection
          rating={property.rating}
          reviewCount={property.reviewCount}
        />

        <div className="divider full-width-divider"></div>

        {/* Host Details Section */}
        <HostInfo host={property.host} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Tour Modal Overlay */}
      <PhotoTour
        images={property.images}
        isOpen={isPhotoTourOpen}
        onClose={handleClosePhotoTour}
        onImageClick={handleOpenLightbox}
      />

      {/* Full-Screen Lightbox Viewer */}
      <Lightbox
        images={property.images}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
      />
    </div>
  );
}
