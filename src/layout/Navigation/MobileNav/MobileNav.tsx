import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { IconClose } from "@/components/Icons/IconClose";
import { MenuItem } from "@/layout/Navigation/MobileNav/MenuItem";
import { Socials } from "@/layout/Navigation/MobileNav/Socials";
import { MenuItemProps } from "@/components/Navigation/Nav";
import { settings } from "@/data/settings";
import { clearPhone } from "@/lib/helpers";

export const MobileNav = ({ menu }: { menu: MenuItemProps[] }) => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    opened
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [opened]);

  return (
    <nav className="lg:hidden" role="navigation">
      {/*hamburger btn*/}
      <div
        className="flex flex-col items-end justify-center h-[32px] w-[32px] p-1 space-y-1 ml-5 cursor-pointer"
        onClick={() => setOpened(true)}
      >
        <span className="block border-b border-b-grey-500 w-full" />
        <span className="block border-b border-b-grey-500 w-[13px]" />
        <span className="block border-b border-b-grey-500 w-[17px]" />
        <span className="block border-b border-b-grey-500 w-full" />
      </div>

      {/*background overlay*/}
      <div
        className={`left-0 top-0 bottom-0 right-0 bg-black opacity-60 z-30 ${
          opened ? "fixed" : "hidden"
        }`}
      />

      {/*container*/}
      <div
        className={`h-screen fixed flex top-0 right-0 left-0 transition-transform duration-200 z-40 ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/*left overlay*/}
        <div className="flex-1 min-w-[40px]" onClick={() => setOpened(false)} />

        {/*right container for menu*/}
        <div className="flex-1 flex flex-col min-w-[280px] max-w-[400px] bg-white">
          {/*header*/}
          <div className="flex items-center justify-between p-4 border-b border-red-400 bg-grey-200">
            {/*phone link*/}
            <a
              className="text-lg text-red-400"
              href={`tel:${clearPhone(settings.phone)}`}
            >
              {settings.phone}
            </a>
            {/*callback btn*/}
            <Button size="xs" color="red">
              Callback
            </Button>

            {/*close btn*/}
            <button
              className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-grey-100 active:border-2 border-red-400"
              onClick={() => setOpened(false)}
            >
              <IconClose />
            </button>
          </div>
          {/*menu*/}
          <ul className="divide-y divide-grey-150 text-base overflow-y-auto overscroll-contain">
            {menu.length &&
              menu.map((item, index) => <MenuItem item={item} key={index} />)}
          </ul>
          {/*socials icons link*/}
          <div className="w-full py-4 mt-auto border-t border-red-400 bg-grey-200">
            <div className="flex justify-between w-[72%] mx-auto">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
