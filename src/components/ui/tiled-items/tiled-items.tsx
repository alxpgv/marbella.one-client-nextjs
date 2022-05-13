import React, { FC } from "react";
import cn from "classnames";
import { Button, ButtonType } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import styles from "./tiled-items.module.scss";

export interface TiledItemProps {
  id: number;
  icon?: string;
  title: string;
  text?: string;
  button?: ButtonType;
  variant?: "dark";
}

export interface TiledProps {
  items: TiledItemProps[];
  className?: any;
  cols?: 3 | 4;
}

export const TiledItems: FC<TiledProps> = ({ items, className, cols }) => {
  if (!items?.length) {
    return null;
  }
  return (
    <div
      className={cn(
        className?.tileItems ? className?.tileItems : styles.tileItems,
        styles[`tileItemsCol-${cols}`]
      )}
    >
      {items.map(({ id, icon, title, text, button, variant }) => {
        return (
          <div
            key={id}
            className={cn(
              className?.tileItem ? className?.tileItem : styles.tileItem,
              variant && styles[variant]
            )}
          >
            {icon && (
              <div
                className={
                  className?.tileIcon ? className?.tileIcon : styles.tileIcon
                }
              >
                <Icon
                  name={icon}
                  className={className?.icon ? className?.icon : styles.icon}
                />
              </div>
            )}

            {title && (
              <div
                className={
                  className?.tileHeading
                    ? className?.tileHeading
                    : styles.tileHeading
                }
              >
                <h6
                  className={styles.tileTitle}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            )}

            {text && (
              <p
                className={cn(
                  "text-sm-10",
                  className?.tileText ? className?.tileText : styles.tileText
                )}
              >
                {text}
              </p>
            )}

            {button?.as && (
              <div
                className={
                  className?.tileBtn ? className?.tileBtn : styles.tileBtn
                }
              >
                <Button
                  size="sm"
                  className={styles.btn}
                  variant={variant && variant === "dark" ? "third" : "primary"}
                  {...button}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
