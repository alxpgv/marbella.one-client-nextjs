import React, { FC, useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import {
  ReviewItem,
  ReviewProps,
} from "@/components/blocks/last-review/review-item";
import { Button } from "@/components/ui/button";
import styles from "./last-review.module.scss";

interface LastReviewProps {
  title: string;
  items: ReviewProps[];
  options: {
    count: number;
    onDemandLoading?: boolean;
  };
}

export const LastReview: FC<LastReviewProps> = ({
  title,
  items = [],
  options,
}) => {
  const count = options?.count || 3;
  const [reviews, setReviews] = useState<ReviewProps[]>(items.slice(0, count));
  const onDemandLoading = options?.onDemandLoading || false;

  if (!items.length) return null;

  const loadingReviews = (nextCount = 6) => {
    const lastIndex = reviews.length;
    const newReviews = items.slice(lastIndex, lastIndex + nextCount);
    setReviews((prev) => {
      return [...prev, ...newReviews];
    });
  };

  return (
    <Section>
      <Container>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.items}>
          {reviews.map((item) => (
            <ReviewItem key={item.id} {...item} />
          ))}
        </div>
        {!onDemandLoading && (
          <div className={styles.btn}>
            <Button size={"md"} as={"link"} href={"/about-me/reviews"}>
              More reviews
            </Button>
          </div>
        )}
        {onDemandLoading && items.length > reviews.length ? (
          <div className={styles.btn}>
            <Button size={"md"} onClick={() => loadingReviews()}>
              Show more
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};
