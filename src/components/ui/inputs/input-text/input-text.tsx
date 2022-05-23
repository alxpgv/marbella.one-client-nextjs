import React, { FC } from "react";

interface InputTextProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const InputText: FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      type={"text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
