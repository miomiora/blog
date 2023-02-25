import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    "",
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