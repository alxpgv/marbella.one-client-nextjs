import {
  banners,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";

export const pageOwners = {
  title: "Owners",
  meta: {
    title: "Owners",
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
              src: "/images/owners/owners-min.jpg",
              alt: "It is easy to buy a property or a plot of land in Spain",
              width: 360,
              height: 512,
            },
            button: {
              as: "link",
              href: "/owners/sell-luxury-real-estate",
            },
          },
          {
            text: "<h3>Real estate price <br/>What affects the price of real estate?</h3><p>The price depends on whether the buyer agrees to the deal or refuses. Ideally, the cost should not be overpriced or understated. Too high will repel and the potential buyer will go to another seller. And if the cost is understated, doubts and suspicions will appear, which can also scare away the buyer of the house/apartment.</p>",
            image: {
              src: "/images/owners/real-estate-price-min.jpg",
              alt: "Our agency is the best in the field of real estate",
              height: 742,
              width: 552,
            },
            button: {
              as: "link",
              href: "/owners/real-estate-price",
            },
          },
        ],
      },
    },
    {
      blockName: "content-extra-with-image",
      fields: {
        contentPrimary: {
          title: "Competence & professionalism",
          subtitle: "Reasons to cooperate with us",
          text: "<p>Choosing a real estate agency, every seller and buyer wants to be sure of the competence and professionalism of the specialists.</p><p>We have a lot of experience in the real estate market, which means that you can really trust us. We know how to present real estate so that it is as attractive as possible for the buyer and, as a result, the interest ends in a successful transaction.</p>",
          button: {
            as: "link",
            href: "/owners/reasons-to-cooperate",
          },
        },
        image: {
          src: "/images/owners/competence-professionalism-min.jpg",
          alt: "Do you want to buy a plot of land in a sunny country",
          width: 902,
          height: 650,
        },
        contentSecondary:
          "<h5>Other reasons to partner with us</h5><ul><li>Professional property appraisal</li><li>Friendliness and openness</li><li>Attention to each client</li><li>Inspection of the house, apart</li><li>Professional photo session</li><li>Thoughtful marketing</li></ul>",
        extra: {
          title: "We are competent and professional",
          text: "There are really many reasons to choose our real estate agency!",
          button: {
            as: "link",
            href: "/about-me",
          },
        },
      },
    },
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
              as: "link",
              href: "/owners/we-guarantee",
            },
          },
        ],
      },
    },
    onlineConsultation,
    onlineServices,
    banners,
  ],
};
