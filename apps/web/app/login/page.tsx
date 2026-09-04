"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { LogIn, UserPlus, LogOut, User as UserIcon, AlertCircle, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const { user, loading, loginWithGoogle, loginWithEmail, signUpWithEmail, logout } = useAuth();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err: any) {
      setError(err?.message || "Authentication failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err?.message || "Google sign in failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm">Checking authentication status...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-400">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Authenticated</h1>
          <p className="text-slate-400 text-sm">{user.email || user.displayName || "Firebase User"}</p>
          <span className="inline-block mt-2 px-2.5 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            UID: {user.uid.slice(0, 10)}...
          </span>
        </div>
        <button
          onClick={() => logout()}
          className="flex items-center justify-center gap-2 w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl transition font-medium text-sm"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-center p-6 space-y-8">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-3">
          <UserIcon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-slate-400 text-xs">
          {isSignUp ? "Sign up to sync your expenses with MongoDB" : "Sign in to access your saved receipts"}
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-2 text-xs text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-600/25"
        >
          {isSignUp ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <div className="relative flex items-center justify-center">
        <div className="border-t border-white/10 w-full" />
        <span className="bg-[#090d16] px-3 text-xs text-slate-500 uppercase tracking-wider font-mono absolute">
          Or
        </span>
      </div>

      <button
        onClick={handleGoogleLogin}
        disabled={isSubmitting}
        className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition flex items-center justify-center gap-3 text-sm"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#EA4335"
            d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
          />
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
          />
          <path
            fill="#FBBC05"
            d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9c-.6-.8-1-1.9-1-3z"
          />
          <path
            fill="#34A853"
            d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="text-center">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-xs text-indigo-400 hover:underline"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Create one"}
        </button>
      </div>
    </div>
  );
}
