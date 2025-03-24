import { apiClient } from "@/api/apiClient";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.cosmocrystals.com";

  const staticPages = [
    "",
    "about",
    "profile",
    "register",
    "login",
    "cart",
    "checkout",
    "forgot-password",
    "reset-password",
  ].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }));

  try {
    const { data } = await apiClient.get("/category/");

    const categoryPages = data?.categories.map(
      (category: { slug: string }) => ({
        url: `${baseUrl}/category/${category.slug}`,
        lastModified: new Date().toISOString(),
      })
    );

    return [...staticPages, ...categoryPages];
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return staticPages;
  }
}
