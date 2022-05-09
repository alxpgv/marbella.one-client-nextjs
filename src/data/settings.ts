export const settings = {
  contact: {
    phone: "+34 608 281 712",
    email: "violet@marbella.one",
    socials: {
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    messengers: {
      whatsapp: "https://whatsapp.com",
      telegram: "https://web.telegram.org",
      viber: "https://www.viber.com",
    },
  },
  workMode: "Mo - So: 8:00-22:00",
  address: "Campos de Guadalmina 29069 Marbella",
  coordinates: [36.469447, -5.00314],
  defaultMeta: {
    title: "Violet Real Estate",
    description:
      "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
    keywords: "",
  },
};

export const mainMenu = [
  {
    id: 1,
    title: "About me",
    url: "/about",
    child: [
      {
        id: 3,
        title: "Our philosophy",
        url: "/#",
      },
      {
        id: 4,
        title: "Reviews",
        url: "/#",
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
