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
    "revision": "e95276182a240d30ffdda6dabe009332"
  },
  {
    "url": "/gridsome-starter-photobooth/404/index.html",
    "revision": "e95276182a240d30ffdda6dabe009332"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/css/0.styles.85e931eb.css",
    "revision": "337bbef4254e234f71d4bab86fed9fcf"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/data/404/index.json",
    "revision": "4f86b4400afb578f3127b75bd9450629"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/data/index.json",
    "revision": "730d1dcd8eafd8d10b7dd5348669ed6f"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/4.50de8a4b.js",
    "revision": "62a319082ab0c22ec305f0b574c4b9bf"
  },
  {
    "url": "/gridsome-starter-photobooth/assets/js/app.7bab3538.js",
    "revision": "461ea5b709f25ecab7c48304d475e978"
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
    "revision": "736308c477af0e70050692da7062ecc0"
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