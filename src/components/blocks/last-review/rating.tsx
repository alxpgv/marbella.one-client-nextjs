import React from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./rating.module.scss";
import cn from "classnames";

export const Rating = ({ stars = 1 }) => {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((star, index) => (
        <div key={index} className={styles.item}>
          <Icon
            className={cn(styles.icon, index < stars ? styles.active : "")}
            name={"star-rating"}
          />
        </div>
      ))}
    </div>
  );
};
