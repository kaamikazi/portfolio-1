import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

// A one-page site has a one-line sitemap. Google reads this at /sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl(), lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
