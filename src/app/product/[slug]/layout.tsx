import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

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
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </>
  );
}
