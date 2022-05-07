import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/layout/main-layout";
import { Meta } from "@/layout/meta";
import { DisplayBlocks } from "@/blocks/display-blocks";
import { HomePromo } from "@/blocks/home-promo";
import { ListWithStrictImage } from "@/blocks/list-with-strict-image";
import { ImageWithOverlapText } from "@/blocks/image-with-overlap-text";
import { ListWithImage } from "@/blocks/list-with-image";
import { AdvantageWithContact } from "@/blocks/advantage-with-contact";
import { SaleConsultation } from "@/blocks/sale-consultation";
import { OnlineService } from "@/blocks/online-service";
import { Banner } from "@/blocks/banner";
import { OnlineConsultation } from "@/blocks/online-consultation";
import { JoinUs } from "@/blocks/join-us";

const mapBlocks = {
  "home-promo": HomePromo,
  "list-with-strict-image": ListWithStrictImage,
  "image-with-overlap-text": ImageWithOverlapText,
  "list-with-image": ListWithImage,
  "advantage-with-contact": AdvantageWithContact,
  "sale-consultation": SaleConsultation,
  "online-service": OnlineService,
  banners: Banner,
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
