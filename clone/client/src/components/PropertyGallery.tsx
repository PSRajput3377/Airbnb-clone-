import { Grid } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  onShowAllPhotos: () => void;
  onImageClick: (index: number) => void;
}

export default function PropertyGallery({ images, onShowAllPhotos, onImageClick }: PropertyGalleryProps) {
  return (
    <div className="property-gallery">
      <div className="gallery-main" onClick={() => onImageClick(0)}>
        <img src={images[0]} alt="Main property view" />
      </div>
      <div className="gallery-grid">
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => onImageClick(index + 1)}
          >
            <img src={image} alt={`Property view ${index + 2}`} />
          </div>
        ))}
      </div>
      <button className="show-all-photos" onClick={onShowAllPhotos}>
        <Grid size={16} />
        Show all photos
      </button>
    </div>
  );
}
