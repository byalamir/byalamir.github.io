# Repository Architecture

The repository is organized so the public site, source archive, and development history remain separate but connected.

## Root

Keep the root minimal:

- `index.html` — public homepage
- `README.md` — project overview and human-readable development archive
- `assets/` — styles, icons, and imagery
- `content/` — source material grouped by creative/research collection
- `data/` — machine-readable registries used by the site
- `docs/` — technical documentation and conventions
- `archive/` — superseded files retained for historical reference

## Assets

`assets/css/` contains active stylesheets.

`assets/icons/` contains browser and platform icons.

`assets/images/` contains visual assets. Organize images by use or collection when volume grows, for example `hero/`, `lvrs/`, `elfa/`, and `research/`.

## Content

Every substantial body of work should have one stable slug and live in the collection that best describes its source material:

- `content/writing/`
- `content/research/`
- `content/lvrs/`
- `content/elfa/`
- `content/projects/`

Use lowercase kebab-case names. Do not use filenames such as `final`, `new`, `copy`, or numbered duplicates as permanent identifiers.

## Site index

`data/content-index.json` is the discovery layer. Any item that should appear in site search, filtering, archives, feeds, or collection pages should be registered there.

The content index should remain metadata-only: title, collection, type, status, year/date, summary, tags, and public URL. Full source text belongs in `content/`.

## Archive

Superseded implementations and loose historical assets move to `archive/legacy/` rather than being left at root. Git history remains the canonical version history; the archive exists only for files worth retaining as recognizable snapshots.

## Change workflow

For meaningful updates:

1. Put source material in the correct collection.
2. Put reusable visuals/code in the correct asset folder.
3. Register public-facing content in `data/content-index.json`.
4. Update site markup/styles as needed.
5. Add the change to the root README changelog.
6. Commit with a descriptive message.

This structure is intentionally framework-agnostic so the site can remain plain HTML/CSS now and adopt JavaScript search, a static-site generator, or another build system later without reorganizing the archive again.
