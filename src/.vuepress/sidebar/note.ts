import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    "",
    {
        text: "动画",
        icon: "flower",
        prefix: "anime/",
        collapsible: true,
        children: [
            "",
            "2301",
        ],
    },
    {
        text: "游戏",
        icon: "play",
        prefix: "game/",
        collapsible: true,
        children: [
            "",
        ],
    },
    {
        text: "借物表",
        icon: "link",
        prefix: "borrow/",
        collapsible: true,
        children: [
            "",
            "picture",
            "program",
        ],
    },
]);