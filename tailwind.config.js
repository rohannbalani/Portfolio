/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      borderRadius: {
        xl: "var(--radius)",
      },
      boxShadow: {
        soft: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
