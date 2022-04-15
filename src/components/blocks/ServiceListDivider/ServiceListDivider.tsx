import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/Button";
import { mapIcons } from "@/components/Icons";
import styles from "./ServiceListDivider.module.scss";
import { ServiceListProps } from "@/types";

export const ServiceListDivider: FC<{ items: ServiceListProps[] }> = ({
  items,
}) => {
  return (
    <div className={styles.service}>
      {items?.length > 0 &&
        items.map(({ id, icon, title, text, link }) => {
          return (
            <div key={id} className={styles.item}>
              {mapIcons[icon] && (
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
  );
};