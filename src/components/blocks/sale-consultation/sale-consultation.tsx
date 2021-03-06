import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import cn from "clsx";
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
            <Button size={"md"} as={"modal"} modalView={"SELL_PROPERTY"}>
              Sell property
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
