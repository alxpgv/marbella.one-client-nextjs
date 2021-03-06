import React, { FC, useState } from "react";
import Link from "next/link";
import { SubMenu } from "./sub-menu";
import { Icon } from "@/components/ui/icon";
import type { MenuProps } from "../types";
import styles from "./main-nav-mobile.module.scss";

interface MenuItemProps {
  item: MenuProps;
  onClick?: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ item, onClick }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const { label, slug, child } = item;

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubMenu((prev) => !prev);
  };

  if (child?.length) {
    return (
      <li>
        <Link href={slug}>
          <a className={openSubMenu ? styles.active : ""} onClick={onClick}>
            {label}
            <div className={styles.expandWrapper} onClick={toggleSubMenu}>
              <div className={styles.expandBtn}>
                <span className={styles.iconWrapper}>
                  <Icon name={"arrow"} className={styles.icon} />
                </span>
              </div>
            </div>
          </a>
        </Link>
        <SubMenu items={child} isOpen={openSubMenu} onClickItem={onClick} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={slug}>
          <a onClick={onClick}>{label}</a>
        </Link>
      </li>
    );
  }
};
