/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pinkLogo: "var(--color-pink-logo)",
        primary: {
          DEFAULT: '#FF0000',
          dark: '#EB0665',
        },
        blackSecondary: "#242424",
        pinkLogo: "#e00087",
        light: {
          primary: '#F8F9FA',
          secondary: "#F3F3F3",
          text: '#1A1A1A',
          card: '#F5F5F5',
          border: '#E5E5E5',
        },
        dark: {
          primary: '#000',
          secondary: '#0D0D0D',
          text: '#FFFFFF',
          card: '#2A2A2A',
          border: '#050505',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      fontSize: {
        'title': ['2.5rem', { lineHeight: '3rem' }],
        'subtitle': ['1.25rem', { lineHeight: '1.75rem' }],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
