module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '20rem',
        xl: '20 rem',
        '2xl': '24rem',
      },
    },
    extend: {
      screens: {
        'xs': '374px',
      },
    },
    colors: {
      primary: {
        50: '#d8f3dc',
        200: '#b7e4c7',
        200: '#95d5b2',
        300: '#74c69d',
        400: '#52b788',
        500: '#40916c',
        600: '#2d6a4f',
        700: '#1b4332',
        800: '#173728',
        800: '#081c15',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
    },
  },
}