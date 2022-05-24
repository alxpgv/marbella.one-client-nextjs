import React, { FC } from "react";
import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { TopBtn } from "@/components/ui/top-btn";
import { useUI } from "@/lib/contexts/ui-context";
import dynamic from "next/dynamic";
import { MODAL_VIEWS } from "@/lib/contexts/ui-context";
import { FormFeedback } from "@/components/ui/forms/form-feedback";
import { FormSubscribe } from "@/components/ui/forms/form-subscribe";

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
    <Modal onClose={closeModal}>
      {(modalView === "ONLINE_CONSULTATION" ||
        modalView === "CALLBACK" ||
        modalView === "SPECIALIST_CONSULTATION" ||
        modalView === "ORDER_YACHT" ||
        modalView === "EVALUATE_PROPERTY" ||
        modalView === "SELL_PROPERTY") && (
        <FormFeedback
          title={MODAL_VIEWS[modalView]}
          text={"Leave your phone number and our manager will contact you"}
        />
      )}
      {modalView === "SUBSCRIBE" && (
        <FormSubscribe
          title={MODAL_VIEWS[modalView]}
          text={"Subscribe to our news"}
          btnText={"Subscribe"}
        />
      )}
      {modalView === "FORM_SEND_SUCCESS" && "FORM_SEND_SUCCESS"}
      {modalView === "FORM_SEND_ERROR" && "FORM_SEND_ERROR"}
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
