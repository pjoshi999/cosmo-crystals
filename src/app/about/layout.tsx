import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Cosmo Crystals",
  description:
    "Learn about Cosmo Crystals, your trusted source for spiritual and healing stones. Discover our journey and commitment to providing authentic gemstones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
