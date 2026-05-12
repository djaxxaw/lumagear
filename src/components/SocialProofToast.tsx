"use client";

import { useState, useEffect } from "react";
import { X, ShoppingBag } from "lucide-react";

const PURCHASES = [
  { name: "Marcus T.", location: "Atlanta, GA", product: "AI Tracking Gimbal Pro", time: "2 min ago" },
  { name: "Jade R.", location: "Los Angeles, CA", product: "Creator Starter Bundle", time: "5 min ago" },
  { name: "Devon K.", location: "Chicago, IL", product: "Wireless Lapel Mic Pro", time: "8 min ago" },
  { name: "Aaliyah M.", location: "Houston, TX", product: "Foldable Ring Light 18\"", time: "12 min ago" },
  { name: "Jordan W.", location: "New York, NY", product: "Magnetic RGB Pocket Light", time: "15 min ago" },
  { name: "Priya S.", location: "Miami, FL", product: "AI Tracking Gimbal Pro", time: "18 min ago" },
  { name: "Tyler B.", location: "Seattle, WA", product: "Creator Starter Bundle", time: "21 min ago" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const initial = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hide = setTimeout(() => setVisible(false), 5000);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % PURCHASES.length);
      setVisible(true);
    }, 12000);
    return () => {
      clearTimeout(hide);
      clearTimeout(next);
    };
  }, [visible, index]);

  const purchase = PURCHASES[index];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 300,
        transform: visible ? "translateY(0)" : "translateY(120px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.4s ease",
        maxWidth: "320px",
      }}
    >
      <div
        style={{
          background: "#0f0f1a",
          border: "1px solid #252540",
          borderRadius: "14px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #7c3aed22, #06b6d422)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "10px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ShoppingBag size={18} color="#a855f7" />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, marginBottom: "2px" }}>
            {purchase.name} from {purchase.location}
          </p>
          <p style={{ color: "#7a7a9a", fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            Just bought <span style={{ color: "#a855f7" }}>{purchase.product}</span>
          </p>
          <p style={{ color: "#06b6d4", fontSize: "11px", marginTop: "2px" }}>{purchase.time}</p>
        </div>

        <button
          onClick={() => setVisible(false)}
          style={{
            background: "none",
            border: "none",
            color: "#7a7a9a",
            cursor: "pointer",
            padding: "4px",
            flexShrink: 0,
          }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
