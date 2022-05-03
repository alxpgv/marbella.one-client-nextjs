import React from "react";
import { NextPage } from "next";
import { pageContacts } from "@/data/pages/contacts";
import { Meta } from "@/layout/Meta";
import { MainLayout } from "@/layout/MainLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { DynamicBlocks } from "@/blocks/DynamicBlocks";

const OurServices: NextPage = () => {
  const meta = pageContacts?.meta;
  const title = pageContacts?.title;
  const blocks = pageContacts?.blocks;

  return (
    <MainLayout>
      <Meta {...meta} />
      <Container>
        <Breadcrumb links={[{ title }]} />
        <PageTitle title={title} />
      </Container>
      <DynamicBlocks blocks={blocks} />
    </MainLayout>
  );
};

export default OurServices;
