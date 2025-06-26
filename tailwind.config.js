import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        sans: defaultTheme.fontFamily.sans,
      },
      colors: {
        vermelho: '#B91C1C',       // cor para detalhes (textos, bg botões, links)
        'vermelho-dark': '#7F1D1D', 
        borda: '#D1D5DB',          // cinza claro para bordas (exemplo)
      },
    },
  },
  plugins: [],
}
