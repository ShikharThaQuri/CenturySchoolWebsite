import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        // --------------------------------- Tablet Size
        tablet: { max: "850px" },
        tabletGallery: { max: "900px" },

        // --------------------------------- Other
        footerMedia: { max: "900px" },

        max700: { max: "700px" },
        max400: { max: "400px" },
      },
    },
  },
  plugins: [],
};
export default config;
