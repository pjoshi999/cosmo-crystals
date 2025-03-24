import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reset Password – Cosmo Crystals",
  description:
    "Create a new password for your Cosmo Crystals account. Secure access to your spiritual product purchases and order history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback="">
      <Header options={false} />

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
      <div className="min-h-[80vh]">{children}</div>
    </Suspense>
  );
}
