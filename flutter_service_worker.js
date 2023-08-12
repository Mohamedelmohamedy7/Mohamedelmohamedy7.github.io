'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1f63c0780fa0b537dc1fbd75e07ce0da",
"assets/AssetManifest.json": "4ae5990326b4767bb54588ff7a4e8a44",
"assets/assets/svg/adora.webp": "afeee2f9c9407c2de2c347db43cdf37f",
"assets/assets/svg/appLogo.png": "7df7d2690ea72b34c624b25dfaec2644",
"assets/assets/svg/appLogo.svg": "a64c7d2bd70b14f1cbf9a64172407eef",
"assets/assets/svg/arabia.webp": "9524d4f28a0994472e995daf974e5117",
"assets/assets/svg/barek.webp": "99a62209ae8aee507cb9713442297654",
"assets/assets/svg/beit.webp": "798d08f097c85b4cf49917d87f311c4d",
"assets/assets/svg/edraak.webp": "02a3cfb357b8c90be53f14bf2f8e914b",
"assets/assets/svg/email.svg": "14f1d9a46872590242c1fd9d3113c3dc",
"assets/assets/svg/eval.webp": "427193d2f2ea45c5ea74af46f910d208",
"assets/assets/svg/ever.webp": "7e903fbfcdf13e3a9e014cf5f6fbffe1",
"assets/assets/svg/externalLink.svg": "8192b9938a05ad4951f40457d563d947",
"assets/assets/svg/fine.webp": "607ff8593d653a604bcb32a664f75908",
"assets/assets/svg/folder.svg": "21d06f307775812c56fbdaffae58576b",
"assets/assets/svg/ganet.webp": "282d87647a1e5823c34dde0522e822ce",
"assets/assets/svg/github.svg": "d1baddb890c4751b001ae93bf9c5ce7a",
"assets/assets/svg/imkan.webp": "c78822d95e986a3ac1c0a920690d894f",
"assets/assets/svg/instagram.svg": "a5740599830b320c560d589a6ac0eb80",
"assets/assets/svg/lanju-fotografie-_R_5e0nwBH8-unsplash.jpg": "82d5bb81d488ec74d913f173ec9938a9",
"assets/assets/svg/linkedIn.svg": "b031a1bad55a5f7c3bdb7e343f9bf159",
"assets/assets/svg/myImage.jpg": "7294bfac2cfe53e3f07870a054da2214",
"assets/assets/svg/myImage.webp": "55c10d94cd68e28faf96fe639c07a9ae",
"assets/assets/svg/myImagemobile.jpg": "9b38a96c0ef32cb874f99bcb083191dd",
"assets/assets/svg/myImagemobile.webp": "bb2fd167393b49e0aae88d74cd66dd80",
"assets/assets/svg/profilePic.jpg": "8ab2142bc31e795fa79f7ceb6d0695f6",
"assets/assets/svg/prudStyle.webp": "05ee28bf39b7211f324359c44e0243a3",
"assets/assets/svg/sharshaby.webp": "26bb2b3c355699d662b0b1a7b3fa6d81",
"assets/assets/svg/shekh.webp": "1a8c32e5b393f6cd14d4aaddbb98e8f5",
"assets/assets/svg/stackoverflow.svg": "21d490f697a76cef4b5b6d5bff0d3aaf",
"assets/assets/svg/tsaly.webp": "1954663dffc32a945bfa1aadddac22fd",
"assets/assets/svg/twitter.svg": "7c3b9ed87796d5f03c6b6c9ee913d1da",
"assets/assets/svg/wandy.webp": "4a2c175aadabf148bafd2204c30a2004",
"assets/assets/svg/whatsapp.webp": "65446f977343072569936c7b039cf154",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/fonts/MaterialIcons-Regular.otf": "baef47cdfeee1eb504ffb1bd96057313",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "debd75f631c5da803074a27a9c045853",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60ff6091efc3edae40ba4daf25aa622c",
"/": "60ff6091efc3edae40ba4daf25aa622c",
"main.dart.js": "069dac2a13eab1a9a04999b7208d4c1d",
"manifest.json": "ca1bf2117554abdd890703565f7fec7f",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
