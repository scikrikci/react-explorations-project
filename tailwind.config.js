/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--color-bg-primary)",
        bgSecondary: "var(--color-bg-secondary)",
        bgContent: "var(--color-bg-content)",
        bgContentActive: "var(--color-bg-content-active)",
        bgContentHover: "var(--color-bg-content-hover)",
        bgContentBorder: "var(--color-bg-content-border)",
        bgContentDot: "var(--color-bg-content-dot)",
        bgContainer: "var(--color-bg-container)",
        bgDivider: "var(--color-bg-divider)",
        bgModal: "var(--color-bg-modal)",
        bgButton: "var(--color-bg-button)",
        contentShadow: "var(--color-content-shadow)",
        iconBorder: "var(--color-icon-border)",
        iconShadow: "var(--color-icon-shadow)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        textTertiary: "var(--color-text-tertiary)",
        textButton: "var(--color-text-button)",
        rippleColor: "var(--color-ripple)",
      },
      fontFamily: {
        marlinExtraBold: ['MarlinExtraBold', 'sans-serif'],
        marlinMedium: ['MarlinMedium', 'sans-serif'],
        marlinRegular: ['MarlinRegular', 'sans-serif'],
      },
      animation: {
        ripple: "rippleEffect 2s ease-out",
      },
      keyframes: {
        rippleEffect: {
          "0%": {
            opacity: 1,
            transform: "scale(0)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(10)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
