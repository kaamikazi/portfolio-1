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
 * SERVICES — one card per Fiverr gig, shown in the "Services" section
 * To add a gig: copy one block below, change the text and paste its gig link.
 * ------------------------------------------------------------------------ */

export type Service = {
  name: string;
  /** One line: who this service is for. */
  forWho: string;
  /** What the client receives. */
  includes: string[];
  /** e.g. "From $500". Leave as "TODO_PRICE" to hide it. */
  price: string;
  /** e.g. "2–3 weeks". Leave as "TODO_DELIVERY" to hide it. */
  delivery: string;
  /**
   * The Fiverr gig for THIS service (the share link from your gig page).
   * While it's "TODO_FIVERR_GIG_URL", the button links to your Fiverr profile instead.
   */
  fiverrGigUrl: string;
  /** Highlight one service to draw the eye. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    // Gig: "I will build your saas mvp with nextjs, supabase, stripe and ai"
    name: "SaaS MVP build",
    forWho: "You have an idea and need a real product users can sign up for and pay for.",
    includes: [
      "Next.js app with sign-up, login and user accounts",
      "Supabase database with secure, per-user (or per-team) data access",
      "Your core feature set, scoped together before we start",
      "Stripe payments or subscriptions, plus AI features if needed",
      "Deployed live on Vercel, with full source code in your GitHub",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "https://www.fiverr.com/s/p33w4RG",
    featured: true,
  },
  {
    // Gig: "I will build a custom web app, dashboard, or admin panel for your business"
    name: "Custom web app & dashboards",
    forWho: "You need a tool to run your business: a dashboard, an admin panel or a custom web app.",
    includes: [
      "Dashboards with the charts and numbers you check every day",
      "Admin panel to manage users, orders or records",
      "Roles so each person only sees and edits what they should",
      "CSV or Excel exports for your reports",
      "Deployed and ready to use, with full source code",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "https://www.fiverr.com/s/AGGpjxB",
  },
  {
    // Gig: "I will build an ai receptionist chatbot with n8n and whatsapp automation"
    name: "AI receptionist chatbot",
    forWho: "You want customers answered on WhatsApp around the clock, without hiring more staff.",
    includes: [
      "AI assistant trained on your business: services, prices, hours and FAQs",
      "Connected to WhatsApp so customers chat where they already are",
      "n8n automations, such as saving leads or alerting you about new enquiries",
      "Hands the conversation to a person when it should",
      "Answers you can update yourself, without a developer",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "https://www.fiverr.com/s/r33da70",
  },
  {
    // Gig: "I will fix react, nextjs typescript supabase and vercel bugs"
    name: "Bug fixing",
    forWho: "Your React or Next.js app is broken, throwing errors or won't deploy.",
    includes: [
      "React, Next.js and TypeScript errors found and fixed at the root cause",
      "Supabase auth, database and Row Level Security problems solved",
      "Vercel build and deployment failures sorted out",
      "A short note on what was wrong and what changed",
    ],
    price: "TODO_PRICE",
    delivery: "TODO_DELIVERY",
    fiverrGigUrl: "https://www.fiverr.com/s/zAAr5eo",
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
  { name: "n8n", icon: "n8n", group: "Automation" },
  { name: "WhatsApp", icon: "whatsapp", group: "Automation" },
  { name: "Vercel", icon: "vercel", group: "Deploy" },
  { name: "GitHub", icon: "github", group: "Deploy" },
];
