import React, { FC } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
