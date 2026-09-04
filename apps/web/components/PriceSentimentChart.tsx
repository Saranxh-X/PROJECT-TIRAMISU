"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { TrendingDown, Smile } from "lucide-react";
import { PriceHistoryEntry } from "@/types/product";

interface PriceSentimentChartProps {
  data: PriceHistoryEntry[];
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-200 text-xs">
        <p className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
            <span style={{ color: entry.color }} className="font-bold flex items-center gap-1">
              {entry.name === "Price ($)" ? <TrendingDown className="w-3 h-3" /> : <Smile className="w-3 h-3" />}
              {entry.name}:
            </span>
            <span className="font-black text-slate-900">
              {entry.name === "Price ($)" ? `$${entry.value}` : `${entry.value} ★`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function PriceSentimentChart({ data }: PriceSentimentChartProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <span>Price & Customer Satisfaction History</span>
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Correlation between historical price drops and customer sentiment ratings (90 Days)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <span className="flex items-center gap-1.5 text-indigo-600">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" /> Price ($)
          </span>
          <span className="flex items-center gap-1.5 text-amber-600">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Sentiment (★)
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              tick={{ fontSize: 11, fill: "#475569" }}
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
            />
            {/* Left Axis: Price */}
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#4f46e5"
              domain={["dataMin - 10", "dataMax + 10"]}
              tick={{ fontSize: 11, fill: "#4f46e5" }}
              tickFormatter={(v: number) => `$${v}`}
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
            />
            {/* Right Axis: Sentiment */}
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#d97706"
              domain={[3.5, 5.0]}
              tick={{ fontSize: 11, fill: "#d97706" }}
              tickFormatter={(v: number) => `${v}★`}
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="price"
              name="Price ($)"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ fill: "#4f46e5", r: 4 }}
              activeDot={{ r: 6, stroke: "#ffffff", strokeWidth: 2 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sentiment"
              name="Sentiment Rating"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: "#f59e0b", r: 4 }}
              activeDot={{ r: 6, stroke: "#ffffff", strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
