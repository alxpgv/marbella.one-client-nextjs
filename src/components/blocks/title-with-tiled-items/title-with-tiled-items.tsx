import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import cn from "clsx";
import { TiledItems, type TiledItemProps } from "@/components/ui/tiled-items";
import styles from "./title-with-tiled-items.module.scss";
import { TiledProps } from "@/components/ui/tiled-items/tiled-items";

interface ServiceListTiledProps {
  title?: string;
  subtitle?: string;
  items: TiledItemProps[];
  options: {
    cols: TiledProps["cols"];
    firstLetterUppercase?: boolean;
  };
}

export const TitleWithTiledItems: FC<ServiceListTiledProps> = ({
  title,
  subtitle,
  items,
  options,
}) => {
  return (
    <Section>
      <Container>
        {subtitle && (
          <h6 className={cn(styles.subtitle, "text-grey-300")}>{subtitle}</h6>
        )}
        {title && (
          <div
            className={cn(
              styles.heading,
              options?.firstLetterUppercase ? styles.firstUppercase : null,
              "text-grey-500"
            )}
          >
            {options?.firstLetterUppercase ? (
              <>
                <span className={styles.firstLetter}>{title.charAt(0)}</span>
                <h2
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: title.slice(1) }}
                />
              </>
            ) : (
              <h2
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
        )}
        <TiledItems items={items} className={styles} cols={options.cols} />
      </Container>
    </Section>
  );
};
