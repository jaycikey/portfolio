# Portfolio — jayck.dev

IDE/VS Code-inspired developer portfolio for Kostiantyn (CJ) Kulzhynskyi.
Field Technician at Comcast transitioning into DevOps / Cloud Infrastructure.

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS
- React Router v6
- No runtime deps beyond React + Router

## Requirements

- Node >= 18
- npm >= 9

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
npm run format
npm run typecheck
```

## Where to edit content

All portfolio content lives in `src/data/`. Components are presentation-only —
they pull from data and render. To change what appears on the site, edit data
files. You should rarely need to touch components.

### Single source of truth

| What you want to change | File |
|---|---|
| Your name, role, bio, handles, social URLs, skills, "open to" list, hello-page bylines | `src/data/profile.ts` |
| Top navigation tabs (add / remove / rename) | `src/data/tabs.ts` |
| About-me sidebar sections (personal-info, certifications, contacts) | `src/data/about-sections.ts` |
| Interests grid (the 6 cards on `/_about-me` → interests) | `src/data/interests.ts` |
| Education timeline (`/_about-me` → education) | `src/data/education.ts` |
| Certification roadmap (`/_about-me` → cert-roadmap.md) | `src/data/certs.ts` |
| Hero code snippet — metadata (filename, GitHub URL, byline, badges) | `src/data/snippet-meta.ts` |
| Hero code snippet — actual code body (hand-tokenized, do not regenerate) | `src/data/snippet.ts` |
| Projects list (`/_projects` view) | `src/data/projects.ts` |
| Home-lab entries (`/_home-lab` view) | `src/data/home-lab.ts` |
| Contact files (`/_contact-me` view) | `src/data/contact-files.ts` |
| Color palette | `src/theme/colors.ts` + `tailwind.config.ts` (keep both in sync) |
| Syntax-highlighter language rules | `src/lib/syntax.tsx` |

### Identity URLs are derived

Your handles live in `src/data/profile.ts` as `const`s at the top of the file:

```ts
const githubHandle = 'jaycikey';
const twitterHandle = 'jaycikey';
const linkedinSlug = 'kostiantyn-kulzhynskyi';
const websiteDomain = 'jayck.dev';
```

Full URLs (`profile.socials.github`, `profile.socials.linkedin`, etc.) are
built from these. **Never hardcode a social URL anywhere else** — change the
slug in `profile.ts` and every component picks it up automatically.

The same handles also drive the display-form contact strings
(`profile.contacts.github` = `'github.com/jaycikey'`, used as visible labels).

### Adding a new project

1. Open `src/data/projects.ts`
2. Append a new entry to the `projects` array (copy an existing one as a template)
3. That's it — the projects sidebar, file tabs, and editor all pick it up

Same pattern for `home-lab.ts`, `contact-files.ts`, `certs.ts`, `interests.ts`, `education.ts`.

### Adding a new top-level tab

1. Open `src/data/tabs.ts` — add an entry to `navTabs`
2. Open `src/App.tsx` — add a `<Route>` and a corresponding `useFileTabs()` instance
3. If the tab needs a sidebar, add a new branch to `src/components/layout/Sidebar.tsx`
4. Build the view component under `src/components/<your-tab>/`

### What lives where (architecture)

```
src/
├── data/         ← All editable content. Edit here.
├── types/        ← TypeScript shapes for everything in data/
├── theme/        ← Color tokens (mirrored in tailwind.config.ts)
├── lib/          ← Pure helpers (syntax highlighter, className joiner)
├── hooks/        ← useFileTabs (tab + load state per view)
└── components/   ← Presentation only. Reads from data/, renders.
    ├── layout/       Top tabs, sidebar, status bar, mobile sheet
    ├── editor/       File loading, code rendering, breadcrumb
    ├── icons/        Inline SVG components
    ├── hello/        / view
    ├── about-me/     /_about-me view + its sub-content components
    ├── projects/     /_projects view
    ├── home-lab/     /_home-lab view
    └── contact/      /_contact-me view + form + find-me-also-in
```

## Static assets

- `public/favicon.svg` — site favicon
- `public/og-image.svg` — Open Graph source. **Manual step:** export this to
  `public/og-image.png` (1200×630) before deploying. The OG meta tags reference
  `/og-image.png`, since most platforms prefer PNG over SVG. Use any tool
  (Figma, Inkscape, `rsvg-convert`, etc.).
- `public/apple-touch-icon.png` — **Manual step:** generate from `favicon.svg`
  at 180×180 PNG and place here. Until you do, the Apple icon will 404 silently.
- `public/site.webmanifest`, `public/robots.txt`, `public/sitemap.xml` — served at root.

## Deployment (Vercel)

This is a static SPA. `vercel.json` includes a catch-all rewrite so deep
client-side routes like `/_about-me` work on refresh.

```bash
# From repo root, after `vercel link`:
vercel --prod
```

Or push to a Vercel-connected Git repo — the default framework preset (Vite)
will pick up `npm run build` → `dist/` automatically.

## Routing

Top tabs are real routes:

- `/` — Hello
- `/_about-me`
- `/_home-lab`
- `/_projects`
- `/_contact-me`

The last visited path is persisted to `localStorage["pf_path"]`. On a fresh
page load at `/`, the app redirects to that saved path (once per session) so
returning visitors land where they left off. Clicking the `_hello` tab during
the session always goes to `/` — the redirect only fires on initial load.
Files opened within a tab (the secondary tabs) are not persisted.

## Keyboard shortcuts

- `Cmd/Ctrl + K` — close active file tab
- `Cmd/Ctrl + Shift + K` — close all file tabs

## License

MIT — see [LICENSE](./LICENSE).

The code is open for learning and reference. Personal content (bio, name, photos, experience details) belongs to Kostiantyn Kulzhynskyi. If you want to use this layout for your own portfolio, please **substantially personalize** it — don't deploy a copy with my name still in it.

If you fork or build something cool on top of this, I'd love to see it. Drop me a line at cj@jayck.dev.
