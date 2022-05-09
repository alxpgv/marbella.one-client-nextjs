import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { ContactInfo } from "./contact-info";
import { TiledItems, type TiledItemProps } from "@/components/tiled-items";
import styles from "./advantage-with-contact.module.scss";

interface AdvantageWithContactProps {
  title?: string;
  items: TiledItemProps[];
}

export const AdvantageWithContact: FC<AdvantageWithContactProps> = ({
  title,
  items,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.content}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <TiledItems items={items} className={styles} />
        </div>
        <ContactInfo />
      </Container>
    </Section>
  );
};
