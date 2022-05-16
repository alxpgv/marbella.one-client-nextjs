import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";

export const pageReasonsToCooperate = {
  title: "Reasons to cooperate with us",
  meta: {
    title: "Reasons to cooperate with us",
    description: "",
    keywords: "",
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
          "<h3>The specialists of our agency are professional and competent!</h3>",
        text: "<p>Choosing a real estate agency, every seller and buyer wants to be sure of the competence and professionalism of the specialists.</p><p>We have a lot of experience in the real estate market, which means that you can really trust us. We know how to present real estate so that it is as attractive as possible for the buyer and, as a result, the interest ends in a successful transaction.</p>",
      },
    },
    {
      blockName: "title-with-tiled-items",
      fields: {
        options: {
          cols: 3,
        },
        title: "Other reasons to partner with us",
        items: [
          {
            id: 1,
            title: "Professional property appraisal",
            text: "We will evaluate your property taking into account all available documentation and current market prices",
            icon: "payment-receipt",
          },
          {
            id: 2,
            title: "Friendliness and openness",
            text: "We understand your fears, concerns and doubts. That is why we hasten to reassure you: with us it is as comfortable and easy as with friends",
            icon: "heart",
          },
          {
            id: 3,
            title: "Attention to each client",
            text: "We always take into account all your wishes and are ready to make any of your dreams come true!",
            icon: "user-target",
          },
          {
            id: 4,
            title: "Inspection of the house, apart",
            text: "We will agree in advance on the most suitable date and time and come for an inspection. Next, we will discuss the marketing strategy",
            icon: "important-date",
          },
          {
            id: 5,
            title: "Professional photo session",
            text: "We know how to present your property perfectly. Only professional equipment and only professional photographers. You will like the result!",
            icon: "photos",
          },
          {
            id: 6,
            title: "Thoughtful marketing",
            text: "Our experienced specialists know how best to launch an advertising campaign so that it works as much as possible for the result",
            icon: "speaker",
          },
        ],
      },
    },
    {
      blockName: "slogan-with-text-extend",
      fields: {
        cols: [
          {
            title:
              "There are really many reasons to choose our real estate agency!",
          },
          {
            text: "With us you will get closer to your dream even faster! Get started today, and we will definitely support you!",
            button: {
              as: "modal",
              text: "Online Consultation",
            },
          },
        ],
      },
    },
    onlineServices,
    banners,
    onlineConsultation,
    joinUs,
  ],
};
