if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),f={module:{uri:c},exports:r,require:a};i[c]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-33e125de"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"f21735453187b3a797edaf2d4c29c863"},{url:"assets/index-Bc3mAY3N.js",revision:null},{url:"assets/index-p5bVRK1X.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"ef97783e60bd8d98ccf66897e4a4731e"},{url:"favicon.svg",revision:"c967f8963787359f216362d0266492f3"},{url:"icons/apple-touch-icon-180x180.png",revision:"6fc238f3ff32d69d633d5380221188d3"},{url:"icons/favicon.ico",revision:"7ca770907ccc692fac6cd93e0ccba298"},{url:"icons/maskable-icon-512x512.png",revision:"ee1ea01a44e6ef033d11bece4f122e29"},{url:"icons/pwa-192x192.png",revision:"286551f4ffe3e86afa9e5a4bb0bc8336"},{url:"icons/pwa-512x512.png",revision:"553bffe616b9b9d99615badff6d0149b"},{url:"icons/pwa-64x64.png",revision:"c56380d5b43047bd72291d38b7be961f"},{url:"index.html",revision:"cd9acb593742ca291b0522f128027047"},{url:"maskable-icon-512x512.png",revision:"e11fed89b064ba4aceaf8a938ba63dbe"},{url:"pwa-192x192.png",revision:"98575b9bf5d7806db1235c8faf698b9e"},{url:"pwa-512x512.png",revision:"a3b41e7e4587a47033c0731c0be9be2f"},{url:"pwa-64x64.png",revision:"ed52403c3f805a3bfad69885365ab343"},{url:"screenshot-desktop.png",revision:"c3920d0cca43c6abe4834b50ebcedcc7"},{url:"screenshot-mobile.png",revision:"8f5bf034f8618d5a266b58531e317f69"},{url:"favicon.ico",revision:"ef97783e60bd8d98ccf66897e4a4731e"},{url:"favicon.svg",revision:"c967f8963787359f216362d0266492f3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^\/mapa-sur-DPVYU\//]})),e.registerRoute(/^https:\/\/\w+\.tile\.openstreetmap\.org\/.*/i,new e.NetworkFirst({cacheName:"osm-tiles",fetchOptions:{credentials:"include"},plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map