import React, { useEffect, useState } from "react";

const MobileNav = () => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    opened
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [opened]);

  return (
    <nav className="lg:hidden">
      <div
        className="flex flex-col items-end justify-center h-[32px] w-[32px] p-1 space-y-1 ml-5 cursor-pointer"
        onClick={() => setOpened(true)}
      >
        <span className="block w-full border-b border-b-grey-500" />
        <span className="block w-[13px] border-b border-b-grey-500" />
        <span className="block w-[17px] border-b border-b-grey-500" />
        <span className="block w-full border-b border-b-grey-500" />
      </div>

      <div
        className={`left-0 top-0 bottom-0 right-0 border bg-black opacity-60 ${
          opened ? "fixed" : "hidden"
        }`}
      />

      <div
        className={`fixed flex top-0 right-0 left-0 border-1 border-red-400 ${
          opened ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200`}
      >
        <div className="flex-1 min-w-[40px]" onClick={() => setOpened(false)} />

        <div className="flex-1 min-w-[300px] max-w-[400px] bg-white">
          <div className="flex items-center h-[64px] border-b border-red-400 bg-grey-200"></div>
          <ul className="space-y-1 h-screen overflow-y-auto overscroll-contain">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
