import React, { FC, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import * as EmailValidator from "email-validator";
import { ErrorPopup } from "@/components/ui/inputs/error-popup";
import { errorMessages } from "@/lib/contains";
import { InputText } from "@/components/ui/inputs/input-text";

interface FormSubscribeProps {
  title?: string;
  text?: string;
  btnText?: string;
}

type SendStatus = "intl" | "sending" | "success" | "error";

export const FormSubscribe: FC<FormSubscribeProps> = ({
  title,
  text,
  btnText,
}) => {
  const [data, setData] = useState({
    email: "",
    agree: true,
  });

  const [errors, setErrors] = useState<{ [key in string]: null | string }>({
    email: null,
    agree: null,
  });

  const [status, setStatus] = useState<SendStatus>("intl");

  const changeErrors = (field: string, error: string | null = null) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const changeData = (field: string, value: string | boolean) => {
    setData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const changeEmail = (value: string) => {
    validateEmail(value);
    changeData("email", value);
  };

  const validateEmail = (value: string) => {
    if (!EmailValidator.validate(value)) {
      changeErrors("email", errorMessages.notValid);
      return false;
    }
    changeErrors("email");
    return true;
  };

  const validateAll = () => {
    return validateEmail(data.email);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("sending");
    } else {
      console.log("error");
    }
  };

  console.log(data);
  console.log(errors);

  return (
    <div className="form-container">
      {title && <h3 className="form-title">{title}</h3>}
      {text && (
        <p className={cn("form-text text-sm-10 text-grey-300")}>{text}</p>
      )}

      <form onSubmit={onSubmit}>
        <div className="form-field">
          {errors.email && <ErrorPopup text={errors.email} />}
          <span className="form-input-icon">
            <Icon name={"box-arrow-smooth"} className="icon-stroke" />
          </span>
          <InputText
            className={cn("form-input", errors.email && "error")}
            value={data.email}
            onChange={(e) => changeEmail(e.target.value)}
            placeholder={"Email address"}
          />
        </div>

        <div className="form-field">
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
      </form>
    </div>
  );
};
