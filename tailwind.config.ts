import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBase: "var(--base)",
        accent: "var(--accent-text)",
        primary: "var(--primary)",
        active: "var(--primary-active)",
      },
    },
  },
  plugins: [],
};
export default config;
