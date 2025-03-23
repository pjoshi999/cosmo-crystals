import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account – Cosmo Crystals",
  description:
    "Join Cosmo Crystals today! Sign up for an account to shop spiritual and healing crystals, track orders, and receive exclusive offers.",
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
