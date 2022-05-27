import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import { BlogCategory } from "@/components/blog/blog-category";
import { BlockProps, DisplayBlocks } from "@/components/blocks/display-blocks";
import { OnlineService } from "@/components/blocks/online-service";
import { Banners } from "@/components/blocks/banners";
import { OnlineConsultation } from "@/components/blocks/online-consultation";
import { JoinUs } from "@/components/blocks/join-us";
import { ContactUs } from "@/components/blocks/contact-us";
import { blogCategory } from "@/data/blog/category";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";

export interface BlogProps {
  page: EntryProps & {
    entries: EntryProps[];
    blocks: BlockProps[];
  };
}

const mapBlocks = {
  "online-service": OnlineService,
  banners: Banners,
  "online-consultation": OnlineConsultation,
  "join-us": JoinUs,
  "contact-us": ContactUs,
};

const BlogIndex: NextPage<BlogProps> = ({ page }) => {
  const meta = page?.meta;
  const title = page?.title;
  const blocks = page?.blocks;
  const entries = page?.entries;

  return (
    <MainLayout>
      <SEO {...meta} />
      <Container>
        <Breadcrumb />
        <PageTitle title={title} />
      </Container>
      <BlogCategory entries={entries} />
      <DisplayBlocks blocks={blocks} mapBlocks={mapBlocks} />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const page = blogCategory;

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

export default BlogIndex;
