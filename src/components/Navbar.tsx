"use client";

import Link from "next/link";
import { ShoppingCart, Zap, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { itemCount, openCart } = useCartStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const count = itemCount();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
          color: "#fff",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: 600,
          padding: "8px 16px",
          letterSpacing: "0.03em",
        }}
      >
        🚀 FREE SHIPPING on all orders · 30-Day Money-Back Guarantee · Ships in 3–7 days
      </div>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(8,8,15,0.95)" : "rgba(8,8,15,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid #252540" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.5px",
              }}
            >
              Luma<span className="gradient-text">Gear</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="hidden-mobile"
          >
            {[
              ["Products", "/products"],
              ["Best Sellers", "/products?filter=bestseller"],
              ["Bundles", "/products?category=bundles"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: "#a0a0c0",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0c0")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Cart button */}
            <button
              onClick={openCart}
              style={{
                position: "relative",
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: "10px",
                padding: "8px 16px",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.15)";
              }}
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {count > 0 && (
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    color: "#fff",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "1px 6px",
                    minWidth: "20px",
                    textAlign: "center",
                  }}
                >
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "1px solid #252540",
                borderRadius: "8px",
                padding: "8px",
                color: "#fff",
                cursor: "pointer",
                display: "none",
              }}
              className="show-mobile"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(8,8,15,0.98)",
              borderTop: "1px solid #252540",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {[
              ["All Products", "/products"],
              ["Best Sellers", "/products?filter=bestseller"],
              ["Bundles", "/products?category=bundles"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#a0a0c0",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
