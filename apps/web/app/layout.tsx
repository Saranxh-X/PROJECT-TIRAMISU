import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slipstream | Mobile Expense & Bill Splitter",
  description: "AI-powered mobile-first PWA receipt scanner and bill splitter",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Slipstream",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#090d16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090d16] text-slate-100 min-h-screen antialiased selection:bg-indigo-500 selection:text-white">
        <main className="max-w-md mx-auto min-h-screen relative flex flex-col pb-20 shadow-2xl border-x border-white/5">
          {children}
        </main>
      </body>
    </html>
  );
}
