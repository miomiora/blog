import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "edit",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "edit", link: "1" },
      //     { text: "苹果2", icon: "edit", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },

    ],
  },
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/code/",
    children: [
      {
        text: "Go",
        icon: "code",
        prefix: "go/",
        children: [

        ],
      },
    ]
  },
  {
    text: "借物",
    icon: "link",
    prefix: "/borrow/",
    children: [
      { text: "图片引用", icon: "pic", link: "picture" },
      { text: "程序支持", icon: "code", link: "program" },
    ]
  },

]);
