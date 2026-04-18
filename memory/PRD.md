# DADA PRINT ART — Website PRD

## Original Problem Statement
Create a stunning website for DADA PRINT ART, a label manufacturer in Mohali. The company produces high-quality roll form sticker labels for pharmaceuticals, FMCG, cosmetics, food & beverages and pesticides. Site must live at www.dadaprintart.com with all working pages.

**Contact:** 768, JLPL Industrial Park, Sector 82, Mohali · +91 79866 58415 · indianprinter@gmail.com

## User Personas
- **Brand Manager / Packaging Head** — evaluating new label suppliers for volume and finish variety.
- **Procurement Buyer** — needs quick quote, capacity confirmation, contact info.
- **Industry Partner (Pharma/FMCG/Cosmetics/F&B/Pesticides)** — wants reassurance on compliance and quality.

## Architecture
- **Frontend:** React 19 + React Router + Tailwind + Shadcn UI + framer-motion + sonner
- **Backend:** FastAPI + Motor (MongoDB async) on port 8001, `/api` prefix
- **DB:** MongoDB — collections: `contacts`, `quotes`
- **Email approach:** mailto/tel links (Option C). Form submissions also stored in MongoDB.

## Core Requirements (Static)
1. Six pages: Home, About, Services, Industries, Gallery, Contact
2. Modern & vibrant design (Swiss + CMYK accents on black/white)
3. Contact form + Quote/Inquiry form
4. Image gallery for label samples
5. Mobile responsive navigation
6. Direct contact (phone, email, address)

## Implemented (2026-02)
- [x] FastAPI backend with `POST/GET /api/contact` and `POST/GET /api/quote`
- [x] Pydantic validation (EmailStr, required fields) → 422 on bad payloads
- [x] MongoDB persistence with ISO datetime serialization and `_id` exclusion
- [x] Home page: hero, marquee, stats, services, industries, why-us, big CTA
- [x] About page: story, infrastructure showcase, quality assurance
- [x] Services page: 6 service cards + detailed capabilities list + technology
- [x] Industries page: 6 industries with alternating split layouts
- [x] Gallery page: bento masonry grid with category filters
- [x] Contact page: tabbed quote + enquiry forms, info cards, Google Maps embed
- [x] Sticky glassmorphic navbar with mobile menu
- [x] Dark footer with big wordmark and CTA
- [x] Outfit + Manrope fonts, CMYK brand accents (cyan/magenta/yellow)
- [x] framer-motion scroll reveals and staggered animations
- [x] Toast notifications (sonner) for form submissions
- [x] data-testid on all interactive elements
- [x] End-to-end tested: 100% backend (13/13) + 100% frontend (12/12)

## Prioritized Backlog
### P1 (next iteration)
- Real email notifications to indianprinter@gmail.com via Resend/SendGrid (requires API key)
- Admin dashboard to view contact/quote submissions
- Upload-artwork field on quote form (object storage)
- Real label-sample photos from the factory (replace stock images)

### P2
- Blog / News section
- Client logos marquee
- Case studies
- WhatsApp floating button
- Multi-language (Hindi) support
- SEO meta tags per page + sitemap.xml + robots.txt
- Google Analytics integration
