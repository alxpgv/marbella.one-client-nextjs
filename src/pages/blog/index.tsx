import React from "react";
import { NextPage } from "next";
import { MainLayout } from "@/layout/MainLayout";
import { Meta } from "@/layout/Meta";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";

const BlogIndex: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <Breadcrumb links={[{ title: "Blog" }]} />
        <PageTitle title={"Blog"} />
      </Container>
    </MainLayout>
  );
};

export default BlogIndex;
