import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberwolf: "rgb(var(--timberwolf) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
        fern: "rgb(var(--fern-green) / <alpha-value>)",
        hunter: "rgb(var(--hunter-green) / <alpha-value>)",
        brunswick: "rgb(var(--brunswick-green) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
