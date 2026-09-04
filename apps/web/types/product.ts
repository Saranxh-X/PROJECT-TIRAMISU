export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  aspectTag?: string;
  helpfulCount: number;
  unhelpfulCount: number;
  verifiedPurchase: boolean;
}

export interface PriceHistoryEntry {
  date: string;
  price: number;
  sentiment: number;
}

export interface StarDistribution {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
  [key: number]: number;
}

export interface AspectRatings {
  Battery?: number;
  Build?: number;
  Price?: number;
  Support?: number;
  [key: string]: number | undefined;
}

export interface AiQaEntry {
  question: string;
  answer: string;
  citations: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  msrp: number;
  allTimeLow: number;
  isATL: boolean;
  priceDropPct: number;
  rating: number;
  reviewCount: number;
  badge: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  aspectRatings: AspectRatings;
  starDistribution: StarDistribution;
  priceHistory: PriceHistoryEntry[];
  reviews: Review[];
  aiQa: AiQaEntry[];
}

export interface SortOption {
  label: string;
  value: string;
}
