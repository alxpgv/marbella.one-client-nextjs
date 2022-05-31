import React, { ReactNode } from "react";
import { NullBlock } from "@/components/blocks/null-block";
import { HomePromo } from "@/components/blocks/home-promo";
import { ListWithStrictImage } from "@/components/blocks/list-with-strict-image";
import { ImageWithOverlapText } from "@/components/blocks/image-with-overlap-text";
import { ListWithImage } from "@/components/blocks/list-with-image";
import { AdvantageWithContact } from "@/components/blocks/advantage-with-contact";
import { SaleConsultation } from "@/components/blocks/sale-consultation";
import { OnlineService } from "@/components/blocks/online-service";
import { Banners } from "@/components/blocks/banners";
import { OnlineConsultation } from "@/components/blocks/online-consultation";
import { JoinUs } from "@/components/blocks/join-us";
import { ContactUs } from "@/components/blocks/contact-us";
import { SloganWithText } from "@/components/blocks/slogan-with-text";
import { SloganWithTextExtend } from "@/components/blocks/slogan-with-text-extend";
import { ContentRowsWithImages } from "@/components/blocks/content-rows-with-images";
import { ContentExtraWithImage } from "@/components/blocks/content-extra-with-image";
import { ImageWithContent } from "@/components/blocks/image-with-content";
import { TitleWithTiledItems } from "@/components/blocks/title-with-tiled-items";
import { Text } from "@/components/blocks/text";
import { MapWithContact } from "@/components/blocks/map-with-contact";
import { AvatarWithQuote } from "@/components/blocks/avatar-with-quote";
import { LastReview } from "@/components/blocks/last-review";

export interface BlockProps {
  blockName: string;
  fields?: any;
}

interface DisplayBlocksProps {
  blocks: BlockProps[];
}

const mapBlocks: { [key: string]: ReactNode } = {
  "home-promo": HomePromo,
  "list-with-strict-image": ListWithStrictImage,
  "image-with-overlap-text": ImageWithOverlapText,
  "list-with-image": ListWithImage,
  "advantage-with-contact": AdvantageWithContact,
  "sale-consultation": SaleConsultation,
  "online-service": OnlineService,
  banners: Banners,
  "online-consultation": OnlineConsultation,
  // "join-us": JoinUs,
  "contact-us": ContactUs,
  "slogan-with-text": SloganWithText,
  "slogan-with-text-extend": SloganWithTextExtend,
  "content-rows-with-images": ContentRowsWithImages,
  "content-extra-with-image": ContentExtraWithImage,
  "image-with-content": ImageWithContent,
  "title-with-tiled-items": TitleWithTiledItems,
  text: Text,
  "map-with-contact": MapWithContact,
  "avatar-with-quote": AvatarWithQuote,
  "last-review": LastReview,
};

export const DisplayBlocks = ({ blocks }: DisplayBlocksProps) => {
  return (
    <>
      {blocks?.length > 0 &&
        blocks.map(({ blockName, fields = {} }, i) => {
          const index = `${blockName}-${i}`;
          if (blockName in mapBlocks) {
            return React.createElement(mapBlocks[blockName] as string, {
              key: index,
              ...fields,
            });
          }
          return <NullBlock key={index} blockName={blockName} />;
        })}
    </>
  );
};
