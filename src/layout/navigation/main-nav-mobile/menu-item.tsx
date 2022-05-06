import React, { FC, useState } from "react";
import Link from "next/link";
import { SubMenu } from "./sub-menu";
import { Icon } from "@/components/icon";
import type { MenuProps } from "../types";
import styles from "./main-nav-mobile.module.scss";

export const MenuItem: FC<{ item: MenuProps }> = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const { title, url, child } = item;

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  if (child?.length) {
    return (
      <li>
        <Link href={url}>
          <a className={openSubMenu ? styles.active : ""}>
            {title}
            <div className={styles.expandBtn} onClick={toggleSubMenu}>
              <span className={styles.iconWrapper}>
                <Icon name={"arrow"} className={styles.icon} />
              </span>
            </div>
          </a>
        </Link>
        <SubMenu items={child} isOpen={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </li>
    );
  }
};
