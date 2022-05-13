import { FC } from "react";
import { getPhoneFromString } from "@/lib/helpers";

interface LinksProps {
  value: string;
  className?: string;
}

export const PhoneLink: FC<LinksProps> = ({ value, className }) => {
  const phone = getPhoneFromString(value);
  return phone ? (
    <a className={className} href={`tel:${phone}`}>
      {value}
    </a>
  ) : null;
};

export const EmailLink: FC<LinksProps> = ({ value, className }) => {
  return value ? (
    <a className={className} href={`mailto:${value}`}>
      {value}
    </a>
  ) : null;
};
