import { Product, SortOption } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Apex SoundPro ANC Headphones",
    brand: "Apex Audio",
    category: "Audio",
    price: 149,
    msrp: 199,
    allTimeLow: 149,
    isATL: true,
    priceDropPct: 25,
    rating: 4.7,
    reviewCount: 262,
    badge: "All-Time Low $149",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    description: "Industry-leading hybrid active noise cancellation with 40-hour battery life and custom spatial audio response for immersive listening.",
    specs: {
      "Noise Cancellation": "Hybrid Active (-42dB)",
      "Battery Life": "40 Hours (ANC On)",
      "Fast Charge": "10 mins = 5 hrs playback",
      "Drivers": "40mm Custom Titanium Drivers",
      "Weight": "250 grams",
      "Bluetooth": "v5.3 with Multipoint Connect",
      "Warranty": "2 Years Manufacturer"
    },
    aspectRatings: {
      Battery: 4.9,
      Build: 4.7,
      Price: 4.4,
      Support: 4.3
    },
    starDistribution: {
      5: 190,
      4: 48,
      3: 14,
      2: 7,
      1: 3
    },
    priceHistory: [
      { date: "Jun 1", price: 199, sentiment: 4.3 },
      { date: "Jun 15", price: 199, sentiment: 4.4 },
      { date: "Jul 1", price: 185, sentiment: 4.5 },
      { date: "Jul 15", price: 179, sentiment: 4.5 },
      { date: "Aug 1", price: 169, sentiment: 4.6 },
      { date: "Aug 15", price: 159, sentiment: 4.6 },
      { date: "Sep 1", price: 149, sentiment: 4.7 }
    ],
    reviews: [
      {
        id: "review-1",
        author: "Marcus Vance",
        date: "2026-08-28",
        rating: 5,
        title: "Cold weather beast battery life!",
        text: "Tested these during a week-long ski trip in sub-zero temps. The battery life in cold weather easily lasted 35+ hours with full ANC. Incredible stamina compared to my old pair.",
        aspectTag: "Battery",
        helpfulCount: 42,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-2",
        author: "Elena Rostova",
        date: "2026-08-20",
        rating: 5,
        title: "Silence on international flights",
        text: "The hybrid ANC completely muted the engine roar on a 14-hour flight. Ear cups are memory foam plush and don't press too hard against glasses.",
        aspectTag: "Build",
        helpfulCount: 31,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-3",
        author: "Devon Chen",
        date: "2026-08-15",
        rating: 4,
        title: "Unbeatable value at $149",
        text: "At the current sale price of $149, this beats any competitor on the market. Sound signature is punchy with tight bass, though companion app EQ is a bit basic.",
        aspectTag: "Price",
        helpfulCount: 28,
        unhelpfulCount: 4,
        verifiedPurchase: true
      },
      {
        id: "review-4",
        author: "Sophia Martinez",
        date: "2026-08-10",
        rating: 5,
        title: "Replacement pads delivered in 2 days",
        text: "Support was ultra responsive when I lost a cushion ring. Customer service dispatched a replacement kit free of charge within 48 hours under warranty.",
        aspectTag: "Support",
        helpfulCount: 19,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-5",
        author: "Liam O'Connor",
        date: "2026-08-02",
        rating: 5,
        title: "Seamless multipoint switching",
        text: "Switches between my MacBook Pro and iPhone without audio dropouts. The Bluetooth 5.3 range reaches clear across my two-story home.",
        aspectTag: "Build",
        helpfulCount: 15,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-6",
        author: "Aria Thorne",
        date: "2026-07-24",
        rating: 4,
        title: "Fast charging saved my commute",
        text: "Forgot to charge overnight and plugged them in for 10 mins before leaving. Had enough power for the entire 4-hour train ride back and forth.",
        aspectTag: "Battery",
        helpfulCount: 22,
        unhelpfulCount: 3,
        verifiedPurchase: true
      },
      {
        id: "review-7",
        author: "Carlos Ruiz",
        date: "2026-07-18",
        rating: 3,
        title: "Slightly tight clamping force initial week",
        text: "Build is sturdy aluminium and headband feels premium, but clamped a little tight on my head during the first 3 days. Loosened up nicely after breaking in.",
        aspectTag: "Build",
        helpfulCount: 11,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-8",
        author: "Hannah Abbott",
        date: "2026-07-05",
        rating: 5,
        title: "Worth every penny of MSRP, unbelievable discount now",
        text: "I bought this back when it was $199 and felt satisfied. Seeing it at $149 all-time low makes it an absolute steal for audiophiles.",
        aspectTag: "Price",
        helpfulCount: 37,
        unhelpfulCount: 0,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "How is the battery life in cold weather?",
        answer: "Verified buyer Marcus Vance reported that the battery stamina in freezing sub-zero ski trip temperatures easily exceeded 35+ hours with active noise cancellation enabled [Review #review-1].",
        citations: ["review-1"]
      },
      {
        question: "Is the noise cancellation effective for flights?",
        answer: "Yes, travelers highlight that the hybrid ANC completely muted engine noise on 14-hour long-haul flights with comfortable memory foam ear cups [Review #review-2].",
        citations: ["review-2"]
      },
      {
        question: "How responsive is customer support for replacement parts?",
        answer: "Customer support responded promptly to requests, shipping free replacement ear cushion kits within 48 hours under warranty [Review #review-4].",
        citations: ["review-4"]
      }
    ]
  },
  {
    id: "2",
    name: "Vulcan Pro RGB Mechanical Keyboard",
    brand: "Vulcan Gaming",
    category: "Keyboards",
    price: 119,
    msrp: 159,
    allTimeLow: 109,
    isATL: false,
    priceDropPct: 25,
    rating: 4.6,
    reviewCount: 184,
    badge: "25% OFF MSRP",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60",
    description: "Hot-swappable linear optical switches with CNC aluminum top plate, per-key RGB backlighting, and sound-dampening acoustic foam.",
    specs: {
      "Switch Type": "Linear Optical (Hot-Swappable)",
      "Keycaps": "Double-shot PBT (OEM Profile)",
      "Polling Rate": "8000 Hz Hyper-Polling",
      "Structure": "Gasket Mount with Poron Foam",
      "Connectivity": "Detachable Braided USB-C",
      "Lighting": "Per-Key RGB with 18 Effects",
      "Warranty": "1 Year Manufacturer"
    },
    aspectRatings: {
      Battery: 4.2,
      Build: 4.9,
      Price: 4.5,
      Support: 4.4
    },
    starDistribution: {
      5: 135,
      4: 32,
      3: 10,
      2: 5,
      1: 2
    },
    priceHistory: [
      { date: "Jun 1", price: 159, sentiment: 4.2 },
      { date: "Jun 15", price: 159, sentiment: 4.3 },
      { date: "Jul 1", price: 145, sentiment: 4.4 },
      { date: "Jul 15", price: 139, sentiment: 4.5 },
      { date: "Aug 1", price: 129, sentiment: 4.5 },
      { date: "Aug 15", price: 119, sentiment: 4.6 },
      { date: "Sep 1", price: 119, sentiment: 4.6 }
    ],
    reviews: [
      {
        id: "review-9",
        author: "Karan Patel",
        date: "2026-08-25",
        rating: 5,
        title: "Aircraft grade aluminum frame feels indestructible",
        text: "The build quality on this deck is unreal. Zero flex when typing aggressively during ranked gaming matches. Heavy enough to stay planted on desk.",
        aspectTag: "Build",
        helpfulCount: 35,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-10",
        author: "Samantha Wu",
        date: "2026-08-19",
        rating: 5,
        title: "Deep thock sound right out of the box",
        text: "The pre-lubed optical switches paired with internal Poron foam deliver a deep, satisfying thock without any hollow spring ping.",
        aspectTag: "Build",
        helpfulCount: 29,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-11",
        author: "Derek Miller",
        date: "2026-08-11",
        rating: 4,
        title: "Great value for hot-swap optical board",
        text: "Finding a full gasket-mounted optical keyboard at $119 is rare. Keycaps are textured double-shot PBT that won't shine over time.",
        aspectTag: "Price",
        helpfulCount: 20,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-12",
        author: "Jessica Taylor",
        date: "2026-08-04",
        rating: 5,
        title: "Fast replacement for broken USB cable",
        text: "The detachable cable suffered a bend near the connector. Vulcan support shipped a reinforced replacement cable in 3 days no questions asked.",
        aspectTag: "Support",
        helpfulCount: 14,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-13",
        author: "Brian K.",
        date: "2026-07-29",
        rating: 4,
        title: "Solid battery life on wireless mode",
        text: "Even with RGB set to 50% brightness, the 4000mAh battery lasts nearly 70 hours of continuous typing work.",
        aspectTag: "Battery",
        helpfulCount: 18,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-14",
        author: "Oliver Schmidt",
        date: "2026-07-21",
        rating: 5,
        title: "Instant 8000Hz polling response in FPS games",
        text: "Latency tests show instantaneous register time. Keypresses feel ultra crisp for high APM gaming in Valorant.",
        aspectTag: "Build",
        helpfulCount: 24,
        unhelpfulCount: 3,
        verifiedPurchase: true
      },
      {
        id: "review-15",
        author: "Rachel Green",
        date: "2026-07-12",
        rating: 3,
        title: "RGB software is slightly clunky",
        text: "Hardware build is 5-star, but setting custom per-key lighting profiles in the desktop software took me 20 minutes to figure out.",
        aspectTag: "Support",
        helpfulCount: 9,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-16",
        author: "Trevor Vance",
        date: "2026-07-02",
        rating: 5,
        title: "Best mid-tier keyboard under $150",
        text: "Compared to Razer and Corsair boards at this tier, Vulcan offers superior acoustics and build materials.",
        aspectTag: "Price",
        helpfulCount: 16,
        unhelpfulCount: 0,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "How is the typing acoustic sound and build quality?",
        answer: "Users praise the Aircraft-grade aluminum frame and internal Poron foam dampening, noting a satisfying deep thock acoustics profile right out of the box [Review #review-9] [Review #review-10].",
        citations: ["review-9", "review-10"]
      },
      {
        question: "How long does the battery last with RGB turned on?",
        answer: "At 50% RGB backlighting brightness, the 4000mAh battery provides nearly 70 hours of continuous wireless use [Review #review-13].",
        citations: ["review-13"]
      }
    ]
  },
  {
    id: "3",
    name: "SwiftGlide Ultralight Gaming Mouse",
    brand: "SwiftGlide",
    category: "Mice",
    price: 69,
    msrp: 99,
    allTimeLow: 69,
    isATL: true,
    priceDropPct: 30,
    rating: 4.8,
    reviewCount: 310,
    badge: "All-Time Low $69",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60",
    description: "Ultra-lightweight 49g honeycomb-free wireless gaming mouse featuring 26K DPI optical sensor and 80-hour battery life.",
    specs: {
      "Weight": "49 grams (Honeycomb-free)",
      "Sensor": "SwiftTrack 26K Optical",
      "Max DPI": "26,000 DPI (50G Acceleration)",
      "Battery Life": "80 Hours (1000Hz Polling)",
      "Switches": "Optical Micro Switches (90M clicks)",
      "Glides": "100% Virgin PTFE Feet",
      "Warranty": "2 Years Manufacturer"
    },
    aspectRatings: {
      Battery: 4.8,
      Build: 4.8,
      Price: 4.9,
      Support: 4.5
    },
    starDistribution: {
      5: 245,
      4: 45,
      3: 12,
      2: 5,
      1: 3
    },
    priceHistory: [
      { date: "Jun 1", price: 99, sentiment: 4.4 },
      { date: "Jun 15", price: 99, sentiment: 4.5 },
      { date: "Jul 1", price: 89, sentiment: 4.6 },
      { date: "Jul 15", price: 79, sentiment: 4.7 },
      { date: "Aug 1", price: 75, sentiment: 4.7 },
      { date: "Aug 15", price: 69, sentiment: 4.8 },
      { date: "Sep 1", price: 69, sentiment: 4.8 }
    ],
    reviews: [
      {
        id: "review-17",
        author: "Alex Mercer",
        date: "2026-08-30",
        rating: 5,
        title: "Featherweight 49g precision without holes!",
        text: "Unbelievable that they achieved 49 grams without punching honeycomb holes in the top shell. Fits palm grip comfortably and glides effortlessly on cloth pads.",
        aspectTag: "Build",
        helpfulCount: 52,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-18",
        author: "Chloe Bennett",
        date: "2026-08-22",
        rating: 5,
        title: "Full week of intense gaming per charge",
        text: "I game 5-6 hours daily and only plug this mouse in once a week. The battery standby efficiency is superb.",
        aspectTag: "Battery",
        helpfulCount: 38,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-19",
        author: "Nathan Drake",
        date: "2026-08-14",
        rating: 5,
        title: "Steal at $69 all time low",
        text: "Compare this to $150 flagships and you get 95% of the performance at less than half the price. Unbeatable value.",
        aspectTag: "Price",
        helpfulCount: 44,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-20",
        author: "Yuki Tanaka",
        date: "2026-08-07",
        rating: 4,
        title: "PTFE feet replacement sent promptly",
        text: "Accidentally scratched one foot skate on an old desk mat. SwiftGlide support sent two complete replacement PTFE skate sets for free.",
        aspectTag: "Support",
        helpfulCount: 21,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-21",
        author: "Jordan Lee",
        date: "2026-07-28",
        rating: 5,
        title: "Zero optical switch double-clicking",
        text: "Optical micro switches eliminate mechanical double-click issues completely. Crisp tactile actuation on LMB and RMB.",
        aspectTag: "Build",
        helpfulCount: 27,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-22",
        author: "Emily Watson",
        date: "2026-07-19",
        rating: 4,
        title: "Super fast USB-C charging",
        text: "Went from 5% to 100% battery in under 45 minutes over USB-C. Flexible paracord cable allows playing comfortably while wired.",
        aspectTag: "Battery",
        helpfulCount: 17,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-23",
        author: "Lucas Vance",
        date: "2026-07-10",
        rating: 5,
        title: "Flawless sensor tracking on high DPI",
        text: "SwiftTrack 26K sensor handles fast flick shots in CS2 with zero spinouts or acceleration jitter.",
        aspectTag: "Build",
        helpfulCount: 31,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-24",
        author: "Zoe Kravitz",
        date: "2026-07-01",
        rating: 5,
        title: "Best budget ultralight gaming mouse",
        text: "At $69, this mouse outperforms options costing double. Highly recommend for any competitive esports gamer.",
        aspectTag: "Price",
        helpfulCount: 33,
        unhelpfulCount: 1,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "How heavy is the mouse and does it have honeycomb holes?",
        answer: "The mouse weighs just 49 grams while maintaining a solid, honeycomb-free structural chassis that prevents dust ingress [Review #review-17].",
        citations: ["review-17"]
      },
      {
        question: "How long does the battery last during heavy gaming?",
        answer: "Users report up to 80 hours of continuous 1000Hz polling playback, lasting a full week of 5-6 daily gaming hours per charge [Review #review-18].",
        citations: ["review-18"]
      }
    ]
  }
];

export const CATEGORIES: string[] = ["All", "Audio", "Keyboards", "Mice"];

export const SORT_OPTIONS: SortOption[] = [
  { label: "Highest Rated", value: "rating-desc" },
  { label: "Most Reviews", value: "reviews-desc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price Drop %", value: "drop-desc" },
];
