"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm({ prefill = "" }: { prefill?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!prefill) return;
    setMessage(prefill);
    messageRef.current?.focus();
    messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [prefill]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setStatus("ok");
      form.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Your Name
        <input type="text" name="name" required maxLength={100} autoComplete="name" />
      </label>
      <label>
        Your Email
        <input type="email" name="email" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        Phone (optional)
        <input type="tel" name="phone" maxLength={30} autoComplete="tel" />
      </label>
      <label>
        Your Message
        <textarea
          name="message"
          required
          maxLength={4000}
          ref={messageRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      {status === "ok" && (
        <p className="form__status form__status--ok" role="status">
          Thanks — your message has been sent. We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="form__status form__status--error" role="alert">
          {errorMsg}
        </p>
      )}
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
