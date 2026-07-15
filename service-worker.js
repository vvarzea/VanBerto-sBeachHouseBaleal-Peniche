/* VanBerto's PWA Service Worker (offline-first) */
const CACHE_VERSION = "vanbertos-v19";
const FONTS_CACHE = "vanbertos-fonts-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./logo-vanbertos.png",
  "./js/config.js",
  "./js/dom-refs.js",
  "./js/data.js",
  "./js/utils-favoritos.js",
  "./js/render.js",
  "./js/modal.js",
  "./js/language.js",
  "./js/maps-events.js",
  "./js/qrcode-lib.js",
  "./js/home-sections.js",
  "./js/home-i18n.js",
  "./js/init-share.js",
  "./js/meteo.js",
  "./js/calendar.js",
  "./js/modal-extra-info.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_VERSION && k !== FONTS_CACHE ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Navegação: devolve sempre index.html do cache (offline-friendly)
  if (req.mode === "navigate") {
    event.respondWith(
      caches.match("./index.html").then((cached) => cached || fetch(req).catch(() => cached))
    );
    return;
  }

  // Google Fonts: cache-first num cache próprio e duradouro (não é limpo a cada versão)
  if (url.origin === "https://fonts.googleapis.com" || url.origin === "https://fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONTS_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req)
            .then((res) => {
              cache.put(req, res.clone());
              return res;
            })
            .catch(() => cached);
        })
      )
    );
    return;
  }

  // Só cachear same-origin
  if (url.origin !== self.location.origin) return;

  // Cache-first para assets (css/js/img)
  const isStatic =
    req.destination === "style" ||
    req.destination === "script" ||
    req.destination === "image" ||
    req.destination === "font";

  if (isStatic) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
            return res;
          })
          .catch(() => cached);
      })
    );
  }
});
