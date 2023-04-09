import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({

  base: "/",
  host: 'localhost', // ip
  port: 20001, //端口号
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Miomiorαのβ1og",
      description: "miomiora 的博客演示",
    },
  },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
