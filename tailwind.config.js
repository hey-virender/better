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
      fontFamily: {
        one: ["CustomFont1", "sans-serif"],
        two: ["CustomFont2", "sans-serif"],
      },
      backgroundColor: {
        backgroundInverseSecondary: "#017848",
        accentSecondary: "#dfe0dc",
        accentBorderInverseSecondary: "#fffdfa",
        accentBackground: "rgb(232 234 230)",
        textSecondary: "#565d5a",
      },
      textColor: {
        textSecondary: "#565d5a",
      },
    },
  },
  plugins: [],
};
