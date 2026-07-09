import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";
import VideoLightbox from "@/components/VideoLightbox";
import { projects, videos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Before and after photos and videos of recent BDH Contracts projects — excavation, paving, fencing and tree removal.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>
            The best way to judge a contractor is by the jobs they&apos;ve
            finished. Drag the sliders to compare each project before and
            after.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">Before &amp; After</span>
            <h2>Project Transformations</h2>
          </div>
          <div className="grid grid--3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <BeforeAfter project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">On Site</span>
            <h2>Watch Us Work</h2>
            <p>
              Short clips from recent jobs — the machines, the process, the
              finish. Click any clip to watch it full screen.
            </p>
          </div>
          <VideoLightbox videos={videos} />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Want Results Like These?</h2>
          <p>Send us a photo of your project and we&apos;ll tell you what&apos;s possible.</p>
          <Link href="/contact" className="btn btn--primary">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
