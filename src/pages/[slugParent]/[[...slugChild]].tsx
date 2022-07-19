import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import { DisplayBlocks } from "@/components/blocks/display-blocks";
import type { EntryProps } from "@/types/entry";
import { SEO } from "@/components/common/SEO";
import { mainMenu, settings } from "@/data/settings";
import { getPathsFromMenu, getAllPages } from "@/utils/pages";

const Pages: NextPage<{ page: EntryProps }> = ({ page }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPathsFromMenu(mainMenu, "page").concat(
    {
      params: { slugParent: "privacy-policy", slugChild: [] },
    },
    {
      params: { slugParent: "personal-data", slugChild: [] },
    }
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slugParent ""
  // slugChild ["", ""]
  const slugParent = String(params?.slugParent);
  const slugChild =
    params?.slugChild && params.slugChild[0] ? params.slugChild[0] : null;

  const slug = slugParent
    ? slugChild
      ? `${slugParent}/${slugChild}`
      : slugParent
    : null;

  //TODO: refactoring
  const page = slug ? getAllPages(slug) : null;

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

export default Pages;
