import sidebar from "./sidebar.ts";

export default ({
  title: "Aliucord documentation",
  description: "stuff",
  base: "/",
  lastUpdated: false,
  themeConfig: {
    markdown: {
      theme: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    nav: [{ text: "Home", link: "/" }],
    sidebar,
    search: {
      provider: "local",
    },
  },
});
