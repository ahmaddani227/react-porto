/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-slate": "#1E2D3D", // Color lines
        "midnight-blue": "#011627", // Primary - Background Color
        "slate-muted": "#607B96", // Secondary - Text Color
        "soft-orange": "#FEA55F", // Accent - Highlight Color
        // "dark-blue": "#011627", // Primary - Hover Color
        "periwinkle-blue": "#4D5BCE", // Secondary - Title Color
        "mint-green": "#43D9AD", // Accent - variabel colors
        peach: "#E99287", // Accent link color
        onyx: "#01080E", // Primary - Border color game
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
