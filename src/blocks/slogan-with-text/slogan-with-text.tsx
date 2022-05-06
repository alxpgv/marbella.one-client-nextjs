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
            <div className={cn(styles.heading, "text-grey-500")}>
              <h3 className={cn(styles.title, "text-md-30")}>{title}</h3>
            </div>
          )}
          {text && (
            <div className={cn("text-grey-300", "text-sm-23", styles.text)}>
              <p>{text}</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
