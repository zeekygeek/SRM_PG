/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your color palette here
        primary: {
          DEFAULT: 'var(--text-primary)',
          light: 'var(--text-primary-light)',
          dark: 'var(--text-primary-dark)',
        },
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          accent: 'var(--bg-accent)',
        },
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        accent: 'var(--bg-accent)',
      },
      borderColor: {
        DEFAULT: 'var(--border-color)',
      },
    },
  },
  plugins: [],
};
