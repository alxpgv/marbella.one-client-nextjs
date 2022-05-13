import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./top-btn.module.scss";

export const TopBtn = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 1200 ? setVisible(true) : setVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div className={styles.btn} ref={btnRef} onClick={handleClick}>
      <Icon name={"arrow"} className={styles.icon} />
    </div>
  ) : null;
};
