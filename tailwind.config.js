module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple: {
          A200_02: "#794aff",
          A400: "#6533ff",
          A100: "#ac90ff",
          A200: "#794bff",
          A200_01: "#7849ff",
        },
        gray: { 400: "#c4c4c4", 800: "#484848" },
        black: { 900: "#000000", "900_26": "#00000026" },
        white: { A700_89: "#ffffff89", A700: "#ffffff" },
        indigo: { 900: "#0b026b", "900_01": "#0b036b" },
      },
      fontFamily: { roboto: "Roboto", lato: "Lato" },
      boxShadow: { bs: "5px 11px  52px -18px #00000026" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
