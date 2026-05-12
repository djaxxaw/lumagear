import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

async function getCJToken(): Promise<string | null> {
  try {
    const res = await fetch("https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: process.env.CJ_API_EMAIL,
        password: process.env.CJ_API_PASSWORD,
      }),
    });
    const data = await res.json();
    return data?.data?.accessToken ?? null;
  } catch {
    return null;
  }
}

async function createCJOrder(token: string, session: Stripe.Checkout.Session) {
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  const shipping = session.collected_information?.shipping_details;

  const products = lineItems.data.map((item) => ({
    vid: item.price?.product as string,
    quantity: item.quantity ?? 1,
  }));

  const body = {
    orderNumber: session.id,
    shippingZip: shipping?.address?.postal_code ?? "",
    shippingCountryCode: shipping?.address?.country ?? "US",
    shippingCountry: shipping?.address?.country ?? "US",
    shippingProvince: shipping?.address?.state ?? "",
    shippingCity: shipping?.address?.city ?? "",
    shippingAddress: shipping?.address?.line1 ?? "",
    shippingCustomerName: shipping?.name ?? "",
    shippingPhone: "",
    products,
    payType: "CJB",
  };

  const res = await fetch("https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "CJ-Access-Token": token,
    },
    body: JSON.stringify(body),
  });

  return res.json();
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const token = await getCJToken();
      if (token) {
        await createCJOrder(token, session);
      }
    }
  }

  return NextResponse.json({ received: true });
}
