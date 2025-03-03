import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        fullscreen: "1150px",
      },
      fontFamily: {
        Inter: ["var(--font-inter)"],
        Telegraf: ["Telegraf", "sans-serif"],
      },
      colors: {
        primary: "#00FF44",
      },
      container: {
        center: true,
        padding: "2.5rem", // Equivalent to `px-10`
        screens: {
          DEFAULT: "1150px", // This ensures max-width of fullscreen
        },
      },
    },
  },

  plugins: [],
};
export default config;
