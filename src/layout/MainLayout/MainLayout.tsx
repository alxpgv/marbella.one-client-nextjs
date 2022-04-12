import React, { FC } from "react";
import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
