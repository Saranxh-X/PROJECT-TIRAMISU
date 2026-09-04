"use client";

import Link from "next/link";
import { Sparkles, Scale, ShieldCheck, User } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

export default function Navbar() {
  const { selectedProducts, setIsDrawerOpen } = useCompare();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              ReviewExplorer
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-widest">
                AI
              </span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium -mt-0.5">
              Sentiment & Price Analytics
            </span>
          </div>
        </Link>

        {/* Action Badges */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>RAG-Verified Buyer Data</span>
          </div>

          {selectedProducts.length > 0 && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-2 hover:bg-indigo-100 transition-all cursor-pointer shadow-xs"
            >
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Compare</span>
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-mono flex items-center justify-center shadow-xs">
                {selectedProducts.length}
              </span>
            </button>
          )}

          {/* Authorise Button */}
          <Link
            href="/auth"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <User className="w-3.5 h-3.5 text-indigo-600" />
            <span>Authorize</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
