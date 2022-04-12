import React, { FC } from "react";
import { IconClose } from "@/components/Icons/IconClose";
import styles from "./buttons.module.scss";

interface CloseButtonProps {
  handleClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <button className={`${styles.btn} ${styles.close}`} onClick={handleClick}>
      <IconClose />
    </button>
  );
};
