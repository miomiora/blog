// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbar = navbar([
  "/",
  {
    text: "\u968F\u7B14",
    icon: "notepad",
    prefix: "/note/",
    children: [
      { text: "\u968F\u7B14", link: "", icon: "notepad", activeMatch: "^/note/$" },
      { text: "\u0489\u4E2D\u0489\u4E8C\u0489\u75C5\u0489", link: "me/", icon: "Super-Mario", activeMatch: "^/me/$" },
      { text: "\u52A8\u753B", link: "anime/", icon: "a-zujiantianchong_huaban1fuben7", activeMatch: "^/anime/$" },
      { text: "\u6E38\u620F", link: "game/", icon: "game", activeMatch: "^/game/$" },
      {
        text: "\u501F\u7269\u8868",
        icon: "ziyuanjieyong",
        prefix: "borrow/",
        children: [
          { text: "\u56FE\u7247\u5F15\u7528", link: "picture", icon: "picture-filling" },
          { text: "\u6846\u67B6\u5F15\u7528", link: "program", icon: "code" }
        ]
      }
    ]
  },
  {
    text: "\u4EE3\u7801\u7B14\u8BB0",
    icon: "code",
    prefix: "/code/",
    children: [
      { text: "\u4EE3\u7801\u7B14\u8BB0", link: "", icon: "code", activeMatch: "^/code/$" },
      {
        text: "Go\u76F8\u5173",
        icon: "code",
        children: [
          { text: "Go", link: "go/", icon: "golang1", activeMatch: "^/go/$" },
          { text: "Gin", link: "gin/", icon: "houduankaifa", activeMatch: "^/gin/$" },
          { text: "gRPC", link: "grpc/", icon: "golang", activeMatch: "^/gRPC/$" }
        ]
      },
      { text: "MongoDB", link: "mongodb/", icon: "mongodb", activeMatch: "^/mongodb/$" },
      { text: "\u9879\u76EE", link: "project/", icon: "xiangmu", activeMatch: "^/project/$" },
      { text: "\u535A\u5BA2\u90E8\u7F72", link: "vuepress/", icon: "blog", activeMatch: "^/vuepress/$" },
      { text: "\u5176\u4ED6", link: "other/", icon: "other1", activeMatch: "^/other/$" }
    ]
  }
]);

// src/.vuepress/sidebar/index.ts
import { sidebar } from "vuepress-theme-hope";

