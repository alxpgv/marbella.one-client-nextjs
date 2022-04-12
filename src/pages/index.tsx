import React from "react";
import { NextPage } from "next";
import { Promo } from "@/components/blocks/Promo";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { Meta } from "@/layout/Meta";

const Index: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <Promo />
        <p>asdasd asdasdas asdasdasd asdsad </p>
        <p>asdasd asdasdas asdasdasd asdsad </p>
        <p>asdasd asdasdas asdasdasd asdsad </p>
        <p>asdasd asdasdas asdasdasd asdsad </p>
        <p>asdasd asdasdas asdasdasd asdsad </p>
      </main>
      <Footer />
    </>
  );
};

export default Index;
