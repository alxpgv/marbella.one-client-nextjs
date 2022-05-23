import React, { FC } from "react";
import PhoneInput from "react-phone-input-2";

interface InputPhoneProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const InputPhone: FC<InputPhoneProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <PhoneInput
      inputClass={className}
      disableDropdown={true}
      placeholder={placeholder}
      specialLabel={""}
      onChange={onChange}
      value={value}
      // inputClass={
      //   errors.phone
      //     ? "form-feedback__input error"
      //     : "form-feedback__input"
      // }
    />
  );
};
