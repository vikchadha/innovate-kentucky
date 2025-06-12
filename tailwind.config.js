/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use our theme preset
  presets: [require('./tailwind.preset.js')],
  
  // Content paths
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Theme extensions
  theme: {
    extend: {
      // Font families
      fontFamily: {
        sans: ['var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)'],
        heading: ['var(--font-heading, var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif))'],
      },
      // Font sizes with responsive line heights
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // Responsive typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.foreground'),
              },
            },
            h1: {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              lineHeight: '1.2',
            },
            h2: {
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              lineHeight: '1.25',
            },
            h3: {
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              lineHeight: '1.3',
            },
            'h1, h2, h3, h4, h5, h6': {
              marginTop: '1.5em',
              marginBottom: '0.5em',
              '&:first-child': {
                marginTop: 0,
              }
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.primary.foreground'),
              '&:hover': {
                color: theme('colors.primary.foreground/90'),
              },
            },
          },
        },
      }),
      
      // Custom colors
      colors: {
        // Primary brand colors
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        // Additional colors
        success: colors.green,
        warning: colors.amber,
        info: colors.blue,
      },
      
      // Custom animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      
      // Custom typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.9)',
              },
            },
            h1: {
              color: 'hsl(var(--foreground))',
            },
            h2: {
              color: 'hsl(var(--foreground))',
            },
            // ... other typography styles
          },
        },
      }),
    },
  },
  
  // Plugins
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
    }),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    function({ addBase, theme }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          fontFamily: 'var(--font-heading)',
        },
        'h2': { 
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.tight'),
          fontFamily: 'var(--font-heading)',
        },
        'h3': { 
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          fontFamily: 'var(--font-heading)',
        },
        'h4': { 
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
        },
        'h5': { 
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
        },
        'h6': { 
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
        },
        'body': {
          fontFamily: 'var(--font-sans)',
          lineHeight: theme('lineHeight.relaxed'),
          color: theme('colors.gray.800'),
          backgroundColor: theme('colors.white'),
        },
        '.dark body': {
          color: theme('colors.gray.200'),
          backgroundColor: theme('colors.gray.900'),
        },
      });
    },
  ],
};
