import { FC, Fragment } from "react";
import Head from "next/head";
import { configSite } from "@/config";
import { useRouter } from "next/router";
import { useSettings } from "@/lib/contexts/settings-context";

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
    image?: OgImage;
  };
}

const OgImage = ({ url, width, height, alt }: OgImage) => {
  const settings = useSettings();

  const imgUrl =
    url ??
    settings?.meta?.openGraph?.image?.url ??
    configSite.openGraph.image.url;

  return (
    <Fragment key={`og:image`}>
      <meta key={`og:image:url`} property="og:image" content={imgUrl} />
      <meta
        key={`og:image:width`}
        property="og:image:width"
        content={width || configSite.openGraph.image.width}
      />
      <meta
        key={`og:image:height`}
        property="og:image:height"
        content={height || configSite.openGraph.image.height}
      />
      <meta
        key={`og:image:alt`}
        property="og:image:alt"
        content={alt || configSite.openGraph.image.alt}
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
  const router = useRouter();
  const settings = useSettings();

  const getTitle = (pageTitle = "") => {
    const siteTitle = settings?.meta?.title || configSite.title;
    // home page
    if (router.pathname === "/") {
      return pageTitle ?? siteTitle;
    }
    // other pages
    return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  };

  // The `key` property makes the tag is only rendered once,
  return (
    <Head>
      <title key="title">{getTitle(title)}</title>
      <meta
        key="description"
        name="description"
        content={description ?? settings?.meta?.description ?? configSite.title}
      />
      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? configSite.openGraph.type}
      />
      <meta
        key="og:title"
        property="og:title"
        content={
          openGraph?.title ??
          title ??
          configSite.openGraph.title ??
          configSite.title
        }
      />
      <meta
        key="og:description"
        property="og:description"
        content={
          openGraph?.description ??
          settings?.meta?.openGraph?.description ??
          configSite.openGraph.description ??
          description ??
          configSite.description
        }
      />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={
          openGraph?.site_name ??
          settings?.meta?.openGraph?.site_name ??
          configSite.openGraph.site_name
        }
      />
      <meta
        key="og:url"
        property="og:url"
        content={
          openGraph?.url ??
          settings?.meta?.openGraph?.url ??
          settings?.siteUrl ??
          configSite.openGraph.url ??
          configSite.siteUrl
        }
      />
      <meta
        key="og:locale"
        property="og:locale"
        content={
          settings?.meta?.openGraph?.locale ?? configSite.openGraph.locale
        }
      />
      {(settings?.meta?.openGraph?.image || configSite.openGraph?.image) && (
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
      )}
      <meta key="robots" name="robots" content={robots ?? "index,follow"} />
      <OgImage {...openGraph?.image} />
      {children}
    </Head>
  );
};
