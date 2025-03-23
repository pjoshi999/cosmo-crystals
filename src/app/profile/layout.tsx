import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Profile – Cosmo Crystals",
  description:
    "Manage your account, orders, and wishlist at Cosmo Crystals. Update your details and explore personalized recommendations.",
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
