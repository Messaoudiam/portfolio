import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codingmessaoud.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
    },
  ];
}
