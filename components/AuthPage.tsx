"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Lock,
  Mail,
  Key,
  ShieldCheck,
  ArrowRight,
  Github,
  CheckCircle2,
  Eye,
  EyeOff,
  UserCheck,
} from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register" | "apikey">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("tiramisu_auth", JSON.stringify({ email: email || "demo@reviewexplorer.ai", authTime: Date.now() }));
      }
      setTimeout(() => {
        router.push("/");
      }, 800);
    }, 600);
  };

  const handleGuestAccess = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tiramisu_auth", JSON.stringify({ email: "guest@reviewexplorer.ai", isGuest: true }));
    }
    router.push("/");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden bg-slate-50">
      {/* Background Ambient Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-600/20 mb-2">
            <Sparkles className="w-7 h-7 text-amber-300 animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Product Review Explorer
          </h1>
          <p className="text-xs text-slate-600 max-w-xs mx-auto font-medium">
            Authorize access to unlock AI-synthesized sentiment intelligence & price analytics
          </p>
        </div>

        {/* Authorization Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl space-y-6">
          {/* Tab Selection */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "login"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "register"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Register
            </button>
            <button
              onClick={() => setActiveTab("apikey")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "apikey"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              API Key
            </button>
          </div>

          {authSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-base font-bold text-slate-900">Authorization Verified!</h3>
              <p className="text-xs text-slate-600 font-medium">Redirecting to white catalog page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "apikey" ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    API Key / Access Token
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-proj-review-explorer-..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white font-mono transition-all"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="engineer@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-indigo-600/25 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>{activeTab === "register" ? "Create Account & Authorize" : "Authenticate & Continue"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Logins */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400">
              <span className="bg-white px-2">Or Authorize With</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleGuestAccess}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GitHub OAuth</span>
              </button>

              <button
                onClick={handleGuestAccess}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Guest Mode</span>
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>256-Bit SSL Encrypted RAG Session</span>
          </div>
        </div>
      </div>
    </div>
  );
}
