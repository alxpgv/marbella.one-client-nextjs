import React, { FC } from "react";
import Link from "next/link";
import type { MenuProps } from "../types";
import cn from "clsx";
import styles from "./main-nav-mobile.module.scss";

interface SubMenuProps {
  items: MenuProps[];
  isOpen: boolean;
  onClickItem?: () => void;
}

export const SubMenu: FC<SubMenuProps> = ({ items, isOpen, onClickItem }) => {
  return (
    <ul className={cn(styles.subMenu, isOpen ? styles.isOpen : "")}>
      {items.map(({ slug, label }, index: number) => (
        <li key={index}>
          <Link href={slug}>
            <a onClick={onClickItem}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
