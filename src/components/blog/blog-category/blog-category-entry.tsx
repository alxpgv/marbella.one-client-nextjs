import React, { FC } from "react";
import type { EntryProps } from "@/types/entry";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import cn from "clsx";
import styles from "./blog-category.module.scss";

export const BlogCategoryEntry: FC<EntryProps> = ({
  title,
  slug,
  description,
  image,
}) => {
  const href = `/blog/${slug}`;
  return (
    <article className={styles.entry}>
      {image?.src && (
        <Link href={href}>
          <a className={styles.imageWrapper}>
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt ?? ""}
            />
          </a>
        </Link>
      )}
      <div className={styles.content}>
        {title && (
          <Link href={href}>
            <a className={styles.titleLink}>
              <h4 className={styles.title}>{title}</h4>
            </a>
          </Link>
        )}
        {description && (
          <p className={cn(styles.description, "text-grey-300")}>
            {description}
          </p>
        )}
        <div className={styles.btn}>
          <Button variant={"four"} size={"sm"} as={"link"} href={href} />
        </div>
      </div>
    </article>
  );
};
