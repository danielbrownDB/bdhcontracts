import Link from "next/link";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import { services, projects, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <Image
            src="/images/hero-excavator.png"
            alt="BDH Contracts mini excavator working on a residential garden"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="container">
          <div className="hero__content">
            <h1>Groundworks &amp; Contracting Done Right</h1>
            <p className="lede">
              From excavation and site preparation to paving, fencing and tree
              removal — BDH Contracts delivers quality work, on time and on
              budget, for homes and businesses alike.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Get in Touch
              </Link>
              <Link href="/gallery" className="btn btn--ghost">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">What We Do</span>
            <h2>Our Services</h2>
            <p>
              One team for the whole job — machinery, materials and experienced
              hands, with the site left clean when we&apos;re done.
            </p>
          </div>
          <div className="grid grid--4">
            {services.map((s) => (
              <div key={s.slug} className="card card--service">
                <div className="card__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>{s.summary}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn btn--primary">
              Explore All Services
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">Proof in the Pictures</span>
            <h2>Recent Transformations</h2>
            <p>Drag the slider on each project to see the before and after.</p>
          </div>
          <div className="grid grid--3">
            {projects.map((p) => (
              <BeforeAfter key={p.title} project={p} />
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/gallery" className="btn btn--primary">
              View the Full Gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">Word of Mouth</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="grid grid--3">
            {testimonials.map((t) => (
              <div key={t.author} className="card testimonial">
                <blockquote>{t.quote}</blockquote>
                <cite>
                  {t.author}
                  <small>{t.location}</small>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Tell us what you need and we&apos;ll get back to you with an honest
            assessment and a straightforward quote.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
