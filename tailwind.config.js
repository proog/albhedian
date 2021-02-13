module.exports = {
  purge: {
    enabled: !!process.env.TAILWIND_ENABLE_PURGE,
    content: ["src/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
