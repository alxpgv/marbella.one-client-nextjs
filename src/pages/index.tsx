import React from "react";
import { NextPage } from "next";
import { Promo } from "@/components/blocks/Promo";
import { MainLayout } from "@/layout/MainLayout";

const Index: NextPage = () => {
  return (
    <MainLayout>
      <Promo />
    </MainLayout>
  );
};

export default Index;
