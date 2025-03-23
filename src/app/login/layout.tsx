import Header from "@/components/layout/Header";
import type { Metadata } from "next";

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
      <Header options={false} />
      <div className="min-h-[80vh]">{children}</div>
    </>
  );
}
