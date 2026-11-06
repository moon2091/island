import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Calendar,
  Users,
  CreditCard,
  Flame,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { createBooking } from '../api/client';

export function BookingModal({
  bookingPayload,
  onClose,
  currency = 'BDT',
}) {
  const [step, setStep] = useState('checkout'); // 'checkout' | 'confirmed'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form fields
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  
  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const {
    campsite,
    checkIn,
    checkOut,
    guests,
    nights,
    selectedAddons,
    totalBdt,
  } = bookingPayload || {};

  const formatPrice = (amount) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 118)}`;
    }
    return `৳${amount.toLocaleString()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim() || !guestEmail.trim()) {
      setError('Please provide your name, WhatsApp phone number, and email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await createBooking({
        campsite_id: campsite.id,
        guest_name: guestName,
        guest_phone: guestPhone,
        guest_email: guestEmail,
        check_in: checkIn,
        check_out: checkOut,
        guests_count: guests,
        nights,
        packageType: bookingPayload?.packageType || 'regular',
        add_ons: selectedAddons,
        payment_method: paymentMethod,
      });

      setConfirmedBooking(result);
      setStep('confirmed');
    } catch (err) {
      setError('Failed to process booking reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrintVoucher = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-sand-50 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-sand-300 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-sand-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'checkout' ? (
          <div>
            <div className="flex items-center gap-2 mb-1 text-campfire text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-campfire" />
              <span>Instant Camp Checkout</span>
            </div>
            
            <h2 className="text-2xl font-extrabold text-nature-950 mb-1">
              Confirm Island Reservation
            </h2>
            <p className="text-xs text-stone-500 mb-6">
              {campsite?.title} &bull; {campsite?.destination?.name}
            </p>

            {/* Quick Summary Pill */}
            <div className="bg-sand-200 p-4 rounded-2xl mb-6 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-stone-800">
                <Calendar className="w-4 h-4 text-nature-800" />
                <span className="font-semibold">{checkIn} to {checkOut} ({nights}N)</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-nature-950">
                <Users className="w-4 h-4 text-nature-800" />
                <span>{guests} Campers</span>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shakib Al Hasan"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+8801700000000"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="shakib@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-nature-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Payment Method (Instant Confirmation)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <div
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      paymentMethod === 'bkash'
                        ? 'bg-rose-50 border-rose-500 shadow-sm'
                        : 'bg-white border-sand-300 hover:border-stone-400'
                    }`}
                  >
                    <div className="font-extrabold text-xs text-rose-600">bKash</div>
                    <div className="text-[10px] text-stone-500">Merchant Pay</div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('nagad')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      paymentMethod === 'nagad'
                        ? 'bg-orange-50 border-orange-500 shadow-sm'
                        : 'bg-white border-sand-300 hover:border-stone-400'
                    }`}
                  >
                    <div className="font-extrabold text-xs text-orange-600">Nagad</div>
                    <div className="text-[10px] text-stone-500">Direct Pay</div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-sand-300 hover:border-stone-400'
                    }`}
                  >
                    <div className="font-extrabold text-xs text-emerald-700">Cards / SSL</div>
                    <div className="text-[10px] text-stone-500">Debit / Credit</div>
                  </div>
                </div>
              </div>

              {/* Price Due */}
              <div className="p-4 bg-sand-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 font-medium">Total Payable Amount</span>
                  <div className="text-xl font-extrabold text-nature-950">
                    {formatPrice(totalBdt)}
                  </div>
                </div>
                <div className="text-right text-[11px] text-emerald-800 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Secure SSL Checkout</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-campfire hover:bg-campfire-hover text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 disabled:opacity-50"
              >
                {loading ? (
                  <span>Reserving Island Camp...</span>
                ) : (
                  <>
                    <span>Confirm & Pay {formatPrice(totalBdt)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Direct WhatsApp Order Confirmation */}
              <div className="text-center pt-1">
                <a
                  href={`https://wa.me/8801713880032?text=${encodeURIComponent(
                    `Hello Island Camping BD, I want to book/confirm order for ${campsite?.title} (${campsite?.destination?.name}) from ${checkIn} to ${checkOut} for ${guests} campers. Total: ${formatPrice(totalBdt)}. Name: ${guestName || 'Camper'}, Phone: ${guestPhone || 'Phone'}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-emerald-950 border border-emerald-300 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>Direct Book & Order Confirmation on WhatsApp (+8801713880032)</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Confirmed Booking Voucher */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Booking Reserved
            </span>

            <h2 className="text-2xl font-extrabold text-nature-950 mt-3 mb-1">
              Pack Your Bags for {campsite?.destination?.name}!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-6">
              Your island campsite is secured. Please send your voucher code to our official WhatsApp number to finalize boat timings and welcome arrangements.
            </p>

            {/* Printable Voucher Card */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-sand-400 p-5 text-left mb-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-sand-200">
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase">Voucher Code</div>
                  <div className="text-base font-extrabold text-campfire font-mono">
                    {confirmedBooking?.booking_code || 'ISL-2026-CONFIRMED'}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-stone-400 uppercase">Paid Via</div>
                  <div className="text-xs font-bold uppercase text-stone-800">
                    {paymentMethod} &bull; {formatPrice(totalBdt)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Campsite</span>
                  <span className="font-bold text-stone-900">{campsite?.title}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Island Ghat</span>
                  <span className="font-bold text-stone-900">{campsite?.destination?.ghat_name}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Dates</span>
                  <span className="font-bold text-stone-900">{checkIn} to {checkOut}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Primary Camper</span>
                  <span className="font-bold text-stone-900">{guestName} ({guests} Guests)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-sand-200 flex items-center justify-between text-[11px] text-stone-600">
                <span>Official Booking Desk:</span>
                <span className="font-mono font-bold text-emerald-800">WhatsApp: +8801713880032</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/8801713880032?text=${encodeURIComponent(
                  `Hi Island Camping BD, I just placed a booking for ${campsite?.title} with voucher code ${confirmedBooking?.booking_code || 'ISL-CONFIRMED'}. Dates: ${checkIn} to ${checkOut}, Guests: ${guests}, Total: ${formatPrice(totalBdt)}. Primary Camper: ${guestName} (${guestPhone}). Please confirm my order!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950" />
                <span>Confirm on WhatsApp (+8801713880032)</span>
              </a>

              <button
                onClick={handlePrintVoucher}
                className="py-3 px-4 bg-white border border-sand-400 hover:bg-sand-200 text-stone-800 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Voucher</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-4 text-xs font-bold text-stone-500 hover:text-stone-900"
            >
              Done & Return to Explore
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
