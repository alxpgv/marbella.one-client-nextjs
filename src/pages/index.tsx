import React from "react";
import { NextPage } from "next";
import { home } from "@/data/pages/home";
import { settings } from "@/data/settings";
import { HomePromo } from "@/blocks/HomePromo";
import { MainLayout } from "@/layout/MainLayout";
import { ListWithStrictImage } from "@/blocks/ListWithStrictImage";
import { ImageWithOverlapText } from "@/blocks/ImageWithOverlapText";
import { ListWithImage } from "@/blocks/ListWithImage";
import { AdvantageTile } from "@/blocks/AdvantageTile";
import { SaleConsultation } from "@/blocks/SaleConsultation";
import { OnlineService } from "@/blocks/OnlineService";
import { Banner } from "@/blocks/Banner/Banner";
import { OnlineConsultation } from "@/blocks/OnlineConsultation";
import { SocialContact } from "@/blocks/SocialContact";
import { Meta } from "@/layout/Meta";

const Index: NextPage = () => {
  return (
    <MainLayout headingOffset={false}>
      <Meta title={"Index page"} />
      {home?.promo && <HomePromo {...home.promo} />}
      {home?.listIdeal && <ListWithStrictImage {...home.listIdeal} />}
      {home?.dreamPerfect && <ImageWithOverlapText {...home.dreamPerfect} />}
      {home?.clientOffer && <ListWithImage {...home.clientOffer} />}
      {home?.advantages && (
        <AdvantageTile {...home.advantages} contact={settings?.contact} />
      )}
      {home?.saleConsultation && (
        <SaleConsultation {...home.saleConsultation} />
      )}
      {home?.onlineServices && <OnlineService {...home.onlineServices} />}
      {home?.banners && <Banner banners={home.banners} />}
      {home?.onlineConsultation && (
        <OnlineConsultation {...home.onlineConsultation} />
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
