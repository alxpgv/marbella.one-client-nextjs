import React from "react";
import { NextPage } from "next";
import Promo from "@/components/Promo";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Meta from "@/layout/Meta";

const Index: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <Promo />
      </main>
      <Footer />
    </>
  );
};

export default Index;
