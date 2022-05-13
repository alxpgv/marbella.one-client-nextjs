import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/components/common/main-layout";
import { Meta } from "@/components/common/meta";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTitle } from "@/components/ui/page-title";

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
