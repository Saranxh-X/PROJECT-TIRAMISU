"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { TrendingDown, Smile } from "lucide-react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-3 rounded-xl shadow-2xl border border-slate-700/80 text-xs">
        <p className="font-bold text-slate-300 mb-2 border-b border-slate-800 pb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
            <span style={{ color: entry.color }} className="font-medium flex items-center gap-1">
              {entry.name === "Price ($)" ? <TrendingDown className="w-3 h-3" /> : <Smile className="w-3 h-3" />}
              {entry.name}:
            </span>
            <span className="font-bold text-white">
              {entry.name === "Price ($)" ? `$${entry.value}` : `${entry.value} ★`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function PriceSentimentChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <span>Price & Customer Satisfaction History</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Correlation between historical price drops and customer sentiment ratings (90 Days)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-indigo-400">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> Price ($)
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Sentiment (★)
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
            />
            {/* Left Axis: Price */}
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#818cf8"
              domain={["dataMin - 10", "dataMax + 10"]}
              tick={{ fontSize: 11, fill: "#818cf8" }}
              tickFormatter={(v) => `$${v}`}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
            />
            {/* Right Axis: Sentiment */}
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#fbbf24"
              domain={[3.5, 5.0]}
              tick={{ fontSize: 11, fill: "#fbbf24" }}
              tickFormatter={(v) => `${v}★`}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="price"
              name="Price ($)"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", r: 4 }}
              activeDot={{ r: 6, stroke: "#ffffff", strokeWidth: 2 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sentiment"
              name="Sentiment Rating"
              stroke="#fbbf24"
              strokeWidth={3}
              dot={{ fill: "#fbbf24", r: 4 }}
              activeDot={{ r: 6, stroke: "#ffffff", strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
