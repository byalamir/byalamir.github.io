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
- Plain HTML and CSS, deployed through GitHub Pages

## Site structure

### Writing
Selected essays, frameworks, criticism, and research across psychology, sociology, culture, media, politics, and relationships.

### LVRS
R&B music, criticism, discovery, playlists, reviews, and release coverage through the wider LVRS ecosystem.

The homepage keeps LVRS lightweight rather than creating a separate page for the current playlist-first setup. Daily activity links directly to the LVRS X account, while the Apple Music playlist is linked directly from the LVRS section.

### Projects
Ongoing work across music, research, fashion, design, and creative development, including LVRS Radio and ELFA Fashion.

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
├── README.md
├── assets/
│   ├── css/
│   │   └── site.css
│   ├── icons/
│   └── images/
│       └── hero/
├── content/
│   ├── writing/
│   ├── research/
│   ├── lvrs/
│   ├── elfa/
│   └── projects/
├── data/
│   └── content-index.json
├── docs/
│   └── ARCHITECTURE.md
└── archive/
    └── legacy/
```

### Root

The root stays intentionally small. `index.html` is the public entry point and this README is the human-readable project archive.

### Assets

Reusable front-end files live under `assets/`:

- `assets/css/site.css` — active site stylesheet
- `assets/icons/` — favicon and platform icon files
- `assets/images/` — artwork and visual assets

### Content collections

Source material is organized by discipline:

- `content/writing/` — essays, criticism, commentary, and general long-form writing
- `content/research/` — psychology, sociology, frameworks, papers, and research-led work
- `content/lvrs/` — LVRS Radio R&B editorials, playlists, reviews, discovery, and release coverage
- `content/elfa/` — ELFA garment concepts, collections, materials, identity, and product development
- `content/projects/` — multidisciplinary work and projects that cross collections

Use one stable lowercase kebab-case slug per substantial item. `content/_template.md` provides the standard metadata fields and note structure for future entries.

### Machine-readable content index

`data/content-index.json` is the discovery layer for the website.

Anything that should eventually appear in site search, filters, collection pages, archives, or feeds should be registered there with metadata such as:

- title
- collection
- content type
- status
- year/date
- summary
- tags
- public URL

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

The homepage is currently wired for the production asset at:

`/assets/images/hero/byalamir-hero-ecosystem.png`

Until that file is added, the original CSS-generated geometric artwork remains visible as a graceful fallback. The production image is set to fill the hero frame responsively on desktop and mobile with a restrained contrast and brightness adjustment to integrate it with the site's palette.

Additional asset notes live in `assets/README.md` and `assets/images/hero/README.md`.

## Branding and site icons

The site icon system is based on the same geometric language as the original hero artwork.

Current icon files:

- `assets/icons/favicon.svg`
- `assets/icons/favicon.png`
- `assets/icons/favicon.ico`
- `assets/icons/apple-touch-icon.png`

The HTML includes cache-busted references and multiple browser fallbacks to improve favicon reliability across desktop, mobile, and pinned/home-screen contexts.

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
- Front end: HTML + CSS with a minimal inline script for mobile menu closing
- Active stylesheet: `assets/css/site.css`
- Content registry: `data/content-index.json`
- No framework or build system required
- Main branch deploys directly to the public site
