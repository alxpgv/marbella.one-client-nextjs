import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import type { TiledItemProps } from "@/components/TiledItems";
import { ContactInfo } from "./ContactInfo";
import { TiledItems } from "@/components/TiledItems";
import styles from "./AdvantageWithContact.module.scss";

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
          {title && (
            <div className={styles.heading}>
              <h2 className="text-lg-10">{title}</h2>
            </div>
          )}
          <TiledItems items={items} className={styles} />
        </div>
        <ContactInfo />
      </Container>
    </Section>
  );
};
