import GradientBg from "@/components/gradientBg";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>tai-design</title>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                      (function() {
                        const storedTheme = localStorage.getItem("tai.design-theme");
                        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                        if (storedTheme === "dark" || (!storedTheme && systemDark)) {
                          document.documentElement.classList.add("dark");
                        } else {
                          document.documentElement.classList.remove("dark");
                        }
                      })();
                    `,
          }}
        />
      </Head>
      <body className="dark:bg-black dark:text-white font-Telegraf">
        <GradientBg />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
