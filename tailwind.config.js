/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-slate": "#1E2D3D", // Color lines
        onyx: "#01080E", // Primary - Border color game
        "midnight-blue": "#011627", // Primary - Background Color
        "midnight-navy": "#011221", // Primary -
        "slate-muted": "#607B96", // Secondary - Text Color
        "teal-ocean": "#3C9D93", // Secondary
        "periwinkle-blue": "#4D5BCE", // Secondary - Title Color
        "soft-orange": "#FEA55F", // Accent - Highlight Color
        "mint-green": "#43D9AD", // Accent - variabel colors
        peach: "#E99287", // Accent link color
        "lavender-blush": "#C98BDF", // Accent
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
