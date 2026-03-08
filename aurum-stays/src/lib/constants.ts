export const SITE_NAME = "AURUM STAYS";
export const SITE_DESCRIPTION = "Curated collection of the world\u2019s most exclusive luxury properties";
export const CLEANING_FEE = 250;
export const SERVICE_FEE_RATE = 0.08;
export const MAX_GUESTS = 20;
export const PROPERTY_TYPES = ["VILLA", "PENTHOUSE", "CHALET", "ESTATE", "APARTMENT", "MANSION"] as const;
export const NAV_LINKS = [
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_CATEGORIES = [
  "All",
  "Gastronomy",
  "Wellness",
  "Adventure",
  "Transport",
  "Entertainment",
  "Childcare",
] as const;

export const SERVICES = [
  {
    id: "private-chef",
    title: "Private Chef",
    category: "Gastronomy",
    tagline: "Michelin-trained chefs at your villa",
    description: "Our network of Michelin-starred and award-winning chefs will craft bespoke menus tailored to your preferences, dietary requirements, and the finest local ingredients. From intimate dinners for two to grand celebrations for twenty, every meal becomes a culinary event.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=85",
    price: "From \u20AC500 / evening",
    features: ["Bespoke menu design", "Market-fresh ingredients sourced daily", "Wine pairing available", "Dietary accommodations", "Multi-course tasting menus", "Cooking classes available"],
    options: [
      { name: "Intimate Dinner", desc: "Up to 4 guests, 5-course tasting menu", price: 500 },
      { name: "Family Feast", desc: "Up to 10 guests, family-style dining", price: 850 },
      { name: "Grand Celebration", desc: "Up to 20 guests, full catering with staff", price: 2200 },
      { name: "Weekly Residency", desc: "7 days of breakfast, lunch & dinner", price: 5500 },
    ],
  },
  {
    id: "sommelier",
    title: "Private Sommelier",
    category: "Gastronomy",
    tagline: "Curated wine experiences",
    description: "A certified sommelier will curate your cellar for the duration of your stay, arrange private tastings of rare vintages, and pair each meal with exceptional wines sourced from the region\u2019s finest estates.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85",
    price: "From \u20AC350 / session",
    features: ["Rare vintage sourcing", "Blind tasting experiences", "Vineyard visit arrangements", "Cellar stocking", "Food & wine pairing"],
    options: [
      { name: "Tasting Session", desc: "2-hour guided tasting, 8 wines", price: 350 },
      { name: "Dinner Pairing", desc: "Full evening wine pairing with chef", price: 600 },
      { name: "Vineyard Day Trip", desc: "Private visits to 3 estates + lunch", price: 950 },
    ],
  },
  {
    id: "spa-wellness",
    title: "In-Villa Spa",
    category: "Wellness",
    tagline: "World-class treatments at your door",
    description: "Transform your villa into a private sanctuary. Our certified therapists bring luxury spa treatments directly to you \u2014 from deep tissue massages and Balinese rituals to bespoke facial treatments using La Mer and Sisley products.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85",
    price: "From \u20AC200 / treatment",
    features: ["Certified therapists", "Premium product lines", "Couples treatments", "Yoga & meditation", "Sound healing", "Customized wellness programs"],
    options: [
      { name: "Signature Massage", desc: "90-min deep tissue or Swedish", price: 200 },
      { name: "Couples Retreat", desc: "Dual treatment + champagne", price: 450 },
      { name: "Full Day Wellness", desc: "Massage, facial, body wrap, yoga", price: 900 },
      { name: "Weekly Program", desc: "Daily treatments + personal trainer", price: 4500 },
    ],
  },
  {
    id: "yoga",
    title: "Private Yoga & Meditation",
    category: "Wellness",
    tagline: "Find your balance in paradise",
    description: "Begin each morning with a private yoga session overlooking the sea or mountains. Our instructors are certified in Vinyasa, Hatha, Yin, and meditation practices, adapting each session to your level and intentions.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=85",
    price: "From \u20AC150 / session",
    features: ["All levels welcome", "Sunrise & sunset sessions", "Meditation guidance", "Breathwork", "Equipment provided"],
    options: [
      { name: "Single Session", desc: "75-min private class", price: 150 },
      { name: "Morning Ritual", desc: "7 consecutive sunrise sessions", price: 800 },
      { name: "Retreat Package", desc: "Daily yoga + meditation + spa", price: 2500 },
    ],
  },
  {
    id: "yacht-charter",
    title: "Yacht Charter",
    category: "Adventure",
    tagline: "The Mediterranean, your way",
    description: "Set sail on a private yacht along the Amalfi Coast, the French Riviera, or the Greek Islands. From sleek day-cruisers to luxury superyachts with full crew, we arrange every detail of your maritime adventure.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85",
    price: "From \u20AC2,500 / day",
    features: ["Captain & crew included", "Gourmet catering on board", "Water toys & equipment", "Sunset cruises", "Island-hopping itineraries", "Overnight voyages"],
    options: [
      { name: "Sunset Cruise", desc: "4-hour coastal cruise, champagne", price: 2500 },
      { name: "Full Day Explorer", desc: "8 hours, lunch, water sports", price: 5000 },
      { name: "Weekend Voyage", desc: "2-night luxury yacht experience", price: 18000 },
    ],
  },
  {
    id: "helicopter",
    title: "Helicopter Transfers",
    category: "Transport",
    tagline: "Arrive in extraordinary fashion",
    description: "Skip the traffic and arrive in style. Our helicopter transfer service connects airports, cities, and properties across the region with VIP handling, champagne service, and breathtaking aerial views.",
    image: "https://images.unsplash.com/photo-1534397860164-120c97f4db0b?w=1200&q=85",
    price: "From \u20AC1,200 / transfer",
    features: ["Airport VIP handling", "Champagne service", "Scenic flight routes", "Flexible scheduling", "Luggage handling"],
    options: [
      { name: "Airport Transfer", desc: "Direct helicopter to your villa", price: 1200 },
      { name: "Scenic Tour", desc: "45-min aerial tour of the coastline", price: 1800 },
      { name: "City Hop", desc: "Inter-city transfer with VIP lounge", price: 3500 },
    ],
  },
  {
    id: "chauffeur",
    title: "Luxury Chauffeur",
    category: "Transport",
    tagline: "Move through the world effortlessly",
    description: "A dedicated chauffeur with a premium fleet at your disposal. Mercedes-Maybach, Rolls-Royce, or Range Rover \u2014 travel in ultimate comfort with a driver who knows every hidden gem in the region.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=85",
    price: "From \u20AC600 / day",
    features: ["Premium vehicle fleet", "Multilingual drivers", "Airport meet & greet", "Restaurant reservations", "24/7 availability"],
    options: [
      { name: "Half Day", desc: "5 hours with premium sedan", price: 600 },
      { name: "Full Day", desc: "10 hours, any vehicle", price: 1000 },
      { name: "Weekly Dedication", desc: "Exclusive driver for your stay", price: 5500 },
    ],
  },
  {
    id: "live-music",
    title: "Private Entertainment",
    category: "Entertainment",
    tagline: "Live music, DJs & performances",
    description: "Elevate your evening with live entertainment curated to your taste. From a solo jazz pianist to a full band, a renowned DJ to a string quartet \u2014 we source exceptional talent to soundtrack your stay.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=85",
    price: "From \u20AC800 / evening",
    features: ["Jazz, classical, pop, electronic", "Sound equipment provided", "Indoor & outdoor setups", "Custom playlists", "DJ sets"],
    options: [
      { name: "Solo Artist", desc: "Pianist, guitarist or vocalist, 3 hours", price: 800 },
      { name: "Duo / Trio", desc: "Small ensemble, 4 hours", price: 1500 },
      { name: "Full Band or DJ", desc: "Complete setup, sound & lighting", price: 3500 },
    ],
  },
  {
    id: "nanny",
    title: "Professional Nanny",
    category: "Childcare",
    tagline: "So parents can truly relax",
    description: "Certified, multilingual childcare professionals who create magical experiences for your little ones while you enjoy uninterrupted relaxation. Activities include beach adventures, art workshops, and age-appropriate excursions.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=1200&q=85",
    price: "From \u20AC250 / day",
    features: ["Certified professionals", "Multilingual", "Age-appropriate activities", "First aid trained", "Flexible hours", "Baby equipment provided"],
    options: [
      { name: "Half Day", desc: "5 hours of professional childcare", price: 250 },
      { name: "Full Day", desc: "10 hours with activities planned", price: 400 },
      { name: "Weekly Nanny", desc: "Dedicated nanny for your stay", price: 2200 },
    ],
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer",
    category: "Wellness",
    tagline: "Stay in peak form on holiday",
    description: "Don\u2019t let your fitness goals take a vacation. Our elite personal trainers design bespoke workout sessions using your villa\u2019s gym, poolside space, or the great outdoors. HIIT, boxing, Pilates, or sport-specific training.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=85",
    price: "From \u20AC180 / session",
    features: ["Tailored programs", "Equipment provided", "Outdoor sessions", "Boxing & martial arts", "Nutrition guidance"],
    options: [
      { name: "Single Session", desc: "60-min bespoke workout", price: 180 },
      { name: "5-Session Pack", desc: "Personalized program", price: 750 },
      { name: "Daily Training", desc: "7-day intensive program", price: 1100 },
    ],
  },
];
export const ADMIN_NAV = [
  { href: "/admin", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/properties", label: "Properties", icon: "Building2" },
  { href: "/admin/bookings", label: "Bookings", icon: "CalendarCheck" },
  { href: "/admin/users", label: "Users", icon: "Users" },
];
