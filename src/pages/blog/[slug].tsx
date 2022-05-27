import React from "react";
import { GetStaticProps, NextPage } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import type { EntryProps } from "@/types/entry";
import { DisplayBlocks } from "@/components/blocks/display-blocks";
import { blogEntries } from "@/data/blog/entries";
import { SEO } from "@/components/common/SEO";
import { OnlineService } from "@/components/blocks/online-service";
import { Banners } from "@/components/blocks/banners";
import { OnlineConsultation } from "@/components/blocks/online-consultation";
import { JoinUs } from "@/components/blocks/join-us";
import { SloganWithText } from "@/components/blocks/slogan-with-text";
import { SloganWithTextExtend } from "@/components/blocks/slogan-with-text-extend";
import { ContentRowsWithImages } from "@/components/blocks/content-rows-with-images";
import { ContentExtraWithImage } from "@/components/blocks/content-extra-with-image";
import { ImageWithContent } from "@/components/blocks/image-with-content";
import { ContactUs } from "@/components/blocks/contact-us";
import { TitleWithTiledItems } from "@/components/blocks/title-with-tiled-items";
import { ImageWithOverlapText } from "@/components/blocks/image-with-overlap-text";
import { Text } from "@/components/blocks/text";

const mapBlocks = {
  "online-service": OnlineService,
  banners: Banners,
  "online-consultation": OnlineConsultation,
  "join-us": JoinUs,
  "slogan-with-text": SloganWithText,
  "slogan-with-text-extend": SloganWithTextExtend,
  "content-rows-with-images": ContentRowsWithImages,
  "content-extra-with-image": ContentExtraWithImage,
  "image-with-content": ImageWithContent,
  "contact-us": ContactUs,
  "title-with-tiled-items": TitleWithTiledItems,
  "image-with-overlap-text": ImageWithOverlapText,
  text: Text,
};

const BlogEntry: NextPage<{ page: EntryProps }> = ({ page }) => {
  const meta = page?.meta;
  const title = page?.title;
  const blocks = page?.blocks;

  return (
    <MainLayout>
      <SEO {...meta} />
      <Container>
        <Breadcrumb title={title} />
        <PageTitle title={title} />
      </Container>
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const paths = blogEntries.map((entry) => ({
    params: {
      slug: entry.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const page = blogEntries.find((entry) => entry.slug === slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
    revalidate: 100,
  };
};

export default BlogEntry;
