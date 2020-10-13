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

var precacheConfig = [["/Answerend42.github.io/2020/02/17/P1352 没有上司的舞会/P1352 没有上司的舞会/index.html","440eb6817c8273f1ba4a364c764b4ab0"],["/Answerend42.github.io/2020/02/20/P3372 【模板】线段树 1/P3372 【模板】线段树 1/index.html","08b9d9851d892f66bdbfdd83d3d0d972"],["/Answerend42.github.io/2020/02/21/P1009 阶乘之和/P1009-阶乘之和/index.html","9df9e72d368cb629a8a0c20c1625f586"],["/Answerend42.github.io/2020/03/01/P3379 【模板】最近公共祖先（LCA）/P3379 【模板】最近公共祖先（LCA）/index.html","8e6e7a4c68e1a5e3d16b0598cf414434"],["/Answerend42.github.io/2020/03/03/二月做题记录/二月做题记录/index.html","57b3e1564cc819cdf9a1715927ac2b95"],["/Answerend42.github.io/2020/03/08/P6180 【[USACO15DEC]Breed Counting S】/P6180 【[USACO15DEC]Breed Counting S】/index.html","9acab9a8241dc055a10e8865e7435496"],["/Answerend42.github.io/2020/03/09/P1057 传球游戏/P1057 传球游戏/index.html","9083d21c32d58241d43a10670045587d"],["/Answerend42.github.io/2020/03/11/P1135 奇怪的电梯/P1135 奇怪的电梯/index.html","419422233d6fc45b0bb501a933fcba62"],["/Answerend42.github.io/2020/03/11/P1434 [SHOI2002]滑雪/P1434 [SHOI2002]滑雪/index.html","bc9aaa5d7af2f3bfba49687c4390b6ef"],["/Answerend42.github.io/2020/03/15/生动形象的理解二维前缀和/生动形象的理解二维前缀和/index.html","d2a01c7715efe7b8a8b020314100cc3e"],["/Answerend42.github.io/2020/03/24/第一次CF比赛/第一次CF比赛/index.html","5b0f1ac3eb6b0bf2ed409c8fa6c268c4"],["/Answerend42.github.io/2020/03/25/P6236 [COCI2010-2011] LJUTNJA/P6236 [COCI2010-2011] LJUTNJA/index.html","32adb4da4ffb062e8de4e9f76edd85ac"],["/Answerend42.github.io/2020/03/27/cf/Codeforces Round 629 (Div. 3)/index.html","5e5a76a9f9883a4149cf4d07d3bfa7fb"],["/Answerend42.github.io/2020/04/12/差分约束算法的一些个人理解/index.html","f05c5d9a2be480ce81157609fe2507fc"],["/Answerend42.github.io/2020/04/17/区间DP的一些理解/区间DP的一些理解/index.html","2ed2de10f35d6d7e04ff63fc112eacf5"],["/Answerend42.github.io/2020/04/24/cf/Codeforces Round 633 (Div. 2)/index.html","a7ea098c952bd9351e0ac0c3df8bea17"],["/Answerend42.github.io/2020/04/24/cf/Codeforces Round 635 (Div. 2)/index.html","b2012418b84e1fac52ee39a2ec883961"],["/Answerend42.github.io/2020/04/26/cf/Codeforces Round 636 (Div. 3)/index.html","a8f06d17f85ed079cbf4d4afb383c67b"],["/Answerend42.github.io/2020/05/01/2月flag汇总/2月flag汇总/index.html","ee864e17dbff7eaccc2ed9a01a7efb65"],["/Answerend42.github.io/2020/08/01/暑假线下集训总结/index.html","6c1cbd37ac1e382ed222c2638272dcda"],["/Answerend42.github.io/2020/08/18/Aha-Round-1/index.html","00aad7ba6f1b9c0796b8541e23e7d386"],["/Answerend42.github.io/2020/10/06/P1535 [USACO08MAR]Cow Travelling S/index.html","8feb0dd953f7e08f01ff939691dd21d0"],["/Answerend42.github.io/2020/10/07/初赛复习集合/index.html","6e12094b74839fe93024ec70d59cd0e7"],["/Answerend42.github.io/404.html","5d8110f4c65b2d62e7cebf953ba05ada"],["/Answerend42.github.io/about/index.html","c3e19bd3a3caa3480d71d9a93bfdab16"],["/Answerend42.github.io/archives/2020/02/index.html","a17aa49bcff94e141eaf225f0506232d"],["/Answerend42.github.io/archives/2020/03/index.html","67eb18994e5a3f2e675857698cfd0f4c"],["/Answerend42.github.io/archives/2020/04/index.html","ac34a6d1de3a59d71850f8b4b2ef0a3d"],["/Answerend42.github.io/archives/2020/05/index.html","80330538110c28a4b051a6f490dc142a"],["/Answerend42.github.io/archives/2020/08/index.html","1cc4e36281c1af4dedc5be418252c64e"],["/Answerend42.github.io/archives/2020/10/index.html","72841fd29dd323fb09ece9d85454f882"],["/Answerend42.github.io/archives/2020/index.html","a20499afa5fb83c6c76d7f382d5faf4c"],["/Answerend42.github.io/archives/2020/page/2/index.html","796dcae5091e74865ac6717e864bc071"],["/Answerend42.github.io/archives/2020/page/3/index.html","13f1da5293f8eb9f6d1a39a8157c3e8e"],["/Answerend42.github.io/archives/index.html","d0cf5a0974875303cfa34038fa23618e"],["/Answerend42.github.io/archives/page/2/index.html","32680754d5f4a443e8a115f97cd06956"],["/Answerend42.github.io/archives/page/3/index.html","3c6d78ff9d352e9938fb1db4907e1cdf"],["/Answerend42.github.io/categories/index.html","417ad8946ce08d2ada9d01ed53d1e181"],["/Answerend42.github.io/categories/比赛/index.html","32461995a42d662e700af4ad1d10a586"],["/Answerend42.github.io/categories/算法/index.html","2e5a2abdd89c79029cc3e59fecaf5660"],["/Answerend42.github.io/categories/记录/index.html","0e8fce8f88114ac52962739d84fe0057"],["/Answerend42.github.io/categories/题解/index.html","ae663cb4d1c41667312bc440bcd2d892"],["/Answerend42.github.io/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/Answerend42.github.io/css/index.css","2ced4a10bae40f45a365c5cd742225a3"],["/Answerend42.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/Answerend42.github.io/fonts/SourceCodePro-Light.ttf","cf1c1e30cdd58629e6c71e18aac4096a"],["/Answerend42.github.io/fonts/SourceCodePro-Medium.ttf","472c7e7a808efce9161fb8f27535bf22"],["/Answerend42.github.io/gallery/index.html","b7b1b678bb985d1c45d30738aa23e47d"],["/Answerend42.github.io/images/icons/icon-128x128.png","e9b917423ea14d643528b9050a43d677"],["/Answerend42.github.io/images/icons/icon-144x144.png","a72c37b48cda375a1ca753ed2dd87d15"],["/Answerend42.github.io/images/icons/icon-152x152.png","7f792a11912ba508bdc7c1ea72831b0c"],["/Answerend42.github.io/images/icons/icon-192x192.png","630a5103f91aa0281f209b73135e95a4"],["/Answerend42.github.io/images/icons/icon-384x384.png","d054706d4ee6a0c9bc0749234ed0e8c0"],["/Answerend42.github.io/images/icons/icon-512x512.png","0d1facb096c07fe9508bf97ea384451f"],["/Answerend42.github.io/images/icons/icon-72x72.png","0d6e15d57cd0660e272dd98e20bbc78c"],["/Answerend42.github.io/images/icons/icon-96x96.png","8f0b7d9f7cf94b8604be771aea167876"],["/Answerend42.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/Answerend42.github.io/img/avatar.png","884ad37743aa4bc5381bb850d210dccb"],["/Answerend42.github.io/index.html","e9c9f24eb0982d7728fa5f21437aa26a"],["/Answerend42.github.io/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/Answerend42.github.io/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/Answerend42.github.io/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/Answerend42.github.io/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/Answerend42.github.io/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/Answerend42.github.io/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/Answerend42.github.io/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/Answerend42.github.io/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/Answerend42.github.io/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/Answerend42.github.io/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/Answerend42.github.io/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/Answerend42.github.io/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/Answerend42.github.io/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/Answerend42.github.io/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/Answerend42.github.io/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/Answerend42.github.io/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/Answerend42.github.io/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/Answerend42.github.io/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/Answerend42.github.io/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/Answerend42.github.io/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/Answerend42.github.io/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/Answerend42.github.io/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/Answerend42.github.io/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/Answerend42.github.io/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/Answerend42.github.io/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/Answerend42.github.io/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/Answerend42.github.io/page/2/index.html","b6eb5a96630c608285f4e90cdb39a65e"],["/Answerend42.github.io/page/3/index.html","aa41662451cec6ab8feee1f088655808"],["/Answerend42.github.io/tags/SPFA/index.html","b5bd8e1584de5dd2b68f1d28d8646193"],["/Answerend42.github.io/tags/index.html","ab9fdcac2560bf6ec1cc0eba152cae80"],["/Answerend42.github.io/tags/二维前缀和/index.html","cf49b37d87ad05cc576216da121d1174"],["/Answerend42.github.io/tags/做题记录/index.html","c3da665cc07442cc7bf39fe86b8ad31b"],["/Answerend42.github.io/tags/初赛/index.html","80680568c589de3cbe055c3b94ca1f55"],["/Answerend42.github.io/tags/前缀和/index.html","7d249b5601b06023ca940588349c4e5f"],["/Answerend42.github.io/tags/剪枝/index.html","3c0b013cbf0c4130426ad4385c4a5956"],["/Answerend42.github.io/tags/动态规划/index.html","ef9e5d7d8d4696cf6d951c8cd2bd16b7"],["/Answerend42.github.io/tags/区间DP/index.html","3e751b22bca995ab7a69f987a00ae400"],["/Answerend42.github.io/tags/图论/index.html","07239438477b28013176444aac6e8329"],["/Answerend42.github.io/tags/奇偶性/index.html","1d3df31bee57a3284f7ad4754d847c58"],["/Answerend42.github.io/tags/字符串/index.html","3d96e8e0538c02554249946e3fb6b7a7"],["/Answerend42.github.io/tags/差分约束/index.html","765e4f1edc1dff24e17506b7b78ee182"],["/Answerend42.github.io/tags/广度优先搜索bfs/index.html","36e043dde934321ed402baf034491502"],["/Answerend42.github.io/tags/搜索/index.html","31ff1319edf99aeb58a2ed6251c6194a"],["/Answerend42.github.io/tags/数学/index.html","034edb0a05d39ae73471720ad2bc4440"],["/Answerend42.github.io/tags/数论/index.html","4839061e786a51a389a468a484a8e372"],["/Answerend42.github.io/tags/最小生成树/index.html","b70a06da0b7cb0452931f90996a65c05"],["/Answerend42.github.io/tags/最短路/index.html","d13d4cecb92dc013b6053b1886e3d3ec"],["/Answerend42.github.io/tags/最近公共祖先/index.html","c3e94d5b5560b36f65f43febfc36c9f5"],["/Answerend42.github.io/tags/构造/index.html","c5cf5bf24c2f2db01b0a56c2d0fda1f3"],["/Answerend42.github.io/tags/树形DP/index.html","50ec7061b8a5787a9ce74be42daddb0f"],["/Answerend42.github.io/tags/模拟/index.html","74688f4f3c6b6b88d0f9c2f8629a34ad"],["/Answerend42.github.io/tags/模板/index.html","6db4ed06c89cddf333522b80c5a21349"],["/Answerend42.github.io/tags/深度优先搜索dfs/index.html","242308981b76ee221c78b67e98a88679"],["/Answerend42.github.io/tags/状压DP/index.html","9216d107c4991c22b30774b8a4c36f25"],["/Answerend42.github.io/tags/线段树/index.html","22eee65fbffb58e8c155be1e754ebd83"],["/Answerend42.github.io/tags/记忆化搜索/index.html","971036f75b14ca4c7d9eb04b0113f465"],["/Answerend42.github.io/tags/贪心/index.html","7b7f61f4c897ca19ca9e1cf02cd41c02"],["/Answerend42.github.io/tags/集合/index.html","7cf5f9d2d5ea0b7a7b2c0fe233e48de0"],["/Answerend42.github.io/tags/高精度/index.html","51dcd15402746a03cde446397dbb957a"]];
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




