import React, { FC } from "react";
import { Footer } from "@/layout/footer";
import { Navbar } from "@/layout/navbar";
import { TopBtn } from "@/components/top-btn";

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
