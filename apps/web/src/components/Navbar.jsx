import React, { useState } from 'react';
import { Compass, Flame, Heart, Menu, X, Shield, PhoneCall, HelpCircle, MapPin } from 'lucide-react';

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

  return (
    <>
      <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur-md border-b border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              onClick={onNavigateHome}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-nature-900 flex items-center justify-center text-campfire shadow-md group-hover:scale-105 transition-transform duration-200">
                <Flame className="w-6 h-6 fill-campfire" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-nature-950 flex items-center gap-1.5">
                  Island Camping <span className="text-campfire font-bold">BD</span>
                </span>
                <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase -mt-0.5">
                  Eco Adventure & Glamping
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={onOpenLogistics}
                className="text-stone-700 hover:text-nature-900 text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200"
              >
                <MapPin className="w-4 h-4 text-nature-800" />
                Island Boat Logistics
              </button>

              <button
                onClick={() => setHostModalOpen(true)}
                className="text-stone-700 hover:text-nature-900 text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-sand-200"
              >
                <Compass className="w-4 h-4 text-nature-800" />
                Host a Camp
              </button>

              {/* Currency Toggle */}
              <button
                onClick={onToggleCurrency}
                className="text-xs font-bold text-stone-700 bg-sand-200 hover:bg-sand-300 px-3 py-1.5 rounded-full border border-sand-400 transition-colors"
                title="Toggle BDT / USD currency display"
              >
                {currency === 'BDT' ? '🇧🇩 BDT (৳)' : '🌐 USD ($)'}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-full text-stone-700 hover:text-campfire hover:bg-sand-200 transition-colors"
                title="Saved campsites"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-campfire text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-sand-50 animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Emergency Hotline Button */}
              <a
                href="tel:999"
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-nature-900 bg-nature-100 hover:bg-nature-200 px-3 py-2 rounded-lg transition-colors border border-nature-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-nature-800" />
                Coast Guard Helpline
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenWishlist}
                className="relative p-2 rounded-full text-stone-700 hover:bg-sand-200"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-campfire text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:bg-sand-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-sand-300 bg-sand-50 px-4 pt-3 pb-6 space-y-3">
            <button
              onClick={() => {
                onOpenLogistics();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2.5 text-stone-800 font-semibold"
            >
              <MapPin className="w-5 h-5 text-nature-800" />
              Island Boat Logistics & Schedules
            </button>
            <button
              onClick={() => {
                setHostModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left flex items-center gap-2.5 py-2.5 text-stone-800 font-semibold"
            >
              <Compass className="w-5 h-5 text-nature-800" />
              Host an Island Campsite
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
              Coast Guard & Emergency (999)
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
              Do you own beachfront land or operate licensed adventure boat camps in Saint Martin, Nijhum Dwip, Sonadia, or Kaptai Lake? Join our verified network of sustainable eco-hosts.
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
                href="https://wa.me/8801819000101?text=Hello%2C%20I%20am%20interested%20in%20listing%20my%20island%20campsite%20on%20Island%20Camping%20Bangladesh."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-nature-900 hover:bg-nature-800 text-white font-bold text-center rounded-xl transition-colors shadow-md"
              >
                Chat on WhatsApp (+8801819000101)
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
