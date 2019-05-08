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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4c9ffc60dac04a822fba32c6ec567b0a"
  },
  {
    "url": "algorithm/4.14.png",
    "revision": "cf1dc1de181367a387ae85e21ba63bcb"
  },
  {
    "url": "algorithm/4.16.png",
    "revision": "b9570248ada2f2d08b4f7254dfc137ea"
  },
  {
    "url": "algorithm/4.18.png",
    "revision": "fe68fab74cb718d49725256a425aca8c"
  },
  {
    "url": "algorithm/4.7.png",
    "revision": "2ba4f71ac2ef37005d276c71b3b616dd"
  },
  {
    "url": "algorithm/4.8.png",
    "revision": "13b814c15b528867960c284b669076b3"
  },
  {
    "url": "algorithm/5.10.png",
    "revision": "c1b3fb127a670627bf4d7f71560adf47"
  },
  {
    "url": "algorithm/5.16.png",
    "revision": "1282750fa9e0bffc2c03b6f8462f0f72"
  },
  {
    "url": "algorithm/5.17.png",
    "revision": "6e8f75da2534dc3cd90fd9ce6c200484"
  },
  {
    "url": "algorithm/5.18.png",
    "revision": "219b65ef7fc12b8adaec7c67d36605c1"
  },
  {
    "url": "algorithm/5.7.png",
    "revision": "da5e156808eb65e6b25905ec045a8b1c"
  },
  {
    "url": "algorithm/6.1.png",
    "revision": "c9834a228d3f59eea885563f567a94d2"
  },
  {
    "url": "algorithm/6.13.png",
    "revision": "00134122ba8ccd4caf4d50c4ef41a72e"
  },
  {
    "url": "assets/css/1.styles.9a4bd71a.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/2.styles.fab7f89c.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/3.styles.0292a01e.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.5640a71e.css",
    "revision": "037dec67693cb0395dd52d8d442f1bd0"
  },
  {
    "url": "assets/css/5.styles.c0ce815d.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.fcb95dc6.css",
    "revision": "62280420bbdd467e493c92867f232850"
  },
  {
    "url": "assets/css/7.styles.c8b06cc2.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.14c5c194.css",
    "revision": "e6a946406ec57ab9a0490d399f8220df"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.9a4bd71a.js",
    "revision": "2741a948cf9ef2214998727e3fd0e5a5"
  },
  {
    "url": "assets/js/10.e058a7e5.js",
    "revision": "59234f4f1ae5f03bbbb70dac49fc2e82"
  },
  {
    "url": "assets/js/11.5393a9a6.js",
    "revision": "bce91a3a73eb0d99ebfd200cf6b2c51e"
  },
  {
    "url": "assets/js/12.85b9f659.js",
    "revision": "cbdef388f88ca4a6d627466efe3677fe"
  },
  {
    "url": "assets/js/13.fab64d1d.js",
    "revision": "ab9237396aed21127e8309e638d32439"
  },
  {
    "url": "assets/js/14.f73d840e.js",
    "revision": "e41e64bb96f057d8c9393cb4b8c39d93"
  },
  {
    "url": "assets/js/15.d28057ad.js",
    "revision": "968f6236bd454c6ad05dc25f90b3ff3f"
  },
  {
    "url": "assets/js/16.eae80edc.js",
    "revision": "38448b5e74ca54b2911b5fb88463fb6e"
  },
  {
    "url": "assets/js/17.94bdb325.js",
    "revision": "944832c8f8daa7e5d83ec9a05a7daf4d"
  },
  {
    "url": "assets/js/18.18f2e4d3.js",
    "revision": "1be65564ada26a06d682fe18091ad803"
  },
  {
    "url": "assets/js/19.73b3cad5.js",
    "revision": "bfaf760851cae72de94637e4d8fc5c00"
  },
  {
    "url": "assets/js/2.fab7f89c.js",
    "revision": "af875cf98fc34303a16c5fc63dc3657e"
  },
  {
    "url": "assets/js/20.41cbc980.js",
    "revision": "9dca597506986f495308e7b54cb87492"
  },
  {
    "url": "assets/js/21.ac0b4f36.js",
    "revision": "09df9f2539ebfbcdf536faf8439bfdad"
  },
  {
    "url": "assets/js/22.27544958.js",
    "revision": "11ffd2424b6162da4bb26e53d150f18e"
  },
  {
    "url": "assets/js/23.381f8e14.js",
    "revision": "ef55f214b920dc32a61faab7e82e2d31"
  },
  {
    "url": "assets/js/24.6688820c.js",
    "revision": "1f5154d163d675d2d6750a0f3305b7d4"
  },
  {
    "url": "assets/js/25.0f3cd4e0.js",
    "revision": "f10be38a9309b888fdfcf5aefc5d53de"
  },
  {
    "url": "assets/js/26.1587fd22.js",
    "revision": "7e90f209bfe462e2714bb22295396943"
  },
  {
    "url": "assets/js/27.8c8bf67b.js",
    "revision": "1de31f43498f3cba969d528fff1587e2"
  },
  {
    "url": "assets/js/28.8398db86.js",
    "revision": "f070e9d67a5c418a9d49aeba7ceeaa1e"
  },
  {
    "url": "assets/js/29.13ee89db.js",
    "revision": "90953f325860ad2bc1f755c96016923a"
  },
  {
    "url": "assets/js/3.0292a01e.js",
    "revision": "85c8ddb7c35cccb51809d7bafb67a4e1"
  },
  {
    "url": "assets/js/30.0ef8d19e.js",
    "revision": "51225638daeb4147aae8a0b2fabf72db"
  },
  {
    "url": "assets/js/31.6f5025b5.js",
    "revision": "39d83dd462e61d8b1b6c8e08718d81e5"
  },
  {
    "url": "assets/js/32.ad388b67.js",
    "revision": "1c44c390c40c8acd374ce34c97087de7"
  },
  {
    "url": "assets/js/33.c5f3ce23.js",
    "revision": "b4bec18310fb5f0a94c0871eb235f871"
  },
  {
    "url": "assets/js/34.65b99507.js",
    "revision": "07d4b0b0ce78662e63e50e6ceab92414"
  },
  {
    "url": "assets/js/35.7012f26e.js",
    "revision": "14497beb48bc809e0b75b4454cc718fe"
  },
  {
    "url": "assets/js/36.e577c804.js",
    "revision": "49001a7ebb4ca5e4aac1bf37cd8080a7"
  },
  {
    "url": "assets/js/37.65cfbec8.js",
    "revision": "92fc188d8a30189f40a2646b16b7ba51"
  },
  {
    "url": "assets/js/38.50303de0.js",
    "revision": "2a120f51617f158a98f3a10e40f72503"
  },
  {
    "url": "assets/js/39.358f53b2.js",
    "revision": "b0cd24ce83677eebe8ef76cbf3badd40"
  },
  {
    "url": "assets/js/4.5640a71e.js",
    "revision": "fed7531c4a3b44757a31425339961003"
  },
  {
    "url": "assets/js/40.45472df0.js",
    "revision": "af640235fb0fb7559f310de7ea41abaa"
  },
  {
    "url": "assets/js/41.54278bf9.js",
    "revision": "ce7bc7196389d5d5f482acd84a1c67c1"
  },
  {
    "url": "assets/js/42.b2e466da.js",
    "revision": "e863a11d452553454af85cbc0a0ea6ab"
  },
  {
    "url": "assets/js/43.ee7cab7b.js",
    "revision": "d5fb06ac89c62a2d9406a1867d224a7d"
  },
  {
    "url": "assets/js/44.0e9444d0.js",
    "revision": "031dd46dcea18a67a0be3c153bd12d05"
  },
  {
    "url": "assets/js/45.1415b803.js",
    "revision": "b88de82322d80ce040e946e6705a29cd"
  },
  {
    "url": "assets/js/46.bdc84e10.js",
    "revision": "bf2d25f4b1e472ebefc4448e27192647"
  },
  {
    "url": "assets/js/47.008bfdb4.js",
    "revision": "d6bf27c62b9756fed7d99a89d0f3c750"
  },
  {
    "url": "assets/js/48.97e7870d.js",
    "revision": "7574e747f75a470915b3ada353e07130"
  },
  {
    "url": "assets/js/49.d61ca456.js",
    "revision": "1c82c11f16c8a60df7364a88dd2c8b81"
  },
  {
    "url": "assets/js/5.c0ce815d.js",
    "revision": "4758731890c9a82afeae35567cc6e670"
  },
  {
    "url": "assets/js/50.664d32ab.js",
    "revision": "993eff02607c30853c38f53aec9f2b73"
  },
  {
    "url": "assets/js/51.386a7ad5.js",
    "revision": "ee39fc6f76cedc1360f1c533222a44f1"
  },
  {
    "url": "assets/js/52.a6621eec.js",
    "revision": "ccd24f31cc79aeeff4c8cefda759d5b8"
  },
  {
    "url": "assets/js/53.0268e383.js",
    "revision": "bbb33599378a1cd413db84786f72e6b3"
  },
  {
    "url": "assets/js/54.ccccaca0.js",
    "revision": "abea3f42038ab728420adde752d6fdd1"
  },
  {
    "url": "assets/js/55.5b9d26be.js",
    "revision": "be473c92990e8f3aa0857b829a0136dd"
  },
  {
    "url": "assets/js/56.64fafe6a.js",
    "revision": "ed04af23d49037493d8e84ffe8560b67"
  },
  {
    "url": "assets/js/57.41d34f31.js",
    "revision": "4246970789dddef83f22c5e2b8401937"
  },
  {
    "url": "assets/js/58.f9f5d87b.js",
    "revision": "e0b0b3496e1526f7a1faabded2c76e3e"
  },
  {
    "url": "assets/js/59.d084f0d6.js",
    "revision": "a64d0063b1f782d69cea54517de82468"
  },
  {
    "url": "assets/js/6.fcb95dc6.js",
    "revision": "151b995255cfd935266869772e815292"
  },
  {
    "url": "assets/js/60.1942bb51.js",
    "revision": "412155099d42a96e4c95d213c467b268"
  },
  {
    "url": "assets/js/61.da788876.js",
    "revision": "8ee09434e04b2444091425cb5fbd075b"
  },
  {
    "url": "assets/js/62.fd979fb1.js",
    "revision": "5707891700406cdc870a970e54820826"
  },
  {
    "url": "assets/js/63.ff52fef0.js",
    "revision": "53f930337b0f378df70fc524386d9629"
  },
  {
    "url": "assets/js/64.2ce7207b.js",
    "revision": "89e50265389b65b751b42a7630d89b4d"
  },
  {
    "url": "assets/js/65.11fb12f7.js",
    "revision": "ddacfad3bff995259efd24cfe2c0ad30"
  },
  {
    "url": "assets/js/66.6a6f1978.js",
    "revision": "a3b4804ac01bb5395d96f02c0d96d523"
  },
  {
    "url": "assets/js/67.634b65a1.js",
    "revision": "574ababf3feef3fa4613acbf5ffbf4a2"
  },
  {
    "url": "assets/js/68.76b6162d.js",
    "revision": "651a0f353557696a111608841ff649cd"
  },
  {
    "url": "assets/js/69.9b398548.js",
    "revision": "5869db8bdbb08afc4eb7cbc1545133a4"
  },
  {
    "url": "assets/js/7.c8b06cc2.js",
    "revision": "09982e6d64ed39c46253a91a1d35e1aa"
  },
  {
    "url": "assets/js/8.58800656.js",
    "revision": "4b38f81593f9c6fb71c106aeca4ef85b"
  },
  {
    "url": "assets/js/9.a069f996.js",
    "revision": "33038ececf6ac6d4e533e35771260e9a"
  },
  {
    "url": "assets/js/app.14c5c194.js",
    "revision": "e9a03abfb87b10bb15bef15b27549bd3"
  },
  {
    "url": "avatar.png",
    "revision": "80d3862e108d0523448cf969314c7402"
  },
  {
    "url": "baidu.png",
    "revision": "e989d76137aa87abd8d4acfa195b499c"
  },
  {
    "url": "config/index.html",
    "revision": "3f6ddd239f9f1a4fe8c270dd4887f22b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "e5656bebc1f0aaff548afd54ebb952a9"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "52294c5522e592287b82ac6a39271e1c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cc7bb4942128ebd875a0769013db1365"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "9dab2e7dc6a972ccac834760817f71bc"
  },
  {
    "url": "guide/deploy.html",
    "revision": "738bb61b8cd5892b754f08b765015180"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "78e4d9bb5a7cb9d0b2b605823405b515"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c77623da5bc3240fc28cbcc2613c8954"
  },
  {
    "url": "guide/index.html",
    "revision": "deed73c859b068976796e538de90ae74"
  },
  {
    "url": "guide/markdown.html",
    "revision": "6d81b240d32d469fb88b89e4d3b30832"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "5729352bde1b4f4c1a535c864563a4e0"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "img/improve.png",
    "revision": "4e9abff75630811f884a22e0e6094d21"
  },
  {
    "url": "img/logo.png",
    "revision": "80d3862e108d0523448cf969314c7402"
  },
  {
    "url": "index.html",
    "revision": "a2393e87537f6f7bbfc1af161ac98a76"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "80d3862e108d0523448cf969314c7402"
  },
  {
    "url": "project.jpg",
    "revision": "9837b50e98c7c106a49bc62d593e91e6"
  },
  {
    "url": "zh/config/index.html",
    "revision": "4bd6a2a69e19ce8b5b2b2d00d75d2b52"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "0237fcbfdac35ba04a0b47df56cebc03"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "7efdf11cb065c124ad35cd2e293c6839"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6506b0cf61d75b6c4e897158552fcc6f"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "67b8b08d08ed1d582fbac82821949992"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "84b606a65fe07cfd714b0a6bdcc14a49"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "d78cccbd71925340fc5a16257a0ff1d9"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f0394d34bf7ef7c7f0de49dd2f3497fd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5f0ce3a7a158ddf8828db146d605a863"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "e7b246e4780b3d78698e18522e1fce54"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bc11221fc02e9a660a1cbcafe4f90714"
  },
  {
    "url": "zh/index.html",
    "revision": "b21f24ba813e9bbec1618aa1122ac893"
  },
  {
    "url": "zh/interface/Mind.html",
    "revision": "5bfa117fd74193a6fc2621595f9eddff"
  },
  {
    "url": "zh/interview/Algorithm.html",
    "revision": "9f94930fdac2b4c67c724274d76c294d"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "df90b766aea66fed942d6b6406041b34"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "30b95d1d4902cb86900f166a8818b4f9"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "6fc6b8777ace8baa113a5f1661f27f8d"
  },
  {
    "url": "zh/interview/question.html",
    "revision": "d0fbef0ceca67dcb322237854d52e220"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "f3c861ff6d662b17bcf1677033c2fd12"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "028c959d663aa2d3336a72f9c29450f0"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "bc972834b369a9ebd17ec21c8ab57906"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "d32bd42cdd94a576bf98af95b7398082"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "507c18960a9ca7c6fc1ff8e0afcaadcf"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "dc46f483d18c3f8ef963c908831f96e8"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "d13851abfa413582b766f8a66c1eb890"
  },
  {
    "url": "zh/react/Diff算法.html",
    "revision": "d9c38d1dfef7f830332a05bc3ae8dad7"
  },
  {
    "url": "zh/react/index.html",
    "revision": "9b4e1728a64d30163fe8efe00edd1929"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "9ad2ea095230524abf9f903f6017c2b4"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "b60e454a8eaead143e1ba9f4211dd6ec"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "93bf19cf1781646440548c18e6c55da5"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "fba1b2470479780e985b5b339627ea6d"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "fb02edcd9fe0527a69376a972849b844"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "27dcf3b31ceb0b679fb8ecb2e98cd614"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "421b7d6461f8b14ca792f792c4736b68"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "04d816a8cb859fbb1e218a99764247c7"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "3d8b581a1940e88cac7acfe6bcc2a3a1"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "25cee285393f69ff23774822279d16e0"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "f9086a6113d882cc89e9dafce4b4a633"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "f4e5455adae2428197861e0941ca0544"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "1d9001a8ccd817bf8508f7713ccb577f"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "7836619b4228b350c5e293d85ae3e7b0"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "342366bdb08b18004e02d87e858ba755"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "494bdaf15fd1420f5aa44ebc7aca805c"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "f743232c495628f510048931481d68bb"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "19d6c3d02dd9b0322b6cca28d906c5d1"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "e82a9c0acadff5d8637c8a4d0a8ca401"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "56fe0f936ee04c102cc9456dd49f4f3b"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "6a4e7a1e2ecb851750a9c81f74fd967f"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "0c189951de8582cbfb3e3ec3fe8f9d7b"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "387612fd358d85e6160c5ec760496d20"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "2ea06ba7f7069bbf5a4b0605941b6c06"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "5984d237307ed22fc01059e0fc5e5125"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "a5c8e492365a7c2c3929ccc5a11e9225"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "f8fd39513de8bc0baa5ab30be9ea0546"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
