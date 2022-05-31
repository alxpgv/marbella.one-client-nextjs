import {
  banners,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";

export const pageSellLuxury = {
  title: "Sell luxury real estate",
  meta: {
    title: "Sell luxury real estate",
    description:
      "Are you the owner of a luxury villa, apartment or townhouse in Spain?",
  },
  blocks: [
    {
      blockName: "content-rows-with-images",
      fields: {
        rows: [
          {
            text: "<h3>Are you the owner of a luxury villa, apartment or townhouse in Spain? Are you planning to sell your property as profitably and quickly as possible?</h3><p><strong>Real estate agency Violet Real Estate</strong> is your reliable friend and assistant in the sale of real estate in Spain. Among our clients are the owners of expensive exclusive properties who choose us for our professionalism and thoughtful marketing.</p>",
            image: {
              src: "/images/owners/sell-luxury-real-estate-min.jpg",
              alt: "Are you the owner of a luxury villa",
              width: 360,
              height: 512,
            },
            button: {
              as: "modal",
              modalView: "EVALUATE_PROPERTY",
              text: "Evaluate property",
            },
          },
          {
            text: "<h3>The decision to cooperate with the real estate agency Real Estate Violet is being made by more and more clients. <br />And there are reasons for that:</h3><ul><li>Inspection and professional assessment of the object</li><li>Sophisticated advertising strategy</li><li>Professional photo session of the object</li></ul><p>Entrust real estate sales to real professionals!</p>",
            image: {
              src: "/images/owners/decision-to-cooperate-min.jpg",
              alt: "The decision to cooperate with the real estate agency Real Estate Violet",
              height: 739,
              width: 560,
            },
            button: {
              as: "modal",
              modalView: "SELL_PROPERTY",
              text: "Sell property",
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
          firstLetterUppercase: true,
        },
        title: "3 steps to a <br/>successful sale",
        items: [
          {
            id: 1,
            title: "Inspection and professional <br/>assessment of the object",
            text: "At a predetermined date and time, we will arrive to inspect the apartment, townhouse, villa. We will evaluate the property taking into account the current prices on the market and all the documentation provided.",
            icon: "important-date",
          },
          {
            id: 2,
            title: "Sophisticated <br/>advertising strategy",
            text: "We discuss all planned marketing activities in advance and build an ideal advertising strategy",
            icon: "business-strategy",
          },
          {
            id: 3,
            title: "Professional photo session <br/>of the object",
            text: "We will carry out professional photography of your object. We know which photographs will help you to perfectly present your property.",
            icon: "photos",
          },
        ],
      },
    },
    onlineConsultation,
    onlineServices,
    banners,
  ],
};
