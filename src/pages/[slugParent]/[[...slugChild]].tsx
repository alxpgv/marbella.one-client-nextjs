import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import { DisplayBlocks } from "@/components/blocks/display-blocks";
import { pageOurServices } from "@/data/pages/our-services";
import { pageContacts } from "@/data/pages/contacts";
import { pageRealEstate } from "@/data/pages/real-estate/real-estate";
import { pageBuyLuxury } from "@/data/pages/real-estate/buy-luxury-real-estate";
import { pageBuyingLand } from "@/data/pages/real-estate/buying-land-in-marbella";
import { pageOwners } from "@/data/pages/owners/owners";
import { pageSellLuxury } from "@/data/pages/owners/sell-luxury-real-estate";
import { pageRealEstatePrice } from "@/data/pages/owners/real-estate-price";
import { pageWeGuarantee } from "@/data/pages/owners/we-guarantee";
import { pageReasonsToCooperate } from "@/data/pages/owners/reasons-to-cooperate";
import { pageAboutMe } from "@/data/pages/about/about-me";
import { pageReviews } from "@/data/pages/about/reviews";
import { pageOurPhilosophy } from "@/data/pages/about/our-philosophy";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";
import { settings } from "@/data/settings";
import { pagePrivacy } from "@/data/pages/privacy-policy";
import { pagePersonalData } from "@/data/pages/personal-data";

const Pages: NextPage<{ page: EntryProps }> = ({ page }) => {
  const meta = page?.meta;
  const title = page?.title;
  const blocks = page?.blocks;

  return (
    <MainLayout>
      <SEO {...meta} />
      <Container>
        <Breadcrumb title={title} />
        <PageTitle title={title} />
      </Container>
      <DisplayBlocks blocks={blocks} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: { slugParent: "about", slugChild: [] },
    },
    {
      params: { slugParent: "contacts", slugChild: [] },
    },
    {
      params: { slugParent: "our-services", slugChild: [] },
    },
    {
      params: { slugParent: "privacy-policy", slugChild: [] },
    },
    {
      params: { slugParent: "personal-data", slugChild: [] },
    },
    {
      params: { slugParent: "real-estate", slugChild: [] },
    },
    {
      params: {
        slugParent: "real-estate",
        slugChild: ["buy-luxury-real-estate"],
      },
    },
    {
      params: {
        slugParent: "real-estate",
        slugChild: ["buying-land-in-marbella"],
      },
    },
    {
      params: { slugParent: "owners", slugChild: [] },
    },
    {
      params: {
        slugParent: "owners",
        slugChild: ["we-guarantee"],
      },
    },
    {
      params: {
        slugParent: "owners",
        slugChild: ["sell-luxury-real-estate"],
      },
    },
    {
      params: {
        slugParent: "owners",
        slugChild: ["real-estate-price"],
      },
    },
    {
      params: {
        slugParent: "owners",
        slugChild: ["reasons-to-cooperate"],
      },
    },
    {
      params: {
        slugParent: "about-me",
        slugChild: [""],
      },
    },
    {
      params: {
        slugParent: "about-me",
        slugChild: ["reviews"],
      },
    },
    {
      params: {
        slugParent: "about-me",
        slugChild: ["our-philosophy"],
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slugParent ""
  // slugChild ["", ""]
  const slugParent = params?.slugParent;
  const slugChild =
    params?.slugChild && params.slugChild[0] ? params.slugChild[0] : null;

  const slug = slugParent
    ? slugChild
      ? `${slugParent}/${slugChild}`
      : slugParent
    : null;

  let page = null;

  switch (slug) {
    case "our-services":
      page = pageOurServices;
      break;
    case "contacts":
      page = pageContacts;
      break;
    case "real-estate":
      page = pageRealEstate;
      break;
    case "real-estate/buy-luxury-real-estate":
      page = pageBuyLuxury;
      break;
    case "real-estate/buying-land-in-marbella":
      page = pageBuyingLand;
      break;
    case "owners":
      page = pageOwners;
      break;
    case "owners/we-guarantee":
      page = pageWeGuarantee;
      break;
    case "owners/sell-luxury-real-estate":
      page = pageSellLuxury;
      break;
    case "owners/real-estate-price":
      page = pageRealEstatePrice;
      break;
    case "owners/reasons-to-cooperate":
      page = pageReasonsToCooperate;
      break;
    case "about-me":
      page = pageAboutMe;
      break;
    case "about-me/reviews":
      page = pageReviews;
      break;
    case "about-me/our-philosophy":
      page = pageOurPhilosophy;
      break;
    case "privacy-policy":
      page = pagePrivacy;
      break;
    case "personal-data":
      page = pagePersonalData;
      break;
  }

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      settings,
    },
    revalidate: 100,
  };
};

export default Pages;
