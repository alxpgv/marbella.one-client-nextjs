import React, { FC } from "react";
import Link from "next/link";
import cn from "clsx";
import { Icon } from "@/components/ui/icon";
import { mainMenu } from "@/data/settings";
import { useRouter } from "next/router";
import styles from "./breadcrumb.module.scss";

interface CrumbItem {
  url?: string | undefined;
  title: string;
}

interface BreadcrumbProps {
  title?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ title }) => {
  const breadcrumbs: CrumbItem[] = [
    {
      url: "/",
      title: "Home",
    },
  ];

  const router = useRouter();
  const urlSegments = router.asPath.split("/");
  urlSegments.shift();

  if (urlSegments.length > 1) {
    const parentItem = mainMenu.find(
      (item) => item.url === `/${urlSegments[0]}`
    );

    if (parentItem) {
      breadcrumbs.push({
        title: parentItem.title,
        url: `/${urlSegments[0]}`,
      });
    }
  }

  if (title) {
    breadcrumbs.push({ title });
  }

  const Separator = () => (
    <span className={styles.separator}>
      <Icon name={"arrow"} className={styles.icon} />
    </span>
  );

  return (
    <ol
      className={cn(styles.breadcrumb, "text-sm")}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {breadcrumbs.map(({ url, title }, index) => {
        return (
          <li
            key={index}
            className={styles.crumb}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {url ? (
              <Link href={url}>
                <a className={styles.crumbLink} itemProp="item">
                  <span itemProp="name">{title}</span>
                </a>
              </Link>
            ) : (
              <span
                className={cn(styles.crumbItem, "text-grey-300")}
                itemProp="name"
              >
                {title}
              </span>
            )}
            <meta itemProp="position" content={`${index + 1}`} />
            {breadcrumbs.length > index + 1 && <Separator />}
          </li>
        );
      })}
    </ol>
  );
};
