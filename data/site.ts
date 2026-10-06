/**
 * ============================================================================
 *  SITE CONTENT — your name, links, services, process steps and tech stack
 * ============================================================================
 *
 * Projects live in `data/projects.ts`. Everything else that is text on the
 * page lives here, so you rarely need to touch the components.
 *
 * Any value starting with "TODO" is a placeholder you still need to fill in.
 */

export const site = {
  /** Your name as shown in the header, title and footer. */
  name: "Imran",
  /** Short role line used in the browser tab and social previews. */
  role: "SaaS MVP Developer",

  /**
   * The public URL of this site once deployed (e.g. "https://imran.dev").
   * Used for SEO and social previews. You can also set the
   * NEXT_PUBLIC_SITE_URL environment variable on Vercel instead.
   */
  url: "TODO_SITE_URL",

  /** Text for Google results and link previews (aim for ~155 characters). */
  description:
    "I build SaaS MVPs for founders with Next.js, Supabase, Stripe and AI: auth, multi-tenant data, billing and AI features, done properly and shipped fast.",

  links: {
    /** Your Fiverr profile. Used by the main "Hire me" buttons. */
    fiverr: "https://www.fiverr.com/imranahmed847",
    /** The name clients see on Fiverr. The hero introduces you as "Imran — known as Itto on Fiverr". */
    fiverrName: "Itto",
    github: "https://github.com/kaamikazi",
    githubName: "kaamikazi",
    /** Your public contact email. */
    email: "imranahmedromim10@gmail.com",
  },
};

/* --------------------------------------------------------------------------
 * SERVICES — the three packages shown in the "Services" section
 * ------------------------------------------------------------------------ */

export type Service = {
  name: string;
  /** One line: who this package is for. */
  forWho: string;
  /** What the client receives. */
  includes: string[];
  /** e.g. "From $500". Leave as "TODO_PRICE" to hide it. */
  price: string;
  /** e.g. "2–3 weeks". Leave as "TODO_DELIVERY" to hide it. */
  delivery: string;
  /**
   * The Fiverr gig for THIS package (copy the URL from your gig page).
   * While it's still "TODO_FIVERR_GIG_URL", the button links to your Fiverr profile instead.
   */
  fiverrGigUrl: string;
  /** Highlight one package to draw the eye. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: "SaaS MVP build",
    forWho: "You have an idea and need a real product users can sign up for and pay for.",
    includes: [
      "Next.js app with sign-up, login and user accounts",
      "Supabase database with secure, per-user (or per-team) data access",
      "Your core feature set, scoped together before we start",
      "Stripe payments or subscriptions if needed",
      "Deployed live on Vercel, with full source code in your GitHub",
      "A short handover doc: how to run, change and deploy it",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "TODO_FIVERR_GIG_URL", // your "SaaS MVP" gig
    featured: true,
  },
  {
    name: "AI feature integration",
    forWho: "You already have an app and want AI that's genuinely useful, not a gimmick.",
    includes: [
      "Chat assistant, summaries, extraction or classification with Claude, Gemini or GPT",
      "AI that only sees the data each user is allowed to see",
      "Streaming responses and a clean chat or inline UI",
      "Usage limits per user or plan to protect your API bill",
      "Prompts and settings you can tweak without a developer",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "TODO_FIVERR_GIG_URL", // your "AI integration" gig
  },
  {
    name: "Stripe billing setup",
    forWho: "You need to start charging customers without billing bugs.",
    includes: [
      "Stripe Checkout and Customer Portal for plans and upgrades",
      "Webhooks that keep your database in sync with Stripe",
      "Free vs paid plan limits enforced in your app",
      "Test-mode walkthrough so you can see every flow before going live",
      "Clear notes on going live with real payments",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "TODO_FIVERR_GIG_URL", // your "Stripe billing" gig
  },
];

/* --------------------------------------------------------------------------
 * PROCESS — four steps from brief to delivery
 * ------------------------------------------------------------------------ */

export const processSteps = [
  {
    title: "Brief",
    text: "You message me on Fiverr with your idea. We agree on the must-have features for version one and what can wait.",
  },
  {
    title: "Plan",
    text: "I map out the pages, the data and the user roles, then confirm scope, price and timeline before any code is written.",
  },
  {
    title: "Build",
    text: "I build in small steps and share a live preview link, so you can click through progress and give feedback as we go.",
  },
  {
    title: "Deliver",
    text: "Your app goes live on Vercel. You get the full source code, a handover doc and a walkthrough of how everything works.",
  },
];

/* --------------------------------------------------------------------------
 * TECH STACK — shown as logo badges
 * `icon` must match a key in `components/tech-icons.ts`. If it doesn't, the
 * badge simply shows the name without a logo, so it never breaks.
 * ------------------------------------------------------------------------ */

export const techStack: { name: string; icon?: string; group: string }[] = [
  { name: "Next.js", icon: "nextjs", group: "Frontend" },
  { name: "React", icon: "react", group: "Frontend" },
  { name: "TypeScript", icon: "typescript", group: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", group: "Frontend" },
  { name: "Supabase", icon: "supabase", group: "Backend" },
  { name: "PostgreSQL", icon: "postgres", group: "Backend" },
  { name: "Node.js", icon: "node", group: "Backend" },
  { name: "Python", icon: "python", group: "Backend" },
  { name: "Stripe", icon: "stripe", group: "Payments" },
  { name: "Claude", icon: "claude", group: "AI" },
  { name: "Gemini", icon: "gemini", group: "AI" },
  { name: "OpenAI", group: "AI" },
  { name: "Vercel", icon: "vercel", group: "Deploy" },
  { name: "GitHub", icon: "github", group: "Deploy" },
];
