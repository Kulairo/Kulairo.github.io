# Validation — 28 October 2026

## English website copy

Translated all paper collection copy into English: titles, summaries, scope notes, methods, dates, report types, document-language labels, file sizes, buttons and accessible labels. Website language attributes remain English; PDF links separately identify their destination language. All six French PDFs and their first-page previews are unchanged.

Lint and the production build pass. Exported pages and accessible labels were checked for the superseded French copy and non-English language attributes. SHA-256 checks confirm the six PDFs match the previously verified French versions. The full browser suite passes on all five content routes at 320, 375, 768, 1024 and 1440px, with no overflow, browser errors or automated accessibility violations.

## PDF title update

Updated all six French report headings and PDF title metadata to match the academic website titles, and regenerated their cover previews. The original exercise headings (and the old subtitles in reports 1 and 3) were removed, rather than merely covered. Embedded Latin Modern Roman keeps the original LaTeX style. Original PDFs remain in the ignored asset kit.

All 86 pages were compared against their originals at 144 dpi: zero changed pixels outside the first-page title regions, identical body text outside those regions, unchanged page dimensions and preserved link counts. All six PDF metadata titles and extractable heading texts match the website. Poppler independently confirmed zero changed pixels outside the title areas on all six first pages; those page renders were also visually inspected. Evidence and checksums are in ignored `tmp/pdf-titles/`.

## French numerical physics collection

Added six user-supplied coursework reports with French academic display titles, summaries, source dates, author credits and descriptive PDF filenames. At initial publication, the PDFs were byte-identical to the supplied documents (SHA-256 verified); the subsequent title-only revision is documented above. Each entry has a first-page preview and French read/download controls, arranged in a two-column desktop grid and a single column on smaller screens.

Lint, production build and type checking pass. The full browser suite passes at 320, 375, 768, 1024 and 1440px, with no overflow, browser errors or automated accessibility violations. Additional collection checks verified seven total papers, six French entries, successful PDF responses, all six browser downloads and exact downloaded-byte hashes. Desktop and mobile collection screenshots were reviewed. Evidence is in ignored `tmp/papers-review/` and `tmp/qa/`.

## Papers collection

Added the user-provided *Thin layer physics* laboratory report, an expandable content collection and a Papers navigation link. The public PDF is byte-identical to the supplied original (SHA-256 verified); title, authors, date and summary were checked against the document. Only the approved paper was copied from the ignored source kit.

Lint, production build and type checking pass. Browser checks pass on all five content routes at 320, 375, 768, 1024 and 1440px with no overflow or automated accessibility violations. Desktop/mobile paper-section screenshots were reviewed. The Papers anchor, PDF response type, PDF bytes and browser download were verified. The original document is loaded only on demand; the cover preview is approximately 42 KB.

## Current revision: logos, lakeside photograph and personal background

Added locally hosted official EPFL, Financiera Independencia and Imperial logos with explicit education/employment labels. The introduction retains the selected headshot. The About section now displays the user-requested HEIC photograph as a 1200 × 1600 WebP, in full colour with its complete composition preserved, and states that Jeremy is a Swiss national who spent his childhood in Mexico. The original HEIC remains in the private source kit.

Lint, static production build and type checking pass. The existing browser suite passes across all five content routes and viewport widths from 320 to 1440px, with no horizontal overflow, browser errors or automated accessibility violations. All public images decode successfully. Desktop and mobile screenshots of the logos and updated About section were visually reviewed. Asset sources are documented in `ASSETS.md`.

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
