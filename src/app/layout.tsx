import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SocialProofToast from "@/components/SocialProofToast";
import EmailPopup from "@/components/EmailPopup";

export const metadata: Metadata = {
  title: "LumaGear — Pro Creator Tools",
  description:
    "Premium content creator accessories — AI gimbals, wireless mics, RGB lights, and more. Free shipping on all orders.",
  keywords: "gimbal, wireless mic, ring light, creator tools, content creator accessories",
  openGraph: {
    title: "LumaGear — Pro Creator Tools",
    description: "Premium gear for content creators. Free shipping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <SocialProofToast />
        <EmailPopup />
      </body>
    </html>
  );
}
