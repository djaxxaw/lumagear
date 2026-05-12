"use client";

import Link from "next/link";
import { Zap, Camera, Video, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a12",
        borderTop: "1px solid #252540",
        padding: "60px 24px 32px",
        marginTop: "80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  borderRadius: "8px",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={15} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#fff" }}>LumaGear</span>
            </div>
            <p style={{ color: "#7a7a9a", fontSize: "14px", lineHeight: "1.6", maxWidth: "240px" }}>
              Professional creator tools built for the next generation of content creators.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {[Camera, Video, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    background: "#16162a",
                    border: "1px solid #252540",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7a7a9a",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.color = "#7c3aed";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#252540";
                    e.currentTarget.style.color = "#7a7a9a";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: "16px", fontSize: "14px" }}>
              Products
            </h4>
            {["Gimbals", "Audio", "Lighting", "Mounts", "Bundles"].map((item) => (
              <Link
                key={item}
                href={`/products?category=${item.toLowerCase()}`}
                style={{
                  display: "block",
                  color: "#7a7a9a",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a855f7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a9a")}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: "16px", fontSize: "14px" }}>
              Company
            </h4>
            {["About", "Contact", "Shipping Policy", "Return Policy", "Privacy Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  color: "#7a7a9a",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a855f7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a9a")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: "8px", fontSize: "14px" }}>
              Get 10% Off Your First Order
            </h4>
            <p style={{ color: "#7a7a9a", fontSize: "13px", marginBottom: "16px" }}>
              Join 12,000+ creators. Get deals, tips & early access.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  minWidth: "140px",
                  background: "#16162a",
                  border: "1px solid #252540",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid #252540",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "#7a7a9a", fontSize: "13px" }}>
            © 2026 LumaGear. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                style={{
                  background: "#16162a",
                  border: "1px solid #252540",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  fontSize: "11px",
                  color: "#7a7a9a",
                  fontWeight: 600,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
