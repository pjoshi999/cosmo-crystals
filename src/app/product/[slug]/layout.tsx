import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Product Detail",
  description:
    "Buy products online at Cosmo Crystals. A high-quality healing crystal perfect for spiritual growth and energy balancing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
