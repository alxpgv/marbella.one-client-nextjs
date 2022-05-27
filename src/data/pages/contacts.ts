import {
  onlineConsultation,
  joinUs,
  mapWithContact,
} from "@/data/static-blocks";

export const pageContacts = {
  title: "Contacts",
  meta: {
    title: "Contacts",
    description: "",
  },
  blocks: [mapWithContact, onlineConsultation, joinUs],
};
