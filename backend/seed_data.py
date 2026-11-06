from database import SessionLocal, engine, Base
from models import Destination, Campsite

DESTINATIONS_DATA = [
    {
        "name": "Saint Martin's Island",
        "district": "Cox's Bazar",
        "ghat_name": "Teknaf Ship Jetty / Inani Navy Jetty",
        "boat_schedule": "Daily cruise ships depart 9:00 AM (Teknaf/Inani) and return 3:00 PM from Saint Martin jetty. Speedboat transfers to Chera Dwip available from 8:00 AM - 5:00 PM.",
        "map_coordinates": "20.6273, 92.3225",
        "banner_image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Sonadia Island",
        "district": "Cox's Bazar",
        "ghat_name": "Ghat No. 6, Maheshkhali",
        "boat_schedule": "Engine trawlers and high-speed country boats run from Ghat 6 every 45 minutes between 7:30 AM and 4:30 PM. Crossing time approx. 35 mins.",
        "map_coordinates": "21.4900, 91.9000",
        "banner_image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Nijhum Dwip",
        "district": "Noakhali",
        "ghat_name": "Chairman Ghat, Hatiya",
        "boat_schedule": "Sea trucks and passenger trawlers depart Chairman Ghat at 8:30 AM and 1:30 PM to Nalchira/Muktaria Ghat. Connecting wooden boat across canal to Namar Bazar.",
        "map_coordinates": "22.0667, 91.0000",
        "banner_image": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Sandwip Island",
        "district": "Chattogram",
        "ghat_name": "Kumira Ghat, Sitakunda",
        "boat_schedule": "BIWTC Sea Truck departs Kumira Ghat at 9:00 AM daily. Speedboats operate continuously from 8:00 AM till 4:30 PM subject to low/high tide.",
        "map_coordinates": "22.4833, 91.4667",
        "banner_image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Kaptai Lake Islands",
        "district": "Rangamati",
        "ghat_name": "Reserve Bazar / Kaptai BFIDC Ghat",
        "boat_schedule": "Local engine trawlers (Shampan boats) leave Reserve Bazar hourly. Private kayaks and speedboats can be chartered for island drop-off at any time before sunset.",
        "map_coordinates": "22.6533, 92.1753",
        "banner_image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    {
        "name": "Kuakata Gangchil Beach",
        "district": "Patuakhali",
        "ghat_name": "Gangamati Canal Ghat",
        "boat_schedule": "Country motor trawlers available at Gangamati estuary from 6:00 AM to 6:00 PM for access to Kawar Char and Char Bijoy sandbars during winter.",
        "map_coordinates": "21.8167, 90.1167",
        "banner_image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    }
]

CAMPSITES_DATA = [
    {
        "title": "Saint Martin's Coral Beach Camp",
        "slug": "saint-martins-coral-beach-camp",
        "destination_name": "Saint Martin's Island",
        "category": "Beachfront Tents",
        "price_per_night": 2800,
        "capacity": 3,
        "description": "Nestled along the pristine southern coral shores of Saint Martin with direct unobstructed views of Chera Dwip. Fall asleep to gentle oceanic tides, awake to luminous blue waters, and enjoy freshly grilled coral fish by the evening beach bonfire. Our heavy-duty waterproof canvas dome tents are erected on elevated bamboo platforms to ensure maximum comfort and ventilation.",
        "amenities": ["Canvas Dome Tent", "Sleeping Bags & Foam Mats", "Campfire & BBQ Pit", "Fresh Water Bucket Shower", "Solar Power Charging", "Flush Toilets", "Life Jackets", "First Aid Kit", "Local Island Guide"],
        "images": [
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.9,
        "review_count": 38,
        "instant_book": True,
        "host_name": "Captain Rafiqul Islam",
        "host_phone": "+8801819000101",
        "host_badge": "Superhost & Coral Warden",
        "ghat_info": "15 mins battery tom-tom ride south of Saint Martin Main Jetty"
    },
    {
        "title": "Sonadia Island Eco Wilderness Camp",
        "slug": "sonadia-island-eco-wilderness-camp",
        "destination_name": "Sonadia Island",
        "category": "Off-Grid Adventure",
        "price_per_night": 2200,
        "capacity": 2,
        "description": "Raw, tranquil, and untouched. Sonadia is a crescent-shaped barrier island where thousands of migratory waterfowl feed along mangrove canals. Experience authentic off-grid wild beach camping under thousands of stars with zero light pollution. Authentic dry fish culinary experiences and local crab barbecues prepared with island fishermen.",
        "amenities": ["Waterproof 2-Person Tent", "Thermal Sleeping Pad", "Campfire Wood Provided", "Packaged Mineral Water", "Solar Torch Lanterns", "Eco Bio-Toilet", "Life Jackets", "Mud Boot Covers"],
        "images": [
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.8,
        "review_count": 24,
        "instant_book": True,
        "host_name": "Master Joynal Abedin",
        "host_phone": "+8801712000202",
        "host_badge": "Mangrove Ranger",
        "ghat_info": "Pick up directly by boat from Ghat No. 6, Maheshkhali"
    },
    {
        "title": "Nijhum Dwip Deer Trail Forest Camp",
        "slug": "nijhum-dwip-deer-trail-forest-camp",
        "destination_name": "Nijhum Dwip",
        "category": "Forest Camps",
        "price_per_night": 2500,
        "capacity": 4,
        "description": "Set on the edge of the famous Keora forest where herds of wild spotted deer (Chitra Horin) roam freely at dawn and twilight. Pitch your tent between coastal tidal trees and watch the sunrise over the Bay of Bengal estuary. Evening forest walks guided by native island naturalist.",
        "amenities": ["Safari Style Tents", "Sleeping Cots & Pillows", "Campfire & BBQ Spit", "Fresh Tube-well Water", "Solar USB Hub", "Sanitary Toilet Tent", "Binoculars for Wildlife", "Forest Guide"],
        "images": [
            "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.9,
        "review_count": 31,
        "instant_book": True,
        "host_name": "Kawsar Ahmed",
        "host_phone": "+8801911000303",
        "host_badge": "Wildlife Conservation Guide",
        "ghat_info": "10 mins motorcycle ride from Namar Bazar Ghat"
    },
    {
        "title": "Sandwip Island Estuary Sunset Retreat",
        "slug": "sandwip-island-estuary-sunset-retreat",
        "destination_name": "Sandwip Island",
        "category": "Campfire & BBQ",
        "price_per_night": 2100,
        "capacity": 3,
        "description": "Perched on the vast western mudflats and grassy dykes of Sandwip Island, overlooking the turbulent beauty of the Meghna estuary. Renowned for spectacular panoramic crimson sunsets, open-skies stargazing, and traditional slow-cooked Hilsa fish feasts over an open campfire.",
        "amenities": ["Windproof Dome Tent", "Sleeping Bags", "Charcoal Grill & Skewers", "Fresh Drinking Water", "Solar Lanterns", "Camp Stools & Table", "First Aid Box"],
        "images": [
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.7,
        "review_count": 19,
        "instant_book": True,
        "host_name": "Tariqul Haque",
        "host_phone": "+8801822000404",
        "host_badge": "Island Historian & Host",
        "ghat_info": "Guptachara Ghat, transfer arranged via auto-rickshaw"
    },
    {
        "title": "Kaptai Lake Emerald Island Camp",
        "slug": "kaptai-lake-emerald-island-camp",
        "destination_name": "Kaptai Lake Islands",
        "category": "Lake Islands",
        "price_per_night": 3200,
        "capacity": 4,
        "description": "A secluded private hillock island situated in the sapphire waters of Kaptai Lake, enveloped by lush tropical hills and pine valleys. Spend your afternoons swimming in freshwater, paddling touring kayaks around hidden coves, and gathering around a hilltop campfire with bamboo-cooked indigenous delicacies.",
        "amenities": ["All-Weather Bell Tent", "Foam Mattresses & Blankets", "Kayaks & Paddles Included", "Campfire Ring & Wood", "Solar Battery Hub", "Flush Toilet & Enclosed Bath", "Life Vests", "Hammocks"],
        "images": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.95,
        "review_count": 52,
        "instant_book": True,
        "host_name": "Mong Marma",
        "host_phone": "+8801555000505",
        "host_badge": "Indigenous Lake Navigator",
        "ghat_info": "20 mins private boat ride from Kaptai BFIDC Ghat"
    },
    {
        "title": "Kuakata Gangchil Island Glamping",
        "slug": "kuakata-gangchil-island-glamping",
        "destination_name": "Kuakata Gangchil Beach",
        "category": "Island Glamping",
        "price_per_night": 3800,
        "capacity": 2,
        "description": "Experience luxury eco-glamping right where you can watch both the sun rise from the sea and dip below the horizon without changing your campsite. Featuring premium safari canvas tents, handcrafted driftwood furniture, warm lighting, private verandah seating, and personalized seafood dining under the stars.",
        "amenities": ["Luxury Glamping Safari Tent", "Spring Mattress & Linen", "Private Beach Deck", "Campfire & Seafood BBQ", "Solar Inverter Power (220V)", "Private Ensuite Toilet", "Welcome Island Drink", "High-Powered Telescope"],
        "images": [
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ],
        "rating": 4.9,
        "review_count": 29,
        "instant_book": True,
        "host_name": "Nazmul Hasan",
        "host_phone": "+8801733000606",
        "host_badge": "Coastal Glamping Specialist",
        "ghat_info": "Gangamati Beach Point, pick up by beach buggy"
    }
]

def seed_database():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        if db.query(Destination).count() == 0:
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
            print("Successfully seeded destinations and campsites into database.")
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
