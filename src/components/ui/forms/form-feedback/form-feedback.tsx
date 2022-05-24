import React, { FC, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import { InputPhone } from "@/components/ui/inputs/input-phone";
import { InputText } from "@/components/ui/inputs/input-text";
import { InputAgree } from "@/components/ui/inputs/input-agree";
import { ErrorPopup } from "@/components/ui/inputs/error-popup";
import { errorMessages } from "@/lib/constants";
import { useUI } from "@/lib/contexts/ui-context";

interface FormFeedbackProps {
  title?: string;
  text?: string;
  btnText?: string;
}

type SendStatus = "intl" | "sending" | "success" | "error";

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
  const { openNotify, closeNotify, setNotifyView } = useUI();

  const changeErrors = (field: string, error: string | null = null) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const changeData = (field: string, value: string | boolean) => {
    setData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const changePhone = (value: string) => {
    validatePhone(value);
    changeData("phone", value);
  };

  const changeAgree = (value: boolean) => {
    validateAgree(value);
    changeData("agree", value);
  };

  const validatePhone = (value: string) => {
    if (value.length < 9) {
      changeErrors("phone", errorMessages.required);
      return false;
    }
    changeErrors("phone");
    return true;
  };

  const validateAgree = (value: boolean) => {
    if (!value) {
      changeErrors("agree", errorMessages.agree);
      return false;
    }
    changeErrors("agree");
    return true;
  };

  const validateAll = () => {
    return validatePhone(data.phone) && validateAgree(data.agree);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateAll()) {
      setNotifyView("FORM_SEND_SUCCESS");
      openNotify();
      console.log("sending");
    } else {
      setNotifyView("FORM_SEND_ERROR");
      openNotify();
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
          <span className="form-input-icon">
            <Icon name={"user"} className="icon" />
          </span>
          <InputText
            className="form-input"
            value={data.name}
            onChange={(e) => changeData("name", e.target.value)}
            placeholder={"Your name"}
          />
        </div>

        <div className="form-field">
          {errors.phone && <ErrorPopup text={errors.phone} />}
          <span className="form-input-icon">
            <Icon name={"phone"} className="icon" />
          </span>
          <InputPhone
            className={cn("form-input", errors.phone && "error")}
            value={data.phone}
            onChange={(value) => changePhone(value)}
            placeholder={"Phone number"}
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

        <div className="form-field">
          <InputAgree
            checked={data.agree}
            onChange={() => changeAgree(!data.agree)}
          />
        </div>
      </form>
    </div>
  );
};
