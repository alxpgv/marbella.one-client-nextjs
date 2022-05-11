import {
  banners,
  joinUs,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";
import { reviewsItems } from "@/data/reviews";

export const pageAboutMe = {
  title: "About me",
  meta: {
    title: "About me",
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "avatar-with-quote",
      fields: {
        text: "<p>Hello!</p><p>I am Violetta Mikhailova, founder and director of Violet Real Estate. I want to build a trusting partnership with you, and therefore I will be as frank as possible. Sohere is my story...</p>",
        image: {
          src: "/images/about/avatar-violetta-mikhailova-min.jpg",
          alt: "I am Violetta Mikhailova, founder and director of Violet Real Estate",
        },
      },
    },
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "right",
          bgColor: "secondary",
        },
        slogan:
          "<h5><em><strong>«It’s impossible!» — everyone told me. Family and friends dissuaded from the crazy idea of not returning to their native land, but it was too late.</strong></em></h5>",
        text: "<p class='text-sm-10'>Love is such a special silence... When you listen and hear, you understand. When such a special warmth is poured into the soul, which cannot be confused with anything.</p><p class='text-sm-10'>The year was 2000... And suddenly it became clear that this is IT! That very feeling of boundless happiness came. It was good when I just looked at the sky, felt the gentle touches of the ocean, breathed in incredibly rich air and seemed unable to breathe it...</p><p class='text-sm-10'>Spain!... Only after descending from the plane, I felt that this is my home, that I want to stay here, and not for a week or two, as it should have been, but perhaps forever!</p>",
      },
    },
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "left",
          bgColor: "secondary",
        },
        slogan:
          "<h5><em><strong>When the experience was already enough to feel fully integrated into the local culture, there was a desire to share the happiness acquired here.</strong></em></h5>",
        text: "<p class='text-sm-10'>And then I was inspired by the idea of creating my own real estate agency. Initially, it was a search for real estate for numerous friends and acquaintances, inspired by the unique energy of this magical country. Later, a company appeared that satisfies the needs of a large number of clients from all over the world.</p><p class='text-sm-10'>Real Estate Violet does not lose depth and \"intimacy\" of the workflow. Quantity has never been my priority. It has always been my sincere desire to share. Share knowledge, experience, just good emotions. After all, this always translates into a wonderful result!</p>",
      },
    },
    {
      blockName: "slogan-with-text",
      fields: {
        options: {
          sloganAlign: "right",
          bgColor: "secondary",
        },
        slogan:
          "<h5><em><strong>Let it be just a house on the seashore for the summer for a family with children, or a multi-stage project for capital investments in order to optimize all life and business ambitions.</strong></em></h5>",
        text: "<p class='text-sm-10'>After all, this is the most ideal place in Europe, where you can not only enjoy the wonderful climate and virgin nature, but also earn money. Such places will always attract a huge number of people who, like me, will once lose their heads from the wonderful and such different landscapes of Andalusia, the comfort and hospitality of the medieval streets of Malaga and Seville, the romance of ancient Granada, the splendor and temperament of the Atlantic Ocean!</p>",
        button: {
          as: "link",
          href: "/about-me/our-philosophy",
          text: "Our philosophy",
        },
      },
    },
    {
      blockName: "last-review",
      fields: {
        options: {
          count: 3,
        },
        title: "Reviews from our clients",
        items: reviewsItems,
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
