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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl glass-panel rounded-2xl p-3 shadow-2xl border border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Scale className="w-4 h-4" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-bold text-slate-900 block">Compare Dock</span>
              <span className="text-[10px] text-slate-500 font-mono">
                {selectedProducts.length}/3 Items Selected
              </span>
            </div>
          </div>

          {/* Selected Product Avatars */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {selectedProducts.map((prod) => (
              <div
                key={prod.id}
                className="relative group flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 pr-2.5 text-xs"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-7 h-7 rounded-lg object-cover bg-slate-100"
                />
                <span className="font-bold text-slate-800 text-[11px] truncate max-w-[90px]">
                  {prod.name}
                </span>
                <button
                  onClick={() => removeFromCompare(prod.id)}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-0.5 cursor-pointer"
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
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-md shadow-indigo-600/20 whitespace-nowrap cursor-pointer"
            >
              <span>Compare ({selectedProducts.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Side-by-Side Comparison Drawer Modal */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl p-6 border border-slate-200 shadow-2xl overflow-y-auto flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900">Product Spec & Aspect Comparison</h3>
                  <p className="text-xs text-slate-500 font-medium">Side-by-side delta analysis and aspect scorecard ratings</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={clearCompare}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Comparison Grid Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 text-xs font-extrabold text-slate-500 uppercase tracking-wider w-1/4">
                      Specification / Feature
                    </th>
                    {selectedProducts.map((prod) => (
                      <th key={prod.id} className="p-3 w-1/4 min-w-[200px]">
                        <div className="flex flex-col items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-16 h-12 object-cover rounded-lg bg-slate-200"
                          />
                          <Link
                            href={`/product/${prod.id}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors line-clamp-1"
                          >
                            {prod.name}
                          </Link>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-base font-black text-slate-900">${prod.price}</span>
                            {prod.msrp > prod.price && (
                              <span className="text-xs text-slate-400 line-through font-medium">${prod.msrp}</span>
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {/* Rating Row */}
                  <tr>
                    <td className="p-3 font-bold text-slate-600">Rating & Reviews</td>
                    {selectedProducts.map((prod) => (
                      <td key={prod.id} className="p-3 text-slate-800 font-semibold">
                        <span className="font-extrabold text-amber-600">{prod.rating} ★</span>
                        <span className="text-slate-500 ml-1">({prod.reviewCount})</span>
                      </td>
                    ))}
                  </tr>

                  {/* Price Delta Badge */}
                  <tr>
                    <td className="p-3 font-bold text-slate-600">Price Status</td>
                    {selectedProducts.map((prod) => (
                      <td key={prod.id} className="p-3">
                        {prod.isATL ? (
                          <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            All-Time Low ${prod.allTimeLow}
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 font-bold">
                            {prod.badge}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Aspect Rating Matrix Rows */}
                  {allAspectKeys.map((asp) => (
                    <tr key={`aspect-${asp}`}>
                      <td className="p-3 font-bold text-slate-600">{asp} Score</td>
                      {selectedProducts.map((prod) => {
                        const score = prod.aspectRatings?.[asp] ?? "N/A";
                        return (
                          <td key={prod.id} className="p-3">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-slate-900">{score}</span>
                              <div className="w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                                <div
                                  className="h-full bg-indigo-600 rounded-full"
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
                      <td className="p-3 font-bold text-slate-600">{specKey}</td>
                      {selectedProducts.map((prod) => (
                        <td key={prod.id} className="p-3 text-slate-700 font-medium">
                          {prod.specs?.[specKey] || <span className="text-slate-400">—</span>}
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
