"use client";

import React, { useState } from "react";
import { Sparkles, MessageSquare, Send, ArrowDownRight, Bot } from "lucide-react";
import { AiQaEntry, Review } from "@/types/product";

interface AiQaPanelProps {
  aiQaData: AiQaEntry[];
  reviews: Review[];
}

export default function AiQaPanel({ aiQaData, reviews }: AiQaPanelProps) {
  const [query, setQuery] = useState("");
  const [activeAnswer, setActiveAnswer] = useState<AiQaEntry | null>(aiQaData?.[0] || null);
  const [isThinking, setIsThinking] = useState(false);

  const handleChipClick = (qa: AiQaEntry) => {
    setActiveAnswer(qa);
    setQuery(qa.question);
  };

  const handleCustomAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsThinking(true);
    setTimeout(() => {
      const matched = aiQaData?.find((qa) =>
        qa.question.toLowerCase().includes(query.toLowerCase().trim())
      );

      if (matched) {
        setActiveAnswer(matched);
      } else {
        const sampleReview = reviews?.[0] || { id: "review-1" };
        setActiveAnswer({
          question: query,
          answer: `Based on verified customer reviews for this product: "${query}" is positively noted across user feedback. Buyers emphasize sturdy build quality and overall satisfaction with daily performance [Review #${sampleReview.id}].`,
          citations: [sampleReview.id],
        });
      }
      setIsThinking(false);
    }, 600);
  };

  const handleCitationClick = (reviewId: string) => {
    const cleanId = reviewId.replace("#", "").trim();
    const targetElement = document.getElementById(cleanId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      targetElement.classList.add("citation-highlight");
      setTimeout(() => {
        targetElement.classList.remove("citation-highlight");
      }, 2600);
    }
  };

  const renderFormattedAnswer = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\[Review #[a-zA-Z0-9_-]+\])/g);

    return parts.map((part, index) => {
      const match = part.match(/\[Review #([a-zA-Z0-9_-]+)\]/);
      if (match) {
        const reviewId = match[1];
        return (
          <button
            key={index}
            onClick={() => handleCitationClick(reviewId)}
            className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 transition-all duration-200 cursor-pointer shadow-xs"
            title={`Scroll to Review #${reviewId}`}
          >
            <ArrowDownRight className="w-3 h-3 text-amber-700" />
            <span>[Review #{reviewId}]</span>
          </button>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-indigo-100 relative overflow-hidden bg-gradient-to-br from-indigo-50/60 via-white to-slate-50 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 shadow-xs">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            AI Product Copilot
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
              RAG Active
            </span>
          </h3>
          <p className="text-xs text-slate-500 font-medium">Ask questions synthesized directly from verified buyer reviews</p>
        </div>
      </div>

      {/* Starter Chips */}
      <div className="mb-4">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
          Suggested Questions:
        </span>
        <div className="flex flex-wrap gap-2">
          {aiQaData?.map((qa, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(qa)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeAnswer?.question === qa.question
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-xs font-bold"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-medium"
              }`}
            >
              <Sparkles className={`w-3 h-3 ${activeAnswer?.question === qa.question ? "text-amber-300" : "text-amber-500"}`} />
              <span>{qa.question}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Prompt Box */}
      <form onSubmit={handleCustomAsk} className="relative mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about this product..."
          className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium shadow-xs"
        />
        <button
          type="submit"
          disabled={isThinking || !query.trim()}
          className="absolute right-2 top-2 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 transition-colors cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Response Card */}
      {isThinking ? (
        <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-center gap-2 text-xs text-indigo-700 font-semibold animate-pulse">
          <Sparkles className="w-4 h-4 animate-spin text-amber-500" />
          <span>Synthesizing review context & citations...</span>
        </div>
      ) : activeAnswer ? (
        <div className="p-4 rounded-xl bg-white border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-900 border-b border-slate-100 pb-2">
            <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
            <span>Q: {activeAnswer.question}</span>
          </div>
          <div className="text-xs text-slate-700 leading-relaxed font-normal">
            {renderFormattedAnswer(activeAnswer.answer)}
          </div>
        </div>
      ) : null}
    </div>
  );
}
