# Validation — 27 October 2026

## GitHub Pages export and new profile photo

The current user-selected profile photo replaces all earlier profile images in both profile placements. Only the new profile WebP and the authorised spacecraft-team WebP are included in public assets. The source kit, private CV, original photos and retired portraits are excluded from Git and the static export.

The static export builds for `https://kulairo.github.io` with an indexable robots file, production sitemap/canonicals and a static PNG social preview. Type check and lint pass. All five content pages pass browser checks at 320, 375, 768, 1024 and 1440px; automated accessibility checks report no violations. The preview serves the exact `out/` files deployed by GitHub Actions.

## Current revision: team photograph and deeper JEPA case study

Added the user-authorised EPFL Spacecraft Team photograph to the homepage and spacecraft case study, preserving the full image aspect ratio. Added employer-oriented project entry points, concise contribution/outcome summaries, direct case-study contact links, and a deeper JEPA explanation with a responsive two-branch schematic and representation-reading guide.

Type checking, lint and production build pass. The existing browser suite passes on all five content routes at 320, 375, 768, 1024 and 1440px with no horizontal overflow or browser errors. Automated WCAG 2 A/AA and 2.1 A/AA checks found no violations. Additional desktop/mobile checks verified the technical section, image loading and uncropped team-photo proportions. Desktop/mobile screenshots of the new sections were visually inspected.

Jeremy confirmed that public coverage should remain broad: large historical dataset cleaning and preparation on Google Cloud infrastructure, model development and training on Google TPUs, and a small NDA asterisk for the financial data. Exact architecture, loss and empirical findings are intentionally omitted. The current technical explanation explicitly distinguishes a general JEPA mechanism and published I-JEPA background from confirmed FINDEP project contributions. No performance or downstream outcome was invented. Employer engagement has not been measured.

The Lighthouse figures below belong to the initial version, not this content revision.

## Initial version baseline

The final source passes `npm run typecheck`, `npm run lint` (zero warnings) and `npm run build`. Next.js statically generates the homepage, four case studies, 404 page, icon, social image, robots rules and sitemap.

Playwright with a clean Google Chrome profile checked the homepage and all four case studies at 320, 375, 768, 1024 and 1440px. All routes returned 200 with no horizontal overflow. An unknown case-study route returned 404. No browser page errors were recorded.

Automated axe checks reported zero WCAG 2 A/AA and WCAG 2.1 A/AA violations on the homepage at mobile and desktop sizes and on each case study at desktop size. These checks are not a comprehensive accessibility certification.

Verified interactions: mobile navigation opens/closes and reaches its section; keyboard skip link reaches main content; earlier experience expands; email copy writes the correct address and announces success; flow animation can be paused/resumed, stops off-screen and becomes a static SVG with reduced motion. Case-study navigation works with JavaScript disabled. A no-JavaScript fallback also exposes mobile navigation.

Desktop/mobile screenshots were visually inspected. The portrait, editorial typography, all diagrams and case-study layouts were reviewed. A final targeted check confirmed that the phase-space diagram and its illustration labels remain fully visible at every tested width. Lazy-loaded images were decoded before capturing final full-page screenshots.

The final isolated mobile Lighthouse audit on the local production server scored:

| Category | Score |
| --- | ---: |
| Performance | 84 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 66 |

LCP was 3.4s, total blocking time 320ms and cumulative layout shift 0 under Lighthouse's simulated mobile throttling. Performance varied between local runs; these are lab measurements, not deployed field data. The SEO score reflects intentionally disabled indexing while `SITE_URL` is unset. Configure the verified production origin and rebuild to enable canonical URLs, sitemap entries and indexing, then audit the deployed site.

The generated icon, social preview, robots and sitemap endpoints returned 200. The social preview was visually inspected. Only the approved-source portrait derivative exists in `public/`; the private CV and reference selfies remain outside public/build imports and are excluded from Git/Vercel uploads.

Raw reports and screenshots are in ignored `tmp/qa/`. The final source has not been deployed. Real-domain metadata, real email delivery and real-device/Safari/Firefox testing remain outside this local verification.
