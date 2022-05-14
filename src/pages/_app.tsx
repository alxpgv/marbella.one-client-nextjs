import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { Head } from "@/components/common/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
