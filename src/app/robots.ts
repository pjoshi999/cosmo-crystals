import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api",
          "/profile",
          "/forgot-password",
          "/reset-password",
          "/home",
        ],
      },
    ],
    sitemap: "https://www.cosmocrystals.com/sitemap.xml",
  };
}
