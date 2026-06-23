import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#191a1d',
        paper: '#f7f7f2',
        cloud: '#ffffff',
        coral: '#d65f45',
        teal: '#167f7a',
        moss: '#5d7f3c',
        violet: '#8d70b5',
        line: '#dfddd4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(25, 26, 29, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
