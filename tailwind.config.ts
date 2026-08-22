import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#366834",
          brown: "#5a3e2c",
          gold: "#d99b2d",
          red: "#cc2127",
          blush: "#f3e9e9",
          cream: "#fff8ef",
          ink: "#2a1a11",
          smoke: "#efe5d7",
        },
      },
      boxShadow: {
        warm: "0 20px 70px rgba(90, 62, 44, 0.18)",
      },
    },
  },
  plugins: [],
}
export default config
