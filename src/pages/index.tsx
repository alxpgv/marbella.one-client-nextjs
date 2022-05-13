import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/components/common/main-layout";
import { Meta } from "@/components/common/meta";
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

const Index: NextPage = () => {
  const blocks = pageHome?.blocks;

  return (
    <MainLayout navbarOffset={false}>
      <Meta {...pageHome?.meta} />
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
    </MainLayout>
  );
};

export default Index;
