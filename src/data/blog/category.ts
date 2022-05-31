import {
  banners,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";
import { blogEntries } from "@/data/blog/entries";

export const blogCategory = {
  title: "Blog",
  description: "",
  meta: {
    title: "Blog",
    description: "",
    keywords: "",
  },
  entries: blogEntries,
  blocks: [
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
