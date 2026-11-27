import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Users,
  Flame,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Utensils,
} from 'lucide-react';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdjw17xkfaTaEbOj8R1lFnAXB0Z_K1oVMfdcvjP7vJxHeKfbw/formResponse';

const GOOGLE_FORM_PUBLIC_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdjw17xkfaTaEbOj8R1lFnAXB0Z_K1oVMfdcvjP7vJxHeKfbw/viewform';

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

const MEAL_OPTIONS = [
  'দুপুরে: দেশি মুরগি (Deshi Chicken)',
  'দুপুরে: হাঁসের মাংস (Duck Curry)',
  'সকালে: ইলিশ খিচুড়ি (Hilsa Khichuri)',
  'সকালে: ডিম খিচুড়ি / পরোটা-ডিম',
];

const PACKAGE_PRICE_BDT = 2500;

export function BookingModal({
  bookingPayload,
  onClose,
  currency = 'BDT',
}) {
  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { campsite, checkIn, guests } = bookingPayload || {};

  // Simple booking form state (1:1 mapped to the live Google Form)
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [tourDate, setTourDate] = useState(
    checkIn || new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [guestSelection, setGuestSelection] = useState(() => {
    const n = Number(guests) || 2;
    return n >= 10 ? '10+' : String(Math.max(1, n));
  });
  const [mealPrefs, setMealPrefs] = useState([]);
  const [notes, setNotes] = useState('');

  const guestCountNum = parseInt(guestSelection.replace(/[^0-9]/g, ''), 10) || 1;
  const estimatedTotalBdt = guestCountNum * PACKAGE_PRICE_BDT;

  const formatPrice = (amount) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 118)}`;
    }
    return `৳${amount.toLocaleString()}`;
  };

  const toggleMealPref = (option) => {
    setMealPrefs((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim() || !tourDate) {
      setError('অনুগ্রহ করে আপনার নাম, হোয়াটসঅ্যাপ/মোবাইল নম্বর এবং ভ্রমণের তারিখ দিন।');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams();
      params.append('entry.1938463685', guestName.trim());
      params.append('entry.1588443647', guestPhone.trim());

      // Google Forms date fields use _year, _month, _day
      const [year, month, day] = tourDate.split('-');
      if (year && month && day) {
        params.append('entry.1213386665_year', String(parseInt(year, 10)));
        params.append('entry.1213386665_month', String(parseInt(month, 10)));
        params.append('entry.1213386665_day', String(parseInt(day, 10)));
      }

      params.append('entry.1165344799', guestSelection);

      mealPrefs.forEach((pref) => {
        params.append('entry.807163262', pref);
      });

      if (notes.trim()) {
        params.append('entry.204232563', notes.trim());
      }

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: params.toString(),
      });

      setStep('confirmed');
    } catch (err) {
      console.error('Google Form submission error:', err);
      setError('সাবমিট করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা সরাসরি WhatsApp করুন।');
    } finally {
      setLoading(false);
    }
  };

  const whatsappSummaryText = `Hello Island Camping BD, I just submitted my booking for the Winter Special Eco-Tour (Char Montaz - Shonar Char - Char Hare).\nName: ${guestName}\nPhone: ${guestPhone}\nTour Date: ${tourDate}\nGuests: ${guestSelection} (Est. Total: ${formatPrice(estimatedTotalBdt)})\nMeal: ${mealPrefs.length ? mealPrefs.join(', ') : 'Standard Royal Menu'}\nNotes: ${notes || 'None'}`;

  const aiubSummaryText = `Assalamu Alaikum Aiub Bhai, I just booked the Char Hare Winter Eco-Tour!\nName: ${guestName}\nPhone: ${guestPhone}\nDate: ${tourDate}\nGuests: ${guestSelection}\nMeal: ${mealPrefs.length ? mealPrefs.join(', ') : 'Standard Royal Menu'}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-sand-50 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-sand-300 relative animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-sand-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-1 text-campfire text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-campfire" />
              <span>সহজ ও দ্রুত বুকিং • Simple Tour Booking</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-nature-950 mb-1 pr-6">
              Book Winter Special Eco-Tour
            </h2>
            <p className="text-xs text-stone-500 mb-5">
              {campsite?.bn_title || 'চরমোন্তাজ – সোনারচর – চর হেয়ার এডভেঞ্চার'} &bull; ২,৫০০ টাকা / প্রতি জন (All-Inclusive)
            </p>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Full Name */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Name (আপনার নাম) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার পুরো নাম লিখুন"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-base sm:text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                />
              </div>

              {/* 2. Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  WhatsApp / Mobile Number (হোয়াটসঅ্যাপ / মোবাইল নম্বর) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="017XXXXXXXX"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-base sm:text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                />
              </div>

              {/* 3 & 4. Tour Start Date + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-nature-800" />
                    <span>Tour Start Date (ভ্রমণের তারিখ) *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sand-300 rounded-xl text-base sm:text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-nature-800" />
                    <span>Number of Guests (কতজন?) *</span>
                  </label>
                  <select
                    value={guestSelection}
                    onChange={(e) => setGuestSelection(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sand-300 rounded-xl text-base sm:text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                  >
                    {GUEST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt} {opt === '1' ? 'Guest (১ জন)' : `Guests (${opt} জন)`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. Optional Meal Preference */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                  <Utensils className="w-3.5 h-3.5 text-campfire" />
                  <span>Meal Preference (খাবারের পছন্দ — ঐচ্ছিক)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MEAL_OPTIONS.map((opt) => {
                    const selected = mealPrefs.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleMealPref(opt)}
                        className={`text-left px-3 py-2 rounded-xl border text-xs font-semibold transition-all flex items-center gap-2 ${
                          selected
                            ? 'bg-nature-100 border-nature-800 text-nature-950'
                            : 'bg-white border-sand-300 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold shrink-0 border ${
                            selected
                              ? 'bg-nature-900 border-nature-900 text-white'
                              : 'border-stone-300 bg-sand-50'
                          }`}
                        >
                          {selected ? '✓' : ''}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 6. Special Notes / Personal Medicine */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Special Notes / Personal Medicine (বিশেষ কোনো অনুরোধ — ঐচ্ছিক)
                </label>
                <textarea
                  rows={2}
                  placeholder="যেমন: কোনো বিশেষ খাবারের অনুরোধ বা ব্যক্তিগত নোট (না থাকলে খালি রাখুন)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-sand-300 rounded-xl text-base sm:text-sm font-medium focus:ring-2 focus:ring-nature-800 focus:outline-none resize-none"
                />
              </div>

              {/* Transparent Price Summary (No Online Payment Required) */}
              <div className="p-4 bg-sand-200/80 rounded-2xl flex flex-wrap items-center justify-between gap-2 border border-sand-300">
                <div>
                  <span className="text-[11px] text-stone-600 font-bold uppercase tracking-wider block">
                    Estimated Package Total ({guestSelection} × ৳2,500)
                  </span>
                  <div className="text-xl font-black text-nature-950">
                    {formatPrice(estimatedTotalBdt)}
                    {guestSelection === '10+' && (
                      <span className="text-xs font-semibold text-stone-500 ml-1">+</span>
                    )}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-extrabold border border-emerald-200">
                  No Online Payment Needed Now
                </span>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-campfire hover:bg-campfire-hover text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting Booking Request...</span>
                ) : (
                  <>
                    <span>Submit Booking Request (বুকিং জমা দিন)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Quick WhatsApp / Direct Form Fallback */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] text-stone-500">
                <a
                  href={`https://wa.me/8801713880032?text=${encodeURIComponent(whatsappSummaryText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Or Book Directly on WhatsApp (+8801713880032)</span>
                </a>
                <a
                  href={GOOGLE_FORM_PUBLIC_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-stone-500 hover:text-nature-900 underline"
                >
                  Open Google Form directly
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Simple Instant Confirmation */
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              Booking Request Received
            </span>

            <h2 className="text-2xl font-extrabold text-nature-950 mt-3 mb-1">
              ধন্যবাদ, {guestName}! 🏕️✨
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-5 leading-relaxed">
              আপনার বুকিং তথ্য সফলভাবে আমাদের সিস্টেমে জমা হয়েছে এবং লোকাল গাইড <strong>আইয়ুব খান</strong>-কে পাঠানো হয়েছে। সিট কনফার্ম করতে নিচের WhatsApp বাটনে মেসেজ দিন।
            </p>

            {/* Summary Card */}
            <div className="bg-white rounded-2xl border border-sand-300 p-4 text-left mb-5 space-y-2 text-xs">
              <div className="flex justify-between pb-2 border-b border-sand-200">
                <span className="text-stone-500 font-semibold">Guest Name</span>
                <span className="font-bold text-stone-900">{guestName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-sand-200">
                <span className="text-stone-500 font-semibold">Phone / WhatsApp</span>
                <span className="font-bold text-stone-900">{guestPhone}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-sand-200">
                <span className="text-stone-500 font-semibold">Tour Start Date</span>
                <span className="font-bold text-stone-900">{tourDate}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-sand-200">
                <span className="text-stone-500 font-semibold">Guests &amp; Est. Total</span>
                <span className="font-extrabold text-nature-950">
                  {guestSelection} জন &bull; {formatPrice(estimatedTotalBdt)}
                </span>
              </div>
              {mealPrefs.length > 0 && (
                <div className="flex justify-between gap-4">
                  <span className="text-stone-500 font-semibold shrink-0">Meal Pref</span>
                  <span className="font-semibold text-stone-800 text-right">
                    {mealPrefs.join(', ')}
                  </span>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Confirmation Buttons */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/8801713880032?text=${encodeURIComponent(whatsappSummaryText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950" />
                <span>Confirm Seat on WhatsApp (+8801713880032)</span>
              </a>

              <a
                href={`https://wa.me/8801719368178?text=${encodeURIComponent(aiubSummaryText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-nature-900 hover:bg-nature-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Local Guide Aiub Bhai (01719368178)</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="mt-4 text-xs font-bold text-stone-500 hover:text-stone-900"
            >
              Close &amp; Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
