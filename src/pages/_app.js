import "../styles/globals.css";
import "../styles/custom.css";
import BaseLayout from "../components/layouts/BaseLayout";
import { SessionProvider } from "../context/SessionContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <BaseLayout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
    </SessionProvider>
  );
}
