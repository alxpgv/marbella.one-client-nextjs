import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import cn from "clsx";
import { useEffect, useState } from "react";
import styles from "./cookie-bar.module.scss";

const EXPIRED_PERIOD = 3600 * 24 * 60 * 1000; // ms, 2 month

export const CookieBar = () => {
  const [show, setShow] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("accept_cookies", String(new Date().getTime()));
    setShow(false);
  };

  useEffect(() => {
    const storageTime = localStorage.getItem("accept_cookies");
    if (!storageTime) {
      setShow(true);
    } else if (
      storageTime &&
      Number(storageTime) + EXPIRED_PERIOD < new Date().getTime()
    ) {
      localStorage.removeItem("accept_cookies");
      setShow(true);
    }
  }, []);

  if (!show) return null;
  return (
    <div className={cn(styles.root, { show })}>
      <Container>
        <div className={styles.wrapper}>
          <p className={"text-sm-10"}>
            This site uses cookies to improve your experience. By clicking, you
            agree to our Privacy Policy.
          </p>

          <div className={styles.btn}>
            <Button size={"sm"} onClick={handleAccept}>
              Accept cookies
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
