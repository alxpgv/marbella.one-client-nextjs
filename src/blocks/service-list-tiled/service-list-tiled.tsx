import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import cn from "classnames";
import { TiledItems, type TiledItemProps } from "@/components/tiled-items";
import styles from "./service-list-tiled.module.scss";

interface ServiceListTiledProps {
  title?: string;
  items: TiledItemProps[];
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
