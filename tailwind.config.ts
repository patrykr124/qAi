/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-box':'#666666',
        'gray-text':'#D9D9D9',
      },
      fontFamily: {
        Azeret: ["var(--font-Azeret)"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "shadow-gradient":
          "linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(255,255,255,0) 80%)",
        "shadow-bottom":
          "linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(255,255,255,0) 70%);",
        "shadow-top":
          "linear-gradient(180deg, rgba(0,0,0,1) 1%, rgba(255,255,255,0) 80%);",
          "shadow-radial":
          " radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 80%);",
          "shadow-left":
          "linear-gradient(90deg, rgba(0,0,0,1) 85%, rgba(255,255,255,0) 100%);",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
