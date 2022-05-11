import {
  onlineServices,
  banners,
  onlineConsultation,
  joinUs,
} from "@/data/static-blocks";
import { serviceItems } from "@/data/service-items";

export const pageHome = {
  title: "Violet Real Estate",
  meta: {
    title: "Violet Real Estate",
    description:
      "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
    keywords: "",
  },
  blocks: [
    {
      blockName: "home-promo",
      fields: {
        title: "We will find your dream home!",
        text: "Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!",
        image: {
          src: "/images/home/hero-house-min.jpg",
          alt: "We will find your dream home!",
          height: 1920,
          width: 1080,
        },
        services: serviceItems,
        button: {
          as: "online-consultation",
        },
      },
    },
    {
      blockName: "list-with-strict-image",
      fields: {
        text: "An ideal home is your personal fortress, in which it is safe and good in any weather in the shower and outside the window. Here is everything that was dreamed of in childhood. Every detail blends harmoniously with the interior and creates an environment with your character and your interests.",
        items: [
          "Home is not just a place where the whole family gathers in the evenings for a cup of tea.",
          "A house is not only a place where you can relax comfortably after working days.",
          "Home is not just cozy rooms that smell delicious and have favorite things.",
        ],
        image: {
          src: "/images/home/relax-min.jpg",
          alt: "An ideal home is your personal fortress",
          width: 740,
          height: 257,
        },
      },
    },
    {
      blockName: "image-with-overlap-text",
      fields: {
        image: {
          src: "/images/home/ideal-home-min.jpg",
          alt: "Dream of a perfect home",
          width: 760,
          height: 589,
        },
        title:
          "<h2>Do you already know what your ideal home will be? Draw it in your imagination?</h2>",
        text: "<p>Our real estate agency Violet Real Estate will help you make your dream of a perfect home come true!</p><p>We understand your desire to cross the threshold of such a house one day, and therefore we will do our best to make it a reality!</p>",
        button: {
          as: "link",
          href: "/#",
        },
      },
    },
    {
      blockName: "list-with-image",
      fields: {
        title: "We offer our clients",
        items: [
          "Buy an exclusive villa, townhouse or apartment in Spain",
          "Construction of houses on a turnkey basis",
          "Sell a villa, townhouse or apartment in Spain",
          "Rent a yacht or plane in Spain",
        ],
        image: {
          src: "/images/home/offer-clients-min.jpg",
          alt: "We offer our clients",
          width: 673,
          height: 506,
        },
      },
    },
    {
      blockName: "advantage-with-contact",
      fields: {
        title: "We are chosen for",
        items: [
          {
            id: 1,
            icon: "medal",
            title:
              "Professionalism and solid experience in the real estate market",
          },
          {
            id: 2,
            icon: "user-target",
            title: "Attention to each client, individual approach",
          },
          {
            id: 3,
            icon: "checkmark-round",
            title: "Responsibility and punctuality",
          },
          {
            id: 4,
            icon: "hand-good",
            title: "Guaranteed high quality work",
          },
        ],
      },
    },
    {
      blockName: "sale-consultation",
      fields: {
        title: "Find out the value of your property",
        subTitle: "Property For Sale",
        text: "Get a free consultation from our experts on the current market value of your property!",
      },
    },
    onlineServices,
    banners,
    onlineConsultation,
    joinUs,
  ],
};
