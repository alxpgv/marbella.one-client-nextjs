import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";

export const pageWeGuarantee = {
  title: "We guarantee",
  meta: {
    title: "We guarantee",
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "slogan-with-text-extend",
      fields: {
        cols: [
          {
            title:
              "Working with us is easy, pleasant, and most importantly - effective!",
          },
          {
            text: "Our real estate agency guarantees each client quality services and support at all stages of cooperation.",
            button: {
              as: "modal",
              text: "Online Consultation",
            },
          },
        ],
      },
    },
    {
      blockName: "title-with-tiled-items",
      fields: {
        options: {
          cols: 3,
        },
        title: "We guarantee",
        items: [
          {
            id: 1,
            title: "Study",
            text: "Our experienced specialists will promptly prepare all relevant information about the property, provide technical and legal documentation",
            icon: "coaching",
          },
          {
            id: 2,
            title: "Advertising",
            text: "We will prepare advertising materials, carry out professional photo and video filming of your house / apartment, make a presentation that will impress potential buyers",
            icon: "photos",
          },
          {
            id: 3,
            title: "Support",
            text: "Comprehensive support at all stages of cooperation. You can contact us for any question. Always in touch and open to you",
            icon: "headset",
          },
          {
            id: 4,
            title: "Sale",
            text: "Negotiating with the client, checking the creditworthiness and closing the deal",
            icon: "income",
          },
          {
            id: 5,
            title: "Excursions",
            text: "We professionally organize displays and views of the property. We will provide reliable support",
            icon: "visible",
          },
          {
            id: 6,
            title: "Marketing",
            text: "We will professionally plan the perfect advertising campaign and select a base of potential buyers",
            icon: "speaker",
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
