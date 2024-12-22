import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderBlink: {
          "50%": { borderColor: "transparent" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        // Typing animation runs first; borderBlink starts after typing is complete
        typewriter: `
          typing var(--typing-duration, 2s) steps(var(--character-count, 10)) forwards,
          borderBlink 0.5s step-end infinite alternate var(--typing-duration, 2s)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;
