"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/mockData";
import PriceSentimentChart from "@/components/PriceSentimentChart";
import AiQaPanel from "@/components/AiQaPanel";
import ReviewSection from "@/components/ReviewSection";
import { useCompare } from "@/context/CompareContext";
import {
  Star,
  Scale,
  TrendingDown,
  ArrowLeft,
  Share2,
  Check,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const { toggleCompare, isInCompare } = useCompare();
  const activeCompare = isInCompare(product.id);

  // Gallery state
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>
      </div>

      {/* 1. Header & Specs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Gallery / Image Container */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card rounded-3xl p-4 border border-slate-800 bg-slate-900/60 overflow-hidden relative group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
            {product.isATL && (
              <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-950">
                <TrendingDown className="w-4 h-4" />
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Information & Key Specs Table */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                {product.brand} • {product.category}
              </span>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard?.writeText?.(window.location.href);
                    alert("Product link copied to clipboard!");
                  }
                }}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {product.name}
            </h1>

            {/* Price & Rating Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">${product.price}</span>
                  {product.msrp > product.price && (
                    <span className="text-sm text-slate-500 line-through">${product.msrp}</span>
                  )}
                </div>
                <span className="text-xs font-semibold text-emerald-400">
                  {product.isATL
                    ? "Lowest Price recorded in 90 Days!"
                    : `Save ${product.priceDropPct}% off MSRP`}
                </span>
              </div>

              <div className="h-10 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 stroke-amber-400"
                          : "stroke-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-sm text-slate-200">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => toggleCompare(product)}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 border cursor-pointer ${
                activeCompare
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-800"
              }`}
            >
              {activeCompare ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4 text-indigo-400" />}
              <span>{activeCompare ? "Added to Compare Dock" : "+ Add to Compare Dock"}</span>
            </button>
          </div>

          {/* Specifications Table */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specs || {}).map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="text-slate-400 font-medium">{key}</span>
                  <span className="font-semibold text-slate-200 text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Price & Sentiment Visualizer Chart */}
      <PriceSentimentChart data={product.priceHistory} />

      {/* 3. AI Q&A Panel with Citation Anchors */}
      <AiQaPanel aiQaData={product.aiQa} reviews={product.reviews} />

      {/* 4. Aspect Scorecard & Review Feed */}
      <ReviewSection product={product} />
    </div>
  );
}
