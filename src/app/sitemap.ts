import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mindrasolutions.com";
  return [
    { url: base,             lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/axia`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/join`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/aura`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/nexa`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/manifesto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
