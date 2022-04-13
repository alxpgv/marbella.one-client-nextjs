import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/Button";
import { mapIcons } from "@/components/Icons";
import styles from "./ServiceList.module.scss";

interface ServiceListProps {
  variant: "primary" | "secondary";
  items: {
    id: number;
    icon: string;
    title: string;
    text: string;
    link: string;
  }[];
}

export const ServiceList: FC<ServiceListProps> = ({
  variant = "primary",
  items,
}) => {
  return (
    <div className={cn(styles.service, styles[`service-${variant}`])}>
      {items?.length > 0 &&
        items.map(({ id, icon, title, text, link }) => {
          return (
            <div key={id} className={styles.item}>
              {mapIcons[icon] && (
                <div className={styles.itemIcon}>{mapIcons[icon]}</div>
              )}
              {title && (
                <div className={styles.itemTitle}>
                  <h6 className={styles.itemTitle}>{title}</h6>
                </div>
              )}

              {text && <p className={cn("text-sm", styles.itemText)}>{text}</p>}

              <div className={styles.itemBtn}>
                <Button size="sm" variant={"primary"}>
                  Read more
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
