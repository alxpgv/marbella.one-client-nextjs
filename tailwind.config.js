module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/layout/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', "sans-serif"],
      serif: ["Judson", "serif"],
    },
    fontSize: {
      sm: ["0.875rem", "1.3"], // 14px
      base: ["1rem", "1.3"], // 16px
      lg: ["1.125rem", "1.3"], // 18px
      xl: ["1.25rem", "1.3"], // 20px
      "2xl": ["1.375rem", "1.3"], // 22px
      "3xl": ["1.5rem", "1.3"], // 24px
      "4xl": ["1.75rem", "1.3"], // 28px
      "5xl": ["1.875rem", "1.2"], // 30px
      "6xl": ["2rem", "1.3"], // 32px
      "7xl": ["2.125rem", "1.2"], // 34px
      "8xl": ["2.625rem", "1.2"], // 42px
      "9xl": ["3rem", "1.1"], // 48px
      "10xl": ["3.75rem", "1.1"], // 60px
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "grey-100": "#F2F2F2",
      "grey-150": "#D7D7D7",
      "grey-200": "#E0E0E0",
      "grey-300": "#7F8C92",
      "grey-400": "#666666",
      "grey-500": "#3C413F",
      "grey-600": "#1F1C19",
      "blue-100": "#8FC7D1",
      "blue-300": "#428AB5",
      "blue-400": "#133D55",
      "black-800": "#151415",
      "red-400": "#F8271A",
    },
    screens: {
      "2xl": "1536px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        margin: "auto",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1330px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
