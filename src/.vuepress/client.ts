import { defineClientConfig } from "vuepress/client";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
    setup() {
        setupSnowFall(
            {
                count: 30,
                minSize: 10,
                maxSize: 20
            }
        );
        setupRunningTimeFooter(
            new Date("2022-01-01"),
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
    },
});

