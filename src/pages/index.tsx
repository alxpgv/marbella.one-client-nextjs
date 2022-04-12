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
        {/*<Promo />*/}
        <h1>we will find your dream home!</h1>
        <h2>we will find your dream home!</h2>
        <h3>we will find your dream home!</h3>
        <h4>we will find your dream home!</h4>
        <h5>we will find your dream home!</h5>
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
