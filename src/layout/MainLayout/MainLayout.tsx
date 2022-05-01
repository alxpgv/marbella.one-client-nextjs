import React, { FC } from "react";
import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import { ToTopBtn } from "@/components/ToTopBtn";

interface MainLayoutProps {
  headingOffset?: boolean;
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  headingOffset = true,
  children,
}): JSX.Element => {
  return (
    <>
      <Header />
      <main className={headingOffset ? "pt-heading" : ""}>{children}</main>
      <Footer />
      <ToTopBtn />
    </>
  );
};
