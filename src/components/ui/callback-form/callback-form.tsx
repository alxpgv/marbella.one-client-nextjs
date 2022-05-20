import React, { FormEvent, useState } from "react";
// TODO: rewrite to my component
import PhoneInput from "react-phone-input-2";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import styles from "./callback-form.module.scss";

interface CallbackFormProps {
  title?: string;
  text?: string;
  btnText: string;
}

export const CallbackForm = ({ title, text, btnText }: CallbackFormProps) => {
  const [agreeIsChecked, setAgreeIsChecked] = useState(true);
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const phoneChange = (value: string) => {
    setPhone(value);
  };

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {text && <p className={cn(styles.text, "text-sm-10")}>{text}</p>}

      <form onSubmit={onSubmit}>
        <div className={styles.formField}>
          <span className={styles.formFieldIcon}>
            <Icon name={"user"} className={styles.icon} />
          </span>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Your name"}
          />
        </div>
        <div className={styles.formField}>
          <span className={styles.formFieldIcon}>
            <Icon name={"phone"} className={styles.icon} />
          </span>
          <PhoneInput
            disableDropdown={true}
            placeholder={"Phone number"}
            specialLabel={""}
            inputClass={styles.formInput}
            value={phone}
            onChange={phoneChange}
            // inputClass={
            //   errors.phone
            //     ? "form-feedback__input error"
            //     : "form-feedback__input"
            // }
          />
        </div>
        <div className={styles.formField}>
          <Button size={"md"} gutter={"sm"} as={"modal"} fullWidth>
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
            <span
              className={cn(styles.formAgreeText, "text-sm", "text-grey-300")}
            >
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
