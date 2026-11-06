import React from 'react';
import { Anchor, LifeBuoy, AlertTriangle, Compass, Phone, ShieldCheck, MapPin, X, Navigation } from 'lucide-react';
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
          <span>Char Hare & Southern Coastal Islands Route</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-nature-950 mb-2">
          Island Boat Logistics & Travel Guide (আসার উপায়)
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mb-6">
          Everything you need to know about traveling from Dhaka, Barishal, or Kuakata to Char Hare, Shonar Char, and Char Montaz.
        </p>

        {/* Step-by-Step Travel Route Guide */}
        <div className="bg-white rounded-2xl border border-sand-300 p-5 mb-6 space-y-3">
          <h3 className="font-extrabold text-sm text-nature-950 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-campfire" />
            <span>ঢাকা থেকে চর হেয়ার আসার সহজতম উপায়:</span>
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed pl-2 border-l-2 border-nature-800">
            <p>
              <strong>১. ঢাকা সদরঘাট থেকে চর মোন্তাজ লঞ্চ:</strong> প্রতিদিন বিকাল ৫:৩০ মিনিটে সদরঘাট থেকে চর মোন্তাজ / গলাচিপাগামী আধুনিক লঞ্চ ছাড়ে (কেবিন ও ডেক দুই ধরনের সুবিধাই থাকে)।
            </p>
            <p>
              <strong>২. সকাল ৭:৩০ টায় চর মোন্তাজ অবতরণ:</strong> ভোর ও সকালের শান্ত নদীতে মিষ্টি রোদ দেখে লঞ্চ চর মোন্তাজ সেন্ট্রাল লঞ্চ ঘাটে নোঙ্গর করে।
            </p>
            <p>
              <strong>৩. ট্রলার বা স্পিডবোটে চর হেয়ার যাত্রা:</strong> চর মোন্তাজ ঘাট থেকে আমাদের নির্ধারিত ইঞ্জিন ট্রলারে ৪৫-৬০ মিনিট বা স্পিডবোটে ২৫ মিনিটে সরাসরি চর হেয়ারের বালুচরে ক্যাম্পসাইটে নামিয়ে দেওয়া হয়।
            </p>
            <p>
              <strong>বিকল্প রুট (কুয়াকাটা হয়ে):</strong> ঢাকা থেকে পদ্মা সেতু হয়ে বাসে সরাসরি কুয়াকাটা গঙ্গামতি বিচ পয়েন্ট। সেখান থেকে রিজার্ভ স্পিডবোটে ৪০ মিনিটে সরাসরি চর হেয়ার ও সোনার চরে পৌঁছানো যায়।
            </p>
          </div>
        </div>

        {/* Ghat Directory */}
        <div className="space-y-3 max-h-[45vh] overflow-y-auto pr-2 mb-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="p-4 rounded-2xl bg-white border border-sand-300 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="font-extrabold text-base text-nature-950 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-campfire" />
                  {dest.name} ({dest.bn_name}) &bull; {dest.district}
                </h4>
                <span className="text-[11px] font-bold text-nature-900 bg-nature-100 px-2.5 py-1 rounded-full">
                  ঘাট: {dest.ghat_name}
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
              <span>জোয়ার-ভাটা ও আবহাওয়া সতর্কতা (Tides & Safety)</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              চর হেয়ার ও সোনার চর মোহনা ও বঙ্গোপসাগরের মুখে অবস্থিত। শীত ও বসন্তকালে (নভেম্বর থেকে মার্চ) সাগর শান্ত থাকে এবং ক্যাম্পিংয়ের সেরা মৌসুম। ট্রলারে বা স্পিডবোটে চলাচলের সময় লাইফ জ্যাকেট পরা বাধ্যতামূলক।
            </p>
          </div>

          {/* Emergency Hotlines */}
          <div className="p-4 rounded-2xl bg-nature-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-sm flex items-center gap-2 text-campfire-sunset">
                <LifeBuoy className="w-4 h-4" />
                বাংলাদেশ কোস্ট গার্ড ও রাঙ্গাবালী ইমার্জেন্সি
              </div>
              <div className="text-xs text-sand-300 mt-0.5">
                জাতীয় জরুরি সেবা: ৯৯৯ &bull; কোস্ট গার্ড দক্ষিণ জোন / পটুয়াখালী কন্টিনজেন্ট
              </div>
            </div>
            <a
              href="tel:999"
              className="px-4 py-2 bg-campfire hover:bg-campfire-hover text-white text-xs font-bold rounded-xl transition-colors shrink-0"
            >
              Call 999
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
