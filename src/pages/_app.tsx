import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        <meta property="og:image" content="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tai Design</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta name="author" content="Bigi brand" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Tai Design" />
        <meta name="googlebot" content="" />
        <meta name="robots" content="" />
        <meta property="og:title" content="Tai Design" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="" />
        <meta property="og:description" content="" />
      </Head>

      <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ReactLenis>
    </>
  );
}
