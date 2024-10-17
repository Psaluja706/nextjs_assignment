import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    // fontFamily: {
    //   sans: ['Manrope', 'sans-serif'],
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyLayout: "#F6F7F5",
      },
    },
  },
  plugins: [],
};
export default config;
