import "./globals.css";
import React from "react";
import { CompareProvider } from "@/context/CompareContext";
import Navbar from "@/components/Navbar";
import CompareTray from "@/components/CompareTray";

export const metadata = {
  title: "Product Review Explorer | AI-Powered Review Analytics",
  description:
    "Explore product catalogs, track price history vs customer sentiment, and interact with AI Q&A cited directly from verified buyer reviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col selection:bg-indigo-600 selection:text-white">
        <CompareProvider>
          <Navbar />
          <main className="flex-1 pb-24">{children}</main>
          <CompareTray />
        </CompareProvider>
      </body>
    </html>
  );
}
