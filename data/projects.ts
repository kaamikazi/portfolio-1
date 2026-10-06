/**
 * ============================================================================
 *  PROJECTS — the only file you need to edit to add, remove or change a project
 * ============================================================================
 *
 * How to add a new project:
 *   1. Copy one of the objects in the `projects` array below.
 *   2. Paste it where you want it to appear (the order here = the order on the page).
 *   3. Change the text, links and stack. Save. Done.
 *
 * Placeholders:
 *   Any value that starts with "TODO" is treated as "not filled in yet".
 *   The page will still work: buttons with a TODO link show as a greyed-out
 *   "coming soon" button instead of a broken link. Search this file for
 *   "TODO" to find everything you still need to fill in.
 *
 * Screenshots / videos:
 *   Put the file in `public/projects/` (for example `public/projects/my-app.png`)
 *   and point `media.src` at it WITHOUT the "public" part:
 *     media: { type: "image", src: "/projects/my-app.png", alt: "..." }
 *   For a video use:
 *     media: { type: "video", src: "/projects/my-app.mp4", poster: "/projects/my-app.png" }
 *   Leave `media` out entirely and the card shows a neat placeholder instead.
 *   Best size for screenshots: 1600 x 1000 pixels (16:10).
 */

/**
 * The honest label shown on each card. Pick the one that is true:
 *   - "Demo"             → built to show what you can do (no real client).
 *   - "Personal product" → your own product (beta or live).
 *   - "Client project"   → built for a real paying client.
 */
export type ProjectLabel = "Demo" | "Personal product" | "Client project";

/** A screenshot or a short demo video for the project card. */
export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

export type Project = {
  /** Short unique id, lowercase with dashes. Used for links and keys. */
  slug: string;
  /** Project name shown as the card title. */
  title: string;
  /** Optional small line under the title (e.g. what kind of app it is). */
  kind?: string;
  /** Honest label: see `ProjectLabel` above. */
  label: ProjectLabel;
  /** ONE line: the problem this project solves, written for a founder. */
  problem: string;
  /** Technologies used. Shown as small badges. */
  stack: string[];
  /** 3–5 key features. Keep each one short. */
  features: string[];
  /** Live demo link. Use "TODO_LIVE_URL" until you have one, or delete the line to hide the button. */
  liveUrl?: string;
  /** GitHub repository link. Delete the line to hide the button (e.g. private client code). */
  githubUrl?: string;
  /** Screenshot or video. Leave out to show a placeholder. */
  media?: ProjectMedia;
};

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  // 1. Multi-tenant AI SaaS (TenantFlow)
  // --------------------------------------------------------------------------
  {
    slug: "tenantflow",
    title: "TenantFlow",
    kind: "Multi-tenant AI SaaS starter",
    label: "Demo",
    problem:
      "Lets many companies share one app while each sees only its own data, with roles, AI and paid plans built in from day one.",
    stack: ["Next.js", "TypeScript", "Supabase", "Postgres RLS", "Stripe", "Gemini", "Tailwind CSS"],
    features: [
      "Tenant isolation enforced in the database with Row Level Security",
      "Owner / admin / member roles with invites and permission checks",
      "AI chatbot that answers questions about the workspace, scoped to the user's own access",
      "Stripe subscriptions with plan limits on seats and AI usage",
      "Lead scoring and a public booking page that can't double-book",
    ],
    liveUrl: "TODO_LIVE_URL",
    githubUrl: "https://github.com/kaamikazi/Multi-tenant-B",
    media: {
      type: "image",
      src: "/projects/tenantflow.webp",
      alt: "TenantFlow leads page ranking leads by score, with the reason for each score",
    },
  },

  // --------------------------------------------------------------------------
  // 2. BreakupOS
  // --------------------------------------------------------------------------
  {
    slug: "breakupos",
    title: "BreakupOS",
    kind: "AI relationship & dating app",
    label: "Personal product",
    problem:
      "Turns messy dating situations into clear, private data, with an AI advisor that helps people decide what to do next.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API", "Tailwind CSS"],
    features: [
      "AI advisor and conversation analyzer for mixed signals and red flags",
      "Private relationship tracker with no-contact recovery mode and analytics",
      "Dating profiles, discovery, matches and realtime chat with block/report",
      "Photo-only social feed with community verdicts and rankings",
      "Credit wallet and rate limiting to keep AI costs under control",
    ],
    liveUrl: "TODO_LIVE_URL",
    githubUrl: "https://github.com/kaamikazi/breakupos",
    media: {
      type: "image",
      src: "/projects/breakupos.webp",
      alt: "BreakupOS analytics dashboard with pipeline funnel and vibe breakdown charts",
    },
  },

  // --------------------------------------------------------------------------
  // 3. Al Sadi Knitwear Factory OS
  // --------------------------------------------------------------------------
  {
    slug: "factory-os",
    title: "Al Sadi Knitwear Factory OS",
    kind: "Factory management app",
    // TODO: if this is running for a real factory/client, change to "Client project".
    label: "Demo",
    problem:
      "Replaces paper logs and scattered spreadsheets with one place to track a knitwear factory's production, staff, machines and costs.",
    stack: ["Python", "Streamlit", "SQLite", "Plotly", "Excel export", "Telegram Bot"],
    features: [
      "Daily production, expenses and attendance tracking with live dashboards",
      "Admin and staff roles with hashed passwords and an audit log",
      "Telegram bot so floor staff can submit records from their phone",
      "Automatic Excel workbook sync with protected sheets",
      "One-click backups and safe, validated restore",
    ],
    // This app runs locally, so there may be no public demo. Delete the next line to hide the button.
    liveUrl: "TODO_LIVE_URL",
    githubUrl: "https://github.com/kaamikazi/Textile",
    media: {
      type: "image",
      src: "/projects/factory-os.webp",
      alt: "Factory OS operations dashboard with production value, profit and machine utilisation",
    },
  },
];
