import React from "react";
import { NextPage } from "next";
import { pageHome } from "@/data/pages/home";
import { MainLayout } from "@/components/common/main-layout";
import { DisplayBlocks } from "@/components/blocks/display-blocks";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";
import { settings } from "@/data/settings";

const Index: NextPage<{ page: EntryProps }> = ({ page }) => {
  const meta = page?.meta;
  const blocks = page?.blocks;

  return (
    <MainLayout navbarOffset={false}>
      <SEO {...meta} />
      <DisplayBlocks blocks={blocks} />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const page = pageHome;

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
  };
};

export default Index;
