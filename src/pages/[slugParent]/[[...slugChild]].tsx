import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MainLayout } from "@/layout/MainLayout";
import { Meta } from "@/layout/Meta";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";
import { DisplayBlocks } from "@/blocks/DisplayBlocks";
import { pageOurServices } from "@/data/pages/our-services";
import { pageContacts } from "@/data/pages/contacts";
import { pageRealEstate } from "@/data/pages/real-estate";

const Page: NextPage<{ data: any }> = ({ data }) => {
  const meta = data?.meta;
  const title = data?.title;
  const blocks = data?.blocks;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: { slugParent: "about", slugChild: [] },
    },
    {
      params: { slugParent: "contacts", slugChild: [] },
    },
    {
      params: { slugParent: "our-services", slugChild: [] },
    },
    {
      params: { slugParent: "real-estate", slugChild: [] },
    },
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slugChild || params?.slugParent;
  let data = null;

  switch (slug) {
    case "our-services":
      data = pageOurServices;
      break;
    case "contacts":
      data = pageContacts;
      break;
    case "real-estate":
      data = pageRealEstate;
      break;
    default:
      data = null;
  }

  return {
    props: {
      data,
    },
  };
};

export default Page;
