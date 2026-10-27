# Public image sources

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
