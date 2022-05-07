import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MainLayout } from "@/layout/main-layout";
import { Meta, type MetaProps } from "@/layout/meta";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageTitle } from "@/components/page-title";
import { type BlockProps, DisplayBlocks } from "@/blocks/display-blocks";
import { pageOurServices } from "@/data/pages/our-services";
import { pageContacts } from "@/data/pages/contacts";
import { pageRealEstate } from "@/data/pages/real-estate";
import { OnlineService } from "@/blocks/online-service";
import { Banner } from "@/blocks/banner";
import { OnlineConsultation } from "@/blocks/online-consultation";
import { JoinUs } from "@/blocks/join-us";
import { SloganWithText } from "@/blocks/slogan-with-text";
import { ServiceListTiled } from "@/blocks/service-list-tiled";
import { MapWithContact } from "@/blocks/map-with-contact";
import { ContentRowsWithImages } from "@/blocks/content-rows-with-images";
import { ContentExtraWithImage } from "@/blocks/content-extra-with-image";
import { ContactUs } from "@/blocks/contact-us";

interface PageProps {
  data: {
    meta: MetaProps;
    title: string;
    blocks: BlockProps[];
  };
}

const mapBlocks = {
  "online-service": OnlineService,
  banners: Banner,
  "online-consultation": OnlineConsultation,
  "join-us": JoinUs,
  "slogan-with-text": SloganWithText,
  "service-list-tiled": ServiceListTiled,
  "map-with-contact": MapWithContact,
  "content-rows-with-images": ContentRowsWithImages,
  "content-extra-with-image": ContentExtraWithImage,
  "contact-us": ContactUs,
};

const Page: NextPage<PageProps> = ({ data }) => {
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
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
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
  let data = {};

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
  }

  return {
    props: {
      data,
    },
  };
};

export default Page;
