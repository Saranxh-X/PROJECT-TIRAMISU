"use client";

import Link from "next/link";
import { Star, Scale, TrendingDown, ArrowRight, Check } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

export default function ProductCard({ product }) {
  const { toggleCompare, isInCompare } = useCompare();
  const activeCompare = isInCompare(product.id);

  return (
    <div className="group glass-card rounded-2xl p-5 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden">
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
          {product.brand}
        </span>
        {product.isATL ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-950">
            <TrendingDown className="w-3 h-3" />
            ATL ${product.allTimeLow}
          </span>
        ) : (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            {product.badge}
          </span>
        )}
      </div>

      {/* Image Thumbnail */}
      <Link href={`/product/${product.id}`} className="block relative mb-4 overflow-hidden rounded-xl bg-slate-900/80 aspect-video group-hover:bg-slate-900 transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
      </Link>

      {/* Title & Description */}
      <div className="flex-1 mb-4">
        <Link href={`/product/${product.id}`} className="block group-hover:text-amber-400 transition-colors">
          <h3 className="font-bold text-lg text-slate-100 tracking-tight leading-snug line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Star Rating & Review Count */}
      <div className="flex items-center gap-2 mb-4 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
        <div className="flex items-center text-amber-400">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
          <span className="ml-1 text-sm font-bold text-slate-200">{product.rating}</span>
        </div>
        <span className="text-xs text-slate-500">•</span>
        <span className="text-xs text-slate-400">{product.reviewCount} reviews</span>
      </div>

      {/* Price & Action Buttons */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-white">${product.price}</span>
            {product.msrp > product.price && (
              <span className="text-xs text-slate-500 line-through">${product.msrp}</span>
            )}
          </div>
          {product.priceDropPct > 0 && (
            <span className="text-[10px] font-bold text-emerald-400">
              Save {product.priceDropPct}%
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Compare Toggle */}
          <button
            onClick={() => toggleCompare(product)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 border ${
              activeCompare
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800"
            }`}
            title="Toggle item in Compare Tray"
          >
            {activeCompare ? <Check className="w-3.5 h-3.5" /> : <Scale className="w-3.5 h-3.5 text-indigo-400" />}
            <span>{activeCompare ? "Added" : "+ Compare"}</span>
          </button>

          {/* View Details Link */}
          <Link
            href={`/product/${product.id}`}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-200"
            title="View Details"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
