import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Excavation, site preparation, paving, fencing and tree removal for residential and commercial clients — all delivered by BDH Contracts.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            From breaking ground to the finishing touches — one experienced
            team with the right machinery for the job.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {services.map((s) => (
              <div key={s.slug} id={s.slug} className="card card--service" style={{ scrollMarginTop: "90px" }}>
                <div className="card__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p style={{ color: "var(--text-muted)" }}>{s.summary}</p>
                <ul>
                  {s.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Not Sure Which Service You Need?</h2>
          <p style={{ maxWidth: 560, margin: "0 auto 1.75rem", color: "var(--text-muted)" }}>
            Describe the job and we&apos;ll tell you exactly what&apos;s
            involved, what it costs and how long it takes.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Ask Us Anything
          </Link>
        </div>
      </section>
    </>
  );
}
