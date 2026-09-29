import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05030d",
        navy: "#120a26",
        steel: "#1d1238",
        arc: { DEFAULT: "#b26bff", dim: "#7c3aed" },
        volt: "#5b5cff",
        alert: "#ff3b4e",
        ember: "#ff4d8d",
        mist: "#b3a6d6",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
