export const DESTINATIONS = [
  {
    id: 1,
    name: "Char Heyar",
    bn_name: "চর হেয়ার",
    district: "Patuakhali (Rangabali)",
    ghat_name: "Char Montaz Ghat / Koralia Launch Ghat",
    boat_schedule: "Daily launch from Dhaka (Sadarghat) to Char Montaz / Galachipa departing 5:30 PM. From Char Montaz, local engine trawler / speedboat to Char Heyar (approx 45-60 mins crossing through calm estuary).",
    banner_image: "/images/char-heyar-sandbar.jpg",
    description: "The crown jewel of southern sandbar islands in the Bay of Bengal. Known for millions of red crabs, virgin jhau forest, wooden watchtower, and the nomadic Manta fishing community."
  },
  {
    id: 2,
    name: "Shonar Char",
    bn_name: "সোনার চর",
    district: "Patuakhali (Rangabali)",
    ghat_name: "Galachipa / Char Montaz Ghat",
    boat_schedule: "Connecting trawlers leave Char Montaz at 8:00 AM and 1:00 PM. Reserve speedboats can reach Shonar Char in 40 mins from Kuakata or Char Montaz.",
    banner_image: "/images/shonar-char-sunset.jpg",
    description: "The 'Golden Island' blessed with vast Sundarbans-like mangrove forests, herds of wild spotted deer, and endless golden sandbars where both sunrise and sunset paint the sea."
  },
  {
    id: 3,
    name: "Jahaj Mara",
    bn_name: "জাহাজ মারা",
    district: "Patuakhali (Rangabali)",
    ghat_name: "Jahaj Mara Canal Ghat",
    boat_schedule: "Country boats and trawlers depart Galachipa or Kuakata Gangamati canal daily. Accessible by scenic boat cruise through sheltered coastal waterways.",
    banner_image: "/images/jahaj-mara-estuary.jpg",
    description: "Untouched and quiet island retreat with rolling grassy dykes, pine tree groves, calm tidal waters, and total solitude away from any tourist crowd."
  },
  {
    id: 4,
    name: "Char Montaz",
    bn_name: "চর মোন্তাজ",
    district: "Patuakhali (Rangabali)",
    ghat_name: "Char Montaz Central Launch Ghat",
    boat_schedule: "Direct Dhaka-Char Montaz launch (MV Pubali / MV Sundarban fleet) arrives every morning at 7:30 AM. Internal wooden boats available at all hours.",
    banner_image: "/images/manta-community-boats.jpg",
    description: "The vibrant gateway island and ancestral home of the indigenous water-dwelling Manta Community (মান্তা যাযাবর সম্প্রদায়). Featuring peaceful island village homestays."
  },
  {
    id: 5,
    name: "Kuakata",
    bn_name: "কুয়াকাটা",
    district: "Patuakhali",
    ghat_name: "Gangamati & Kawar Char Estuary Ghat",
    boat_schedule: "Direct highway bus connection from Dhaka via Padma & Payra bridges (approx 6-7 hrs). Marine speedboats and trawlers to Char Heyar, Shonar Char depart Gangamati.",
    banner_image: "/images/kuakata-gangchil-beach.jpg",
    description: "The panoramic launchpad where sunrise and sunset embrace the Bay of Bengal, offering luxury coastal safari glamping and quick boat charters to the outer chars."
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Camps", icon: "Compass" },
  { id: "char_heyar", name: "Char Heyar Camps", icon: "Waves" },
  { id: "manta", name: "Manta Community Life", icon: "Sailboat" },
  { id: "mangrove", name: "Mangrove & Wilderness", icon: "Trees" },
  { id: "homestay", name: "Village Homestays", icon: "Tent" },
  { id: "glamping", name: "Kuakata Glamping", icon: "Sparkles" },
];

export const SEED_CAMPSITES = [
  {
    id: 1,
    title: "Camp De Char Heyar - Watchtower & Beach Camp",
    bn_title: "ক্যাম্প দে চর হেয়ার - ওয়াচ টাওয়ার ও বিচ ক্যাম্প",
    slug: "camp-de-char-heyar",
    destination_id: 1,
    destination: {
      id: 1,
      name: "Char Heyar",
      bn_name: "চর হেয়ার",
      district: "Patuakhali (Rangabali)",
      ghat_name: "Char Montaz Ghat / Koralia Launch Ghat"
    },
    category: "Char Heyar Camps",
    price_per_night: 1500,
    special_package_price: 2000,
    capacity: 4,
    description: "নীরবে নিভৃতে তাবুতে থেকে বঙ্গোপসাগরের উত্তাল সমুদ্র, অনন্ত বালিয়াড়ি, কোটি লাল কাঁকড়া, এবং ঝাউগাছের অকৃত্তিম সৌন্দর্য অবলোকনের জন্য চর হেয়ারের একমাত্র সুসজ্জিত আউটডোর ক্যাম্প সাইট। দ্বীপের একমাত্র কাঠের ওয়াচ টাওয়ার থেকে পুরো সমুদ্র ও সৈকত অবলোকন সম্ভব। রয়েছে নিজস্ব কিচেন, ৩টি পরিষ্কার ওয়াশরুম, ২টি মিষ্টি পানির টিউবওয়েল, এবং রাতে নিরাপত্তার জন্য সার্বক্ষণিক নাইট গার্ড।",
    who_can_come: "যারা নীরবে নিভৃতে তাবুতে থেকে সমুদ্র, বালিয়াড়ি, লাল কাঁকড়া, বনের সৌন্দর্য ও ঝাউগাছের অকৃত্রিম রূপ দেখতে ভালোবাসেন। প্রকৃতি ও সমুদ্রের প্রেমে যাদের মন শান্ত হয়।",
    who_not_suited: "যাদের খুঁতখুঁতে স্বভাব, আউটডোরে ক্যাম্পিং করার অভিজ্ঞতা বা ধারণা নেই, এবং বিলাসবহুল পাঁচ তারকা হোটেলের মানসিকতা নিয়ে দ্বীপে আসতে চান—তাদের জন্য নয়।",
    meal_plan: {
      lunch: "ভাত + সামুদ্রিক মাছ / ব্রয়লার চিকেন + ২ পদ তাজা ভর্তা + ডাল (দুপুর ২:০০-৩:০০)",
      afternoon: "মুড়ি মাখা (চানাচুর + খাঁটি সরিষার তেলে মুড়ি) (বিকাল ৬:০০-৮:০০)",
      dinner_bbq: "চিকেন / তাজা কোড়াল অথবা সামুদ্রিক মাছ বার্বিকিউ + ৩টি গরম রুটি/পরোটা + স্পেশাল সস + সালাদ (রাত ১০:০০-১১:০০)",
      breakfast: "ঝরঝরে ভুনা খিচুড়ি + ডিম + মরিচ ভর্তা + আলু ভর্তা + সালাদ"
    },
    special_package_perks: "দুপুরে চিকেন ও মাছ দুটোই পরিবেশন করা হয়। রাত ৮:০০-৯:০০ টায় একটি অতিরিক্ত পূর্ণাঙ্গ ডিনার (দুপুরের মেন্যুর মত) পরিবেশিত হয়।",
    amenities: [
      "Island's Only Wooden Watch Tower",
      "Pillows, Foam Mattress & Warm Blankets",
      "All 4 Meals Included (Lunch, Evening Muri, BBQ Dinner, Breakfast)",
      "3 Clean Low-Commode Washrooms",
      "2 Tube-Wells for Sweet Drinking Water",
      "3 Large Wooden Machangs (Lounging Decks)",
      "40+ Quality Canvas Tents & 30+ Hammocks",
      "Beach Chairs, Umbrellas & Wooden Beach Swings",
      "Ukulele, Cajon, Hand Buoys & Acoustic Soundbox",
      "Football & Volleyball on Sandbar",
      "24/7 Dedicated 5-Person Island Crew",
      "Nighttime Security Guard Patrol",
      "Campfire & Acoustic Bonfire Area",
      "Zero Crowd - Private Beach Feel"
    ],
    images: [
      "/images/char-heyar-watchtower.jpg",
      "/images/char-heyar-red-crabs.jpg",
      "/images/char-heyar-tents.jpg",
      "/images/char-heyar-campfire.jpg",
      "/images/seafood-bbq.jpg"
    ],
    rating: 4.95,
    review_count: 56,
    instant_book: true,
    host_name: "Camp Master Shumon & Island Crew",
    host_phone: "+8801819000101",
    host_badge: "Verified Char Heyar Island Guardian",
    ghat_info: "Char Montaz / Koralia Ghat -> 45 mins local engine trawler / reserve speedboat drop-off directly at Char Heyar sandbar",
    boat_schedule: "Dhaka Sadarghat launch to Char Montaz leaves 5:30 PM daily. Trawlers to Char Heyar wait for launch passengers at Char Montaz ghat.",
    rules: [
      "এটি একটি নির্জন দ্বীপ, বাজার-হাট নেই—অনেক সময়ই প্রাকৃতিক কারণে মেন্যু সামান্য পরিবর্তিত হতে পারে।",
      "দ্বীপে কোনো প্রকার প্লাস্টিক বা আবর্জনা ফেলা সম্পূর্ণ নিষিদ্ধ (Leave No Trace)।",
      "দ্বীপে অযথা কোলাহল না করে প্রকৃতির নির্জনতার সাথে মানিয়ে নেওয়ার অনুরোধ রইলো।"
    ]
  },
  {
    id: 2,
    title: "Manta Community Boat & Canal Living Experience",
    bn_title: "মান্তা যাযাবর সম্প্রদায় বোট ও ক্যানেল ক্যাম্পিং",
    slug: "manta-community-living-experience",
    destination_id: 4,
    destination: {
      id: 4,
      name: "Char Montaz",
      bn_name: "চর মোন্তাজ",
      district: "Patuakhali (Rangabali)",
      ghat_name: "Char Montaz Central Launch Ghat"
    },
    category: "Manta Community Life",
    price_per_night: 1400,
    special_package_price: 1800,
    capacity: 3,
    description: "চর মোন্তাজ ও চর হেয়ারের বুকে যুগ যুগ ধরে নৌকায় জীবনযাপন করা জলের যাযাবর 'মান্তা সম্প্রদায়'-এর সাথে গভীর মানবিক ও সাংস্কৃতিক মেলবন্ধন। মান্তা পরিবারের সাথে ঐতিহ্যবাহী কাঠের ছৈ-ওয়ালা নৌকায় জোয়ার-ভাটায় ভেসে থাকা, তাদের সাথে জাল ফেলে তাজা ইলিশ ও সামুদ্রিক মাছ ধরা, এবং নৌকার মাটির চুলায় রান্নার অবিস্মরণীয় অভিজ্ঞতা।",
    who_can_come: "যারা জলজ যাযাবর জীবনধারা, নদী-উপকূলের মানুষ এবং লোকজ সংস্কৃতির প্রতি শ্রদ্ধাশীল। ফটোগ্রাফার, লেখক এবং বাস্তব জীবন সন্ধানী পরিব্রাজক।",
    who_not_suited: "যাদের জল-ভীতি আছে কিংবা যাযাবর জনগোষ্ঠীর জীবনধারাকে সম্মান জানানোর মানসিকতা নেই।",
    meal_plan: {
      lunch: "তাজা নদীর ইলিশ / রূপচাঁদা মাছ + গরম ভাত + কাঁচামরিচ ও পেঁয়াজ + ডাল",
      afternoon: "নৌকায় বসে ধোঁয়া ওঠা আদা চা ও মুড়ি",
      dinner_bbq: "জ্বালানো কাঠকয়লায় তাজা নদীর মাছ পোড়া + স্থানীয় রুটি ও পেঁয়াজ-টমেটো ভর্তা",
      breakfast: "গরম খিচুড়ি ও ডিম ভুনা"
    },
    amenities: [
      "Traditional Wooden Roofed Boat (ছৈ-ওয়ালা নৌকা) Overnight Stay",
      "Clean Bedding, Mosquito Nets & Pillows",
      "Fresh River Hilsa & Fish Meals Prepared on Boat",
      "Artisan Fishing Net Casting with Manta Elders",
      "Char Montaz Canal Dyke Sunset Walking Tour",
      "Life Jackets & Emergency Buoys",
      "Solar Lantern & Mobile Charging Hub",
      "Clean Village Washroom Access on Canal Bank"
    ],
    images: [
      "/images/manta-community-boats.jpg",
      "/images/manta-fishing.jpg",
      "/images/manta-boat-life.jpg",
      "/images/char-montaz-village.jpg",
      "/images/char-montaz-homestay.jpg"
    ],
    rating: 4.9,
    review_count: 42,
    instant_book: true,
    host_name: "Kader Majhi & Manta Community Elders",
    host_phone: "+8801712000202",
    host_badge: "Indigenous Manta Cultural Host",
    ghat_info: "Char Montaz canal landing point, 5 mins walk from Launch Ghat",
    boat_schedule: "Direct launch reaches Char Montaz daily at 7:30 AM. Kader Majhi meets you at the pontoon.",
    rules: [
      "মান্তা পরিবারের সদস্য ও নারীদের অনুমতি ছাড়া ব্যক্তিগত ছবি তোলা যাবে না।",
      "নদীতে কোনো প্লাস্টিক বা আবর্জনা ফেলা যাবে না।",
      "নৌকায় চলাফেরার সময় লাইফ জ্যাকেট ব্যবহার বাধ্যতামূলক।"
    ]
  },
  {
    id: 3,
    title: "Shonar Char Golden Mangrove Wilderness Camp",
    bn_title: "সোনার চর ম্যানগ্রোভ ও ওয়াইল্ডারনেস ক্যাম্প",
    slug: "shonar-char-wilderness-camp",
    destination_id: 2,
    destination: {
      id: 2,
      name: "Shonar Char",
      bn_name: "সোনার চর",
      district: "Patuakhali (Rangabali)",
      ghat_name: "Galachipa / Char Montaz Ghat"
    },
    category: "Mangrove & Wilderness",
    price_per_night: 1800,
    special_package_price: 2300,
    capacity: 4,
    description: "বঙ্গোপসাগরের কোলঘেঁষে গড়ে ওঠা অপরূপ ম্যানগ্রোভ বন ও অবিরাম সোনালী সৈকতের দ্বীপ 'সোনার চর'। ভোরের সূর্যোদয় এবং গোধূলির সূর্যাস্ত দুটোই অবলোকন করা যায় একই স্থান থেকে। বনের গভীর ট্রেইলে চিত্রা হরিণের পদচিহ্ন, বানর ও দেশি-বিদেশি পরিযায়ী পাখির মেলা। ক্যাম্পসাইটে রয়েছে শক্তিশালী ওয়াটারপ্রুফ তাবু, ফায়ার পিট ও বনফায়ারের ব্যবস্থা।",
    who_can_come: "যারা বন্য ম্যানগ্রোভ, হরিণের ট্রেইল, লাল কাঁকড়া ও সোনালী বালুকাবেলায় ক্যাম্পিং ভালোবাসেন।",
    who_not_suited: "বন্য প্রকৃতির নিঃশব্দতা যাদের সহ্য হয় না কিংবা যারা শহরের বিলাসবহুল আসবাব ছাড়া থাকতে পারেন না।",
    meal_plan: {
      lunch: "ভাত + হরিণঘাটা/চর মন্টাজের সামুদ্রিক মাছ + ডিম + ভর্তা + ডাল",
      afternoon: "লেবুর শরবত ও পেঁয়াজু/মুড়ি মাখা",
      dinner_bbq: "সৈকতে লাইভ চিকেন/ফিশ বার্বিকিউ + গরম পরোটা + সস",
      breakfast: "ভুনা খিচুড়ি + ডিম অমলেট + আচার"
    },
    amenities: [
      "Safari Canvas Dome Tents with Thermal Foam",
      "Campfire & Mangrove Fire Ring",
      "Guided Forest Trail for Wild Deer Watching",
      "Fresh Tube-well Water",
      "Eco Bio-Washrooms",
      "Solar Lighting & USB Hub",
      "First Aid & Emergency Radio",
      "Local Forest Scout & Guide"
    ],
    images: [
      "/images/shonar-char-mangrove.jpg",
      "/images/shonar-char-deer.jpg",
      "/images/shonar-char-sunset.jpg",
      "/images/char-heyar-tents.jpg",
      "/images/seafood-bbq.jpg"
    ],
    rating: 4.88,
    review_count: 34,
    instant_book: true,
    host_name: "Alamgir Hossain",
    host_phone: "+8801911000303",
    host_badge: "Shonar Char Wildlife Ranger",
    ghat_info: "Pick-up from Char Montaz via scenic 40 mins engine trawler",
    boat_schedule: "Morning trawler departs Char Montaz at 8:30 AM to Shonar Char channel.",
    rules: [
      "বন্য হরিণকে কোনো অবস্থাতেই তাড়া করা বা খাবার দেওয়া যাবে না।",
      "বনে প্রবেশকালে কোনো প্রকার প্লাস্টিক বা দাহ্য পদার্থ নেওয়া নিষেধ।",
      "সূর্যাস্তের পর বনের গহীনে একাকী প্রবেশ নিষিদ্ধ।"
    ]
  },
  {
    id: 4,
    title: "Char Montaz Village Eco-Homestay",
    bn_title: "চর মোন্তাজ ভিলেজ ইকো-হোমস্টে",
    slug: "char-montaz-village-homestay",
    destination_id: 4,
    destination: {
      id: 4,
      name: "Char Montaz",
      bn_name: "চর মোন্তাজ",
      district: "Patuakhali (Rangabali)",
      ghat_name: "Char Montaz Central Launch Ghat"
    },
    category: "Village Homestays",
    price_per_night: 1200,
    special_package_price: 1600,
    capacity: 5,
    description: "চর মোন্তাজ দ্বীপের শান্ত সবুজ গ্রামে স্থানীয় পরিবারের আতিথেয়তায় কাঠের দোতলা মাটির ভিটের ঘরে থাকার খাঁটি অভিজ্ঞতা। উঠোনে হ্যামকে শুয়ে বাতাস খাওয়া, সাইকেলে মেঠোপথে ঘুরে বেড়ানো, তাজা হাঁসের মাংস ও নদীর ইলিশ খাওয়া এবং মান্তা খালের জেলেদের জীবনযাত্রা কাছ থেকে দেখার সুযোগ।",
    who_can_come: "গ্রাম্য জীবন, আন্তরিক আতিথেয়তা ও মেঠোপথপ্রেমী ভ্রমণপিপাসু পরিবার বা বন্ধুদের জন্য আদর্শ।",
    who_not_suited: "শহুরে কৃত্রিম বিলাসিতা প্রত্যাশীদের জন্য নয়।",
    meal_plan: {
      lunch: "গ্রাম্য হাঁসের ঝাল ভুনা / তাজা ইলিশ মাছ + ঢেঁকিছাঁটা চালের ভাত + কচুশাক/ভর্তা + পাতলা ডাল",
      afternoon: "গাছের ডাবের পানি ও ঘরে ভাজা চালের মোয়া/মুড়ি",
      dinner_bbq: "দেশি মুরগি ভুনা / বার্বিকিউ + চিতই পিঠা/রুটি",
      breakfast: "হাঁসের ডিম পোচ + চালের আটার রুটি অথবা গরম খিচুড়ি"
    },
    amenities: [
      "Authentic Island Wooden Home Rooms",
      "Fresh Village Cooked Traditional Meals",
      "Village Bicycles for Island Touring",
      "Clean Sanitary Toilet & Bath",
      "Sweet Tube-well Water",
      "Courtyard Hammock & Open Porch",
      "24/7 Electricity via Solar & Battery",
      "Local Island Family Host"
    ],
    images: [
      "/images/char-montaz-homestay.jpg",
      "/images/char-montaz-village.jpg",
      "/images/manta-community-boats.jpg",
      "/images/manta-fishing.jpg",
      "/images/shonar-char-sunset.jpg"
    ],
    rating: 4.92,
    review_count: 28,
    instant_book: true,
    host_name: "Master Ruhul Amin",
    host_phone: "+8801822000404",
    host_badge: "Respected Island Educator & Host",
    ghat_info: "10 mins rickshaw or motorcycle ride from Char Montaz Launch Ghat",
    boat_schedule: "Direct launch from Dhaka docks right at Char Montaz Launch Ghat.",
    rules: [
      "গ্রাম্য পরিবেশের শালীনতা ও সংস্কৃতি রক্ষা করে চলাফেরা করতে হবে।",
      "ধূমপান কেবল বাড়ির নির্ধারিত খোলামেলা স্থানে অনুমোদিত।"
    ]
  },
  {
    id: 5,
    title: "Jahaj Mara Estuary Sunset Camp",
    bn_title: "জাহাজ মারা এস্টুয়ারি সানসেট ক্যাম্প",
    slug: "jahaj-mara-sunset-camp",
    destination_id: 3,
    destination: {
      id: 3,
      name: "Jahaj Mara",
      bn_name: "জাহাজ মারা",
      district: "Patuakhali (Rangabali)",
      ghat_name: "Jahaj Mara Canal Ghat"
    },
    category: "Mangrove & Wilderness",
    price_per_night: 1400,
    special_package_price: 1900,
    capacity: 3,
    description: "জাহাজ মারার শান্ত মোহনা ও ঝাউবাগানের ছায়ায় তাবু খাটিয়ে থাকার এক অপার্থিব রোমাঞ্চ। এখানে নেই কোনো মানুষের শোরগোল—আছে কেবল নদীর কলতান আর গোধূলির রক্তিম আকাশ। রাতে খোলা বালুচরে বসে তারা দেখার অপূর্ব সুযোগ।",
    who_can_come: "নিঃশব্দতা ও গভীর নির্জনতা প্রিয় ক্যাম্পার, কাপল ও ছোট ট্রাভেলার গ্রুপ।",
    who_not_suited: "জনবহুল বাজার বা আধুনিক রিসোর্ট প্রত্যাশীদের জন্য নয়।",
    meal_plan: {
      lunch: "ভাত + মোহনার টাটকা বেলে/কোড়াল মাছ + আলুভর্তা + ডাল",
      afternoon: "চা ও মুড়ি চানাচুর",
      dinner_bbq: "ক্যাম্পফায়ারে রোস্টেড চিকেন/মাছ বার্বিকিউ + রুটি",
      breakfast: "ডিম খিচুড়ি ও সালাদ"
    },
    amenities: [
      "Heavy-duty Windproof Dome Tent",
      "Comfortable Foam Mattress & Blanket",
      "Estuary Beach Campfire Ring & Wood",
      "Clean Drinking Water",
      "Sanitary Bio-Toilet Tent",
      "Solar Torch & Camping Lights",
      "Beach Chairs & Hammocks"
    ],
    images: [
      "/images/jahaj-mara-estuary.jpg",
      "/images/jahaj-mara-pines.jpg",
      "/images/char-heyar-campfire.jpg",
      "/images/char-heyar-tents.jpg",
      "/images/shonar-char-sunset.jpg"
    ],
    rating: 4.82,
    review_count: 22,
    instant_book: true,
    host_name: "Belal Hossain",
    host_phone: "+8801555000505",
    host_badge: "Estuary Navigator & Camp Host",
    ghat_info: "Pick up by country trawler from Jahaj Mara canal mouth",
    boat_schedule: "Connecting boats run daily from Galachipa and Char Montaz.",
    rules: [
      "জোয়ারের সময় নির্ধারিত উঁচু বালুর জায়গায় ক্যাম্প স্থাপন নিশ্চিত করা হয়।",
      "ক্যাম্পফায়ারের আগুন সম্পূর্ণ নিভিয়ে ঘুমাতে হবে।"
    ]
  },
  {
    id: 6,
    title: "Kuakata Gangchil Marine Glamping",
    bn_title: "কুয়াকাটা গাংচিল মেরিন গ্ল্যাম্পিং",
    slug: "kuakata-gangchil-glamping",
    destination_id: 5,
    destination: {
      id: 5,
      name: "Kuakata",
      bn_name: "কুয়াকাটা",
      district: "Patuakhali",
      ghat_name: "Gangamati & Kawar Char Estuary Ghat"
    },
    category: "Kuakata Glamping",
    price_per_night: 2400,
    special_package_price: 3000,
    capacity: 3,
    description: "কুয়াকাটার গঙ্গামতির নির্জন বিচ পয়েন্টে প্রিমিয়াম সাফারি গ্ল্যাম্পিং তাবু। একই সৈকত থেকে সূর্যোদয় ও সূর্যাস্ত দেখার রাজকীয় আনন্দ। এখান থেকেই নিয়মিত স্পিডবোট ও ট্রলারে করে চর হেয়ার, সোনার চর ও চর মোন্তাজে অ্যাডভেঞ্চার ডে-ট্রিপ পরিচালিত হয়।",
    who_can_come: "একটু বেশি আরামপ্রিয় ক্যাম্পার, কাপল ও ফ্যামিলি যারা চর হেয়ার ভ্রমণের আগে বা পরে কুয়াকাটায় সমুদ্রমুখী আরাম চান।",
    who_not_suited: "যারা কোনো নিয়ম মানতে চান না।",
    meal_plan: {
      lunch: "কুয়াকাটার সামুদ্রিক রূপচাঁদা/ইলিশ ফ্রাই + ভাত + রকমারি ভর্তা + ডাল",
      afternoon: "কফি/চা ও ফ্রুটস",
      dinner_bbq: "বিচ সাইড সিফুড ও চিকেন বার্বিকিউ প্ল্যাটার + নান রুটি",
      breakfast: "বুফে নাস্তা (পরোটা, ডিম, সবজি, ফল, চা)"
    },
    amenities: [
      "Luxury Safari Canvas Glamping Tent",
      "High-Density Spring Mattress & Crisp Linens",
      "Private Ensuite Sanitary Washroom",
      "Direct Oceanfront Sunrise & Sunset View",
      "220V Solar Inverter Electricity",
      "High-Speed Boat Charter Desk for Char Heyar",
      "Beach Loungers & Private Deck"
    ],
    images: [
      "/images/kuakata-glamping-tents.jpg",
      "/images/kuakata-gangchil-beach.jpg",
      "/images/char-heyar-sandbar.jpg",
      "/images/seafood-bbq.jpg",
      "/images/shonar-char-sunset.jpg"
    ],
    rating: 4.94,
    review_count: 48,
    instant_book: true,
    host_name: "Nazmul Hasan",
    host_phone: "+8801733000606",
    host_badge: "Coastal Glamping Specialist",
    ghat_info: "Gangamati Beach Point, 15 mins motorcycle/buggy ride from Kuakata Zero Point",
    boat_schedule: "Speedboat charters to Char Heyar and Shonar Char available every morning from Gangamati.",
    rules: [
      "তাবুর ভেতর ধূমপান নিষেধ।",
      "সৈকত পরিস্কার রাখার নিয়মাবলি মেনে চলতে হবে।"
    ]
  }
];

export const ADDONS_LIST = [
  {
    id: "special_meal",
    title: "Special Package Upgrade (স্পেশাল প্যাকেজ আপগ্রেড)",
    description: "দুপুরে চিকেন ও মাছ দুটোই + রাত ৮-৯ টায় পূর্ণাঙ্গ অতিরিক্ত ডিনার (ভাত, মাছ/মাংস, ভর্তা, ডাল)।",
    price: 500,
    unit: "per person"
  },
  {
    id: "manta_boat",
    title: "Manta Community Canal Wooden Boat Sail (মান্তা খালের দেশি নৌকা ভ্রমণ)",
    description: "মান্তা পরিবারের সাথে ঐতিহ্যবাহী ছৈ-ওয়ালা কাঠের নৌকায় ২ ঘণ্টার মোহনা ও ম্যানগ্রোভ খাল ভ্রমণ।",
    price: 450,
    unit: "per person"
  },
  {
    id: "watchtower_bonfire",
    title: "Acoustic Campfire & Cajon Musical Night (বনফায়ার ও মিউজিক নাইট)",
    description: "কাঠকয়লার আগুন, উকুলেলে ও কাহন বাজনার সাথে সৈকতে গান ও আড্ডার আয়োজন।",
    price: 300,
    unit: "per person"
  }
];
