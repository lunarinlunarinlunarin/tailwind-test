function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${variableName}), ${opacityValue})`;
    else return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6EFFD",
          100: "#C1D7F9",
          200: "#97BDF6",
          300: "#6DA3F2",
          400: "#4E8FEF",
          500: "#2F7BEC", // Default button
          600: "#2A73EA",
          700: "#2368E7",
          800: "#1D5EE4",
          900: "#124BDF", // Hover button
        },
        gray: {
          50: "#F9F9F9",
          100: "#F5F6F7",
          200: "#F5F5F5",
          300: "#EEEEEE",
          400: "#CCD4DB",
          500: "#A3AFBF",
          600: "#657180",
          700: "#4E555E",
          800: "#2A2E33",
          900: "#101214",
        },
        "bg-1": withOpacity("--color-bg-1"),
        "bg-2": withOpacity("--color-bg-2"),
        "modal-bg": "#212628",
        error: "#F06163",
        success: "#23C7A4",
        warning: "#FFC155",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2400px",
      },
      bgGradientDeg: {
        270: "270deg",
      },
      borderColor: {
        DEFAULT: withOpacity("--default-border"),
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
