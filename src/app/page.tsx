import Link from "next/link";
import { ArrowRight, Shield, Truck, RefreshCw, Headphones, Star, Zap, Users } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#08080f",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #7c3aed22 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #06b6d422 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#a855f7",
              marginBottom: "32px",
              letterSpacing: "0.03em",
            }}
          >
            <Zap size={14} fill="#a855f7" />
            Trusted by 50,000+ Creators Worldwide
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 88px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            Create Content
            <br />
            <span className="gradient-text">That Goes Viral.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#8888aa",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: "1.6",
            }}
          >
            Professional AI gimbals, wireless mics, and studio lighting — built for
            creators who are serious about their content.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                borderRadius: "14px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 40px #7c3aed44",
              }}
            >
              Shop All Gear
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products?category=bundles"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: "14px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View Bundles — Save 26%
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginTop: "64px",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "50K+", label: "Happy Creators" },
              { val: "4.8★", label: "Average Rating" },
              { val: "96%", label: "5-Star Reviews" },
              { val: "30-Day", label: "Free Returns" },
            ].map(({ val, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="gradient-text" style={{ fontSize: "28px", fontWeight: 800, marginBottom: "4px" }}>
                  {val}
                </div>
                <div style={{ color: "#7a7a9a", fontSize: "13px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section
        style={{
          background: "#0f0f1a",
          borderTop: "1px solid #252540",
          borderBottom: "1px solid #252540",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            { Icon: Truck, text: "Free Shipping" },
            { Icon: Shield, text: "SSL Secure Checkout" },
            { Icon: RefreshCw, text: "30-Day Returns" },
            { Icon: Headphones, text: "24/7 Support" },
          ].map(({ Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon size={20} color="#a855f7" />
              <span style={{ color: "#a0a0c0", fontSize: "14px", fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#a855f7", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Fan Favorites
          </p>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
            Best Selling Gear
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#a855f7",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              border: "1px solid rgba(168,85,247,0.3)",
              borderRadius: "10px",
              padding: "12px 24px",
            }}
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WHY LUMAGEAR ── */}
      <section style={{ background: "#0f0f1a", borderTop: "1px solid #252540", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
              Why 50,000 Creators Choose <span className="gradient-text">LumaGear</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { icon: "⚡", title: "AI-Powered Gear", desc: "Every product engineered with the latest AI and automation features — so the tech works for you." },
              { icon: "📦", title: "Ships in 3–7 Days", desc: "US warehouse fulfillment. Track your order live from purchase to your doorstep." },
              { icon: "🏆", title: "Creator-Tested", desc: "Reviewed by real creators with millions of followers before we ever stock a single unit." },
              { icon: "💸", title: "Unbeatable Value", desc: "Pro-grade quality at 40–60% less than retail brands. We cut out the middlemen." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="gradient-border card-hover"
                style={{ background: "#16162a", borderRadius: "16px", padding: "28px" }}
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{title}</h3>
                <p style={{ color: "#7a7a9a", fontSize: "14px", lineHeight: "1.6" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP RATED ── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#06b6d4", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Top Rated
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
            Our Highest-Rated Products
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {topRated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: "#0f0f1a", borderTop: "1px solid #252540", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
              What Creators Are Saying
            </h2>
            <p style={{ color: "#7a7a9a", marginTop: "12px", fontSize: "16px" }}>
              Join 50,000+ creators who&apos;ve leveled up with LumaGear
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { name: "Marcus T.", handle: "@marcusmakes", rating: 5, text: "The AI gimbal is UNREAL. My Reels engagement went up 3x after I started using it. Auto-tracking never loses me even when I'm moving fast.", product: "AI Tracking Gimbal Pro" },
              { name: "Jade R.", handle: "@jadecreatescontent", rating: 5, text: "Ordered the bundle on Monday, had it Thursday. The wireless mic quality is insane for the price — my audience keeps asking what I upgraded.", product: "Creator Starter Bundle" },
              { name: "Devon K.", handle: "@devonfilms", rating: 5, text: "I've spent way more on ring lights that didn't fold. This one fits in my gym bag and puts out pro-level light. Game changer for on-location shoots.", product: "Foldable Ring Light 18\"" },
            ].map(({ name, handle, rating, text, product }) => (
              <div key={name} style={{ background: "#16162a", border: "1px solid #252540", borderRadius: "16px", padding: "24px" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ color: "#d0d0e8", fontSize: "15px", lineHeight: "1.6", marginBottom: "18px" }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>{name}</p>
                  <p style={{ color: "#a855f7", fontSize: "12px" }}>{handle}</p>
                  <p style={{ color: "#7a7a9a", fontSize: "12px", marginTop: "4px" }}>Verified purchase · {product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #1a0a2e, #0a1a2e)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "24px",
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 0 80px #7c3aed22",
          }}
        >
          <Users size={48} color="#a855f7" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px", letterSpacing: "-1px" }}>
            Ready to Create Your Best Content?
          </h2>
          <p style={{ color: "#8888aa", fontSize: "17px", marginBottom: "36px", lineHeight: "1.6" }}>
            Join 50,000+ creators using LumaGear. Free shipping on every order, 30-day returns, no questions asked.
          </p>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              color: "#fff",
              borderRadius: "14px",
              padding: "18px 40px",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 40px #7c3aed55",
            }}
          >
            Shop Now — Free Shipping
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
