import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact form endpoint. Delivery is pluggable via environment variables:
 *
 * - RESEND_API_KEY: sends the enquiry by email via Resend (https://resend.com)
 *   to CONTACT_TO_EMAIL (falls back to the site email).
 * - CONTACT_WEBHOOK_URL: POSTs the enquiry as JSON to any webhook
 *   (Zapier, Make, Slack incoming webhook, etc).
 *
 * With neither configured, the enquiry is logged server-side and the endpoint
 * reports failure so visitors aren't left believing a message was delivered.
 */

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 100);
  const email = (body.email ?? "").trim().slice(0, 200);
  const phone = (body.phone ?? "").trim().slice(0, 30);
  const message = (body.message ?? "").trim().slice(0, 4000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const enquiry = { name, email, phone, message, receivedAt: new Date().toISOString() };

  const resendKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  try {
    if (resendKey) {
      const to = process.env.CONTACT_TO_EMAIL ?? site.email;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? `website@${new URL(site.url).hostname}`,
          to: [to],
          reply_to: email,
          subject: `Website enquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
        }),
      });
      if (!res.ok) {
        console.error("Resend delivery failed:", res.status, await res.text());
        throw new Error("delivery failed");
      }
      return NextResponse.json({ ok: true });
    }

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!res.ok) {
        console.error("Webhook delivery failed:", res.status);
        throw new Error("delivery failed");
      }
      return NextResponse.json({ ok: true });
    }

    // No delivery channel configured — log it so nothing is silently lost,
    // but tell the visitor to use phone/email instead of pretending success.
    console.warn("Contact enquiry received but no delivery configured:", enquiry);
    return NextResponse.json(
      {
        error: `Our contact form isn't available right now — please email ${site.email} or call ${site.phoneDisplay}.`,
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      {
        error: `We couldn't send your message just now — please email ${site.email} or call ${site.phoneDisplay}.`,
      },
      { status: 502 }
    );
  }
}
