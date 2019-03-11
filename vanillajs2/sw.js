self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjs-todo-store').then(function(cache) {
     return cache.addAll([
       './',
       './index.html',
       './index.js',
       './images/pirate_PNG90.png',
       './js/app.js',
       './js/controller.js',
       './js/helpers.js',
       './js/model.js',
       './js/store.js',
       './js/template.js',
       './js/view.js',
       './node_modules/todomvc-app-css/index.css',
       './node_modules/todomvc-common/base.css',
       './node_modules/todomvc-common/base.js'
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