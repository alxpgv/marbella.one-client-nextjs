import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import type { TileItemProps } from "@/types";
import styles from "./ServiceListTiled.module.scss";
import { TiledItems } from "@/components/TiledItems";

interface ServiceListTiledProps {
  title?: string;
  items: TileItemProps[];
}

export const ServiceListTiled: FC<ServiceListTiledProps> = ({
  title,
  items,
}) => {
  return (
    <Section>
      <Container>
        {title && (
          <div className={cn(styles.heading, "text-grey-500")}>
            <span className={styles.firstLetter}>{title.charAt(0)}</span>
            <h2
              className={cn(styles.title, "text-lg-10")}
              dangerouslySetInnerHTML={{ __html: title.slice(1) }}
            />
          </div>
        )}
        <TiledItems items={items} className={styles} />
      </Container>
    </Section>
  );
};
