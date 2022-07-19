import React, { FC } from "react";
import type { MenuItemProps } from "@/components/common/navigation/types";
import Link from "next/link";
import cn from "clsx";
import styles from "./footer.module.scss";

interface FooterMenuItems {
  items: MenuItemProps[];
  itemTitle: string | React.ReactNode;
}

export const FooterMenuItems: FC<FooterMenuItems> = ({ items, itemTitle }) => {
  if (items?.length > 0) {
    return (
      <div className={cn(styles.col, styles.menu)}>
        {itemTitle && <div className={styles.menuTitle}>{itemTitle}</div>}
        {items.map(({ id, label, slug }) => {
          return (
            <Link key={id} href={slug}>
              <a className={styles.menuItem}>{label}</a>
            </Link>
          );
        })}
      </div>
    );
  }

  return null;
};
