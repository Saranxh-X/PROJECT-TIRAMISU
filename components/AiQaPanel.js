"use client";

import { useState } from "react";
import { Sparkles, MessageSquare, Send, ArrowDownRight, Bot } from "lucide-react";

export default function AiQaPanel({ aiQaData, reviews }) {
  const [query, setQuery] = useState("");
  const [activeAnswer, setActiveAnswer] = useState(aiQaData?.[0] || null);
  const [isThinking, setIsThinking] = useState(false);

  const handleChipClick = (qa) => {
    setActiveAnswer(qa);
    setQuery(qa.question);
  };

  const handleCustomAsk = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Simulate RAG lookup
    setIsThinking(true);
    setTimeout(() => {
      // Find closest match or fallback answer
      const matched = aiQaData?.find((qa) =>
        qa.question.toLowerCase().includes(query.toLowerCase().trim())
      );

      if (matched) {
        setActiveAnswer(matched);
      } else {
        // Fallback RAG response using sample reviews
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

  // Helper to scroll to citation target review card and trigger amber glow
  const handleCitationClick = (reviewId) => {
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

  // Parse text containing [Review #ID] into interactive badges
  const renderFormattedAnswer = (text) => {
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
            className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/40 hover:bg-amber-400/30 hover:border-amber-400 transition-all duration-200 cursor-pointer shadow-sm shadow-amber-950/40"
            title={`Scroll to Review #${reviewId}`}
          >
            <ArrowDownRight className="w-3 h-3 text-amber-400" />
            <span>[Review #{reviewId}]</span>
          </button>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-indigo-900/30 relative overflow-hidden bg-gradient-to-br from-indigo-950/30 via-slate-900/80 to-slate-950">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-amber-400">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
            AI Product Copilot
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              RAG Active
            </span>
          </h3>
          <p className="text-xs text-slate-400">Ask questions synthesized directly from verified buyer reviews</p>
        </div>
      </div>

      {/* Starter Chips */}
      <div className="mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
          Suggested Questions:
        </span>
        <div className="flex flex-wrap gap-2">
          {aiQaData?.map((qa, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(qa)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                activeAnswer?.question === qa.question
                  ? "bg-indigo-600/30 text-indigo-200 border-indigo-500/60 shadow-sm"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800"
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
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
          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-4 pr-12 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />
        <button
          type="submit"
          disabled={isThinking || !query.trim()}
          className="absolute right-2 top-2 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Response Card */}
      {isThinking ? (
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2 text-xs text-indigo-400 animate-pulse">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>Synthesizing review context & citations...</span>
        </div>
      ) : activeAnswer ? (
        <div className="p-4 rounded-xl bg-slate-900/70 border border-indigo-500/20 shadow-inner">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-indigo-300 border-b border-slate-800 pb-2">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Q: {activeAnswer.question}</span>
          </div>
          <div className="text-xs text-slate-300 leading-relaxed font-normal">
            {renderFormattedAnswer(activeAnswer.answer)}
          </div>
        </div>
      ) : null}
    </div>
  );
}
