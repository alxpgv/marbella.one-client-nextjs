import type { VFC } from "react";
import { SEO } from "@/components/common/SEO";

export const Head: VFC = () => {
  return (
    <SEO>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        key="viewport"
      />
      <link
        rel="preload"
        href="/fonts/SourceSansPro-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin=""
        key="SourceSansPro-Regular"
      />
      <link
        rel="preload"
        href="/fonts/SourceSansPro-Bold.woff"
        as="font"
        type="font/woff"
        crossOrigin=""
        key="SourceSansPro-Bold"
      />
      {/*<link*/}
      {/*  rel="preload"*/}
      {/*  href="/fonts/Judson-Regular.woff2"*/}
      {/*  as="font"*/}
      {/*  type="font/woff2"*/}
      {/*  crossOrigin=""*/}
      {/*  key="Judson-Regular"*/}
      {/*/>*/}
      <link
        rel="preload"
        href="/fonts/Judson-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
        key="Judson-Bold"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
        key="apple-icon-57x57"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
        key="apple-icon-60x60"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
        key="apple-icon-72x72"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
        key="apple-icon-76x76"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
        key="apple-icon-114x114"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
        key="apple-icon-120x120"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
        key="apple-icon-144x144"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
        key="apple-icon-152x152"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
        key="apple-icon-180x180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
        key="android-icon-192x192"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
        key="favicon-32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
        key="favicon-96x96"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
        key="favicon-16x16"
      />
      <meta
        name="msapplication-TileColor"
        content="#ffffff"
        key="msapplication-TileColor"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
        key="msapplication-TileImage"
      />
      <meta name="theme-color" content="#ffffff" key="theme-color" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
    </SEO>
  );
};
