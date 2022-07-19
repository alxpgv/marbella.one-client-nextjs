import { pageOurServices } from "@/data/pages/our-services";
import { pageContacts } from "@/data/pages/contacts";
import { pageRealEstate } from "@/data/pages/real-estate/real-estate";
import { pageBuyLuxury } from "@/data/pages/real-estate/buy-luxury-real-estate";
import { pageBuyingLand } from "@/data/pages/real-estate/buying-land-in-marbella";
import { pageOwners } from "@/data/pages/owners/owners";
import { pageWeGuarantee } from "@/data/pages/owners/we-guarantee";
import { pageSellLuxury } from "@/data/pages/owners/sell-luxury-real-estate";
import { pageRealEstatePrice } from "@/data/pages/owners/real-estate-price";
import { pageReasonsToCooperate } from "@/data/pages/owners/reasons-to-cooperate";
import { pageAboutMe } from "@/data/pages/about/about-me";
import { pageReviews } from "@/data/pages/about/reviews";
import { pageOurPhilosophy } from "@/data/pages/about/our-philosophy";
import { pagePrivacy } from "@/data/pages/privacy-policy";
import { pagePersonalData } from "@/data/pages/personal-data";
import { MenuProps } from "@/components/common/navigation/types";

export const getAllPages = (slug: string) => {
  switch (slug) {
    case "our-services":
      return pageOurServices;
    case "contacts":
      return pageContacts;
    case "real-estate":
      return pageRealEstate;
    case "real-estate/buy-luxury-real-estate":
      return pageBuyLuxury;
    case "real-estate/buying-land-in-marbella":
      return pageBuyingLand;
    case "owners":
      return pageOwners;
    case "owners/we-guarantee":
      return pageWeGuarantee;
    case "owners/sell-luxury-real-estate":
      return pageSellLuxury;
    case "owners/real-estate-price":
      return pageRealEstatePrice;
    case "owners/reasons-to-cooperate":
      return pageReasonsToCooperate;
    case "about-me":
      return pageAboutMe;
    case "about-me/reviews":
      return pageReviews;
    case "about-me/our-philosophy":
      return pageOurPhilosophy;
    case "privacy-policy":
      return pagePrivacy;
    case "personal-data":
      return pagePersonalData;
    default:
      return null;
  }
};

type Params = {
  params: { slugParent: string; slugChild: [] | string[] };
};

export const getPathsFromMenu = (items: MenuProps[], type: string) => {
  const typedItems = items.filter((item) => item.type && item.type === type);
  const paths: Params[] = [];

  const getPaths = (items: MenuProps[]) => {
    items.forEach((item) => {
      const segments = item.slug.split("/");
      segments.shift();

      const slugParent = segments.shift();
      const slugChild = [...segments];

      if (!slugParent) return false;

      paths.push({ params: { slugParent, slugChild } });

      if (item.child?.length) {
        getPaths(item.child);
      }
    });
  };

  getPaths(typedItems);

  return paths;
};
