import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { CategoryPills } from './components/CategoryPills';
import { CampsiteCard } from './components/CampsiteCard';
import { CampsiteDetail } from './components/CampsiteDetail';
import { BookingModal } from './components/BookingModal';
import { LogisticsGuide } from './components/LogisticsGuide';
import { Footer } from './components/Footer';
import { fetchCampsites, fetchDestinations } from './api/client';
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
            <div className="relative bg-gradient-to-b from-sand-200/90 to-sand-100 pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-sand-300 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nature-100 border border-nature-200 text-nature-900 text-xs font-extrabold uppercase tracking-wider mb-5">
                  <Flame className="w-4 h-4 text-campfire" />
                  <span>The Hipcamp of Bangladesh Islands</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-nature-950 tracking-tight max-w-4xl mx-auto leading-[1.15]">
                  Pitch Your Tent Under the Stars on Bangladesh's Remote Islands
                </h1>

                <p className="mt-4 text-sm sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Discover beachfront dome tents, Keora forest wilderness camps, and emerald lake glamping across Saint Martin's, Sonadia, Nijhum Dwip, and Kaptai Lake.
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

              {/* Decorative Subtle Background Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-100/30 blur-3xl pointer-events-none rounded-full" />
            </div>

            {/* Category Filter Pills Bar */}
            <CategoryPills
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Campsites Grid Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              
              {/* Header with results count & filter status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-nature-950">
                    {showWishlistOnly
                      ? 'Saved Wishlist Campsites'
                      : selectedDestination !== 'All'
                      ? `Campsites in ${selectedDestination}`
                      : 'All Island Camping Experiences'}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    {displayedCampsites.length} verified eco-camp
                    {displayedCampsites.length === 1 ? '' : 's'} available
                  </p>
                </div>

                {/* Reset / Wishlist toggles */}
                <div className="flex items-center gap-2">
                  {showWishlistOnly && (
                    <button
                      onClick={() => setShowWishlistOnly(false)}
                      className="text-xs font-bold text-nature-800 bg-sand-200 hover:bg-sand-300 px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      &larr; View all camps
                    </button>
                  )}

                  {(selectedDestination !== 'All' || selectedCategory !== 'All Camps') && (
                    <button
                      onClick={() => {
                        setSelectedDestination('All');
                        setSelectedCategory('All Camps');
                      }}
                      className="text-xs font-bold text-campfire hover:text-campfire-hover transition-colors"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>

              {/* Listings Grid */}
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="bg-white rounded-2xl h-80 animate-pulse border border-sand-300"
                    />
                  ))}
                </div>
              ) : displayedCampsites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {displayedCampsites.map((campsite) => (
                    <CampsiteCard
                      key={campsite.id}
                      campsite={campsite}
                      currency={currency}
                      isWishlisted={wishlist.includes(campsite.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onClick={() => setActiveCampsite(campsite)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-16 bg-white rounded-3xl border border-sand-300 p-8 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-full bg-sand-200 text-stone-400 mx-auto flex items-center justify-center mb-4">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    No island campsites match your filter
                  </h3>
                  <p className="text-xs text-stone-500 mb-6">
                    Try clearing your destination or category filter to discover all coastal and lake camps across Bangladesh.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDestination('All');
                      setSelectedCategory('All Camps');
                      setShowWishlistOnly(false);
                    }}
                    className="px-5 py-2.5 bg-nature-900 text-white rounded-xl text-xs font-bold hover:bg-nature-800 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </section>
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
    </div>
  );
}