// src/.vuepress/sidebar/code.ts
import { arraySidebar } from "vuepress-theme-hope";
var code = arraySidebar([
  "",
  {
    text: "Go",
    icon: "golang1",
    prefix: "go/",
    collapsible: true,
    children: [
      "",
      "time",
      "request",
      "redis"
    ]
  },
  {
    text: "Gin",
    icon: "houduankaifa",
    prefix: "gin/",
    collapsible: true,
    children: [
      ""
    ]
  },
  {
    text: "gRPC",
    icon: "golang",
    prefix: "gRPC/",
    collapsible: true,
    children: [
      "",
      "start",
      "gin"
    ]
  },
  {
    text: "MongoDB",
    icon: "mongodb",
    prefix: "mongodb/",
    collapsible: true,
    children: [
      "",
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    text: "\u9879\u76EE",
    icon: "xiangmu",
    prefix: "project/",
    collapsible: true,
    children: [
      "",
      "user-center",
      "mio-api"
    ]
  },
  {
    text: "\u535A\u5BA2\u90E8\u7F72",
    icon: "blog",
    prefix: "vuepress/",
    collapsible: true,
    children: [
      "",
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    text: "\u5176\u4ED6",
    icon: "other1",
    prefix: "other/",
    collapsible: true,
    children: [
      "",
      "port",
      "redis"
    ]
  }
]);

// src/.vuepress/sidebar/note.ts
import { arraySidebar as arraySidebar2 } from "vuepress-theme-hope";
var note = arraySidebar2([
  "",
  {
    text: "\u0489\u4E2D\u0489\u4E8C\u0489\u75C5\u0489",
    icon: "Super-Mario",
    prefix: "me/",
    collapsible: true,
    children: [
      "",
      "kaleidoscope"
    ]
  },
  {
    text: "\u52A8\u753B",
    icon: "a-zujiantianchong_huaban1fuben7",
    prefix: "anime/",
    collapsible: true,
    children: [
      "",
      "2301"
    ]
  },
  {
    text: "\u6E38\u620F",
    icon: "game",
    prefix: "game/",
    collapsible: true,
    children: [
      "",
      "amatsutsume"
    ]
  },
  {
    text: "\u501F\u7269\u8868",
    icon: "ziyuanjieyong",
    prefix: "borrow/",
    collapsible: true,
    children: [
      "",
      "picture",
      "program"
    ]
  }
]);

// src/.vuepress/sidebar/index.ts
var zhSidebar = sidebar({
  "/note/": note,
  "/code/": code,
  "/": ["", "note/", "code/"]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://miomiora.github.io/mio-blog/",
  author: {
    name: "miomiora",
    url: "https://github.com/miomiora"
  },
  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
  darkmode: "toggle",
  // iconPrefix: "",
  iconAssets: "//at.alicdn.com/t/c/font_3918030_n5xvg5sm9a.css",
  logo: "https://s2.loli.net/2023/03/04/KHzjSPTb4dtYVwI.jpg",
  repo: "miomiora/mio-blog",
  docsDir: "docs",
  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/miomiora",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://steamcommunity.com/id/miomiora/"
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: [
      //   "https://mrhope.site",
      //   '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>',
      // ],
    }
  },
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "miomiora\u7684\u5C0F\u7A9D",
      displayFooter: true,
      blog: {
        description: "\u9B54\u90FD\u8BA1\u7B97\u673A\u7855\u58EB\u5728\u8BFB",
        intro: "/intro.html"
      },
      editLink: false,
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
      // "/zh/demo/encrypt.html": ["1234"],
    }
  },
  plugins: {
    blog: true,
    comment: {
      provider: "Giscus",
      comment: true,
      repo: "miomiora/miomiora.github.io",
      repoId: "R_kgDOJBiVdA",
      category: "Announcements",
      categoryId: "DIC_kwDOJBiVdM4CUbgb"
      // mapping: "pathname",
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  host: "localhost",
  // ip
  port: 2001,
  //端口号
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Miomior\u03B1\u306E\u03B21og",
      description: "miomiora \u7684\u535A\u5BA2\u6F14\u793A"
    }
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvaW5kZXgudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL2NvZGUudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL25vdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9Db2RlL21pby1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENvZGVcXFxcbWlvLWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvZGUvbWlvLWJsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuXG4gIGJhc2U6IFwiL1wiLFxuICBob3N0OiAnbG9jYWxob3N0JywgLy8gaXBcbiAgcG9ydDogMjAwMSwgLy9cdTdBRUZcdTUzRTNcdTUzRjdcbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgICB0aXRsZTogXCJNaW9taW9yXHUwM0IxXHUzMDZFXHUwM0IyMW9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJtaW9taW9yYSBcdTc2ODRcdTUzNUFcdTVCQTJcdTZGMTRcdTc5M0FcIixcbiAgICB9LFxuICB9LFxuXG4gIHRoZW1lLFxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0NvZGUvbWlvLWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ29kZVxcXFxtaW8tYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Db2RlL21pby1ibG9nL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgemhOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCB7IHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9taW9taW9yYS5naXRodWIuaW8vbWlvLWJsb2cvXCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJtaW9taW9yYVwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vbWlvbWlvcmFcIixcbiAgfSxcblxuICAvLyB0aGVtZUNvbG9yOiB7XG4gIC8vICAgYmx1ZTogXCIjMjE5NmYzXCIsXG4gIC8vICAgcmVkOiBcIiNmMjZkNmRcIixcbiAgLy8gICBncmVlbjogXCIjM2VhZjdjXCIsXG4gIC8vICAgb3JhbmdlOiBcIiNmYjliNWZcIixcbiAgLy8gfSxcblxuICBkYXJrbW9kZTogXCJ0b2dnbGVcIixcblxuICAvLyBpY29uUHJlZml4OiBcIlwiLFxuXG4gIGljb25Bc3NldHM6IFwiLy9hdC5hbGljZG4uY29tL3QvYy9mb250XzM5MTgwMzBfbjV4dmc1c205YS5jc3NcIixcblxuICBsb2dvOiBcImh0dHBzOi8vczIubG9saS5uZXQvMjAyMy8wMy8wNC9LSHpqU1BUYjRkdFlWd0kuanBnXCIsXG5cbiAgcmVwbzogXCJtaW9taW9yYS9taW8tYmxvZ1wiLFxuXG5cblxuICBkb2NzRGlyOiBcImRvY3NcIixcblxuICBibG9nOiB7XG4gICAgbWVkaWFzOiB7XG4gICAgICAvLyBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaWxpQmlsaTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBFbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taW9taW9yYVwiLFxuICAgICAgLy8gR2l0bGFiOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEdtYWlsOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEluc3RhZ3JhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBMYXJrOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExpbmtlZGluOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBTdGVhbTogXCJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9pZC9taW9taW9yYS9cIixcbiAgICAgIC8vIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTXJIb3BlOiBbXG4gICAgICAvLyAgIFwiaHR0cHM6Ly9tcmhvcGUuc2l0ZVwiLFxuICAgICAgLy8gICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjI0NzggLjc4MTMzIC0yLjU0Nzk3IC42MzYyMiA5MTAuMzUgMjgxLjU4KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGlkPVwiYVwiIHgxPVwiMzcuODI3XCIgeDI9XCIxNTkuOTg4XCIgeTE9XCIyNzIuOTE2XCIgeTI9XCIyNzQuNjNcIj48c3RvcCBvZmZzZXQ9XCIuNzVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIuOTk4XCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjEzODE0IC44MDc5NyAyLjU1NTk5IC0uNjAzMiAzNC4wODcgNDk0LjM2OSlcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImJcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjgxNVwiIHN0b3AtY29sb3I9XCIjZTMzOTM5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTEzNS42MzcgNTg4LjA2N2MtNDguODkxLTIwMS4zMzQgNzQuNjA1LTQwNC4xNjIgMjc1LjgzNy00NTMuMDI4IDIwMS4yMzMtNDguODY2IDQwMy45OTggNzQuNzM0IDQ1Mi44ODkgMjc2LjA2OCA0OC44OTIgMjAxLjMzNS03NC42MDYgNDA0LjE2Mi0yNzUuODM4IDQ1My4wMjktMjAxLjIzMyA0OC44NjYtNDAzLjk5Ny03NC43MzQtNDUyLjg4OC0yNzYuMDY5WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48cGF0aCBkPVwiTTU5Ni4wNzYgMTk3LjA0NGMtMy4zNDItNTYuMDkgNTYuODk3LTc3LjgzMSA4OS4wMTctNTEuMzYxbS00MTAuNjUgMTI4LjgxOWMtMjIuNzUzLTUxLjM3Ny04Ni4yNTYtNDMuMDctMTAyLjY1OS00LjgxNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjExXCIvPjxwYXRoIGQ9XCJNODMzLjU2OCAyODguMDJjLjA1IDE4LjA0Ni0xMi41ODQgMzAuNjk5LTIxLjM0NiAzMi4yMTEtOC43NjIgMS41MTItMTcuMDMxLTEuMDk5LTE4LjU4NC0xLjM0MSAwIDAtNjEuMzYzLTYuMTAzLTEwNS42MjcgNi45MjEtNDQuMjY1IDEzLjAyNi04Ny4wNCA0Ny4zODctOTQuNjM3IDUxLjg5Mi02LjYyNyAzLjkyOC0yOS4xMTIgNy42OTctNDQuNDYyLTEyLjkzOC0xNS4zNTEtMjAuNjM2LjAyNC00MS41MjYuMDI0LTQxLjUyNnMxMi42ODUtMTguMjc5IDQwLjc3MS0zNS4xMjNjMjguMDg4LTE2Ljg0NCAyNC42MjQtMTMuMjI2IDUyLjMyNi0yNS42OTYgMTUuMjQ3LTYuODY1IDQzLjMxOS0xNC4xODYgNjcuNDI5LTE3LjA2OSAyNS4xOTMtMy4wMTEgNDYuMzQ4LTEuMzg0IDU3LjY3My43NjkgMjIuMTY1IDQuMjEyIDI4LjYzMiA1LjkzIDM5LjE2OSA5LjIyOSAxMi40NTEgMy44OTggMjcuMjE0IDE0LjUxNiAyNy4yNjQgMzIuNjcxWlwiIGZpbGw9XCIjZmZmXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI4XCIvPjxwYXRoIGQ9XCJNNTU4LjM1MSAzNDUuNjMyYy0zLjQ1OC0xNC4yMzcgNS4yMTQtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTU0LTMuNDM3IDI4LjQzIDUuMzIgMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTIgMjguNTY3LTE5LjM2NyAzMi4wMDQtMTQuMTUyIDMuNDM3LTI4LjQzLTUuMzE5LTMxLjg4Ny0xOS41NThaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNMjIwLjI0OSA0ODMuNDE2YzQ2LjgxLTExLjY4OSA5MS4zMjMtLjQ2NyA5OS40MiAyNS4wNjQgOC4wOTggMjUuNTMyLTIzLjI4NiA1NS43MDYtNzAuMDk3IDY3LjM5My00Ni44MTEgMTEuNjg5LTkxLjMyMy40NjctOTkuNDItMjUuMDY0LTguMDk3LTI1LjUzMiAyMy4yODYtNTUuNzA2IDcwLjA5Ny02Ny4zOTNaXCIgZmlsbD1cInVybCgjYSlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk03MzkuOSAzNTcuMjI2Yy00Ni45NTkgMTEuMDgyLTgxLjM2NyA0MS40NjktNzYuODUzIDY3Ljg3MSA0LjUxNCAyNi40MDIgNDYuMjQxIDM4LjgyMSA5My4xOTggMjcuNzM4IDQ2Ljk1OC0xMS4wODEgODEuMzY2LTQxLjQ2NyA3Ni44NTMtNjcuODY5LTQuNTE0LTI2LjQwMy00Ni4yNDEtMzguODIxLTkzLjE5OC0yNy43NFpcIiBmaWxsPVwidXJsKCNiKVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBvcGFjaXR5PVwiLjI2MVwiLz48cGF0aCBkPVwiTTQwMC45MzQgMzk4LjkxN2MtLjU5OSAxOC4wMzQtMTMuNjgxIDMwLjIxOC0yMi40OTQgMzEuNDA5LTguODEyIDEuMTkyLTE2Ljk4Mi0xLjcxNi0xOC41MjYtMi4wMTQgMCAwLTYxLjEwOS04LjMzNC0xMDUuODE5IDMuMDctNDQuNzA5IDExLjQwNC04OC42OTYgNDQuMTgxLTk2LjQ1MiA0OC40MDYtNi43NjMgMy42ODMtMjkuMzcyIDYuNjMyLTQzLjk3Mi0xNC41NDYtMTQuNi0yMS4xOCAxLjUxOS00MS40OTQgMS41MTktNDEuNDk0czEzLjMzNS0xNy44MDMgNDIuMDEzLTMzLjYxMmMyOC42NzctMTUuODA5IDI1LjA4NS0xMi4zMTkgNTMuMjIyLTIzLjc3MiAxNS40ODQtNi4zMDQgNDMuODAzLTEyLjU5OCA2OC4wMDUtMTQuNiAyNS4yODgtMi4wOTMgNDYuMzczLjMwNSA1Ny42MTYgMi44NjcgMjIgNS4wMTYgMjguNDAxIDYuOTY4IDM4LjgxMyAxMC42NDkgMTIuMzA0IDQuMzQ4IDI2LjY3NyAxNS40OTYgMjYuMDc1IDMzLjYzN1pcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTEyOS4wNSA0NDUuNTQ2Yy0zLjQ1OC0xNC4yMzkgNS4yMTMtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTUzLTMuNDM3IDI4LjQyOSA1LjMxOCAzMS44ODcgMTkuNTU3IDMuNDU4IDE0LjIzOC01LjIxMyAyOC41NjYtMTkuMzY3IDMyLjAwMy0xNC4xNTMgMy40MzctMjguNDMtNS4zMTgtMzEuODg3LTE5LjU1N1pcIiBmaWxsPVwiIzZkNWU1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjNmQ1ZTU2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNi4yNjhcIi8+PHBhdGggZD1cIk00MjQuMzgxIDY5Ni4zODZzNjQuNDI3IDEzLjY0NiAxMDEuOTk2IDUuNzU3QzY0MC42NTMgNjc4LjE0NiA2OTAuOCA1MjEuODk0IDY5MC44IDUyMS44OTRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTc5Ni4wNCA2NjYuNzc0cy0xMC43MzQtNDQuMTY1LTQxLjQwNS0xMS4zNDhjLTkuNjgxIDEwLjM1OS0xMC40MzggNDAuNjA0LTI4LjIxNyA4MS44OS0xNS45NDIgMzcuMDItMzkuNTY0IDYwLjcyOC00Mi45MzggNzYuMDYzLTMuMzc0IDE1LjMzNS40NTEgMzUuOTkyIDI2LjM1MiA0MS41MzcgMjUuOTAyIDUuNTQ1IDQxLjk2Ny0yMy4zODEgNDEuOTY3LTIzLjM4MWw0NC4yNDEtMTY0Ljc2MVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk03OTMuMzM3IDY2NC43MzRjLTM3LjA3NSAxNjAuMDQ1LTUxLjczIDE2My4xNDUtNDAuMzQzIDE4NC44NDUgMTEuMzg3IDIxLjcwMSA1MS40MTcgMzMuNzE2IDcxLjg3Ni03LjMxMyA2LjczNC0xMy41MDUtMS4zMS00My4zMTctMS41MTEtNzguMDc3LS4zMDctNTMuMDYgMTYuODY1LTg2LjExMSAxMC40MDMtOTguMS0xNS4zMzItMjguNDUyLTM5LjM3Ny01Ljg3NS00MC40MjUtMS4zNTVaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjwvc3ZnPicsXG4gICAgICAvLyBdLFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIm1pb21pb3JhXHU3Njg0XHU1QzBGXHU3QTlEXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU5QjU0XHU5MEZEXHU4QkExXHU3Qjk3XHU2NzNBXHU3ODU1XHU1OEVCXHU1NzI4XHU4QkZCXCIsXG4gICAgICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXG4gICAgICB9LFxuXG4gICAgICBlZGl0TGluazogZmFsc2UsXG4gICAgICAvLyBwYWdlIG1ldGFcbiAgICAgIG1ldGFMb2NhbGVzOiB7XG4gICAgICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICAgIC8vIFwiL3poL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzogdHJ1ZSxcbiAgICBjb21tZW50OiB7XG4gICAgICBwcm92aWRlcjogXCJHaXNjdXNcIixcbiAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICByZXBvOiBcIm1pb21pb3JhL21pb21pb3JhLmdpdGh1Yi5pb1wiLFxuICAgICAgcmVwb0lkOiBcIlJfa2dET0pCaVZkQVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0pCaVZkTTRDVWJnYlwiLFxuICAgICAgLy8gbWFwcGluZzogXCJwYXRobmFtZVwiLFxuICAgIH0sXG5cbiAgICAvLyBhbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNoYXJ0OiB0cnVlLFxuICAgICAgY29kZXRhYnM6IHRydWUsXG4gICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgZWNoYXJ0czogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGZsb3djaGFydDogdHJ1ZSxcbiAgICAgIGdmbTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBrYXRleDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50YXRpb246IHtcbiAgICAgICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAgIH0sXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9Db2RlL21pby1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENvZGVcXFxcbWlvLWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvZGUvbWlvLWJsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xuICBcIi9cIixcbiAge1xuICAgIHRleHQ6IFwiXHU5NjhGXHU3QjE0XCIsXG4gICAgaWNvbjogXCJub3RlcGFkXCIsXG4gICAgcHJlZml4OiBcIi9ub3RlL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRleHQ6IFwiXHU5NjhGXHU3QjE0XCIsIGxpbms6IFwiXCIsIGljb246IFwibm90ZXBhZFwiLCBhY3RpdmVNYXRjaDogXCJeL25vdGUvJFwiIH0sXG4gICAgICB7IHRleHQ6IFwiXHUwNDg5XHU0RTJEXHUwNDg5XHU0RThDXHUwNDg5XHU3NUM1XHUwNDg5XCIsIGxpbms6IFwibWUvXCIsIGljb246IFwiU3VwZXItTWFyaW9cIiwgYWN0aXZlTWF0Y2g6IFwiXi9tZS8kXCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTUyQThcdTc1M0JcIiwgbGluazogXCJhbmltZS9cIiwgaWNvbjogXCJhLXp1amlhbnRpYW5jaG9uZ19odWFiYW4xZnViZW43XCIsIGFjdGl2ZU1hdGNoOiBcIl4vYW5pbWUvJFwiIH0sXG4gICAgICB7IHRleHQ6IFwiXHU2RTM4XHU2MjBGXCIsIGxpbms6IFwiZ2FtZS9cIiwgaWNvbjogXCJnYW1lXCIsIGFjdGl2ZU1hdGNoOiBcIl4vZ2FtZS8kXCIgfSxcblxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTAxRlx1NzI2OVx1ODg2OFwiLFxuICAgICAgICBpY29uOiBcInppeXVhbmppZXlvbmdcIixcbiAgICAgICAgcHJlZml4OiBcImJvcnJvdy9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1NkZFXHU3MjQ3XHU1RjE1XHU3NTI4XCIsIGxpbms6IFwicGljdHVyZVwiLCBpY29uOiBcInBpY3R1cmUtZmlsbGluZ1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2ODQ2XHU2N0I2XHU1RjE1XHU3NTI4XCIsIGxpbms6IFwicHJvZ3JhbVwiLCBpY29uOiBcImNvZGVcIn0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NEVFM1x1NzgwMVx1N0IxNFx1OEJCMFwiLFxuICAgIGljb246IFwiY29kZVwiLFxuICAgIHByZWZpeDogXCIvY29kZS9cIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0ZXh0OiBcIlx1NEVFM1x1NzgwMVx1N0IxNFx1OEJCMFwiLCBsaW5rOiBcIlwiLCBpY29uOiBcImNvZGVcIiwgYWN0aXZlTWF0Y2g6IFwiXi9jb2RlLyRcIiB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkdvXHU3NkY4XHU1MTczXCIsXG4gICAgICAgIGljb246IFwiY29kZVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJHb1wiLCBsaW5rOiBcImdvL1wiLCBpY29uOiBcImdvbGFuZzFcIiwgYWN0aXZlTWF0Y2g6IFwiXi9nby8kXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiR2luXCIsIGxpbms6IFwiZ2luL1wiLCBpY29uOiBcImhvdWR1YW5rYWlmYVwiLCBhY3RpdmVNYXRjaDogXCJeL2dpbi8kXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiZ1JQQ1wiLCBsaW5rOiBcImdycGMvXCIsIGljb246IFwiZ29sYW5nXCIsIGFjdGl2ZU1hdGNoOiBcIl4vZ1JQQy8kXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6IFwiTW9uZ29EQlwiLCBsaW5rOiBcIm1vbmdvZGIvXCIsIGljb246IFwibW9uZ29kYlwiLCBhY3RpdmVNYXRjaDogXCJeL21vbmdvZGIvJFwiIH0sXG5cbiAgICAgIHsgdGV4dDogXCJcdTk4NzlcdTc2RUVcIiwgbGluazogXCJwcm9qZWN0L1wiLCBpY29uOiBcInhpYW5nbXVcIiwgYWN0aXZlTWF0Y2g6IFwiXi9wcm9qZWN0LyRcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUJBMlx1OTBFOFx1N0Y3MlwiLCBsaW5rOiBcInZ1ZXByZXNzL1wiLCBpY29uOiBcImJsb2dcIiwgYWN0aXZlTWF0Y2g6IFwiXi92dWVwcmVzcy8kXCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTUxNzZcdTRFRDZcIiwgbGluazogXCJvdGhlci9cIiwgaWNvbjogXCJvdGhlcjFcIiwgYWN0aXZlTWF0Y2g6IFwiXi9vdGhlci8kXCIgfSxcbiAgICBdXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ29kZS9taW8tYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENvZGVcXFxcbWlvLWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Db2RlL21pby1ibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9pbmRleC50c1wiO2ltcG9ydCB7c2lkZWJhcn0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCB7Y29kZX0gZnJvbSBcIi4vY29kZVwiO1xuaW1wb3J0IHtub3RlfSBmcm9tIFwiLi9ub3RlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgICBcIi9ub3RlL1wiOiBub3RlLFxuICAgIFwiL2NvZGUvXCI6IGNvZGUsXG4gICAgXCIvXCI6IFtcIlwiLCBcIm5vdGUvXCIsIFwiY29kZS9cIl0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ29kZS9taW8tYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENvZGVcXFxcbWlvLWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGNvZGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvZGUvbWlvLWJsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2NvZGUudHNcIjtpbXBvcnQgeyBhcnJheVNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvZGUgPSBhcnJheVNpZGViYXIoW1xyXG4gICAgXCJcIixcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkdvXCIsXHJcbiAgICAgICAgaWNvbjogXCJnb2xhbmcxXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImdvL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiLFxyXG4gICAgICAgICAgICBcInJlcXVlc3RcIixcclxuICAgICAgICAgICAgXCJyZWRpc1wiXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJHaW5cIixcclxuICAgICAgICBpY29uOiBcImhvdWR1YW5rYWlmYVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJnaW4vXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJcIixcclxuXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJnUlBDXCIsXHJcbiAgICAgICAgaWNvbjogXCJnb2xhbmdcIixcclxuICAgICAgICBwcmVmaXg6IFwiZ1JQQy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcInN0YXJ0XCIsXHJcbiAgICAgICAgICAgIFwiZ2luXCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIk1vbmdvREJcIixcclxuICAgICAgICBpY29uOiBcIm1vbmdvZGJcIixcclxuICAgICAgICBwcmVmaXg6IFwibW9uZ29kYi9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIjFcIixcclxuICAgICAgICAgICAgXCIyXCIsXHJcbiAgICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgICBcIjRcIixcclxuICAgICAgICAgICAgXCI1XCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1OTg3OVx1NzZFRVwiLFxyXG4gICAgICAgIGljb246IFwieGlhbmdtdVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJwcm9qZWN0L1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgIFwidXNlci1jZW50ZXJcIixcclxuICAgICAgICAgICAgXCJtaW8tYXBpXCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTM1QVx1NUJBMlx1OTBFOFx1N0Y3MlwiLFxyXG4gICAgICAgIGljb246IFwiYmxvZ1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJ2dWVwcmVzcy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIjFcIixcclxuICAgICAgICAgICAgXCIyXCIsXHJcbiAgICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgICBcIjRcIixcclxuICAgICAgICAgICAgXCI1XCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTUxNzZcdTRFRDZcIixcclxuICAgICAgICBpY29uOiBcIm90aGVyMVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJvdGhlci9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcInBvcnRcIixcclxuICAgICAgICAgICAgXCJyZWRpc1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dKTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0NvZGUvbWlvLWJsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxDb2RlXFxcXG1pby1ibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxub3RlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Db2RlL21pby1ibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9ub3RlLnRzXCI7aW1wb3J0IHsgYXJyYXlTaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RlID0gYXJyYXlTaWRlYmFyKFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTA0ODlcdTRFMkRcdTA0ODlcdTRFOENcdTA0ODlcdTc1QzVcdTA0ODlcIixcclxuICAgICAgICBpY29uOiBcIlN1cGVyLU1hcmlvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcIm1lL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgIFwia2FsZWlkb3Njb3BlXCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTJBOFx1NzUzQlwiLFxyXG4gICAgICAgIGljb246IFwiYS16dWppYW50aWFuY2hvbmdfaHVhYmFuMWZ1YmVuN1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJhbmltZS9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIjIzMDFcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NkUzOFx1NjIwRlwiLFxyXG4gICAgICAgIGljb246IFwiZ2FtZVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJnYW1lL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgIFwiYW1hdHN1dHN1bWVcIlxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MDFGXHU3MjY5XHU4ODY4XCIsXHJcbiAgICAgICAgaWNvbjogXCJ6aXl1YW5qaWV5b25nXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJvcnJvdy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIixcclxuICAgICAgICAgICAgXCJwcm9ncmFtXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUV4UixJQUFNLFdBQVcsT0FBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLGdCQUFNLE1BQU0sSUFBSSxNQUFNLFdBQVcsYUFBYSxXQUFXO0FBQUEsTUFDakUsRUFBRSxNQUFNLDhDQUFXLE1BQU0sT0FBTyxNQUFNLGVBQWUsYUFBYSxTQUFTO0FBQUEsTUFDM0UsRUFBRSxNQUFNLGdCQUFNLE1BQU0sVUFBVSxNQUFNLG1DQUFtQyxhQUFhLFlBQVk7QUFBQSxNQUNoRyxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxTQUFTLE1BQU0sUUFBUSxhQUFhLFdBQVc7QUFBQSxNQUVuRTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLDRCQUFRLE1BQU0sV0FBVyxNQUFNLGtCQUFpQjtBQUFBLFVBQ3hELEVBQUUsTUFBTSw0QkFBUSxNQUFNLFdBQVcsTUFBTSxPQUFNO0FBQUEsUUFDL0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUixFQUFFLE1BQU0sNEJBQVEsTUFBTSxJQUFJLE1BQU0sUUFBUSxhQUFhLFdBQVc7QUFBQSxNQUNoRTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxhQUFhLFNBQVM7QUFBQSxVQUNsRSxFQUFFLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxnQkFBZ0IsYUFBYSxVQUFVO0FBQUEsVUFDMUUsRUFBRSxNQUFNLFFBQVEsTUFBTSxTQUFTLE1BQU0sVUFBVSxhQUFhLFdBQVc7QUFBQSxRQUN6RTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLFdBQVcsYUFBYSxjQUFjO0FBQUEsTUFFakYsRUFBRSxNQUFNLGdCQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsYUFBYSxjQUFjO0FBQUEsTUFDNUUsRUFBRSxNQUFNLDRCQUFRLE1BQU0sYUFBYSxNQUFNLFFBQVEsYUFBYSxlQUFlO0FBQUEsTUFDN0UsRUFBRSxNQUFNLGdCQUFNLE1BQU0sVUFBVSxNQUFNLFVBQVUsYUFBYSxZQUFZO0FBQUEsSUFDekU7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FDL0M4UixTQUFRLGVBQWM7OztBQ0F4QixTQUFTLG9CQUFvQjtBQUVuVCxJQUFNLE9BQU8sYUFBYTtBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsSUFFSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOzs7QUN2RjRSLFNBQVMsZ0JBQUFBLHFCQUFvQjtBQUVuVCxJQUFNLE9BQU9DLGNBQWE7QUFBQSxFQUM3QjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNS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
