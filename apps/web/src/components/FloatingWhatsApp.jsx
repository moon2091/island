import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/8801713880032?text=Hello%20Island%20Camping%20BD%2C%20I%20want%20to%20inquire%20about%20Char%20Hare%20and%20southern%20island%20camps%20(Booking%20%26%20Queries)';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Informative Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white text-stone-900 shadow-2xl border border-stone-200/90 rounded-2xl px-4 py-2.5 max-w-xs text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-extrabold text-[#128C7E] flex items-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>24/7 Official Booking Desk</span>
          </div>
          <div className="text-[11px] text-stone-600 leading-snug">
            সরাসরি বুকিং, অর্ডার কনফার্ম ও যেকোনো তথ্যের জন্য WhatsApp করুন:
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-xs text-emerald-800 hover:underline block mt-1"
          >
            +8801713880032
          </a>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-float hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
        title="Chat on WhatsApp (+8801713880032) for Direct Booking & Queries"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 leading-none">
            Direct Booking & Queries
          </span>
          <span className="text-xs font-black tracking-tight leading-tight">
            WhatsApp: +8801713880032
          </span>
        </div>
      </a>
    </div>
  );
}
