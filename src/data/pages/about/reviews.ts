import {
  banners,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";
import { reviewsItems } from "@/data/reviews";

export const pageReviews = {
  title: "Reviews",
  meta: {
    title: "Reviews",
    description: "We do our best to make your dreams come true!",
  },
  blocks: [
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "left",
          bgColor: "primary",
        },
        slogan: "<h3>We do our best to make your dreams come true!</h3>",
        text: "<p>It is important for us to know that we are doing everything right. That is why we continue to collect your opinions about our work.</p><p>Thank you for every kind word addressed to Violet Real Estate!</p>",
      },
    },
    {
      blockName: "last-review",
      fields: {
        options: {
          count: 6,
          onDemandLoading: true,
        },
        title: "Our clients",
        items: reviewsItems,
      },
    },
    {
      blockName: "contact-us",
      fields: {
        title: "Do you want to buy a property in Marbella?<br />Contact us!",
      },
    },
    onlineServices,
    banners,
    onlineConsultation,
  ],
};
