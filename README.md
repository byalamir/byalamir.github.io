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
- Plain HTML and CSS, deployed through GitHub Pages

## Site structure

### Writing
Selected essays, frameworks, criticism, and research across psychology, sociology, culture, media, politics, and relationships.

### LVRS
Music, criticism, discovery, playlists, reviews, and release coverage through the wider LVRS ecosystem.

### Projects
Ongoing work across:
- LVRS Radio
- Research & Essays
- Creative Development

### About
A concise explanation of BY ALAMIR as a personal archive spanning multiple disciplines.

## Editorial voice

The homepage should read like an independent publication or archive, not an advertisement.

Working rule:

> Describe the work. Do not sell the work.

The main hero line — **“Ideas, culture, and the systems underneath them.”** — functions as the editorial thesis. The mission statement — **“NO ALGORITHM OWNS YOUR CREATIVITY.”** — is the primary philosophical statement.

## Hero artwork system

The hero is being developed as a visual summary of the broader BY ALAMIR ecosystem rather than a generic abstract image.

It should represent three core areas simultaneously:

- **LVRS Radio** — audio, music discovery, criticism, editorial culture
- **ELFA Fashion** — fashion, textiles, design language, visual identity
- **Psychology / Research** — papers, frameworks, diagrams, systems thinking

The homepage is currently wired for the production asset at:

`/assets/byalamir-hero-ecosystem.png`

Until that file is added, the original CSS-generated geometric artwork remains visible as a graceful fallback. The production image is set to fill the hero frame responsively on desktop and mobile with a restrained contrast and brightness adjustment to integrate it with the site's palette.

Additional asset notes live in `assets/README.md`.

## Branding and site icons

The site icon system is based on the same geometric language as the original hero artwork.

Current icon files:
- `favicon.svg`
- `favicon.png`
- `favicon.ico`
- `apple-touch-icon.png`

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
- Wired the homepage to load `/assets/byalamir-hero-ecosystem.png` once the final image is added.
- Preserved the existing CSS-generated geometric artwork as an automatic fallback so the live site remains intact before or during asset replacement.
- Added responsive image behavior for desktop and mobile.
- Added a subtle image treatment to keep the production artwork consistent with the site's dark green editorial palette.
- Created `assets/README.md` to document the image path, purpose, and future responsive-asset conventions.

Commits:
- `49fcfd7` — Prepare hero artwork asset integration
- `15ecc5f` — Style responsive hero image with fallback
- `bdb8d3b` — Document hero artwork asset path

## Maintenance convention

This README is also the development archive for the project.

For every meaningful site update:
1. Update the site files.
2. Commit the change with a clear message.
3. Add a dated entry here explaining what changed and why.

This keeps both the Git history and a human-readable record of the site's evolution.

## Technical notes

- Hosting: GitHub Pages
- Repository: `byalamir/byalamir.github.io`
- Front end: HTML + CSS
- No framework or build system required
- Main branch deploys directly to the public site
