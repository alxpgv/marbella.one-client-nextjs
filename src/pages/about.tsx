import React from "react";
import { Container } from "@/components/Container";
import { MainLayout } from "@/layout/MainLayout/MainLayout";
import { Meta } from "@/layout/Meta";

const About = () => {
  return (
    <>
      <Meta />
      <MainLayout>
        <Container>About</Container>
      </MainLayout>
    </>
  );
};

export default About;
