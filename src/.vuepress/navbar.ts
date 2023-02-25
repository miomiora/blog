import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
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
        text: "Go",
        icon: "code",
        prefix: "go/",
        children: [

        ],
      },
      {
        text: "博客部署",
        icon: "code",
        prefix: "vuepress/",
        children: [
          { text: "安装Node.js", icon: "pic", link: "1" },
        ],
      },
    ]
  },
  // {
  //   text: "借物",
  //   icon: "link",
  //   prefix: "/borrow/",
  //   children: [
  //     { text: "借物",icon: "borrow",link: "",activeMatch: "^/borrow/$",
  //     },
  //     { text: "图片引用", icon: "pic", link: "picture" },
  //     { text: "程序支持", icon: "code", link: "program" },
  //   ]
  // },

]);
