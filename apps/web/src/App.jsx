import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { CategoryPills } from './components/CategoryPills';
import { CampsiteCard } from './components/CampsiteCard';
import { CampsiteDetail } from './components/CampsiteDetail';
import { BookingModal } from './components/BookingModal';
import { LogisticsGuide } from './components/LogisticsGuide';
import { FeaturedVideos } from './components/FeaturedVideos';
import { TravelArticles } from './components/TravelArticles';
import { WinterEcoTour } from './components/WinterEcoTour';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { fetchCampsites, fetchDestinations } from './api/client';
import { SEED_CAMPSITES } from './data/seedCampsites';
import { Sparkles, MapPin, Compass, Flame, Filter, Heart } from 'lucide-react';

const STORAGE_WISHLIST_KEY = 'island_camping_wishlist';

export function App() {
  const [destinations, setDestinations] = useState([]);
  const [campsites, setCampsites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search state
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All Camps');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');

  // Currency state
  const [currency, setCurrency] = useState('BDT');

  // Wishlist state (persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Active view states
  const [activeCampsite, setActiveCampsite] = useState(null);
  const [bookingPayload, setBookingPayload] = useState(null);
  const [showLogistics, setShowLogistics] = useState(false);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [dests, camps] = await Promise.all([
          fetchDestinations(),
          fetchCampsites(),
        ]);
        setDestinations(dests || []);
        setCampsites(camps || []);
      } catch (err) {
        console.error('Failed to load initial data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter campsites on state change
  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await fetchCampsites({
        destination: selectedDestination,
        category: selectedCategory,
        guests: guestsCount,
        search: searchQuery,
      });
      setCampsites(results || []);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  // Re-run search when destination or category changes
  useEffect(() => {
    handleSearch();
  }, [selectedDestination, selectedCategory]);

  // Wishlist toggle handler
  const handleToggleWishlist = (campsiteId) => {
    setWishlist((prev) => {
      const updated = prev.includes(campsiteId)
        ? prev.filter((id) => id !== campsiteId)
        : [...prev, campsiteId];
      try {
        localStorage.setItem(STORAGE_WISHLIST_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Currency toggle handler
  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'BDT' ? 'USD' : 'BDT'));
  };

  // Navigation helpers
  const handleNavigateHome = () => {
    setActiveCampsite(null);
    setShowWishlistOnly(false);
    setSelectedDestination('All');
    setSelectedCategory('All Camps');
  };

  const displayedCampsites = showWishlistOnly
    ? campsites.filter((c) => wishlist.includes(c.id))
    : campsites;

  return (
    <div className="min-h-screen bg-sand-100 flex flex-col selection:bg-nature-200 selection:text-nature-900">
      
      {/* Top Sticky Navbar */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => {
          setActiveCampsite(null);
          setShowWishlistOnly(true);
        }}
        onNavigateHome={handleNavigateHome}
        onOpenLogistics={() => setShowLogistics(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeCampsite ? (
          /* Detail View */
          <CampsiteDetail
            campsite={activeCampsite}
            currency={currency}
            isWishlisted={wishlist.includes(activeCampsite.id)}
            onToggleWishlist={handleToggleWishlist}
            onBack={() => setActiveCampsite(null)}
            onOpenBookingModal={(payload) => setBookingPayload(payload)}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            guestsCount={guestsCount}
          />
        ) : (
          /* Explore / Listings View */
          <div>
            
            {/* Hero Section */}
            <div className="relative z-30 bg-gradient-to-b from-sand-200/90 to-sand-100 pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-sand-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                
                {/* Pill Tag */}
                <a
                  href="#winter-eco-tour"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('winter-eco-tour');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-campfire/15 hover:bg-campfire/25 border border-campfire/30 text-nature-950 text-xs font-extrabold uppercase tracking-wider mb-5 transition-colors"
                >
                  <Flame className="w-4 h-4 text-campfire fill-campfire" />
                  <span>শীতের বিশেষ ইকো-ট্যুর • Char Montaz → Shonar Char → Char Hare (৳2,500)</span>
                </a>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-nature-950 tracking-tight max-w-4xl mx-auto leading-[1.2] sm:leading-[1.15]">
                  Char Hare the Mysterious Island &amp; Shonar Char Eco-Tour
                </h1>

                <p className="mt-4 text-sm sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  শীতের বিশেষ অল-ইনক্লুসিভ ইকো-ট্যুর মাত্র ২,৫০০ টাকায়! চরমোন্তাজ লঞ্চঘাট থেকে ট্রলারে চরতাপুসী, চর কুসুম, চর আন্ডা ও সোনারচর হয়ে চর হেয়ারে প্রিমিয়াম তাঁবুতে রাত্রিযাপন, ৫ বেলার রাজকীয় খাবার ও বারবিকিউ নাইট।
                </p>

                {/* Floating Hipcamp Search Bar */}
                <div className="mt-8 sm:mt-10">
                  <SearchBar
                    destinations={destinations}
                    selectedDestination={selectedDestination}
                    onSelectDestination={setSelectedDestination}
                    checkInDate={checkInDate}
                    onCheckInChange={setCheckInDate}
                    checkOutDate={checkOutDate}
                    onCheckOutChange={setCheckOutDate}
                    guestsCount={guestsCount}
                    onGuestsChange={setGuestsCount}
                    onSearch={handleSearch}
                  />
                </div>
              </div>

              {/* Decorative Subtle Background Circles (isolated overflow-hidden so search popover is never clipped) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-100/30 blur-3xl rounded-full" />
              </div>
            </div>

            {/* Flagship Winter Special Eco-Tour Spotlight */}
            <WinterEcoTour
              currency={currency}
              onBookTour={() => {
                const charHareCamp =
                  campsites.find((c) => c.slug === 'char-hare-mysterious-island') ||
                  SEED_CAMPSITES[0];
                setBookingPayload({
                  campsite: charHareCamp,
                  packageType: 'all_inclusive',
                  checkIn: checkInDate || new Date().toISOString().split('T')[0],
                  checkOut:
                    checkOutDate ||
                    new Date(Date.now() + 86400000).toISOString().split('T')[0],
                  guests: guestsCount || 2,
                  nights: 1,
                  selectedAddons: [],
                  totalBdt: 2500 * (guestsCount || 2),
                });
              }}
            />

            {/* Featured Travel Experiences & Video Vlogs Section */}
            <div id="travel-vlogs">
              <FeaturedVideos />
            </div>

            {/* Travel Destination Articles & National Media Coverage */}
            <div id="travel-guides">
              <TravelArticles />
            </div>
          </div>
        )}
      </main>

      {/* Booking Checkout Modal */}
      {bookingPayload && (
        <BookingModal
          bookingPayload={bookingPayload}
          onClose={() => setBookingPayload(null)}
          currency={currency}
        />
      )}

      {/* Logistics & Boat Ghat Guide Modal */}
      {showLogistics && (
        <LogisticsGuide onClose={() => setShowLogistics(false)} />
      )}

      {/* Footer */}
      <Footer
        onOpenLogistics={() => setShowLogistics(true)}
        onSelectDestination={(dest) => {
          setSelectedDestination(dest);
          setActiveCampsite(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Global 24/7 WhatsApp Business Booking Desk */}
      <FloatingWhatsApp />
    </div>
  );
}
