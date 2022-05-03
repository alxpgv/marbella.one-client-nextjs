import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import styles from "./SloganWithText.module.scss";

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
