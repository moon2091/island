import React from 'react';
import {
  MapPin,
  Utensils,
  Backpack,
  Sun,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Flame,
  Sparkles,
  Compass,
  Navigation,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';
import { WINTER_ECO_TOUR } from '../data/seedCampsites';

export function WinterEcoTour({ currency = 'BDT', onBookTour }) {
  const formattedPrice =
    currency === 'USD'
      ? `$${Math.round(WINTER_ECO_TOUR.price / 118)}`
      : `৳${WINTER_ECO_TOUR.price.toLocaleString()}`;

  const whatsappUrl = `https://wa.me/8801713880032?text=${encodeURIComponent(
    `Hello Island Camping BD, I want to book the Winter Special Eco-Tour (Char Montaz - Shonar Char - Char Hare, ৳2,500/person All-Inclusive). Please share available dates!`
  )}`;

  return (
    <section
      id="winter-eco-tour"
      className="py-12 sm:py-16 bg-gradient-to-b from-sand-100 via-sand-50 to-sand-100 border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Feature Banner (Fluid height — never overlaps on 320px mobile or wide desktop) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-float border border-sand-300 mb-8 sm:mb-10 bg-nature-950 min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-between p-5 sm:p-8">
          {/* Background Image & Gradient */}
          <img
            src="/images/winter-ecotour-hero.jpg"
            alt={WINTER_ECO_TOUR.en_title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/70 to-nature-950/30" />

          {/* Top Badges */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-campfire text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{WINTER_ECO_TOUR.badge}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-nature-950 text-xs sm:text-sm font-black shadow-lg">
              <span>অল-ইনক্লুসিভ: {formattedPrice} / প্রতি জন</span>
            </span>
          </div>

          {/* Bottom Title & Route Trail */}
          <div className="relative z-10 mt-8 sm:mt-12">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug sm:leading-tight drop-shadow-md">
              {WINTER_ECO_TOUR.title} 🏕️✨
            </h1>
            <p className="text-xs sm:text-sm text-sand-200 mt-1.5 font-medium">
              {WINTER_ECO_TOUR.en_title} &bull; {WINTER_ECO_TOUR.duration}
            </p>

            {/* Route Trail Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {WINTER_ECO_TOUR.route_stops.map((stop, idx) => (
                <React.Fragment key={stop}>
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-bold">
                    {stop}
                  </span>
                  {idx < WINTER_ECO_TOUR.route_stops.length - 1 && (
                    <span className="text-campfire-sunset font-bold text-xs">
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column (2 spans): Itinerary + Royal Menu */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Itinerary Timeline */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-sand-300 shadow-card">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-nature-100 text-nature-900 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-nature-950">
                    🗺️ ভ্রমণসূচি (2-Day Adventure Itinerary)
                  </h3>
                  <p className="text-xs text-stone-500">
                    চরমোন্তাজ লঞ্চঘাট থেকে শুরু হয়ে সোনারচর ও চর হেয়ার ঘুরে পরদিন সকাল ১১:০০ টায় প্রত্যাবর্তন
                  </p>
                </div>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-5 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-nature-200">
                {WINTER_ECO_TOUR.itinerary.map((item) => (
                  <div key={item.step} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-nature-900 text-white text-[11px] sm:text-xs font-extrabold flex items-center justify-center ring-4 ring-sand-50 shadow-sm">
                      {item.step}
                    </div>

                    <div className="bg-sand-50/80 hover:bg-sand-100/80 transition-colors rounded-2xl p-4 border border-sand-200">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-nature-100 text-nature-900 text-[10px] font-extrabold uppercase">
                          {item.day}
                        </span>
                        <h4 className="font-extrabold text-sm sm:text-base text-nature-950">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Royal 5-Stage Meal Plan */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-sand-300 shadow-card">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-campfire/15 text-campfire flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-nature-950">
                    🍽️ রাজকীয় খাবারের মেনু (All 5 Meals Included)
                  </h3>
                  <p className="text-xs text-stone-500">
                    ১টি স্ন্যাকস, ১টি প্রিমিয়াম বারবিকিউ, ২টি প্রধান খাবার ও ১টি রাজকীয় নাস্তা — সব প্যাকেজের অন্তর্ভুক্ত
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WINTER_ECO_TOUR.royal_menu.map((course, index) => (
                  <div
                    key={course.slot}
                    className={`rounded-2xl p-4 border ${
                      index === 1
                        ? 'sm:col-span-2 bg-gradient-to-br from-emerald-50/80 to-sand-50 border-emerald-200'
                        : 'bg-sand-50/80 border-sand-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-extrabold text-sm text-nature-950">
                        {course.slot}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-white px-2 py-0.5 rounded-full border border-sand-300">
                        {course.en_slot}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {course.items.map((food) => (
                        <li
                          key={food}
                          className="text-xs sm:text-sm text-stone-700 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{food}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1 span, sticky): Pricing, Inclusions, Packing Notice & Contacts */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-32">
            {/* Pricing & Booking Card */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-nature-900 shadow-float">
              {/* Visual Creative Poster Strip */}
              <div className="relative h-44 w-full overflow-hidden bg-nature-950">
                <img
                  src="/images/winter-ecotour-poster.jpg"
                  alt="Shonar Char & Char Hare Winter Eco-Tour"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-950/90 via-nature-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-campfire-sunset block">
                      💰 অল-ইনক্লুসিভ প্যাকেজ মূল্য
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {formattedPrice}
                      <span className="text-xs font-semibold text-sand-200 ml-1">
                        / প্রতি জন
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-emerald-950 text-[10px] font-black uppercase">
                    Trawler + 5 Meals
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                {/* Inclusions */}
                <div>
                  <h4 className="text-xs font-extrabold text-stone-500 uppercase tracking-wider mb-3">
                    প্যাকেজে যা যা থাকছে (What&apos;s Included)
                  </h4>
                  <ul className="space-y-2.5">
                    {WINTER_ECO_TOUR.inclusions.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 font-medium leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Book Button */}
                <button
                  onClick={onBookTour}
                  className="w-full py-3.5 bg-campfire hover:bg-campfire-hover text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Book Winter Eco-Tour ({formattedPrice})</span>
                </button>

                {/* Dual Official Contacts */}
                <div className="pt-4 border-t border-sand-200 space-y-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
                    📞 বুকিং ও যেকোনো তথ্যের জন্য যোগাযোগ
                  </div>

                  {/* 1. WhatsApp Business */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-3 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-emerald-300 flex items-center justify-between gap-2 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366] text-emerald-950 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 fill-emerald-950" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-emerald-900">
                          WhatsApp Business (Booking &amp; Queries)
                        </div>
                        <div className="text-sm font-black text-emerald-950">
                          +8801713880032
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-[#25D366] text-emerald-950 px-2 py-1 rounded-lg shrink-0">
                      Chat
                    </span>
                  </a>

                  {/* 2. Local Guide Aiub Khan */}
                  <a
                    href="tel:+8801719368178"
                    className="w-full p-3 rounded-2xl bg-sand-100 hover:bg-sand-200 border border-sand-300 flex items-center justify-between gap-2 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-nature-900 text-white flex items-center justify-center shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-stone-600">
                          Local Guide Aiub Khan (Any Queries)
                        </div>
                        <div className="text-sm font-black text-nature-950">
                          01719368178
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-nature-900 text-white px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                      <PhoneCall className="w-3 h-3" />
                      Call
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Packing & Off-Grid Solar Power Advisory */}
            <div className="bg-amber-50 rounded-3xl p-5 border border-amber-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-950 font-extrabold text-sm">
                <Backpack className="w-5 h-5 text-amber-700 shrink-0" />
                <span>🎒 সাথে কী কী নিয়ে আসবেন (জরুরি)</span>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-950 font-semibold leading-relaxed">
                <Sun className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{WINTER_ECO_TOUR.packing_notice}</span>
              </div>

              <ul className="space-y-1.5">
                {WINTER_ECO_TOUR.packing_items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-amber-950 flex items-center gap-2 font-medium"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
