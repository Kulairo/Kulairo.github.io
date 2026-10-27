# Jeremy Kull Jaeggli — portfolio

A personal portfolio connecting physics, machine learning and scientific computing. Includes four case studies, original scientific diagrams, a pointer-responsive flow field, an authorised spacecraft-team photograph and Jeremy’s selected profile photograph.

GitHub Pages target: **https://kulairo.github.io**

## Local development

Use Node.js 22 (or a compatible version >=20.9) and npm:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Fonts are self-hosted, with licences in `src/app/fonts/`.

## Build and preview the deployed site

```sh
npm run lint
SITE_URL=https://kulairo.github.io npm run build
npm run typecheck
npm start
```

`next build` generates the complete static site in `out/`. `npm start` serves this export locally, including its 404 page. Pass `-- --port 3001` to choose another port. No application server or external image service is needed in production; the site serves pre-optimised WebP assets.

For an unindexed local preview, omit `SITE_URL`. The app then omits canonicals/sitemap entries and disables indexing. With the verified production origin set, the build emits production metadata, sitemap and indexable robots rules.

## GitHub Pages deployment

The repository is `Kulairo/Kulairo.github.io`. Its root-site URL needs no Next.js base path.

`.github/workflows/deploy.yml` installs the locked dependencies, runs lint, builds the static site, type-checks the generated routes and deploys **only `out/`** using GitHub’s Pages actions. It runs on pushes to `main` and can be run manually. Pages must use **GitHub Actions** as its publishing source. The workflow obtains the production origin from `actions/configure-pages`; it requires no user-managed deployment secret.

To publish future changes, commit and push to `main`. Verify the completed Actions run and check the website after deployment.

## Content and implementation

- `src/content/site.ts`: biography, career direction, profile/team photographs, public contact, experience, education and project narratives. Adding a project generates its case-study route.
- `src/content/jepa.ts`: broad JEPA explanation, separate from proprietary implementation details. Public FINDEP coverage includes historical dataset cleaning/preparation on Google Cloud, model development and Google TPU training, and representation exploration. Financial data cannot be disclosed under NDA.
- `src/app/page.tsx`: homepage, with direct paths to evidence of ML engineering, end-to-end systems work and scientific computing.
- `src/app/work/[slug]/page.tsx`: case-study layout, contribution summaries, technical sections and contact links.
- `src/app/globals.css`: design tokens, editorial layout and responsive styles.
- `src/components/flow-field.tsx`: motion limited to 30fps; pauses off-screen/in background tabs and supports a manual pause control and reduced motion. A static SVG remains without JavaScript.
- `src/components/project-visual.tsx`: original illustrative SVGs. The pendulum uses RK4 integration with synthetic parameters and is not an experimental finding.
- `src/app/og.png/route.tsx`: social preview generated as a static PNG at build time.

## Profile and photo handling

`public/images/jeremy-profile.webp` is the **only profile image**. It is a crop of the newly selected photograph, removing the phone interface and surrounding black space without generating or changing facial features. Both profile placements use this file. The earlier profile portrait has been removed from public assets and is not included in the repository or deployment. Replace `site.portrait` when changing the profile image; update its alt text and dimensions together.

`public/images/epfl-spacecraft-team-2025-2026.webp` is the user-authorised team photograph. It is shown with its full group and aspect ratio preserved. Its configuration is in `site.teamPhoto`.

The private source kit, CV, original/reference photographs, local `.env` files, temporary files and build/dependency directories are excluded from Git. Never publish the whole working directory using a generic file server. Only `out/` is the website deployment artifact.

There is no analytics, tracking, third-party font request, form backend or database. Contact links open the visitor’s mail application; the copy button reports clipboard success/failure. No phone number, exact address or unreviewed résumé is published.

## Verification

With a local preview running:

```sh
PREVIEW_URL=http://127.0.0.1:3000 npm run verify
```

The suite uses a clean headless Google Chrome profile. It checks all content routes at 320, 375, 768, 1024 and 1440px, overflow, anchors, accessibility, mobile navigation, keyboard skip links, expandable experience, copy email, motion controls, a 404 route and case-study navigation without JavaScript. Reports/screenshots go to ignored `tmp/qa/`. Automated accessibility checks supplement visual review; they are not a comprehensive certification.

## Optional future additions

- Add only verified GitHub/LinkedIn profile links.
- Create and explicitly review a separately redacted public résumé before setting `site.resume`; never use the private source CV.
- Add papers, measurements or further architecture details only when they are verified and authorised for publication. Keep professional outputs distinct from academic work and current interests.

The MSc remains in progress (2026–2027). FINDEP is described as experimental representation learning, spacecraft work as collaborative engineering, and academic chaos work as coursework.
