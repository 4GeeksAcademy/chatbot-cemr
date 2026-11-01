/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.25' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-7px)' } },
        spin: { to: { transform: 'rotate(360deg)' } },
        pulseSoft: { '0%,100%': { opacity: '0.45', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.05)' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(.96)' }, to: { opacity: '1', transform: 'scale(1)' } },
      },
      animation: {
        fadeUp: 'fadeUp .45s ease both',
        fadeIn: 'fadeIn .4s ease both',
        blink: 'blink 1.1s ease-in-out infinite',
        floaty: 'floaty 5.5s ease-in-out infinite',
        spin: 'spin .8s linear infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        scaleIn: 'scaleIn .28s cubic-bezier(.2,.8,.2,1) both',
      },
    },
  },
  variants: { border: ['theme'] },
};