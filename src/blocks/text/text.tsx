import React, { FC } from "react";
import styles from "./text.module.scss";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import cn from "classnames";

interface TextProps {
  text: string;
  options?: {
    align?: "center";
  };
}

export const Text: FC<TextProps> = ({ text, options }) => {
  if (!text) return null;
  const align = options?.align;
  return (
    <Section>
      <Container>
        <div
          className={cn(styles.text, "content-mixed", align && styles[align])}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Container>
    </Section>
  );
};
