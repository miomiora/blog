import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
      { text: "动画", link: "anime/", icon: "flower", activeMatch: "^/anime/$" },
      { text: "游戏", link: "game/", icon: "play", activeMatch: "^/game/$" },

      {
        text: "借物表",
        icon: "link",
        prefix: "borrow/",
        children: [
          { text: "图片引用", link: "picture", icon: "pic"},
          { text: "框架引用", link: "program", icon: "code"},
        ],
      },
    ],
  },
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/code/",
    children: [
      { text: "代码笔记", link: "", icon: "code", activeMatch: "^/code/$" },
      {
        text: "Go相关",
        icon: "code",
        children: [
          { text: "Go", link: "go/", icon: "vscode", activeMatch: "^/go/$" },
          { text: "Gin", link: "gin/", icon: "template", activeMatch: "^/gin/$" },
        ],
      },
      { text: "博客部署", link: "vuepress/", icon: "blog", activeMatch: "^/vuepress/$" },
    ]
  },
]);
