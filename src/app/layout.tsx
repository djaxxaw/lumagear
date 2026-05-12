import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SocialProofToast from "@/components/SocialProofToast";
import EmailPopup from "@/components/EmailPopup";

export const metadata: Metadata = {
  verification: { google: ["vupXu5fae7Pm7f3boqa4Q7ViN784PErChAqU6s7TBXA", "2KX0PZ8joSU9fKFky3xr47d-siS-FgApYZdcOvQ-K7U"] },
  title: "LumaGear — Pro Creator Tools",
  description:
    "Premium content creator accessories — AI gimbals, wireless mics, RGB lights, and more. Free shipping on all orders.",
  keywords: "gimbal, wireless mic, ring light, creator tools, content creator accessories, AI tracking gimbal, wireless lapel mic, foldable ring light",
  openGraph: {
    title: "LumaGear — Pro Creator Tools",
    description: "Premium gear for content creators. Free shipping.",
    type: "website",
    url: "https://lumagear.vercel.app",
    siteName: "LumaGear",
  },
  twitter: { card: "summary_large_image", title: "LumaGear — Pro Creator Tools", description: "Premium gear for content creators. Free shipping on all orders." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lumagear.vercel.app" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LumaGear",
  url: "https://lumagear.vercel.app",
  logo: "https://lumagear.vercel.app/logo.png",
  description: "Professional creator gear — AI gimbals, wireless mics, RGB lights, and ring lights. Free shipping on all orders.",
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "support@lumagear.com" },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LumaGear",
  url: "https://lumagear.vercel.app",
  potentialAction: { "@type": "SearchAction", target: "https://lumagear.vercel.app/products?q={search_term_string}", "query-input": "required name=search_term_string" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      </head>
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
