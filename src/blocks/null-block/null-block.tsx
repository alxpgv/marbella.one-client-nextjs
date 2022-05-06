import React from "react";
import styles from "./null-block.module.scss";
import cn from "classnames";

export const NullBlock = ({ blockName = "" }: { blockName: string }) => {
  return (
    <div className={cn(styles.block, "text-sm")}>
      Not found component by name: <strong>{blockName}</strong>
    </div>
  );
};
