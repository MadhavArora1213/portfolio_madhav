# Madhav Arora — Cinematic Portfolio

A scroll-driven personal portfolio: a cinematic hero, typography that breaks apart
like a puzzle, an interactive About Me, a **hidden** Selected Works chapter entered
through a black flash, two mouse-tracking 3D robots, and an editorial closing.

Built with plain HTML, CSS and JavaScript — **no framework, no build step, no dependencies.**

| | |
| --- | --- |
| **Live site** | <https://madhavarora1213.github.io/portfolio_madhav/> |
| **Source** | <https://github.com/MadhavArora1213/portfolio_madhav> |
| **Step-by-step guide** | [GUIDE.md](GUIDE.md) — every chapter explained, in the order you experience it |
| **Contact** | madhavarora132005@gmail.com · [GitHub](https://github.com/MadhavArora1213) · [LinkedIn](https://www.linkedin.com/in/madhav-arora-32b056254) |

---

## The flow

| # | Chapter | Driven by |
| --- | --- | --- |
| 01 | **Hero** — darkness → red atmosphere → portrait revealed by light → eye glint → typography → notification | a timed entrance, then cursor parallax |
| 02 | **Where Code Meets Creative Thinking** — three lines rise through masks, labels pop from the centre | scroll (pinned, scrubbed) |
| — | **Puzzle transition** — the finished composition breaks into real clipped pieces of itself while About rises behind | scroll |
| 03 | **About Me** — three doors: Who I Am · What I Do · How I Think | click |
| 04 | **Selected Works** — a hidden overlay (never revealed by scrolling) with a 3D camera dolly through full-screen project stages | click, then scroll |
| 05 | **The Mind** — the large robot on black, head tracking your cursor, glass idea panels flying past | mouse + scroll |
| 06 | **Code is my medium** — statement enters from the left, skills arrive from the right one at a time | scroll (pinned, scrubbed) |
| 07 | **Still curious** — a minimal chapter, the small robot following the cursor | mouse |
| 08 | **Footer** — contact, link columns, back to top | scroll |

Every scroll animation is scrubbed: stop and it stops, scroll back and it reverses exactly.

---

## Featured work

| Project | What it is | Year |
| --- | --- | --- |
| [Grizon AI Platform](https://app.grizonai.com/) | Multi-agent AI platform — document chat, RAG-powered search, agents that handle multi-step work end to end | 2026 |
| [AdmissionSeason](https://admissionseason.com/) | College discovery — search, compare and shortlist colleges, predict admission chances | 2025 |
| [Catelog](https://agentic-marketplace-chi.vercel.app/) | Marketplace for AI agents — MCP-native discovery, hire & pay-per-run | 2026 |
| [Wolf Nutrition](https://www.wolfnutrition.store/) | Ayurvedic wellness store — curated bundles, prepaid checkout, WhatsApp order support | 2025 |
| [CT VMS](https://play.google.com/store/apps/details?id=com.ctgroup.gatepassapp&hl=en_IN) | Campus visitor gate-pass system — 8+ role access control, live entry records, Raspberry Pi gates | 2025 |

---

## Run it

No install, no build.

**Option A — double-click.** Open `index.html` in a browser. Everything works,
including both 3D robots.

**Option B — local server** (closer to production; recommended while editing):

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

> After changing CSS or JS, hard-refresh with `Ctrl+Shift+R`. The asset links carry a
> `?v=` number in `index.html` — bump it after a breaking change so returning visitors
> get the new files.

---

## Project structure

```
index.html      structure of every chapter
styles.css      all presentation, in numbered sections
script.js       all behaviour, in numbered modules
content.js      ALL text and project data — edit here first
assets/         images and the 3D scene the site loads
references/     the design references this build follows (not part of the site)
GUIDE.md        the full step-by-step guide
```

The numbering in `styles.css` and `script.js` lines up with the chapters above, so a
section in one file has an obvious counterpart in the other.

---

## Editing the content

Open `content.js`. Every chapter has its own object:

| Key | Chapter |
| --- | --- |
| `nav`, `cta`, `headline`, `role`, `meta`, `notification` | Hero |
| `section2` | Creative section |
| `about` | About Me doors and detail layers |
| `works` | Selected Works projects |
| `bigRobot` | Big robot copy + the two idea panels |
| `editorial` | "Code is my medium" — skills, mindset, exploring, ending |
| `smallRobot` | Small robot copy |
| `footer` | Contact, link columns, legal line |

Change the strings, save, refresh — no animation code is involved.

### Adding a project

1. Drop the image into `assets/`.
2. Add an entry to `works.projects`:

```js
{
  key: "myproject",
  name: "MyProject",
  img: "assets/myproject.jpg",
  w: 1200, h: 800,          // real pixel size — prevents layout shift
  cat: "SaaS · Web",
  year: "2026",
  accent: "#4da3ff",        // colours the number, dot and button
  url: "https://…",         // optional — opens live site; omit for the local detail overlay
  title: "One line about what it is"
}
```

That's all — the Works stage builds itself and the scroll length adjusts.

---

## QA shortcuts

Append these to the URL to jump straight to a moment:

| URL | Shows |
| --- | --- |
| `?at=3280` | the hero's eye glint, frozen |
| `?at=8000` | the hero settled |
| `?s2p=1` | the creative section completed |
| `?s3t=0.35` | mid puzzle break-up |
| `?s3t=1` | About Me locked in |
| `?wk=1` | Selected Works, opened directly |

`window.__rbBig` and `window.__rbSmall` expose each robot's scene in the console.

---

## Behaviour

- **Responsive** — every chapter is recomposed for tablet and phone, not merely scaled down.
- **Reduced motion** — `prefers-reduced-motion` gives a calm, static, fully readable version.
- **Touch** — cursor-only interactions fall back to tap and drag.
- **No JS** — the composed hero still renders.
- **Performance** — `transform`/`opacity` animation only, 3D that lazy-loads and pauses
  off-screen, declared image dimensions so nothing shifts while loading.

---

## Publishing

The site is static, so anything that serves files will host it.

**GitHub Pages:** repository → **Settings → Pages** → Source: *Deploy from a branch* →
branch `main`, folder `/ (root)` → **Save**. Live at
`https://madhavarora1213.github.io/portfolio_madhav/` after a minute.

**Netlify / Vercel / Cloudflare Pages:** connect the repository. No build command,
no output directory — publish the root.

---

## Credits

- 3D robots built in [Spline](https://spline.design)
- Type: Anton, Archivo and Inter via [Google Fonts](https://fonts.google.com)
- Everything else is hand-written for this site

© 2026 Madhav Arora
