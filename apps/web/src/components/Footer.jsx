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
              চর হরে, সোনার চর, জাহাজ মারা, এবং চর মোন্তাজের মান্তা যাযাবর সম্প্রদায়ের নদী-উপকূলীয় প্রান্তরে বাংলাদেশের প্রথম খাঁটি আউটডোর অ্যাডভেঞ্চার ও ক্যাম্পিং প্ল্যাটফর্ম।
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Leave No Trace &bull; Red Crab & Wildlife Conservation</span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Featured Island Camps
            </h4>
            <ul className="space-y-2 text-xs text-sand-300">
              <li>
                <button
                  onClick={() => onSelectDestination("Char Hare")}
                  className="hover:text-campfire transition-colors font-medium text-white"
                >
                  ⭐ Camp De Char Hare (ক্যাম্প দে চর হরে)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Shonar Char")}
                  className="hover:text-campfire transition-colors"
                >
                  Shonar Char Mangrove Camp (সোনার চর)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Char Montaz")}
                  className="hover:text-campfire transition-colors"
                >
                  Manta Community Boat Life (মান্তা সম্প্রদায়)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Char Montaz")}
                  className="hover:text-campfire transition-colors"
                >
                  Char Montaz Village Homestay (চর মোন্তাজ হোমস্টে)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Jahaj Mara")}
                  className="hover:text-campfire transition-colors"
                >
                  Jahaj Mara Estuary Sunset (জাহাজ মারা)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDestination("Kuakata")}
                  className="hover:text-campfire transition-colors"
                >
                  Kuakata Gangchil Glamping (কুয়াকাটা)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Logistics & Safety */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Island Routes & Support
            </h4>
            <ul className="space-y-2 text-xs text-sand-300">
              <li>
                <button
                  onClick={onOpenLogistics}
                  className="hover:text-campfire transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <Anchor className="w-3.5 h-3.5 text-campfire" />
                  <span>ঢাকা টু চর মোন্তাজ / চর হরে আসার উপায়</span>
                </button>
              </li>
              <li>
                <span className="text-stone-400">National Emergency: 999</span>
              </li>
              <li>
                <span className="text-stone-400">Patuakhali Coast Guard Helpline</span>
              </li>
              <li>
                <span className="text-stone-400">Red Crab Sanctuary Protection Guidelines</span>
              </li>
              <li>
                <span className="text-stone-400">Manta Indigenous Culture Etiquette</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Booking Alerts & Updates */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Char Hare Camping Updates
            </h4>
            <p className="text-xs text-sand-300">
              চর হরে ওয়াচ টাওয়ার বুকিং, পূর্ণিমা ক্যাম্পিং ও স্পেশাল বার্বিকিউ উইকএন্ডের আপডেট পেতে আপনার ইমেইল দিন।
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
              Zero spam. Dispatched directly from Char Hare team.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Island Camping Bangladesh. Char Hare & Southern Islands Eco-Tourism.</span>
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
