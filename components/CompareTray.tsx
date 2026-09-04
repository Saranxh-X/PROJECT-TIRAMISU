"use client";

import Link from "next/link";
import { Scale, X, ArrowRight, Trash2 } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

export default function CompareTray() {
  const {
    selectedProducts,
    removeFromCompare,
    clearCompare,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useCompare();

  if (selectedProducts.length === 0) return null;

  const allSpecKeys = Array.from(
    new Set(selectedProducts.flatMap((p) => Object.keys(p.specs || {})))
  );

  const allAspectKeys = ["Battery", "Build", "Price", "Support"];

  return (
    <>
      {/* Floating Bottom Dock Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl glass-panel rounded-2xl p-3 shadow-2xl border border-indigo-500/40 bg-slate-950/90 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Scale className="w-4 h-4" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-bold text-slate-100 block">Compare Dock</span>
              <span className="text-[10px] text-slate-400 font-mono">
                {selectedProducts.length}/3 Items Selected
              </span>
            </div>
          </div>

          {/* Selected Product Avatars */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {selectedProducts.map((prod) => (
              <div
                key={prod.id}
                className="relative group flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-1.5 pr-2.5 text-xs"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-7 h-7 rounded-lg object-cover bg-slate-800"
                />
                <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[90px]">
                  {prod.name}
                </span>
                <button
                  onClick={() => removeFromCompare(prod.id)}
                  className="text-slate-500 hover:text-rose-400 transition-colors p-0.5 cursor-pointer"
                  title="Remove"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Compare Now Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition-all shadow-md shadow-indigo-600/30 whitespace-nowrap cursor-pointer"
            >
              <span>Compare ({selectedProducts.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Side-by-Side Comparison Drawer Modal */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="glass-panel w-full max-w-5xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl p-6 border border-slate-700 shadow-2xl overflow-y-auto flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-amber-400">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100">Product Spec & Aspect Comparison</h3>
                  <p className="text-xs text-slate-400">Side-by-side delta analysis and aspect scorecard ratings</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={clearCompare}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Comparison Grid Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/4">
                      Specification / Feature
                    </th>
                    {selectedProducts.map((prod) => (
                      <th key={prod.id} className="p-3 w-1/4 min-w-[200px]">
                        <div className="flex flex-col items-start gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-16 h-12 object-cover rounded-lg bg-slate-800"
                          />
                          <Link
                            href={`/product/${prod.id}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="font-bold text-sm text-slate-100 hover:text-amber-400 transition-colors line-clamp-1"
                          >
                            {prod.name}
                          </Link>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-base font-black text-white">${prod.price}</span>
                            {prod.msrp > prod.price && (
                              <span className="text-xs text-slate-500 line-through">${prod.msrp}</span>
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs">
                  {/* Rating Row */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Rating & Reviews</td>
                    {selectedProducts.map((prod) => (
                      <td key={prod.id} className="p-3 text-slate-200">
                        <span className="font-bold text-amber-400">{prod.rating} ★</span>
                        <span className="text-slate-500 ml-1">({prod.reviewCount})</span>
                      </td>
                    ))}
                  </tr>

                  {/* Price Delta Badge */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Price Status</td>
                    {selectedProducts.map((prod) => (
                      <td key={prod.id} className="p-3">
                        {prod.isATL ? (
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            All-Time Low ${prod.allTimeLow}
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                            {prod.badge}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Aspect Rating Matrix Rows */}
                  {allAspectKeys.map((asp) => (
                    <tr key={`aspect-${asp}`}>
                      <td className="p-3 font-semibold text-slate-400">{asp} Score</td>
                      {selectedProducts.map((prod) => {
                        const score = prod.aspectRatings?.[asp] ?? "N/A";
                        return (
                          <td key={prod.id} className="p-3">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-200">{score}</span>
                              <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                <div
                                  className="h-full bg-indigo-500 rounded-full"
                                  style={{ width: `${(Number(score) / 5) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  {/* Dynamic Technical Specs Rows */}
                  {allSpecKeys.map((specKey) => (
                    <tr key={specKey}>
                      <td className="p-3 font-semibold text-slate-400">{specKey}</td>
                      {selectedProducts.map((prod) => (
                        <td key={prod.id} className="p-3 text-slate-300">
                          {prod.specs?.[specKey] || <span className="text-slate-600">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
