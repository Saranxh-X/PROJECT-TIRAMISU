"use client";

import React from "react";
import { Zap, Camera, Receipt, Users, ShieldAlert, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col p-5 space-y-6">
      {/* Header Bar */}
      <header className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Slipstream
            </h1>
            <p className="text-xs text-slate-400 font-medium">Smart AI Expense Tracker</p>
          </div>
        </div>
        <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Phase 1 Ready
        </span>
      </header>

      {/* Hero Quick Action Box */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-6 border border-white/10 shadow-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold w-fit border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Receipt Scanner</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Scan & Split Bills Instantly</h2>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Upload or capture a receipt. Our AI Vision extracts line items and lets you split costs in seconds.
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            <span>Scan Receipt</span>
          </button>
        </div>
      </div>

      {/* Features Grid Overview */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Features Scope</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card p-4 rounded-xl flex flex-col justify-between space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">AI Vision Extraction</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Zod validated json schemas</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl flex flex-col justify-between space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Review & Highlight</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Amber uncertain field alerts</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl flex flex-col justify-between space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Split Mode</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Mobile line item assigner</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl flex flex-col justify-between space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Offline Dexie</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Sync fallback mechanism</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Footer */}
      <div className="mt-auto glass-card p-3 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Monorepo Infrastructure Active
        </span>
        <span className="font-mono text-[10px] text-slate-500">v0.1.0-phase1</span>
      </div>
    </div>
  );
}
