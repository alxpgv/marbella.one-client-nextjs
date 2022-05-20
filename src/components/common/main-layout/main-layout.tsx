import React, { FC } from "react";
import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { TopBtn } from "@/components/ui/top-btn";
import { useUI } from "@/lib/contexts/ui-context";
import dynamic from "next/dynamic";
import { MODAL_VIEWS } from "@/lib/contexts/ui-context";

interface MainLayoutProps {
  navbarOffset?: boolean;
}

const Loading = () => <div>loading ...</div>;

const Modal: any = dynamic(
  (): any => import("@/components/ui/modal").then((mod) => mod.Modal),
  {
    // loading: Loading,
    ssr: false,
  }
);

const ModalView: FC<{
  modalView: keyof typeof MODAL_VIEWS;
  closeModal(): void;
}> = ({ modalView, closeModal }) => {
  return (
    <Modal onClose={closeModal} title={MODAL_VIEWS[modalView]}>
      {modalView === "CALLBACK" && "text"}
      {modalView === "ONLINE_CONSULTATION" && "text"}
    </Modal>
  );
};

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI();

  return displayModal ? (
    <ModalView closeModal={closeModal} modalView={modalView} />
  ) : null;
};

export const MainLayout: FC<MainLayoutProps> = ({
  navbarOffset = true,
  children,
}): JSX.Element => {
  return (
    <>
      <Navbar />
      <ModalUI />
      <main className={navbarOffset ? "pt-navbar" : ""}>{children}</main>
      <Footer />
      <TopBtn />
    </>
  );
};
