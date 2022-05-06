import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "../types";
import { SubMenu } from "./sub-menu";
import { Icon } from "@/components/icon";
import styles from "./main-nav.module.scss";

export const MenuItem: FC<{ item: MenuProps }> = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? styles.active : "";
  };

  const handleMouseEnter = () => {
    setOpenSubMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenSubMenu(false);
  };

  if (child?.length) {
    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={url}>
          <a className={activeItem(url)}>
            {title}
            <Icon name={"arrow"} className={styles.icon} />
          </a>
        </Link>
        <SubMenu items={child} isOpen={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={url}>
          <a className={activeItem(url)}>{title}</a>
        </Link>
      </li>
    );
  }
};
