import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "14c986f5-2087-4351-8c3c-0f03aae51b1d",
      }}
    >
      <DynamicWidget />
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}
