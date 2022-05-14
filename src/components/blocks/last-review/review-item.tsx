import React, { FC, useState } from "react";
import cn from "classnames";
import Image, { ImageProps } from "next/image";
import { Rating } from "@/components/ui/rating";
import styles from "./last-review.module.scss";
import { cutText } from "@/lib/helpers";

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
  const maxTextLength = 160;
  const [reviewText, setReviewText] = useState(cutText(text, maxTextLength));

  const handleShowFullText = (event: React.MouseEvent) => {
    event.preventDefault();
    if (text.length > maxTextLength) {
      setReviewText(text);
    }
  };

  return (
    <div key={id} className={styles.item}>
      {image?.src && (
        <div className={styles.itemImage}>
          <Image
            src={image.src}
            layout="fill"
            objectFit="cover"
            alt={image.alt ?? ""}
          />
        </div>
      )}
      {rating && (
        <div className={styles.itemRating}>
          <Rating stars={rating} />
        </div>
      )}
      {title && <h5 className={cn(styles.itemTitle, "text-black")}>{title}</h5>}
      {reviewText && (
        <p className={cn(styles.itemText, "text-sm-20", "text-grey-400")}>
          {reviewText}
          {text.length > reviewText.length && (
            <a href="#" className={"text-sm-10"} onClick={handleShowFullText}>
              {" "}
              <strong>read more</strong>
            </a>
          )}
        </p>
      )}

      {name && (
        <strong className={cn(styles.itemName, "text-sm", "text-black")}>
          {name}
        </strong>
      )}
      {location && (
        <span className={cn(styles.itemLocation, "text-sm", "text-grey-300")}>
          {location}
        </span>
      )}
    </div>
  );
};
