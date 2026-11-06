from database import SessionLocal, engine, Base
from models import Destination, Campsite

DESTINATIONS_DATA = [
    {
        "name": "Char Hare",
        "district": "Patuakhali (Rangabali)",
        "ghat_name": "Char Montaz Ghat / Koralia Launch Ghat",
        "boat_schedule": "Daily launch from Dhaka (Sadarghat) to Char Montaz departing 5:30 PM. From Char Montaz, 45-60 mins local engine trawler / speedboat to Char Hare sandbar.",
        "map_coordinates": "21.8542, 90.5218",
        "banner_image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Shonar Char",
        "district": "Patuakhali (Rangabali)",
        "ghat_name": "Galachipa / Char Montaz Ghat",
        "boat_schedule": "Connecting trawlers leave Char Montaz at 8:00 AM and 1:00 PM. Reserve speedboats can reach Shonar Char in 40 mins.",
        "map_coordinates": "21.8025, 90.4789",
        "banner_image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Jahaj Mara",
        "district": "Patuakhali (Rangabali)",
        "ghat_name": "Jahaj Mara Canal Ghat",
        "boat_schedule": "Country boats and trawlers depart Galachipa or Kuakata Gangamati canal daily through sheltered estuary waterways.",
        "map_coordinates": "21.8211, 90.3842",
        "banner_image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Char Montaz",
        "district": "Patuakhali (Rangabali)",
        "ghat_name": "Char Montaz Central Launch Ghat",
        "boat_schedule": "Direct Dhaka-Char Montaz launch arrives every morning at 7:30 AM. Ancestral water habitat of the indigenous Manta Community.",
        "map_coordinates": "21.9214, 90.5486",
        "banner_image": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Kuakata",
        "district": "Patuakhali",
        "ghat_name": "Gangamati & Kawar Char Estuary Ghat",
        "boat_schedule": "Direct highway connection from Dhaka (6-7 hrs). Marine speedboats and trawlers to Char Hare depart Gangamati Point.",
        "map_coordinates": "21.8167, 90.1167",
        "banner_image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    }
]

CAMPSITES_DATA = [
    {
        "title": "Camp De Char Hare - Watchtower & Beach Camp",
        "slug": "camp-de-char-hare",
        "destination_name": "Char Hare",
        "category": "Char Hare Camps",
        "price_per_night": 1500,
        "capacity": 4,
        "description": "নীরবে নিভৃতে তাবুতে থেকে বঙ্গোপসাগরের উত্তাল সমুদ্র, অনন্ত বালিয়াড়ি, কোটি লাল কাঁকড়া, এবং ঝাউগাছের অকৃত্তিম সৌন্দর্য অবলোকনের জন্য চর হেয়ারের একমাত্র সুসজ্জিত আউটডোর ক্যাম্প সাইট। দ্বীপের একমাত্র কাঠের ওয়াচ টাওয়ার থেকে পুরো সমুদ্র ও সৈকত অবলোকন সম্ভব। রয়েছে নিজস্ব কিচেন, ৩টি পরিষ্কার ওয়াশরুম, ২টি মিষ্টি পানির টিউবওয়েল, এবং রাতে নিরাপত্তার জন্য সার্বক্ষণিক নাইট গার্ড।",
        "amenities": [
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
            "Campfire & Acoustic Bonfire Area"
        ],
        "images": [
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.95,
        "review_count": 56,
        "instant_book": True,
        "host_name": "Camp Master Shumon & Island Crew",
        "host_phone": "+8801819000101",
        "host_badge": "Verified Char Hare Island Guardian",
        "ghat_info": "Char Montaz / Koralia Ghat -> 45 mins local engine trawler / speedboat to Char Hare sandbar"
    },
    {
        "title": "Manta Community Boat & Canal Living Experience",
        "slug": "manta-community-living-experience",
        "destination_name": "Char Montaz",
        "category": "Manta Community Life",
        "price_per_night": 1400,
        "capacity": 3,
        "description": "চর মোন্তাজ ও চর হেয়ারের বুকে যুগ যুগ ধরে নৌকায় জীবনযাপন করা জলের যাযাবর 'মান্তা সম্প্রদায়'-এর সাথে গভীর মানবিক ও সাংস্কৃতিক মেলবন্ধন। মান্তা পরিবারের সাথে ঐতিহ্যবাহী কাঠের ছৈ-ওয়ালা নৌকায় জোয়ার-ভাটায় ভেসে থাকা, জাল ফেলে তাজা মাছ ধরা, এবং নৌকার মাটির চুলায় রান্নার অবিস্মরণীয় অভিজ্ঞতা।",
        "amenities": [
            "Traditional Wooden Roofed Boat Overnight Stay",
            "Clean Bedding, Mosquito Nets & Pillows",
            "Fresh River Hilsa & Fish Meals Prepared on Boat",
            "Artisan Fishing Net Casting with Manta Elders",
            "Char Montaz Canal Dyke Sunset Walking Tour",
            "Life Jackets & Emergency Buoys",
            "Solar Lantern & Mobile Charging Hub",
            "Clean Village Washroom Access"
        ],
        "images": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.9,
        "review_count": 42,
        "instant_book": True,
        "host_name": "Kader Majhi & Manta Community Elders",
        "host_phone": "+8801712000202",
        "host_badge": "Indigenous Manta Cultural Host",
        "ghat_info": "Char Montaz canal landing point, 5 mins walk from Launch Ghat"
    },
    {
        "title": "Shonar Char Golden Mangrove Wilderness Camp",
        "slug": "shonar-char-wilderness-camp",
        "destination_name": "Shonar Char",
        "category": "Mangrove & Wilderness",
        "price_per_night": 1800,
        "capacity": 4,
        "description": "বঙ্গোপসাগরের কোলঘেঁষে গড়ে ওঠা অপরূপ ম্যানগ্রোভ বন ও অবিরাম সোনালী সৈকতের দ্বীপ 'সোনার চর'। ভোরের সূর্যোদয় এবং গোধূলির সূর্যাস্ত দুটোই অবলোকন করা যায় একই স্থান থেকে। বনের গভীর ট্রেইলে চিত্রা হরিণের পদচিহ্ন, বানর ও দেশি-বিদেশি পরিযায়ী পাখির মেলা।",
        "amenities": [
            "Safari Canvas Dome Tents with Thermal Foam",
            "Campfire & Mangrove Fire Ring",
            "Guided Forest Trail for Wild Deer Watching",
            "Fresh Tube-well Water",
            "Eco Bio-Washrooms",
            "Solar Lighting & USB Hub",
            "First Aid & Emergency Radio"
        ],
        "images": [
            "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.88,
        "review_count": 34,
        "instant_book": True,
        "host_name": "Alamgir Hossain",
        "host_phone": "+8801911000303",
        "host_badge": "Shonar Char Wildlife Ranger",
        "ghat_info": "Pick-up from Char Montaz via scenic 40 mins engine trawler"
    },
    {
        "title": "Char Montaz Village Eco-Homestay",
        "slug": "char-montaz-village-homestay",
        "destination_name": "Char Montaz",
        "category": "Village Homestays",
        "price_per_night": 1200,
        "capacity": 5,
        "description": "চর মোন্তাজ দ্বীপের শান্ত সবুজ গ্রামে স্থানীয় পরিবারের আতিথেয়তায় কাঠের দোতলা মাটির ভিটের ঘরে থাকার খাঁটি অভিজ্ঞতা। উঠোনে হ্যামকে শুয়ে বাতাস খাওয়া, সাইকেলে মেঠোপথে ঘুরে বেড়ানো, তাজা হাঁসের মাংস ও নদীর ইলিশ খাওয়া।",
        "amenities": [
            "Authentic Island Wooden Home Rooms",
            "Fresh Village Cooked Traditional Meals",
            "Village Bicycles for Island Touring",
            "Clean Sanitary Toilet & Bath",
            "Sweet Tube-well Water",
            "Courtyard Hammock & Open Porch",
            "24/7 Electricity via Solar & Battery"
        ],
        "images": [
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.92,
        "review_count": 28,
        "instant_book": True,
        "host_name": "Master Ruhul Amin",
        "host_phone": "+8801822000404",
        "host_badge": "Respected Island Educator & Host",
        "ghat_info": "10 mins rickshaw or motorcycle ride from Char Montaz Launch Ghat"
    },
    {
        "title": "Jahaj Mara Estuary Sunset Camp",
        "slug": "jahaj-mara-sunset-camp",
        "destination_name": "Jahaj Mara",
        "category": "Mangrove & Wilderness",
        "price_per_night": 1400,
        "capacity": 3,
        "description": "জাহাজ মারার শান্ত মোহনা ও ঝাউবাগানের ছায়ায় তাবু খাটিয়ে থাকার এক অপার্থিব রোমাঞ্চ। এখানে নেই কোনো মানুষের শোরগোল—আছে কেবল নদীর কলতান আর গোধূলির রক্তিম আকাশ। রাতে খোলা বালুচরে বসে তারা দেখার অপূর্ব সুযোগ।",
        "amenities": [
            "Heavy-duty Windproof Dome Tent",
            "Comfortable Foam Mattress & Blanket",
            "Estuary Beach Campfire Ring & Wood",
            "Clean Drinking Water",
            "Sanitary Bio-Toilet Tent",
            "Solar Torch & Camping Lights"
        ],
        "images": [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.82,
        "review_count": 22,
        "instant_book": True,
        "host_name": "Belal Hossain",
        "host_phone": "+8801555000505",
        "host_badge": "Estuary Navigator & Camp Host",
        "ghat_info": "Pick up by country trawler from Jahaj Mara canal mouth"
    },
    {
        "title": "Kuakata Gangchil Marine Glamping",
        "slug": "kuakata-gangchil-glamping",
        "destination_name": "Kuakata",
        "category": "Kuakata Glamping",
        "price_per_night": 2400,
        "capacity": 3,
        "description": "কুয়াকাটার গঙ্গামতির নির্জন বিচ পয়েন্টে প্রিমিয়াম সাফারি গ্ল্যাম্পিং তাবু। একই সৈকত থেকে সূর্যোদয় ও সূর্যাস্ত দেখার রাজকীয় আনন্দ। এখান থেকেই নিয়মিত স্পিডবোট ও ট্রলারে করে চর হেয়ার, সোনার চর ও চর মোন্তাজে অ্যাডভেঞ্চার ডে-ট্রিপ পরিচালিত হয়।",
        "amenities": [
            "Luxury Safari Canvas Glamping Tent",
            "High-Density Spring Mattress & Crisp Linens",
            "Private Ensuite Sanitary Washroom",
            "Direct Oceanfront Sunrise & Sunset View",
            "220V Solar Inverter Electricity",
            "High-Speed Boat Charter Desk for Char Hare"
        ],
        "images": [
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.94,
        "review_count": 48,
        "instant_book": True,
        "host_name": "Nazmul Hasan",
        "host_phone": "+8801733000606",
        "host_badge": "Coastal Glamping Specialist",
        "ghat_info": "Gangamati Beach Point, 15 mins motorcycle/buggy ride from Kuakata Zero Point"
    }
]

def seed_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        dest_map = {}
        for d in DESTINATIONS_DATA:
            dest = Destination(
                name=d["name"],
                district=d["district"],
                ghat_name=d["ghat_name"],
                boat_schedule=d["boat_schedule"],
                map_coordinates=d.get("map_coordinates"),
                banner_image=d["banner_image"]
            )
            db.add(dest)
            db.flush()
            dest_map[d["name"]] = dest.id

        for c in CAMPSITES_DATA:
            dest_id = dest_map.get(c["destination_name"])
            if dest_id:
                campsite = Campsite(
                    title=c["title"],
                    slug=c["slug"],
                    destination_id=dest_id,
                    category=c["category"],
                    price_per_night=c["price_per_night"],
                    capacity=c["capacity"],
                    description=c["description"],
                    amenities=c["amenities"],
                    images=c["images"],
                    rating=c["rating"],
                    review_count=c["review_count"],
                    instant_book=c["instant_book"],
                    host_name=c["host_name"],
                    host_phone=c["host_phone"],
                    host_badge=c["host_badge"],
                    ghat_info=c["ghat_info"]
                )
                db.add(campsite)

        db.commit()
        print("Successfully re-seeded database with Char Hare, Shonar Char, Jahaj Mara, Char Montaz & Manta Community camps.")
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
