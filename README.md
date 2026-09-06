# BY ALAMIR

Personal archive and portfolio for **Alamir Jihad St.Michael**.

Live site: https://byalamir.github.io

## Purpose

BY ALAMIR is a permanent home for work across writing, research, music, design, cultural analysis, and creative development.

The site is intentionally built as an archive rather than a marketing funnel. The visual identity can be expressive, but the writing should stay restrained, editorial, and descriptive rather than promotional.

**Mission statement:**

> NO ALGORITHM OWNS YOUR CREATIVITY.

## Current design direction

- Dark green / black editorial archive
- Formal minimalism
- Large typography
- Multidisciplinary hero artwork connecting music, fashion, and research
- CSS-generated geometric hero retained as a fallback
- Black-bar / redaction motif
- Bone / cream contrast sections
- Responsive desktop and mobile layouts
- Compact mobile menu exposing the complete site navigation
- Dedicated horizontal Writing archive page with platform-specific publication destinations
- Chronological Writing metadata with publication dates, restrained topic tags, archive count, and current-work emphasis
- Dedicated Projects registry with status-led horizontal project entries and real external destinations only
- Dedicated ELFA brand-foundation page inside the portfolio
- Hero artwork used as the mobile home-screen app identity on iOS and Android
- Mobile-only home-screen guidance banner with platform-aware install instructions
- Semi-transparent **ARCHIVE FOOTFALL** lifetime visit counter before the mission statement
- Plain HTML and CSS, deployed through GitHub Pages

## Site structure

### Writing
Selected essays, frameworks, criticism, and research across psychology, sociology, culture, media, politics, and relationships.

The homepage keeps three selected pieces as a visual preview. The full archive lives at `/writing/`, where each piece is presented as a horizontally stacked editorial card with its category/type header, title, synopsis, publication date, restrained topic tags, and only the publication destinations that actually exist for that piece.

The archive header includes a quiet published-work count and open-ended year marker (`03 PUBLISHED WORKS / 2026—`). The newest published piece receives the green feature treatment and a **LATEST** label, while older pieces retain the standard archive styling. The page closes with **THE ARCHIVE CONTINUES / New work added as it is published.** rather than a newsletter or promotional CTA.

The public Writing archive is publication-led rather than platform-gated. A piece can appear once it has a public destination, and each card renders only the platforms where that piece is available. The current baseline is:

- **Don’t Let Emotion Get Ahead of the Law** — Sep 4, 2026 — X + Substack
- **Recursive Reality Enclosure** — Aug 31, 2026 — X + Substack
- **The “Relationship” Problem** — Aug 27, 2026 — Substack only

Topic tags are present now as restrained metadata, but interactive category filters are intentionally deferred until the archive is large enough that filtering solves a real navigation problem rather than adding visual clutter.

Other completed or developing pieces can remain in the internal content registry without appearing publicly until their publication destinations are ready.

### LVRS
R&B music, criticism, discovery, playlists, reviews, and release coverage through the wider LVRS ecosystem.

The homepage keeps LVRS lightweight rather than creating a separate page for the current playlist-first setup. Daily activity links directly to the LVRS X account, while the Apple Music playlist is linked directly from the LVRS section.

### Projects
The homepage keeps a three-item project preview, while the full registry lives at `/projects/`.

The Projects page uses the same archival rhythm as Writing without duplicating the blog/article structure. Each full-width project row includes:

- project number
- discipline
- current status
- project name
- short description
- restrained topic metadata
- only the public destinations that actually exist

The current registry contains:

- **LVRS Radio** — Active — Music / Editorial — X + Apple Music
- **ELFA** — In Development — Fashion / Design — dedicated portfolio page at `/projects/elfa/`
- **BY ALAMIR Archive** — Active — Publishing / Web — public source on GitHub

The page includes `03 ACTIVE / DEVELOPING PROJECTS` beneath the introduction and closes with **THE REGISTRY CONTINUES / New projects are added as they become public.**

Projects are status-led rather than date-led. A developing project can be visible before it has a separate commercial or social destination; internal portfolio pages are used when they help document the work accurately.

### ELFA
ELFA is the fashion and garment-design project within the BY ALAMIR portfolio. Its dedicated foundation page lives at `/projects/elfa/` and remains part of the portfolio while the project is still in development.

