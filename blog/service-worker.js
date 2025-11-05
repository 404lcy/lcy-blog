/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7800b4e699321b5780d19889b60a7699"
  },
  {
    "url": "about/index.html",
    "revision": "0f54f466e473b2b7376e228c321e232f"
  },
  {
    "url": "assets/css/0.styles.e58299d9.css",
    "revision": "cda6dd78e40582430a5a588b0c7bc78c"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/img/zj.cbe61c89.jpg",
    "revision": "cbe61c893cd253475493e80ee5a33f90"
  },
  {
    "url": "assets/js/1.78aeb193.js",
    "revision": "66649503bceefd48addaa14ce9d93b92"
  },
  {
    "url": "assets/js/10.395ebb71.js",
    "revision": "0a62a59d1abba6f85c18b37839fdeb36"
  },
  {
    "url": "assets/js/11.4a9762bd.js",
    "revision": "afad3b4877dc2e6949fea087d9746e61"
  },
  {
    "url": "assets/js/12.5af646ad.js",
    "revision": "125742c4742c85b2e569bffe5ee68310"
  },
  {
    "url": "assets/js/13.247f414e.js",
    "revision": "bb9898fea5b5dd8cc5a5bb9bb44c198f"
  },
  {
    "url": "assets/js/14.2c317c4e.js",
    "revision": "faa6e430951cb8cf2198ef834ad5e4e1"
  },
  {
    "url": "assets/js/15.fff8f0ff.js",
    "revision": "d64d5ee4f282b71f5f059d415691b08d"
  },
  {
    "url": "assets/js/16.35189098.js",
    "revision": "bb3528d458e351252bddc5bd53bb6104"
  },
  {
    "url": "assets/js/17.47c06982.js",
    "revision": "4538546a3f699f062feafc07e7560619"
  },
  {
    "url": "assets/js/18.ffcaf2c5.js",
    "revision": "8dc68b45e45f1b592ed09b6b77a164eb"
  },
  {
    "url": "assets/js/19.34733a89.js",
    "revision": "b9be5908ca366133578bd9f14e5e70ca"
  },
  {
    "url": "assets/js/20.59695df1.js",
    "revision": "80843fc907f9dbe15827a4fdeabcd12b"
  },
  {
    "url": "assets/js/21.525564c7.js",
    "revision": "ada500014c8128a5e6d940cfec0508c3"
  },
  {
    "url": "assets/js/22.dc1418fa.js",
    "revision": "a922f9b94660823752d75ce9c2988119"
  },
  {
    "url": "assets/js/23.65b73ffc.js",
    "revision": "059d35c638731bfe0c3b3b3efbbfbe2d"
  },
  {
    "url": "assets/js/24.b42c560a.js",
    "revision": "ea77e3a525ebf00072121c5071b5cd44"
  },
  {
    "url": "assets/js/25.753eb34a.js",
    "revision": "8af6436bbce23867baa905dde325a486"
  },
  {
    "url": "assets/js/26.7e227c5c.js",
    "revision": "97010333307e61d4c97dd6ad0c3bba37"
  },
  {
    "url": "assets/js/27.fbdfbfd1.js",
    "revision": "9a1e03170c85d9dd56dcfdc458274156"
  },
  {
    "url": "assets/js/28.0ba64a79.js",
    "revision": "adac2516a7b170c9ee1afd7ac263e2b3"
  },
  {
    "url": "assets/js/29.f48bbf14.js",
    "revision": "618c4726f2e7fea1d5ab95e5422e0dbe"
  },
  {
    "url": "assets/js/3.29c63136.js",
    "revision": "fed3d1d326a0eb720efa8e29000c519d"
  },
  {
    "url": "assets/js/30.40a4539b.js",
    "revision": "0250fe2fb74df54b4a69e523e57f0a0f"
  },
  {
    "url": "assets/js/31.d135fc13.js",
    "revision": "190af2c331eb2eff11e707f9f50b42a5"
  },
  {
    "url": "assets/js/32.1b6b2626.js",
    "revision": "ef6e47ba3e918065a00519614b7c95ee"
  },
  {
    "url": "assets/js/33.fe2fc4d6.js",
    "revision": "997b0b1009c15e8ca397df522c4e1b37"
  },
  {
    "url": "assets/js/34.1966e43f.js",
    "revision": "db6f04aa49881cb8566c7b7c31108f57"
  },
  {
    "url": "assets/js/35.95f59c2c.js",
    "revision": "e3487c9bf031404f11a4d275e10ea6d4"
  },
  {
    "url": "assets/js/36.c6c29e54.js",
    "revision": "05b86e83d573b83292a4d8b39f72b64b"
  },
  {
    "url": "assets/js/37.a155ef5f.js",
    "revision": "2b6e9679e1eb573a6576c479a9f48a54"
  },
  {
    "url": "assets/js/38.f3b85c3e.js",
    "revision": "a03fd3435ed16a1ee334524b8763734a"
  },
  {
    "url": "assets/js/39.cb6955a6.js",
    "revision": "b27ea0d2a9ae8fbaedf803e9fc766fb5"
  },
  {
    "url": "assets/js/4.68b2dff6.js",
    "revision": "30dce07f9c00c8f2955cebc6f908c4b6"
  },
  {
    "url": "assets/js/40.0ff991dc.js",
    "revision": "b23f55935f680a5b067e64e7007aad02"
  },
  {
    "url": "assets/js/41.8f94ecdc.js",
    "revision": "a82a5de91ee3dd557aa33e585786a1cd"
  },
  {
    "url": "assets/js/42.42f6902a.js",
    "revision": "6c125a6e60d9f0837b5e93a3138b04fa"
  },
  {
    "url": "assets/js/43.62a58b65.js",
    "revision": "0aeea2a5741ccdf222fa498c88dab980"
  },
  {
    "url": "assets/js/44.bf62db09.js",
    "revision": "df6244aece1f734c2f92f1a95b30cd0c"
  },
  {
    "url": "assets/js/45.cf5478eb.js",
    "revision": "6ac4ebdd7ffa273074987823172ba428"
  },
  {
    "url": "assets/js/46.83552013.js",
    "revision": "2c05f600c8b468104732a10093ca617b"
  },
  {
    "url": "assets/js/47.77047c3d.js",
    "revision": "12123139113de40694d6b9d0b25306fa"
  },
  {
    "url": "assets/js/48.9fc408d4.js",
    "revision": "2fff01a5814982fbf85976f5b6a6ee6f"
  },
  {
    "url": "assets/js/49.a811f288.js",
    "revision": "d69e74aaefef279e96fb677720dc6b91"
  },
  {
    "url": "assets/js/5.a5438138.js",
    "revision": "13e1e99c2a60d42a9ddfb52d15f2fa91"
  },
  {
    "url": "assets/js/6.416ee617.js",
    "revision": "9ce2bd49a76d0bb3d9f04a8b34d87da6"
  },
  {
    "url": "assets/js/7.f66178da.js",
    "revision": "d43deaf75992a72dbed57ab92c490658"
  },
  {
    "url": "assets/js/8.2828cb6c.js",
    "revision": "0f6e119984443fa789a9767624d1c033"
  },
  {
    "url": "assets/js/9.c491a95e.js",
    "revision": "a98bde2aa31bafb1bd2edf060fe53232"
  },
  {
    "url": "assets/js/app.d5421c73.js",
    "revision": "b7b16de7fafb67d3a18011625b3bc669"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "0829d23347180ba9c68e9171db701d57"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "8406728edad5936b34b96a826d0e5892"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "91f5acc1783096396e1131e8c0e601ce"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "cfc413afdcd64ff2bf4c6476fa98cf39"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "7f54c851633cbdcc251486d4a4d4566c"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "c962bb77d0095d79ca10dc340f58005b"
  },
  {
    "url": "categories/index.html",
    "revision": "4d2e40b66b8e509e1920da2ad09f95f9"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "bc22104d3629beda7ff69cc21055c783"
  },
  {
    "url": "icons/首页.jpeg",
    "revision": "f7094f2861b7d872d1d490144f22fb1a"
  },
  {
    "url": "icons/bg_login.jpeg",
    "revision": "111223f9cf71b9a816ce7a1d01dae762"
  },
  {
    "url": "icons/blog_logo.jpeg",
    "revision": "5df25c387f792997a83eaf1f4e2dfa4e"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/gc_one.jpg",
    "revision": "4ee555db775994a0030c26faf21b74b6"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "icons/zj.jpg",
    "revision": "cbe61c893cd253475493e80ee5a33f90"
  },
  {
    "url": "img/省级地图.jpg",
    "revision": "a312e25d4d0e4f35d4ef7924e4c0fe63"
  },
  {
    "url": "index.html",
    "revision": "d7d4e993d70058195db9730396ce87c6"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "dcaf3962f3037fc55150191d1e34e9a7"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "d4579c6544a2b84e73f4cc452059d642"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "f48c15e9c792d9265415dbaa497c990d"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "ffcf11442ee268f81c41aa393245c993"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "e34e33f2e2d9551f6100d0a4c520bd09"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "ca51c033f44702a314ef36fcc4f4e68c"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "59c67aef586cf28f3015d06648358a7f"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "177b41b29d831f93d4ad5033a1f978bc"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "214276435f4aedd427fe17fc559c487e"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "f635376302882f4c30fe439acd3f1e7b"
  },
  {
    "url": "note/index.html",
    "revision": "27a8ed46cdcfe7b642464d583806936f"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "b7a84b0ad3cb61095569e7e35941428e"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "ed607e6484c75bfbc2d54d13e44d4d41"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "f29b787e8fc6edbd9f6936c00b6b5147"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "f1214c3b3d07d42d32b46dc88dde6ade"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "7481da7cc88a120864b345554036d2cc"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "99ac2ee89aab8a251924cb4f13342e2f"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "89bb43d5bfb8a1baa8c16bb58f66a996"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "048ae738104ad6a9c66c0459db5910a6"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "74cb96bb54da99d9d7e5eda51d3e9276"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "815e665c5603873d123e8396278e7132"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "af10eb96380b30dcd03b985d0d5630a6"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "d39325f93da470714f7d71008341a26c"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "7d477324480edbf2d28c65cc6d6386ff"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "55b1fbddafa8d4f4d61dc2cdd7dbf006"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "d67ac63b1aab8a6b419b57fb0fe5d405"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "7fb9fd47c18d6d130c9501a954f955ae"
  },
  {
    "url": "tag/echarts/index.html",
    "revision": "ba24cfce167caea944c5bfd84f415d87"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "e313d537cfeb57e15c1fe356f020b94a"
  },
  {
    "url": "tag/index.html",
    "revision": "57b4e30ed60b670fd974063efd96e5c7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "29eb2ce5752f167f8d9328be382d997b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b36244d200e906d9c0f25cf1bd44bc5e"
  },
  {
    "url": "tag/promise/index.html",
    "revision": "80ed483b8589c1b1731ed426fe4fb497"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "a4c4d868253a8a223f3872e0b76829a6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e8f028dba070f63bea444fc7e7d999de"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "de579e655a8df7efa0485ae11666e247"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "89af09b66b9c3cef9bfda6e1aeffa12f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4c7452ef1daaae859d8677e6b42e1b6"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "e3a67852a9b61598196bbbae984df2a2"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "e50bdaf991674af877bb704752d28c44"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "64a6b0c267df726c8e84bb2c11c26d01"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "cc5b3afdfa7251d8957fde87eadc2b83"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-reco-getting-started.html",
    "revision": "54959966a3a4db60e6b5312ecaa9e89c"
  },
  {
    "url": "views/qian-duan/2023/jiang-chi-zu-jian.html",
    "revision": "a33f497824b7ee5a2144e7c82b7c7b63"
  },
  {
    "url": "views/qian-duan/2023/you-ya-de-chu-li-async/await.html",
    "revision": "36fc39cb4e08089357e20d5ccc640df9"
  },
  {
    "url": "views/qian-duan/2025/di-tu-xia-zuan.html",
    "revision": "61e11b727a2527719f2185c4cc01268f"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "b7259e69f9606c09dfd217d9a2dc16ce"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "698e53b112124a1d467dd7f6bd6c0c03"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "e66c27cb8bed9cd56eb50b1734fda3cd"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "94b69da4c26a75fefc7ad99d4c33fdfd"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "c55efac317de6af1e1b3717b3c3e2d47"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "b0654340d29cfd301762c7d7b2423f1d"
  },
  {
    "url": "views/zhai-ji/jing-dian-yong-liu-chuan.html",
    "revision": "a7b23f5dd5559fba584a392875df7839"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "4d9993e8fec339b52b741300833564b2"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "35f6101ffef556b021dc8f0649d798cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
