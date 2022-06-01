import { onlineConsultation } from "@/data/static-blocks";

export const pagePersonalData = {
  title: "Processing of personal data",
  meta: {
    title: "Processing of personal data",
    description: "",
  },
  blocks: [
    {
      blockName: "text",
      fields: {
        text: "<p>In progress...</p>",
      },
    },
    onlineConsultation,
  ],
};
