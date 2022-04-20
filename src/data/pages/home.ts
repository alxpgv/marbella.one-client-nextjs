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
  listIdealHome: {
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
};
