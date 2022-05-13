import React, { FC } from "react";
import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { TopBtn } from "@/components/ui/top-btn";

interface MainLayoutProps {
  navbarOffset?: boolean;
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  navbarOffset = true,
  children,
}): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className={navbarOffset ? "pt-navbar" : ""}>{children}</main>
      <Footer />
      <TopBtn />
    </>
  );
};
