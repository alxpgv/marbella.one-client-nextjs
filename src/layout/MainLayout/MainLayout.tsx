import React, { FC } from "react";
import { Footer } from "@/layout/Footer";
import { Navbar } from "@/layout/Navbar";
import { ToTopBtn } from "@/components/ToTopBtn";

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
      <ToTopBtn />
    </>
  );
};
