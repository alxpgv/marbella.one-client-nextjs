import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MainLayout } from "@/layout/main-layout";
import { Meta, type MetaProps } from "@/layout/meta";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageTitle } from "@/components/page-title";
import { type BlockProps, DisplayBlocks } from "@/blocks/display-blocks";
import { pageOurServices } from "@/data/pages/our-services";
import { pageContacts } from "@/data/pages/contacts";
import { pageRealEstate } from "@/data/pages/real-estate";
import { pageBuyLuxury } from "@/data/pages/buy-luxury-real-estate";
import { OnlineService } from "@/blocks/online-service";
import { Banners } from "@/blocks/banners";
import { OnlineConsultation } from "@/blocks/online-consultation";
import { JoinUs } from "@/blocks/join-us";
import { SloganWithText } from "@/blocks/slogan-with-text";
import { MapWithContact } from "@/blocks/map-with-contact";
import { ContentRowsWithImages } from "@/blocks/content-rows-with-images";
import { ContentExtraWithImage } from "@/blocks/content-extra-with-image";
import { ContactUs } from "@/blocks/contact-us";
import { TitleWithTiledItems } from "@/blocks/title-with-tiled-items";
import { pageBuyingLand } from "@/data/pages/buying-land-in-marbella";
import { SloganWithTextExtend } from "@/blocks/slogan-with-text-extend";
import { ImageWithContent } from "@/blocks/image-with-content";
import { pageOwners } from "@/data/pages/owners";
import { pageSellLuxury } from "@/data/pages/sell-luxury-real-estate";
import { pageRealEstatePrice } from "@/data/pages/real-estate-price";
import { pageWeGuarantee } from "@/data/pages/we-guarantee";
import { pageReasonsToCooperate } from "@/data/pages/reasons-to-cooperate";
import { pageAboutMe } from "@/data/pages/about-me";
import { pageReviews } from "@/data/pages/reviews";
import { pageOurPhilosophy } from "@/data/pages/our-philosophy";

interface PageProps {
  data: {
    meta: MetaProps;
    title: string;
    blocks: BlockProps[];
  };
}

const mapBlocks = {
  "online-service": OnlineService,
  banners: Banners,
  "online-consultation": OnlineConsultation,
  "join-us": JoinUs,
  "slogan-with-text": SloganWithText,
  "slogan-with-text-extend": SloganWithTextExtend,
  "map-with-contact": MapWithContact,
  "content-rows-with-images": ContentRowsWithImages,
  "content-extra-with-image": ContentExtraWithImage,
  "image-with-content": ImageWithContent,
  "contact-us": ContactUs,
  "title-with-tiled-items": TitleWithTiledItems,
};

const Page: NextPage<PageProps> = ({ data }) => {
  if (!data) return null;
  const meta = data?.meta;
  const title = data?.title;
  const blocks = data?.blocks;

  return (
    <MainLayout>
      <Meta {...meta} />
      <Container>
        <Breadcrumb />
        <PageTitle title={title} />
      </Container>
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugParent = params?.slugParent;
  const slugChild =
    params?.slugChild && params.slugChild[0] ? params.slugChild[0] : null;

  const slug = slugParent
    ? slugChild
      ? `${slugParent}/${slugChild}`
      : slugParent
    : null;

  let data = null;

  switch (slug) {
    case "our-services":
      data = pageOurServices;
      break;
    case "contacts":
      data = pageContacts;
      break;
    case "real-estate":
      data = pageRealEstate;
      break;
    case "real-estate/buy-luxury-real-estate":
      data = pageBuyLuxury;
      break;
    case "real-estate/buying-land-in-marbella":
      data = pageBuyingLand;
      break;
    case "owners":
      data = pageOwners;
      break;
    case "owners/we-guarantee":
      data = pageWeGuarantee;
      break;
    case "owners/sell-luxury-real-estate":
      data = pageSellLuxury;
      break;
    case "owners/real-estate-price":
      data = pageRealEstatePrice;
      break;
    case "owners/reasons-to-cooperate":
      data = pageReasonsToCooperate;
      break;
    case "about-me":
      data = pageAboutMe;
      break;
    case "about-me/reviews":
      data = pageReviews;
      break;
    case "about-me/our-philosophy":
      data = pageOurPhilosophy;
      break;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
};

export default Page;
