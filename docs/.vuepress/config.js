module.exports = {
  title: "刘从元的个人博客",
  description: "道固远，笃行可至；事虽巨，坚为必成。",
  // base: "/blog/",
  dest: "blog",
  theme: "reco",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "description", content: "#fff" }],
    ["meta", { name: "theme-color", content: "#FF66CC" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/LatteAndCat.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/icons/LatteAndCat.svg", color: "#FF66CC" },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/LatteAndCat.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  themeConfig: {
    type: "blog",
    huawei: false,
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "笔记", link: "/note/", icon: "reco-document" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      // { text: 'PhotoAlbum', link: 'https://photo.smallsunnyfox.com/', icon: 'reco-blog' },
      // {
      //   text: "博客",
      //   icon: "reco-blog",
      //   items: [
      //     {
      //       text: "csdn",
      //       link: "https://blog.csdn.net/weixin_46862327?type=blog",
      //       icon: "reco-blog",
      //     },
      //     // { text: "B站", link: "https://b23.tv/kp5IOC3", icon: "reco-bilibili" },
      //     {
      //       text: "掘金",
      //       link: "https://juejin.cn/user/2432583311038168",
      //       icon: "reco-blog",
      //     },
      //   ],
      // } /**/,
      { text: "关于", link: "/about/", icon: "reco-account" },
      // { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "L1nSn0w’s Blog",
        desc: "一名热爱计算机与iOS的高中生",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/lin_snow.png",
        link: "https://l1nsn0w.gitee.io",
      },
      {
        title: "ImCao",
        desc: "NUAA大佬",
        logo: "https://www.imcao.cn/avatar.png",
        link: "https://www.imcao.cn/",
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    logo: "https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: "auto",
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: {
      "/note/": [
        // {
        //   title: 'HTML5',
        //   collapsable: true,
        //   children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
        // },
        // {
        //   title: 'CSS',
        //   collapsable: true,
        //   children: ['css/css3新特性', 'css/css3Flip']
        // },
        // {
        //   title: 'JS',
        //   collapsable: true,
        //   children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
        // },
        // {
        //   title: 'Vue.js',
        //   collapsable: true,
        //   children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
        // },
        // {
        //   title: '前端单元测试',
        //   collapsable: true,
        //   children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
        // },
        // {
        //   title: '微信小程序',
        //   collapsable: true,
        //   children: ['wechat-mini-program/初识微信小程序']
        // }
      ],
    },
    // 最后更新时间
    lastUpdated: "刘从元的个人博客",
    // 作者
    author: "刘从元",
    authorAvatar: "https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png",
    // 备案号
    record: "浙ICP备xxxxx号-6",
    recordLink: "https://beian.miit.gov.cn/",
    cyberSecurityRecord: "浙公网安备41172602000151号",
    cyberSecurityLink:
      "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=0",
    // 项目开始时间
    startYear: "2020",
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: "rRz4WQqaNmWSnkd75348lzMq-gzGzoHsz", // your appId
      appKey: "fPBJVQ0z5goaw7KpTEncJAyn", // your appKey
      placeholder: "是时候展现真正的技术了",
      avatar: "wavatar",
      serverUrl: "https://leanserver.smallsunnyfox.com",
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    "@vuepress-reco/vuepress-plugin-loading-page",

    "@vuepress/nprogress",
    //阅读进度条
    "reading-progress",

    [
      "copyright",
      {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
      },
    ],
    //动态标题

    //     "dynamic-title",{
    //   showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
    //   showText: "欢迎回来 O(∩_∩)O~",
    //   hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
    //   hideText: "失联中。。。快回来~",
    //   recoverTime: 2000
    // },
    [
      "dynamic-title",
      {
        showIcon: "https://github.com/404lcy/react-dome/blob/main/LatteAndCat.png?raw=true",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "https://github.com/404lcy/react-dome/blob/main/LatteAndCat.png?raw=true",
        hideText: "(●—●)哦吼,不要走,快回来！",
        recoverTime: 2000,
      },
    ],

    [
      require("./plugins/KanBanNiang"),
      {
        theme: ["haruto"],
        width: 200,
        height: 400,
        modelStyle: {
          position: "fixed",
          left: "70px",
          bottom: "50px",
          opacity: "0.9",
        },
        messageStyle: {
          position: "fixed",
          right: "70px",
          bottom: "380px",
        },
        btnStyle: {
          bottom: "60px",
          right: "80px",
        },
      },
    ],
    [
      require("./plugins/BgMusic"),
      {
        audios: [
          {
            name: "Angel In Disguise",
            artist: "Jack Botts",
            url: "https://music.163.com/song/media/outer/url?id=2001431057.mp3",
            cover: "https://p1.music.126.net/ywlzX0_fGP1X9aQHnaj0dg==/109951168088379379.jpg?param=130y130",
          },
          {
            name: "HELICOPTER",
            artist: "CLC",
            url: "https://music.163.com/song/media/outer/url?id=1475847808.mp3",
            cover: "https://p1.music.126.net/UUCq_myuZDTeG04qgvYG8g==/109951165289232778.jpg?param=130y130",
          },
          {
            name: "这世界那么多人（小提琴）",
            artist: "蛐蛐锯木头",
            url: "https://music.163.com/song/media/outer/url?id=1929905802.mp3",
            cover: "https://p2.music.126.net/zS2QPWF5VVOlF9wuTpzfhA==/109951167173357407.jpg?param=130y130",
          },
          {
            name: "我记得",
            artist: "赵雷",
            url: "https://music.163.com/song/media/outer/url?id=1974443814.mp3",
            cover: "https://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg?param=130y130",
          },
        ],
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],

    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ],
  ],
};
