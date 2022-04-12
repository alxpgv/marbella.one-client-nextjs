import React, { FC } from "react";
import styles from "./buttons.module.scss";

interface HamburgerProps {
  handleClick: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ handleClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles.hamburger}`}
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};
