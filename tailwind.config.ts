import type { Config } from "tailwindcss"
import { glitch1, glitch2, glitch3 } from "./keyframes"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-source-code-pro)"],
    },
    extend: {
      colors: {
        pink: {
          50: "#fff0fb",
          100: "#ffe3fa",
          200: "#ffc6f6",
          300: "#ff98ec",
          400: "#ff58dc",
          500: "#ff27c9",
          600: "#ff00aa",
          700: "#df0089",
          800: "#b80071",
          900: "#980360",
          950: "#5f0036",
        },
        lime: {
          50: "#edfff8",
          100: "#d5fff2",
          200: "#aeffe4",
          300: "#70ffd1",
          400: "#2bfdb7",
          500: "#00ffaa",
          600: "#00c07b",
          700: "#009664",
          800: "#067551",
          900: "#076045",
          950: "#003725",
        },
        aqua: {
          50: "#eafffe",
          100: "#cbfffe",
          200: "#9effff",
          300: "#5bfcff",
          400: "#00eeff",
          500: "#00d1e5",
          600: "#00a7c0",
          700: "#03849b",
          800: "#0d697d",
          900: "#105769",
          950: "#033a49",
        },
      },
      aspectRatio: {
        image: "1.618 / 1",
        video: "16 / 9",
        screenshot: "16 / 9",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(closest-side, var(--tw-gradient-stops))",
      },
      keyframes: {
        glitch1,
        glitch2,
        glitch3,
      },
    },
  },
  plugins: [],
}
export default config
