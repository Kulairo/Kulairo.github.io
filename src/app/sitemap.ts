export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { projects } from "@/content/site";
import { getSiteUrl } from "@/content/config";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin) return [];
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${origin}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
