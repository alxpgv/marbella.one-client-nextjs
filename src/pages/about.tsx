import React from "react";
import { Container } from "@/components/Container";
import { MainLayout } from "@/layout/MainLayout/MainLayout";
import { Meta } from "@/layout/Meta";
import { ListService } from "@/components/blocks/ListService";
import { listServices } from "@/data/listServices";

const About = () => {
  return (
    <>
      <Meta />
      <MainLayout>
        <ListService items={listServices} />
        <Container>About</Container>
      </MainLayout>
    </>
  );
};

export default About;
