import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { settings } from "@/data/settings";
import { HomePromo } from "@/blocks/HomePromo";
import { MainLayout } from "@/layout/MainLayout";
import { ListWithStrictImage } from "@/blocks/ListWithStrictImage";
import { ImageWithOverlapText } from "@/blocks/ImageWithOverlapText";
import { ListWithImage } from "@/blocks/ListWithImage";
import { AdvantageWithContact } from "@/blocks/AdvantageWithContact";
import { SaleConsultation } from "@/blocks/SaleConsultation";
import { OnlineService } from "@/blocks/OnlineService";
import { Banner } from "@/blocks/Banner/Banner";
import { OnlineConsultation } from "@/blocks/OnlineConsultation";
import { SocialContact } from "@/blocks/SocialContact";
import { Meta } from "@/layout/Meta";

const Index: NextPage = () => {
  const blocks = pageHome?.blocks;
  return (
    <MainLayout navbarOffset={false}>
      <Meta title={"Index page"} />
      {blocks?.promo && <HomePromo {...blocks.promo} />}
      {blocks?.listIdeal && <ListWithStrictImage {...blocks.listIdeal} />}
      {blocks?.dreamPerfect && (
        <ImageWithOverlapText {...blocks.dreamPerfect} />
      )}
      {blocks?.clientOffer && <ListWithImage {...blocks.clientOffer} />}
      {blocks?.advantages && (
        <AdvantageWithContact
          {...blocks.advantages}
          contact={settings?.contact}
        />
      )}
      {blocks?.saleConsultation && (
        <SaleConsultation {...blocks.saleConsultation} />
      )}
      {blocks?.onlineServices && <OnlineService {...blocks.onlineServices} />}
      {blocks?.banners && <Banner banners={blocks.banners} />}
      {blocks?.onlineConsultation && (
        <OnlineConsultation {...blocks.onlineConsultation} />
      )}
      {
        <SocialContact
          messengers={settings?.contact?.messengers}
          socials={settings?.contact?.socials}
        />
      }
    </MainLayout>
  );
};

export default Index;
