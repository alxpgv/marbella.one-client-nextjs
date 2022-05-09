import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { CallbackForm } from "@/components/callback-form";
import cn from "classnames";
import styles from "./online-consultation.module.scss";

interface OnlineConsultationProps {
  title: string;
  subTitle?: string;
  text?: string;
  note?: string;
}

export const OnlineConsultation: FC<OnlineConsultationProps> = ({
  title,
  subTitle,
  text,
  note,
}) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {subTitle && (
              <h6 className={cn(styles.subHeading, "text-grey-300")}>
                {subTitle}
              </h6>
            )}
            {title && <h2 className={styles.title}>{title}</h2>}
            {text && <p className={cn("text-grey-500", styles.text)}>{text}</p>}
            {note && <p className={cn("text-grey-300", "text-sm")}>{note}</p>}
          </div>

          <div className={styles.form}>
            <CallbackForm
              title={"Free consultation"}
              text={"it is completely free and does not oblige you to anything"}
              btnText={"Get now!"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
