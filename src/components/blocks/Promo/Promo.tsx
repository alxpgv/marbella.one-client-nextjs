import React from "react";
import Image from "next/image";
import ListService from "@/components/blocks/ListService";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { listServices } from "@/constants/listServices";
import { promo } from "@/constants/promo";

const Promo = () => {
  return (
    <div className="relative w-full z-10">
      <div className="absolute left-0 top-0 right-0 h-[90vh] max-h-[1080px]">
        <Image src={promo.bgUrl} layout="fill" objectFit="cover" alt="" />
      </div>

      <Container className="relative flex flex-col">
        {/*content*/}
        <div className="max-w-[80%] md:max-w-[600px] mt-12 md:mt-32 space-y-3 md:space-y-8">
          <h1 className="text-8xl md:text-9xl lg:text-10xl font-bold text-grey-500 uppercase">
            {promo.title}
          </h1>
          <p className="bg-white/90 md:bg-transparent p-3 md:p-0 rounded-md text-lg md:text-2xl lg:text-3xl text-grey-300">
            {promo.text}
          </p>
          <Button size={"lg"} color={"red"}>
            Online consultation
          </Button>
        </div>

        {/*list services*/}
        <div className="relative mt-16 md:mt-24">
          <ListService items={listServices} />
        </div>
      </Container>
    </div>
  );
};

export default Promo;
