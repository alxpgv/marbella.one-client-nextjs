import React, { FC, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuProps } from "@/types";

interface SubMenuProps {
  items: MenuProps[];
  isOpen: boolean;
}

export const SubMenu: FC<SubMenuProps> = ({ items, isOpen }) => {
  const subMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (subMenuRef?.current) {
      if (isOpen) {
        subMenuRef.current.style.maxHeight = "500px";
      } else {
        subMenuRef.current.style.maxHeight = "0";
      }
    }
  }, [isOpen]);

  return (
    <div className={`overflow-hidden ${isOpen ? "block" : "hidden"}`}>
      <ul
        className={`flex flex-col justify-center mt-3 
        divide-y divide-grey-150 transition-all duration-500`}
        ref={subMenuRef}
      >
        {items.map(({ url, title }, index: number) => (
          <li className="py-2" key={index}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
