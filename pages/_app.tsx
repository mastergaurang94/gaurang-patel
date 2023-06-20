import Layout from "../components/MainLayout";
import "../styles/globals.css";
import "typeface-vollkorn";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
