import React, { FC } from "react";
import type { EntryProps } from "@/types/entry";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogCategoryEntry } from "./blog-category-entry";
import styles from "./blog-category.module.scss";

export interface BlogProps {
  entries: EntryProps[];
}

export const BlogCategory: FC<BlogProps> = ({ entries = [] }) => {
  return (
    <Section>
      <Container>
        <article className={styles.wrapper}>
          {entries.length > 0
            ? entries.map((entry) => (
                <BlogCategoryEntry key={entry.slug} {...entry} />
              ))
            : `No entries found`}
        </article>
      </Container>
    </Section>
  );
};
