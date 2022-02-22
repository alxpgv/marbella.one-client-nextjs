import React from "react";
import { NextPage } from "next";
import Button from "@/components/Button/Button";
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
        <h1 className="text-10xl">Heading h1</h1>
        <h1 className="">Heading h1</h1>

        <h2>Heading h2</h2>
        <h3>Heading h3</h3>
        <h4>Heading h4</h4>
        <h5>Heading h5</h5>
        <h6>Heading h6</h6>

        <Button size={"lg"} color={"red"}>
          Click me
        </Button>
        <Button size={"md"} color={"red"}>
          Click me
        </Button>
        <Button size={"sm"} color={"red"}>
          Click me
        </Button>
      </main>
      <Footer />
    </>
  );
};

export default Index;
