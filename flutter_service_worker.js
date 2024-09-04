'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7c5721267a13610aa8564672483971c9",
"assets/assets/svg/adora.webp": "afeee2f9c9407c2de2c347db43cdf37f",
"assets/assets/svg/appLogo.svg": "a64c7d2bd70b14f1cbf9a64172407eef",
"assets/assets/svg/appLogo.webp": "202f52ada4113cada5c6e1eebed2eb86",
"assets/assets/svg/arabia.webp": "9524d4f28a0994472e995daf974e5117",
"assets/assets/svg/barek.webp": "99a62209ae8aee507cb9713442297654",
"assets/assets/svg/beit.webp": "798d08f097c85b4cf49917d87f311c4d",
"assets/assets/svg/cornado.webp": "0e86a2728c032b3a4fe3b5ce16cd6745",
"assets/assets/svg/diet.webp": "78ca3e6279671910d8e6025bf4bb545b",
"assets/assets/svg/dokkan.webp": "65169aad070c3a1670388a67f9966cee",
"assets/assets/svg/edraak.webp": "02a3cfb357b8c90be53f14bf2f8e914b",
"assets/assets/svg/elagelly.webp": "b748faa72468a4e2b2ae9d189d8005ff",
"assets/assets/svg/elhusseny.webp": "ee3f16ec4ce18cd9e1ffc7aa6c2e3183",
"assets/assets/svg/email.svg": "14f1d9a46872590242c1fd9d3113c3dc",
"assets/assets/svg/eval.webp": "427193d2f2ea45c5ea74af46f910d208",
"assets/assets/svg/ever.webp": "7e903fbfcdf13e3a9e014cf5f6fbffe1",
"assets/assets/svg/exccessor.webp": "a63600f03ac466d35db90fb4a1ca8e85",
"assets/assets/svg/externalLink.svg": "1790fffa6c0b0eb87d7e90470cc80b86",
"assets/assets/svg/fine.webp": "607ff8593d653a604bcb32a664f75908",
"assets/assets/svg/folder.svg": "46a545a4289ba140f5b90613ceccd879",
"assets/assets/svg/ganet.webp": "282d87647a1e5823c34dde0522e822ce",
"assets/assets/svg/github.svg": "c0e94df08ad3d521af33fa4ad69e2162",
"assets/assets/svg/imkan.webp": "c78822d95e986a3ac1c0a920690d894f",
"assets/assets/svg/instagram.svg": "0f51da178eff1d87826480d0e5db970b",
"assets/assets/svg/lanju-fotografie-_R_5e0nwBH8-unsplash.jpg": "82d5bb81d488ec74d913f173ec9938a9",
"assets/assets/svg/linkedIn.svg": "c408ef7fbd143d9052cd195819076f90",
"assets/assets/svg/mogam3.webp": "9a1a57175ff95c08ebc3bad503b0b1de",
"assets/assets/svg/myImage.jpg": "7294bfac2cfe53e3f07870a054da2214",
"assets/assets/svg/myImage.webp": "55c10d94cd68e28faf96fe639c07a9ae",
"assets/assets/svg/myImagemobile.jpg": "9b38a96c0ef32cb874f99bcb083191dd",
"assets/assets/svg/myImagemobile.webp": "68252df039f867b6158eb45730647ed5",
"assets/assets/svg/myImagemobile1.webp": "bb2fd167393b49e0aae88d74cd66dd80",
"assets/assets/svg/prudStyle.webp": "05ee28bf39b7211f324359c44e0243a3",
"assets/assets/svg/Qommission.webp": "a51c33a635c97778035f9e98f507dc90",
"assets/assets/svg/rosheta.webp": "a2294972984cb1b1e40d85334c35918b",
"assets/assets/svg/sharshaby.webp": "26bb2b3c355699d662b0b1a7b3fa6d81",
"assets/assets/svg/shekh.webp": "1a8c32e5b393f6cd14d4aaddbb98e8f5",
"assets/assets/svg/stackoverflow.svg": "ec181e798c8b9fe73dcf64d47926667a",
"assets/assets/svg/swaad.webp": "c9190861d41e249f16e9c999217e1873",
"assets/assets/svg/sweet.webp": "e08978daf9b943cec764b8e3480015e6",
"assets/assets/svg/tsaly.webp": "1954663dffc32a945bfa1aadddac22fd",
"assets/assets/svg/twitter.svg": "d278ea034ebbe0c01e76739232fa2a3e",
"assets/assets/svg/wandy.webp": "4a2c175aadabf148bafd2204c30a2004",
"assets/assets/svg/whatsapp.webp": "65446f977343072569936c7b039cf154",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "845a4a2e0386338bcb8b303ec0534e95",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "b9a6cc92fa539740a06835de1d4df9b7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90e2c9cb12b8867c11cfb042c9d92c14",
"/": "90e2c9cb12b8867c11cfb042c9d92c14",
"main.dart.js": "f7f40a05e2622c9b4b442c402e4356d4",
"manifest.json": "69cdf42a5cfaa852725da045d4130845",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
