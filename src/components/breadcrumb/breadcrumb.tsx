import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { Icon } from "@/components/icon";
import styles from "./breadcrumb.module.scss";

interface BreadcrumbProps {
  links: {
    href?: string;
    title: string;
  }[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links = [] }) => {
  const breadcrumbs = [
    {
      href: "/",
      title: "Home",
    },
    ...links,
  ];

  const Separator = () => (
    <span className={styles.separator}>
      <Icon name={"arrow"} className={styles.icon} />
    </span>
  );

  return (
    <div className={cn(styles.breadcrumb, "text-sm")}>
      {breadcrumbs.map(({ href, title }, index) => {
        return (
          <div key={index} className={styles.crumb}>
            {href ? (
              <Link href={href}>
                <a className={styles.crumbLink}>{title}</a>
              </Link>
            ) : (
              <span className={cn(styles.crumbItem, "text-grey-300")}>
                {title}
              </span>
            )}
            {breadcrumbs.length > index + 1 && <Separator />}
          </div>
        );
      })}
    </div>
  );
};
