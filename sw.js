/* Service Worker — Catálogo de Ferramentas de IA (PWA) v2
   Cacheia as páginas e os ícones para funcionar offline.
   AO ATUALIZAR O CATÁLOGO: troque o número da versão abaixo (v2 -> v3...)
   para forçar a atualização nos aparelhos já instalados. */
const CACHE = "catalogo-ia-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./mobile.html",
  "./desktop.html",
  "./manifest-mobile.json",
  "./manifest-desktop.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).catch(() => caches.match("./index.html")))
  );
});
