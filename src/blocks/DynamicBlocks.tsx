import React from "react";
import { NullBlock } from "@/blocks/NullBlock";
import { HomePromo } from "@/blocks/HomePromo";
import { ListWithStrictImage } from "@/blocks/ListWithStrictImage";
import { ListWithImage } from "@/blocks/ListWithImage";
import { AdvantageWithContact } from "@/blocks/AdvantageWithContact";
import { SaleConsultation } from "@/blocks/SaleConsultation";
import { OnlineService } from "@/blocks/OnlineService";
import { Banner } from "@/blocks/Banner";
import { OnlineConsultation } from "@/blocks/OnlineConsultation";
import { SloganWithText } from "@/blocks/SloganWithText";
import { ImageWithOverlapText } from "@/blocks/ImageWithOverlapText";
import { ServiceListTiled } from "@/blocks/ServiceListTiled";
import { SocialWithContact } from "@/blocks/SocialWithContact";

interface DynamicBlockProps {
  blocks: {
    blockName: string;
    fields?: any;
  }[];
}

const mapBlocks = {
  "home-promo": HomePromo,
  "list-with-strict-image": ListWithStrictImage,
  "image-with-overlap-text": ImageWithOverlapText,
  "list-with-image": ListWithImage,
  "advantage-with-contact": AdvantageWithContact,
  "sale-consultation": SaleConsultation,
  "online-service": OnlineService,
  banners: Banner,
  "online-consultation": OnlineConsultation,
  "social-with-contact": SocialWithContact,
  "slogan-with-text": SloganWithText,
  "service-list-tiled": ServiceListTiled,
};

export const DynamicBlocks = ({ blocks }: DynamicBlockProps) => {
  return (
    <>
      {blocks?.length > 0 &&
        blocks.map(({ blockName, fields = {} }, i) => {
          const index = `${blockName}-${i}`;
          if (blockName in mapBlocks) {
            // @ts-ignore
            return React.createElement(mapBlocks[blockName], {
              key: index,
              ...fields,
            });
          }
          return <NullBlock key={index} blockName={blockName} />;
        })}
    </>
  );
};
