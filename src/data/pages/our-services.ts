import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";
import { serviceItems } from "@/data/service-items";

export const pageOurServices = {
  title: "Our services",
  meta: {
    title: "Our services",
    description:
      "We love our work and value every client. It is very important for us that you get exactly what you want.",
  },
  blocks: [
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "left",
          bgColor: "primary",
        },
        slogan:
          "<h3>Violet Real Estate is your Spanish real estate agency!</h3>",
        text: "<p>We love our work and value every client. It is very important for us that you get exactly what you want. Therefore, we offer only high-quality professional services.</p>",
      },
    },
    {
      blockName: "title-with-tiled-items",
      fields: {
        options: {
          cols: 4,
          firstLetterUppercase: true,
        },
        title: "4 high-quality<br/> professional services",
        items: serviceItems,
      },
    },
    onlineConsultation,
    joinUs,
    onlineServices,
    banners,
  ],
};
