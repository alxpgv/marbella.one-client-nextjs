import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import styles from "./SaleConsultation.module.scss";

interface SaleConsultationProps {
  title: string;
  subTitle: string;
  text: string;
}

export const SaleConsultation: FC<SaleConsultationProps> = ({
  title,
  subTitle,
  text,
}) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          {subTitle && (
            <div className={styles.subHeading}>
              <h6 className="">{subTitle}</h6>
            </div>
          )}
          {title && (
            <div className={styles.heading}>
              <h2 className="text-lg-20">{title}</h2>
            </div>
          )}
          {text && (
            <div className={styles.text}>
              <p>{text}</p>
            </div>
          )}
          <div className={styles.btn}>
            <Button size={"md"} variant={"primary"}>
              Sell property
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
