import React from "react";
import { Icon } from "@/components/icon";
import styles from "./star-rating.module.scss";
import cn from "classnames";

export const StarRating = ({ stars = 1 }) => {
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
