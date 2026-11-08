// Service worker : fonctionnement hors ligne.
// Changer VERSION à chaque mise à jour du site pour forcer le rafraîchissement du cache.
// Ajouter ici tout nouveau fichier de données (data/) et photo (img/).
const VERSION = "spearcounter-1.8.0";
const ASSETS = [
  "./",
  "./index.html",
  "./partie.js",
  "./icons/sc-icon-192.png",
  "./icons/sc-icon-512.png",
  "./icons/sc-maskable-512.png",
  "./icons/sc-apple-touch-icon.png",
  "./data/cite-de-cendre.js",
  "./data/crixxit.js",
  "./data/hashut.js",
  "./data/khazalite.js",
  "./data/ogors.js",
  "./data/packs-classiques.js",
  "./img/cite/campagne.jpg",
  "./img/cite/decors.jpg",
  "./img/cite/deploiement.jpg",
  "./img/cite/plateau.jpg",
  "./img/cite/r-barricade.jpg",
  "./img/cite/r-caisse.jpg",
  "./img/cite/r-chausse.jpg",
  "./img/cite/r-egout.jpg",
  "./img/cite/r-tonneau.jpg",
  "./img/cite/reliques.jpg",
  "./img/crixxit/armee.jpg",
  "./img/crixxit/crixxit.jpg",
  "./img/crixxit/egouts.jpg",
  "./img/crixxit/maitremort.jpg",
  "./img/crixxit/nocturnes.jpg",
  "./img/double/bataille-droite.jpg",
  "./img/double/bataille-gauche.jpg",
  "./img/double/bataille.jpg",
  "./img/double/deux-plateaux.jpg",
  "./img/feu-et-jade/art.jpg",
  "./img/feu-et-jade/bataille.jpg",
  "./img/feu-et-jade/decors.jpg",
  "./img/feu-et-jade/objectifs.jpg",
  "./img/hashut/armee.jpg",
  "./img/hashut/bombarde.jpg",
  "./img/hashut/cohorte.jpg",
  "./img/hashut/despote.jpg",
  "./img/hashut/dominotaure.jpg",
  "./img/khazalite/armee.jpg",
  "./img/khazalite/boucliers.jpg",
  "./img/khazalite/canon.jpg",
  "./img/khazalite/gholems.jpg",
  "./img/khazalite/hjulda.jpg",
  "./img/ogors/armee.jpg",
  "./img/ogors/cavalerie.jpg",
  "./img/ogors/gloutons.jpg",
  "./img/ogors/tyran.jpg",
  "./img/ogors/ventres-durs.jpg",
  "./img/sable-et-os/art.jpg",
  "./img/sable-et-os/bataille.jpg",
  "./img/sable-et-os/decors.jpg",
  "./img/sable-et-os/objectifs.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
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

  // Polices Google : cache puis mise à jour en arrière-plan
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(VERSION).then(c => c.match(req).then(hit => {
        const net = fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      }))
    );
    return;
  }

  // Manifeste : réseau d'abord (nom et icône toujours à jour)
  if (url.origin === location.origin && url.pathname.endsWith(".webmanifest")) {
    e.respondWith(fetch(req, {cache: "no-store"}).catch(() => caches.match(req, {ignoreSearch: true})));
    return;
  }

  // Fichiers du site : cache d'abord
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
  }
});
