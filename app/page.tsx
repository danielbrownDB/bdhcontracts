import Link from "next/link";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import CountUp from "@/components/CountUp";
import RotatingWords from "@/components/RotatingWords";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { services, projects, testimonials, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg hero__bg--kenburns">
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
            <h1>
              <RotatingWords
                words={["Excavation", "Groundworks", "Paving", "Fencing", "Tree Removal"]}
              />
              <br />
              Done Right
            </h1>
            <p className="lede">
              From breaking ground to the finishing touches — BDH Contracts
              delivers quality work, on time and on budget, for homes and
              businesses alike.
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

      <section className="stats-band" aria-label="Company statistics">
        <div className="container stats-band__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <span className="kicker">What We Do</span>
              <h2>Our Services</h2>
              <p>
                One team for the whole job — machinery, materials and
                experienced hands, with the site left clean when we&apos;re
                done.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid--4">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 90}>
                <div className="card card--service card--lift">
                  <div className="card__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>{s.summary}</p>
                </div>
              </ScrollReveal>
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
          <ScrollReveal>
            <div className="section-heading">
              <span className="kicker">Proof in the Pictures</span>
              <h2>Recent Transformations</h2>
              <p>Drag the slider on each project to see the before and after.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid--3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <BeforeAfter project={p} />
              </ScrollReveal>
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
          <ScrollReveal>
            <div className="section-heading">
              <span className="kicker">Word of Mouth</span>
              <h2>What Our Clients Say</h2>
            </div>
            <TestimonialCarousel items={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Tell us what you need and we&apos;ll get back to you with an
              honest assessment and a straightforward quote — or try the
              instant estimator.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
