import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/layout/main-layout";
import { Meta } from "@/layout/meta";
import { DisplayBlocks } from "@/blocks/display-blocks";

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
