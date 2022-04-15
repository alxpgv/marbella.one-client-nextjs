import React, { FC } from "react";
import { ImageProps } from "@/types";
import { Section } from "@/components/Section";
import styles from "./ListWithImage.module.scss";
import { Container } from "@/components/Container";

interface ListWithImageProps {
  title?: string;
  text?: string;
  listItems: string[];
  image: ImageProps;
  button?: "consultation" | null;
}

export const ListWithImage: FC<ListWithImageProps> = ({
  title,
  text,
  listItems,
  image,
  button,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.list}>list</div>
        <div className={styles.image}>image</div>
        <div className={styles.text}>text</div>
      </Container>
    </Section>
  );
};
