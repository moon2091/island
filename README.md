# Char Hare the Mysterious Island | Island Camping Bangladesh 🏕️ 🌊

> **Live Target Domain:** [islandcampingbangladesh.com](https://islandcampingbangladesh.com)  
> **Core Focus:** Authentic outdoor and beach camping on **Char Hare (চর হেয়ার)**, Shonar Char, Jahaj Mara, Char Montaz homestays, and the indigenous Manta Community water nomad lifestyle in southern Bangladesh.

---

## 🌟 Highlights & Platform Features

### 1. Char Hare the Mysterious Island (চর হেয়ার)
- **Prime Location:** Secluded sandbar island south of Rangabali / Char Montaz in Patuakhali, surrounded by the Bay of Bengal.
- **Wooden Watchtower:** Island's sole wooden watchtower offering 360-degree views of millions of red crabs, sand dunes, jhau forest, and rolling ocean surf.
- **Authentic 4-Meal Plan Included:**
  - **Lunch (দুপুর ২:০০-৩:০০ টা):** Rice + Marine fish/Chicken + 2 freshly pounded vortas + Daal.
  - **Afternoon Snack (বিকাল ৬:০০-৮:০০ টা):** Spicy Muri Makha with Chanachur and mustard oil.
  - **Night BBQ (রাত ১০:০০-১১:০০ টা):** Freshly caught Coral/marine fish or chicken BBQ + 3 hot ruti/parathas + special sauce + salad.
  - **Breakfast (সকাল):** Authentic Bhuna Khichuri + Egg + Chili vorta + Potato vorta + Salad.
- **Pricing Packages:**
  - **Regular Package (রেগুলার প্যাকেজ):** ৳1,500 / person / night (Tent sharing for 2, foam, pillow, blanket, all 4 meals, watchtower access).
  - **Special Package (স্পেশাল প্যাকেজ):** ৳2,000 / person / night (Chicken AND sea fish at lunch, extra dinner at 8:00-9:00 PM).
- **Facilities & Safety:**
  - 5 full-time dedicated island crew + nighttime security guard patrol.
  - 3 large wooden machangs (lounging decks) + 30+ hammocks + 40+ canvas tents.
  - 3 clean low-commode washrooms + 2 tube-wells with sweet drinking water.
  - Ukulele, cajon, hand buoys, and acoustic soundbox for beachside musical evenings.
  - Total solitude: private beach experience with zero neighboring campsites.

### 2. Exclusive Destinations
- **Char Hare (চর হেয়ার):** Wild beach tents, red crab colonies, and watchtower stargazing.
- **Shonar Char (সোনার চর):** "Golden Island" with mangrove deer trails, endless sandy beaches, and sunrise/sunset view.
- **Jahaj Mara (জাহাজ মারা):** Calm estuary beaches, pine groves, and peaceful solitude.
- **Char Montaz (চর মোন্তাজ):** Traditional island village homestays, cycling on dykes, and fresh duck curry/hilsa.
- **Manta Community (মান্তা যাযাবর সম্প্রদায়):** Cultural boat life experience with the indigenous water nomads living on traditional roofed wooden boats in Char Montaz and Char Hare canals.
- **Kuakata (কুয়াকাটা):** Launchpad and luxury coastal glamping hub.

---

## 🏗️ Project Architecture

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
│   ├── seed_data.py                # Char Hare & Southern Islands dataset & seeder
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
            │   ├── SearchBar.jsx   # Segmented floating search bar with popover fix
            │   ├── CategoryPills.jsx # Category filter pill bar
            │   ├── CampsiteCard.jsx# Listing card with multi-image slider
            │   ├── CampsiteDetail.jsx # Rich detail view with package switch & meals
            │   ├── BookingModal.jsx# Checkout & payment modal (bKash/Nagad)
            │   ├── LogisticsGuide.jsx # Dhaka to Char Montaz/Char Hare route & trawler guide
            │   └── Footer.jsx      # Eco-tourism pledge, emergency contacts & links
            └── data/
                └── seedCampsites.js# Resilient offline/standalone dataset
```

---

## 🚀 Getting Started

### 1. Frontend Development
```bash
npm run dev
```

### 2. Backend Development (FastAPI Mode)
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

### 3. Production Build
```bash
npm run build
```
