import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password – Cosmo Crystals",
  description:
    "Reset your password for Cosmo Crystals. Secure your account and regain access to your spiritual and healing crystal orders.",
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
