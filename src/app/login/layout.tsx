import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sign In – Cosmo Crystals",
  description:
    "Access your Cosmo Crystals account to track orders, manage your wishlist, and explore spiritual products.",
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
      <Header options={false} />
      <div className="min-h-[80vh]">{children}</div>
    </>
  );
}
