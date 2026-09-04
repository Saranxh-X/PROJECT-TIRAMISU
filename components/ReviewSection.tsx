"use client";

import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  Filter,
  PlusCircle,
  X,
  Sparkles,
} from "lucide-react";
import { Product, Review } from "@/types/product";

interface ReviewSectionProps {
  product: Product;
}

export default function ReviewSection({ product }: ReviewSectionProps) {
  const [reviewsList, setReviewsList] = useState<Review[]>(product.reviews || []);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [selectedAspect, setSelectedAspect] = useState<string>("All");

  // Write Review Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newAspect, setNewAspect] = useState("Build");

  const aspects = ["All", "Battery", "Build", "Price", "Support"];

  // Star Distribution calculation
  const starCounts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviewsList.forEach((r) => {
    if (starCounts[r.rating] !== undefined) {
      starCounts[r.rating]++;
    }
  });

  const totalStarReviews = reviewsList.length || 1;

  // Filter reviews by star and aspect
  const filteredReviews = reviewsList.filter((rev) => {
    const starMatch = selectedStar === null || rev.rating === selectedStar;
    const aspectMatch =
      selectedAspect === "All" ||
      rev.aspectTag?.toLowerCase() === selectedAspect.toLowerCase();
    return starMatch && aspectMatch;
  });

  // Optimistic Vote Handlers
  const handleVote = (reviewId: string, type: "helpful" | "unhelpful") => {
    setReviewsList((prev) =>
      prev.map((rev) => {
        if (rev.id === reviewId) {
          if (type === "helpful") {
            return { ...rev, helpfulCount: rev.helpfulCount + 1 };
          } else {
            return { ...rev, unhelpfulCount: rev.unhelpfulCount + 1 };
          }
        }
        return rev;
      })
    );
  };

  // Submit New Review
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim() || !newTitle.trim()) return;

    const newRev: Review = {
      id: `review-${Date.now()}`,
      author: newAuthor.trim() || "Anonymous Verified Buyer",
      date: new Date().toISOString().split("T")[0],
      rating: newRating,
      title: newTitle,
      text: newText,
      aspectTag: newAspect,
      helpfulCount: 0,
      unhelpfulCount: 0,
      verifiedPurchase: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsModalOpen(false);

    setNewTitle("");
    setNewText("");
    setNewAuthor("");
    setNewRating(5);
  };

  return (
    <div className="space-y-6">
      {/* Aspect Scorecard & Star Breakdown Header */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Rating Overview */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-200 w-28 h-28">
              <span className="text-4xl font-black text-slate-900">{product.rating}</span>
              <div className="flex text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 stroke-amber-400"
                        : "stroke-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-slate-500 font-semibold">{reviewsList.length} ratings</span>
            </div>

            {/* Aspect Ratings Badges */}
            <div>
              <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                Aspect Satisfaction Scores
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.aspectRatings || {}).map(([key, score]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold"
                  >
                    <span className="text-slate-600 font-medium">{key}</span>
                    <span className="font-extrabold text-amber-600">{score} ★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div className="w-full lg:w-72 space-y-1.5">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = starCounts[star] || 0;
              const pct = Math.round((count / totalStarReviews) * 100);
              const isSelected = selectedStar === star;

              return (
                <button
                  key={star}
                  onClick={() => setSelectedStar(isSelected ? null : star)}
                  className={`w-full flex items-center gap-2 text-xs py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                    isSelected ? "bg-amber-100 border border-amber-300 font-bold" : "hover:bg-slate-50"
                  }`}
                >
                  <span className="w-4 font-bold text-slate-700">{star}★</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-slate-500 text-[11px]">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Aspect Filter Pills & Write Review Button */}
        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold mr-1">
              <Filter className="w-3.5 h-3.5 text-indigo-600" /> Filter:
            </span>
            {aspects.map((aspect) => (
              <button
                key={aspect}
                onClick={() => setSelectedAspect(aspect)}
                className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all duration-200 border cursor-pointer ${
                  selectedAspect === aspect
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {aspect}
              </button>
            ))}

            {selectedStar && (
              <button
                onClick={() => setSelectedStar(null)}
                className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>{selectedStar}★ Only</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>
      </div>

      {/* Review Feed Cards */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="glass-card rounded-2xl p-8 text-center text-slate-500 bg-white border border-slate-200">
            <p className="text-sm font-bold">No reviews match the selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedStar(null);
                setSelectedAspect("All");
              }}
              className="mt-3 text-xs text-indigo-600 underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              id={rev.id}
              className="glass-card rounded-2xl p-5 border border-slate-200 bg-white shadow-xs transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                    {rev.verifiedPurchase && (
                      <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                </div>

                {rev.aspectTag && (
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                    {rev.aspectTag}
                  </span>
                )}
              </div>

              {/* Star Rating & Title */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? "fill-amber-400 stroke-amber-400" : "stroke-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <h5 className="font-extrabold text-xs text-slate-900">{rev.title}</h5>
              </div>

              {/* Text Content */}
              <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">{rev.text}</p>

              {/* Helpful Voting Controls */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400">ID: #{rev.id}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium">Was this helpful?</span>
                  <button
                    onClick={() => handleVote(rev.id, "helpful")}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 font-semibold cursor-pointer"
                  >
                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                    <span className="font-bold text-[11px]">{rev.helpfulCount}</span>
                  </button>
                  <button
                    onClick={() => handleVote(rev.id, "unhelpful")}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 font-semibold cursor-pointer"
                  >
                    <ThumbsDown className="w-3 h-3 text-rose-500" />
                    <span className="font-bold text-[11px]">{rev.unhelpfulCount}</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Write a Review
            </h3>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Overall Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating
                            ? "fill-amber-400 stroke-amber-400"
                            : "stroke-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author & Aspect */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Aspect Focus
                  </label>
                  <select
                    value={newAspect}
                    onChange={(e) => setNewAspect(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white font-medium"
                  >
                    {aspects.filter((a) => a !== "All").map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Headline / Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Summarize your experience..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                />
              </div>

              {/* Text Content & Character Counter */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Review Details
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {newText.length} / 500 chars
                  </span>
                </div>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Describe battery life, build quality, comfort, etc..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                Publish Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
