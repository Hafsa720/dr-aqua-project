import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          // 4 colors before #452E72
          50: '#F5F3FA', // Very light purple
          100: '#E8E1F3', // Light purple
          200: '#D4C5E8', // Lighter purple
          300: '#B8A1D8', // Light-medium purple
          400: '#9679C5', // Medium-light purple
          // Base color #452E72
          500: '#452E72', // Base primary color
          // 6 colors after #452E72
          600: '#3D2865', // Darker purple
          700: '#352258', // Darker purple
          800: '#2D1C4B', // Much darker purple
          900: '#25163E', // Very dark purple
          950: '#1D1031', // Extremely dark purple
          1000: '#150A24', // Almost black purple
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          // 4 colors before #DE261E
          50: '#FEF2F2', // Very light red
          100: '#FEE2E2', // Light red
          200: '#FECACA', // Lighter red
          300: '#FCA5A5', // Light-medium red
          400: '#F87171', // Medium-light red
          // Base color #DE261E
          500: '#DE261E', // Base secondary color
          // 6 colors after #DE261E
          600: '#C8211B', // Darker red
          700: '#B21D18', // Darker red
          800: '#9C1815', // Much darker red
          900: '#861312', // Very dark red
          950: '#700F0F', // Extremely dark red
          1000: '#5A0C0C', // Almost black red
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
