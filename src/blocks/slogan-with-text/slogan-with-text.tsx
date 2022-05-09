import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import cn from "classnames";
import styles from "./slogan-with-text.module.scss";

interface SloganWithTextProps {
  title: string;
  text: string;
}

export const SloganWithText: FC<SloganWithTextProps> = ({ title, text }) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          {title && (
            <div className={styles.heading}>
              <h3 className={styles.title}>{title}</h3>
            </div>
          )}
          {text && (
            <div
              className={cn("text-grey-300", styles.text)}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};
