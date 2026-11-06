import { SEED_CAMPSITES, DESTINATIONS } from '../data/seedCampsites';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Helper to check if backend is online with quick timeout
async function isBackendOnline() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);
    const res = await fetch(`${API_BASE_URL.replace('/api', '')}/health`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return res.ok;
  } catch {
    return false;
  }
}

// LocalStorage helpers for standalone/fallback mode
const STORAGE_BOOKINGS_KEY = 'island_camping_bookings';

function getStoredBookings() {
  try {
    const stored = localStorage.getItem(STORAGE_BOOKINGS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveStoredBooking(booking) {
  try {
    const list = getStoredBookings();
    list.unshift(booking);
    localStorage.setItem(STORAGE_BOOKINGS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export async function fetchDestinations() {
  if (await isBackendOnline()) {
    try {
      const res = await fetch(`${API_BASE_URL}/destinations`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('Backend destinations fetch failed, using seed data', e);
    }
  }
  return DESTINATIONS;
}

export async function fetchCampsites(filters = {}) {
  const { destination, category, minPrice, maxPrice, guests, search } = filters;

  if (await isBackendOnline()) {
    try {
      const params = new URLSearchParams();
      if (destination && destination !== 'All') params.append('destination', destination);
      if (category && category !== 'All Camps') params.append('category', category);
      if (minPrice) params.append('min_price', minPrice);
      if (maxPrice) params.append('max_price', maxPrice);
      if (guests) params.append('guests', guests);
      if (search) params.append('search', search);

      const res = await fetch(`${API_BASE_URL}/campsites?${params.toString()}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('Backend campsites fetch failed, using fallback dataset', e);
    }
  }

  // Standalone filter logic
  let results = [...SEED_CAMPSITES];

  if (destination && destination !== 'All' && destination !== '') {
    results = results.filter(c =>
      c.destination.name.toLowerCase().includes(destination.toLowerCase()) ||
      c.destination_id.toString() === destination.toString()
    );
  }

  if (category && category !== 'All Camps' && category !== 'all' && category !== '') {
    results = results.filter(c =>
      c.category.toLowerCase().includes(category.toLowerCase()) ||
      category.toLowerCase().includes(c.category.toLowerCase())
    );
  }

  if (minPrice) {
    results = results.filter(c => c.price_per_night >= Number(minPrice));
  }

  if (maxPrice) {
    results = results.filter(c => c.price_per_night <= Number(maxPrice));
  }

  if (guests) {
    results = results.filter(c => c.capacity >= Number(guests));
  }

  if (search && search.trim() !== '') {
    const q = search.toLowerCase();
    results = results.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.destination.name.toLowerCase().includes(q) ||
      c.destination.district.toLowerCase().includes(q)
    );
  }

  return results;
}

export async function fetchCampsite(idOrSlug) {
  if (await isBackendOnline()) {
    try {
      const res = await fetch(`${API_BASE_URL}/campsites/${idOrSlug}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('Backend single campsite fetch failed, using fallback', e);
    }
  }

  return SEED_CAMPSITES.find(
    c => c.id.toString() === idOrSlug.toString() || c.slug === idOrSlug
  ) || null;
}

export async function createBooking(bookingData) {
  if (await isBackendOnline()) {
    try {
      const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn('Backend booking creation failed, using client fallback', e);
    }
  }

  // Fallback booking creation
  const campsite = SEED_CAMPSITES.find(c => c.id === bookingData.campsite_id);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingCode = `ISL-2026-${randomSuffix}`;

  let addonsTotal = 0;
  if (bookingData.add_ons) {
    if (bookingData.add_ons.special_meal) addonsTotal += 500 * (bookingData.guests_count || 1) * (bookingData.nights || 1);
    if (bookingData.add_ons.manta_boat) addonsTotal += 450 * (bookingData.guests_count || 1);
    if (bookingData.add_ons.watchtower_bonfire) addonsTotal += 300 * (bookingData.guests_count || 1);
  }

  const perPerson = bookingData.packageType === 'special'
    ? (campsite?.special_package_price || 2000)
    : (campsite ? campsite.price_per_night : 1500);
  const nights = bookingData.nights || 1;
  const guests = bookingData.guests_count || 1;
  const totalBdt = (perPerson * guests * nights) + addonsTotal;

  const mockBooking = {
    id: Date.now(),
    booking_code: bookingCode,
    campsite_id: bookingData.campsite_id,
    campsite,
    guest_name: bookingData.guest_name,
    guest_phone: bookingData.guest_phone,
    guest_email: bookingData.guest_email,
    check_in: bookingData.check_in,
    check_out: bookingData.check_out,
    guests_count: bookingData.guests_count,
    add_ons: bookingData.add_ons,
    total_bdt: totalBdt,
    payment_status: 'confirmed',
    payment_method: bookingData.payment_method || 'bkash',
    created_at: new Date().toISOString(),
  };

  saveStoredBooking(mockBooking);
  return mockBooking;
}
