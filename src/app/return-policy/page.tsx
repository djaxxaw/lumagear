export default function ReturnPolicyPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 24px", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-1px" }}>Return Policy</h1>
      <p style={{ color: "#7a7a9a", marginBottom: "48px" }}>Last updated: May 2026</p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>30-Day Money-Back Guarantee</h2>
        <p style={{ color: "#c0c0d0", lineHeight: 1.7 }}>
          We offer a full 30-day return window from the date of delivery. If you are not completely satisfied with your purchase for any reason, you may return it for a full refund — no questions asked.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>What We Accept</h2>
        <ul style={{ color: "#c0c0d0", lineHeight: 2, paddingLeft: "20px" }}>
          <li>Defective or damaged products</li>
          <li>Products that do not match their description</li>
          <li>Unopened products in original packaging</li>
          <li>Products you simply changed your mind about</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>How to Return</h2>
        <ol style={{ color: "#c0c0d0", lineHeight: 2, paddingLeft: "20px" }}>
          <li>Email us at support@lumagear.com with your order number and reason for return</li>
          <li>We will send you a prepaid return shipping label within 1 business day</li>
          <li>Pack the item securely and drop it off at any shipping location</li>
          <li>Your refund will be processed within 3–5 business days of us receiving the item</li>
        </ol>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>Refunds</h2>
        <p style={{ color: "#c0c0d0", lineHeight: 1.7 }}>
          Refunds are issued to the original payment method. Processing time is 3–5 business days after we receive the returned item. You will receive an email confirmation when your refund has been issued.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>Exchanges</h2>
        <p style={{ color: "#c0c0d0", lineHeight: 1.7 }}>
          We accept exchanges for the same item or a different item of equal or lesser value. Contact us at support@lumagear.com to arrange an exchange.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#a855f7", marginBottom: "12px" }}>Contact Us</h2>
        <p style={{ color: "#c0c0d0", lineHeight: 1.7 }}>
          Questions about a return? Email us at <span style={{ color: "#a855f7" }}>support@lumagear.com</span> — we respond within 24 hours.
        </p>
      </section>
    </div>
  );
}
