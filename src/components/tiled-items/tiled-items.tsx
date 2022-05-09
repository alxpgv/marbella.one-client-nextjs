import React, { FC } from "react";
import cn from "classnames";
import { Button, ButtonType } from "@/components/button";
import { Icon } from "@/components/icon";
import styles from "./tiled-items.module.scss";

export interface TiledItemProps {
  id: number;
  icon?: string;
  title: string;
  text?: string;
  button?: ButtonType;
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
      {items.map(({ id, icon, title, text, button }) => {
        return (
          <div
            key={id}
            className={
              className?.tileItem ? className?.tileItem : styles.tileItem
            }
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
                <h6 dangerouslySetInnerHTML={{ __html: title }} />
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
                <Button size="sm" className={styles.btn} {...button} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
