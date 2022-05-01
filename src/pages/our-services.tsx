import React from "react";
import { NextPage } from "next";
import { Meta } from "@/layout/Meta";
import { MainLayout } from "@/layout/MainLayout";

const OurServices: NextPage = () => {
  return (
    <MainLayout>
      <Meta title={"Our services"} />
      <div>Our services</div>
    </MainLayout>
  );
};

export default OurServices;
