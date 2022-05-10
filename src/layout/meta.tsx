import { FC } from "react";
import Head from "next/head";
import { settings } from "@/data/settings";

export interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  const defaultMeta = settings?.defaultMeta;

  return (
    <Head>
      <title>{title || defaultMeta.title || ""}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="description"
        content={description || defaultMeta.description || ""}
      />
      <meta name="keywords" content={keywords || defaultMeta.keywords || ""} />

      <link
        rel="preload"
        href="/fonts/SourceSansPro-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SourceSansPro-Bold.woff"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Judson-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Judson-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
    </Head>
  );
};
