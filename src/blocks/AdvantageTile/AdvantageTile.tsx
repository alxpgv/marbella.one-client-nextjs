import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import { TileItemProps } from "@/types";
import { ContactInfo } from "@/blocks/AdvantageTile/ContactInfo";
import { mapIcons } from "@/components/Icons";
import styles from "./AdvantageTile.module.scss";

interface AdvantageTileProps {
  title?: string;
  items: TileItemProps[];
  contact: any;
}

export const AdvantageTile: FC<AdvantageTileProps> = ({
  title,
  items,
  contact,
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
          {items?.length > 0 && (
            <div className={styles.items}>
              {items.map(({ id, title, icon }) => (
                <div key={id} className={cn("text-md-10", styles.item)}>
                  {icon && (
                    <div className={styles.itemIcon}>{mapIcons[icon]}</div>
                  )}
                  {title && (
                    <div className={cn("text-sm-25", styles.itemTitle)}>
                      {title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <ContactInfo contact={contact} />
      </Container>
    </Section>
  );
};
