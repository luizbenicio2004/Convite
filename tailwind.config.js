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
        "vermelho-dark": "#992d24", // vermelho escuro para hover e estados ativos
        rosaClaro: "#f7c6ce",    // rosa claro para bordas e detalhes
        rosaEscuro: "#e89ba1",   // rosa escuro para hover em botões
        branco: "#ffffff",       // branco puro para fundos
        preto: "#000000",        // preto para textos principais
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeSlideUp: "fadeSlideUp 0.8s ease forwards",
        fadeIn: "fadeIn 0.7s ease forwards",
      },
      boxShadow: {
        floral: "0 4px 16px rgba(192, 57, 43, 0.15)", // sombra sutil vermelha para elementos florais
      },
      borderRadius: {
        "3xl": "1.5rem", // borda arredondada grande usada nos containers principais
      },
      screens: {
        xs: "375px",  // suporte para telas pequenas, como iPhone SE
      },
    },
  },
  plugins: [],
  // Ativar variantes úteis para acessibilidade e interação
  variants: {
    extend: {
      ringWidth: ["focus-visible", "active"],
      ringColor: ["focus-visible", "active"],
      scale: ["active", "group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
};
