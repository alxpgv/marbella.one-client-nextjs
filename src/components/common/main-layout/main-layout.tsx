import React, { FC } from "react";
import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { TopBtn } from "@/components/ui/top-btn";
import { Modal } from "@/components/ui/modal";
import { MODAL_VIEWS, useUI } from "@/lib/contexts/ui-context";

interface MainLayoutProps {
  navbarOffset?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({
  navbarOffset = true,
  children,
}): JSX.Element => {
  const ModalView: FC<{ modalView: MODAL_VIEWS; closeModal(): any }> = ({
    modalView,
    closeModal,
  }) => {
    return (
      <Modal onClose={closeModal}>
        {modalView === "CALLBACK" && "CALLBACK"}
        {modalView === "ONLINE_CONSULTATION" && "ONLINE_CONSULTATION"}
      </Modal>
    );
  };

  const ModalUI: FC = () => {
    const { displayModal, closeModal, modalView } = useUI();

    return displayModal ? (
      <ModalView closeModal={closeModal} modalView={modalView} />
    ) : null;
  };

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
