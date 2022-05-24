import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./notify.module.scss";
import cn from "clsx";

interface NotifyProps {
  title?: string;
  type?: "success" | "error";
  text?: string;
  onClose: () => void;
}

export const Notify: FC<NotifyProps> = ({
  title,
  text,
  type = "success",
  onClose,
}) => {
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
    const notify = ref.current;

    if (notify) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div className={cn(styles.root)}>
      <div className={styles.notify} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          className={styles.close}
          aria-label="Close notify"
        >
          <Icon name={"close"} className={styles.iconClose} />
        </button>
        {type === "success" && (
          <div className={styles.iconWrapper}>
            <Icon
              name={"checkmark-round"}
              className={cn(styles.icon, styles.iconSuccess)}
            />
          </div>
        )}
        {type === "error" && (
          <div className={styles.iconWrapper}>
            <Icon
              name={"close"}
              className={cn(styles.icon, styles.iconError)}
            />
          </div>
        )}
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};
