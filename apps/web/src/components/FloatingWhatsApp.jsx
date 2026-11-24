import React from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/8801713880032?text=Hello%20Island%20Camping%20BD%2C%20I%20want%20to%20inquire%20about%20Char%20Hare%20and%20southern%20island%20camps%20(Booking%20%26%20Queries)';

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 group select-none">
      {/* Hover-only desktop tooltip (never auto-blocks content) */}
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block absolute bottom-full right-0 mb-2 bg-nature-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap">
        WhatsApp Booking: +8801713880032
      </div>

      {/* Compact Circular Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp (+8801713880032)"
        title="WhatsApp Booking & Queries (+8801713880032)"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-float hover:shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 relative"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-white rounded-full ring-2 ring-[#25D366]" />
      </a>
    </div>
  );
}
