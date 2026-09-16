# Airbnb Listing Page Clone

A full-stack Airbnb listing page I built for a take-home assignment as part of my job application. This project demonstrates my ability to build a complete web application with a React frontend and Node.js backend, using AI tools (Claude Code) to accelerate development while maintaining code quality and originality.

---

## What I Built

I created a desktop-focused Airbnb property listing page with three main features:

1. **Listing Page** - Complete property details with photo gallery, amenities, reviews, host info, and a sticky booking card
2. **Photo Tour** - Full-screen scrollable grid showing all property photos
3. **Lightbox** - Interactive image viewer with keyboard navigation

The frontend fetches property data from a Node.js/Express backend API I built. If the backend is offline, the app gracefully falls back to local data so it always works.

---

## Tech Stack I Used

### Frontend
- **React 19** with **TypeScript** for type safety
- **Vite 6** for fast development and builds
- **CSS3** with custom variables (no frameworks like Tailwind or Bootstrap)
- **Lucide React** for icons

### Backend
- **Node.js** with **Express** framework
- **TypeScript** for both frontend and backend
- **tsx** for running TypeScript directly in Node.js
- **CORS** middleware for cross-origin requests

---

## Features I Implemented

### User Interface
- Airbnb-style header with logo, navigation, and user menu
- Search bar with location, dates, and guest inputs
- 5-image photo grid with hover zoom effects
- Property details: title, rating (4.95/127 reviews), Superhost badge, location
- Interactive save/favorite button
- Room capacity display (8 guests · 4 bedrooms · 5 beds · 3.5 baths)
- Key highlights: workspace, self check-in, great location
- Expandable property description
- Amenities section with modal to show all 20+ amenities
- Rating breakdown with category bars (Cleanliness, Accuracy, Communication, etc.)
- User review cards with avatars and dates
- Host profile with Superhost badge and contact button
- Sticky booking card with date pickers, guest counter, and live price calculation
- Comprehensive footer with links

### Interactions
- **Photo Tour**: Click "Show all photos" to see a full-screen grid of all images
- **Lightbox**: Click any photo to open it in full-screen viewer
  - Previous/Next buttons
  - Image counter (e.g., "3 / 10")
  - Keyboard shortcuts: ← → arrows to navigate, Escape to close
- **Booking Calculator**: Select dates and guest count to see the total price breakdown

### Accessibility
- Keyboard navigation works throughout
- Escape key closes modals
- Arrow keys navigate photos in lightbox
- Proper ARIA labels on buttons
- Alt text on all images
- Semantic HTML structure
- Visible focus indicators

---

## Backend API I Built

I created a simple Express server with these endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/property` | Returns complete property details |
| `GET` | `/api/property/photos` | Returns array of photo URLs |
| `GET` | `/api/property/amenities` | Returns list of amenities |
| `GET` | `/health` | Health check endpoint |

The backend uses static data stored in TypeScript files. I didn't set up a database since it wasn't needed for this assignment.

---

## Project Structure

```
├── server/               # Backend code
│   ├── data/
│   │   └── property.ts   # Property data
│   ├── routes/
│   │   └── propertyRoutes.ts  # API routes
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
│
├── src/                 # Frontend code
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── PropertyGallery.tsx
│   │   ├── PropertyInfo.tsx
│   │   ├── Amenities.tsx
│   │   ├── HostInfo.tsx
│   │   ├── BookingCard.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── PhotoTour.tsx
│   │   ├── Lightbox.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── property.ts  # TypeScript interfaces & fallback data
│   │
│   ├── App.tsx          # Main app with API fetch logic
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
│
├── ai/                  # AI workflow documentation
├── ARCHITECTURE.md      # System architecture
└── README.md           # This file
```

---

## How to Run

### Install Dependencies
```bash
npm install
```

### Run Frontend & Backend Together (Recommended)
```bash
npm run dev:all
```
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

### Or Run Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## My Development Process

I used **Claude Code** (an AI coding assistant) to help build this project. Here's how I approached it:

1. **Planning**: I broke down the requirements into components and features
2. **Implementation**: I used AI to generate component scaffolds and CSS layouts
3. **Integration**: I connected the frontend to the backend API I built
4. **Testing**: I manually tested all features (gallery, lightbox, keyboard nav, booking calculator)
5. **Review**: I reviewed the code for quality, removed unused imports, and fixed TypeScript errors

The AI helped me write code faster, but I made all the architectural decisions, reviewed every line of code, and ensured I understood how everything works so I can explain it in interviews.

---

## What I Learned

- **Full-stack development**: Building both frontend (React) and backend (Express) and connecting them
- **TypeScript**: Using types for better code quality and catching errors early
- **API design**: Creating RESTful endpoints and handling CORS
- **State management**: Using React hooks (useState, useEffect) effectively
- **Accessibility**: Making the app keyboard-navigable and screen-reader friendly
- **AI-assisted coding**: Using Claude Code as a productivity tool while maintaining code ownership

---

## Design Decisions

**Why no database?**
For this assignment, I used static data in TypeScript files. A real production app would use PostgreSQL or MongoDB, but that would be over-engineering for a take-home project.

**Why Express?**
Express is lightweight, well-documented, and perfect for building simple REST APIs. It's what most Node.js developers learn first.

**Why not Redux?**
The state management needs were simple (photo tour open/closed, current image index). React's built-in useState was sufficient. Adding Redux would have been unnecessary complexity.

**Why custom CSS?**
I wanted to demonstrate my CSS skills and match Airbnb's design closely. Using Tailwind or Bootstrap would have made it harder to achieve pixel-perfect similarity.

---

## Challenges I Faced

1. **Keyboard Navigation**: Getting the lightbox to respond to arrow keys required using useEffect with cleanup
2. **CORS**: Had to configure CORS middleware so the frontend could talk to the backend
3. **Image Loading**: Used Unsplash URLs which sometimes rate-limit; a real app would use a CDN
4. **CSS Layout**: The sticky booking card required understanding CSS position: sticky

---

## If I Had More Time

- Make it mobile-responsive
- Add a real database (PostgreSQL)
- Implement user authentication
- Add actual booking functionality with calendar
- Write unit tests with Jest and React Testing Library
- Add end-to-end tests with Playwright
- Set up CI/CD with GitHub Actions
- Deploy to Vercel (frontend) and Railway (backend)

---

## AI-Assisted Development

I used **Claude Code** throughout this project as a coding assistant. The AI helped me:

- Generate component boilerplate quickly
- Write CSS matching Airbnb's design system
- Create TypeScript interfaces
- Set up the Express server
- Debug TypeScript errors

However, **I made all the important decisions**:
- What features to build
- How to structure the code
- Which technologies to use
- How the API should work
- When code was "good enough" vs needed refinement

I can explain every part of this codebase because I reviewed and understood all the AI-generated code before using it.

---

## Why This Demonstrates My Skills

This project shows I can:

1. **Build full-stack applications** - Frontend + Backend working together
2. **Use modern tools** - React, TypeScript, Vite, Express
3. **Write clean code** - Well-organized components, proper TypeScript types
4. **Work with AI tools** - Use Claude Code to accelerate development while maintaining quality
5. **Follow requirements** - Met all the assignment specifications
6. **Think about UX** - Added loading states, error handling, keyboard navigation
7. **Document my work** - Clear README, code comments where helpful

---

## Contact

I'm a 2026 Computer Science graduate looking for software engineering roles. I'm excited about building user-facing web applications and working with modern JavaScript/TypeScript stacks.

---

## License

This project was created as a take-home assignment for educational and interview purposes.
