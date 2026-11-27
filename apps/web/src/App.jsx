import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CampsiteDetail } from './components/CampsiteDetail';
import { BookingModal } from './components/BookingModal';
import { LogisticsGuide } from './components/LogisticsGuide';
import { FeaturedVideos } from './components/FeaturedVideos';
import { TravelArticles } from './components/TravelArticles';
import { WinterEcoTour } from './components/WinterEcoTour';
import { CommunitySocials } from './components/CommunitySocials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { fetchCampsites, fetchDestinations } from './api/client';
import { SEED_CAMPSITES } from './data/seedCampsites';

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

  // Load initial data once
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWinterBooking = () => {
    const charHareCamp =
      campsites.find((c) => c.slug === 'char-hare-mysterious-island') ||
      SEED_CAMPSITES[0];
    setBookingPayload({
      campsite: charHareCamp,
      packageType: 'all_inclusive',
      checkIn: checkInDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      checkOut:
        checkOutDate ||
        new Date(Date.now() + 172800000).toISOString().split('T')[0],
      guests: guestsCount || 2,
      nights: 1,
      selectedAddons: [],
      totalBdt: 2500 * (guestsCount || 2),
    });
  };

  const handleSelectFooterDestination = (destName) => {
    if (destName === 'Char Hare' || destName === 'Char Heyar') {
      setActiveCampsite(null);
      setTimeout(() => {
        const el = document.getElementById('winter-eco-tour');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    const pool = campsites.length ? campsites : SEED_CAMPSITES;
    const match = pool.find(
      (c) =>
        c.destination?.name?.toLowerCase() === destName.toLowerCase() ||
        c.title?.toLowerCase().includes(destName.toLowerCase())
    );
    if (match) {
      setActiveCampsite(match);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleNavigateHome();
    }
  };

  return (
    <div className="min-h-screen bg-sand-100 flex flex-col selection:bg-nature-200 selection:text-nature-900">
      
      {/* Top Sticky Navbar */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onBookNow={handleOpenWinterBooking}
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
            {/* Flagship Winter Special Eco-Tour Spotlight */}
            <WinterEcoTour
              currency={currency}
              onBookTour={handleOpenWinterBooking}
            />

            {/* Featured Travel Experiences & Video Vlogs Section */}
            <div id="travel-vlogs">
              <FeaturedVideos />
            </div>

            {/* Travel Destination Articles & National Media Coverage */}
            <div id="travel-guides">
              <TravelArticles />
            </div>

            {/* Char Hare WhatsApp Community (QR + Link) & Facebook / Instagram Focus */}
            <CommunitySocials />
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
        onSelectDestination={handleSelectFooterDestination}
      />

      {/* Global 24/7 WhatsApp Business Booking Desk */}
      <FloatingWhatsApp />
    </div>
  );
}
