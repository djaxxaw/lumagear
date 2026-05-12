"use client";

import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/lib/store";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  const savings = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);

  return (
    <div
      className="card-hover"
      style={{
        background: "#0f0f1a",
        border: "1px solid #252540",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            background: "#16162a",
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          {/* Badge */}
          {product.badge && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: "999px",
                letterSpacing: "0.05em",
              }}
            >
              {product.badge}
            </span>
          )}

          {/* Savings */}
          {savings > 0 && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "#ef4444",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 700,
                padding: "4px 8px",
                borderRadius: "6px",
              }}
            >
              -{savings}%
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "18px", flex: 1, display: "flex", flexDirection: "column" }}>
        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <p style={{ color: "#7a7a9a", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
            {product.category}
          </p>
          <h3
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "6px",
              lineHeight: "1.3",
            }}
          >
            {product.name}
          </h3>
          <p style={{ color: "#7a7a9a", fontSize: "13px", marginBottom: "12px", lineHeight: "1.5" }}>
            {product.tagline}
          </p>
        </Link>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                color={i < Math.floor(product.rating) ? "#f59e0b" : "#3a3a50"}
              />
            ))}
          </div>
          <span style={{ color: "#7a7a9a", fontSize: "12px" }}>
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <div>
            <span style={{ color: "#a855f7", fontWeight: 800, fontSize: "20px" }}>
              ${product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span
                style={{
                  color: "#7a7a9a",
                  fontSize: "13px",
                  textDecoration: "line-through",
                  marginLeft: "8px",
                }}
              >
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product)}
            style={{
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ShoppingCart size={15} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
