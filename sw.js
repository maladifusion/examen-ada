/* Service worker: permite instalar la app y usarla sin internet.
   Estrategia: contenido (html/js/manifest) => network-first (siempre trae lo último si hay red);
   imágenes/íconos => cache-first (rápidas y offline). */
var CACHE = "examen-clase-b-v6";
var ASSETS = [
  "./",
  "./index.html",
  "./preguntas.js",
  "./senales.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png",
  "./apple-touch-icon.png",
  "./favicon-32.png",
  "./og.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

function isContent(url){
  return /\.(html|js|webmanifest)(\?|$)/.test(url) || url.endsWith("/") || url.indexOf("/examen-ada")>-1 && /\/$/.test(url);
}

self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  var url=e.request.url;
  var content = e.request.mode==="navigate" || /\.(html|js|webmanifest)(\?|$)/.test(url);
  if(content){
    // network-first: trae lo último, cae al caché si no hay red
    e.respondWith(
      fetch(e.request).then(function(res){
        var copy=res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){});
        return res;
      }).catch(function(){
        return caches.match(e.request).then(function(hit){ return hit || caches.match("./index.html"); });
      })
    );
  }else{
    // cache-first para imágenes/íconos
    e.respondWith(
      caches.match(e.request).then(function(hit){
        if(hit) return hit;
        return fetch(e.request).then(function(res){
          var copy=res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){});
          return res;
        }).catch(function(){ return hit; });
      })
    );
  }
});
