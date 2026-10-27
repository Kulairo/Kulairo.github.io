export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/content/config";
export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl();
  return {
    rules: { userAgent: "*", ...(origin ? { allow: "/" } : { disallow: "/" }) },
    ...(origin ? { sitemap: `${origin}/sitemap.xml` } : {}),
  };
}
