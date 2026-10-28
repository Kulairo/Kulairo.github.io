# Public image sources

## Papers and previews

- `public/papers/thin-layer-physics-2025.pdf`: unchanged user-authorized copy of `Rapport_TP_III_no1 (1).pdf`, a 22-page co-authored EPFL laboratory report dated 17 October 2025. Public title and authors were checked against the first page; the description was checked against the introduction, methods and conclusion.
- `public/images/thin-layer-physics-cover.webp`: first page rendered with Poppler and resized to 600 × 848 pixels for a lightweight preview. The PDF itself is not rewritten.

### Numerical physics reports

Six French coursework reports added at the user’s request. Academic display titles and descriptive download filenames replace the exercise labels on the website. PDF contents, internal titles, metadata and layout are untouched; each public copy was verified byte-for-byte against its source (SHA-256). Dates and author names follow each PDF’s first page.

| Public PDF | Private source | Pages |
| --- | --- | --- |
| `dynamique-satellite-terre-lune-2025.pdf` | `RapportExercice1_Ludovic_Brenier__Jeremy_Kull_pdf-1.pdf` | 13 |
| `chaos-aiguille-aimantee-2025.pdf` | `Exercice_2_Ludovic_Brenier_Jeremy_Kull-.pdf` | 13 |
| `dynamique-asteroide-soleil-jupiter-2025.pdf` | `Exercice_3_Ludovic_Brenier_Jeremy_Kull-3.pdf` | 13 |
| `electrostatique-cylindre-dielectrique-2025.pdf` | `Exercice_4_Ludovic_Brenier_Jeremy_Kull-3.pdf` | 14 |
| `propagation-ondes-ocean-profondeur-variable-2025.pdf` | `Exercice_5_Ludovic_brenier_Jeremy_Kull-6.pdf` | 20 |
| `dynamique-quantique-effet-tunnel-2025.pdf` | `Exercice_6_Ludovic_Brenier_Jeremy_KULL-3.pdf` | 13 |

The corresponding `public/images/*-cover.webp` files are complete first-page renders made with Poppler, resized to 600 × 848 pixels. French summaries describe the reports; the collection is identified as coursework.

## User-supplied photographs

- `public/images/jeremy-profile.webp`: selected introduction headshot; cropped from the user’s new profile photograph.
- `public/images/jeremy-lakeside.webp`: converted from `IMG_2201.HEIC` for the About section at the user’s request. macOS ImageIO decoded the source, then Pillow applied its orientation and exported a metadata-free 1200 × 1600 WebP. Full composition and colour retained. The original remains in the ignored source kit.
- `public/images/epfl-spacecraft-team-2025-2026.webp`: user-supplied team photograph, displayed with the full group visible.

## Organization logos

Retrieved 27 October 2026 from official websites. Artwork is used to identify the organizations in Jeremy’s documented education and professional experience; it does not indicate sponsorship. Marks remain the property of their respective owners. Preserve their proportions and artwork when changing layout.

| Local file | Official source | Handling |
| --- | --- | --- |
| `public/logos/epfl.svg` | [EPFL logo](https://www.epfl.ch/about/overview/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg), from the [identity page](https://www.epfl.ch/about/overview/identity/) | Original SVG, unchanged. |
| `public/logos/financiera-independencia.png` | [Financiera Independencia logo](https://home.independencia.com.mx/wp-content/uploads/2023/03/cropped-LOGO-PAGINA-FISA.png), from its [homepage](https://home.independencia.com.mx/) | Original PNG, unchanged. |
| `public/logos/imperial.svg` | Header wordmark from the [Imperial homepage](https://www.imperial.ac.uk/) | Original inline SVG extracted into a standalone file; paths and colours unchanged. |

Only optimized public derivatives and the three logo files are committed. Original photos, temporary conversions and the private CV remain excluded from both Git and the Pages deployment.
