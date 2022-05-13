import {
  banners,
  joinUs,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";
import { blogItems } from "@/data/pages/blog/blogs";

export const blogMain = {
  title: "Blog",
  description: "",
  meta: {
    title: "Blog",
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "last-blog-items",
      fields: {
        items: blogItems,
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
    joinUs,
  ],
};
