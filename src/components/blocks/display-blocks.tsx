import React, { ReactNode } from "react";
import { NullBlock } from "@/components/blocks/null-block";

export interface BlockProps {
  blockName: string;
  fields?: any;
}

interface DisplayBlocksProps {
  blocks: BlockProps[];
  mapBlocks: { [key: string]: ReactNode };
}

export const DisplayBlocks = ({ blocks, mapBlocks }: DisplayBlocksProps) => {
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
