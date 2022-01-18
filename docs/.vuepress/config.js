module.exports = {
  title: "Zero-Qi",
  description: "这是一个致力于快速高效开发的组件库",
  base: "/",
  plugins: [ 'vuepress-plugin-loading-page' ],
  head: [
    ["link", { rel: "icon", href: "/img/luobo.png" }],
    ["script", { charset: "utf-8", src: "/js/main.js" }],
    ["link", { rel: "stylesheet", href: "/css/index.css" }],
  ],
  
  themeConfig: {
    nav: [
      { text: "文章", link: "https://www.sohu.com" },
      { text: "日记", link: "https://www.baidu.com" },
      { text: "照片", link: "https://www.baidu1.com" },
      { text: "关于我", link: "https://www.baidu11.com" },
      { text: "开源项目", link: "https://www.baidu111.com" },
      { text: "了解更多", link: "https://www.baidu1111.com" },
      {
        text: "外链",
        items: [
          {
            text: "vue",
            items: [
              { text: "vite", link: "/guide/" },
              { text: "vue-cli", link: "www.baidu.com" },
            ],
          },
        ],
      },
    ],

    // sidebar: {
    //   "/guide": [
    //     {
    //       title: "我是guide",
    //       collapsable: false,
    //       children: [
    //         { title: "one", path: "/guide/on" },
    //         { title: "two", path: "/guide/two" },
    //       ],
    //     },
    //   ],
    // },
  },
};
