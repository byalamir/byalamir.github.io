# BY ALAMIR Assets

## Hero ecosystem artwork

Expected production file:

`byalamir-hero-ecosystem.png`

The homepage is already wired to load:

`/assets/byalamir-hero-ecosystem.png`

Until that file exists, the original CSS-generated geometric hero remains visible as a fallback.

### Artwork role

The hero artwork represents the wider BY ALAMIR ecosystem rather than a single discipline:

- **LVRS Radio** — music, audio, discovery, editorial work
- **ELFA Fashion** — fashion, textile, design, visual identity
- **Psychology / Research** — papers, frameworks, diagrams, systems thinking

### Current display behavior

- Desktop and mobile responsive
- Artwork fills the hero frame with `object-fit: cover`
- Centered crop by default
- Slight contrast / brightness treatment is applied in CSS to integrate the artwork with the site palette
- Existing geometric artwork remains the fallback if the image cannot load

If a separate mobile crop is introduced later, document it here and update the homepage to use a `<picture>` element or responsive image source set.
