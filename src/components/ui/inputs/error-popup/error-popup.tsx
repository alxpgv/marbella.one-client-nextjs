import React, { FC } from "react";
import styles from "./error-popup.module.scss";

interface ErrorPopupProps {
  text?: string;
}

export const ErrorPopup: FC<ErrorPopupProps> = ({ text }) => {
  return <span className={styles.popup}>{text}</span>;
};
