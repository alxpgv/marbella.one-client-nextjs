import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button, ButtonType } from "@/components/ui/button";
import cn from "classnames";
import styles from "./slogan-with-text.module.scss";

interface SloganWithTextProps {
  slogan: string;
  text: string;
  button?: ButtonType;
  options?: {
    sloganAlign: "left" | "right";
    bgColor: "primary" | "secondary";
  };
}

export const SloganWithText: FC<SloganWithTextProps> = ({
  slogan,
  text,
  button,
  options,
}) => {
  const sloganAlign = options?.sloganAlign;
  const bgColor = options?.bgColor;

  return (
    <Section>
      <Container>
        <div className={cn(styles.wrapper, sloganAlign && styles[sloganAlign])}>
          {slogan && (
            <div
              className={cn(styles.slogan, bgColor && styles[`bg-${bgColor}`])}
              dangerouslySetInnerHTML={{ __html: slogan }}
            />
          )}
          <div className={styles.content}>
            {text && (
              <div
                className={cn("text-grey-400", styles.text)}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {button?.as && (
              <div className={styles.btn}>
                <Button variant={"primary"} size={"md"} {...button} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
