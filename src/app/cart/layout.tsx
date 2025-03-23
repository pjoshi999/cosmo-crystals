import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping Cart – Cosmo Crystals",
  description:
    "View and manage your shopping cart at Cosmo Crystals. Secure checkout and fast shipping for all spiritual and healing crystals.",
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
