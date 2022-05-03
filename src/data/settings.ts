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
  location: "Campus de Guadalmina 29069 Marbella",
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
        url: "#",
      },
      {
        id: 4,
        title: "Reviews",
        url: "#",
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
        url: "#",
      },
      {
        id: 8,
        title: "Buying land in Marbella",
        url: "#",
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
        url: "#",
      },
      {
        id: 11,
        title: "Real estate price",
        url: "#",
      },
      {
        id: 12,
        title: "We guarantee",
        url: "#",
      },
      {
        id: 13,
        title: "Reasons to cooperate with us",
        url: "#",
      },
    ],
  },
  { id: 14, title: "Blog", url: "/blog" },
  { id: 15, title: "Contacts", url: "/contacts" },
];
