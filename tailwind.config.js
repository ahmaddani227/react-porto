/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        "midnight-slate": "#1E2D3D", // Color lines
        "midnight-blue": "#011627", // Primary - Background Color
        "slate-muted": "#607B96", // Secondary - Text Color
        "soft-orange": "#FEA55F", // Accent - Highlight Color
        // "dark-blue": "#011627", // Primary - Hover Color
        "gray-dark": "#121212",
        "glitch-green": "#00ff00",
        "glitch-rose": "#f0f",
        "glitch-blue": "#0ff",
        "neon-blue-xs": "#08cff6",
        "neon-blue-s": "#194262",
        "neon-blue-m": "#0e2535",
        "neon-blue-l": "#05131e",
        "neon-blue-xl": "#020204",
        "dark-background": "#010C15",
        "hello-name": "#E5E9F0",
        "purple-text": "#4D5BCE",
        "codeline-link": "#E99287",
        "codeline-tag": "#4D5BCE",
        "codeline-name": "#43D9AD",
        "placeholder-gray": "#465E77",
        greenfy: "#43D9AD",
        purplefy: "#5565E8",
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
