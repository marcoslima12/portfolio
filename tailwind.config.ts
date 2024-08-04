import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#F3F7EC",
          text: "#2C3132",
          highlight: "#E88D67",
        },
        dark: {
          primary: "#2C3132",
          text: "#F3F7EC",
          highlight: "#E88D67",
        },
      },
    },
  },
  plugins: [],
};
export default config;
