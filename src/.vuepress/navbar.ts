import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "随笔",
    icon: "notepad",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "notepad", activeMatch: "^/note/$" },
      { text: "动画", link: "anime/", icon: "a-zujiantianchong_huaban1fuben7", activeMatch: "^/anime/$" },
      { text: "游戏", link: "game/", icon: "game", activeMatch: "^/game/$" },

      {
        text: "借物表",
        icon: "ziyuanjieyong",
        prefix: "borrow/",
        children: [
          { text: "图片引用", link: "picture", icon: "picture-filling"},
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
          { text: "Go", link: "go/", icon: "golang1", activeMatch: "^/go/$" },
          { text: "Gin", link: "gin/", icon: "houduankaifa", activeMatch: "^/gin/$" },
          { text: "gRPC", link: "grpc/", icon: "golang", activeMatch: "^/gRPC/$" },
        ],
      },
      { text: "博客部署", link: "vuepress/", icon: "blog", activeMatch: "^/vuepress/$" },
      { text: "其他", link: "other/", icon: "other1", activeMatch: "^/other/$" },
    ]
  },
]);
