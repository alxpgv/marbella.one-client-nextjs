import React, { RefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItemsProps } from "@/layout/Navigation/NavBar";
import SubMenu from "@/layout/Navigation/SubMenu";

const MenuItem = ({ item }: { item: MenuItemsProps }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;
  const hasChildLinkRef: RefObject<HTMLAnchorElement> = useRef(null);

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname ? "text-red-400" : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  // TODO: check this code
  useEffect(() => {
    if (child?.length && openSubMenu) {
      const handlerOverlay = (e: any) => {
        if (
          hasChildLinkRef.current &&
          !hasChildLinkRef.current.contains(e.target)
        ) {
          setOpenSubMenu(false);
        }
      };

      document.addEventListener("mousedown", handlerOverlay);

      return () => {
        document.removeEventListener("mousedown", handlerOverlay);
      };
    }
  }, [openSubMenu]);

  return (
    <>
      {child?.length ? (
        <li className="flex relative items-center self-stretch">
          <Link href={url}>
            <a
              className={`hover:text-red-400 ${activeItem(url)}`}
              onClick={toggleSubMenu}
              ref={hasChildLinkRef}
            >
              {title}
            </a>
          </Link>
          <SubMenu items={child} opened={openSubMenu} />
        </li>
      ) : (
        <li>
          <Link href={url}>
            <a className={`hover:text-red-400 ${activeItem(url)}`}>{title}</a>
          </Link>
        </li>
      )}
    </>
  );
};

export default MenuItem;
