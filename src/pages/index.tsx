import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/layout/MainLayout";
import { Meta } from "@/layout/Meta";
import { DisplayBlocks } from "@/blocks/DisplayBlocks";

const Index: NextPage = () => {
  const blocks = pageHome?.blocks;

  return (
    <MainLayout navbarOffset={false}>
      <Meta {...pageHome?.meta} />
      <DisplayBlocks blocks={blocks} />
    </MainLayout>
  );
};

export default Index;
