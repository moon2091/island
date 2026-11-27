import React from 'react';
import {
  Facebook,
  Instagram,
  MessageCircle,
  Users,
  ExternalLink,
  QrCode,
  Sparkles,
} from 'lucide-react';

const WHATSAPP_COMMUNITY_URL =
  'https://chat.whatsapp.com/KfL57wvJKvQBmF0V4LkP34?s=cl&p=i&iam=2';
const FACEBOOK_URL = 'https://www.facebook.com/islandcampingbangladesh';
const INSTAGRAM_URL = 'https://www.instagram.com/islandcampingbangladesh';

export function CommunitySocials() {
  return (
    <section
      id="community"
      className="py-14 sm:py-20 bg-gradient-to-b from-sand-100 to-sand-200/70 border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>আমাদের কমিউনিটি ও সোশ্যাল মিডিয়া • Join Our Community</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-nature-950 tracking-tight">
            Join Char Hare Tour Community &amp; Follow Us
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            আসন্ন শীতের গ্রুপ ট্যুর, চর হেয়ার ও সোনারচরের লাইভ আপডেট, রিলস এবং ভ্রমণসঙ্গী পেতে আমাদের WhatsApp Community, Facebook ও Instagram-এ যুক্ত হোন।
          </p>
        </div>

        {/* 2-Column Featured Grid: WhatsApp Community (with QR) + Facebook & Instagram Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Char Hare WhatsApp Community Card with Scannable QR */}
          <div className="lg:col-span-7 bg-gradient-to-br from-emerald-950 via-nature-950 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-float border border-emerald-800/60 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Scannable QR Code Frame */}
            <div className="w-48 sm:w-52 shrink-0 bg-white rounded-2xl p-2 shadow-xl overflow-hidden">
              <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#25D366]">
                <img
                  src="/images/char-hare-whatsapp-community-qr.jpg"
                  alt="Char Hare Tour Community WhatsApp QR Code"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center text-[10px] font-extrabold text-nature-950 uppercase tracking-wider flex items-center justify-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-[#128C7E]" />
                <span>Scan with WhatsApp</span>
              </div>
            </div>

            {/* Community Details & Direct Join CTA */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[11px] font-extrabold uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>Official WhatsApp Group</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Char Hare Tour Community
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                সরাসরি চর হেয়ার ও সোনারচর ট্যুরের পরবর্তী তারিখ, গ্রুপ বুকিং, লঞ্চ ও ট্রলার আপডেট এবং আগের ট্যুরের অভিজ্ঞতা জানতে এখনই আমাদের অফিসিয়াল WhatsApp কমিউনিটিতে যোগ দিন।
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950" />
                  <span>Join WhatsApp Community</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-[11px] text-emerald-200/70">
                মোবাইল থেকে বাটনে ট্যাপ করুন অথবা ডেস্কটপ থেকে WhatsApp ক্যামেরা দিয়ে QR কোড স্ক্যান করুন।
              </p>
            </div>
          </div>

          {/* Right: Prominent Facebook & Instagram Focus Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Facebook Highlight Card */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 bg-white hover:bg-[#1877F2] rounded-3xl p-6 border border-sand-300 hover:border-[#1877F2] shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1877F2] group-hover:bg-white text-white group-hover:text-[#1877F2] flex items-center justify-center shadow-md transition-colors shrink-0">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1877F2] group-hover:text-blue-100 block">
                      Official Facebook Page
                    </span>
                    <h3 className="text-lg font-extrabold text-nature-950 group-hover:text-white transition-colors">
                      @islandcampingbangladesh
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white shrink-0 transition-colors" />
              </div>

              <p className="text-xs sm:text-sm text-stone-600 group-hover:text-blue-50 mt-3 leading-relaxed transition-colors">
                সাপ্তাহিক ইভেন্ট আপডেট, গেস্ট রিভিউ, লাইভ ছবি এবং স্পেশাল অফার পেতে আমাদের Facebook পেজে ফলো দিয়ে রাখুন।
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[#1877F2] group-hover:text-white transition-colors">
                <span>Follow on Facebook</span>
                <span>&rarr;</span>
              </div>
            </a>

            {/* Instagram Highlight Card */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 bg-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] rounded-3xl p-6 border border-sand-300 hover:border-transparent shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover:bg-none group-hover:bg-white text-white group-hover:text-[#dc2743] flex items-center justify-center shadow-md transition-colors shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#dc2743] group-hover:text-pink-100 block flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Official Instagram</span>
                    </span>
                    <h3 className="text-lg font-extrabold text-nature-950 group-hover:text-white transition-colors">
                      @islandcampingbangladesh
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white shrink-0 transition-colors" />
              </div>

              <p className="text-xs sm:text-sm text-stone-600 group-hover:text-pink-50 mt-3 leading-relaxed transition-colors">
                চর হেয়ারের লাল কাঁকড়া, সূর্যাস্ত, বারবিকিউ নাইট ও ক্যাম্পফায়ারের সিনেম্যাটিক রিলস ও স্টোরি দেখতে Instagram-এ ফলো করুন।
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[#dc2743] group-hover:text-white transition-colors">
                <span>Follow on Instagram</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
