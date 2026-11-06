import React from 'react';
import { Anchor, LifeBuoy, AlertTriangle, Compass, Phone, ShieldCheck, MapPin, X } from 'lucide-react';
import { DESTINATIONS } from '../data/seedCampsites';

export function LogisticsGuide({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-sand-50 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-sand-300 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-sand-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2 text-nature-800 text-xs font-bold uppercase tracking-wider">
          <Anchor className="w-4 h-4 text-nature-800" />
          <span>Bangladesh Maritime & Island Travel</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-nature-950 mb-2">
          Island Boat Logistics & Ghat Guide
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mb-6">
          Everything you need to know about crossing the Bay of Bengal, estuaries, and Kaptai Lake to reach your secluded campsite.
        </p>

        {/* Ghat Directory */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 mb-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="p-4 rounded-2xl bg-white border border-sand-300 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-extrabold text-base text-nature-950 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-campfire" />
                  {dest.name} ({dest.district})
                </h3>
                <span className="text-[11px] font-bold text-nature-900 bg-nature-100 px-2.5 py-1 rounded-full">
                  Main Ghat: {dest.ghat_name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {dest.boat_schedule}
              </p>
            </div>
          ))}

          {/* Safety & Tide Warning Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>High / Low Tide & Weather Protocol</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Always consult your island camp host 24 hours prior to travel. Sea crossings are halted if Meteorological Department signals exceed Cautionary Signal No. 3. Life jackets must be worn throughout speedboat journeys.
            </p>
          </div>

          {/* Emergency Hotlines */}
          <div className="p-4 rounded-2xl bg-nature-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-sm flex items-center gap-2 text-campfire-sunset">
                <LifeBuoy className="w-4 h-4" />
                Bangladesh Coast Guard & Maritime Emergency
              </div>
              <div className="text-xs text-sand-300 mt-0.5">
                National Emergency: 999 &bull; Coast Guard Chittagong / Teknaf Zone: +8801769440555
              </div>
            </div>
            <a
              href="tel:999"
              className="px-4 py-2 bg-campfire hover:bg-campfire-hover text-white text-xs font-bold rounded-xl transition-colors shrink-0"
            >
              Call 999 Now
            </a>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-nature-900 hover:bg-nature-800 text-white rounded-xl font-bold text-sm transition-colors"
        >
          Close Guide & Book Camp
        </button>
      </div>
    </div>
  );
}
