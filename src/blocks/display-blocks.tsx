import React from "react";
import { NullBlock } from "@/blocks/null-block";
import { HomePromo } from "@/blocks/home-promo";
import { ListWithStrictImage } from "@/blocks/list-with-strict-image";
import { ListWithImage } from "@/blocks/list-with-image";
import { AdvantageWithContact } from "@/blocks/advantage-with-contact";
import { SaleConsultation } from "@/blocks/sale-consultation";
import { OnlineService } from "@/blocks/online-service";
import { Banner } from "@/blocks/banner";
import { OnlineConsultation } from "@/blocks/online-consultation";
import { SloganWithText } from "@/blocks/slogan-with-text";
import { ImageWithOverlapText } from "@/blocks/image-with-overlap-text";
import { ServiceListTiled } from "@/blocks/service-list-tiled";
import { JoinUs } from "@/blocks/join-us";
import { MapWithContact } from "@/blocks/map-with-contact";

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
