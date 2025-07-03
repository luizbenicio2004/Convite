import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: defaultTheme.fontFamily.sans,
      },
      colors: {
        vermelho: "#C0392B",      // vermelho forte para navegação e títulos
        rosaClaro: "#f7c6ce",    // rosa claro para bordas e detalhes
        rosaEscuro: "#e89ba1",   // rosa escuro para hover em botões
        branco: "#ffffff",       // branco puro para fundos
        preto: "#000000",        // preto para textos principais
      },
    },
  },
  plugins: [],
};
