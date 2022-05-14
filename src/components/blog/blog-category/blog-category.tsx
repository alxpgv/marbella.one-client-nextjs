import React, { FC } from "react";
import type { EntryProps } from "@/types/entry";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import styles from "./blog-category.module.scss";

export interface BlogProps {
  entries: EntryProps[];
}

export const BlogCategory: FC<BlogProps> = ({ entries = [] }) => {
  return (
    <div className={styles.wrapper}>
      <Section>
        <Container>
          {entries.length > 0
            ? entries.map(({ id, title, slug }) => {
                return <div key={id}>{title}</div>;
              })
            : `No entries found`}
        </Container>
      </Section>
    </div>
  );
};
