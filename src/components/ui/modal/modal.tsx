import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Icon } from "@/components/ui/icon";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./modal.module.scss";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, title, onClose }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div className={styles.root}>
      <div className={styles.modal} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          className={styles.close}
          aria-label="Close panel"
        >
          <Icon name={"close"} className={styles.iconClose} />
        </button>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}
      </div>
    </div>
  );
};
