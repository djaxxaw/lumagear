"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{ color: "#a855f7", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
          Creator Resources
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px", marginBottom: "14px" }}>
          The Creator Blog
        </h1>
        <p style={{ color: "#7a7a9a", fontSize: "17px", maxWidth: "500px", margin: "0 auto" }}>
          Gear reviews, TikTok growth tactics, and everything you need to level up your content.
        </p>
      </div>

      {/* Featured post */}
      <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}>
        <div
          style={{
            background: "#0f0f1a",
            border: "1px solid #252540",
            borderRadius: "20px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#252540")}
        >
          <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#16162a" }}>
            <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "36px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a855f7", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>
                FEATURED
              </span>
              <span style={{ color: "#7a7a9a", fontSize: "12px" }}>{featured.category}</span>
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, lineHeight: "1.2", marginBottom: "14px", letterSpacing: "-0.5px" }}>
              {featured.title}
            </h2>
            <p style={{ color: "#7a7a9a", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              {featured.excerpt}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#7a7a9a", fontSize: "13px" }}>
                <Clock size={13} />
                {featured.readTime} · {featured.publishedAt}
              </div>
              <span style={{ color: "#a855f7", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Rest of posts */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "#0f0f1a",
                border: "1px solid #252540",
                borderRadius: "16px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#252540";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#16162a" }}>
                <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ color: "#a855f7", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                  {post.category}
                </p>
                <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 700, lineHeight: "1.3", marginBottom: "10px" }}>
                  {post.title}
                </h3>
                <p style={{ color: "#7a7a9a", fontSize: "13px", lineHeight: "1.5", marginBottom: "16px", flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#7a7a9a", fontSize: "12px" }}>
                  <Clock size={12} />
                  {post.readTime} · {post.publishedAt}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
