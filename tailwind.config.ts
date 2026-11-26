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
        concrete: "#DCDCDC",
        concreteDark: "#CFCFCF",
        carbon: "#141414",
        acid: "#eea139",
        acidHover: "#f4b458",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
