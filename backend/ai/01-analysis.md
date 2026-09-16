# Stage 1: Problem Analysis & Breakdown

## Prompt Used

```text
I am a 2026 Computer Science graduate applying for a software engineering role.
I need to build an original desktop-only Airbnb listing page with React, TypeScript, and Vite.
The assignment requires 3 main experiences:
1. Listing Page (Header, Search Bar, Gallery, Property Info, Amenities, Reviews, Host Info, Booking Card, Footer)
2. Photo Tour ("Show all photos" full-screen grid view)
3. Lightbox (Interactive modal with next/prev, counter, keyboard navigation)

Analyze the requirements and help me break this down into clean, manageable components without over-engineering.
```

## AI Output & Decision Summary

1. **Architecture Choice**: Single-page React application using straightforward React state (`useState`, `useEffect`). Avoided complex state libraries (Redux, Zustand) because the state tree is localized to overlay toggles and image index.
2. **Component Breakdown**:
   - `Header.tsx`: Brand logo, navigation links, host CTA, user menu profile pill.
   - `SearchBar.tsx`: Anywhere, Any week, Add guests pill search input.
   - `PropertyGallery.tsx`: 5-image mosaic (1 large + 4 small grid) with hover transitions and "Show all photos" action trigger.
   - `PropertyInfo.tsx`: Title, ratings/review badge, superhost label, location, share/save buttons, room breakdown, key amenities highlights, AirCover card, expandable description, bed configurations.
   - `Amenities.tsx`: 2-column icon grid + full amenities modal.
   - `HostInfo.tsx`: Host avatar, Superhost badge, stats (reviews, rating, years hosting), security disclaimer.
   - `BookingCard.tsx`: Floating/sticky card, per-night rate, live date-based night calculation, guest selector with increment/decrement, breakdown of costs (nights x price, cleaning fee, service fee, total).
   - `ReviewsSection.tsx`: Overall score, category score bars (Cleanliness, Accuracy, Communication, Location, Check-in, Value), review cards.
   - `PhotoTour.tsx`: Full-screen overlay grid displaying all high-res photos.
   - `Lightbox.tsx`: Full-screen dark backdrop viewer with keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).
   - `Footer.tsx`: Support, Hosting, Airbnb links and global localized currency/language selector.
3. **Data Layer**: Defined typed interfaces in `src/data/property.ts` with mock data and Unsplash imagery.
