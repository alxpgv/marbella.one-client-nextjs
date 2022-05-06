import React, { FC } from "react";
import cn from "classnames";
import styles from "./page-title.module.scss";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title = "" }) => {
  return (
    <h1 className={cn(styles.title, "text-grey-500", "text-lg-10")}>{title}</h1>
  );
};
