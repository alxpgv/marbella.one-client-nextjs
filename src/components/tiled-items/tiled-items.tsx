import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import styles from "./tiled-items.module.scss";

export interface TiledItemProps {
  id: number;
  icon?: string;
  title: string;
  text?: string;
  button?: "link" | "callback" | "consultation" | null;
  href?: string;
}

interface TiledItemsProps {
  items: TiledItemProps[];
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
            {icon && (
              <div className={cn(styles.tileIcon, className?.tileIcon)}>
                <Icon
                  name={icon}
                  className={cn(styles.icon, className?.icon)}
                />
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
                <Button size="sm">Read more</Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
