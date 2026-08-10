# Personal site (CV + research notes)

Minimal Astro site: a CV page and a "Research" section of long-form articles
(written in Markdown/MDX), meant to be cross-posted (in shortened form) to
LinkedIn/Substack with a link back here for the full piece + methodology.

## Structure

```
src/
├── content/
│   └── articles/           one .mdx file per article (frontmatter: title,
│                            description, pubDate, draft, tags)
├── content.config.ts        schema for the articles collection
├── layouts/
│   ├── BaseLayout.astro     shared <head>/nav/footer shell
│   └── ArticleLayout.astro  article header (title/date/tags/draft banner)
├── components/
│   ├── Nav.astro            top nav -- TODO: fill in your name + links
│   └── Footer.astro         TODO: fill in your name + links
├── pages/
│   ├── index.astro          home: bio, highlights, featured research
│   ├── cv.astro             CV -- TODO: replace all placeholder content
│   └── articles/
│       ├── index.astro      full research listing
│       └── [id]/index.astro dynamic article route (renders content collection)
└── styles/global.css        all styling, light/dark via prefers-color-scheme
```

## TODO before this is a real site

- [ ] `src/components/Nav.astro`, `Footer.astro`, `src/pages/index.astro`: replace
      placeholder name/bio/links with the real thing.
- [ ] `src/pages/cv.astro`: replace placeholder experience/education/skills.
- [ ] `public/cv.pdf`: add a real CV PDF (the "Download PDF" link on `/cv` expects it).
- [ ] `astro.config.mjs`: set `site` to your real domain once deployed.
- [ ] Draft the actual article body in `src/content/articles/sarb-communication.mdx`
      (currently a commented-out section-by-section outline, `draft: true`).
- [ ] Charts: the interactive HTML charts built during research are NOT meant to be
      embedded live here for a first pass -- export them as static PNG/SVG and drop them
      in `public/images/` or next to the article, then reference with normal
      `![alt](/images/...)` markdown syntax inside the .mdx file.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview the production build locally             |

## Deploying

Two low-effort options, both free:

- **GitHub Pages**: add a `.github/workflows/deploy.yml` using
  [`withastro/action`](https://github.com/withastro/action), set `site` (and `base` if
  not using a custom domain) in `astro.config.mjs`, enable Pages in the repo settings.
- **Vercel/Netlify**: import the repo, framework preset "Astro", zero config needed.

Content drafted with `draft: true` in its frontmatter is only visible in `npm run dev`
(local), never in the production build -- safe to keep unfinished pieces in the repo.
