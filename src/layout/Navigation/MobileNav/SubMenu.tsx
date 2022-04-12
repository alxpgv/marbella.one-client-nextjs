import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MenuItemProps } from "@/layout/Navigation/Nav";

export const SubMenu = ({
  items,
  opened,
}: {
  items: MenuItemProps[];
  opened: boolean;
}) => {
  const subMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (subMenuRef?.current) {
      if (opened) {
        subMenuRef.current.style.maxHeight = "500px";
      } else {
        subMenuRef.current.style.maxHeight = "0";
      }
    }
  }, [opened]);

  return (
    <div className={`overflow-hidden ${opened ? "block" : "hidden"}`}>
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
