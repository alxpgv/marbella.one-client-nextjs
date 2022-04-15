import React from "react";
import { NextPage } from "next";
import { HomePromo } from "@/components/blocks/HomePromo";
import { MainLayout } from "@/layout/MainLayout";
import { ListWithImage } from "@/components/blocks/ListWithImage/ListWithImage";
import { home } from "@/data/pages/home";

const Index: NextPage = () => {
  return (
    <MainLayout>
      {home?.promo && <HomePromo {...home.promo} />}
      {home?.listIdealHome && <ListWithImage {...home.listIdealHome} />}
    </MainLayout>
  );
};

export default Index;
