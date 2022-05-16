import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import cn from "classnames";
import styles from "./slogan-with-text-extend.module.scss";
import type { ButtonAsType } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

interface SloganWithTextExtendProps {
  cols: {
    title?: string;
    text?: string;
    button?: ButtonAsType;
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
          <div className={styles.col}>
            {colPrimary?.title && (
              <h2 className={cn(styles.title, "text-white")}>
                {colPrimary.title}
              </h2>
            )}
            {colPrimary?.text && (
              <p className={cn(styles.text, "text-white")}>{colPrimary.text}</p>
            )}
          </div>
          <div className={styles.col}>
            {colSecondary?.title && (
              <h3 className={cn(styles.title, "text-white")}>
                {colSecondary.title}
              </h3>
            )}
            {colSecondary?.text && (
              <p className={cn(styles.text, "text-white", "text-sm-10")}>
                {colSecondary.text}
              </p>
            )}
            {colSecondary?.button?.as && (
              <Button
                variant={"primary"}
                size={"md"}
                className={styles.btn}
                {...colSecondary.button}
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
