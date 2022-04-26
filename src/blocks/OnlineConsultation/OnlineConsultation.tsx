import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import styles from "./OnlineConsultation.module.scss";
import { CallbackForm } from "@/components/CallbackForm";
import cn from "classnames";

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
              <div className={cn("text-grey-300", styles.note)}>
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
