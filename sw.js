// Service worker : fonctionnement hors ligne.
// Changer VERSION à chaque mise à jour du site pour forcer le rafraîchissement du cache.
// ASSETS (app et données, légers) : mis en cache à l'installation. IMAGES : cache séparé et durable, rempli en arrière-plan.
// Ces deux listes sont régénérées par sync.py.
const VERSION = "spearcounter-2.14.0";
const ASSETS = [
  "./",
  "./index.html",
  "./partie.js",
  "./compte.js",
  "./fonts/fonts.css",
  "./fonts/oswald-latin-500-normal.woff2",
  "./fonts/oswald-latin-600-normal.woff2",
  "./fonts/oswald-latin-700-normal.woff2",
  "./fonts/source-sans-3-latin-400-normal.woff2",
  "./fonts/source-sans-3-latin-600-normal.woff2",
  "./fonts/source-sans-3-latin-700-normal.woff2",
  "./icons/app-necrocounter.png",
  "./icons/app-warcounter.png",
  "./icons/sc5-apple-touch-icon.png",
  "./icons/sc5-favicon-32.png",
  "./icons/sc5-icon-192.png",
  "./icons/sc5-icon-512.png",
  "./icons/sc5-maskable-512.png",
  "./icons/splash-s.png",
  "./data/avant-garde-hurakaine.js",
  "./data/avant-garde-kavalos.js",
  "./data/bagnehorde-maudite.js",
  "./data/beuglement-tyran.js",
  "./data/bosquet-aigrecorce.js",
  "./data/carneguet.js",
  "./data/carnepelerins-sang-lies.js",
  "./data/cellule-bubonique.js",
  "./data/chasse-pillemanes.js",
  "./data/chasse-sanguivore.js",
  "./data/cite-de-cendre.js",
  "./data/compagnie-castelaine.js",
  "./data/confrerie-vigilante.js",
  "./data/coterie-lameflux.js",
  "./data/coterie-ombre-khainite.js",
  "./data/crixxit.js",
  "./data/crocs-dieu-sang.js",
  "./data/defricheurs-grundstok.js",
  "./data/delicieux-epicuriens.js",
  "./data/echelon-collecteur-dime.js",
  "./data/elite-mortisans.js",
  "./data/force-marteau-celeste.js",
  "./data/garde-akhelienne-deferlante.js",
  "./data/grognemeute-chasse.js",
  "./data/grossbande-machefers.js",
  "./data/hachebande-saga.js",
  "./data/hashut.js",
  "./data/khazalite.js",
  "./data/lames-songe-criard.js",
  "./data/lapideurs.js",
  "./data/legion-soufflesang.js",
  "./data/liges-charognards.js",
  "./data/mangeferraille.js",
  "./data/bande-cherche-gueule.js",
  "./data/sentinelles-embergard.js",
  "./data/fyrd-magmatique.js",
  "./data/slasher-host.js",
  "./data/compositions.js",
  "./data/meutegriffe-maletincelle.js",
  "./data/meutegriffe-rongefestin.js",
  "./data/ogors.js",
  "./data/ost-ecailles-etoiles.js",
  "./data/ost-lugubre.js",
  "./data/ost-tombes-raclemorts.js",
  "./data/packs-classiques.js",
  "./data/peloton-fusilier.js",
  "./data/phalange-etincelante.js",
  "./data/pietine-fracasse-murs.js",
  "./data/pillards-noir-serment.js",
  "./data/rodeurs-marecages.js",
  "./data/rodeurs-sang-solaire.js",
  "./data/sifonnes-mauvaise-lune.js",
  "./data/troupe-ecorche-coeur.js",
  "./data/troupeau-tzaangors.js",
  "./data/volee-ailes-fielleuses.js",
  "./data/yndrasta.js",
  "./data/zelotes-zenestra.js"
];
const IMAGES = [];
const IMG = "spearcounter-img-2";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});

// Photos : téléchargées une par une en arrière-plan, sans bloquer la mise à jour ; les anciennes sont retirées
async function prefetchImages(){
  const c = await caches.open(IMG), want = new Set(IMAGES.map(u => new URL(u, location).href));
  for (const k of await c.keys()) if (!want.has(k.url)) await c.delete(k);
  for (const u of IMAGES) {
    try { if (!(await c.match(u))) { const r = await fetch(u, {cache: "reload"}); if (r.ok) await c.put(u, r); } } catch (err) { return; }
  }
}

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== IMG).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
  prefetchImages();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Page : réseau d'abord (pour avoir la dernière version), cache si hors ligne
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }


  if (url.origin !== location.origin) return;

  // Manifeste : réseau d'abord (nom et icône toujours à jour)
  if (url.pathname.endsWith(".webmanifest")) {
    e.respondWith(fetch(req, {cache: "no-store"}).catch(() => caches.match(req, {ignoreSearch: true})));
    return;
  }

  // Photos : cache durable d'abord, sinon réseau (et mise en cache)
  if (url.pathname.includes("/img/")) {
    e.respondWith(caches.open(IMG).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }))));
    return;
  }

  // Scripts et données : réseau d'abord (toujours à jour avec la page), cache si hors ligne
  if (url.pathname.endsWith(".js")) {
    e.respondWith(
      fetch(req, {cache: "no-cache"})
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
        .catch(() => caches.match(req, {ignoreSearch: true}))
    );
    return;
  }

  // Autres fichiers du site (icônes) : cache d'abord
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
