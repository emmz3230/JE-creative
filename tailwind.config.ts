import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#111111",
        offwhite: "#f2f2f0",
        muted: "#8a8a8a",
        accent: "#0052FF",
        line: "#262626"
      },
      fontFamily: {
        head: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
