import React, { FC, useState } from "react";
import cn from "classnames";
import Image, { ImageProps } from "next/image";
import { StarRating } from "@/blocks/last-review/star-rating";
import styles from "./last-review.module.scss";

export interface ReviewProps {
  id: number;
  title: string;
  text: string;
  name: string;
  location: string;
  rating: number;
  image: ImageProps;
}

export const ReviewItem: FC<ReviewProps> = ({
  id,
  title,
  text,
  name,
  location,
  rating,
  image,
}) => {
  const charsLength = 160;
  const initialText =
    text.length > charsLength ? `${text.substring(0, charsLength)}...` : text;
  const [reviewText, setReviewText] = useState(initialText);

  const handleShowFullText = (event: React.MouseEvent) => {
    event.preventDefault();
    if (text.length > charsLength) {
      setReviewText(text);
    }
  };

  return (
    <div key={id} className={styles.item}>
      {image?.src && (
        <div className={styles.image}>
          <Image
            src={image.src}
            layout="fill"
            objectFit="cover"
            alt={image.alt ?? ""}
          />
        </div>
      )}
      {rating && (
        <div className={styles.rating}>
          <StarRating stars={rating} />
        </div>
      )}
      {title && <h5 className={cn(styles.title, "text-black")}>{title}</h5>}
      {reviewText && (
        <p className={cn(styles.text, "text-sm-20", "text-grey-400")}>
          {reviewText}
          {text.length > reviewText.length && (
            <a
              href="#"
              className={cn(styles.linkMore, "text-sm-10")}
              onClick={handleShowFullText}
            >
              {" "}
              <strong>read more</strong>
            </a>
          )}
        </p>
      )}

      {name && (
        <strong className={cn(styles.name, "text-sm", "text-black")}>
          {name}
        </strong>
      )}
      {location && (
        <span className={cn(styles.location, "text-sm", "text-grey-300")}>
          {location}
        </span>
      )}
    </div>
  );
};
