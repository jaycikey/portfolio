import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mirror of src/theme/colors.ts — keep both in sync.
        bg: '#010C15',
        surface: '#011627',
        card: '#010D1A',
        border: '#1E2D3D',
        muted: '#607B96',
        accent: '#FEA55F', // orange
        green: '#43D9AD',
        blue: '#4D5BCE',
        'blue-light': '#5565E8',
        dim: '#011221',
        // Syntax colors (used by tokens / inline highlighting)
        'sh-string': '#E99287',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      fontSize: {
        // Default app text sizing
        base: ['14px', '1.6'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.18s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
