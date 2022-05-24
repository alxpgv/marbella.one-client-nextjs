import React, { FC } from "react";
import styles from "./input-agree.module.scss";
import cn from "clsx";

interface InputAgreeProps {
  checked?: boolean;
  onChange?: () => void;
}

export const InputAgree: FC<InputAgreeProps> = ({
  checked = true,
  onChange,
}) => {
  return (
    <>
      <label className={styles.agree}>
        <input
          className={styles.agreeInput}
          type={"checkbox"}
          onChange={onChange}
          checked={checked}
        />
        <span className={styles.agreeCheck} />
        <span className={cn(styles.agreeText, "text-sm", "text-grey-300")}>
          You agree to the terms
          <br />
          <a href={"/#"}>processing of personal data</a>
        </span>
      </label>
    </>
  );
};
