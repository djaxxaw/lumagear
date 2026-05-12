"use client";

import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("lg_email_popup");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem("lg_email_popup", "1");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    localStorage.setItem("lg_email_popup", "1");
    setTimeout(() => setVisible(false), 3000);
  }

  if (!visible) return null;

  return (
    <>
      <div
        onClick={dismiss}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", zIndex: 400 }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 401,
          width: "min(480px, 92vw)",
          background: "#0f0f1a",
          border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 60px #7c3aed22",
        }}
      >
        <button
          onClick={dismiss}
          style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", color: "#7a7a9a", cursor: "pointer" }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
            <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>You&apos;re in!</h3>
            <p style={{ color: "#7a7a9a", fontSize: "15px" }}>Check your email for your 10% off code.</p>
          </div>
        ) : (
          <>
            <div
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                borderRadius: "12px",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Zap size={28} color="#fff" fill="#fff" />
            </div>

            <p style={{ color: "#a855f7", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
              Limited Time Offer
            </p>
            <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 900, marginBottom: "10px", letterSpacing: "-0.5px" }}>
              Get 10% Off Your First Order
            </h2>
            <p style={{ color: "#7a7a9a", fontSize: "15px", marginBottom: "28px", lineHeight: "1.5" }}>
              Join 12,000+ creators. Get exclusive deals, creator tips, and early access to new gear.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: "#16162a",
                  border: "1px solid #252540",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: "15px",
                  outline: "none",
                  textAlign: "center",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 0 30px #7c3aed44",
                }}
              >
                Claim My 10% Off →
              </button>
            </form>

            <p style={{ color: "#555570", fontSize: "12px", marginTop: "14px" }}>
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </>
  );
}
