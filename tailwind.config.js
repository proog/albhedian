module.exports = {
  purge: {
    enabled: !!process.env.TAILWIND_ENABLE_PURGE,
    content: ["src/index.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
