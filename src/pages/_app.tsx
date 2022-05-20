import "@/styles/styles.scss";

import type { AppProps } from "next/app";
import { Head } from "@/components/common/head";
import { UIProvider } from "@/lib/contexts/ui-context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </>
  );
}
