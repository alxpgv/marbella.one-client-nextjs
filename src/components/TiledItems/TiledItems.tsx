import React, { FC } from "react";
import { mapIcons } from "@/components/Icons";
import cn from "classnames";
import { Button } from "@/components/Button";
import { TileItemProps } from "@/types";
import styles from "./TiledItems.module.scss";

interface TiledItemsProps {
  items: TileItemProps[];
  className?: any;
}

export const TiledItems: FC<TiledItemsProps> = ({ items, className }) => {
  if (!items?.length) {
    return null;
  }
  return (
    <div className={className?.tileItems}>
      {items.map(({ id, icon, title, text, button, href }) => {
        return (
          <div key={id} className={className?.tileItem}>
            {icon && mapIcons[icon] && (
              <div className={cn(styles.tileIcon, className?.tileIcon)}>
                {mapIcons[icon]}
              </div>
            )}

            {title && (
              <div className={cn(styles.tileHeading, className?.tileHeading)}>
                <h6 className={"text-sm-30"}>{title}</h6>
              </div>
            )}

            {text && (
              <p
                className={cn(
                  "text-sm-20",
                  styles.tileText,
                  className?.tileText
                )}
              >
                {text}
              </p>
            )}

            {href && (
              <div className={cn(styles.tileBtn, className?.tileBtn)}>
                <Button size="sm" variant={"primary"}>
                  Read more
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
