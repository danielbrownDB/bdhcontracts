import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BDH Contracts for a free, no-obligation quote on excavation, site preparation, paving, fencing or tree removal.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Tell us about your project and we&apos;ll come back to you with a
            clear, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Send a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2>Contact Details</h2>
            <ul className="info-list">
              <li>
                <strong>Phone</strong>
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <strong>Follow Us</strong>
                {site.socials.map((s, i) => (
                  <span key={s.label}>
                    {i > 0 && " · "}
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </span>
                ))}
              </li>
            </ul>
            <h3 style={{ marginTop: "2rem" }}>Business Hours</h3>
            <table className="hours-table">
              <tbody>
                {site.hours.map((h) => (
                  <tr key={h.days}>
                    <td>{h.days}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
