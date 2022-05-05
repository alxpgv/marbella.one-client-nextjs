import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
  contactUs,
} from "@/data/static-blocks";

export const pageRealEstate = {
  title: "Real Estate",
  meta: {
    title: "Real Estate",
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "content-rows-with-images",
      fields: {
        rows: [
          {
            text: "<p>It is easy to buy a property or a plot of land in Spain. Of course, if your assistant is a reliable real estate agency, verified by many clients.</p><h3>Violet Real Estate</h3><p>is one of those kind wizards who can make the dream of an ideal house a reality! We are sure that nothing is impossible and somewhere in Spain there is the very house or picturesque plot where your happiness will live.</p>",
            image: {
              url: "/images/violet-real-estate-min.jpg",
              alt: "Violet real estate",
              width: 360,
              height: 483,
            },
          },
          {
            text: "<h3>Our agency is the best in the field of real estate!</h3><ul><li>Own database of real estate objects</li><li>An individual approach to clients</li><li>Professionalism and experience</li></ul><p>Real estate agency Violet Real Estate guarantees comprehensive support and professional advice from experienced lawyers and tax advisors. Buy luxury real estate now!</p>",
            image: {
              url: "/images/best-of-real-estate-min.jpg",
              alt: "Our agency is the best in the field of real estate",
              height: 742,
              width: 552,
            },
            button: {
              type: "link",
              href: "/#",
            },
          },
        ],
      },
    },
    {
      blockName: "content-extra-with-image",
      fields: {
        content: {
          title: "How to buy a plot of land in Spain for non-residents",
          subtitle: "Buy a plot of land",
          text: "<p>Do you want to buy a plot of land in a sunny country, but you are a non-resident? You have every chance to make what you want into reality. Our real estate agency will help every non-resident to acquire the best option for the construction of a villa, cottage, townhouse.</p><p>We have extensive experience in the real estate market in Spain. We are well aware of all the nuances and complexities of Spanish land law. With us you will not have a chance to make annoying mistakes when buying land. Our experts will tell you in detail about the upcoming deal and check all current offers. The buying process will be completely safe, as well as legally correct and streamlined.</p>",
        },
        image: {
          url: "/images/plot-of-land-in-spain-min.jpg",
          alt: "Do you want to buy a plot of land in a sunny country, but you are a non-resident?",
          width: 902,
          height: 650,
        },
        list: {
          title: "We guarantee every client",
          items: [
            "Support and advice",
            "Search for a piece of land, taking into account your wishes",
            "Support at every stage of cooperation",
            "Large database of objects in different price ranges",
          ],
        },
        extra: {
          title: "Buying land in Marbella now!",
          text: "We will answer all your questions for free!",
          button: {
            type: "link",
            href: "/#",
          },
        },
      },
    },
    contactUs,
    onlineServices,
    banners,
    onlineConsultation,
    joinUs,
  ],
};
