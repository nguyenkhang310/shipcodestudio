# Mobile layout and startup

Updated 2026-11-04.

## Layout

- Phones and tablets up to 800px use the window carousel with horizontal touch gestures, buttons and keyboard controls. Desktop keeps the pinned scroll sequence.
- The mobile hero occupies one screen. It uses native touch scrolling and a lighter 960px video variant, with the poster remaining visible while playback starts.
- Captions reserve the tallest entry's height, so changing project does not push the controls or following sections down.
- TikTok videos scroll within their own container. Repository filters remain scrollable; the complete repository list still opens under Khám phá thêm.
- Contact fields stack below 600px, retain 16px text to avoid iOS focus zoom, and constrain native date inputs to the available width.
- Project dialogs stay inside the viewport; their overlay and close control appear above the sticky header.
- Existing dark/light alternation, prices, source links, founder image colors and news API remain intact.

## Startup assets

The transparent source logo is preserved. The header uses responsive WebP variants in `public/brand/`, preloaded from HTML. Their content-addressed names allow a one-year immutable browser cache on Vercel. The favicon uses the small variant; an additional PNG supplies the iOS home-screen icon.

| Asset | Before | Mobile variant |
| --- | ---: | ---: |
| Header logo | 142.9 KB | 4.8 / 13 KB at typical phone pixel densities |
| SellerPilot hero | 2.72 MB | 1.50 MB |
| Climate Lab hero | 4.73 MB | 2.34 MB |
| R Shiny hero | 2.79 MB | 0.58 MB |

Video variants use H.264, fast-start MP4, no audio, autoplay, inline playback and looping. The desktop footage is unchanged. Non-hero video loading starts closer to the viewport on mobile.

## Verification

Automated Chrome and WebKit checks cover 320×568, 360×740, 390×844, 430×932 and 768×1024, plus landscape and reduced motion. They check root and text overflow, every featured project, stable caption height, the repository drawer, menu and section markers, modal close controls, form fields and the date picker. Chrome also checks a real horizontal touch gesture. These are browser emulations, not a claim of testing physical devices.
