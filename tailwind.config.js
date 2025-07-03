import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fonte serifada principal, com fallback para fonts padrão do Tailwind
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        // Fonte sans-serif padrão do Tailwind
        sans: defaultTheme.fontFamily.sans,
      },
      colors: {
        // Paleta de cores personalizada para o site
        vermelho: '#B91C1C',       // vermelho vibrante para detalhes, botões e textos
        'vermelho-dark': '#7F1D1D', // versão mais escura para hover e estados ativos
        borda: '#D1D5DB',          // cinza claro para bordas sutis
        terracota: '#D9480F',      // cor terracota para detalhes secundários
      },
    },
  },
  plugins: [],
};
