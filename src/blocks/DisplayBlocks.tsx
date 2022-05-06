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
import { JoinUs } from "@/blocks/JoinUs";
import { MapWithContact } from "@/blocks/MapWithContact";

export interface BlockProps {
  blockName: string;
  fields?: any;
}

interface DisplayBlocksProps {
  blocks: BlockProps[];
}

// TODO:
// now generate to shared bundle css
// the styles of these blocks are compiled in one css bundle (one bundle for all pages)
// if it is dynamic, then compile a separate css bundle for each block (it turns out a lot css files)
// optionally - for each page a separate map of blocks example: ({blocks, mapBlocks}) - (one bundle for page)

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
  "join-us": JoinUs,
  "slogan-with-text": SloganWithText,
  "service-list-tiled": ServiceListTiled,
  "map-with-contact": MapWithContact,
};

export const DisplayBlocks = ({ blocks }: DisplayBlocksProps) => {
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
