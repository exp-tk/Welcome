import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fefefe",
            foreground: "#212121",
            primary: { foreground: "#FFFFFF", DEFAULT: "#008ffe" },
            secondary: { foreground: "#FFFFFF", DEFAULT: "#212121" },
          },
        },
        dark: {
          colors: {
            background: "#212121",
            foreground: "#fefefe",
            primary: { foreground: "#FFFFFF", DEFAULT: "#008ffe" },
            secondary: { foreground: "#FFFFFF", DEFAULT: "#212121" },
          },
        },
      },
    }),
  ],
};
export default config;
