import React from "react";
import { NextPage } from "next";
import { HomePromo } from "@/components/blocks/HomePromo";
import { MainLayout } from "@/layout/MainLayout";
import { ListWithImageText } from "@/components/blocks/ListWithImageText";
import { ImageWithText } from "@/components/blocks/ImageWithText";
import { home } from "@/data/pages/home";

const Index: NextPage = () => {
  return (
    <MainLayout>
      {home?.promo && <HomePromo {...home.promo} />}
      {home?.listIdeal && <ListWithImageText {...home.listIdeal} />}
      {home?.dreamPerfect && <ImageWithText {...home.dreamPerfect} />}
    </MainLayout>
  );
};

export default Index;
