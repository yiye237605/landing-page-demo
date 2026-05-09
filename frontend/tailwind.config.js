/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        'surface-soft': '#fafafa',
        'surface-card': '#ffffff',
        'surface-strong': '#f0f0f3',
        hairline: '#e6e6e6',
        'hairline-soft': '#f1f1f1',
        'hairline-strong': '#d9d9d9',
        ink: '#1a1a1a',
        charcoal: '#37352f',
        slate: '#5d5b54',
        steel: '#787671',
        muted: '#a4a097',
        'primary': '#5645d4',
        'primary-pressed': '#4534b3',
        'on-primary': '#ffffff',
        'text-link': '#0075de',
        block: {
          lime: '#dceeb1',
          lilac: '#c5b0f4',
          cream: '#f4ecd6',
          pink: '#efd4d4',
          mint: '#c8e6cd',
          coral: '#f3c9b6',
          yellow: '#fef7d6',
          peach: '#ffe8d4',
          sky: '#dcecfa',
          lavender: '#e6e0f5'
        },
        semantic: {
          success: '#1aae39',
          warning: '#dd5b00',
          error: '#e03131'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace']
      },
      boxShadow: {
        'card': '0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.08)',
        'card-strong': '0 4px 12px rgba(0,0,0,0.08)',
        'hero-mockup': '0 24px 48px -8px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'xxl': '24px',
        'pill': '50px',
        'full': '9999px'
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '96px'
      },
      letterSpacing: {
        'tight': '-2px',
        'tighter': '-1px',
        'tracked': '0.54px'
      },
      lineHeight: {
        'display': '1.05',
        'headline': '1.35',
        'body': '1.5'
      }
    },
  },
  plugins: [],
}