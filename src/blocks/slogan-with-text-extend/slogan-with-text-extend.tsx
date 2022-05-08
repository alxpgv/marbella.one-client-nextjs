import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import cn from "classnames";
import styles from "./slogan-with-text-extend.module.scss";
import type { ButtonType } from "@/components/button";

interface SloganWithTextExtendProps {
  cols: {
    title?: string;
    text?: string;
    button?: ButtonType;
  }[];
}

export const SloganWithTextExtend: FC<SloganWithTextExtendProps> = ({
  cols,
}) => {
  const colPrimary = cols[0];
  const colSecondary = cols[1];

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.colPrimary}>
            {colPrimary?.title && (
              <div className={cn(styles.heading, "text-grey-500")}>
                <h3 className={cn(styles.title, "text-md-30")}>
                  {colPrimary.title}
                </h3>
              </div>
            )}
            {colPrimary?.text && (
              <div className={cn("text-grey-300", "text-sm-23", styles.text)}>
                <p>{colPrimary.text}</p>
              </div>
            )}
          </div>
          <div className={styles.colSecondary}>
            {colSecondary?.title && (
              <div className={cn(styles.heading, "text-grey-500")}>
                <h3 className={cn(styles.title, "text-md-30")}>
                  {colSecondary.title}
                </h3>
              </div>
            )}
            {colSecondary?.text && (
              <div className={cn("text-grey-300", "text-sm-23", styles.text)}>
                <p>{colSecondary.text}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
