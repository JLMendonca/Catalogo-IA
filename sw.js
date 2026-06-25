/* Service Worker — Catálogo de Ferramentas de IA (PWA)
   Cacheia as páginas e os ícones para funcionar offline. */
const CACHE = "catalogo-ia-v1-1";
const ASSETS = [
  "./",
  "index.html",
  "mobile.html",
  "desktop.html",
  "manifest-mobile.json",
  "manifest-desktop.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Cache-first para os arquivos do app; rede para o resto (ex.: fontes, buscas externas).
self.addEventListener("fetch", e=>{
  const url = new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(url.origin===location.origin){
    e.respondWith(
      caches.match(e.request).then(hit=> hit || fetch(e.request).then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("index.html")))
    );
  }
});
