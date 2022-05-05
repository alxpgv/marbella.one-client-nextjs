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
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "slogan-with-text",
      fields: {
        title: "Violet Real Estate is your Spanish real estate agency!",
        text: "We love our work and value every client. It is very important for us that you get exactly what you want. Therefore, we offer only high-quality professional services.",
      },
    },
    {
      blockName: "service-list-tiled",
      fields: {
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
