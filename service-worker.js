if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),b={module:{uri:c},exports:s,require:n};i[c]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/02/27/广义函数/index.html",revision:"527f0bfb0f29d2f88717195159a5d170"},{url:"2022/02/28/拟微分算子/index.html",revision:"df08be2098bdac4415c9b7e528f76e8a"},{url:"2022/03/03/数据可视化/index.html",revision:"5c11a44c89aab2b4f7fa6ebbe6e2b9cd"},{url:"2022/03/04/为markdown和博客添加折叠/index.html",revision:"b59226e7775a1e9255373393f26a258a"},{url:"2022/03/04/傅里叶变换/index.html",revision:"088e7737b928bbdffad1acb6dbfaa234"},{url:"2022/03/05/Star-Shaped/index.html",revision:"4c74ba8ef279764b38bd4945bcb14c1e"},{url:"2022/03/09/Hardy-不等式/index.html",revision:"b60c655b57d72fb435f5f263ffd62ddd"},{url:"2022/03/19/用requests和selenium下载漫画/index.html",revision:"1db6ac024f4e06e9db4a21135890baba"},{url:"2022/03/21/phragmén–lindelöf principle/index.html",revision:"c4f9ef9e931de7b06def8dd258899e69"},{url:"2022/04/01/带时间t的索伯列夫空间/index.html",revision:"049535d80c5252a3ce3b6370339d4eaa"},{url:"2022/04/03/Banach-值函数/index.html",revision:"312c612de7099d2853fb2efd86fb12db"},{url:"2022/04/03/Banach空间上的泰勒展开/index.html",revision:"d8f5bb39b7fbdcf02cc15012d5f18cd8"},{url:"404.html",revision:"3387683dc458463a94dfed242c4cfac6"},{url:"about/me.html",revision:"37e4dde535c92b5b153bee9c6c3fefc2"},{url:"archives/2022/02/index.html",revision:"e5574a64bd3d95e46854eb0ed9f2eb18"},{url:"archives/2022/03/index.html",revision:"c7bbdac13c0021938bd1e95df735a0a8"},{url:"archives/2022/04/index.html",revision:"4439e46213982fce5c83a5c9f6d92e0c"},{url:"archives/2022/index.html",revision:"d4c176dcc9c2eb948568fad6d8c0d085"},{url:"archives/2022/page/2/index.html",revision:"0a9c63a1b94c1d0b6199d305b2a2d3ad"},{url:"archives/index.html",revision:"2300b78278757cf0d94be61b6ceb72a0"},{url:"archives/page/2/index.html",revision:"1a27ba85f4aea9dac880e5bbc86e0c8e"},{url:"categories/index.html",revision:"16fde7eae6461be985bc6133b7d2485b"},{url:"categories/markdown/index.html",revision:"3d2db989fda49091aacab1d4f470911a"},{url:"categories/math-note/Hardy-不等式/index.html",revision:"b2b3f6786e2a965f71b3fcf9d45b15bb"},{url:"categories/math-note/index.html",revision:"d80ce2f7f0a6be2e102fcfdb0b039f1e"},{url:"categories/math-note/phragmen–lindelof-principle/index.html",revision:"aa3aff957d8e83950f7fa956b8bd440e"},{url:"categories/math-note/Sobolev-Space/Banach-value-map/index.html",revision:"840a788c6bb67002e596ca18cdf6d08b"},{url:"categories/math-note/Sobolev-Space/index.html",revision:"b30dd19e3ad0e2ffd21e9f0cf5c5e0ae"},{url:"categories/math-note/Sobolev-Space/Space-involving-time/index.html",revision:"6e5e0217d59da48c1b64360b8a1d660e"},{url:"categories/math-note/傅里叶变换/index.html",revision:"9d0d3d4d030b1fe7a0c12f6440cfffb2"},{url:"categories/math-note/广义函数/index.html",revision:"451d73aea1287334a8e1bdfee5b1f13c"},{url:"categories/math-note/拟微分算子/index.html",revision:"3a44077e93871eec254af51223b2df20"},{url:"categories/math-note/泰勒展开/index.html",revision:"5f6bc4c37ed743e9116b641375562649"},{url:"categories/python/index.html",revision:"5b2fb0e01c4696a6aacbd6f9f4555991"},{url:"categories/python/selenium/index.html",revision:"e1c5588d08bb45b192a55c7094240f9f"},{url:"categories/数据分析/index.html",revision:"a2857b0989cf24b2f5153ce403c09425"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3b70533d3f2a7efb31810023b58a3355"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"32aef7cec3630014def2e806f4a1a351"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"6550683a45ee9e640c85c5352feab184"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"img/El-Bulli-Bullipedia-Recipes-Video.0.webp",revision:"117b0ffbb3e50ebe393824a18d928789"},{url:"img/top_img_amiya.jpg",revision:"11f52079eba0214f2050e708e91cc87c"},{url:"img/wx_code.png",revision:"a414136fae31799f47c43973f06a5f82"},{url:"img/zfb_code.png",revision:"620867de873d49b3f5dccb0010b3691d"},{url:"img/数学公式1.png",revision:"8f083c19079b5e8efd853916260bca53"},{url:"index.html",revision:"5d9799b602b1449f2d613e20b4ca9cc2"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"35933ce61c158ef9c33b5e089fe757ac"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"603fa932f3ec986228c2136a51a14f94"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"1565b508bd866ed6fbd724a3858af5d8"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"9b4bbe6deb700e1c3606eab732f5eea5"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"page/2/index.html",revision:"095c5b2ccfdc777c7472c865031b18f3"},{url:"slides/index.html",revision:"c3cf3c1d990d412294e0ceebacb5e25c"},{url:"tags/Banach-value-map/index.html",revision:"39c11dbef30253dc76214022838b8c56"},{url:"tags/Complex-Analysis/index.html",revision:"170daeba9afef9fc7a7ce65b030ca407"},{url:"tags/Hardy-不等式/index.html",revision:"dddeb27ce3841f2cba743a1dad8cced5"},{url:"tags/Hardy-算子/index.html",revision:"bbd82f3d214952b52cc0156b51f6bd0b"},{url:"tags/index-1.html",revision:"b3722a04873974f3212f8fe738142f90"},{url:"tags/index.html",revision:"1a947baf024e8b1cc9b19198578da1c0"},{url:"tags/markdown/index.html",revision:"779519e9f256b8e17cb00b0ff1f470e5"},{url:"tags/math/index.html",revision:"1638b68685bb51279fa937f4cce5beb7"},{url:"tags/phragmen–lindelof-principle/index.html",revision:"4aa0e8ec3bbd6a187577c3ff7eb0eba5"},{url:"tags/python/index.html",revision:"a3ed141fd1d729b1f56fa7d279f24619"},{url:"tags/selenium/index.html",revision:"98d321e4c361a671e9ce94f3930670c6"},{url:"tags/Sobolev-Space/index.html",revision:"19074849a5e4dc556790cb41b9739127"},{url:"tags/Space-involving-time/index.html",revision:"a79f4db0437393770a4b07089d4c4ca4"},{url:"tags/star-shaped/index.html",revision:"54f0b9170a06ef3ad61e3f5a9c51345a"},{url:"tags/傅里叶变换/index.html",revision:"13439652ba224ded94619bde4a06334c"},{url:"tags/广义函数/index.html",revision:"d6e4d365e8afc48be08b1d87b9118023"},{url:"tags/拟微分算子/index.html",revision:"70e46d7d752c3c7b6db8423d930d688e"},{url:"tags/数据分析/index.html",revision:"23b99b377d12a079176730553546d119"},{url:"tags/数据可视化/index.html",revision:"63c0c47a1cc01a930917a6be009ee7df"},{url:"tags/泰勒展开/index.html",revision:"972e068d886e15a5742306a9db6eeaeb"}],{})}));
//# sourceMappingURL=service-worker.js.map
