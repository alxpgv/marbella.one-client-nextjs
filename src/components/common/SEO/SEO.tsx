import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";
import { settings } from "@/data/settings";

interface OgImage {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  openGraph?: {
    title?: string;
    type?: string;
    locale?: string;
    description?: string;
    site_name?: string;
    url?: string;
    images?: OgImage[];
  };
  children?: ReactNode;
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
  // generate full URL for OG image url with store base URL
  const imgUrl = "";
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  );
};

export const SEO: FC<SEOProps> = ({
  title,
  description,
  openGraph,
  robots,
  children,
}) => {
  const defaultMeta = settings?.defaultMeta;

  // The `key` property makes the tag is only rendered once,
  return (
    <Head>
      <title key="title">
        {`${title} | ${defaultMeta.title}` || defaultMeta.title || ""}
      </title>
      <meta
        key="description"
        name="description"
        content={description || defaultMeta.description || ""}
      />
      {children}
    </Head>
  );
};
