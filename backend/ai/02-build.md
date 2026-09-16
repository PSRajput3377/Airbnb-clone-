# Stage 2: Component Implementation & State Flow

## Prompt Used

```text
Generate the implementation for the components defined in the plan:
- Implement PropertyGallery with a 5-image asymmetric grid and "Show all photos" button
- Implement PhotoTour as a clean full-screen scrollable overlay
- Implement Lightbox with image navigation, counter, backdrop click to close, and keyboard listeners for Escape, ArrowLeft, and ArrowRight
- Implement BookingCard with dynamic price calculation based on check-in/out dates and guest counter
- Ensure strict TypeScript typing and semantic HTML
```

## AI Output & Implementation Highlights

1. **State Management**:
   - `isPhotoTourOpen`: boolean flag for full gallery overlay.
   - `isLightboxOpen`: boolean flag for single image viewer.
   - `currentImageIndex`: number index ensuring seamless transition between gallery click -> lightbox or photo tour click -> lightbox.
2. **Keyboard Handling in Lightbox**:
   ```typescript
   useEffect(() => {
     if (!isOpen) return;
     const handleKeyDown = (e: KeyboardEvent) => {
       if (e.key === 'Escape') onClose();
       else if (e.key === 'ArrowLeft') onPrevious();
       else if (e.key === 'ArrowRight') onNext();
     };
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, [isOpen, onClose, onPrevious, onNext]);
   ```
3. **Dynamic Booking Calculations**:
   - Computes number of nights dynamically from date inputs.
   - Automatically computes 14% service fee and fixed cleaning fee when nights > 0.
   - Live toggling between "Check availability" and "Reserve" CTA.
