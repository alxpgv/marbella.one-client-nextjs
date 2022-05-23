import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import { InputPhone } from "@/components/ui/inputs/input-phone";
import { InputText } from "@/components/ui/inputs/input-text";
import styles from "./form-feedback.module.scss";

interface FormFeedbackProps {
  title?: string;
  text?: string;
  btnText?: string;
}

type SendStatus = "intl" | "sending" | "success" | "error";

const errorMessages = {
  required: "Required to complete",
  notValid: "Not valid",
  agree: "Must accept the conditions",
};

export const FormFeedback: FC<FormFeedbackProps> = ({
  title,
  text,
  btnText,
}) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    agree: true,
  });

  const [errors, setErrors] = useState<{ [key in string]: null | string }>({
    name: null,
    phone: null,
    agree: null,
  });

  const [status, setStatus] = useState<SendStatus>("intl");
  const initialRender = useRef(true);

  const changeErrors = (field: string, error: string | null = null) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validate = () => {
    let validation = true;
    if (data.phone.length < 9) {
      changeErrors("phone", errorMessages.required);
      validation = false;
    } else {
      changeErrors("phone");
    }

    if (!data.agree) {
      changeErrors("agree", errorMessages.agree);
      validation = false;
    } else {
      changeErrors("agree");
    }

    return validation;
  };

  const onChange = (field: string, value: string | boolean) => {
    setData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("sending");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      validate();
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {text && <p className={cn(styles.text, "text-sm-10")}>{text}</p>}

      <form onSubmit={onSubmit}>
        <div className={styles.formField}>
          <span className={styles.formFieldIcon}>
            <Icon name={"user"} className={styles.icon} />
          </span>
          <InputText
            className={styles.formInput}
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder={"Your name"}
          />
        </div>
        <div className={styles.formField}>
          {errors.phone && (
            <span className={styles.errorPopup}>{errors.phone}</span>
          )}
          <span className={styles.formFieldIcon}>
            <Icon name={"phone"} className={styles.icon} />
          </span>
          <InputPhone
            className={cn(styles.formInput, errors.phone && styles.error)}
            value={data.phone}
            onChange={(value) => onChange("phone", value)}
            placeholder={"Phone number"}
          />
        </div>
        <div className={styles.formField}>
          <Button
            type="submit"
            size={"md"}
            gutter={"sm"}
            as={"modal"}
            disabled={!data.agree}
            fullWidth
          >
            {btnText ? btnText : "Send"}
          </Button>
        </div>

        <div className={cn(styles.formField)}>
          <label className={styles.formFieldAgree}>
            <input
              className={styles.formAgreeControl}
              type={"checkbox"}
              onChange={() => onChange("agree", !data.agree)}
              checked={data.agree}
            />
            <span
              className={cn(
                styles.formAgreeCheck,
                errors.agree && styles.error
              )}
            />
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
