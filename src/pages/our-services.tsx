import React from "react";
import { NextPage } from "next";
import { Meta } from "@/layout/Meta";
import { MainLayout } from "@/layout/MainLayout";
import { pageOurServices } from "@/data/pages/our-services";
import { ServiceListTile } from "@/blocks/ServiceListTile";
import { PageTitle } from "@/components/PageTitle";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";

const OurServices: NextPage = () => {
  const blocks = pageOurServices?.blocks;
  const title = pageOurServices?.title;
  return (
    <MainLayout>
      <Meta title={title} />
      <Container>
        <Breadcrumb links={[{ title }]} />
      </Container>
      {pageOurServices?.title && <PageTitle title={pageOurServices.title} />}
      {blocks?.services && <ServiceListTile {...blocks.services} />}
    </MainLayout>
  );
};

export default OurServices;
