import {
  onlineConsultation,
  socialWithContact,
  mapContact,
} from "@/data/static-blocks";

export const pageContacts = {
  title: "Contacts",
  meta: {
    title: "Contacts",
    description: "",
    keywords: "",
  },
  blocks: [mapContact, onlineConsultation, socialWithContact],
};
