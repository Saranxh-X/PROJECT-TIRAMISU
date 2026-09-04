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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-slate-50 min-h-screen">
      {/* Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>
      </div>

      {/* 1. Header & Specs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Gallery / Image Container */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card rounded-3xl p-4 border border-slate-200 bg-white shadow-sm overflow-hidden relative group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
            {product.isATL && (
              <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
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
              <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">
                {product.brand} • {product.category}
              </span>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard?.writeText?.(window.location.href);
                    alert("Product link copied to clipboard!");
                  }
                }}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              {product.name}
            </h1>

            {/* Price & Rating Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">${product.price}</span>
                  {product.msrp > product.price && (
                    <span className="text-sm text-slate-400 line-through font-medium">${product.msrp}</span>
                  )}
                </div>
                <span className="text-xs font-bold text-emerald-700">
                  {product.isATL
                    ? "Lowest Price recorded in 90 Days!"
                    : `Save ${product.priceDropPct}% off MSRP`}
                </span>
              </div>

              <div className="h-10 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 stroke-amber-400"
                          : "stroke-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-sm text-slate-800">{product.rating}</span>
                <span className="text-xs text-slate-500 font-medium">({product.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => toggleCompare(product)}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 border cursor-pointer ${
                activeCompare
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
              }`}
            >
              {activeCompare ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4 text-indigo-600" />}
              <span>{activeCompare ? "Added to Compare Dock" : "+ Add to Compare Dock"}</span>
            </button>
          </div>

          {/* Specifications Table */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 bg-white shadow-xs">
            <h3 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specs || {}).map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="font-bold text-slate-900 text-right">{val}</span>
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
