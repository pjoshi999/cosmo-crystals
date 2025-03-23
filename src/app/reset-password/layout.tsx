import Header from "@/components/layout/Header";
import type { Metadata } from "next";
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
      <div className="min-h-[80vh]">{children}</div>
    </Suspense>
  );
}
