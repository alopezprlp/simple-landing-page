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
      boxShadow: {
        buttons: "0 35px 60px -15px rgba(112, 157, 218, 1)",
      },
      dropShadow: {
        "lg-blue": [
          "0 1px 5px rgba(112, 157, 218, 1)",
          "0 -1px 1px rgba(112, 157, 218, 1)",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
