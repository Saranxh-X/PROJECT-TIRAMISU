"use client";

import Link from "next/link";
import { Sparkles, Scale, Search, ShieldCheck } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

export default function Navbar() {
  const { selectedProducts, setIsDrawerOpen } = useCompare();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tiramisu <span className="text-amber-400 text-sm font-semibold ml-1 font-mono">Explorer</span>
            </span>
            <span className="text-[10px] font-medium text-indigo-400 tracking-wider uppercase -mt-1">
              AI Product Review Intelligence
            </span>
          </div>
        </Link>

        {/* Action Center */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Customer Reviews</span>
          </div>

          {/* Compare Badge Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 border ${
              selectedProducts.length > 0
                ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/30"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <Scale className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Compare</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[11px] font-bold ${
                selectedProducts.length > 0
                  ? "bg-indigo-500 text-white"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {selectedProducts.length}/3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
