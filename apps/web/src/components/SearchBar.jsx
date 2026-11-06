import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, X, ChevronDown, Check } from 'lucide-react';

export function SearchBar({
  destinations = [],
  selectedDestination,
  onSelectDestination,
  checkInDate,
  onCheckInChange,
  checkOutDate,
  onCheckOutChange,
  guestsCount,
  onGuestsChange,
  onSearch,
}) {
  const [activeSegment, setActiveSegment] = useState(null); // 'where' | 'dates' | 'guests' | null
  const barRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (barRef.current && !barRef.current.contains(event.target)) {
        setActiveSegment(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearDestination = (e) => {
    e.stopPropagation();
    onSelectDestination('All');
  };

  const handleSearchClick = () => {
    setActiveSegment(null);
    onSearch();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-40" ref={barRef}>
      {/* Outer Segmented Container */}
      <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-2.5 shadow-float border border-stone-200/90 flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
        
        {/* Segment 1: Where */}
        <div
          onClick={() => setActiveSegment(activeSegment === 'where' ? null : 'where')}
          className={`flex-1 px-4 py-2.5 md:py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-150 ${
            activeSegment === 'where' ? 'bg-sand-200/80 shadow-inner' : 'hover:bg-sand-100'
          }`}
        >
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center justify-between">
            <span>Where</span>
            {selectedDestination && selectedDestination !== 'All' && (
              <button
                onClick={handleClearDestination}
                className="text-stone-400 hover:text-stone-700"
                title="Clear"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div className="text-sm font-semibold text-stone-900 truncate mt-0.5 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-nature-800 shrink-0" />
            <span>
              {selectedDestination && selectedDestination !== 'All'
                ? selectedDestination
                : 'Char Hare & Southern Islands (চর হেয়ার)'}
            </span>
          </div>
        </div>

        {/* Segment 2: Dates (Check-in / Check-out) */}
        <div
          onClick={() => setActiveSegment(activeSegment === 'dates' ? null : 'dates')}
          className={`flex-1 px-4 py-2.5 md:py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-150 ${
            activeSegment === 'dates' ? 'bg-sand-200/80 shadow-inner' : 'hover:bg-sand-100'
          }`}
        >
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
            When (Check In - Out)
          </div>
          <div className="text-sm font-semibold text-stone-900 truncate mt-0.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-nature-800 shrink-0" />
            <span>
              {checkInDate && checkOutDate
                ? `${checkInDate} to ${checkOutDate}`
                : 'Add camping dates'}
            </span>
          </div>
        </div>

        {/* Segment 3: Guests */}
        <div
          onClick={() => setActiveSegment(activeSegment === 'guests' ? null : 'guests')}
          className={`flex-1 px-4 py-2.5 md:py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-150 ${
            activeSegment === 'guests' ? 'bg-sand-200/80 shadow-inner' : 'hover:bg-sand-100'
          }`}
        >
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
            Who
          </div>
          <div className="text-sm font-semibold text-stone-900 truncate mt-0.5 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-nature-800 shrink-0" />
            <span>
              {guestsCount} {guestsCount === 1 ? 'Camp Guest' : 'Camp Guests'}
            </span>
          </div>
        </div>

        {/* Search Action Button */}
        <div className="p-1 md:pl-2 flex items-center justify-end">
          <button
            onClick={handleSearchClick}
            className="w-full md:w-auto px-6 py-3.5 bg-campfire hover:bg-campfire-hover text-white rounded-xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 duration-150"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span className="inline md:hidden lg:inline">Find Camps</span>
          </button>
        </div>
      </div>

      {/* Popovers */}
      {/* 1. Destination Popover */}
      {activeSegment === 'where' && (
        <div className="absolute left-4 right-4 md:left-4 md:w-96 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            Popular Island Destinations
          </div>
          <div className="space-y-1.5">
            <button
              onClick={() => {
                onSelectDestination('All');
                setActiveSegment('dates');
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                selectedDestination === 'All'
                  ? 'bg-nature-100 text-nature-950 font-bold'
                  : 'hover:bg-sand-100 text-stone-800'
              }`}
            >
              <span>All Islands & Beaches</span>
              {selectedDestination === 'All' && <Check className="w-4 h-4 text-nature-800" />}
            </button>

            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => {
                  onSelectDestination(dest.name);
                  setActiveSegment('dates');
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  selectedDestination === dest.name
                    ? 'bg-nature-100 text-nature-950 font-bold'
                    : 'hover:bg-sand-100 text-stone-800'
                }`}
              >
                <div>
                  <div className="font-semibold text-stone-900">{dest.name}</div>
                  <div className="text-xs text-stone-500">{dest.district} &bull; {dest.ghat_name}</div>
                </div>
                {selectedDestination === dest.name && (
                  <Check className="w-4 h-4 text-nature-800 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2. Dates Popover */}
      {activeSegment === 'dates' && (
        <div className="absolute left-4 right-4 md:left-1/3 md:-translate-x-12 md:w-80 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Select Camping Dates
            </span>
            {(checkInDate || checkOutDate) && (
              <button
                onClick={() => {
                  onCheckInChange('');
                  onCheckOutChange('');
                }}
                className="text-[11px] font-bold text-campfire hover:text-campfire-hover transition-colors"
              >
                Reset Dates
              </button>
            )}
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={checkInDate || ''}
                onChange={(e) => onCheckInChange(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-nature-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                min={checkInDate || new Date().toISOString().split('T')[0]}
                value={checkOutDate || ''}
                onChange={(e) => onCheckOutChange(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-nature-800 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setActiveSegment('guests')}
              className="w-full py-2.5 bg-nature-900 text-white rounded-xl text-xs font-bold hover:bg-nature-800 transition-colors mt-2"
            >
              Continue to Guests
            </button>
          </div>
        </div>
      )}

      {/* 3. Guests Popover */}
      {activeSegment === 'guests' && (
        <div className="absolute left-4 right-4 md:right-4 md:left-auto md:w-80 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            Number of Campers
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="text-sm font-bold text-stone-900">Total Campers</div>
              <div className="text-xs text-stone-500">Adults & Children</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onGuestsChange(Math.max(1, guestsCount - 1))}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-sand-200"
              >
                -
              </button>
              <span className="font-bold text-stone-900 text-base w-4 text-center">
                {guestsCount}
              </span>
              <button
                type="button"
                onClick={() => onGuestsChange(Math.min(10, guestsCount + 1))}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-sand-200"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleSearchClick}
            className="w-full py-2.5 bg-campfire text-white rounded-xl text-xs font-bold hover:bg-campfire-hover transition-colors mt-4"
          >
            Apply & View Available Camps
          </button>
        </div>
      )}
    </div>
  );
}
