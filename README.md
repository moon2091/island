# Island Camping Bangladesh 🏕️ 🌊

> **Live Target Domain:** [islandcampingbangladesh.com](https://islandcampingbangladesh.com)  
> **Inspiration:** Hipcamp-style discovery, booking mechanics, and eco-camping aesthetics tailored for the coastal and river islands of Bangladesh.

---

## 🌟 Highlights & Capabilities
- **Hipcamp-Inspired Discovery UI:** Segmented interactive search bar (Destination, Check-in/Check-out dates, Guests counter), Category Pill Filter Carousel (Beachfront Tents, Island Glamping, Forest Camps, Lake Islands, Campfire & BBQ, Off-Grid Adventure).
- **Campsite Listings & Detail Pages:** Multi-image gallery with lightbox, verified local island hosts, comprehensive amenity tags, "How to Reach" island logistics accordion (Teknaf ferry, Sonadia speedboats, Nijhum Dwip trawlers), and sticky dynamic booking widget with add-ons (Barbecue feast, Kayak rental, Sleeping bag upgrade).
- **Interactive Checkout & Booking Flow:** Guest contact capture (WhatsApp integration), Payment selection (bKash, Nagad, Card/SSLCommerz simulator), and printable booking voucher with direct WhatsApp guide link.
- **Dual Runtime Architecture (Static/SPA + FastAPI):**
  - **Standalone Mode (Hostinger):** Built-in client-side mock store (`src/api/client.js` + `src/data/seedCampsites.js`) ensures 100% functionality on standard Hostinger Apache/Horizons web hosting without requiring a separate backend daemon.
  - **Fullstack Mode:** Python FastAPI backend with SQLAlchemy ORM, SQLite database, seed generator, and RESTful endpoints (`/api/campsites`, `/api/bookings`).

---

## 🏗️ Project Structure

```text
/Users/moon/Documents/01. Project/island/
├── .htaccess                       # Hostinger root Apache rewrite & caching rules
├── README.md
├── package.json                    # Workspace orchestration
├── backend/
│   ├── requirements.txt            # FastAPI, Uvicorn, SQLAlchemy, Pydantic
│   ├── main.py                     # FastAPI entry point & CORS
│   ├── database.py                 # SQLite database connection & session
│   ├── models.py                   # SQLAlchemy models (Destination, Campsite, Booking)
│   ├── schemas.py                  # Pydantic validation schemas
│   ├── seed_data.py                # Bangladesh island camps dataset & seeder
│   └── routers/
│       ├── campsites.py            # Listings, search & detail endpoints
│       └── bookings.py             # Booking creation & verification
└── apps/
    └── web/
        ├── index.html              # HTML5 entry with Plus Jakarta Sans & SEO meta
        ├── vite.config.js          # Vite config with React plugin & path aliases
        ├── package.json            # React 18, Tailwind CSS, Lucide React, Framer Motion
        ├── tailwind.config.js      # Custom Hipcamp nature & campfire theme tokens
        ├── postcss.config.js       # PostCSS config
        ├── public/
        │   ├── .htaccess           # SPA routing for Hostinger Horizons
        │   └── favicon.svg         # SVG island campfire favicon
        └── src/
            ├── main.jsx            # React root mount
            ├── App.jsx             # Main application orchestrator
            ├── index.css           # Tailwind base, utilities & custom scrollbars
            ├── api/
            │   └── client.js       # Resilient API client with seamless fallback
            ├── components/
            │   ├── Navbar.jsx      # Sticky navbar with currency toggle & search
            │   ├── SearchBar.jsx   # Segmented floating search bar
            │   ├── CategoryPills.jsx # Category filter pill bar
            │   ├── CampsiteCard.jsx# Listing card with multi-image slider
            │   ├── CampsiteDetail.jsx # Rich detail view with sticky booking widget
            │   ├── BookingModal.jsx# Checkout & payment modal (bKash/Nagad)
            │   ├── LogisticsGuide.jsx # Island travel, boat ghats & safety tips
            │   └── Footer.jsx      # Eco-tourism pledge, emergency contacts & links
            └── data/
                └── seedCampsites.js# Resilient offline/standalone dataset
```

---

## 🚀 Getting Started

### 1. Frontend Development
```bash
# Install frontend dependencies
npm run setup

# Start Vite dev server on http://localhost:3000
npm run dev
```

### 2. Backend Development (Optional / Fullstack Mode)
```bash
# Create and activate Python virtual environment
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run FastAPI server on http://localhost:8000
uvicorn main:app --reload --port 8000
```

### 3. Production Build
```bash
# Compile optimized production bundle into dist/
npm run build
```

---

## 🌐 Hostinger Auto-Deployment Instructions
1. Navigate to **Hostinger hPanel** > **Websites** > `islandcampingbangladesh.com`.
2. Under **Advanced** > **GIT**:
   - Repository: `https://github.com/moon2091/island.git`
   - Branch: `main`
   - Install path: `public_html`
3. Configure the Auto-Deployment webhook in your GitHub repository settings under **Webhooks**.
4. The included `.htaccess` file handles client-side routing, asset caching, and security headers automatically.
