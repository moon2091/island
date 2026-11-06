import React, { useState } from 'react';
import {
  Compass,
  Flame,
  Heart,
  Menu,
  X,
  Shield,
  PhoneCall,
  MapPin,
  Youtube,
  Newspaper,
  MessageCircle,
} from 'lucide-react';

export function Navbar({
  currency,
  onToggleCurrency,
  wishlistCount,
  onOpenWishlist,
  onNavigateHome,
  onOpenLogistics,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  const whatsappUrl =
    'https://wa.me/8801713880032?text=Hello%20Island%20Camping%20BD%2C%20I%20want%20to%20inquire%20about%20Char%20Hare%20and%20southern%20island%20camps%20(Booking%20%26%20Queries)';

  return (
    <>
      <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur-md border-b border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3 sm:gap-4">
            
            {/* 1. Left: Brand Logo (Always shrink-0 and clean single-line) */}
            <div
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 select-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-nature-900 flex items-center justify-center text-campfire shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-campfire" />
              </div>
              <div className="flex flex-col shrink-0 justify-center">
                <div className="font-extrabold text-lg sm:text-xl tracking-tight text-nature-950 flex items-center gap-1.5 whitespace-nowrap leading-none">
                  <span>Island Camping</span>
                  <span className="text-campfire font-black">BD</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-stone-500 tracking-wider uppercase mt-1 whitespace-nowrap leading-none">
                  Eco Adventure & Glamping
                </span>
              </div>
            </div>

            {/* 2. Center: Desktop Navigation Links (Clean, single-line, visible on XL screens) */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
              <a
                href="#travel-vlogs"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('travel-vlogs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-stone-700 hover:text-nature-900 text-xs 2xl:text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200 whitespace-nowrap shrink-0"
              >
                <Youtube className="w-4 h-4 text-red-600 shrink-0" />
                <span>Travel Vlogs</span>
              </a>

              <a
                href="#travel-guides"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('travel-guides');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-stone-700 hover:text-nature-900 text-xs 2xl:text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200 whitespace-nowrap shrink-0"
              >
                <Newspaper className="w-4 h-4 text-nature-800 shrink-0" />
                <span>Travel Guides</span>
              </a>

              <button
                onClick={onOpenLogistics}
                className="text-stone-700 hover:text-nature-900 text-xs 2xl:text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200 whitespace-nowrap shrink-0"
              >
                <MapPin className="w-4 h-4 text-nature-800 shrink-0" />
                <span>Boat Logistics</span>
              </button>

              <button
                onClick={() => setHostModalOpen(true)}
                className="text-stone-700 hover:text-nature-900 text-xs 2xl:text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200 whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4 text-nature-800 shrink-0" />
                <span>Host a Camp</span>
              </button>
            </nav>

            {/* 3. Right: Action Buttons Group (WhatsApp Desk + Currency + Wishlist + Hamburger) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Official WhatsApp Business Hotline (Compact & High Priority) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 font-black text-xs shadow-sm transition-all transform hover:scale-102 active:scale-95 whitespace-nowrap shrink-0"
                title="Direct Booking on WhatsApp (+8801713880032)"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950 shrink-0" />
                <span>WhatsApp: +8801713880032</span>
              </a>

              {/* Currency Toggle */}
              <button
                onClick={onToggleCurrency}
                className="hidden sm:flex items-center gap-1 text-xs font-bold text-stone-700 bg-sand-200 hover:bg-sand-300 px-3 py-1.5 rounded-full border border-sand-400 transition-colors whitespace-nowrap shrink-0"
                title="Toggle BDT / USD currency"
              >
                {currency === 'BDT' ? '🇧🇩 BDT' : '🌐 USD'}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-full text-stone-700 hover:text-campfire hover:bg-sand-200 transition-colors shrink-0"
                title="Saved campsites"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-campfire text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-sand-50 animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Mobile / Tablet Menu Button (Visible below XL screens) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-stone-700 hover:bg-sand-200 focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu (xl:hidden) */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-sand-300 bg-sand-50 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* WhatsApp Booking Link Mobile */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-black text-emerald-950 bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950" />
              <span>Direct Booking & Query: +8801713880032</span>
            </a>

            <a
              href="#travel-vlogs"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('travel-vlogs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2 text-stone-800 font-semibold"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              <span>Travel Vlogs & Experiences (ভিডিও)</span>
            </a>

            <a
              href="#travel-guides"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('travel-guides');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2 text-stone-800 font-semibold"
            >
              <Newspaper className="w-5 h-5 text-nature-800" />
              <span>Travel Guides & Media (মিডিয়া ও গাইড)</span>
            </a>

            <button
              onClick={() => {
                onOpenLogistics();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2 text-stone-800 font-semibold"
            >
              <MapPin className="w-5 h-5 text-nature-800" />
              <span>Island Boat Logistics & Schedules</span>
            </button>

            <button
              onClick={() => {
                setHostModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2 text-stone-800 font-semibold"
            >
              <Compass className="w-5 h-5 text-nature-800" />
              <span>Host an Island Campsite</span>
            </button>

            <div className="flex items-center justify-between pt-2 border-t border-sand-200">
              <span className="text-sm font-medium text-stone-600">Currency</span>
              <button
                onClick={onToggleCurrency}
                className="text-xs font-bold text-stone-800 bg-sand-200 px-3 py-1.5 rounded-full"
              >
                {currency === 'BDT' ? '🇧🇩 BDT (৳)' : '🌐 USD ($)'}
              </button>
            </div>

            <a
              href="tel:999"
              className="w-full flex items-center justify-center gap-2 py-2.5 mt-2 text-xs font-bold text-white bg-nature-900 rounded-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Coast Guard & Emergency (999)</span>
            </a>
          </div>
        )}
      </header>

      {/* Host a Camp Modal */}
      {hostModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-sand-50 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-sand-300 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setHostModalOpen(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-sand-200"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-nature-100 flex items-center justify-center text-nature-900 mb-4">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-nature-950 mb-2">
              Host an Island Camp in Bangladesh
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              Do you operate eco-camps, wooden boat stays, or island homestays in Char Hare, Shonar Char, Char Montaz, Jahaj Mara, or Kuakata? Join our verified network of sustainable island hosts.
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-3.5 bg-sand-200 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-nature-800 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700">
                  <span className="font-bold block text-stone-900">Verified Host Protection</span>
                  Free host onboarding, safety guidelines, and direct booking settlement via bKash Merchant.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/8801713880032?text=Hello%2C%20I%20am%20interested%20in%20listing%20my%20island%20campsite%20on%20Island%20Camping%20Bangladesh."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-nature-900 hover:bg-nature-800 text-white font-bold text-center rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                <span>Chat on WhatsApp (+8801713880032)</span>
              </a>
              <button
                onClick={() => setHostModalOpen(false)}
                className="w-full py-2.5 text-stone-600 font-semibold text-sm hover:text-stone-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
