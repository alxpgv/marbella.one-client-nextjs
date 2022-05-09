import {
  banners,
  onlineConsultation,
  onlineServices,
  joinUs,
} from "@/data/static-blocks";

export const pageBuyingLand = {
  title: "Buying land in Marbella",
  meta: {
    title: "Buying land in Marbella",
    description: "",
    keywords: "",
  },
  blocks: [
    {
      blockName: "content-rows-with-images",
      fields: {
        rows: [
          {
            text: "<h3>The dream of owning your own home is real!</h3><p>A luxury house with a pool and a garden somewhere on the seashore or ocean - your dream? Everything that seems only a dream today can become a reality tomorrow!</p><p>Just imagine ... you are the owner of a luxurious cottage overlooking the sea in one of the best Spanish resorts - sunny Marbella! But in order to receive such a gift of fate, take at least one step towards your goal - buy a piece of land in this truly heavenly place. Are you ready to change your life 180 degrees? Contact us and we will definitely help you.</p>",
            image: {
              src: "/images/real-estate/dream-of-owning-your-own-home-min.jpg",
              alt: "The dream of owning your own home is real",
              width: 1,
              height: 1,
            },
          },
          {
            text: "<h3>AFFORDABLE Construction prices in Marbella</h3><p>You will be able to buy a plot of land in Spain, namely in the popular Spanish resort, as profitable as possible.</p><p>To create your own heavenly place in Spain is real if you turn to real professionals. We will be happy to help you make your dream come true!</p>",
            image: {
              src: "/images/real-estate/construction-prices-in-marbella-min.jpg",
              alt: "AFFORDABLE Construction prices in Marbella",
              height: 1,
              width: 1,
            },
            button: {
              as: "online-consultation",
            },
          },
        ],
      },
    },
    {
      blockName: "content-extra-with-image",
      fields: {
        contentPrimary: {
          title: "How to buy a plot of land in Spain for non-residents",
          subtitle: "Buy a plot of land",
          text: "<p>Do you want to buy a plot of land in a sunny country, but you are a non-resident? You have every chance to make what you want into reality. Our real estate agency will help every non-resident to acquire the best option for the construction of a villa, cottage, townhouse.</p><p>We have extensive experience in the real estate market in Spain. We are well aware of all the nuances and complexities of Spanish land law. With us you will not have a chance to make annoying mistakes when buying land. Our experts will tell you in detail about the upcoming deal and check all current offers. The buying process will be completely safe, as well as legally correct and streamlined.</p>",
        },
        image: {
          src: "/images/real-estate/plot-of-land-in-spain-min.jpg",
          alt: "Do you want to buy a plot of land in a sunny country, but you are a non-resident?",
          width: 902,
          height: 650,
        },
        contentSecondary:
          "<h5>We guarantee every client</h5><ul><li>Support and advice</li><li>Search for a piece of land, taking into account your wishes</li><li>Support at every stage of cooperation</li><li>Large database of objects in different price ranges</li></ul>",
        extra: {
          title: "Get expert advice right now",
          text: "We will answer all your questions for free!",
          button: {
            as: "callback",
          },
        },
      },
    },
    {
      blockName: "slogan-with-text-extend",
      fields: {
        cols: [
          {
            title: "Real estate agency Violet Real Estate",
            text: "guarantees comprehensive support and professional advice from experienced lawyers and tax advisors",
          },
          {
            text: "Our team consists of only experienced professionals in the real estate market and land sales in Spain. We have all the contacts required for work in the country",
            button: {
              as: "online-consultation",
            },
          },
        ],
      },
    },
    {
      blockName: "image-with-content",
      fields: {
        image: {
          src: "/images/real-estate/property-types-in-spain-min.jpg",
          alt: "Property types in Spain",
          width: 360,
          height: 585,
        },
        text: "<h2>Property types in Spain</h2><p>If you want to buy a plot of land in Spain, be sure to specify what type of plot you need. There are three categories of land plots in the country.</p><h4>TerrenoRustico</h4><p>These land plots are not intended for development. This includes nature reserves, as well as various agricultural land. Buildings may be permitted in individual cases.</p><h4>Urbana</h4><p>Developed construction area within the city. There are very good living conditions, well-developed infrastructure, there are a kindergarten, schools, shops and pharmacies nearby.</p><h4>Urbanizable</h4><p>This is the name of the territory on the outskirts or in the suburbs. If desired, this place can be converted into an urban area. In this case, much will depend on the financial capabilities of the client.</p>",
      },
    },
    {
      blockName: "contact-us",
      fields: {
        title:
          "If you want to buy a plot of land in Spain, be sure to specify what type of plot you need. Contact us!",
      },
    },
    onlineServices,
    banners,
    onlineConsultation,
    joinUs,
  ],
};
