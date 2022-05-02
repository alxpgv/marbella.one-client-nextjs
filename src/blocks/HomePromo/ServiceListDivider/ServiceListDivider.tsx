import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/Button";
import { mapIcons } from "@/components/Icons";
import type { TileItemProps } from "@/types";
import styles from "./ServiceListDivider.module.scss";

export const ServiceListDivider: FC<{ items: TileItemProps[] }> = ({
  items,
}) => {
  return (
    <div className={styles.serviceItems}>
      {items.map(({ id, icon, title, text, button, url }) => {
        return (
          <div key={id} className={styles.item}>
            {icon && mapIcons[icon] && (
              <div className={styles.itemIcon}>{mapIcons[icon]}</div>
            )}
            {title && (
              <div className={styles.itemTitle}>
                <h6 className={cn("text-sm-30", styles.itemTitle)}>{title}</h6>
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
