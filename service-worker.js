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
    "url": "/gridsome-starter-photobooth/404.html",
    "revision": "7b279a6c9d4088e7dbefc6dba59a6570"
  },
  {
    "url": "/gridsome-starter-photobooth/404/index.html",
    "revision": "7b279a6c9d4088e7dbefc6dba59a6570"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/css/0.styles.85e931eb.css",
    "revision": "337bbef4254e234f71d4bab86fed9fcf"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/data/404/index.json",
    "revision": "a560bd8a7bc46e8148588dc8dff678ac"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/data/index.json",
    "revision": "12d3b034ec1f77472d68e2b9a3651e23"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/4.50de8a4b.js",
    "revision": "62a319082ab0c22ec305f0b574c4b9bf"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/app.aa2c7699.js",
    "revision": "4111ef1b9336cf86c392eae0249b125e"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/page--node-modules--gridsome--app--pages--404-vue.a39b9875.js",
    "revision": "e52cb085e849ecd90739951b603b52e8"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/page--src--pages--index-vue.276cc4e4.js",
    "revision": "3e4221ed0d770dc0b09e5cac57c7af6b"
  },
  {
    "url": "/gridsome-starter-photobooth/index.html",
    "revision": "cb0ee2b7ecd188bc5364d8f818a5393c"
  },
  {
    "url": "/gridsome-starter-photobooth/manifest.json",
    "revision": "e8d2afac91b042af8ebbca510466176a"
  },
  {
    "url": "/gridsome-starter-photobooth/404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
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