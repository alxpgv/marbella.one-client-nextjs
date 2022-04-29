import React, { FC } from "react";
import { MenuItemProps } from "@/types";
import Link from "next/link";
import cn from "classnames";
import styles from "@/layout/Footer/Footer.module.scss";

interface FooterMenuItems {
  items: MenuItemProps[];
  itemTitle: string | React.ReactNode;
}

export const FooterMenuItems: FC<FooterMenuItems> = ({ items, itemTitle }) => {
  if (items?.length > 0) {
    return (
      <div className={cn(styles.col, styles.menu)}>
        {itemTitle && <div className={styles.menuTitle}>{itemTitle}</div>}
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
