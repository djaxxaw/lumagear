import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription, images: [post.image] },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const htmlContent = post.content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 style="font-size:24px;font-weight:800;color:#fff;margin:40px 0 16px;letter-spacing:-0.5px">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:18px;font-weight:700;color:#e0e0f0;margin:28px 0 12px">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff;font-weight:700">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[→ (.+?)\]\((.+?)\)/g, '<a href="$2" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#7c3aed,#5b21b6);color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin:8px 0">→ $1</a>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:#a855f7;text-decoration:none;font-weight:600">$1</a>')
    .replace(/^- (.+)$/gm, '<li style="color:#c0c0d8;font-size:15px;line-height:1.7;margin-bottom:8px;padding-left:8px">$1</li>')
    .replace(/`(.+?)`/g, '<code style="background:#16162a;border:1px solid #252540;padding:2px 8px;border-radius:4px;font-family:monospace;font-size:13px;color:#a855f7">$1</code>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #252540;margin:40px 0"/>')
    .replace(/\n\n/g, '</p><p style="color:#c0c0d8;font-size:16px;line-height:1.8;margin-bottom:16px">')
    .replace(/^(?!<)(.+)$/gm, '<p style="color:#c0c0d8;font-size:16px;line-height:1.8;margin-bottom:16px">$1</p>');

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
      <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#7a7a9a", textDecoration: "none", fontSize: "14px", marginBottom: "32px" }}>
        <ArrowLeft size={15} /> Back to Blog
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "1fr min(320px, 100%)", gap: "48px", alignItems: "start" }}>
        {/* Article */}
        <article>
          <p style={{ color: "#a855f7", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
            {post.category}
          </p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, color: "#fff", lineHeight: "1.15", marginBottom: "16px", letterSpacing: "-1px" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", color: "#7a7a9a", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Clock size={13} />{post.readTime}</span>
            <span>·</span>
            <span>{post.publishedAt}</span>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "40px", aspectRatio: "16/9" }}>
            <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "100px" }}>
          <div style={{ background: "#0f0f1a", border: "1px solid #252540", borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "16px" }}>Featured Gear</h3>
            <Link
              href="/products/creator-starter-bundle"
              style={{
                display: "block",
                background: "linear-gradient(135deg, #1a0a2e, #0a1a2e)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: "12px",
                padding: "16px",
                textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              <p style={{ color: "#a855f7", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", marginBottom: "6px" }}>Best Value</p>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>Creator Starter Bundle</p>
              <p style={{ color: "#7a7a9a", fontSize: "12px", marginBottom: "10px" }}>Gimbal + Mic + RGB Light</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#a855f7", fontWeight: 800, fontSize: "18px" }}>$169.99</span>
                <span style={{ color: "#7a7a9a", fontSize: "11px", textDecoration: "line-through" }}>$229.97</span>
              </div>
            </Link>
            <Link
              href="/products"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
                color: "#fff",
                borderRadius: "10px",
                padding: "12px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Shop All Gear <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ background: "#0f0f1a", border: "1px solid #252540", borderRadius: "16px", padding: "24px" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "14px" }}>More Articles</h3>
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "14px", paddingBottom: "14px", borderBottom: "1px solid #252540" }}>
                <p style={{ color: "#a855f7", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>{p.category}</p>
                <p style={{ color: "#c0c0d8", fontSize: "13px", fontWeight: 600, lineHeight: "1.3" }}>{p.title}</p>
                <p style={{ color: "#7a7a9a", fontSize: "11px", marginTop: "4px" }}>{p.readTime}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
