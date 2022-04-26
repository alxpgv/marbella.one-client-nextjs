import React, { FormEvent, useState } from "react";
import styles from "./CallbackForm.module.scss";
import cn from "classnames";
import { Button } from "@/components/Button";

interface CallbackFormProps {
  title?: string;
  text?: string;
  btnText: string;
}

export const CallbackForm = ({ title, text, btnText }: CallbackFormProps) => {
  const [agreeIsChecked, setAgreeIsChecked] = useState(true);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={cn(styles.title, "text-md-30")}>{title}</h3>}
      {text && <p className={cn(styles.text, "text-sm-20")}>{text}</p>}

      <form onSubmit={onSubmit}>
        <div className={styles.formField}>
          <input className={styles.formInput} type={"text"} />
        </div>
        <div className={styles.formField}>
          <input className={styles.formInput} type={"tel"} />
        </div>
        <div className={styles.formField}>
          <Button size={"md"} variant={"primary"} gutter={"sm"} fullWidth>
            {btnText}
          </Button>
        </div>

        <div className={cn(styles.formField)}>
          <label className={styles.formFieldAgree}>
            <input
              className={styles.formAgreeControl}
              type={"checkbox"}
              onChange={() => setAgreeIsChecked((checked) => !checked)}
              checked={agreeIsChecked}
            />
            <span className={styles.formAgreeCheck} />
            <span className={styles.formAgreeText}>
              You agree to the terms
              <br />
              <a href={"/#"}>processing of personal data</a>
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};
