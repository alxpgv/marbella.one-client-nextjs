import React, { FC } from "react";
import type { EntryProps } from "@/types/entry";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "./blog-category.module.scss";
import cn from "classnames";

export interface BlogProps {
  entries: EntryProps[];
}

export const BlogCategory: FC<BlogProps> = ({ entries = [] }) => {
  return (
    <Section>
      <Container>
        <article className={styles.wrapper}>
          {entries.length > 0
            ? entries.map(({ id, title, slug, description, image }) => {
                const href = `/blog/${slug}`;
                return (
                  <div key={id} className={styles.entry}>
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
                        <Button
                          variant={"four"}
                          size={"sm"}
                          as={"link"}
                          href={href}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            : `No entries found`}
        </article>
      </Container>
    </Section>
  );
};
