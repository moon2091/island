export const DESTINATIONS = [
  {
    id: 1,
    name: "Saint Martin's Island",
    district: "Cox's Bazar",
    ghat_name: "Teknaf Ship Jetty / Inani Navy Jetty",
    boat_schedule: "Daily tourist ships depart at 9:00 AM (Teknaf/Inani) and return 3:00 PM from Saint Martin Jetty. Speedboats operate between 8:00 AM - 5:00 PM.",
    banner_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "Bangladesh's only coral island with crystal-clear turquoise waters and coconut groves."
  },
  {
    id: 2,
    name: "Sonadia Island",
    district: "Cox's Bazar",
    ghat_name: "Ghat No. 6, Maheshkhali",
    boat_schedule: "Speedboats & engine country boats depart Ghat 6 every 45 mins from 7:30 AM to 4:30 PM. 35 mins crossing.",
    banner_image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    description: "Crescent-shaped barrier island with wild mangroves, waterfowl, and pristine sand dunes."
  },
  {
    id: 3,
    name: "Nijhum Dwip",
    district: "Noakhali",
    ghat_name: "Chairman Ghat, Hatiya",
    boat_schedule: "Sea trucks depart Chairman Ghat at 8:30 AM and 1:30 PM to Nalchira/Muktaria. Connecting wooden boat across canal to Namar Bazar.",
    banner_image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    description: "Serene estuarine island famed for thousands of spotted deer and virgin Keora forest trails."
  },
  {
    id: 4,
    name: "Sandwip Island",
    district: "Chattogram",
    ghat_name: "Kumira Ghat, Sitakunda",
    boat_schedule: "BIWTC Sea Truck departs Kumira at 9:00 AM. Fast speedboats operate continuously 8:00 AM to 4:30 PM subject to tide.",
    banner_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    description: "Ancient 3,000-year-old island known for rolling green dykes, water buffalo, and crimson sunsets."
  },
  {
    id: 5,
    name: "Kaptai Lake Islands",
    district: "Rangamati",
    ghat_name: "Reserve Bazar / Kaptai BFIDC Ghat",
    boat_schedule: "Traditional wooden engine trawlers (Shampan boats) hourly. Private kayaks and speedboats available on charter until dusk.",
    banner_image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "Emerald hillock islands floating in the heart of the Chittagong Hill Tracts reservoir."
  },
  {
    id: 6,
    name: "Kuakata Gangchil Beach",
    district: "Patuakhali",
    ghat_name: "Gangamati Canal Ghat",
    boat_schedule: "Country motor trawlers available at Gangamati estuary from 6:00 AM to 6:00 PM for access to Kawar Char and Char Bijoy.",
    banner_image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    description: "Daughter of the Sea where you can watch the sunrise and sunset over the Bay from the same sandy spit."
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Camps", icon: "Compass" },
  { id: "beachfront", name: "Beachfront Tents", icon: "Waves" },
  { id: "glamping", name: "Island Glamping", icon: "Sparkles" },
  { id: "forest", name: "Forest Camps", icon: "Trees" },
  { id: "lake", name: "Lake Islands", icon: "Sailboat" },
  { id: "bbq", name: "Campfire & BBQ", icon: "Flame" },
  { id: "offgrid", name: "Off-Grid Adventure", icon: "Tent" },
];

export const SEED_CAMPSITES = [
  {
    id: 1,
    title: "Saint Martin's Coral Beach Camp",
    slug: "saint-martins-coral-beach-camp",
    destination_id: 1,
    destination: {
      id: 1,
      name: "Saint Martin's Island",
      district: "Cox's Bazar",
      ghat_name: "Teknaf Ship Jetty / Inani Navy Jetty"
    },
    category: "Beachfront Tents",
    price_per_night: 2800,
    capacity: 3,
    description: "Nestled along the pristine southern coral shores of Saint Martin with direct unobstructed views of Chera Dwip. Fall asleep to gentle oceanic tides, awake to luminous blue waters, and enjoy freshly grilled coral fish by the evening beach bonfire. Our heavy-duty waterproof canvas dome tents are erected on elevated bamboo platforms to ensure maximum comfort and ventilation.",
    amenities: [
      "Canvas Dome Tent",
      "Sleeping Bags & Foam Mats",
      "Campfire & BBQ Pit",
      "Fresh Water Bucket Shower",
      "Solar Power Charging",
      "Flush Toilets",
      "Life Jackets",
      "First Aid Kit",
      "Local Island Guide"
    ],
    images: [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    review_count: 38,
    instant_book: true,
    host_name: "Captain Rafiqul Islam",
    host_phone: "+8801819000101",
    host_badge: "Superhost & Coral Warden",
    ghat_info: "15 mins battery tom-tom ride south of Saint Martin Main Jetty",
    boat_schedule: "Daily ships depart Teknaf at 9:00 AM, arrive Saint Martin at 12:00 PM. Return ships at 3:00 PM.",
    rules: [
      "No plastic waste left on the coral beach (Leave No Trace).",
      "Quiet hours after 11:00 PM to respect nesting marine wildlife.",
      "Campfires only permitted inside designated fire rings."
    ]
  },
  {
    id: 2,
    title: "Sonadia Island Eco Wilderness Camp",
    slug: "sonadia-island-eco-wilderness-camp",
    destination_id: 2,
    destination: {
      id: 2,
      name: "Sonadia Island",
      district: "Cox's Bazar",
      ghat_name: "Ghat No. 6, Maheshkhali"
    },
    category: "Off-Grid Adventure",
    price_per_night: 2200,
    capacity: 2,
    description: "Raw, tranquil, and untouched. Sonadia is a crescent-shaped barrier island where thousands of migratory waterfowl feed along mangrove canals. Experience authentic off-grid wild beach camping under thousands of stars with zero light pollution. Authentic dry fish culinary experiences and local crab barbecues prepared with island fishermen.",
    amenities: [
      "Waterproof 2-Person Tent",
      "Thermal Sleeping Pad",
      "Campfire Wood Provided",
      "Packaged Mineral Water",
      "Solar Torch Lanterns",
      "Eco Bio-Toilet",
      "Life Jackets",
      "Mud Boot Covers"
    ],
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    review_count: 24,
    instant_book: true,
    host_name: "Master Joynal Abedin",
    host_phone: "+8801712000202",
    host_badge: "Mangrove Ranger",
    ghat_info: "Pick up directly by boat from Ghat No. 6, Maheshkhali",
    boat_schedule: "Speedboats run every 45 mins from Ghat 6 until 4:30 PM. Host meets guests at Ghat 6 with prior notice.",
    rules: [
      "Zero light pollution near red crab colonies.",
      "Swimming is restricted to safe daylight tide windows.",
      "Respect local fishing families and mangrove conservation."
    ]
  },
  {
    id: 3,
    title: "Nijhum Dwip Deer Trail Forest Camp",
    slug: "nijhum-dwip-deer-trail-forest-camp",
    destination_id: 3,
    destination: {
      id: 3,
      name: "Nijhum Dwip",
      district: "Noakhali",
      ghat_name: "Chairman Ghat, Hatiya"
    },
    category: "Forest Camps",
    price_per_night: 2500,
    capacity: 4,
    description: "Set on the edge of the famous Keora forest where herds of wild spotted deer (Chitra Horin) roam freely at dawn and twilight. Pitch your tent between coastal tidal trees and watch the sunrise over the Bay of Bengal estuary. Evening forest walks guided by native island naturalist.",
    amenities: [
      "Safari Style Tents",
      "Sleeping Cots & Pillows",
      "Campfire & BBQ Spit",
      "Fresh Tube-well Water",
      "Solar USB Hub",
      "Sanitary Toilet Tent",
      "Binoculars for Wildlife",
      "Forest Guide"
    ],
    images: [
      "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    review_count: 31,
    instant_book: true,
    host_name: "Kawsar Ahmed",
    host_phone: "+8801911000303",
    host_badge: "Wildlife Conservation Guide",
    ghat_info: "10 mins motorcycle ride from Namar Bazar Ghat",
    boat_schedule: "Sea truck from Chairman Ghat at 8:30 AM and 1:30 PM. Allow 3 hours total journey from Chairman Ghat.",
    rules: [
      "Do not feed or approach wild deer closer than 20 meters.",
      "Smoking strictly forbidden inside forest canopy.",
      "Bring mosquito repellent for twilight forest hours."
    ]
  },
  {
    id: 4,
    title: "Sandwip Island Estuary Sunset Retreat",
    slug: "sandwip-island-estuary-sunset-retreat",
    destination_id: 4,
    destination: {
      id: 4,
      name: "Sandwip Island",
      district: "Chattogram",
      ghat_name: "Kumira Ghat, Sitakunda"
    },
    category: "Campfire & BBQ",
    price_per_night: 2100,
    capacity: 3,
    description: "Perched on the vast western mudflats and grassy dykes of Sandwip Island, overlooking the turbulent beauty of the Meghna estuary. Renowned for spectacular panoramic crimson sunsets, open-skies stargazing, and traditional slow-cooked Hilsa fish feasts over an open campfire.",
    amenities: [
      "Windproof Dome Tent",
      "Sleeping Bags",
      "Charcoal Grill & Skewers",
      "Fresh Drinking Water",
      "Solar Lanterns",
      "Camp Stools & Table",
      "First Aid Box"
    ],
    images: [
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    review_count: 19,
    instant_book: true,
    host_name: "Tariqul Haque",
    host_phone: "+8801822000404",
    host_badge: "Island Historian & Host",
    ghat_info: "Guptachara Ghat, transfer arranged via auto-rickshaw",
    boat_schedule: "Speedboats operate between Kumira and Guptachara from 8:00 AM to 4:30 PM. Journey time 25 mins.",
    rules: [
      "Check tide calendar before planning estuary walks.",
      "Respect local village customs and prayer timings.",
      "Campfire must be completely extinguished with sand before sleep."
    ]
  },
  {
    id: 5,
    title: "Kaptai Lake Emerald Island Camp",
    slug: "kaptai-lake-emerald-island-camp",
    destination_id: 5,
    destination: {
      id: 5,
      name: "Kaptai Lake Islands",
      district: "Rangamati",
      ghat_name: "Reserve Bazar / Kaptai BFIDC Ghat"
    },
    category: "Lake Islands",
    price_per_night: 3200,
    capacity: 4,
    description: "A secluded private hillock island situated in the sapphire waters of Kaptai Lake, enveloped by lush tropical hills and pine valleys. Spend your afternoons swimming in freshwater, paddling touring kayaks around hidden coves, and gathering around a hilltop campfire with bamboo-cooked indigenous delicacies.",
    amenities: [
      "All-Weather Bell Tent",
      "Foam Mattresses & Blankets",
      "Kayaks & Paddles Included",
      "Campfire Ring & Wood",
      "Solar Battery Hub",
      "Flush Toilet & Enclosed Bath",
      "Life Vests",
      "Hammocks"
    ],
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.95,
    review_count: 52,
    instant_book: true,
    host_name: "Mong Marma",
    host_phone: "+8801555000505",
    host_badge: "Indigenous Lake Navigator",
    ghat_info: "20 mins private boat ride from Kaptai BFIDC Ghat",
    boat_schedule: "Host boat meets you at BFIDC Ghat at agreed time. Kayaks available anytime.",
    rules: [
      "Life vest mandatory for all lake swimming and kayaking.",
      "Respect indigenous hill community cultural boundaries.",
      "No soap or shampoo directly in lake water."
    ]
  },
  {
    id: 6,
    title: "Kuakata Gangchil Island Glamping",
    slug: "kuakata-gangchil-island-glamping",
    destination_id: 6,
    destination: {
      id: 6,
      name: "Kuakata Gangchil Beach",
      district: "Patuakhali",
      ghat_name: "Gangamati Canal Ghat"
    },
    category: "Island Glamping",
    price_per_night: 3800,
    capacity: 2,
    description: "Experience luxury eco-glamping right where you can watch both the sun rise from the sea and dip below the horizon without changing your campsite. Featuring premium safari canvas tents, handcrafted driftwood furniture, warm lighting, private verandah seating, and personalized seafood dining under the stars.",
    amenities: [
      "Luxury Glamping Safari Tent",
      "Spring Mattress & Linen",
      "Private Beach Deck",
      "Campfire & Seafood BBQ",
      "Solar Inverter Power (220V)",
      "Private Ensuite Toilet",
      "Welcome Island Drink",
      "High-Powered Telescope"
    ],
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    review_count: 29,
    instant_book: true,
    host_name: "Nazmul Hasan",
    host_phone: "+8801733000606",
    host_badge: "Coastal Glamping Specialist",
    ghat_info: "Gangamati Beach Point, pick up by beach buggy",
    boat_schedule: "Direct road and canal access from Kuakata Zero Point (20 mins by bike or 4x4).",
    rules: [
      "Footwear removal inside luxury safari tent.",
      "Complimentary breakfast served between 7:30 AM and 9:30 AM.",
      "Late check-out available on request."
    ]
  }
];

export const ADDONS_LIST = [
  {
    id: "bbq",
    title: "Fresh Catch Campfire BBQ Feast",
    description: "Locally sourced coral fish / river Hilsa, marinated country spices, grilled over wood coals with parathas and salad.",
    price: 650,
    unit: "per person"
  },
  {
    id: "kayak",
    title: "Tandem Ocean/Lake Kayak & Safety Gear",
    description: "2-person touring kayak with high-buoyancy life vests and dry bags for island exploration.",
    price: 400,
    unit: "per hour"
  },
  {
    id: "sleeping_bag",
    title: "Ultra-Warm Goose Down Sleeping Bag Upgrade",
    description: "Sub-zero rated sleeping bag and ergonomic memory foam travel pillow for chilly island nights.",
    price: 250,
    unit: "per person"
  }
];
