import Link from "next/link";
import { Check, ArrowRight, Truck, Mail } from "lucide-react";

export default function SuccessPage() {
  const orderNumber = `LG-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "80px auto",
        padding: "24px",
        textAlign: "center",
      }}
    >
      {/* Success icon */}
      <div
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #16a34a, #15803d)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: "0 0 50px #16a34a44",
        }}
      >
        <Check size={40} color="#fff" strokeWidth={3} />
      </div>

      <h1 style={{ color: "#fff", fontSize: "32px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
        Order Confirmed! 🎉
      </h1>
      <p style={{ color: "#7a7a9a", fontSize: "17px", lineHeight: "1.6", marginBottom: "32px" }}>
        Thank you for your order. We&apos;re processing it now and you&apos;ll receive a confirmation email shortly.
      </p>

      <div
        style={{
          background: "#0f0f1a",
          border: "1px solid #252540",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
          <span style={{ color: "#7a7a9a", fontSize: "14px" }}>Order Number</span>
          <span style={{ color: "#a855f7", fontWeight: 700, fontSize: "14px", fontFamily: "monospace" }}>{orderNumber}</span>
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail size={16} color="#a855f7" />
            <span style={{ color: "#a0a0c0", fontSize: "13px" }}>Confirmation email sent</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Truck size={16} color="#06b6d4" />
            <span style={{ color: "#a0a0c0", fontSize: "13px" }}>Ships in 1–2 business days</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 28px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Continue Shopping
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#0f0f1a",
            border: "1px solid #252540",
            color: "#a0a0c0",
            borderRadius: "12px",
            padding: "14px 28px",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
