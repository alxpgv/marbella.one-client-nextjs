import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/components/common/main-layout";
import { DisplayBlocks } from "@/components/blocks/display-blocks";
import { HomePromo } from "@/components/blocks/home-promo";
import { ListWithStrictImage } from "@/components/blocks/list-with-strict-image";
import { ImageWithOverlapText } from "@/components/blocks/image-with-overlap-text";
import { ListWithImage } from "@/components/blocks/list-with-image";
import { AdvantageWithContact } from "@/components/blocks/advantage-with-contact";
import { SaleConsultation } from "@/components/blocks/sale-consultation";
import { OnlineService } from "@/components/blocks/online-service";
import { Banners } from "@/components/blocks/banners";
import { OnlineConsultation } from "@/components/blocks/online-consultation";
import { JoinUs } from "@/components/blocks/join-us";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";

const mapBlocks = {
  "home-promo": HomePromo,
  "list-with-strict-image": ListWithStrictImage,
  "image-with-overlap-text": ImageWithOverlapText,
  "list-with-image": ListWithImage,
  "advantage-with-contact": AdvantageWithContact,
  "sale-consultation": SaleConsultation,
  "online-service": OnlineService,
  banners: Banners,
  "online-consultation": OnlineConsultation,
  "join-us": JoinUs,
};

const Index: NextPage<{ page: EntryProps }> = ({ page }) => {
  if (!page) return null;
  const meta = page?.meta;
  const blocks = page?.blocks;

  return (
    <MainLayout navbarOffset={false}>
      <SEO {...meta} />
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const page = pageHome;

  return {
    props: {
      page,
    },
    revalidate: 100,
  };
};

export default Index;
