import { serviceItems } from "@/data/pages/blocks/services";

export const home = {
  promo: {
    title: "We will find your dream home!",
    text: "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
    image: {
      url: "/images/home/hero-house-min.jpg",
      alt: "",
      height: 1920,
      width: 1080,
    },
    services: serviceItems,
  },
  listIdeal: {
    text: "An ideal home is your personal fortress, in which it is safe and good in any weather in the shower and outside the window. Here is everything that was dreamed of in childhood. Every detail blends harmoniously with the interior and creates an environment with your character and your interests.",
    listItems: [
      "Home is not just a place where the whole family gathers in the evenings for a cup of tea.",
      "A house is not only a place where you can relax comfortably after working days.",
      "Home is not just cozy rooms that smell delicious and have favorite things.",
    ],
    image: {
      url: "/images/home/relax-min.jpg",
      alt: "An ideal home is your personal fortress",
      width: 740,
      height: 257,
    },
  },
  dreamPerfect: {
    image: {
      url: "/images/home/ideal-home-min.jpg",
      alt: "Dream of a perfect home",
      width: 760,
      height: 589,
    },
    title:
      "Do you already know what your ideal home will be? Draw it in your imagination?",
    text: "<p>Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!</p><p>We understand your desire to cross the threshold of such a house one day, and therefore we will do our best to make it a reality!</p>",
  },
  clientOffer: {
    title: "We offer our clients",
    listItems: [
      "Buy an exclusive villa, townhouse or apartment in Spain",
      "Construction of houses on a turnkey basis",
      "Sell a villa, townhouse or apartment in Spain",
      "Rent a yacht or plane in Spain",
    ],
    image: {
      url: "/images/home/offer-clients-min.jpg",
      alt: "We offer our clients",
      width: 673,
      height: 506,
    },
  },
  advantages: {
    title: "We are chosen for",
    items: [
      {
        id: 1,
        icon: "award",
        title: "Professionalism and solid experience in the real estate market",
      },
      {
        id: 2,
        icon: "targetuser",
        title: "Attention to each client, individual approach",
      },
      {
        id: 3,
        icon: "checkmark",
        title: "Responsibility and punctuality",
      },
      {
        id: 4,
        icon: "handgood",
        title: "Guaranteed high quality work",
      },
    ],
  },
  saleConsultation: {
    title: "Find out the value of your property",
    subTitle: "Property For Sale",
    text: "Get a free consultation from our experts on the current market value of your property!",
  },
};
