import React from "react";
import { NextPage } from "next";
import { Meta } from "@/layout/Meta";
import { MainLayout } from "@/layout/MainLayout";
import { pageOurServices } from "@/data/pages/our-services";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { DisplayBlocks } from "@/blocks/DisplayBlocks";

const OurServices: NextPage = () => {
  const meta = pageOurServices?.meta;
  const title = pageOurServices?.title;
  const blocks = pageOurServices?.blocks;

  return (
    <MainLayout>
      <Meta {...meta} />
      <Container>
        <Breadcrumb links={[{ title }]} />
        <PageTitle title={title} />
      </Container>
      <DisplayBlocks blocks={blocks} />
    </MainLayout>
  );
};

export default OurServices;
