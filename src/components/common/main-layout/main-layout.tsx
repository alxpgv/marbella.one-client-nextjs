import React, { FC } from "react";
import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { TopBtn } from "@/components/ui/top-btn";
import { useUI } from "@/lib/contexts/ui-context";
import dynamic from "next/dynamic";
import { MODAL_VIEWS } from "@/lib/contexts/ui-context";
import { FormFeedback } from "@/components/ui/forms/form-feedback";
import { FormSubscribe } from "@/components/ui/forms/form-subscribe";
import cn from "clsx";

interface MainLayoutProps {
  navbarOffset?: boolean;
}

const Modal: any = dynamic(
  (): any => import("@/components/ui/modal").then((mod) => mod.Modal),
  {
    // loading: Loading,
    ssr: false,
  }
);

const Notify: any = dynamic(
  (): any => import("@/components/ui/notify").then((mod) => mod.Notify),
  {
    // loading: Loading,
    ssr: false,
  }
);

const ModalView: FC<{
  modalView: string;
  closeModal(): void;
}> = ({ modalView, closeModal }) => {
  return (
    <Modal onClose={closeModal}>
      {(modalView === "ONLINE_CONSULTATION" ||
        modalView === "CALLBACK" ||
        modalView === "SPECIALIST_CONSULTATION" ||
        modalView === "ORDER_YACHT" ||
        modalView === "EVALUATE_PROPERTY" ||
        modalView === "SELL_PROPERTY" ||
        modalView === "ORDER_JET") && (
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
    </Modal>
  );
};

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI();

  return displayModal ? (
    <ModalView closeModal={closeModal} modalView={modalView} />
  ) : null;
};

const NotifyView: FC<{
  notifyView: string;
  closeNotify(): void;
}> = ({ notifyView, closeNotify }) => {
  return (
    <>
      {notifyView === "FORM_SEND_SUCCESS" && (
        <Notify
          onClose={closeNotify}
          type={"success"}
          disableScroll={true}
          title={"Your request has been sent"}
        />
      )}
      {notifyView === "FORM_SEND_ERROR" && (
        <Notify
          onClose={closeNotify}
          disableScroll={false}
          title={"An error occurred while sending "}
          type={"error"}
        />
      )}
    </>
  );
};

const NotifyUI: FC = () => {
  const { displayNotify, closeNotify, notifyView } = useUI();

  return displayNotify ? (
    <NotifyView closeNotify={closeNotify} notifyView={notifyView} />
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
      <NotifyUI />
      <main className={cn("main-layout", { "pt-navbar": navbarOffset })}>
        {children}
      </main>
      <Footer />
      <TopBtn />
    </>
  );
};
