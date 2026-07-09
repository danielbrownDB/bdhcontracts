# BDH Contracts Website — Product Requirements Document (PRD)

## 1. Overview

**Product:** Marketing website for BDH Contracts, a construction and contracting company.

**Current state:** A single static page (`bdh.html` + `style.css`) with Home, About, Services, and Contact sections. No responsive design, no gallery, no testimonials, and no working form submission.

**Goal of this project:** Relaunch the site as a polished, responsive MVP that builds credibility and establishes a professional online presence for BDH Contracts. This is not primarily a lead-gen funnel — the priority is showcasing the company's work and making it easy for visitors to verify and trust the business.

## 2. Goals

- Showcase BDH Contracts' portfolio and credibility through real project photos and testimonials.
- Establish a professional, trustworthy online brand presence.
- Provide a simple, working way for visitors to make contact.

**Non-goals for MVP:**
- No CMS / no self-serve content editing — content changes are made directly in code by the developer.
- No blog/news section.
- No dedicated quote/estimate request workflow beyond a standard contact form.

## 3. Target Audience

- **Residential homeowners** seeking renovations, additions, or repair work.
- **Commercial clients** (businesses/property managers) seeking commercial construction services.
- **General contractors/subcontractors** evaluating BDH Contracts as a partner or sub.

## 4. Services to Feature

- Excavation & site preparation (grading, drainage, foundation work) — existing core service.
- General/residential construction (home building, renovations, additions).

(Content/copy for each service to be provided or refined during implementation.)

## 5. Site Structure & Pages

| Page | Purpose |
|---|---|
| **Home** | Hero section with value proposition and CTA, brief intro, highlights of services, featured projects/testimonials, links to other pages. |
| **About** | Company background, experience, values, team (if applicable). |
| **Services** | Detailed breakdown of service offerings (excavation/site prep, general/residential construction). |
| **Gallery / Portfolio** | Photo gallery of completed projects. Should support multiple images and (nice-to-have) filtering/categorization by service type. |
| **Testimonials** | Client testimonials/reviews. May be a standalone section or its own page — placement TBD during design, but content must be featured prominently (e.g., also surfaced on Home). |
| **Contact** | Contact form, phone number, email, business hours, social media links. |

## 6. Functional Requirements

### 6.1 Navigation
- Persistent header navigation linking to all main sections/pages.
- Mobile-friendly navigation (e.g., hamburger menu) since responsive design is a hard requirement.

### 6.2 Project Gallery
- Display multiple project photos.
- Nice-to-have: filter/categorize by service type (excavation vs. construction).

### 6.3 Testimonials
- Display client testimonials as static content (text + client name, no live review-platform integration required for MVP).

### 6.4 Contact Form
- Fields: name, email, message (matching current form as a baseline; may expand as needed).
- **Must actually work** — form submissions need to be delivered (e.g., via email or a form-handling service/API) rather than just rendered client-side with no backend, which is the current gap.
- Display phone number, email, business hours, and social media links alongside the form (footer and/or contact page).

### 6.5 Analytics
- Integrate Google Analytics to track visitor traffic and behavior.

## 7. Non-Functional Requirements

### 7.1 Responsive Design
- The site must be fully responsive across mobile, tablet, and desktop. (The current CSS has no media queries — this is a hard MVP requirement, not optional.)

### 7.2 Branding & Visual Design
- Visual design (logo, imagery, color palette details) to be finalized based on brand assets (logo and photos) to be supplied separately.
- Baseline starting point: retain the existing dark navy (#1e2a38) header/footer with white body background unless superseded by new brand assets.

### 7.3 SEO
- Basic on-page SEO: meta tags (title/description per page), sitemap, and LocalBusiness structured data to support local search visibility.

### 7.4 Accessibility
- Not called out as a hard requirement for MVP; follow general best practices (semantic HTML, alt text, sufficient contrast) where feasible.

## 8. Technical Requirements

- **Framework:** Rebuild using React/Next.js (moving away from the current plain HTML/CSS approach) to support a component-based structure and leave room for CMS integration in a future phase.
- **CMS:** None for MVP — content is managed directly in code/repo.
- **Hosting:** Not yet decided. Vercel or Netlify are natural fits for Next.js and should be evaluated at implementation time.
- **Form handling:** Requires a backend/service integration (e.g., an API route, or a third-party form service) since Next.js enables server-side handling that the current static form lacks.

## 9. Content & Assets Needed From Stakeholder

- Company logo (final version — current site references a missing `logo.jpg`).
- Project photos for the gallery.
- Testimonial text/quotes from clients.
- Finalized service descriptions/copy.
- Business contact details: phone, email, hours, social media links.

## 10. Future Considerations (Out of Scope for MVP)

- Lightweight or full CMS for self-serve content updates.
- Blog/news section.
- Dedicated quote/estimate request form with project scope, budget, and timeline fields.
- Live integration with review platforms (Google/Yelp).
- Recruiting/careers page for hiring.
- Government/municipal bid-focused content.

## 11. Open Questions

- Where should testimonials live — Home page section, dedicated page, or both?
- Final color palette/typography pending brand assets.
- Choice of hosting provider (Vercel vs. Netlify vs. other).
- Choice of form-handling approach (custom API route vs. third-party service).
