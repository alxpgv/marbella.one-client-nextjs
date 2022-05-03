import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/layout/MainLayout";
import { Meta } from "@/layout/Meta";
import { DynamicBlocks } from "@/blocks/DynamicBlocks";

const Index: NextPage = () => {
  const blocks = pageHome?.blocks;

  return (
    <MainLayout navbarOffset={false}>
      <Meta {...pageHome?.meta} />
      <DynamicBlocks blocks={blocks} />
    </MainLayout>
  );
};

export default Index;