**ELFA = Elevated Luxury For All.**  
**Pronunciation: / E-lee-fah /**

The pronunciation is displayed directly beneath the expanded name in the ELFA hero as a small editorial annotation, preserving the intended Arabic-influenced reading without making it part of the wordmark itself.

The page is intentionally not a storefront or collection page yet. It establishes three things first:

1. **What ELFA is** — a developing fashion project concerned with garments, materials, proportion, construction, and visual identity.
2. **How it began** — recurring garment and identity experiments gradually began sharing the same design logic and became a coherent project rather than isolated clothing concepts.
3. **The mission behind the name** — luxury is treated as care, material, proportion, construction, and experience rather than exclusivity alone.

The phrase **“For All”** is a design position rather than a guarantee that every future object must occupy the same price point. ELFA rejects the idea that exclusion itself is what gives an object value. The working mission is to create clothing that feels elevated because it has been considered closely — clothing meant to be worn, lived in, and understood through its details.

The origin copy deliberately avoids inventing a specific founding date or dramatic origin story that has not been established. It documents the project as emerging from the garment, material, silhouette, closure, collar, surface-language, and identity experiments already being developed.

The stable source note for this foundation lives at `content/elfa/brand-foundation.md`, allowing future collections, garment concepts, materials, and identity work to build on the same baseline without rewriting the project’s purpose.

### About
A concise explanation of BY ALAMIR as a personal archive spanning multiple disciplines.

## Editorial voice

The homepage should read like an independent publication or archive, not an advertisement.

Working rule:

> Describe the work. Do not sell the work.

The main hero line — **“Ideas, culture, and the systems underneath them.”** — functions as the editorial thesis. The mission statement — **“NO ALGORITHM OWNS YOUR CREATIVITY.”** — is the primary philosophical statement.

## Repository organization

The repository is organized so source material, public site code, reusable assets, machine-readable metadata, documentation, and historical files are easy to distinguish and search.

```text
/
├── index.html
├── writing/
│   └── index.html
├── projects/
│   ├── index.html
│   └── elfa/
│       └── index.html
├── site.webmanifest
├── README.md
├── assets/
│   ├── css/
│   │   ├── site.css
│   │   ├── ticker.css
│   │   ├── writing-archive.css
│   │   ├── projects-archive.css
│   │   ├── elfa-page.css
│   │   └── mobile-install.css
│   ├── js/
│   │   └── mobile-install.js
│   ├── icons/
│   └── images/
│       └── hero/
├── content/
│   ├── writing/
│   ├── research/
│   ├── lvrs/
│   ├── elfa/
│   │   └── brand-foundation.md
│   └── projects/
├── data/
│   └── content-index.json
├── docs/
│   └── ARCHITECTURE.md
└── archive/
    └── legacy/
```

### Root

The root stays intentionally small. `index.html` is the public entry point, `writing/index.html` is the dedicated public Writing archive, `projects/index.html` is the dedicated project registry, `projects/elfa/index.html` is ELFA’s portfolio foundation page, `site.webmanifest` defines the mobile web-app identity, and this README is the human-readable project archive.

### Assets

Reusable front-end files live under `assets/`:

- `assets/css/site.css` — active shared site stylesheet
- `assets/css/ticker.css` — responsive homepage topic ticker behavior
- `assets/css/writing-archive.css` — Writing-specific chronology, tag, archive-count, latest-state, and closing-note presentation
- `assets/css/projects-archive.css` — Projects-specific registry, status, project metadata, destination, and closing-note presentation
- `assets/css/elfa-page.css` — ELFA-specific brand-foundation, pronunciation, and mission presentation
- `assets/css/mobile-install.css` — mobile home-screen banner and instruction-sheet presentation
- `assets/js/mobile-install.js` — platform detection, dismissal state, and home-screen instruction behavior
- `assets/icons/` — browser favicon and platform icon files
- `assets/images/` — artwork and visual assets
- `assets/images/hero/byalamir-hero-ecosystem.png` — production hero artwork and mobile home-screen app icon source

### Content collections

Source material is organized by discipline:

- `content/writing/` — essays, criticism, commentary, and general long-form writing
- `content/research/` — psychology, sociology, frameworks, papers, and research-led work
- `content/lvrs/` — LVRS Radio R&B editorials, playlists, reviews, discovery, and release coverage
- `content/elfa/` — ELFA garment concepts, collections, materials, identity, product development, and brand-foundation notes
- `content/projects/` — multidisciplinary work and projects that cross collections

Use one stable lowercase kebab-case slug per substantial item. `content/_template.md` provides the standard metadata fields and note structure for future entries.

### Machine-readable content index

`data/content-index.json` is the discovery layer for the website.

Anything that should eventually appear in site search, filters, collection pages, archives, or feeds should be registered there with metadata such as:

- title
- subtitle
- pronunciation when relevant to a named project
- collection
- content type
- status
- year/date
- summary
- tags
- public URL
- platform-specific destinations such as `x_url`, `substack_url`, `apple_music_url`, or `github_url`

Published Writing items include exact ISO publication dates so future chronological sorting, latest-state selection, and filtering can be derived from metadata rather than hard-coded card order.

Project entries point to stable pages or anchors and store external destinations only when those destinations actually exist. ELFA now resolves to its dedicated `/projects/elfa/` foundation page and is registered with the subtitle **Elevated Luxury For All** and pronunciation **/ E-lee-fah /**. **BY ALAMIR Archive** is also registered as a first-class project so the site itself can be discovered as part of the broader body of work.

A platform destination can remain `null` when a piece is not published there. The public archive should not render a link for an unavailable destination.

Full source text remains in `content/`; the JSON file stays lightweight and searchable. This gives us a stable architecture for adding site-wide search later without reorganizing the repository again.

### Documentation

Technical conventions and architecture decisions live under `docs/`. The full repository map and workflow are documented in `docs/ARCHITECTURE.md`.

### Archive

Superseded loose files are moved to `archive/legacy/` instead of being deleted or left at root. Git history remains the canonical version history; the archive simply keeps recognizable old snapshots easy to inspect.

## Hero artwork system

The hero is being developed as a visual summary of the broader BY ALAMIR ecosystem rather than a generic abstract image.

It should represent three core areas simultaneously:

- **LVRS Radio** — R&B, audio, music discovery, criticism, editorial culture
- **ELFA Fashion** — fashion, textiles, design language, visual identity
- **Psychology / Research** — papers, frameworks, diagrams, systems thinking

The homepage production asset lives at:

`/assets/images/hero/byalamir-hero-ecosystem.png`

The original CSS-generated geometric artwork remains available as an automatic fallback if the production image cannot load. The production image fills the hero frame responsively on desktop and mobile with a restrained contrast and brightness adjustment to integrate it with the site's palette.

The same hero artwork now also serves as the visual identity when BY ALAMIR is saved to a phone home screen.

Additional asset notes live in `assets/README.md` and `assets/images/hero/README.md`.

## Branding and site icons

Browser and home-screen identity intentionally use two related but different treatments.

### Browser favicon

The regular browser favicon system retains the compact geometric mark so tabs and bookmark surfaces remain legible at very small sizes.

Current browser icon files:

- `assets/icons/favicon.svg`
- `assets/icons/favicon.png`
- `assets/icons/favicon.ico`

### Mobile home-screen icon

When the site is saved to a phone home screen, the visual identity uses the full multidisciplinary hero artwork instead of the small geometric favicon.

- **iOS / iPadOS:** `apple-touch-icon` points directly to `/assets/images/hero/byalamir-hero-ecosystem.png`.
- **Android:** `site.webmanifest` identifies the same hero artwork as the web-app icon and launches the site in standalone display mode when supported.
- The homepage, Writing archive, Projects registry, and ELFA foundation page include the same mobile-app metadata so the saved identity remains consistent regardless of which public page a visitor is viewing.
- The saved app title is **BY ALAMIR** and uses the site's dark green theme/background color.

### Mobile home-screen guidance

Mobile browser visitors receive a small, dismissible bottom banner labeled **KEEP BY ALAMIR CLOSE** with a **How to ↗** control.

The guidance system:

- appears only on mobile-width browser sessions;
- does not appear when BY ALAMIR is already running in standalone installed-app mode;
- detects iOS / iPadOS or Android from browser signals when possible;
- shows Safari-specific **Add to Home Screen** steps on Apple mobile devices;
- shows Chrome **Add to Home screen / Install app** steps on Android;
- falls back to showing both instruction sets when the operating system cannot be identified confidently;
- opens instructions in a compact bottom-sheet dialog rather than navigating away from the site;
- can be dismissed, with dismissal remembered locally for seven days to avoid repeatedly interrupting returning visitors;
- is available across the homepage and dedicated archive/project pages.

## Archive Footfall

**ARCHIVE FOOTFALL** is the small lifetime-visit display positioned after the About section and immediately before the green mission statement.

The counter uses the public CounterAPI.com endpoint with the stable namespace/key combination:

- namespace: `byalamir.github.io`
- action: `view`
- key: `archive-footfall`

No account, API key, login, or build-time secret is required. The homepage increments the counter through a lightweight browser request and renders only the returned number inside BY ALAMIR's own visual component. If the external request fails, the component falls back to an em dash rather than disrupting the page.

The displayed lifetime count begins with the installation of this counter on **2026-09-04**; visits before installation were not retrospectively available from GitHub Pages.

## Project changelog

### 2026-09-04 — Project foundation
- Created the repository and initial GitHub Pages site.
- Established the site as a personal archive / portfolio.
- Added the core sections: Writing, LVRS, Projects, and About.
- Built the first static HTML/CSS version.

Commits:
- `61055ec` — Initial commit
- `50e0924` — Build initial BY ALAMIR portfolio site

### 2026-09-04 — V2 visual direction
- Moved the site toward a dark green cinematic archive aesthetic.
- Introduced larger editorial typography, restrained color use, and the black-bar redaction motif.
- Added custom BY ALAMIR branding and initial favicon work.

Commits:
- `bc0e481` — Launch BYALAMIR V2 redesign
- `4009400` — Add custom BY ALAMIR site branding and favicon
- `b0ff54c` — Improve BY ALAMIR favicon visibility

### 2026-09-04 — Editorial archive redesign
- Reworked the homepage into the current editorial archive layout.
- Replaced the side-portrait hero with the large text-led hero and geometric artwork.
- Added the scrolling topic ticker.
- Rebuilt the selected-writing section around three featured essay cards.
- Reworked the LVRS section with the large wordmark treatment.
- Rebuilt the Projects and About sections.
- Added full responsive styling for desktop and mobile.

Commits:
- `48c1b36` — Deploy BY ALAMIR archive redesign
- `be6dcfb` — Apply responsive archive redesign styles

### 2026-09-04 — Geometric icon system
- Matched the favicon to the geometric hero artwork.
- Added SVG, PNG, ICO, and Apple Touch Icon versions.
- Added cache-busting and browser fallback references so the new icon is more likely to refresh correctly across platforms.

Commits:
- `a2bc838` — Match favicon to geometric hero artwork
- `331af2c` — Update creative mission and refresh site icon references
- `b916099` — Add geometric favicon fallbacks

### 2026-09-04 — Mission statement
- Changed the lower manifesto from **“NO ALGORITHM OWNS THE ARCHIVE.”** to **“NO ALGORITHM OWNS YOUR CREATIVITY.”**
- Reframed the statement so it speaks to creatives visiting the site, not only to the archive itself.

Commit:
- `331af2c` — Update creative mission and refresh site icon references

### 2026-09-04 — Editorial copy rewrite
- Removed copy that sounded like advertising, creative-agency language, or forced brand slogans.
- Rewrote the homepage in a quieter editorial tone.
- Simplified section headings and descriptions.
- Kept the hero thesis and creative mission statement as the two intentional expressive lines.
- Removed the extra slogan beneath the mission statement and replaced it with a restrained site/date marker.

Commit:
- `65908f8` — Refine homepage copy for a restrained editorial tone

### 2026-09-04 — Multidisciplinary hero artwork preparation
- Defined the next hero artwork around the three major creative pillars: LVRS Radio, ELFA Fashion, and psychology / research work.
- Wired the homepage to load the production hero once its image file is added.
- Preserved the existing CSS-generated geometric artwork as an automatic fallback so the live site remains intact before or during asset replacement.
- Added responsive image behavior for desktop and mobile.
- Added a subtle image treatment to keep the production artwork consistent with the site's dark green editorial palette.
- Created asset documentation for the hero artwork.

Commits:
- `49fcfd7` — Prepare hero artwork asset integration
- `15ecc5f` — Style responsive hero image with fallback
- `bdb8d3b` — Document hero artwork asset path
- `c2e6842` — Archive multidisciplinary hero setup in README

### 2026-09-04 — Repository architecture and searchable content registry
- Reduced the repository root to the public entry point, documentation, and organized top-level directories.
- Moved the active stylesheet to `assets/css/site.css`.
- Moved active browser icons to `assets/icons/` and updated the homepage references.
- Established dedicated source collections for Writing, Research, LVRS, ELFA, and multidisciplinary Projects.
- Added `content/_template.md` as the standard starting point for future source entries.
- Added `data/content-index.json` as a machine-readable registry for future site search, filtering, archive pages, and feeds.
- Added `docs/ARCHITECTURE.md` to document naming, placement, and update conventions.
- Moved old loose homepage/icon files into `archive/legacy/` instead of deleting them.
- Updated the hero production path to `assets/images/hero/byalamir-hero-ecosystem.png`.

Commit:
- `1caa07b` — Reorganize repository around content collections and searchable index

### 2026-09-04 — Complete mobile navigation
- Replaced the truncated mobile navigation, which only exposed Writing and LVRS, with a compact `MENU +` control.
- Added a dropdown containing Writing, LVRS, Projects, and About so every primary section is accessible on small screens.
- Kept the full horizontal navigation unchanged on desktop.
- Added automatic menu closing after a mobile navigation selection.
- Styled the dropdown to match the dark editorial visual system rather than introducing a separate mobile aesthetic.

Commits:
- `c306fda` — Add complete mobile navigation dropdown
- `22c00e5` — Style mobile menu dropdown

### 2026-09-04 — Navigation cache hardening
- Corrected a temporary state where the desktop navigation and the raw mobile dropdown could appear at the same time while an older cached stylesheet was still being used.
- Added a cache-busted stylesheet reference so the navigation markup and responsive CSS update together more reliably after deployment.
- Preserved the intended rule: full horizontal navigation on desktop; `MENU +` dropdown only on mobile.

Commit:
- `4f27de3` — Cache-bust stylesheet for mobile navigation fix

### 2026-09-04 — LVRS playlist-first homepage refinement
- Changed **“Daily posts live on social platforms.”** to **“Daily posts live on X.”**
- Removed **“Selected work is collected here.”** so the LVRS section no longer implies a separate archive page is required.
- Reserved the next line for a direct **“Listen on Apple Music ↗”** link once the exact playlist URL is supplied.
- Added restrained link styling that matches the existing editorial design instead of introducing a large promotional button.

Commits:
- `ee09399` — Refine LVRS copy and prepare Apple Music link slot
- `ae1c338` — Prepare understated Apple Music link styling

### 2026-09-04 — LVRS Apple Music destination
- Connected **“Listen on Apple Music ↗”** directly to the LVRS Radio playlist.
- Opens the playlist in a new tab while keeping the BY ALAMIR site available.
- Registered the Apple Music destination in `data/content-index.json` so future site search and collection tooling can access the external project URL.

Apple Music:
- `https://music.apple.com/us/playlist/lvrs-radio/pl.u-zPyLl9LCeoMlRWa`

Commits:
- `a1d242c` — Link LVRS Radio Apple Music playlist
- `8672142` — Register LVRS Apple Music URL in content index

### 2026-09-04 — LVRS R&B focus
- Clarified the homepage body copy so LVRS is explicitly described as the **R&B music and culture** section of the archive.
- Updated the content registry summary and tags so future search and filtering identify R&B as LVRS Radio's core genre.
- Updated repository documentation to keep the R&B focus consistent across the project architecture.

Commits:
- `901190f` — Define LVRS as an R&B music project
- `e22a22c` — Add R&B focus to LVRS content metadata

### 2026-09-04 — LVRS X destination
- Turned **“Daily posts live on X.”** into a direct link to the LVRS X account while preserving the existing sentence-level copy.
- Styled the sentence as a restrained inline hyperlink so it remains editorial rather than button-like.
- Registered the X profile in `data/content-index.json` alongside the Apple Music destination.

X:
- `https://x.com/HopeInSeptember`

Commits:
- `cbb67e9` — Link LVRS daily posts to X profile
- `3f9a1f3` — Style LVRS X profile link
- `a7fe025` — Register LVRS X profile in content index

### 2026-09-04 — Archive Footfall lifetime visit counter
- Added a small semi-transparent **ARCHIVE FOOTFALL** panel after About and immediately before the green mission statement.
- Added a persistent site-wide visit count using CounterAPI.com's public counter endpoint, requiring no account or API credentials.
- Kept the presentation entirely within the BY ALAMIR design system instead of using a third-party badge.
- Added responsive bottom-right placement on desktop and mobile.
- Added graceful failure behavior so an unavailable counter never breaks the page.
- Counter history begins with this installation; GitHub Pages did not provide a retroactive total for visits before tracking was added.

Commits:
- `4635c42` — Add Archive Footfall lifetime visit counter
- `190026d` — Style Archive Footfall counter

### 2026-09-04 — Dedicated Writing archive
- Created `/writing/` as a separate, intentionally simple archive page rather than turning every article into a locally hosted site page.
- Reinterpreted the homepage essay-card visual language as full-width horizontal rows.
- Each row contains the category/type header, archive number, title, short synopsis, and available external publication destinations.
- Initially seeded the page with placeholder selected work while publication links were being established.
- Kept unknown publication destinations visibly inactive rather than inserting guessed or generic links.
- Updated the homepage Writing navigation, hero action, and selected-writing footer link to point to the new archive.
- Added `x_url` and `substack_url` fields to the writing entries in `data/content-index.json` for direct platform destinations as the archive grows.
- Added responsive behavior so the horizontal rows collapse cleanly into vertical cards on small screens.

Commits:
- `77b988d` — Create dedicated horizontal writing archive page
- `6cdac6f` — Style horizontal writing archive and publication links
- `ad17ec9` — Connect homepage writing navigation to archive page
- `1cea8ab` — Register writing archive and publication link fields

### 2026-09-04 — Mobile home-screen app identity
- Kept the existing geometric favicon system for browser tabs and bookmarks.
- Changed the iOS / iPadOS `apple-touch-icon` to use the multidisciplinary hero artwork.
- Added `site.webmanifest` so Android and other supporting browsers recognize BY ALAMIR as a standalone web-app identity.
- Set the Android manifest icon to the same production hero artwork used on the homepage.
- Added the app title **BY ALAMIR**, standalone display preference, and the site's dark green theme/background colors.
- Applied the same mobile-app metadata to the homepage and dedicated archive pages so saving the site from any primary public page produces the same identity.
- Removed intermediate SVG icon wrappers after switching the final implementation to reference the hero image directly.

Commits:
- `880a92b` — Add mobile web app manifest
- `f875366` — Use hero artwork for mobile home-screen app identity
- `2c4bece` — Apply mobile app identity to writing archive
- `b26afe` — Use hero artwork directly for Android home-screen icon

### 2026-09-04 — Mobile topic ticker
- Reworked the homepage topic strip on mobile so long discipline labels no longer get permanently clipped at the viewport edge.
- Added a duplicated ticker track for a continuous horizontal loop through Psychology, Sociology, Culture, Music, Media, Design, and Storytelling.
- Kept desktop presentation restrained while allowing the mobile strip to move continuously.
- Added a reduced-motion fallback for visitors who disable animation.

Commits:
- `45c04b9` — Add responsive topic ticker styling
- `99a5a01` — Make mobile topic strip scroll cleanly

### 2026-09-04 — Published Writing baseline
- Reset the public Writing selection to the pieces currently confirmed as published externally.
- Established the initial public set as **Don’t Let Emotion Get Ahead of the Law**, **Recursive Reality Enclosure**, and **The “Relationship” Problem**.
- Updated both the homepage preview and `/writing/` archive to show the same three-piece published baseline.
- Kept **The Exception Problem** and **Morality, Punishment & Control** in `data/content-index.json` as unpublished rather than deleting them.
- Formalized the rule that public Writing cards represent published work, while unpublished or developing work can remain preserved in the internal content registry.

Commits:
- `7702011` — Align homepage writing preview with published archive
- `2156f75` — Seed writing archive with published pieces
- `8cee333` — Register initial published writing set

### 2026-09-04 — Writing publication destinations activated
- Corrected the publication map after confirming that only **Don’t Let Emotion Get Ahead of the Law** and **Recursive Reality Enclosure** are currently available on both X and Substack.
- Activated direct **Read on X ↗** and **Read on Substack ↗** links for the Law essay and Recursive Reality Enclosure.
- Removed the X destination from **The “Relationship” Problem** and exposed only its Substack link.
- Updated `data/content-index.json` so `x_url` remains `null` for the Relationship Problem while all confirmed external URLs are stored for the other pieces.
- Established the ongoing display rule: publication cards render only the destinations that actually exist for that piece.

Commits:
- `b197294` — Activate writing publication links by platform
- `322a69d` — Register writing publication destinations accurately

### 2026-09-04 — Mobile home-screen guidance banner
- Added a small mobile-only **KEEP BY ALAMIR CLOSE** banner near the bottom safe area of browser sessions.
- Added a **How to ↗** control that opens a compact instruction sheet without leaving the site.
- Added iOS / iPadOS detection with Safari **Share → Add to Home Screen → Add** instructions.
- Added Android detection with Chrome **menu → Add to Home screen / Install app → confirm** instructions.
- Added a general fallback that shows both sets of instructions when the operating system cannot be identified confidently.
- Automatically suppresses the banner when the site is already running in standalone installed-app mode.
- Added a dismiss control and stores dismissal locally for seven days so the prompt does not repeatedly interrupt returning visitors.
- Applied the same behavior across the homepage and dedicated archive pages.

Commits:
- `ca6a5e0` — Add mobile home-screen install banner styles
- `db5a659` — Add mobile home-screen install guidance
- `ba8abe8` — Add mobile app guidance banner to homepage
- `bf54db4` — Add mobile app guidance banner to writing archive

### 2026-09-05 — Writing archive editorial metadata
- Added exact publication dates to each currently published Writing card and to `data/content-index.json`.
- Added a quiet **03 PUBLISHED WORKS / 2026—** count beneath the Writing archive introduction.
- Added restrained topic metadata beneath each synopsis without introducing colorful pills or blog-style category badges.
- Reframed the green first-card treatment as a meaningful **LATEST** state for the most recently published work.
- Added **THE ARCHIVE CONTINUES / New work added as it is published.** above the mission statement as a low-pressure archive status line.
- Added `assets/css/writing-archive.css` so these Writing-specific refinements remain modular instead of expanding the shared site stylesheet unnecessarily.
- Deferred interactive filters until the archive is large enough for filtering to materially improve navigation.

Commits:
- `27dd714` — Add editorial metadata styling to writing archive
- `250cf43` — Add chronology and archive metadata to writing page
- `a46210e` — Add publication dates to writing metadata

### 2026-09-05 — Dedicated Projects registry
- Created `/projects/` as the dedicated registry for active and developing creative projects.
- Built the page around full-width horizontal project rows related to the Writing archive visual language but organized around **status** instead of publication chronology.
- Established the initial registry as **LVRS Radio**, **ELFA**, and **BY ALAMIR Archive**.
- Added direct X and Apple Music destinations to LVRS Radio.
- Kept ELFA visible as **IN DEVELOPMENT** without inventing an external commercial or social destination.
- Registered BY ALAMIR itself as an active Publishing / Web project with the public GitHub repository as its source destination.
- Added restrained project tags, active/developing status indicators, and the header count **03 ACTIVE / DEVELOPING PROJECTS**.
- Added **THE REGISTRY CONTINUES / New projects are added as they become public.** above the mission statement.
- Updated the homepage project preview to match the new registry and added **Browse the project registry ↗**.
- Updated homepage and Writing navigation so **Projects** now routes to `/projects/` instead of only scrolling to the homepage preview.
- Updated `data/content-index.json` with stable project anchors and the BY ALAMIR Archive project entry.
- Added `assets/css/projects-archive.css` to keep the registry-specific design modular.

Commits:
- `83f1171` — Add projects registry archive styles
- `f17aa2c` — Create dedicated projects registry page
- `90ff915` — Connect homepage to projects registry
- `0cf2d3d` — Register projects archive destinations
- `6642cd5` — Link writing navigation to projects registry

### 2026-09-05 — ELFA brand foundation
- Created `/projects/elfa/` as a dedicated portfolio page for ELFA while the fashion project remains in development.
- Expanded the name as **Elevated Luxury For All** and made it the central statement of the page.
- Added restrained sections covering **what ELFA is**, **how it developed**, and **the design position behind the name**.
- Framed ELFA’s origin as the convergence of recurring garment, material, silhouette, construction, closure, collar, surface-language, and identity experiments rather than inventing a specific founding event.
- Defined “For All” as a rejection of exclusion as the source of luxury value, while avoiding an unsupported promise that every future object must share one price point.
- Added the working mission: create clothing that feels elevated because it has been considered closely — clothing meant to be worn, lived in, and understood through its details.
- Added `content/elfa/brand-foundation.md` as the stable source note for the project’s foundation.
- Added `assets/css/elfa-page.css` for the dedicated ELFA presentation.
- Replaced the Projects registry’s **No public destination yet** state with an internal **View ELFA ↗** link.
- Updated `data/content-index.json` so ELFA resolves directly to `/projects/elfa/` and carries the subtitle **Elevated Luxury For All**.

Commits:
- `5a094af` — Add ELFA brand foundation page styles
- `d6681cd` — Add ELFA brand foundation source note
- `96479ed` — Create dedicated ELFA brand foundation page
- `772f968` — Link ELFA registry entry to brand foundation page
- `fea2e23` — Register dedicated ELFA brand page

### 2026-09-05 — ELFA pronunciation
- Established the public pronunciation of **ELFA** as **/ E-lee-fah /**.
- Added `pronounced / E-lee-fah /` directly beneath **ELEVATED LUXURY FOR ALL** in the ELFA hero, using a smaller italic editorial treatment so it remains secondary to the wordmark and expanded name.
- Added the pronunciation to `content/elfa/brand-foundation.md` and `data/content-index.json` so it remains part of the project’s permanent identity metadata.
- Cache-bumped the ELFA-specific stylesheet so the pronunciation treatment updates reliably on mobile and desktop.

Commits:
- `46dbbea` — Style ELFA pronunciation annotation
- `1328774` — Add ELFA pronunciation to brand header
- `b258fc9` — Record ELFA pronunciation in brand foundation
- `2c34797` — Add ELFA pronunciation metadata

## Maintenance convention

This README is also the development archive for the project.

For every meaningful site update:
1. Put source material in the appropriate `content/` collection.
2. Put reusable code and artwork in the appropriate `assets/` folder.
3. Register anything intended for site discovery in `data/content-index.json`.
4. Update the live site files.
5. Commit the change with a clear message.
6. Add a dated entry here explaining what changed and why.

This keeps the Git history, source archive, site discovery layer, and human-readable development record aligned.

## Technical notes

- Hosting: GitHub Pages
- Repository: `byalamir/byalamir.github.io`
- Front end: HTML + CSS with minimal browser JavaScript for mobile navigation, Archive Footfall, and home-screen install guidance
- Active stylesheet: `assets/css/site.css`
- Responsive ticker stylesheet: `assets/css/ticker.css`
- Writing archive stylesheet: `assets/css/writing-archive.css`
- Projects registry stylesheet: `assets/css/projects-archive.css`
- ELFA page stylesheet: `assets/css/elfa-page.css`
- Mobile install stylesheet: `assets/css/mobile-install.css`
- Mobile install behavior: `assets/js/mobile-install.js`
- Writing archive: `writing/index.html`
- Projects registry: `projects/index.html`
- ELFA foundation page: `projects/elfa/index.html`
- ELFA source foundation: `content/elfa/brand-foundation.md`
- ELFA pronunciation: `/ E-lee-fah /`
- Mobile web-app manifest: `site.webmanifest`
- Home-screen artwork source: `assets/images/hero/byalamir-hero-ecosystem.png`
- Content registry: `data/content-index.json`
- Public visit-counter service: CounterAPI.com
- No framework or build system required
- Main branch deploys directly to the public site
