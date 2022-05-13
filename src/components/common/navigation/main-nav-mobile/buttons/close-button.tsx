import React, { FC } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./buttons.module.scss";

interface CloseButtonProps {
  handleClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <button className={`${styles.btn} ${styles.close}`} onClick={handleClick}>
      <Icon name={"close"} className={styles.icon} />
    </button>
  );
};
