import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Zap, Users, Anchor } from 'lucide-react';

export function CampsiteCard({
  campsite,
  currency = 'BDT',
  isWishlisted = false,
  onToggleWishlist,
  onClick,
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = campsite.images && campsite.images.length > 0
    ? campsite.images
    : ['https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80'];

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    onToggleWishlist(campsite.id);
  };

  // Currency calculation: 1 USD ~ 118 BDT
  const formattedPrice = currency === 'USD'
    ? `$${Math.round(campsite.price_per_night / 118)}`
    : `৳${campsite.price_per_night.toLocaleString()}`;

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border border-sand-300 hover:border-stone-400 shadow-card hover:shadow-float transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image Carousel Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
        <img
          src={images[currentImgIndex]}
          alt={campsite.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay on Bottom of Image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Wishlist Button */}
        <button
          onClick={handleHeartClick}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/80 backdrop-blur-md text-stone-700 hover:text-campfire hover:bg-white transition-all shadow-md active:scale-90"
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-campfire text-campfire' : ''
            }`}
          />
        </button>

        {/* Instant Book Pill */}
        {campsite.instant_book && (
          <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-nature-900/90 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
            <Zap className="w-3 h-3 text-campfire-sunset fill-campfire-sunset" />
            <span>Instant Book</span>
          </div>
        )}

        {/* Carousel Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/85 text-stone-800 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImg}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/85 text-stone-800 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImgIndex
                    ? 'w-4 bg-white'
                    : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Rating Header */}
          <div className="flex items-center justify-between text-xs font-semibold text-stone-600 mb-1.5">
            <span className="truncate max-w-[70%] font-bold text-nature-900">
              {campsite.destination?.name || 'Bangladesh Island'}
            </span>
            <div className="flex items-center gap-1 text-stone-900">
              <Star className="w-3.5 h-3.5 fill-campfire-amber text-campfire-amber" />
              <span>{campsite.rating || 4.8}</span>
              <span className="text-stone-400 font-normal">({campsite.review_count || 12})</span>
            </div>
          </div>

          {/* Campsite Title */}
          <h3 className="font-extrabold text-stone-900 text-base leading-snug group-hover:text-nature-900 transition-colors line-clamp-1 mb-1">
            {campsite.title}
          </h3>

          {/* Ghat Info & Capacity */}
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
            <span className="flex items-center gap-1 truncate">
              <Anchor className="w-3 h-3 text-stone-400 shrink-0" />
              <span className="truncate">{campsite.ghat_info}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 mb-4">
            <span className="px-2 py-0.5 rounded bg-sand-200 text-stone-700 font-medium">
              {campsite.category}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3 text-stone-400" />
              <span>Max {campsite.capacity} campers</span>
            </span>
          </div>
        </div>

        {/* Pricing Footer */}
        <div className="pt-3 border-t border-sand-300 flex items-baseline justify-between">
          <div>
            <span className="text-lg font-extrabold text-stone-900">
              {formattedPrice}
            </span>
            <span className="text-xs text-stone-500 font-medium"> / night</span>
          </div>
          <span className="text-xs font-bold text-nature-800 group-hover:translate-x-0.5 transition-transform">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
