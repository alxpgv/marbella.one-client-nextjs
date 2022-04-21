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
    </MainLayout>
  );
};

export default Index;
