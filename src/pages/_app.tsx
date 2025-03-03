import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ReactLenis>
  );
}
