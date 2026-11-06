import React from 'react';
import { Flame, ShieldCheck, Heart, MapPin, Phone, Mail, Globe, Anchor } from 'lucide-react';

export function Footer({ onOpenLogistics, onSelectDestination }) {
  return (
    <footer className="bg-nature-950 text-sand-200 pt-16 pb-12 border-t border-nature-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-nature-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-nature-900 flex items-center justify-center text-campfire shadow-inner">
                <Flame className="w-6 h-6 fill-campfire" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Island Camping <span className="text-campfire">BD</span>
              </span>
            </div>
            <p className="text-xs text-sand-300 leading-relaxed">
              Bangladesh's premier outdoor discovery and eco-glamping network. Pitch your tent across Saint Martin's coral beaches, Sonadia mangroves, Nijhum Dwip deer forests, and Kaptai Lake islands.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Leave No Trace &bull; Eco-Certified</span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Island Campsites
            </h4>
            <ul className="space-y-2 text-xs text-sand-300">
              <li>
                <button
                  onClick={() => onSelectDestination("Saint Martin's Island")}
                  className="hover:text-campfire transition-colors"
                >
                  Saint Martin's Coral Beach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Sonadia Island")}
                  className="hover:text-campfire transition-colors"
                >
                  Sonadia Mangrove Wilderness
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Nijhum Dwip")}
                  className="hover:text-campfire transition-colors"
                >
                  Nijhum Dwip Deer Trail Forest
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Kaptai Lake Islands")}
                  className="hover:text-campfire transition-colors"
                >
                  Kaptai Lake Emerald Island
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Sandwip Island")}
                  className="hover:text-campfire transition-colors"
                >
                  Sandwip Estuary Sunset Camp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Kuakata Gangchil Beach")}
                  className="hover:text-campfire transition-colors"
                >
                  Kuakata Gangchil Glamping
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Logistics & Safety */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Logistics & Safety
            </h4>
            <ul className="space-y-2 text-xs text-sand-300">
              <li>
                <button
                  onClick={onOpenLogistics}
                  className="hover:text-campfire transition-colors flex items-center gap-1.5"
                >
                  <Anchor className="w-3.5 h-3.5 text-campfire" />
                  <span>Boat Ghat Timings & Tides</span>
                </button>
              </li>
              <li>
                <span className="text-stone-400">Emergency Coast Guard: 999</span>
              </li>
              <li>
                <span className="text-stone-400">Weather Cautionary Signals Guide</span>
              </li>
              <li>
                <span className="text-stone-400">Low Tide / High Tide Schedules</span>
              </li>
              <li>
                <span className="text-stone-400">Marine Life Protection Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Eco Pledge */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Island Camping Alerts
            </h4>
            <p className="text-xs text-sand-300">
              Receive updates on seasonal island travel permits, winter camping festivals, and meteor shower camp dates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-nature-900 border border-nature-800 rounded-xl text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-campfire"
              />
              <button
                type="button"
                className="px-3.5 py-2 bg-campfire hover:bg-campfire-hover text-white rounded-xl text-xs font-bold transition-colors shrink-0"
              >
                Join
              </button>
            </div>
            <div className="text-[11px] text-stone-400 pt-1">
              Zero spam. Unsubscribe anytime.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Island Camping Bangladesh. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Camp Service
            </span>
            <span className="text-emerald-400 font-semibold">
              Hosted on Hostinger
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
