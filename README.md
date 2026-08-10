# Personal site (CV + research + artifacts)

Astro site: a CV page, a "Research" section of long-form articles (Markdown/MDX), and
an "Artifacts" section linking out to interactive Claude Artifact tools built alongside
the research. Live at [mateusgodinho.github.io](https://mateusgodinho.github.io).

## Structure

```
src/
├── content/
│   └── articles/            one .mdx file per article (frontmatter: title,
│                             description, pubDate, draft, tags, cover)
├── content.config.ts         schema for the articles collection
├── data/
│   └── artifacts.ts          shared list of Claude Artifacts (title, description,
│                             url, related article) -- imported by both the homepage
│                             preview and the full /artifacts listing
├── layouts/
│   ├── BaseLayout.astro      shared <head>/nav/footer shell (props: title,
│   │                         description, wide, hideNav)
│   └── ArticleLayout.astro   article header (title/date/tags/draft banner)
├── components/
│   ├── Nav.astro             compact nav bar (MG home button, links, socials) --
│   │                         rendered globally via BaseLayout, or manually inside
│   │                         the homepage's two-column grid (see index.astro)
│   └── Footer.astro
├── pages/
│   ├── index.astro           home: sidebar (photo, resume summary, CV download) +
│   │                         About/Research/Artifacts cards, wide layout
│   ├── cv.astro               full CV -- experience/education/skills as plain arrays
│   ├── articles/
│   │   ├── index.astro       full research listing (row layout)
│   │   └── [id]/index.astro  dynamic article route (renders content collection)
│   └── artifacts/
│       └── index.astro       full artifacts listing (row layout)
├── styles/global.css         all styling and design tokens, light/dark via
│                             prefers-color-scheme
└── public/
    ├── fonts/                self-hosted IBM Plex Serif/Sans/Mono (woff2)
    ├── images/                cover images, avatar.jpg
    └── charts/                standalone interactive HTML charts, embedded via
                                <iframe> in article MDX
```

## Design system

Tokens live at the top of `src/styles/global.css` (`--bg`, `--accent`, `--radius`,
`--font-*`, plus dark-mode overrides under `prefers-color-scheme` and `[data-theme]`).
Typeface: IBM Plex Serif (headings), Plex Sans (body), Plex Mono (labels/dates/tags/
figures) -- self-hosted from `public/fonts/`, no external font requests.

The homepage uses a wider container (`wide` prop on `BaseLayout`, 1120px) for its
sidebar + content grid; CV/article/listing pages use the narrower 720px reading width.

## Commands

| Command           | Action                                     |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                       |
| `npm run dev`      | Start local dev server at `localhost:4321` |
| `npm run build`    | Build production site to `./dist/`         |
| `npm run preview`  | Preview the production build locally       |

## Deploying

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`, using
[`withastro/action`](https://github.com/withastro/action)). Push to `main` and it
redeploys automatically -- no manual step. Node version is pinned via `node-version`
on the `withastro/action` step itself (a separate `actions/setup-node` step has no
effect; the action manages its own Node setup and ignores whatever ran before it).

The repo is named `MateusGodinho.github.io` (GitHub's special "user site" naming),
so it serves from the domain root with no `base` path needed in `astro.config.mjs`.

Content drafted with `draft: true` in its frontmatter is only visible in `npm run dev`
(local), never in the production build -- safe to keep unfinished pieces in the repo.

## Adding things

- **New article**: drop a `.mdx` file in `src/content/articles/`. Optional `cover`
  frontmatter field is defined in the schema but not currently rendered anywhere
  (the research listing uses a text-row layout, not thumbnails) -- either wire it
  back in or drop the field if it stays unused.
- **New artifact**: add an entry to `src/data/artifacts.ts`. It appears on both the
  homepage preview and `/artifacts` automatically.
