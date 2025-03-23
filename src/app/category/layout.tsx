import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop by Category – Cosmo Crystals",
  description:
    "Browse our collection of spiritual crystals by category. Find the perfect gemstone for healing, meditation, and positive energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback="">
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </Suspense>
  );
}
