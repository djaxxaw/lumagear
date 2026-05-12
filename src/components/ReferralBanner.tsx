"use client";

import { useState } from "react";
import { Gift, Copy, Check, X } from "lucide-react";

export default function ReferralBanner() {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const referralLink = "https://lumagear.vercel.app?ref=share";

  function copyLink() {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (dismissed) return null;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a0a2e, #0a1230)",
        border: "1px solid rgba(124,58,237,0.4)",
        borderRadius: "14px",
        padding: "20px 24px",
        margin: "0 24px 32px",
        maxWidth: "1232px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          borderRadius: "10px",
          width: "42px",
          height: "42px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Gift size={20} color="#fff" />
      </div>

      <div style={{ flex: 1, minWidth: "200px" }}>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>
          Give 10% Off, Get 10% Off
        </p>
        <p style={{ color: "#8888aa", fontSize: "13px" }}>
          Share your link — your friend gets 10% off, you get 10% off your next order
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        <div
          style={{
            background: "#0f0f1a",
            border: "1px solid #252540",
            borderRadius: "8px",
            padding: "8px 14px",
            color: "#a0a0c0",
            fontSize: "13px",
            fontFamily: "monospace",
            maxWidth: "240px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          lumagear.vercel.app?ref=share
        </div>
        <button
          onClick={copyLink}
          style={{
            background: copied ? "linear-gradient(135deg,#16a34a,#15803d)" : "linear-gradient(135deg,#7c3aed,#5b21b6)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Link</>}
        </button>
      </div>

      <button
        onClick={() => setDismissed(true)}
        style={{ position: "absolute", top: "12px", right: "12px", background: "none", border: "none", color: "#7a7a9a", cursor: "pointer", padding: "4px" }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
