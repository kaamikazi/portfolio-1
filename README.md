# Imran: SaaS MVP Developer portfolio

A fast, one-page portfolio for winning Fiverr clients. Built with **Next.js (App Router)** and **Tailwind CSS**. It's fully static (no database) and deploys to Vercel for free.

**Features:** mobile-first layout, a Light / Dark switch in the header (visitors pick their mode and it is remembered; until then it follows their device setting), subtle scroll animations (turned off for people who prefer reduced motion), SEO meta tags, an auto-generated social preview image, `sitemap.xml` and `robots.txt`.

---

## Run it locally

You need **Node.js 20 or newer**. Check with `node -v`; if it's missing, install the LTS version from <https://nodejs.org>.

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server
npm run dev
```

Open <http://localhost:3000>. The page reloads automatically when you save a file.

Other useful commands:

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run build`     | Builds the production version (run this before deploying to catch errors) |
| `npm start`         | Serves the production build locally               |
| `npm run lint`      | Checks the code for common mistakes               |
| `npm run typecheck` | Checks TypeScript types                           |

---

## Edit your content

You should almost never need to touch the components. All the text lives in two files:

| File               | What's in it                                                     |
| ------------------ | ---------------------------------------------------------------- |
| `data/projects.ts` | **Your projects.** Add, remove or reorder projects here only.    |
| `data/site.ts`     | Your name, links, email, services, process steps and tech stack. |

### Add a project

1. Open `data/projects.ts`.
2. Copy one of the `{ ... }` blocks inside the `projects` list and paste it where you want it to appear.
3. Change the title, problem, stack, features and links.
4. (Optional) Add a screenshot: put the image in `public/projects/`, e.g. `public/projects/my-app.webp`, and set
   `media: { type: "image", src: "/projects/my-app.webp", alt: "What the screenshot shows" }`.
   For a video, use `media: { type: "video", src: "/projects/my-app.mp4" }`.
   Leave `media` out and the card shows a tidy placeholder.

Labels are kept honest: each project is marked `"Demo"`, `"Personal product"` or `"Client project"`.

### Walkthrough videos

Each project card has a **Watch walkthrough** button that plays a short screen recording in a pop-up. The videos live in `public/walkthroughs/` (an `.mp4`, a `.webm` copy for extra browser support, and a poster image). Point a project at its video with the `walkthrough` field in `data/projects.ts`. When you add a real `liveUrl`, a **Live demo** button appears next to it.

### Fiverr gig links

Each service in `data/site.ts` has a `fiverrGigUrl`. Paste the URL of the matching gig there. Until you do, that service's "Order on Fiverr" button links to your Fiverr profile, so it never breaks.

### Placeholders (`TODO_...`)

Any value starting with `TODO` counts as "not filled in yet". The site still works: a TODO live-demo link is hidden (the walkthrough is shown instead), a TODO gig link falls back to your profile, and a TODO price is simply hidden. Search the `data/` folder for `TODO` to find them all.

### Change colors or fonts

- Colors are at the top of `app/globals.css` (light mode under `:root`, dark mode under `.dark`).
- Fonts are loaded in `app/layout.tsx`.

---

## Deploy to Vercel

1. **Push this project to GitHub** (it's already a git repo):
   ```bash
   git add -A
   git commit -m "Update portfolio"
   git push
   ```
2. Go to <https://vercel.com>, sign in with GitHub, then click **Add New… → Project**.
3. Pick this repository and click **Import**. Vercel detects Next.js automatically, so leave all settings at their defaults.
4. Click **Deploy**. After about a minute you get a live URL like `https://your-project.vercel.app`.
5. **Set your site URL** so search engines and link previews use the right address. Either:
   - replace `url: "TODO_SITE_URL"` in `data/site.ts` with your live URL, **or**
   - in Vercel go to **Project → Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`, then redeploy.

   (If you do neither, the site falls back to the Vercel production URL automatically.)
6. *(Optional)* Add your own domain in **Project → Settings → Domains**.

From then on, every `git push` to the main branch redeploys the site automatically.

---

## Project structure

```
app/
  layout.tsx            Fonts, SEO tags, theme provider (wraps every page)
  page.tsx              The one page: puts the sections in order
  globals.css           Colors, base styles and animations
  opengraph-image.tsx   Generates the social preview image
  icon.svg              Browser tab icon
  robots.ts, sitemap.ts SEO files
components/             One file per section (hero, projects, services...) plus small helpers
data/
  projects.ts           ← your projects
  site.ts               ← everything else you'll want to edit
lib/utils.ts            Small helpers (TODO detection, site URL)
public/projects/        Project screenshots
```

## About the screenshots

The screenshots in `public/projects/` and the videos in `public/walkthroughs/` were captured from the real apps running locally with **sample data** (made-up names and numbers), not real customer data.
