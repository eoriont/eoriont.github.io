/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.html",
    "./_drafts/**/*.html",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
