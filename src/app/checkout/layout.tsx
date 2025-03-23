import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout – Cosmo Crystals",
  description:
    "Securely complete your purchase at Cosmo Crystals. Enjoy a seamless checkout process for spiritual and healing crystals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </>
  );
}
