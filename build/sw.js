let cacheName = "appv1";
const urlsToCache = ['index.html', 'offline.html'];
const self = this;


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })

    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
        })
        .catch(() => caches.match('index.html'))
    )
})

//Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(cacheName);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((Names) => {
                if (!cacheWhiteList.includes(Names)) {
                    return caches.delete(Names);
                }
            })
        ) )
    )
})

// const cacheFile = [
//     '/static/js/bundle.js',
//     'index.html',
//     '/manifest.json',
//     `/favicon.ico`,
//     `/`,
//     '/about',   
//     '/user',
//     '/static/js/main.29e2a72f.js'
// ];

// self.addEventListener("install", (event) => {
//     event.waitUntil(   
//         (async () => {
//             const cache = await caches.open(cacheName);
//             await cache.addAll(cacheFile)
//         }
//         ) 
//     )
// })

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//       (async () => {
//         const r = await caches.match(event.request);
//         console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
//         if (r) {
//           return r;
//         }
//         const response = await fetch(event.request);
//         const cache = await caches.open(cacheName);
//         console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
//         cache.put(event.request, response.clone());
//         return response;
//       })()
//     );
//   });

//   this.addEventListener("activate", (event) => {
//     event.waitUntil(
//       caches.keys().then((keyList) => {
//         return Promise.all(
//           keyList.map((key) => {
//             if (key === cacheName) {
//               return;
//             }
//             return caches.delete(key);
//           })
//         );
//       })
//     );
//   });
