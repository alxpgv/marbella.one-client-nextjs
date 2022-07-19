export const mainMenu = [
  {
    id: 1,
    label: "About me",
    type: "page",
    slug: "/about-me",
    child: [
      {
        id: 3,
        label: "Our philosophy",
        slug: "/about-me/our-philosophy",
      },
      {
        id: 4,
        label: "Reviews",
        slug: "/about-me/reviews",
      },
    ],
  },
  { id: 5, label: "Our services", slug: "/our-services", type: "page" },
  {
    id: 6,
    label: "Real Estate",
    slug: "/real-estate",
    type: "page",
    child: [
      {
        id: 7,
        label: "Buy luxury real estate",
        slug: "/real-estate/buy-luxury-real-estate",
      },
      {
        id: 8,
        label: "Buying land in Marbella",
        slug: "/real-estate/buying-land-in-marbella",
      },
    ],
  },
  {
    id: 9,
    label: "Owners",
    slug: "/owners",
    type: "page",
    child: [
      {
        id: 10,
        label: "Sell luxury real estate",
        slug: "/owners/sell-luxury-real-estate",
      },
      {
        id: 11,
        label: "Real estate price",
        slug: "/owners/real-estate-price",
      },
      {
        id: 12,
        label: "We guarantee",
        slug: "/owners/we-guarantee",
      },
      {
        id: 13,
        label: "Reasons to cooperate with us",
        slug: "/owners/reasons-to-cooperate",
      },
    ],
  },
  { id: 14, label: "Blog", slug: "/blog" },
  { id: 15, label: "Contacts", slug: "/contacts", type: "page" },
];

export const settings = {
  siteUrl: process.env.SITE_URL,
  contact: {
    phone: "+34 608 281 712",
    email: "violet@marbella.one",
    socials: [
      { label: "twitter", url: "https://twitter.com", icon: "twitter" },
      { label: "youtube", url: "https://youtube.com", icon: "youtube" },
      { label: "instagram", url: "https://instagram.com", icon: "instagram" },
      { label: "facebook", url: "https://facebook.com", icon: "facebook" },
    ],
    messengers: [
      {
        label: "whatsapp",
        url: "https://wa.me/+34608281712",
        icon: "whatsapp",
      },
      {
        label: "telegram",
        url: "https://telegram.me/VIOLET_REAL_ESTATE",
        icon: "telegram",
      },
      {
        label: "viber",
        url: "viber://chat?number=%2B34608281712",
        icon: "viber",
      },
    ],
    workMode: "Mo - So: 8:00-22:00",
    address: "Campos de Guadalmina 29069 Marbella",
    coordinates: [36.469447, -5.00314],
  },
  meta: {
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
  },
  mainMenu,
};
