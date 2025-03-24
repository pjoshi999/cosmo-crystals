import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Script from "next/script";
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-E3L3VK7JT8`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3L3VK7JT8');
          `}
      </Script>
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </Suspense>
  );
}
