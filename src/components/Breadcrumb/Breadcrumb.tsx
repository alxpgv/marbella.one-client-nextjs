import React, { FC } from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.scss";
import { IconArrow } from "@/components/Icons";

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
          <>
            {href ? (
              <Link key={href} href={href}>
                <a className={styles.crumbItemLink}>{title}</a>
              </Link>
            ) : (
              <span className={styles.crumbItem}>{title}</span>
            )}
            {breadcrumbs.length > index + 1 && <Separator />}
          </>
        );
      })}
    </div>
  );
};
