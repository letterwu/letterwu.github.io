if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>r(e,c),b={module:{uri:c},exports:d,require:f};i[c]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(s(...e),d)))}}define(["./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/02/27/广义函数/index.html",revision:"e2394b650fb4790f2176aa326ef94f31"},{url:"2022/02/28/拟微分算子/index.html",revision:"ba3929f8f5853373af78eccbbf737871"},{url:"2022/03/03/数据可视化/index.html",revision:"35fbad53d4eea896eadccb787940c483"},{url:"404.html",revision:"3387683dc458463a94dfed242c4cfac6"},{url:"about/me.html",revision:"195c08fb391b00f6739f9d8e8911029c"},{url:"archives/2022/02/index.html",revision:"70753fa156ec9a2f881ea29dffbee32e"},{url:"archives/2022/03/index.html",revision:"16adb739671cc1d842e89b3116256ff3"},{url:"archives/2022/index.html",revision:"123be878487e1d4efcf41554585d3961"},{url:"archives/index.html",revision:"db2b673b710d0036d02ecc7f084b98b6"},{url:"categories/index.html",revision:"7dcd71b55dc906d651ee919e989c996b"},{url:"categories/math-note/index.html",revision:"ccf858c37d13ab63c73778aebde56d1d"},{url:"categories/math-note/广义函数/index.html",revision:"35f626324b548a7cf350e686dc95c761"},{url:"categories/math-note/拟微分算子/index.html",revision:"9562969370b6ac48ae0328ebb6ab3a26"},{url:"categories/数据分析/index.html",revision:"21be3de3236f13a24643cc51fc39ca41"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3b70533d3f2a7efb31810023b58a3355"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"18cd837cb29795fc0801da523317bd09"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"6550683a45ee9e640c85c5352feab184"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"img/El-Bulli-Bullipedia-Recipes-Video.0.webp",revision:"117b0ffbb3e50ebe393824a18d928789"},{url:"img/top_img_amiya.jpg",revision:"11f52079eba0214f2050e708e91cc87c"},{url:"img/wx_code.png",revision:"a414136fae31799f47c43973f06a5f82"},{url:"img/zfb_code.png",revision:"620867de873d49b3f5dccb0010b3691d"},{url:"index.html",revision:"fc69220258b3342c4229582ac22cde63"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"35933ce61c158ef9c33b5e089fe757ac"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"603fa932f3ec986228c2136a51a14f94"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"1565b508bd866ed6fbd724a3858af5d8"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"9b4bbe6deb700e1c3606eab732f5eea5"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"slides/index.html",revision:"a4ecb5218b8464ad23fd2d57f603a19a"},{url:"tags/index.html",revision:"c1eb51bbb0e32715ecdef2620c5016e3"},{url:"tags/math/index.html",revision:"e9d6f413ae3d11eecec65fd8ab4f0ac8"},{url:"tags/广义函数/index.html",revision:"b86679388683ca48f2bf65aec2029e23"},{url:"tags/拟微分算子/index.html",revision:"0b7e0cba619a92c0587c86cadda5c0ff"},{url:"tags/数据分析/index.html",revision:"bb47632c491f522bf099553bdeebb993"},{url:"tags/数据可视化/index.html",revision:"ffbf969c9519df212b3d36e0297b8a7b"}],{})}));
//# sourceMappingURL=service-worker.js.map
