import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { mapIcons } from "@/components/Icons";
import cn from "classnames";
import type { TileItemProps } from "@/types";
import styles from "./ServiceListTile.module.scss";

interface ServiceListTileProps {
  title?: string;
  items: TileItemProps[];
}

export const ServiceListTile: FC<ServiceListTileProps> = ({ title, items }) => {
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
        <div className={styles.serviceItems}>
          {items.map(({ id, icon, title, text, button, url }) => {
            return (
              <div key={id} className={styles.item}>
                {icon && mapIcons[icon] && (
                  <div className={styles.itemIcon}>{mapIcons[icon]}</div>
                )}
                {title && (
                  <div className={styles.itemTitle}>
                    <h6 className={cn("text-sm-30", styles.itemTitle)}>
                      {title}
                    </h6>
                  </div>
                )}

                {text && (
                  <p className={cn("text-sm-20", styles.itemText)}>{text}</p>
                )}

                <div className={styles.itemBtn}>
                  <Button size="sm" variant={"primary"}>
                    Read more
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
