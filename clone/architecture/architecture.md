# System Architecture: Airbnb Listing Platform

This document describes both the **local implementation architecture** built for this assignment and the **conceptual production architecture** for an enterprise-scale platform.

---

## 1. Assignment Implementation Architecture

A clean, full-stack separation with React on the frontend and Express on the backend:

```
┌─────────────────────────────────────────────────────────────┐
│                    REACT FRONTEND (Vite)                    │
│                                                             │
│  - App.tsx (State: property, photo tour, lightbox, etc.)    │
│  - Components: Gallery, Info, Amenities, Host, BookingCard  │
│  - Client Fallback: static property.ts (offline resiliency) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                      HTTP / CORS (port 3001)
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXPRESS BACKEND (Node.js)                 │
│                                                             │
│  - server.ts & app.ts (CORS, JSON middleware)               │
│  - propertyRoutes.ts (REST endpoints)                       │
│  - server/data/property.ts (In-memory mock data store)      │
└─────────────────────────────────────────────────────────────┘
```

### Key Implementation Principles
- **Separation of Concerns**: Frontend handles rendering and UI interaction state; Backend serves data via REST APIs.
- **Resilience**: The frontend gracefully falls back to local data if the backend server is unreachable.
- **Simplicity**: No complex ORMs, databases, or microservice middleware—appropriate for a fresher's take-home project and easy to explain in an interview.

---

## 2. Production Architecture (Conceptual Scale)

For an enterprise production deployment handling millions of concurrent users:

```
                                    ┌─────────────┐
                                    │   USERS     │
                                    └──────┬──────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │     CDN     │
                                    │ (Cloudflare │
                                    │ /CloudFront)│
                                    └──────┬──────┘
                                           │
                        ┌──────────────────┼──────────────────┐
                        │                  │                  │
                        ▼                  ▼                  ▼
                 ┌─────────────┐    ┌─────────────┐   ┌─────────────┐
                 │   FRONTEND  │    │   IMAGES    │   │   STATIC    │
                 │   (React)   │    │  (S3 / R2)  │   │   ASSETS    │
                 │   SPA Edge  │    │             │   │             │
                 └──────┬──────┘    └─────────────┘   └─────────────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ API Gateway │
                 │ / Load Bal. │
                 └──────┬──────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
  ┌──────────┐   ┌──────────┐   ┌──────────┐
  │  Listing │   │  Booking │   │   User   │
  │  Service │   │  Service │   │  Service │
  │ (Node.js)│   │ (Node.js)│   │ (Node.js)│
  └────┬─────┘   └────┬─────┘   └────┬─────┘
       │              │              │
       └──────────────┼──────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   CACHE     │ │  DATABASE   │ │   SEARCH    │
│   (Redis)   │ │(PostgreSQL) │ │(ElasticSrch)│
│             │ │             │ │             │
│ - Hot data  │ │ - Bookings  │ │ - Geo search│
│ - Pricing   │ │ - Users     │ │ - Full text │
│ - Sessions  │ │ - Listings  │ │ - Filters   │
└─────────────┘ └─────────────┘ └─────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  PAYMENTS   │ │    EMAIL    │ │   MESSAGE   │
│   (Stripe)  │ │  (SendGrid) │ │    QUEUE    │
│             │ │             │ │(RabbitMQ/SQS│
└─────────────┘ └─────────────┘ └─────────────┘
```

### Core Production Components
1. **Edge Caching & CDN**: Distributes pre-rendered assets and caches high-res images globally (Cloudflare/CloudFront) with S3/R2 storage.
2. **API Gateway & Load Balancer**: Routes incoming traffic, enforces rate limiting, and balances load across horizontally scaled backend containers.
3. **Database Layer**: PostgreSQL for relational transactional integrity (bookings, payments) with read-replicas for read-heavy listing queries.
4. **Caching Layer**: Redis in front of the database for hot listing metadata and session state.
5. **Search Engine**: Elasticsearch / OpenSearch for geo-spatial radius searching and multi-attribute listing filters.
6. **Asynchronous Message Queue**: RabbitMQ or AWS SQS to handle asynchronous tasks (booking confirmation emails, push notifications, analytics) without blocking API response times.
