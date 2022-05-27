import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";

export const pageBuyLuxury = {
  title: "Buy luxury real estate",
  meta: {
    title: "Buy luxury real estate",
    description: "Our agency is the best in the field of real estate!",
  },
  blocks: [
    {
      blockName: "content-rows-with-images",
      fields: {
        rows: [
          {
            text: "<p>It is easy to buy unique luxury real estate in Spain. Of course, if your assistant is a reliable real estate agency proven by many clients.</p><h3>Violet Real Estate</h3><p>is one of those kind wizards who can make the dream of an ideal house a reality! We are sure that nothing is impossible and somewhere in Spain there is the very house or picturesque plot where your happiness will live.</p>",
            image: {
              src: "/images/real-estate/violet-real-estate-min.jpg",
              alt: "Violet real estate",
              width: 360,
              height: 483,
            },
          },
          {
            text: "<h3>Our agency is the best in the field of real estate!</h3><ul><li>Own database of real estate objects</li><li>An individual approach to clients</li><li>Professionalism and experience</li></ul><p>Real estate agency Violet Real Estate guarantees comprehensive support and professional advice from experienced lawyers and tax advisors. Buy luxury real estate now!</p>",
            image: {
              src: "/images/real-estate/best-of-real-estate-min.jpg",
              alt: "Our agency is the best in the field of real estate",
              height: 742,
              width: 552,
            },
            button: {
              as: "modal",
              modalView: "ONLINE_CONSULTATION",
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
        title:
          "That is why clients, planning to buy a house in Spain, choose us, rejecting even strong competitors:",
        items: [
          {
            id: 1,
            title: "Own database <br/>of real estate objects",
            text: "Our catalog contains a large selection of proven apartments, houses, townhouses for different tastes. This will save time and make your choice faster",
            icon: "user-folder",
          },
          {
            id: 2,
            title: "An individual<br/> approach to clients",
            text: "When choosing a property for you, we will certainly take into account all your wishes. Do not hesitate with us - your dream home will be yours",
            icon: "user-target",
          },
          {
            id: 3,
            title: "Professionalism<br/> and experience",
            text: "Our team consists of real professionals with many years of experience. They will advise on all issues and help you to buy an apartment, house or villa in Spain at a profit",
            icon: "hand-good",
          },
        ],
      },
    },
    {
      blockName: "contact-us",
      fields: {
        title:
          "Buying an exclusive property in sunny Spain is a snap!<br/>Contact us!",
      },
    },
    onlineServices,
    banners,
    onlineConsultation,
    joinUs,
  ],
};
