# BDH Contracts Website

Marketing website for BDH Contracts — groundworks, excavation, site preparation, paving, fencing and tree removal.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript). See [requirements.md](requirements.md) for the full PRD.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Editing content

All contact details, services, projects, videos and testimonials live in **`lib/site.ts`** — edit that one file to update content across the site. Items marked `TODO` are placeholders awaiting real business details.

Images and videos live in `public/images/` and `public/videos/`.

## Configuration (environment variables)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for SEO/sitemap). |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (e.g. `G-XXXXXXX`). Analytics loads only when set. |
| `RESEND_API_KEY` | Enables contact-form delivery by email via [Resend](https://resend.com). |
| `CONTACT_TO_EMAIL` | Where contact-form enquiries are sent (defaults to the site email). |
| `CONTACT_FROM_EMAIL` | From address for enquiry emails. |
| `CONTACT_WEBHOOK_URL` | Alternative to Resend: POST enquiries as JSON to any webhook. |

Without `RESEND_API_KEY` or `CONTACT_WEBHOOK_URL`, the contact form tells visitors to phone/email instead (enquiries are never silently dropped).

## Deployment

Standard Next.js app — deploys as-is to Vercel or Netlify. Set the environment variables above in the hosting dashboard.
