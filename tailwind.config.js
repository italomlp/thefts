module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./constants/**/*.{js,ts,jsx,tsx}",
    ],

    options: {
      safelist: [/^bg-/, /^text-/, /^border-/, /^hover:text-/],
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["active"],
      transitionDurationFunction: ["hover", "focus"],
    },
  },
  plugins: [],
};
