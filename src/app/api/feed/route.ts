import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export async function GET() {
  const base = "https://lumagear.vercel.app";

  const items = products
    .map(
      (p) => `
    <item>
      <g:id>${p.id}</g:id>
      <title>${p.name}</title>
      <description>${p.description.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</description>
      <link>${base}/products/${p.slug}</link>
      <g:image_link>${p.images[0]}</g:image_link>
      ${p.images[1] ? `<g:additional_image_link>${p.images[1]}</g:additional_image_link>` : ""}
      <g:price>${p.price.toFixed(2)} USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>LumaGear</g:brand>
      <g:google_product_category>5047</g:google_product_category>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Standard</g:service>
        <g:price>0.00 USD</g:price>
      </g:shipping>
      <g:product_type>${p.category}</g:product_type>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>LumaGear</title>
    <link>${base}</link>
    <description>Professional creator gear — AI gimbals, wireless mics, lighting</description>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
