import type { VFC } from "react";
import { SEO } from "@/components/common/SEO";

export const Head: VFC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
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
        type="font/woff"
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

      {/*<link rel="manifest" href="/site.webmanifest" key="site-manifest" />*/}
    </SEO>
  );
};
