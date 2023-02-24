import {sidebar} from "vuepress-theme-hope";
export const zhSidebar = sidebar({
    "/": [
        "",
        "intro",
        {
            text: "随笔",
            icon: "note",
            prefix: "note/",
            link:"note/",
            children: [

            ],
        },
        {
            text: "代码笔记",
            icon: "code",
            prefix: "code/",
            link: "code/",
            children: [

            ],
        },
        {
            text: "借物",
            icon: "link",
            prefix: "borrow/",
            link: "borrow/",
            children: [
                "picture",
                "program",
            ],
        },

    ],

});
