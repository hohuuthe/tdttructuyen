module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00A150",
        },

        secondary: "#A7233A",

        background: {
          DEFAULT: "#18191A",
        },

        text: "#e4e6eb",
      },
    },
  },
  variants: {},
};
