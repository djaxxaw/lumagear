"use client";

import { useCartStore } from "@/lib/store";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 200,
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(420px, 100vw)",
          background: "#0f0f1a",
          borderLeft: "1px solid #252540",
          zIndex: 201,
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #252540",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={20} color="#a855f7" />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={closeCart}
            style={{
              background: "#16162a",
              border: "1px solid #252540",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#7a7a9a",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "#7a7a9a",
              }}
            >
              <ShoppingBag size={48} style={{ margin: "0 auto 16px", opacity: 0.3 }} />
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>Your cart is empty</p>
              <p style={{ fontSize: "14px", marginBottom: "24px" }}>Add some gear to get started</p>
              <button
                onClick={closeCart}
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    display: "flex",
                    gap: "14px",
                    background: "#16162a",
                    borderRadius: "12px",
                    padding: "14px",
                    border: "1px solid #252540",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                      background: "#1a1a2e",
                    }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "14px",
                        marginBottom: "4px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.product.name}
                    </p>
                    <p style={{ color: "#a855f7", fontWeight: 700, fontSize: "16px", marginBottom: "10px" }}>
                      ${item.product.price.toFixed(2)}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      {/* Qty controls */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "#0f0f1a",
                          borderRadius: "8px",
                          padding: "4px",
                          border: "1px solid #252540",
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#a0a0c0",
                            cursor: "pointer",
                            width: "24px",
                            height: "24px",
                            fontSize: "18px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          −
                        </button>
                        <span style={{ color: "#fff", fontWeight: 600, fontSize: "14px", minWidth: "20px", textAlign: "center" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#a0a0c0",
                            cursor: "pointer",
                            width: "24px",
                            height: "24px",
                            fontSize: "18px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ff4444",
                          cursor: "pointer",
                          padding: "4px",
                        }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              borderTop: "1px solid #252540",
              padding: "20px 24px",
              background: "#0a0a12",
            }}
          >
            {/* Free shipping progress */}
            <div style={{ marginBottom: "16px" }}>
              {cartTotal < 75 ? (
                <p style={{ fontSize: "13px", color: "#7a7a9a", textAlign: "center" }}>
                  Add <strong style={{ color: "#a855f7" }}>${(75 - cartTotal).toFixed(2)}</strong> more for free shipping
                </p>
              ) : (
                <p style={{ fontSize: "13px", color: "#06b6d4", textAlign: "center", fontWeight: 600 }}>
                  ✓ You qualify for free shipping!
                </p>
              )}
              <div
                style={{
                  height: "4px",
                  background: "#252540",
                  borderRadius: "2px",
                  marginTop: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min((cartTotal / 75) * 100, 100)}%`,
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                    borderRadius: "2px",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#7a7a9a", fontSize: "15px" }}>Subtotal</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                borderRadius: "12px",
                padding: "16px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Checkout
              <ArrowRight size={18} />
            </Link>

            <p style={{ fontSize: "12px", color: "#7a7a9a", textAlign: "center", marginTop: "12px" }}>
              🔒 Secure checkout · 30-day returns · SSL encrypted
            </p>
          </div>
        )}
      </div>
    </>
  );
}
