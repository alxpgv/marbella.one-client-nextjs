import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import { BlogCategory } from "@/components/blog/blog-category";
import { BlockProps, DisplayBlocks } from "@/components/blocks/display-blocks";
import { blogCategory } from "@/data/blog/category";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";
import { settings } from "@/data/settings";

export interface BlogProps {
  page: EntryProps & {
    entries: EntryProps[];
    blocks: BlockProps[];
  };
}

const BlogIndex: NextPage<BlogProps> = ({ page }) => {
  const meta = page?.meta;
  const title = page?.title;
  const blocks = page?.blocks;
  const entries = page?.entries;

  return (
    <MainLayout>
      <SEO {...meta} />
      <Container>
        <Breadcrumb title={title} />
        <PageTitle title={title} />
      </Container>
      <BlogCategory entries={entries} />
      <DisplayBlocks blocks={blocks} />
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
      settings,
    },
    revalidate: 100,
  };
};

export default BlogIndex;
