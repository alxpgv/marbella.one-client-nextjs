import React from "react";
import styles from "./NullBlock.module.scss";

export const NullBlock = ({ blockName = "" }: { blockName: string }) => {
  return (
    <div className={styles.block}>
      <strong>Not found view for block by name: {blockName}</strong>
    </div>
  );
};
