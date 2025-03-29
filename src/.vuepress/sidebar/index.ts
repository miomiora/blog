import {sidebar} from "vuepress-theme-hope";
import {code} from "./code.js";
import {note} from "./note.js";

export const zhSidebar = sidebar({
    "/note/": note,
    "/code/": code,
    "/": ["", "note/", "code/"],
});
