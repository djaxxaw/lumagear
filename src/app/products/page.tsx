"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "reviews") list.sort((a, b) => b.reviewCount - a.reviewCount);

    return list;
  }, [activeCategory, search, sortBy]);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>
      {/* Page header */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ color: "#a855f7", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
          All Products
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px", marginBottom: "12px" }}>
          Creator Gear, Built to Perform
        </h1>
        <p style={{ color: "#7a7a9a", fontSize: "16px" }}>
          {products.length} products · Free shipping · 30-day returns
        </p>
      </div>

      {/* Search + Sort bar */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "28px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "220px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search size={16} color="#7a7a9a" style={{ position: "absolute", left: "14px" }} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "#0f0f1a",
              border: "1px solid #252540",
              borderRadius: "10px",
              padding: "12px 14px 12px 40px",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SlidersHorizontal size={16} color="#7a7a9a" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              background: "#0f0f1a",
              border: "1px solid #252540",
              borderRadius: "10px",
              padding: "12px 16px",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="featured">Featured</option>
            <option value="rating">Top Rated</option>
            <option value="reviews">Most Reviewed</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "36px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: activeCategory === cat.id ? "1px solid #7c3aed" : "1px solid #252540",
              background: activeCategory === cat.id
                ? "linear-gradient(135deg, #7c3aed22, #06b6d422)"
                : "#0f0f1a",
              color: activeCategory === cat.id ? "#a855f7" : "#7a7a9a",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#7a7a9a" }}>
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>No products found</p>
          <p style={{ fontSize: "14px" }}>Try a different search or category</p>
        </div>
      ) : (
        <>
          <p style={{ color: "#7a7a9a", fontSize: "14px", marginBottom: "20px" }}>
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
