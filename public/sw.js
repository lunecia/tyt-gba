self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pic-slide').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/main.css',
        '/styles/normalize.css',
        '/scripts/script.js',
        '/images/profile.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});