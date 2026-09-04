// lib/mockData.js

export const PRODUCTS = [
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
    description: "Industry-leading hybrid active noise cancellation with 40-hour battery life and custom spatial audio response.",
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
        title: "Multipoint Bluetooth works flawlessly",
        text: "Smoothly switches between my MacBook pro and iPhone when taking calls. Zero latency when streaming videos.",
        aspectTag: "Build",
        helpfulCount: 15,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-6",
        author: "Priya Patel",
        date: "2026-07-25",
        rating: 4,
        title: "Fast charging is a life saver",
        text: "Got 5 hours of juice in 10 minutes before rushing to the airport. Battery indication light is very clear.",
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
        title: "Good sound, microphone is average in windy outdoor area",
        text: "Calling outdoors during strong winds catches some ambient noise. Otherwise indoor voice clarity is crisp.",
        aspectTag: "Build",
        helpfulCount: 11,
        unhelpfulCount: 5,
        verifiedPurchase: true
      },
      {
        id: "review-8",
        author: "Hannah Abbott",
        date: "2026-07-05",
        rating: 5,
        title: "Solid metal headband hinge structure",
        text: "Extremely well constructed aluminum hinges. Foldable design fits snug in the included hardshell case.",
        aspectTag: "Build",
        helpfulCount: 14,
        unhelpfulCount: 0,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "How is the battery life in cold weather?",
        answer: "The Apex SoundPro ANC excels in low temperatures! Customers report that the battery stamina reaches over 35+ hours even in freezing ski trip conditions, retaining over 85% efficiency [Review #review-1]. Furthermore, fast charging provides 5 hours of playback with just 10 minutes of charge [Review #review-6].",
        citations: ["review-1", "review-6"]
      },
      {
        question: "Is this price worth it right now?",
        answer: "Yes! At $149 (an All-Time Low price with a 25% discount from MSRP $199), reviewers consistently rate it as the highest value wireless ANC headphone available [Review #review-3].",
        citations: ["review-3"]
      },
      {
        question: "How reliable is the customer support and warranty?",
        answer: "Customer support is rated 4.3/5. Verified buyers highlight quick 48-hour warranty dispatch for replacement cushions and hassle-free service [Review #review-4].",
        citations: ["review-4"]
      }
    ]
  },
  {
    id: "2",
    name: "TactileCraft Pro RGB Keyboard",
    brand: "TactileCraft",
    category: "Peripherals",
    price: 129,
    msrp: 159,
    allTimeLow: 119,
    isATL: false,
    priceDropPct: 18,
    rating: 4.8,
    reviewCount: 184,
    badge: "12% above average",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60",
    description: "Custom Gasket-mounted 75% hot-swappable wireless mechanical keyboard with per-key RGB and sound-dampening foam layers.",
    specs: {
      "Switch Type": "Pre-lubed Tactile Panda Switches",
      "Hot-Swappable": "Yes (3-pin & 5-pin support)",
      "Keycaps": "Double-shot PBT Cherry Profile",
      "Connectivity": "2.4GHz Wireless / Bluetooth 5.1 / Type-C",
      "Battery": "4000mAh (Up to 200 hrs RGB Off)",
      "Mounting": "Poron Gasket Mount",
      "Weight": "1.15 kg"
    },
    aspectRatings: {
      Battery: 4.6,
      Build: 4.9,
      Price: 4.3,
      Support: 4.5
    },
    starDistribution: {
      5: 148,
      4: 26,
      3: 6,
      2: 3,
      1: 1
    },
    priceHistory: [
      { date: "Jun 1", price: 159, sentiment: 4.5 },
      { date: "Jun 15", price: 149, sentiment: 4.6 },
      { date: "Jul 1", price: 139, sentiment: 4.7 },
      { date: "Jul 15", price: 119, sentiment: 4.8 },
      { date: "Aug 1", price: 129, sentiment: 4.8 },
      { date: "Aug 15", price: 129, sentiment: 4.8 },
      { date: "Sep 1", price: 129, sentiment: 4.8 }
    ],
    reviews: [
      {
        id: "review-9",
        author: "Alex Rivera",
        date: "2026-08-25",
        rating: 5,
        title: "Deep marbly sound signature right out of the box",
        text: "The factory lubed switches and multi-layer Poron foam create a rich, acoustic thock sound without needing any custom mods! The aluminum case frame feels ultra rigid.",
        aspectTag: "Build",
        helpfulCount: 54,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-10",
        author: "Samantha Wu",
        date: "2026-08-18",
        rating: 5,
        title: "Battery lasts for weeks with RGB off",
        text: "With RGB lighting turned off, the 4000mAh battery went 3 full work weeks on wireless 2.4GHz without needing a recharge. Easily best in class.",
        aspectTag: "Battery",
        helpfulCount: 33,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-11",
        author: "Jordan Blake",
        date: "2026-08-11",
        rating: 4,
        title: "Great value for custom enthusiasts",
        text: "At $129, getting double-shot PBT keycaps, hot-swap PCB, and gasket mount is a stellar deal compared to custom keyboard kits costing double.",
        aspectTag: "Price",
        helpfulCount: 21,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-12",
        author: "Kevin Thorne",
        date: "2026-08-01",
        rating: 5,
        title: "Firmware update support was immediate",
        text: "Contacted support regarding a Mac keymap shortcut question. They provided a custom VIA JSON profile file within 30 minutes. Top tier customer care.",
        aspectTag: "Support",
        helpfulCount: 17,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-13",
        author: "Nora Lindqvist",
        date: "2026-07-22",
        rating: 5,
        title: "Keycaps don't shine after months of heavy typing",
        text: "The PBT texture has held up amazingly well through intense coding sessions. No glossy key tops whatsoever.",
        aspectTag: "Build",
        helpfulCount: 12,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-14",
        author: "Vikram Malhotra",
        date: "2026-07-14",
        rating: 4,
        title: "RGB lighting is vibrant with per-key customization",
        text: "South-facing LEDs make key legends glow brightly. VIA web configuration software makes remapping keys straightforward.",
        aspectTag: "Build",
        helpfulCount: 18,
        unhelpfulCount: 3,
        verifiedPurchase: true
      },
      {
        id: "review-15",
        author: "Rachel Adams",
        date: "2026-07-02",
        rating: 5,
        title: "Seamless 2.4GHz wireless connection",
        text: "Zero lag while playing competitive fps games. The dongle fits neatly in the magnetic storage slot under the board.",
        aspectTag: "Build",
        helpfulCount: 16,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-16",
        author: "Ethan Wright",
        date: "2026-06-25",
        rating: 4,
        title: "Heavy weight keeps it anchored to desk",
        text: "1.15 kg weight ensures it doesn't budge an inch during rapid typing sessions. Rubber feet grips are super sticky.",
        aspectTag: "Build",
        helpfulCount: 9,
        unhelpfulCount: 1,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "How is the typing sound and build quality?",
        answer: "The TactileCraft Pro boasts a 4.9/5 build score! Users praise its out-of-the-box deep 'thock' sound signature, factory pre-lubed switches, and solid 1.15kg aluminum casing [Review #review-9]. PBT keycaps also prevent oil shine over time [Review #review-13].",
        citations: ["review-9", "review-13"]
      },
      {
        question: "How long does the battery last on wireless?",
        answer: "With RGB turned off, the 4000mAh battery provides up to 3 full weeks of intensive wireless work without recharging [Review #review-10].",
        citations: ["review-10"]
      },
      {
        question: "Can I customize keymaps easily?",
        answer: "Yes, VIA software configuration is fully supported, and customer support actively provides custom JSON profiles for specialized setups [Review #review-12].",
        citations: ["review-12"]
      }
    ]
  },
  {
    id: "3",
    name: "Aeroflight X Wireless Mouse",
    brand: "Aeroflight",
    category: "Peripherals",
    price: 79,
    msrp: 99,
    allTimeLow: 79,
    isATL: true,
    priceDropPct: 20,
    rating: 4.6,
    reviewCount: 142,
    badge: "All-Time Low $79",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60",
    description: "Ultra-lightweight 49g wireless esports gaming mouse with 26K DPI optical sensor and 8K polling rate capability.",
    specs: {
      "Weight": "49 grams (Ultra-light honeycomb-free)",
      "Sensor": "AeroTrack 26K Optical",
      "Polling Rate": "Up to 8000Hz Wireless",
      "Battery Life": "80 Hours (1000Hz)",
      "Switches": "Optical Micro-Switches (100M clicks)",
      "Skates": "100% Virgin PTFE",
      "Connectivity": "HyperSpeed 2.4GHz / USB-C Paracord"
    },
    aspectRatings: {
      Battery: 4.5,
      Build: 4.6,
      Price: 4.8,
      Support: 4.2
    },
    starDistribution: {
      5: 102,
      4: 28,
      3: 8,
      2: 3,
      1: 1
    },
    priceHistory: [
      { date: "Jun 1", price: 99, sentiment: 4.2 },
      { date: "Jun 15", price: 99, sentiment: 4.3 },
      { date: "Jul 1", price: 89, sentiment: 4.4 },
      { date: "Jul 15", price: 89, sentiment: 4.5 },
      { date: "Aug 1", price: 85, sentiment: 4.5 },
      { date: "Aug 15", price: 79, sentiment: 4.6 },
      { date: "Sep 1", price: 79, sentiment: 4.6 }
    ],
    reviews: [
      {
        id: "review-17",
        author: "Tyler Vance",
        date: "2026-08-29",
        rating: 5,
        title: "Featherlight 49g shell with zero flex",
        text: "I was skeptical about a 49g mouse without honeycomb holes, but the solid shell structural integrity is unbelievable. No creaking even under hard side pressure.",
        aspectTag: "Build",
        helpfulCount: 38,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-18",
        author: "Chloe Bennett",
        date: "2026-08-21",
        rating: 5,
        title: "Insane value at $79 for 8K polling",
        text: "Compare this to $150 flagship mice with similar specs. Aeroflight nailed the sensor implementation and sensor latency at half the price.",
        aspectTag: "Price",
        helpfulCount: 29,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-19",
        author: "Gareth Sterling",
        date: "2026-08-12",
        rating: 4,
        title: "Solid 80 hour battery life at 1000Hz",
        text: "At standard 1000Hz polling, I easily get 5-6 days of heavy gaming without plugging in. Note that 8K polling consumes battery roughly 3x faster.",
        aspectTag: "Battery",
        helpfulCount: 24,
        unhelpfulCount: 2,
        verifiedPurchase: true
      },
      {
        id: "review-20",
        author: "Maya Lin",
        date: "2026-08-03",
        rating: 5,
        title: "PTFE skates glide like butter on glass mousepad",
        text: "The pre-installed rounded PTFE feet provide effortless motion. Crisp optical switch click feel with zero double-clicking issues.",
        aspectTag: "Build",
        helpfulCount: 19,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-21",
        author: "Lucas Vance",
        date: "2026-07-26",
        rating: 4,
        title: "Quick replacement receiver sent by support",
        text: "Accidentally stepped on my 2.4GHz dongle. Aeroflight support replaced it quickly for just shipping cost.",
        aspectTag: "Support",
        helpfulCount: 13,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-22",
        author: "Zoe Taylor",
        date: "2026-07-17",
        rating: 5,
        title: "Ideal claw grip shape for medium hands",
        text: "Hump placement is perfect for claw and fingertip grips. Coating stays grippy even during sweaty sessions.",
        aspectTag: "Build",
        helpfulCount: 16,
        unhelpfulCount: 0,
        verifiedPurchase: true
      },
      {
        id: "review-23",
        author: "Daniel Kim",
        date: "2026-07-08",
        rating: 4,
        title: "Super flexible charging paracord cable",
        text: "When playing while wired up, the lightweight paracord cable creates virtually zero drag on the mousepad.",
        aspectTag: "Build",
        helpfulCount: 10,
        unhelpfulCount: 1,
        verifiedPurchase: true
      },
      {
        id: "review-24",
        author: "Olivia Sanders",
        date: "2026-06-30",
        rating: 5,
        title: "Sensational tracking accuracy",
        text: "Sensor micro-adjustments in tactical shooters feel buttery smooth with 1-to-1 tracking.",
        aspectTag: "Build",
        helpfulCount: 14,
        unhelpfulCount: 0,
        verifiedPurchase: true
      }
    ],
    aiQa: [
      {
        question: "Is the mouse body fragile due to 49g weight?",
        answer: "Not at all! Users report a rigid, creak-free solid body shell with zero side flex despite weighing only 49 grams [Review #review-17]. The virgin PTFE skates also provide a smooth glide [Review #review-20].",
        citations: ["review-17", "review-20"]
      },
      {
        question: "How long does the battery last?",
        answer: "At standard 1000Hz polling rate, the battery lasts up to 80 hours (around 5-6 days of heavy use) [Review #review-19].",
        citations: ["review-19"]
      },
      {
        question: "Is $79 a good deal for an esports mouse?",
        answer: "It is an exceptional value at the $79 All-Time Low price point, performing on par with $150 rival flagship mice [Review #review-18].",
        citations: ["review-18"]
      }
    ]
  }
];

export const CATEGORIES = ["All", "Audio", "Peripherals"];

export const SORT_OPTIONS = [
  { label: "Rating (High to Low)", value: "rating-desc" },
  { label: "Review Count (High to Low)", value: "reviews-desc" },
  { label: "Price (Low to High)", value: "price-asc" },
  { label: "Price (High to Low)", value: "price-desc" },
  { label: "Price Drop %", value: "drop-desc" }
];
