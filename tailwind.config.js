/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        primary: "#005CA9",
        "text-primary": "rgb(205, 35, 104)",
        "text-secondary": "rgb(255, 205, 27)",
        bgdark: "rgb(27, 27, 27)",
      },
      fontFamily: {
        "inter-regular": ["var(--font-inter-regular)"],
        "inter-bold": ["var(--font-inter-bold)"],
        "gordita-regular": ["var(--font-gordita-regular)"],
        "gordita-bold": ["var(--font-gordita-bold)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
