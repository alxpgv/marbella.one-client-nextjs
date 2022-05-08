import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/layout/main-layout";
import { Meta } from "@/layout/meta";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageTitle } from "@/components/page-title";

const BlogIndex: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <Breadcrumb />
        <PageTitle title={"Blog"} />
      </Container>
    </MainLayout>
  );
};

export default BlogIndex;
