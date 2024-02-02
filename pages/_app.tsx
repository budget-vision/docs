import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import PlausibleProvider from "next-plausible";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PlausibleProvider domain="docs.budget.vision">
        <Component {...pageProps} />
        <Analytics />
      </PlausibleProvider>
    </>
  );
};

export default MyApp;
