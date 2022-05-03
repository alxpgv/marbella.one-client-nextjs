import {
  onlineConsultation,
  socialWithContact,
  mapWithContact,
} from "@/data/static-blocks";

export const pageContacts = {
  title: "Contacts",
  meta: {
    title: "Contacts",
    description: "",
    keywords: "",
  },
  blocks: [mapWithContact, onlineConsultation, socialWithContact],
};
