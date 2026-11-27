import React from 'react';
import {
  Flame,
  ShieldCheck,
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe,
  Anchor,
  Youtube,
  Newspaper,
  Facebook,
  MessageCircle,
} from 'lucide-react';

export function Footer({ onOpenLogistics, onSelectDestination }) {
  const whatsappUrl =
    'https://wa.me/8801713880032?text=Hello%20Island%20Camping%20BD%2C%20I%20want%20to%20inquire%20about%20Char%20Hare%20and%20southern%20island%20camps%20(Booking%20%26%20Queries)';

  return (
    <footer className="bg-nature-950 text-sand-200 pt-16 pb-24 sm:pb-12 border-t border-nature-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-nature-800">
          
          {/* Col 1: Brand & Bio & Socials */}
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
              চর হেয়ার (Char Hare the Mysterious Island), সোনার চর, জাহাজ মারা, এবং চর মোন্তাজের মান্তা যাযাবর সম্প্রদায়ের নদী-উপকূলীয় প্রান্তরে বাংলাদেশের প্রথম খাঁটি আউটডোর অ্যাডভেঞ্চার ও ক্যাম্পিং প্ল্যাটফর্ম।
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Leave No Trace &bull; Red Crab & Wildlife Conservation</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/islandcampingbangladesh"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Page"
                  className="w-9 h-9 rounded-xl bg-nature-900 hover:bg-[#1877F2] text-sand-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  title="Follow on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Business"
                  className="w-9 h-9 rounded-xl bg-nature-900 hover:bg-[#25D366] text-sand-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  title="Chat on WhatsApp (+8801713880032)"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
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
                  ⭐ Char Hare the Mysterious Island (চর হেয়ার)
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
                <a
                  href="#travel-guides"
                  className="hover:text-campfire transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <Newspaper className="w-3.5 h-3.5 text-campfire" />
                  <span>জাতীয় গণমাধ্যম ফিচার ও গাইড (Media Press)</span>
                </a>
              </li>
              <li>
                <a
                  href="#travel-vlogs"
                  className="hover:text-campfire transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>বাস্তব ভ্রমণ ভিডিও ভ্লগ (Watch Vlogs)</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenLogistics}
                  className="hover:text-campfire transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <Anchor className="w-3.5 h-3.5 text-campfire" />
                  <span>ঢাকা টু চর মোন্তাজ / চর হেয়ার আসার উপায়</span>
                </button>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Business: +8801713880032</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801719368178"
                  className="text-campfire-sunset hover:text-white font-bold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Local Guide Aiub Khan: 01719368178</span>
                </a>
              </li>
              <li>
                <span className="text-stone-400">National Emergency: 999</span>
              </li>
              <li>
                <span className="text-stone-400">Patuakhali Coast Guard Helpline</span>
              </li>
              <li>
                <span className="text-stone-400">Red Crab Sanctuary Protection</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official WhatsApp Business & Local Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Official Booking &amp; Local Guide
            </h4>

            {/* WhatsApp Business Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-nature-900 to-emerald-950/80 border border-emerald-800/60 shadow-lg space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wide">
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp Business (Booking)</span>
              </div>
              <div className="text-sm font-extrabold text-white tracking-tight">
                +8801713880032
              </div>
              <p className="text-[11px] text-emerald-200/90 leading-snug">
                যেকোনো বুকিং নিশ্চিতকরণ ও তথ্যের জন্য WhatsApp করুন। লোকাল গাইড আইয়ুব খান: <a href="tel:+8801719368178" className="text-white font-bold underline">01719368178</a>
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-950" />
                <span>Book / Query on WhatsApp</span>
              </a>

              <a
                href="https://chat.whatsapp.com/KfL57wvJKvQBmF0V4LkP34?s=cl&p=i&iam=2"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-emerald-700/70 transition-colors"
              >
                <span>Join Char Hare WhatsApp Community &rarr;</span>
              </a>
            </div>

            <p className="text-[11px] text-stone-400 pt-1">
              সরাসরি কল বা WhatsApp এ চ্যাট করে ক্যাম্প সাইট ও ওয়াচ টাওয়ার স্লট নিশ্চিত করুন।
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>&copy; {new Date().getFullYear()} Island Camping Bangladesh.</span>
            <span className="text-stone-600">&bull;</span>
            <span className="text-sand-200 font-semibold">
              Developed by <span className="text-campfire font-extrabold">Bideshikart</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-5">
            <a
              href="https://www.facebook.com/islandcampingbangladesh"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#1877F2] font-bold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://chat.whatsapp.com/KfL57wvJKvQBmF0V4LkP34?s=cl&p=i&iam=2"
              target="_blank"
              rel="noreferrer"
              className="text-[#25D366] hover:underline font-bold"
            >
              WhatsApp Community
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-300 hover:underline font-semibold"
            >
              +8801713880032
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
