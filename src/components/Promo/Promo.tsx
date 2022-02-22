import React from "react";
import Image from "next/image";
import { dataIndex } from "@/constants/pageIndex";

const Promo = () => {
  return (
    <div className="relative h-screen w-full">
      <Image src={dataIndex.promoSrc} layout="fill" objectFit="cover" alt="" />
    </div>
  );
};

export default Promo;
