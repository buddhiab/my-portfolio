/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff'
        },
        popover: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff'
        },
        primary: {
          DEFAULT: '#4ade80',
          foreground: '#0a0a0a',
          glow: '#22c55e'
        },
        secondary: {
          DEFAULT: '#27272a',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#27272a',
          foreground: '#a1a1aa'
        },
        accent: {
          DEFAULT: '#27272a',
          foreground: '#ffffff'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: '#27272a',
        input: '#27272a',
        ring: '#4ade80',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

