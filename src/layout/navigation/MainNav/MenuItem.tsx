import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconArrow } from "@/components/Icons/IconArrow";
import { MenuProps } from "@/types";
import { SubMenu } from "@/layout/navigation/MainNav/SubMenu";
import styles from "./MainNav.module.scss";

export const MenuItem: FC<{ item: MenuProps }> = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;
  const hasChildRef = useRef<HTMLLIElement | null>(null);

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? styles.active : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  // TODO: check this code
  useEffect(() => {
    if (child?.length && openSubMenu) {
      const handleClickOutside = (e: any) => {
        if (!hasChildRef?.current?.contains(e.target)) {
          setOpenSubMenu(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [openSubMenu]);

  if (child?.length) {
    return (
      <li ref={hasChildRef}>
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
