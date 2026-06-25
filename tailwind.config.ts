import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#17141f',
        paper: '#fff7ed',
        cloud: '#fffdf8',
        coral: '#ff3e87',
        teal: '#12b5cb',
        moss: '#ffd166',
        violet: '#7c3aed',
        line: '#eadfce',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif'],
        serif: ['var(--font-display)', 'Inter', 'Arial', 'sans-serif'],
        mono: ['var(--font-code)', 'JetBrains Mono', 'monospace'],
        accent: ['var(--font-accent)', 'Sriracha', 'cursive'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(63, 28, 96, 0.13)',
      },
    },
  },
  plugins: [],
};

export default config;
