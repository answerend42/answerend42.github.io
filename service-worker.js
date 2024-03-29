/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/02/17/lg1352/P1352 1.png","e807526038f771d71854d37a2ed8aa60"],["/2020/02/17/lg1352/P1352 2.png","4be20b95451948957a7a498807f5eeee"],["/2020/02/17/lg1352/index.html","fe5bb0ad820b86fb62fd737d0358ba50"],["/2020/02/20/lg3372/P3372 1.png","6957966152109605ab937a54e9360d28"],["/2020/02/20/lg3372/P3372 2.png","121f9734e3d8c846e16e15ecd538e755"],["/2020/02/20/lg3372/index.html","8a52d4f868062499a81078e8f2cf864c"],["/2020/02/21/lg1009/P1009 1.png","3fab055650555f680e13d73c23ec68b6"],["/2020/02/21/lg1009/P1009 2.gif","8cbbbbd788fffc34b73ec75d321b2971"],["/2020/02/21/lg1009/index.html","fa41534a18eab664ac7b332891bb73bc"],["/2020/02/21/lg1009/lg1009.html","5f3cb454b79402696a2d6e4e6a974be4"],["/2020/02/21/lg1009/lg1009/index.html","def0ed2352374dbf363907596bbd7175"],["/2020/03/01/lg3379/P3379 1.png","bafdf0234417b2e4e1ad4dc46b7e3a96"],["/2020/03/01/lg3379/index.html","567d0a9e2b780335760a932e1ed16ed9"],["/2020/03/03/二月做题记录/index.html","34590883c3a821fb5cb4d89a66786278"],["/2020/03/08/lg6180/index.html","85cf8acf5af12c3885a673fbe0774eb2"],["/2020/03/09/lg1057/index.html","2d11cc17142d8f2f1c8ea3629735f4c2"],["/2020/03/11/lg1135/index.html","b94caedc17c8f663d0021d965a0ef848"],["/2020/03/11/lg1434/index.html","9871ba927f1fa02b755f1ade78a3190e"],["/2020/03/15/生动形象的理解二维前缀和/1.png","32876997a0945717280be850f723d0aa"],["/2020/03/15/生动形象的理解二维前缀和/2.png","7b5651091b0f9e743a766790db6acaf5"],["/2020/03/15/生动形象的理解二维前缀和/3.png","5aad77fad5025461afb25075ea110427"],["/2020/03/15/生动形象的理解二维前缀和/4.png","40c366c26355f9167486c7cbb1e2b54c"],["/2020/03/15/生动形象的理解二维前缀和/index.html","76ae4fd407c8c66d3571966121f52f82"],["/2020/03/24/第一次CF比赛/index.html","440a8022435d3ab04bfb6c2972480ee4"],["/2020/03/25/lg6236/index.html","f7bb6a9da5c2f7aacba80b9696ad1d9e"],["/2020/03/27/cf1328/index.html","92d5e948936e2a7e5e2b9c694049718f"],["/2020/04/12/差分约束算法的一些个人理解/index.html","9446becf8391cd48d1c2882b5fcd8fe5"],["/2020/04/17/区间DP的一些理解/1.png","8aefe6aa3cd1191081f845fd06fc3478"],["/2020/04/17/区间DP的一些理解/index.html","f93710b7fc5eb1d4003886c995b38739"],["/2020/04/24/cf1337/index.html","9f629c1ac4443118554e2e26a916d2ab"],["/2020/04/24/cf1339/index.html","36ff3e897621a0dd265c803ec29d2de3"],["/2020/04/26/cf1343/index.html","5bd098710e8eb352301066211e8df064"],["/2020/05/01/2月flag汇总/index.html","7a48e7b59df9dde7b72283c45b95c489"],["/2020/08/01/暑假线下集训总结/index.html","b8c4340e00e0ff40cf44855b40d0e725"],["/2020/08/18/Aha-Round-1/index.html","d6606cb882c7028b66a3a1ea0c590c50"],["/2020/10/06/lg1535/index.html","5ef1338595cf128998854973b1ad0634"],["/2020/10/07/初赛复习集合/index.html","a934a35fcc455944f9c7e4ba5480ab4d"],["/2020/10/20/lg6382/index.html","4d34b47e9e78dff4f90094a5a10f7db3"],["/2020/10/21/cf1433/index.html","bac798675a58f5f9e7aa4fbc06a690ca"],["/2020/10/21/lg4170/index.html","e3dca6c2b0047df2c99f961bcdbf48ad"],["/2020/10/28/赛前冲刺日志/index.html","43f412c55c39b8d05daeb30302339b12"],["/2020/11/12/lg1106/index.html","52dc9cec88e9484ee8d126d8764c45b0"],["/2020/11/12/lg1160/index.html","54d1e4883d70378627744293e1779e8d"],["/2020/11/12/lg1816/index.html","a7172584777a06d4656ca036a22ab4ad"],["/2020/11/12/lg3368/index.html","0a1671b58497b6638ae3193f2d9a26e3"],["/2020/11/12/lg3374/index.html","152244bd5a9255e7520dac4aafc073ed"],["/2020/11/12/lg4513/index.html","087c83ad147bcb8ad62f10985d68589c"],["/2020/11/15/lg2831/index.html","93efca9fca72cb71dbc4b73aaf374e71"],["/2020/11/21/lg1226/index.html","317d0db61a8f679f8fc67e6426678edb"],["/2020/11/22/lg7100/Snipaste_2020-11-22_17-21-58.png","a82ee0ea3a3b213f881d62e123860812"],["/2020/11/22/lg7100/Snipaste_2020-11-22_18-28-04.png","6313d6718a4772003d3163ec3cecca7d"],["/2020/11/22/lg7100/index.html","a3bb68898f9ef342cdf72624b88324c1"],["/2020/11/23/lg1156/index.html","0f5a014767e740aad0e487976678adc4"],["/2020/11/25/loj2757/index.html","c864620293c3dfd116197b919135711b"],["/2020/11/28/二分图汇总/index.html","eb2df7113b17879486f0225eb6b06a51"],["/2023/07/06/uva11572/index.html","3304975cfa012a9dce560a08486f1c27"],["/404.html","6f0e2481db4ea31afc6630c172680c64"],["/about/index.html","85e001e687ce57d0174e4a1bb9a846ea"],["/archives/2020/02/index.html","3129b10142eb23de8ae53d5189cf30f4"],["/archives/2020/03/index.html","8140d264baa293d189324385e9479c55"],["/archives/2020/04/index.html","3eabf15f173f56bc465d07f15ecc47b2"],["/archives/2020/05/index.html","c7163b379628028c111fc7f6f31a9b43"],["/archives/2020/08/index.html","40b6e7c2a37846848a0063cbdfa6d639"],["/archives/2020/10/index.html","ff7a2f6988bf03c9fdfc61036caf3665"],["/archives/2020/11/index.html","8fd111177c0bf6ee345e2951a47a1a42"],["/archives/2020/11/page/2/index.html","7defd2cd0d62dd0f1421f72d9962bcb3"],["/archives/2020/index.html","85341fb11681387b2f90f16e0a0f9910"],["/archives/2020/page/2/index.html","4a3e9dd800734649d038e3c9997e02f7"],["/archives/2020/page/3/index.html","ef5f5c60230adb2f58ff8179ec43e07c"],["/archives/2020/page/4/index.html","0dbcab36aacbb8a6f911978611a2f070"],["/archives/2023/07/index.html","67be7535e1629df48c992a95681713ee"],["/archives/2023/index.html","47f46b6538ca20d0c32f4b7e3f193707"],["/archives/index.html","2308435bfe262aae482509a335d863d2"],["/archives/page/2/index.html","690579c929f91424445fbd2f68ba97b9"],["/archives/page/3/index.html","a87478fafef96636d906d97022323c10"],["/archives/page/4/index.html","84684c5b6b5b31cd700a93787d7aea47"],["/archives/page/5/index.html","f889fc0fcfdfd4dfb836c4d49c0a3798"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","adfa2bf65777271210dc96580ad366a0"],["/categories/比赛/index.html","aa37db2cba93cddd715550249e825c00"],["/categories/算法/index.html","892d2a8bf2c5dde9f72406b882ae0db8"],["/categories/记录/index.html","bb6f45c21e83a6496b7c5106d8c8cb9c"],["/categories/题解/index.html","0d52ae6d2f98990d8ba2f835963fbedb"],["/categories/题解/page/2/index.html","758cd89b5b562d7f2de10a7c57a07733"],["/categories/题解/page/3/index.html","2e07460f4b199c4cb4a8051181900581"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/index.css","6bcf8812cbe43136ec646b163a14db1f"],["/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/SourceCodePro-Light.ttf","cf1c1e30cdd58629e6c71e18aac4096a"],["/fonts/SourceCodePro-Medium.ttf","472c7e7a808efce9161fb8f27535bf22"],["/gallery/index.html","0913cb4d30f482e918ef9107ef979d1e"],["/images/icons/icon-128x128.png","e9b917423ea14d643528b9050a43d677"],["/images/icons/icon-144x144.png","a72c37b48cda375a1ca753ed2dd87d15"],["/images/icons/icon-152x152.png","7f792a11912ba508bdc7c1ea72831b0c"],["/images/icons/icon-192x192.png","630a5103f91aa0281f209b73135e95a4"],["/images/icons/icon-384x384.png","d054706d4ee6a0c9bc0749234ed0e8c0"],["/images/icons/icon-512x512.png","0d1facb096c07fe9508bf97ea384451f"],["/images/icons/icon-72x72.png","0d6e15d57cd0660e272dd98e20bbc78c"],["/images/icons/icon-96x96.png","8f0b7d9f7cf94b8604be771aea167876"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","884ad37743aa4bc5381bb850d210dccb"],["/index.html","5d4be9bc0771fa55bcfffc9820fa5624"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","61468cd4546207ecdcdd4fe53ff426ee"],["/page/3/index.html","c4de53d1be171e96349a148643c00041"],["/page/4/index.html","7e0b585a45f5099466dff1292940f01e"],["/page/5/index.html","26c7ff2babfc216b5316c65be922f2d8"],["/tags/RMQ/index.html","4c26e5211c26aa56c32efcf97184610d"],["/tags/SPFA/index.html","0a468178502f7056770bc5cd7e8ff004"],["/tags/index.html","42cc81aea0f2f7f23e7624c491c9dcda"],["/tags/二分图/index.html","ff5eeb454fff585f1e9b578bf33e33a0"],["/tags/二维前缀和/index.html","71a3d89159dc8e9b2494d2b1a7942174"],["/tags/倍增/index.html","0d06b16b3e34b30f5e3ad4e045d26e20"],["/tags/做题记录/index.html","9952803333fb4e825a142942ff999cfe"],["/tags/初赛/index.html","5a2a1ad87e4bc4c7ace982580e454bb6"],["/tags/前缀和/index.html","42ab4f4c1447369a46906e1aa8839833"],["/tags/剪枝/index.html","c41bf9b178d6a760e4dd5c6199a0547d"],["/tags/动态规划/index.html","73f3ab7cc32b04c8bb025a48d794693d"],["/tags/区间DP/index.html","a75dd2fb772abbcacadff9681b650891"],["/tags/单调栈/index.html","1c063c4a43b5c44174264cd924fa97a7"],["/tags/双向链表/index.html","8d3d602d69027f94ebe5ed560fd9d7b1"],["/tags/双指针/index.html","ee90ff5f2e2be4f677b9c0f83946a316"],["/tags/图论/index.html","b37b49e3a74b87bb976ee243efdd0ca3"],["/tags/奇偶性/index.html","dd383fb6a2d29dd279beac69b2066ee6"],["/tags/字符串/index.html","724549dde1cff4c61ad3082d955934b7"],["/tags/差分约束/index.html","c203bca4c10c02fc4d96fbdb894173ec"],["/tags/广度优先搜索bfs/index.html","9d49ce1255572f4c196c35f4d82b3077"],["/tags/搜索/index.html","ebb54c77f9eeec03eb279c7569aaf14e"],["/tags/数学/index.html","078346df99fa065e30fc1c00071bef81"],["/tags/数论/index.html","28d6000d1ff04e7325b6deb53084d417"],["/tags/最小生成树/index.html","17d8d990bab6e4f6b818cb81285d3c28"],["/tags/最短路/index.html","0557049eccab4279d3740edf183225de"],["/tags/最近公共祖先/index.html","1fa7b24c275e6a8ec79479aeb1403332"],["/tags/构造/index.html","ea3cd200304645b7778709318c6f5a94"],["/tags/树形DP/index.html","f26bf5361051e76af0390c8c392aa6e4"],["/tags/树状数组/index.html","44bfc42bb78dbb7577a63a8cec8e5fd4"],["/tags/模拟/index.html","e6281aa3a7bdaeafbb647310b2029a36"],["/tags/模板/index.html","77889e37cb78c8801b7bfa0ae92acd6b"],["/tags/深度优先搜索dfs/index.html","81f4b4d5278dbc5f6c5c05b778809655"],["/tags/状压DP/index.html","41d9c59a58b410043f56bc5540a8cf46"],["/tags/线段树/index.html","1a4909b79f12368c870ad92576674d06"],["/tags/网络流/index.html","b3966d3b21b1d9ee17efe8ecccad4b8d"],["/tags/背包DP/index.html","f41bc81af6220e8081b585de7d77936d"],["/tags/记忆化搜索/index.html","0476228b9be79d32969d80fb6bd6c7df"],["/tags/贪心/index.html","bd6b03d172ef50f3014c8ba0c25283a1"],["/tags/重链剖分/index.html","4203f42832bb4473e11b31b43fe3c803"],["/tags/集合/index.html","1b53a5dd833e6433352c005a03269516"],["/tags/高精度/index.html","2d2d6e929a981ab2a1d307c07a9d3212"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"your_websie_url"});




