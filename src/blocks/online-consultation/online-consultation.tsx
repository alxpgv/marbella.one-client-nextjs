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
              <div className={styles.subHeading}>
                <h6 className="text-sm-22 text-grey-300">{subTitle}</h6>
              </div>
            )}
            {title && (
              <div className={styles.heading}>
                <h2 className="text-lg-20">{title}</h2>
              </div>
            )}
            {text && (
              <div className={cn("text-grey-500", styles.text)}>
                <p>{text}</p>
              </div>
            )}
            {note && (
              <div className={cn("text-grey-300", "text-sm")}>
                <p>{note}</p>
              </div>
            )}
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
