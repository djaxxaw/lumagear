export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  comparePrice: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
  specs: Record<string, string>;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "prod_001",
    slug: "ai-tracking-gimbal-pro",
    name: "AI Tracking Gimbal Pro",
    tagline: "Never miss a shot. It follows you.",
    description:
      "The AI Tracking Gimbal Pro uses advanced computer vision to lock onto your face and body — keeping you perfectly centered at all times. Whether you're filming a tutorial, vlog, or workout, this is the autonomous camera operator you've always needed. Works with any phone up to 6.8 inches.",
    price: 89.99,
    comparePrice: 149.99,
    images: [
      "https://images.unsplash.com/photo-1638243292863-3744d6a7e021?w=800&q=80",
      "https://images.unsplash.com/photo-1638243293044-bbf4694b07c7?w=800&q=80",
    ],
    category: "gimbals",
    tags: ["bestseller", "ai", "tracking"],
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    badge: "BEST SELLER",
    features: [
      "360° auto-rotation AI face tracking",
      "3-axis stabilization for buttery-smooth video",
      "12-hour battery life",
      "Foldable & pocket-sized (290g)",
      "Works with all phones up to 6.8\"",
      "Timelapse, panorama & gesture control modes",
    ],
    specs: {
      Weight: "290g",
      "Battery Life": "12 hours",
      "Charging Time": "2 hours (USB-C)",
      Compatibility: "iOS & Android (up to 6.8\")",
      Stabilization: "3-axis (±320° pan, ±25° roll, ±25° tilt)",
      "Max Payload": "260g",
    },
  },
  {
    id: "prod_002",
    slug: "wireless-lapel-mic-pro",
    name: "Wireless Lapel Mic Pro",
    tagline: "Studio sound. Zero cables. Total freedom.",
    description:
      "Crystal-clear 48kHz audio with zero latency. The dual-transmitter system means you can mic up two speakers at once, making this perfect for interviews, podcasts, and vlogs. Just clip, connect, and go — works with iPhone, Android, and cameras.",
    price: 54.99,
    comparePrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1764557206181-0c64c56be486?w=800&q=80",
      "https://images.unsplash.com/photo-1764557206119-5659393c25f4?w=800&q=80",
    ],
    category: "audio",
    tags: ["new", "wireless", "audio"],
    rating: 4.7,
    reviewCount: 1876,
    inStock: true,
    badge: "NEW",
    features: [
      "Dual transmitters — mic 2 people simultaneously",
      "48kHz/24-bit studio-quality audio",
      "250ft wireless range",
      "8-hour battery (charging case included)",
      "One-tap noise cancellation",
      "Works with iPhone, Android, USB-C & camera",
    ],
    specs: {
      "Audio Quality": "48kHz / 24-bit",
      Range: "250ft (line of sight)",
      "Battery Life": "8 hours (24 with case)",
      Latency: "< 20ms",
      Connectivity: "Lightning, USB-C, 3.5mm",
      Weight: "8g (transmitter)",
    },
  },
  {
    id: "prod_003",
    slug: "magnetic-rgb-pocket-light",
    name: "Magnetic RGB Pocket Light",
    tagline: "Pro lighting. Fits in your pocket.",
    description:
      "20 magnetic RGB modes and 3200K-5600K bi-color range give you cinematic lighting anywhere. The ultra-strong magnet sticks to any metal surface — car, fridge, tripod — so your hands stay free. Perfect for reels, streams, and product shoots.",
    price: 44.99,
    comparePrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1639083263284-f462092281ca?w=800&q=80",
      "https://images.unsplash.com/photo-1639085046855-4d313ff26b46?w=800&q=80",
    ],
    category: "lighting",
    tags: ["rgb", "magnetic", "portable"],
    rating: 4.6,
    reviewCount: 987,
    inStock: true,
    features: [
      "20 RGB color modes + bi-color 3200K-5600K",
      "Ultra-strong N52 magnet + cold shoe mount",
      "CRI 95+ for true-to-life color accuracy",
      "Dimmable 0-100% brightness",
      "5-hour battery, USB-C charging",
      "App control via Bluetooth",
    ],
    specs: {
      "Color Range": "3200K-5600K + 20 RGB modes",
      CRI: "95+",
      "Brightness Range": "5-1000 lux",
      Battery: "5 hours continuous",
      Mounting: "N52 magnet + cold shoe",
      Dimensions: "100 × 65 × 22mm",
    },
  },
  {
    id: "prod_004",
    slug: "magsafe-phone-mount-pro",
    name: "MagSafe Phone Mount Pro",
    tagline: "Snap. Shoot. Swivel. Go.",
    description:
      "The strongest MagSafe grip on the market — 1,500g pull force — combined with a universal ball-head mount that fits any tripod, desk, or car dashboard. Snap your phone on in 0.5 seconds and angle it exactly where you need it.",
    price: 32.99,
    comparePrice: 49.99,
    images: [
      "https://images.unsplash.com/photo-1679158320781-7e522d453ba8?w=800&q=80",
      "https://images.unsplash.com/photo-1679158320821-c43f579f326e?w=800&q=80",
    ],
    category: "mounts",
    tags: ["magsafe", "mount", "versatile"],
    rating: 4.5,
    reviewCount: 1243,
    inStock: true,
    features: [
      "1,500g pull force — strongest MagSafe grip available",
      "360° ball-head with click-lock at any angle",
      "Universal 1/4\" thread fits all tripods",
      "Works with MagSafe cases and bare phones",
      "Aluminum alloy + ABS construction",
      "Includes car vent clip adapter",
    ],
    specs: {
      "Magnetic Force": "1,500g pull",
      Compatibility: "MagSafe iPhone 12-16 series",
      Mount: "1/4\" universal thread",
      "Ball Head": "360° swivel, 180° tilt",
      Material: "Aluminum alloy + premium ABS",
      Weight: "85g",
    },
  },
  {
    id: "prod_005",
    slug: "foldable-ring-light-18in",
    name: "Foldable Ring Light 18\"",
    tagline: "The perfect glow. Every single shot.",
    description:
      "A full 18-inch ring light that folds down to fit in a backpack. 3 color modes, 10 brightness levels, and a 360° adjustable phone holder mean you get professional studio lighting wherever life takes you. Loved by streamers, makeup artists, and vloggers.",
    price: 64.99,
    comparePrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1673196649671-eb09066ad6c1?w=800&q=80",
      "https://images.unsplash.com/photo-1598358532244-6480b5c5ea1a?w=800&q=80",
    ],
    category: "lighting",
    tags: ["ring light", "streaming", "foldable"],
    rating: 4.7,
    reviewCount: 3102,
    inStock: true,
    badge: "TOP RATED",
    features: [
      "18\" diameter for full, even coverage",
      "Folds flat — fits in any bag",
      "3 color temps (warm / natural / cool)",
      "10 brightness levels",
      "Adjustable 360° phone holder included",
      "6.6ft height-adjustable stand",
    ],
    specs: {
      Diameter: "18 inches",
      "Color Temp": "3200K / 4500K / 6500K",
      "Brightness Levels": "10",
      Power: "36W (AC adapter)",
      "Stand Height": "20\" - 6.6ft adjustable",
      Weight: "2.1kg (with stand)",
    },
  },
  {
    id: "prod_006",
    slug: "creator-starter-bundle",
    name: "Creator Starter Bundle",
    tagline: "Everything to start creating. Nothing you don't need.",
    description:
      "The complete kit for new and intermediate creators: AI Gimbal, Wireless Mic, and Magnetic RGB Light — pre-paired and ready to go out of the box. Save $60 versus buying separately, and get our exclusive Creator Quickstart Guide.",
    price: 169.99,
    comparePrice: 229.97,
    images: [
      "https://images.unsplash.com/photo-1764557206119-5659393c25f4?w=800&q=80",
      "https://images.unsplash.com/photo-1638243293044-bbf4694b07c7?w=800&q=80",
    ],
    category: "bundles",
    tags: ["bundle", "value", "starter"],
    rating: 4.9,
    reviewCount: 542,
    inStock: true,
    badge: "SAVE $60",
    features: [
      "AI Tracking Gimbal Pro (worth $89.99)",
      "Wireless Lapel Mic Pro (worth $54.99)",
      "Magnetic RGB Pocket Light (worth $44.99)",
      "Exclusive Creator Quickstart PDF Guide",
      "All items pre-tested & paired",
      "Free priority shipping",
    ],
    specs: {
      Includes: "Gimbal + Mic + RGB Light",
      "Retail Value": "$229.97",
      "Bundle Price": "$169.99",
      Savings: "$59.98 (26% off)",
      Shipping: "Free priority (3-5 days)",
      Warranty: "12 months all items",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export const categories = [
  { id: "all", label: "All Products" },
  { id: "gimbals", label: "Gimbals" },
  { id: "audio", label: "Audio" },
  { id: "lighting", label: "Lighting" },
  { id: "mounts", label: "Mounts" },
  { id: "bundles", label: "Bundles" },
];
