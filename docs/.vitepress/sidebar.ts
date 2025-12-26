import { scanDir } from "./util.ts";

export default {
  "/": [
    {
      text: "Guides",
      items: [
        { text: "Beginner", link: "/beginner/", items: scanDir("beginner") },
        { text: "Themer", link: "/themer/", items: scanDir("themer") },
        { text: "Sounds", link: "/sounds/", items: scanDir("sounds") },
        {
          text: "UserPFP & BG",
          link: "/userpfpbg/",
          items: scanDir("userpfpbg"),
        },
      ],
    },
    {
      text: "Interface",
      items: [
        { text: "Modern UI", link: "/newui/", items: scanDir("newui") },
        { text: "Old UI", link: "/oldui/", items: scanDir("oldui") },
      ],
    },
    {
      text: "Features",
      items: [
        { text: "Plugin Forks", link: "/forks/", items: scanDir("forks") },
        { text: "Backports", link: "/backports/", items: scanDir("backports") },
		{ text: "Missing Features", link: "/missingfeat/", items: scanDir("missingfeat") }
      ],
    },
    {
      text: "Changelog",
      items: [
        { text: "Changelog", link: "/changelog/", items: scanDir("changelog") },
      ],
    },
  ],
};
