"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import {
  ShoppingCart,
  Star,
  Check,
  Truck,
  Shield,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const productResult = getProductBySlug(slug);

  if (!productResult) notFound();
  const product = productResult;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: "LumaGear" },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://lumagear.vercel.app/products/${product.slug}`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
        deliveryTime: { "@type": "ShippingDeliveryTime", transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 7, unitCode: "DAY" } },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: "5",
    },
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("features");

  const { addItem, openCart } = useCartStore();

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t))))
    .slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  }

  const savings = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
        <Link
          href="/products"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#7a7a9a",
            textDecoration: "none",
            fontSize: "14px",
            transition: "color 0.2s",
          }}
        >
          <ArrowLeft size={15} />
          All Products
        </Link>
        <span style={{ color: "#252540" }}>›</span>
        <span style={{ color: "#a0a0c0", fontSize: "14px" }}>{product.name}</span>
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          marginBottom: "80px",
        }}
      >
        {/* Images */}
        <div>
          <div
            style={{
              background: "#16162a",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "12px",
              aspectRatio: "4/3",
              border: "1px solid #252540",
            }}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {product.images.length > 1 && (
            <div style={{ display: "flex", gap: "10px" }}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: selectedImage === i ? "2px solid #7c3aed" : "2px solid #252540",
                    cursor: "pointer",
                    background: "none",
                    padding: 0,
                    transition: "border-color 0.2s",
                  }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          {product.badge && (
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: "999px",
                marginBottom: "16px",
                letterSpacing: "0.05em",
              }}
            >
              {product.badge}
            </span>
          )}

          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: "1.2",
              marginBottom: "10px",
              letterSpacing: "-0.5px",
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: "#8888aa", fontSize: "17px", marginBottom: "20px" }}>
            {product.tagline}
          </p>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                  color={i < Math.floor(product.rating) ? "#f59e0b" : "#3a3a50"}
                />
              ))}
            </div>
            <span style={{ color: "#f59e0b", fontWeight: 700 }}>{product.rating}</span>
            <span style={{ color: "#7a7a9a", fontSize: "14px" }}>
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: "28px" }}>
            <span style={{ fontSize: "38px", fontWeight: 900, color: "#a855f7" }}>
              ${product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <>
                <span style={{ color: "#7a7a9a", fontSize: "18px", textDecoration: "line-through", marginLeft: "12px" }}>
                  ${product.comparePrice.toFixed(2)}
                </span>
                <span
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Save {savings}%
                </span>
              </>
            )}
          </div>

          <p style={{ color: "#c0c0d8", fontSize: "15px", lineHeight: "1.7", marginBottom: "28px" }}>
            {product.description}
          </p>

          {/* Quantity + Add to Cart */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#16162a",
                border: "1px solid #252540",
                borderRadius: "12px",
                padding: "8px 16px",
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  background: "none",
                  border: "none",
                  color: "#a0a0c0",
                  cursor: "pointer",
                  fontSize: "20px",
                  lineHeight: 1,
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                −
              </button>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px", minWidth: "24px", textAlign: "center" }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#a0a0c0",
                  cursor: "pointer",
                  fontSize: "20px",
                  lineHeight: 1,
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                flex: 1,
                minWidth: "180px",
                background: addedToCart
                  ? "linear-gradient(135deg, #16a34a, #15803d)"
                  : "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.3s",
                boxShadow: addedToCart ? "0 0 30px #16a34a44" : "0 0 30px #7c3aed44",
              }}
            >
              {addedToCart ? (
                <>
                  <Check size={20} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>
          </div>

          {/* Trust signals */}
          <div
            style={{
              background: "#16162a",
              border: "1px solid #252540",
              borderRadius: "12px",
              padding: "16px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            {[
              { Icon: Truck, text: "Free shipping on this order" },
              { Icon: RefreshCw, text: "30-day money-back guarantee" },
              { Icon: Shield, text: "SSL-encrypted checkout" },
              { Icon: Check, text: "12-month warranty included" },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Icon size={14} color="#a855f7" />
                <span style={{ color: "#7a7a9a", fontSize: "12px" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          {[
            {
              id: "features",
              label: "Key Features",
              content: (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                      <Check size={16} color="#a855f7" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#c0c0d8", fontSize: "14px" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              id: "specs",
              label: "Specifications",
              content: (
                <div>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom: "1px solid #252540",
                        gap: "16px",
                      }}
                    >
                      <span style={{ color: "#7a7a9a", fontSize: "14px" }}>{key}</span>
                      <span style={{ color: "#c0c0d8", fontSize: "14px", textAlign: "right" }}>{val}</span>
                    </div>
                  ))}
                </div>
              ),
            },
          ].map(({ id, label, content }) => (
            <div key={id} style={{ borderTop: "1px solid #252540", paddingTop: "16px", marginBottom: "16px" }}>
              <button
                onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "4px 0",
                  marginBottom: "12px",
                }}
              >
                {label}
                {openAccordion === id ? <ChevronUp size={18} color="#7a7a9a" /> : <ChevronDown size={18} color="#7a7a9a" />}
              </button>
              {openAccordion === id && content}
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
              marginBottom: "28px",
            }}
          >
            You May Also Like
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
    </>
  );
}
