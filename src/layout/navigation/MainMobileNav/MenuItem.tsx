import React, { FC, useState } from "react";
import Link from "next/link";
import { IconArrow } from "@/components/Icons/IconArrow";
import { SubMenu } from "./SubMenu";
import { MenuProps } from "@/types";
import styles from "./MainMobileNav.module.scss";

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
              <IconArrow rotate={openSubMenu ? "rotate-180" : null} />
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
