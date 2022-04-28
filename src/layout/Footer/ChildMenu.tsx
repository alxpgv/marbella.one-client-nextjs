import React from "react";
import { MenuProps } from "@/types";
import cn from "classnames";
import Link from "next/link";
import styles from "@/layout/Footer/Footer.module.scss";

export const ChildMenu = ({ menuItem }: { menuItem: MenuProps }) => {
  if (menuItem?.child && menuItem.child.length > 0) {
    return (
      <div className={cn(styles.col, styles.menu)}>
        <div className={styles.menuTitle}>{menuItem.title}</div>
        {menuItem.child.map(({ id, title, url }) => {
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
