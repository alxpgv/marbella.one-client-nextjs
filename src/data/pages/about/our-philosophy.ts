import {
  banners,
  joinUs,
  onlineConsultation,
  onlineServices,
} from "@/data/static-blocks";

export const pageOurPhilosophy = {
  title: "Our philosophy",
  meta: {
    title: "Our philosophy",
    description:
      "We have extensive experience in the Spanish real estate market, so we are guaranteed to find the best solution for you.",
  },
  blocks: [
    {
      blockName: "content-rows-with-images",
      fields: {
        rows: [
          {
            text: "<h3>Tomorrow it's real to become even closer to your dream. Of course, if today we take even small steps towards its implementation.</h3><p>We are a team of professionals in love with their work. Our goal is to lead you to your dream home with the easiest and most beautiful paths. With us you will feel comfortable and pleasant as in the circle of your best friends. And most importantly, you will definitely open the door of your ideal home, in which you will be happy!</p>",
            image: {
              src: "/images/about/tomorrow-real-to-become-min.jpg",
              alt: "Tomorrow it's real to become even closer to your dream",
              width: 360,
              height: 512,
            },
          },
          {
            text: "<h3>Violet Real Estate is your trusted luxury real estate agency in Spain</h3><p>We have extensive experience in the Spanish real estate market, so we are guaranteed to find the best solution for you.</p><p>If you want, we will select the best luxury villas, townhouses or apartments in Spain. Or maybe your desire is a luxurious house somewhere in an unusual place? For example, in the national park of the country. Our experienced professionals are engaged in the search and reconstruction of such unique objects.</p><p>If you want, at your request, will we build an elite house in any corner of the country? We will always be there as reliable good friends. We will help you choose materials for construction, furniture for the living room and much more. For us, the main goal and desire is your smile and eyes sparkling with happiness!</p>",
            image: {
              src: "/images/about/foto-violetta-mikhailova-min.jpg",
              alt: "Violet Real Estate is your trusted luxury real estate agency in Spain",
              height: 739,
              width: 658,
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
        title: "5 the basic principles of <br/>our work with the client",
        items: [
          {
            id: 1,
            title: "Professional services",
            text: "Experienced specialists work for you. We will cope with any task!",
            icon: "hand-good",
          },
          {
            id: 2,
            title: "Special offer",
            text: "We are engaged in the reconstruction of unique houses. Only 1% of real estate agencies offer this service",
            icon: "star",
          },
          {
            id: 3,
            title: "Benevolence",
            text: "In our company it is always cozy and warm as in the circle of the best friends",
            icon: "heart",
          },
          {
            id: 4,
            title: "Reliability",
            text: "Responsible specialists will work with you, which means that all the goals set are achievable",
            icon: "checkmark-shield",
          },
          {
            id: 5,
            title: "Transparency",
            text: "We are as open to you as possible at all stages of cooperation. You will always know what is happening during the construction, sales or purchases of real estate",
            icon: "sun",
          },
          {
            id: 6,
            title: "Support",
            text: "Comprehensive support at every stage of working with your property!",
            icon: "headset",
            variant: "dark",
          },
        ],
      },
    },
    {
      blockName: "text",
      fields: {
        options: {
          align: "center",
        },
        text: "<h4>If you are still looking for a reliable Spanish real estate agency you can trust, we are in a hurry to please - you are just one step away from your success!</h4><p>Violet Real Estate is the best choice for everyone who dreams of their ideal home in the hospitable sunny beauty of Spain!</p>",
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
