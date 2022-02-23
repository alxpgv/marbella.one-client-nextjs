import React from "react";
import Image from "next/image";
import styles from "./Promo.module.css";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { dataIndex } from "@/constants/pageIndex";

const Promo = () => {
  return (
    <div className={styles.container}>
      <Image
        src={dataIndex.promo.bgSrc}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <Container className="relative flex items-center h-full z-10">
        <div className="max-w-[80%] md:max-w-[600px] space-y-3 md:space-y-8">
          <h1 className="text-8xl md:text-9xl lg:text-10xl font-bold text-grey-500 uppercase">
            {dataIndex.promo.title}
          </h1>
          <p className="bg-white/90 md:bg-transparent p-3 md:p-0 rounded-md text-lg md:text-2xl lg:text-3xl text-grey-300">
            {dataIndex.promo.text}
          </p>
          <Button size={"lg"} color={"red"}>
            Online consultation
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Promo;
