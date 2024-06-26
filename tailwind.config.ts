import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fade-edges": "linear-gradient(#A71D31, transparent 5% 90%, #A71D31)",
      },
      colors: {
        main: "#3A86FF",
        light: "#00b3ff",
        accent: "#ba31c2",
        splash: "#A71D31",
        link: "#333",
      },
    },
  },
  plugins: [],
};
export default config;
