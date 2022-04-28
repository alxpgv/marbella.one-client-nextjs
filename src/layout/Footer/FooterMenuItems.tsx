import React, { FC } from "react";
import { MenuItemProps } from "@/types";
import Link from "next/link";
import styles from "@/layout/Footer/Footer.module.scss";
import cn from "classnames";
import { mainMenu } from "@/data/settings";

interface FooterMenuItems {
  items: MenuItemProps[];
  title: string;
}

export const FooterMenuItems: FC<FooterMenuItems> = ({ items, title }) => {
  if (items?.length > 0) {
    return (
      <div className={cn(styles.col, styles.menu)}>
        {title && <div className={styles.menuTitle}>{title}</div>}
        {items.map(({ id, title, url }) => {
          return (
            <Link key={id} href={url}>
              <a className={styles.menuItem}>{title}</a>
            </Link>
          );
        })}
      </div>
    );
  }

  return null;
};
