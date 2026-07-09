import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BDH Contracts is a trusted contracting company with a reputation for reliable, high-quality groundworks, excavation and property improvement.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About BDH Contracts</h1>
          <p>
            A hands-on contracting company built on reliability, quality
            workmanship and straight talking.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <h2>Who We Are</h2>
              <p>
                BDH Contracts is a contracting company with a reputation for
                excellence and reliability. With years of hands-on experience
                across excavation, site preparation, paving, fencing and tree
                removal, we deliver high-quality projects on time and within
                budget.
              </p>
              <p>
                We work for homeowners, commercial clients and other
                contractors alike. Whatever the job — a garden dig, a new
                driveway, a boundary fence or clearing a site ready for
                construction — you get the same approach: a clear quote, tidy
                work and a finish we&apos;re happy to put our name to.
              </p>
              <ul className="checklist">
                <li>Fully equipped with our own machinery and trailers</li>
                <li>Residential, commercial and subcontract work</li>
                <li>Clear, honest quotes — no surprises</li>
                <li>Site left clean and tidy on every job</li>
              </ul>
            </div>
            <div style={{ borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/hero-excavator.png"
                alt="BDH Contracts operator working a mini excavator on a garden project"
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">How We Work</span>
            <h2>Our Values</h2>
          </div>
          <div className="grid grid--3">
            <div className="card">
              <h3>Reliable</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>
                We turn up when we say we will and finish when we said we
                would. Your project stays on schedule.
              </p>
            </div>
            <div className="card">
              <h3>Professional</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>
                Proper equipment, safe working practices and respect for your
                property from the first visit to the final sweep-up.
              </p>
            </div>
            <div className="card">
              <h3>Experienced</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>
                Years in the trade mean we&apos;ve seen it before — and we know
                the right way to do it, not just the quick way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Let&apos;s Talk About Your Project</h2>
          <p>Get an honest opinion and a clear quote — no obligation.</p>
          <Link href="/contact" className="btn btn--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
