import React, { FC } from "react";
import cn from "classnames";
import styles from "./PageTitle.module.scss";
import { Container } from "@/components/Container";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Container>
      <h1 className={cn(styles.title, "text-grey-500", "text-lg-10")}>
        {title}
      </h1>
    </Container>
  );
};
