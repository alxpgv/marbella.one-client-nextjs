import Head from "next/head";
import { FC } from "react";
import { defaultMeta } from "@/config";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title || defaultMeta.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="description"
        content={description || defaultMeta.description}
      />
      <meta name="keywords" content={keywords || defaultMeta.keywords} />

      {/*<link*/}
      {/*  rel="preload"*/}
      {/*  href="/fonts/SourceSansPro/SourceSansPro-Regular.woff"*/}
      {/*  as="font"*/}
      {/*  type="font/woff"*/}
      {/*  crossOrigin="anonymous"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="preload"*/}
      {/*  href="/fonts/SourceSansPro/SourceSansPro-Regular.woff"*/}
      {/*  as="font"*/}
      {/*  type="font/woff"*/}
      {/*  crossOrigin=""*/}
      {/*/>*/}
    </Head>
  );
};
