import React, { useState } from 'react';
import {
  Star,
  Heart,
  Share2,
  MapPin,
  Anchor,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Flame,
  ChevronDown,
  ChevronUp,
  X,
  Compass,
  Info,
  Clock,
  Tent,
  Waves,
  Sun,
  Droplets,
  LifeBuoy,
  Sparkles,
} from 'lucide-react';
import { ADDONS_LIST } from '../data/seedCampsites';

export function CampsiteDetail({
  campsite,
  currency = 'BDT',
  isWishlisted,
  onToggleWishlist,
  onBack,
  onOpenBookingModal,
  checkInDate: initialCheckIn,
  checkOutDate: initialCheckOut,
  guestsCount: initialGuests,
}) {
  const [checkIn, setCheckIn] = useState(initialCheckIn || '');
  const [checkOut, setCheckOut] = useState(initialCheckOut || '');
  const [guests, setGuests] = useState(initialGuests || 2);
  const [selectedAddons, setSelectedAddons] = useState({
    bbq: true,
    kayak: false,
    sleeping_bag: false,
  });
  const [activeAccordion, setActiveAccordion] = useState('boats'); // 'boats' | 'tides' | 'rules'
  const [lightboxImg, setLightboxImg] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const images = campsite.images || [];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();

  // Price calculations
  const basePriceBdt = campsite.price_per_night * nights;
  let addonsTotalBdt = 0;
  if (selectedAddons.bbq) addonsTotalBdt += 650 * guests;
  if (selectedAddons.kayak) addonsTotalBdt += 400;
  if (selectedAddons.sleeping_bag) addonsTotalBdt += 250 * guests;

  const totalBdt = basePriceBdt + addonsTotalBdt;

  const formatPrice = (amount) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 118)}`;
    }
    return `৳${amount.toLocaleString()}`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleToggleAddon = (addonId) => {
    setSelectedAddons((prev) => ({
      ...prev,
      [addonId]: !prev[addonId],
    }));
  };

  const handleBookNow = () => {
    onOpenBookingModal({
      campsite,
      checkIn: checkIn || new Date().toISOString().split('T')[0],
      checkOut: checkOut || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      guests,
      nights,
      selectedAddons,
      totalBdt,
    });
  };

  return (
    <div className="bg-sand-100 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="text-xs sm:text-sm font-bold text-nature-800 hover:text-nature-950 flex items-center gap-1.5 transition-colors"
          >
            &larr; Back to all campsites
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white border border-sand-300 text-stone-700 hover:bg-sand-200 transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Copy link"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={() => onToggleWishlist(campsite.id)}
              className="p-2 rounded-full bg-white border border-sand-300 text-stone-700 hover:bg-sand-200 transition-colors text-xs font-semibold flex items-center gap-1.5"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'fill-campfire text-campfire' : ''
                }`}
              />
              <span className="hidden sm:inline">
                {isWishlisted ? 'Saved' : 'Save'}
              </span>
            </button>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-nature-100 text-nature-900 text-xs font-bold">
              {campsite.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand-200 text-stone-700 text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-nature-800" />
              {campsite.destination?.name}, {campsite.destination?.district}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-nature-950 tracking-tight">
            {campsite.title}
          </h1>

          <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-stone-600">
            <div className="flex items-center gap-1 font-bold text-stone-900">
              <Star className="w-4 h-4 fill-campfire-amber text-campfire-amber" />
              <span>{campsite.rating || 4.9}</span>
              <span className="text-stone-500 font-normal">
                ({campsite.review_count || 38} verified reviews)
              </span>
            </div>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Anchor className="w-4 h-4 text-stone-500" />
              <span>{campsite.ghat_info}</span>
            </span>
          </div>
        </div>

        {/* 5-Photo Mosaic Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden mb-10 h-72 sm:h-[420px]">
          {/* Main big image */}
          <div
            onClick={() => setLightboxImg(images[0])}
            className="md:col-span-2 relative cursor-pointer group overflow-hidden bg-stone-300"
          >
            <img
              src={images[0]}
              alt={campsite.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right 4 smaller images */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-3">
            {images.slice(1, 5).map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImg(img)}
                className="relative cursor-pointer group overflow-hidden bg-stone-300"
              >
                <img
                  src={img}
                  alt={`${campsite.title} photo ${idx + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout (2 Columns: Details + Sticky Booking Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (2 spans): Details, Amenities, Logistics */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Host Banner */}
            <div className="p-5 rounded-2xl bg-white border border-sand-300 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-nature-800 text-white font-extrabold text-xl flex items-center justify-center ring-4 ring-nature-100">
                  {campsite.host_name ? campsite.host_name.charAt(0) : 'H'}
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-stone-900 flex items-center gap-1.5">
                    Hosted by {campsite.host_name}
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {campsite.host_badge || 'Verified Island Guide & Marine Warden'}
                  </p>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs font-bold text-nature-900 bg-nature-100 px-3 py-1.5 rounded-full">
                  100% Verified Island Host
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-extrabold text-nature-950 mb-3">About this Island Camp</h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {campsite.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div>
              <h2 className="text-xl font-extrabold text-nature-950 mb-4">Camp Amenities & Essentials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {campsite.amenities?.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-sand-300 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-nature-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-stone-800">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Island Logistics Accordion */}
            <div className="bg-white rounded-2xl border border-sand-300 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-sand-300 bg-sand-200/50 flex items-center gap-2">
                <Compass className="w-5 h-5 text-nature-900" />
                <h3 className="font-extrabold text-stone-900 text-lg">
                  Island Logistics & How to Reach
                </h3>
              </div>

              {/* Accordion Item 1: Boat Schedule */}
              <div className="border-b border-sand-200">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'boats' ? null : 'boats')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-stone-800 hover:bg-sand-100 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-nature-800" />
                    Boat & Trawler Timings from Mainland Ghats
                  </span>
                  {activeAccordion === 'boats' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'boats' && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 space-y-2 bg-sand-50/50">
                    <p className="font-medium text-stone-900">{campsite.boat_schedule || campsite.destination?.boat_schedule}</p>
                    <p className="text-stone-500">
                      <strong>Ghat Terminal:</strong> {campsite.destination?.ghat_name}. Our island camp team will meet you at the island landing point.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2: Tide & Weather */}
              <div className="border-b border-sand-200">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'tides' ? null : 'tides')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-stone-800 hover:bg-sand-100 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-nature-800" />
                    Ocean Tides & Seasonal Crossing Advisories
                  </span>
                  {activeAccordion === 'tides' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'tides' && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 space-y-2 bg-sand-50/50">
                    <p>
                      High tide allows direct jetty docking; low tide requires small transfer dinghies or mudflat walking boards. Island crossings operate during daylight hours only.
                    </p>
                    <p className="text-campfire font-semibold">
                      Best season for calm seas: November to March.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3: Island Rules */}
              <div>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'rules' ? null : 'rules')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-stone-800 hover:bg-sand-100 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-campfire" />
                    Campground Rules & Eco-Tourism Pledge
                  </span>
                  {activeAccordion === 'rules' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'rules' && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 space-y-2 bg-sand-50/50">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Strict Leave-No-Trace: Pack out all non-biodegradable plastics and batteries.</li>
                      <li>Quiet hours after 11:00 PM to respect nesting marine wildlife.</li>
                      <li>Campfire only allowed in designated stone/iron fire circles.</li>
                      <li>Alcohol & narcotics strictly prohibited on local community islands.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Verified Reviews Section */}
            <div>
              <h2 className="text-xl font-extrabold text-nature-950 mb-4 flex items-center gap-2">
                <span>Camper Reviews</span>
                <span className="text-sm font-semibold text-stone-500">
                  ★ {campsite.rating || 4.9} ({campsite.review_count || 38})
                </span>
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-sand-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-stone-900 text-sm">Tanvir Chowdhury</div>
                    <div className="text-xs text-stone-400">January 2026</div>
                  </div>
                  <div className="flex text-campfire-amber mb-2 text-xs">★★★★★</div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    "Unbelievable experience! Stargazing from the tent porch while hearing the waves break on Saint Martin coral reef was surreal. Host provided hot coral fish BBQ and solar chargers worked perfectly."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-stone-900 text-sm">Fariha Tasnim</div>
                    <div className="text-xs text-stone-400">December 2025</div>
                  </div>
                  <div className="flex text-campfire-amber mb-2 text-xs">★★★★★</div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    "Very safe for female solo travelers and couples. The host accompanied us from the ghat and ensured clean bio-toilets and fresh drinking water. Highly recommend the kayak upgrade!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (1 span): Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 border border-sand-300 shadow-float">
              
              {/* Price Header */}
              <div className="flex items-baseline justify-between pb-4 border-b border-sand-300 mb-5">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-nature-950">
                    {formatPrice(campsite.price_per_night)}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-500 font-medium"> / night</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-stone-900">
                  <Star className="w-4 h-4 fill-campfire-amber text-campfire-amber" />
                  <span>{campsite.rating || 4.9}</span>
                </div>
              </div>

              {/* Booking Inputs */}
              <div className="space-y-4 mb-6">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-2 bg-sand-100 p-2.5 rounded-2xl border border-sand-300">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-stone-900 focus:outline-none mt-0.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-stone-900 focus:outline-none mt-0.5"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="bg-sand-100 p-3 rounded-2xl border border-sand-300 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Campers</div>
                    <div className="text-xs font-bold text-stone-900">{guests} Guests</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-7 h-7 rounded-full bg-white border border-sand-300 flex items-center justify-center font-bold text-xs hover:bg-sand-200"
                    >
                      -
                    </button>
                    <span className="font-bold text-xs w-4 text-center">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(campsite.capacity || 4, guests + 1))}
                      className="w-7 h-7 rounded-full bg-white border border-sand-300 flex items-center justify-center font-bold text-xs hover:bg-sand-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Optional Island Add-ons */}
                <div>
                  <div className="text-xs font-extrabold text-stone-800 uppercase tracking-wider mb-2">
                    Optional Island Experiences & Add-ons
                  </div>
                  <div className="space-y-2">
                    {ADDONS_LIST.map((addon) => (
                      <div
                        key={addon.id}
                        onClick={() => handleToggleAddon(addon.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedAddons[addon.id]
                            ? 'bg-nature-50 border-nature-800'
                            : 'bg-white border-sand-300 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2">
                            <input
                              type="checkbox"
                              checked={!!selectedAddons[addon.id]}
                              onChange={() => {}}
                              className="mt-0.5 rounded text-nature-800 focus:ring-nature-800"
                            />
                            <div>
                              <div className="text-xs font-bold text-stone-900 leading-tight">
                                {addon.title}
                              </div>
                              <div className="text-[11px] text-stone-500 mt-0.5">
                                {addon.description}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold text-nature-900 shrink-0 ml-2">
                            +{formatPrice(addon.price)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="space-y-2 py-4 border-t border-sand-300 text-xs sm:text-sm text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span>
                    {formatPrice(campsite.price_per_night)} x {nights} night{nights > 1 ? 's' : ''}
                  </span>
                  <span className="font-semibold text-stone-900">
                    {formatPrice(basePriceBdt)}
                  </span>
                </div>

                {addonsTotalBdt > 0 && (
                  <div className="flex justify-between">
                    <span>Selected Add-ons</span>
                    <span className="font-semibold text-stone-900">
                      {formatPrice(addonsTotalBdt)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-emerald-700">
                  <span>Platform & Island Warden Fee</span>
                  <span className="font-bold">FREE (৳0)</span>
                </div>

                <div className="pt-2 border-t border-sand-300 flex justify-between text-base font-extrabold text-stone-950">
                  <span>Total Amount</span>
                  <span className="text-nature-950">{formatPrice(totalBdt)}</span>
                </div>
              </div>

              {/* Instant Book CTA */}
              <button
                onClick={handleBookNow}
                className="w-full py-4 bg-campfire hover:bg-campfire-hover text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
              >
                <Flame className="w-5 h-5 fill-white" />
                <span>Instant Book Camp</span>
              </button>

              <p className="text-center text-[11px] text-stone-500 mt-3">
                Zero booking fees &bull; Instant WhatsApp confirmation voucher
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Fullscreen view"
            className="max-w-5xl max-h-[85vh] w-auto h-auto rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
