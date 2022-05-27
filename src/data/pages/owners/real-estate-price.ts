import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";

export const pageRealEstatePrice = {
  title: "Real estate price",
  meta: {
    title: "Real estate price",
    description: "What affects the price of real estate?",
  },
  blocks: [
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "left",
          bgColor: "primary",
        },
        slogan: "<h3>What affects the price of real estate?</h3>",
        text: "<p>The price depends on whether the buyer agrees to the deal or refuses. Ideally, the cost should not be overpriced or understated. Too high will repel and the potential buyer will go to another seller. And if the cost is understated, doubts and suspicions will appear, which can also scare away the buyer of the house/apartment.</p>",
      },
    },
    {
      blockName: "title-with-tiled-items",
      fields: {
        options: {
          cols: 3,
        },
        title: "Here are the main factors that will influence price formation:",
        items: [
          {
            id: 1,
            title: "Location",
            text: "A beautiful house on the beach, close to developed infrastructure, with good transport links will cost more",
            icon: "marker",
          },
          {
            id: 2,
            title: "Area",
            text: "In this case, the formation of the price will be influenced by the total area, as well as the number of rooms, the presence of a pool, a terrace and other additional amenities",
            icon: "payment-receipt",
          },
          {
            id: 3,
            title: "Year of construction",
            text: "Newer the house, the higher, of course, the price will be",
            icon: "company",
          },
          {
            id: 4,
            title: "Condition of the house",
            text: "Real estate in perfect condition always sells for a higher price",
            icon: "cash",
          },
          {
            id: 5,
            title: null,
            text: "Do not rush to set a price, as ill-considered steps can lead to failure. It is better to seek help from professionals who will help you form the ideal value of your property, and therefore, get closer to the desired deal",
            icon: "checkmark-shield",
            variant: "dark",
            button: {
              as: "modal",
              modalView: "ONLINE_CONSULTATION",
              text: "Online Consultation",
            },
          },
        ],
      },
    },
    onlineConsultation,
    joinUs,
    onlineServices,
    banners,
  ],
};
