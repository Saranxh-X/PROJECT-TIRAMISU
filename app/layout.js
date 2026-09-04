import "./globals.css";
import { CompareProvider } from "@/context/CompareContext";
import Navbar from "@/components/Navbar";
import CompareTray from "@/components/CompareTray";

export const metadata = {
  title: "Product Review Explorer | AI-Powered Review Analytics",
  description:
    "Explore product catalogs, track price history vs customer sentiment, and interact with AI Q&A cited directly from verified buyer reviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <CompareProvider>
          <Navbar />
          <main className="flex-1 pb-24">{children}</main>
          <CompareTray />
        </CompareProvider>
      </body>
    </html>
  );
}
