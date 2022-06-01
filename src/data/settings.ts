export const mainMenu = [
  {
    id: 1,
    title: "About me",
    url: "/about-me",
    child: [
      {
        id: 3,
        title: "Our philosophy",
        url: "/about-me/our-philosophy",
      },
      {
        id: 4,
        title: "Reviews",
        url: "/about-me/reviews",
      },
    ],
  },
  { id: 5, title: "Our services", url: "/our-services" },
  {
    id: 6,
    title: "Real Estate",
    url: "/real-estate",
    child: [
      {
        id: 7,
        title: "Buy luxury real estate",
        url: "/real-estate/buy-luxury-real-estate",
      },
      {
        id: 8,
        title: "Buying land in Marbella",
        url: "/real-estate/buying-land-in-marbella",
      },
    ],
  },
  {
    id: 9,
    title: "Owners",
    url: "/owners",
    child: [
      {
        id: 10,
        title: "Sell luxury real estate",
        url: "/owners/sell-luxury-real-estate",
      },
      {
        id: 11,
        title: "Real estate price",
        url: "/owners/real-estate-price",
      },
      {
        id: 12,
        title: "We guarantee",
        url: "/owners/we-guarantee",
      },
      {
        id: 13,
        title: "Reasons to cooperate with us",
        url: "/owners/reasons-to-cooperate",
      },
    ],
  },
  { id: 14, title: "Blog", url: "/blog" },
  { id: 15, title: "Contacts", url: "/contacts" },
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
