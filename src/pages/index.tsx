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

const Index: NextPage = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Index;
