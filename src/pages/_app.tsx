import "@/styles/styles.scss";

import type { AppProps } from "next/app";
import { Head } from "@/components/common/head";
import { UIProvider } from "@/contexts/ui-context";
import { SettingsProvider } from "@/contexts/settings-context";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { settings } = pageProps;

  return (
    <>
      <Head />
      <UIProvider>
        <SettingsProvider value={settings}>
          <Component {...pageProps} />
        </SettingsProvider>
      </UIProvider>
    </>
  );
}
