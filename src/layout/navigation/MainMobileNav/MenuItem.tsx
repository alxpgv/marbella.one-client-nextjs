import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconArrow } from "@/components/Icons/IconArrow";
import { SubMenu } from "./SubMenu";
import { MenuProps } from "@/types";
import styles from "./MainMobileNav.module.scss";

export const MenuItem: FC<{ item: MenuProps }> = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const router = useRouter();
  const { title, url, child } = item;

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? styles.active : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  if (child?.length) {
    return (
      <li className={`${openSubMenu ? styles.childItem : ""}`}>
        <Link href={url}>
          <a className={activeItem(url)} onClick={toggleSubMenu}>
            {title}
            <IconArrow rotate={openSubMenu ? "rotate-180" : null} />
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
