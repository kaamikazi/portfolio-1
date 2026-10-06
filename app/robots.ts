import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

// Tells search engines they may index the whole site, and where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
