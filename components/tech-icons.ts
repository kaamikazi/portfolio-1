/**
 * Brand logos (as SVG paths) from the `simple-icons` package.
 * To add a logo: find the icon at https://simpleicons.org, import it below
 * (names look like `siSomething`) and add it to the `techIcons` map.
 * Then use its key as `icon` in data/site.ts.
 */
import {
  siAnthropic,
  siClaude,
  siGithub,
  siGooglegemini,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWhatsapp,
  type SimpleIcon,
} from "simple-icons";

export const techIcons: Record<string, SimpleIcon> = {
  anthropic: siAnthropic,
  claude: siClaude,
  github: siGithub,
  gemini: siGooglegemini,
  n8n: siN8n,
  nextjs: siNextdotjs,
  node: siNodedotjs,
  postgres: siPostgresql,
  python: siPython,
  react: siReact,
  stripe: siStripe,
  supabase: siSupabase,
  tailwind: siTailwindcss,
  typescript: siTypescript,
  vercel: siVercel,
  whatsapp: siWhatsapp,
};

/** Renders a brand logo by key. Returns nothing if the key is unknown. */
export function getIcon(key?: string): SimpleIcon | undefined {
  return key ? techIcons[key] : undefined;
}
