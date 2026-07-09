"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import QuoteEstimator from "@/components/QuoteEstimator";

/** Couples the estimator to the form so "Send this with my enquiry" prefills the message. */
export default function ContactSection() {
  const [prefill, setPrefill] = useState("");

  return (
    <>
      <QuoteEstimator onUseEstimate={setPrefill} />
      <h2 style={{ marginTop: "2.5rem" }}>Send a Message</h2>
      <ContactForm prefill={prefill} />
    </>
  );
}
