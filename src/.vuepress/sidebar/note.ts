import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    "",
    {
        text: "动画",
        icon: "a-zujiantianchong_huaban1fuben7",
        prefix: "anime/",
        collapsible: true,
        children: [
            "",
            "2301",
        ],
    },
    {
        text: "游戏",
        icon: "game",
        prefix: "game/",
        collapsible: true,
        children: [
            "",
        ],
    },
    {
        text: "借物表",
        icon: "ziyuanjieyong",
        prefix: "borrow/",
        collapsible: true,
        children: [
            "",
            "picture",
            "program",
        ],
    },
]);