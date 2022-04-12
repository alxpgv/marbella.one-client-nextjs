import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconArrow } from "@/components/Icons/IconArrow";
import { MenuItemsProps } from "@/components/Navigation/Nav";
import { SubMenu } from "@/components/Navigation/Nav/SubMenu";

export const MenuItem = ({ item }: { item: MenuItemsProps }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;
  const hasChildLinkRef = useRef<HTMLLIElement | null>(null);

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? "text-red-400" : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  // TODO: check this code
  useEffect(() => {
    if (child?.length && openSubMenu) {
      const handleClickOutside = (e: any) => {
        if (!hasChildLinkRef?.current?.contains(e.target)) {
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
      <li
        className="flex relative items-center self-stretch"
        ref={hasChildLinkRef}
      >
        <Link href={url}>
          <a
            className={`flex items-center hover:text-red-400 ${activeItem(
              url
            )}`}
            onClick={toggleSubMenu}
          >
            {title}
            <IconArrow rotate={openSubMenu ? "rotate-180" : null} />
          </a>
        </Link>
        <SubMenu items={child} opened={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={url}>
          <a className={`hover:text-red-400 ${activeItem(url)}`}>{title}</a>
        </Link>
      </li>
    );
  }
};
