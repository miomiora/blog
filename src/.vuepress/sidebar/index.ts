import {sidebar} from "vuepress-theme-hope";
import {code} from "./code";
import {note} from "./note";

export default sidebar({
    "/note/": note,
    "/code/": code,
    "/": ["", "note/", "code/"],
});
