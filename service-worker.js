if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),f={module:{uri:c},exports:s,require:n};i[c]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/02/27/广义函数/index.html",revision:"7da29cde3857dc05df1924b82b4a1ff7"},{url:"2022/02/28/拟微分算子/index.html",revision:"5f8390ce8a945971350fe9019ac6b5c4"},{url:"2022/03/03/数据可视化/index.html",revision:"0d2f436edaaf1ecdf4e76ff29a5725a9"},{url:"2022/03/04/为markdown和博客添加折叠/index.html",revision:"5548633ddd7acc507c506628736a649f"},{url:"2022/03/04/傅里叶变换/index.html",revision:"c2f70e4432ae11c89b8eb1d6dab7494e"},{url:"2022/03/05/Star-Shaped/index.html",revision:"51bd8f6572c3205f565884428951a589"},{url:"2022/03/09/Hardy-不等式/index.html",revision:"f2f4b097a344811c3664e1cf9f48ce91"},{url:"2022/03/19/用requests和selenium下载漫画/index.html",revision:"0c88331a13df28547536fc7e37d68ed0"},{url:"2022/03/21/phragmén–lindelöf principle/index.html",revision:"3c7e07ea95f4941092a8390168a42068"},{url:"2022/04/01/带时间t的索伯列夫空间/index.html",revision:"7815f3b1c3ce4a5824f581677575e711"},{url:"404.html",revision:"3387683dc458463a94dfed242c4cfac6"},{url:"about/me.html",revision:"04f18cd607a9d156c63938bfb5be3d26"},{url:"archives/2022/02/index.html",revision:"9f8d16f7770036f7ef55160c76e25c2c"},{url:"archives/2022/03/index.html",revision:"41dcb42f4434b4ef9a6d449b27d13f6d"},{url:"archives/2022/04/index.html",revision:"8431783676339b8cf77ca4f4a9213613"},{url:"archives/2022/index.html",revision:"17295f2c4aad924da94ab7648c4791e6"},{url:"archives/index.html",revision:"3b82fdb36f9be6ef0c572ece1772556d"},{url:"categories/index.html",revision:"9225608aad83e15fb82bd52dd782ae4e"},{url:"categories/markdown/index.html",revision:"c3775b915ac8d71aa04fc75ed960ea92"},{url:"categories/math-note/Hardy-不等式/index.html",revision:"2c794656c41cafb1001afda30943a21f"},{url:"categories/math-note/index.html",revision:"ea0ef94ded8acc1023a3c7f865022c8f"},{url:"categories/math-note/phragmen–lindelof-principle/index.html",revision:"5f5d89bfcd70612546278a1cef29c424"},{url:"categories/math-note/Sobolev-Space/index.html",revision:"f966d928b1764eecccebc736c6b1e31a"},{url:"categories/math-note/Sobolev-Space/Space-involving-time/index.html",revision:"e2324927d0a0e27c9d4cab7494257c4c"},{url:"categories/math-note/傅里叶变换/index.html",revision:"1be8450e8b3e711aef6eb7688ad62344"},{url:"categories/math-note/广义函数/index.html",revision:"bca53b62c419d4399f77c1d779384f43"},{url:"categories/math-note/拟微分算子/index.html",revision:"16b1df1ea8a86d1f82afd0c4d5b627c8"},{url:"categories/python/index.html",revision:"70e965c5ce45abf6b580b8f4930d3b68"},{url:"categories/python/selenium/index.html",revision:"097bce99de84e7abf66d06b192abca56"},{url:"categories/数据分析/index.html",revision:"a7067cfad37ddb50624ea407f7524bb5"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3b70533d3f2a7efb31810023b58a3355"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"bbc16cc0483e8e5088cc6efdb02f3735"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"6550683a45ee9e640c85c5352feab184"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"img/El-Bulli-Bullipedia-Recipes-Video.0.webp",revision:"117b0ffbb3e50ebe393824a18d928789"},{url:"img/top_img_amiya.jpg",revision:"11f52079eba0214f2050e708e91cc87c"},{url:"img/wx_code.png",revision:"a414136fae31799f47c43973f06a5f82"},{url:"img/zfb_code.png",revision:"620867de873d49b3f5dccb0010b3691d"},{url:"img/数学公式1.png",revision:"8f083c19079b5e8efd853916260bca53"},{url:"index.html",revision:"925556730e98a4ef1eee5a518dc55efb"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"35933ce61c158ef9c33b5e089fe757ac"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"603fa932f3ec986228c2136a51a14f94"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"1565b508bd866ed6fbd724a3858af5d8"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"9b4bbe6deb700e1c3606eab732f5eea5"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"slides/index.html",revision:"f13b2f19d3a3cbccb9561526dc3c9340"},{url:"tags/Complex-Analysis/index.html",revision:"8359e7fa3ecf8d86db85e557ed43b960"},{url:"tags/Hardy-不等式/index.html",revision:"2d21adcd47fbc3aa419fef0e3238a5aa"},{url:"tags/Hardy-算子/index.html",revision:"55c393f158e9e4e1cca1a4a2e3c4280a"},{url:"tags/index-1.html",revision:"52bbac812715fb40d6bd7b5a8fe17b04"},{url:"tags/index.html",revision:"d96e793ca7a47b26a749529b8fe5a9c5"},{url:"tags/markdown/index.html",revision:"09d6a28fcd727849057ed777a7d81f45"},{url:"tags/math/index.html",revision:"af1f0798e6c026416129224587817bbc"},{url:"tags/phragmen–lindelof-principle/index.html",revision:"7ef2d2e493c660b06071f99c23b0d03f"},{url:"tags/python/index.html",revision:"235ace8fc9e0b97ad5f96b5f0d501e4b"},{url:"tags/selenium/index.html",revision:"eaf8160e2045a6b69a3d5124dd272edf"},{url:"tags/Sobolev-Space/index.html",revision:"ce63aa91684f2056da4791531d32e722"},{url:"tags/Space-involving-time/index.html",revision:"0ed2e90e22e51c19ae25081208c153d4"},{url:"tags/star-shaped/index.html",revision:"d438ab0b11a3bd1cf2e28ca99e6d36f0"},{url:"tags/傅里叶变换/index.html",revision:"9b2caf5a0b890d99e4fa17a4a2a678e4"},{url:"tags/广义函数/index.html",revision:"a95e9a9ccd20ea8774f03c9dc6b32b84"},{url:"tags/拟微分算子/index.html",revision:"2a9ed5882b4b237979b64614718354f4"},{url:"tags/数据分析/index.html",revision:"dee4eb7ecfee2f72a5a9104db8bb7222"},{url:"tags/数据可视化/index.html",revision:"ef3ef46d1636895d8dfc05429a15b8f8"}],{})}));
//# sourceMappingURL=service-worker.js.map
