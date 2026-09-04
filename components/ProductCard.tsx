"use client";

import Link from "next/link";
import { Star, Scale, TrendingDown, Check, ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { useCompare } from "@/context/CompareContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleCompare, isInCompare } = useCompare();
  const activeCompare = isInCompare(product.id);

  return (
    <div className="glass-card rounded-2xl p-4 border border-slate-800/80 bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group relative">
      {/* Top Image Container */}
      <div>
        <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-950 mb-4 border border-slate-800/60">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isATL && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950">
              <TrendingDown className="w-3.5 h-3.5" />
              {product.badge}
            </span>
          )}
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-800 uppercase">
            {product.category}
          </span>
        </div>

        {/* Brand & Title */}
        <div className="space-y-1 mb-3">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">
            {product.brand}
          </span>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer Info: Rating, Price, Compare Toggle */}
      <div className="pt-3 border-t border-slate-800/60 space-y-3">
        {/* Price & Rating Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-white">${product.price}</span>
            {product.msrp > product.price && (
              <span className="text-xs text-slate-500 line-through">${product.msrp}</span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            <span className="font-bold text-slate-200">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Action Buttons: View Details & Compare */}
        <div className="flex items-center gap-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>

          <button
            onClick={() => toggleCompare(product)}
            className={`py-2 px-3 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all border ${
              activeCompare
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                : "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
            }`}
            title={activeCompare ? "Remove from Compare" : "Add to Compare Dock"}
          >
            {activeCompare ? <Check className="w-3.5 h-3.5" /> : <Scale className="w-3.5 h-3.5 text-indigo-400" />}
            <span>{activeCompare ? "Added" : "+ Compare"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
