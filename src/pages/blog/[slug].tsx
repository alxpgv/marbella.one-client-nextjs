import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";
import type { EntryProps } from "@/types/entry";

const BlogPages: NextPage<{ page: EntryProps }> = ({ page }) => {
  return (
    <MainLayout>
      <Container>
        <Breadcrumb />
        <PageTitle title={"Blog"} />
      </Container>
    </MainLayout>
  );
};

export default BlogPages;
