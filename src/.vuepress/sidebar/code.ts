import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
    "",
    {
        text: "Go",
        icon: "golang1",
        prefix: "go/",
        collapsible: true,
        children: [
            "",
            "time",
            "request"
        ],
    },
    {
        text: "Gin",
        icon: "houduankaifa",
        prefix: "gin/",
        collapsible: true,
        children: [
            "",

        ],
    },
    {
        text: "博客部署",
        icon: "blog",
        prefix: "vuepress/",
        collapsible: true,
        children: [
            "",
            "1",
            "2",
            "3",
            "4",
            "5",
        ],
    },
    {
        text: "其他",
        icon: "other1",
        prefix: "other/",
        collapsible: true,
        children: [
            "",
            "port",
            "redis",
        ],
    },
]);