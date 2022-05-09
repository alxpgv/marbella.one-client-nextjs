import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import cn from "classnames";
import styles from "./sale-consultation.module.scss";

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
          {subTitle && <h6 className="text-grey-300">{subTitle}</h6>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {text && <p className={cn("text-grey-300", styles.text)}>{text}</p>}
          <div className={styles.btn}>
            <Button size={"md"}>Sell property</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
