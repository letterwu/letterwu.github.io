if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),f={module:{uri:c},exports:s,require:n};i[c]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/02/27/广义函数/index.html",revision:"5401d077b4ca5a6d02c3d3c81767c37f"},{url:"2022/02/28/拟微分算子/index.html",revision:"cc69283b936e834b2780985f2e36f081"},{url:"2022/03/03/数据可视化/index.html",revision:"d5b94eff01e96c6a3887648458f909fc"},{url:"2022/03/04/为markdown和博客添加折叠/index.html",revision:"072aff136e0f1052a98ed962e1c0c2fc"},{url:"2022/03/04/傅里叶变换/index.html",revision:"9228793fc36da797e27f44659adb380a"},{url:"2022/03/05/Star-Shaped/index.html",revision:"b29ba7014df873de9ae50f2e24738bf8"},{url:"2022/03/09/Hardy-不等式/index.html",revision:"a262194314b779ffdbf457399cbc33a5"},{url:"2022/03/19/用requests和selenium下载漫画/index.html",revision:"4f2a421c36a85987695b44b06b29c5a6"},{url:"2022/03/21/phragmén–lindelöf principle/index.html",revision:"460ce4d31d7f97c69fae561130bca93d"},{url:"2022/04/01/带时间t的索伯列夫空间/index.html",revision:"ba6c9692c6cb928059803547394bbeb1"},{url:"2022/04/03/Banach-值函数/index.html",revision:"cc9fbe435afe8b395a79ea49a1c6b507"},{url:"2022/04/03/Banach空间上的泰勒展开/index.html",revision:"0b60a6d1e39288f7731447ae2a136c3f"},{url:"404.html",revision:"3387683dc458463a94dfed242c4cfac6"},{url:"about/me.html",revision:"76cb14426844d7fbfe6e3f8468a81b7b"},{url:"archives/2022/02/index.html",revision:"caa2c753a8f1c677de8e5a21dbad70f0"},{url:"archives/2022/03/index.html",revision:"2b003b9e7725c7b5c510083f11c422bf"},{url:"archives/2022/04/index.html",revision:"4bb7b0839741fad359c0b3160c3db0d8"},{url:"archives/2022/index.html",revision:"e339a7b628dfa8f20064c177ba9c3f4e"},{url:"archives/2022/page/2/index.html",revision:"c4bf25d888f7dd4e2aba67f465d785a0"},{url:"archives/index.html",revision:"5160f4c73146e4d6689f324e61f5a9e1"},{url:"archives/page/2/index.html",revision:"0a70628ea91ede02ff30c02dd31ff134"},{url:"categories/index.html",revision:"f35d10914b8961029d57cf30f8abae0b"},{url:"categories/markdown/index.html",revision:"06173a62ca089244f59504ec0482cc48"},{url:"categories/math-note/Hardy-不等式/index.html",revision:"1ed6408e4366c81c1a4c6a2ff3f14962"},{url:"categories/math-note/index.html",revision:"b0c53b8973f3f62a704c86cc45c6a1ef"},{url:"categories/math-note/phragmen–lindelof-principle/index.html",revision:"f9ca2453611ec3ec52b560efe6c4b30d"},{url:"categories/math-note/Sobolev-Space/Banach-value-map/index.html",revision:"b25aa57bb482b575c5cdd0702b30876a"},{url:"categories/math-note/Sobolev-Space/index.html",revision:"53f896596258a48e7af19a0f89ffc5fb"},{url:"categories/math-note/Sobolev-Space/Space-involving-time/index.html",revision:"66002dd3236d702b222c8bb926521145"},{url:"categories/math-note/傅里叶变换/index.html",revision:"271156e443e5a1b339e0dd477e931c2e"},{url:"categories/math-note/广义函数/index.html",revision:"04ce65868ca821c142d9ae8dcda13ee2"},{url:"categories/math-note/拟微分算子/index.html",revision:"7b9349cb3911cd56a7193da4e1dfbb76"},{url:"categories/math-note/泰勒展开/index.html",revision:"5b7bb973c9141da93c268d72fa1c40de"},{url:"categories/python/index.html",revision:"9f325378359cb5d42132f9db46681825"},{url:"categories/python/selenium/index.html",revision:"bd41b806586ec46d269829c92630e392"},{url:"categories/数据分析/index.html",revision:"c20a97f9675e20a8380e228f9df3f388"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3b70533d3f2a7efb31810023b58a3355"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"d199157b1846c423908e1fe08beed87c"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"6550683a45ee9e640c85c5352feab184"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"img/El-Bulli-Bullipedia-Recipes-Video.0.webp",revision:"117b0ffbb3e50ebe393824a18d928789"},{url:"img/top_img_amiya.jpg",revision:"11f52079eba0214f2050e708e91cc87c"},{url:"img/wx_code.png",revision:"a414136fae31799f47c43973f06a5f82"},{url:"img/zfb_code.png",revision:"620867de873d49b3f5dccb0010b3691d"},{url:"img/数学公式1.png",revision:"8f083c19079b5e8efd853916260bca53"},{url:"index.html",revision:"ac7b799543134a49c0c15f30f9d75783"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"35933ce61c158ef9c33b5e089fe757ac"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"603fa932f3ec986228c2136a51a14f94"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"1565b508bd866ed6fbd724a3858af5d8"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"9b4bbe6deb700e1c3606eab732f5eea5"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"page/2/index.html",revision:"2782a18a6f4b6490389c95e780150205"},{url:"slides/index.html",revision:"db9872f9ff29758b669105fa011acc12"},{url:"tags/Banach-value-map/index.html",revision:"1ba30f0f232140c027fb078ec8564630"},{url:"tags/Complex-Analysis/index.html",revision:"a7880e2f9c267b90cdbdfc439e59eaa7"},{url:"tags/Hardy-不等式/index.html",revision:"ace9c379b71e8ce9814437778719446b"},{url:"tags/Hardy-算子/index.html",revision:"6f31281cac480438f7e02b5fd9fe82fd"},{url:"tags/index-1.html",revision:"a03d6f1a120e42ab968cbfb613f0d82b"},{url:"tags/index.html",revision:"49c5985060961db228be51a31c9983df"},{url:"tags/markdown/index.html",revision:"64f4419634ef646f303f15f5915d0754"},{url:"tags/math/index.html",revision:"3bf096467ff2dfcd80bccdeb74c5ebd9"},{url:"tags/phragmen–lindelof-principle/index.html",revision:"998aac92d229536f3c887f27431ad864"},{url:"tags/python/index.html",revision:"018aacba4c3873f93fe54812bd9bff28"},{url:"tags/selenium/index.html",revision:"a3c4cdb410770adfc6b807da704d9e36"},{url:"tags/Sobolev-Space/index.html",revision:"db1d441468f4b3415d1c15a89bd23d81"},{url:"tags/Space-involving-time/index.html",revision:"28f76346864a8c97c9cb50a3a14060d2"},{url:"tags/star-shaped/index.html",revision:"613f88b785b27a1c20f72563922d7cb4"},{url:"tags/傅里叶变换/index.html",revision:"d6e9045e00958d9516b17c5c56ded308"},{url:"tags/广义函数/index.html",revision:"caf00bb2ed883cf9a16a39a66bca73c8"},{url:"tags/拟微分算子/index.html",revision:"571e5eee0136dcaf33ec47866a5759e5"},{url:"tags/数据分析/index.html",revision:"9fb114cde9039741eaf612fddfcf5f7d"},{url:"tags/数据可视化/index.html",revision:"91f541d40129c51bf964655bb62659c9"},{url:"tags/泰勒展开/index.html",revision:"395f86d540fa66186e3dd2740afa085b"}],{})}));
//# sourceMappingURL=service-worker.js.map
