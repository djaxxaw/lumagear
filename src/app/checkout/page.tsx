"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { Shield, Lock, ArrowLeft, Truck, Star } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const cartTotal = total();
  const shipping = cartTotal >= 75 ? 0 : 7.99;
  const tax = cartTotal * 0.08;
  const orderTotal = cartTotal + shipping + tax;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: "600px", margin: "80px auto", padding: "24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "24px", marginBottom: "16px" }}>Your cart is empty</h2>
        <Link href="/products" style={{ color: "#a855f7", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <ArrowLeft size={16} /> Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
        <Link href="/products" style={{ color: "#7a7a9a", display: "flex", gap: "6px", alignItems: "center", textDecoration: "none", fontSize: "14px" }}>
          <ArrowLeft size={15} /> Continue Shopping
        </Link>
        <span style={{ color: "#252540" }}>›</span>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>Secure Checkout</span>
        <Lock size={16} color="#a855f7" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
        {/* Order Summary */}
        <div style={{ background: "#0f0f1a", border: "1px solid #252540", borderRadius: "16px", padding: "24px" }}>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "18px", marginBottom: "20px" }}>Order Summary</h3>

          {items.map((item) => (
            <div key={item.product.id} style={{ display: "flex", gap: "12px", marginBottom: "14px", paddingBottom: "14px", borderBottom: "1px solid #252540" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "8px", overflow: "hidden", flexShrink: 0, background: "#16162a" }}>
                <img src={item.product.images[0]} alt={item.product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, marginBottom: "2px" }}>{item.product.name}</p>
                <p style={{ color: "#7a7a9a", fontSize: "12px" }}>Qty: {item.quantity}</p>
              </div>
              <span style={{ color: "#a855f7", fontWeight: 700, fontSize: "14px" }}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          {[
            ["Subtotal", `$${cartTotal.toFixed(2)}`],
            ["Shipping", shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`],
            ["Tax (est.)", `$${tax.toFixed(2)}`],
          ].map(([label, val]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ color: "#7a7a9a", fontSize: "14px" }}>{label}</span>
              <span style={{ color: val === "FREE" ? "#06b6d4" : "#c0c0d8", fontSize: "14px", fontWeight: val === "FREE" ? 700 : 400 }}>{val}</span>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #252540", paddingTop: "14px", marginTop: "4px" }}>
            <span style={{ color: "#fff", fontWeight: 700 }}>Total</span>
            <span style={{ color: "#a855f7", fontSize: "22px", fontWeight: 900 }}>${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout CTA */}
        <div>
          {/* Security badge */}
          <div style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "12px", padding: "16px", marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
            <Shield size={20} color="#a855f7" />
            <div>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Secure Stripe Checkout</p>
              <p style={{ color: "#7a7a9a", fontSize: "12px" }}>256-bit SSL · PCI DSS compliant · Your data is safe</p>
            </div>
          </div>

          {/* Shipping info */}
          <div style={{ background: "#0f0f1a", border: "1px solid #252540", borderRadius: "12px", padding: "16px", marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
            <Truck size={18} color="#06b6d4" />
            <div>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Free Shipping Included</p>
              <p style={{ color: "#7a7a9a", fontSize: "12px" }}>Estimated delivery: 3–7 business days</p>
            </div>
          </div>

          {/* Trust badges */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
            {["30-Day Returns", "12-Month Warranty", "Secure Payment", "Real Reviews"].map((t) => (
              <div key={t} style={{ background: "#0f0f1a", border: "1px solid #252540", borderRadius: "8px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Star size={13} color="#f59e0b" fill="#f59e0b" />
                <span style={{ color: "#a0a0c0", fontSize: "12px", fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>

          {error && (
            <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px", textAlign: "center" }}>{error}</p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#252540" : "linear-gradient(135deg, #7c3aed, #5b21b6)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "18px",
              fontSize: "17px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: loading ? "none" : "0 0 30px #7c3aed44",
              transition: "all 0.2s",
            }}
          >
            {loading ? (
              <>
                <span style={{ width: "18px", height: "18px", border: "2px solid #ffffff44", borderTop: "2px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
                Redirecting to Stripe...
              </>
            ) : (
              <>
                <Lock size={18} />
                Pay Securely with Stripe · ${orderTotal.toFixed(2)}
              </>
            )}
          </button>

          <p style={{ fontSize: "12px", color: "#7a7a9a", textAlign: "center", marginTop: "14px" }}>
            You&apos;ll be redirected to Stripe&apos;s secure payment page
          </p>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
