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
import { settings } from "@/data/settings";

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
      <DisplayBlocks blocks={blocks} />
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
      settings,
    },
    revalidate: 100,
  };
};

export default BlogEntry;
