import React from "react";
import Link from "next/link";
import cn from "classnames";
import { Icon } from "@/components/icon";
import styles from "./breadcrumb.module.scss";
import { mainMenu } from "@/data/settings";
import { useRouter } from "next/router";

interface BreadcrumbProps {
  url?: string | undefined;
  title: string;
}

export const Breadcrumb = () => {
  const breadcrumbs: BreadcrumbProps[] = [
    {
      url: "/",
      title: "Home",
    },
  ];

  //TODO: rewrite this code
  const router = useRouter();
  const urlSegments = router.asPath.split("/");
  urlSegments.shift();

  if (urlSegments[0]) {
    const parentItem = mainMenu.find(
      (item) => item.url === `/${urlSegments[0]}`
    );

    if (parentItem) {
      const newItem: BreadcrumbProps = {
        title: parentItem.title,
      };

      // if have childs, then parent as link
      newItem.url = urlSegments[1] ? parentItem.url : undefined;
      breadcrumbs.push(newItem);

      const child = parentItem.child;

      if (urlSegments[1] && child?.length) {
        const childItem = child.find(
          (item) => item.url === `/${urlSegments[0]}/${urlSegments[1]}`
        );
        childItem && breadcrumbs.push({ title: childItem.title });
      }
    }
  }

  const Separator = () => (
    <span className={styles.separator}>
      <Icon name={"arrow"} className={styles.icon} />
    </span>
  );

  return (
    <div className={cn(styles.breadcrumb, "text-sm")}>
      {breadcrumbs.map(({ url, title }, index) => {
        return (
          <div key={index} className={styles.crumb}>
            {url ? (
              <Link href={url}>
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
