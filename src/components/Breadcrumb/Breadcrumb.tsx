import React, { FC } from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.scss";
import { IconArrow } from "@/components/Icons";
import cn from "classnames";

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
      <IconArrow rotate={"-rotate-90"} />
    </span>
  );

  return (
    <div className={styles.breadcrumb}>
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
