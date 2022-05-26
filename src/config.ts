export const configSite = {
  siteUrl: process.env.SITE_URL,
  title: "Violet Real Estate",
  description:
    "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
  keywords: "",
  openGraph: {
    title: "Violet Real Estate",
    type: "website",
    locale: "en_US",
    description:
      "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
    site_name: "Violet Real Estate",
    url: process.env.SITE_URL,
    image: {
      url: "/images/violet-preview.jpg",
      width: "1192",
      height: "779",
      alt: "Violet Real Estate",
    },
  },
};
