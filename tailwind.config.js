module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.css", "src/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
