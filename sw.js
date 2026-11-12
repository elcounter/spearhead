// Service worker : fonctionnement hors ligne.
// Changer VERSION à chaque mise à jour du site pour forcer le rafraîchissement du cache.
// ASSETS (app et données, légers) : mis en cache à l'installation. IMAGES : cache séparé et durable, rempli en arrière-plan.
// Ces deux listes sont régénérées par sync.py.
const VERSION = "spearcounter-2.7.3";
const ASSETS = [
  "./",
  "./index.html",
  "./partie.js",
  "./compte.js",
  "./icons/app-warcounter.png",
  "./icons/sc3-apple-touch-icon.png",
  "./icons/sc3-icon-192.png",
  "./icons/sc3-icon-512.png",
  "./icons/sc3-maskable-512.png",
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
const IMAGES = [
  "./img/avant-garde-hurakaine/armee.webp",
  "./img/avant-garde-hurakaine/charge-vent.webp",
  "./img/avant-garde-hurakaine/esprit-vent.webp",
  "./img/avant-garde-hurakaine/gardes-auraliens.webp",
  "./img/avant-garde-hurakaine/mage-vent.webp",
  "./img/avant-garde-kavalos/armee.webp",
  "./img/avant-garde-kavalos/cohorte-teratique.webp",
  "./img/avant-garde-kavalos/juchemorts.webp",
  "./img/avant-garde-kavalos/suzerain-kavalos.webp",
  "./img/bagnehorde-maudite/armee.webp",
  "./img/bagnehorde-maudite/carognes.webp",
  "./img/bagnehorde-maudite/ecumeurs.webp",
  "./img/bagnehorde-maudite/esprit-tourmenteur.webp",
  "./img/bagnehorde-maudite/lamemanes.webp",
  "./img/bagnehorde-maudite/manes.webp",
  "./img/beuglement-tyran/armee.webp",
  "./img/beuglement-tyran/boute-fer.webp",
  "./img/beuglement-tyran/crache-plomb.webp",
  "./img/beuglement-tyran/gloutons.webp",
  "./img/beuglement-tyran/mornecrocs.webp",
  "./img/beuglement-tyran/tyran.webp",
  "./img/bosquet-aigrecorce/armee.webp",
  "./img/bosquet-aigrecorce/branchanteresse.webp",
  "./img/bosquet-aigrecorce/chasseurs-kurnoth.webp",
  "./img/bosquet-aigrecorce/sylve-revenants.webp",
  "./img/bosquet-aigrecorce/sylviarque.webp",
  "./img/carneguet/armee.webp",
  "./img/carneguet/depeceurs.webp",
  "./img/carneguet/fleaux-cryptes.webp",
  "./img/carneguet/horreurs-cryptes.webp",
  "./img/carneguet/sangtinelle.webp",
  "./img/carnepelerins-sang-lies/armee.webp",
  "./img/carnepelerins-sang-lies/guerriers-sang.webp",
  "./img/carnepelerins-sang-lies/massacreurs.webp",
  "./img/carnepelerins-sang-lies/pillards-sang.webp",
  "./img/carnepelerins-sang-lies/pretre-carnage.webp",
  "./img/cellule-bubonique/armee.webp",
  "./img/cellule-bubonique/bete-nurgle.webp",
  "./img/cellule-bubonique/credo-putrefange.webp",
  "./img/cellule-bubonique/nurglings.webp",
  "./img/cellule-bubonique/sorcier-gangreneur.webp",
  "./img/chasse-pillemanes/allopex.webp",
  "./img/chasse-pillemanes/armee.webp",
  "./img/chasse-pillemanes/gardes-morrarr-2.webp",
  "./img/chasse-pillemanes/hilotes-namarti.webp",
  "./img/chasse-pillemanes/scruteur-ames.webp",
  "./img/chasse-sanguivore/armee.webp",
  "./img/chasse-sanguivore/chevaliers-sang.webp",
  "./img/chasse-sanguivore/seigneur-vampire.webp",
  "./img/chasse-sanguivore/squelettes.webp",
  "./img/chasse-sanguivore/vargheists.webp",
  "./img/cite/campagne.webp",
  "./img/cite/decors.webp",
  "./img/cite/deploiement.webp",
  "./img/cite/plateau.webp",
  "./img/cite/r-barricade.webp",
  "./img/cite/r-caisse.webp",
  "./img/cite/r-chausse.webp",
  "./img/cite/r-egout.webp",
  "./img/cite/r-tonneau.webp",
  "./img/cite/reliques.webp",
  "./img/compagnie-castelaine/armee.webp",
  "./img/compagnie-castelaine/cavaliers.webp",
  "./img/compagnie-castelaine/grand-canon.webp",
  "./img/compagnie-castelaine/heaumefers.webp",
  "./img/compagnie-castelaine/marechal-cavalier.webp",
  "./img/confrerie-vigilante/armee.webp",
  "./img/confrerie-vigilante/liberators.webp",
  "./img/confrerie-vigilante/prosecutors.webp",
  "./img/confrerie-vigilante/seigneur-veritant.webp",
  "./img/confrerie-vigilante/seigneur-vigilant.webp",
  "./img/coterie-lameflux/acolytes.webp",
  "./img/coterie-lameflux/armee.webp",
  "./img/coterie-lameflux/hurleurs.webp",
  "./img/coterie-lameflux/incendiaires.webp",
  "./img/coterie-lameflux/magister-disque.webp",
  "./img/coterie-lameflux/tzaangors.webp",
  "./img/coterie-ombre-khainite/armee.webp",
  "./img/coterie-ombre-khainite/meduse.webp",
  "./img/coterie-ombre-khainite/reine-massacre.webp",
  "./img/coterie-ombre-khainite/reine-matriarche.webp",
  "./img/coterie-ombre-khainite/rodeurs-ombre.webp",
  "./img/coterie-ombre-khainite/soeurs-massacre.webp",
  "./img/crixxit/armee.webp",
  "./img/crixxit/crixxit.webp",
  "./img/crixxit/egouts.webp",
  "./img/crixxit/maitremort.webp",
  "./img/crixxit/nocturnes.webp",
  "./img/crocs-dieu-sang/armee.webp",
  "./img/crocs-dieu-sang/griffes-karanak.webp",
  "./img/crocs-dieu-sang/karanak.webp",
  "./img/crocs-dieu-sang/molosses.webp",
  "./img/defricheurs-grundstok/armee.webp",
  "./img/defricheurs-grundstok/canonniere.webp",
  "./img/defricheurs-grundstok/endringreeurs.webp",
  "./img/defricheurs-grundstok/foudroyeurs.webp",
  "./img/defricheurs-grundstok/maitre-endrinieur.webp",
  "./img/delicieux-epicuriens/armee.webp",
  "./img/delicieux-epicuriens/charnelles.webp",
  "./img/delicieux-epicuriens/demonettes.webp",
  "./img/delicieux-epicuriens/triple-discorde.webp",
  "./img/delicieux-epicuriens/veneuses.webp",
  "./img/double/bataille-droite.webp",
  "./img/double/bataille-gauche.webp",
  "./img/double/bataille.webp",
  "./img/double/deux-plateaux.webp",
  "./img/echelon-collecteur-dime/armee.webp",
  "./img/echelon-collecteur-dime/faucheur-ames.webp",
  "./img/echelon-collecteur-dime/garde-mortek.webp",
  "./img/echelon-collecteur-dime/gothizzar.webp",
  "./img/echelon-collecteur-dime/juchemorts.webp",
  "./img/elite-mortisans/armee.webp",
  "./img/elite-mortisans/immortis.webp",
  "./img/elite-mortisans/morghasts.webp",
  "./img/elite-mortisans/ossifacteur.webp",
  "./img/elite-mortisans/rodeurs-necropole.webp",
  "./img/feu-et-jade/art.webp",
  "./img/feu-et-jade/bataille.webp",
  "./img/feu-et-jade/decors.webp",
  "./img/feu-et-jade/objectifs.webp",
  "./img/force-marteau-celeste/amiral-arkanaute.webp",
  "./img/force-marteau-celeste/armee.webp",
  "./img/force-marteau-celeste/compagnie-arkanautes.webp",
  "./img/force-marteau-celeste/fregate-arkanaute.webp",
  "./img/force-marteau-celeste/stratogardes.webp",
  "./img/garde-akhelienne-deferlante/armee.webp",
  "./img/garde-akhelienne-deferlante/ecumeurs-namarti.webp",
  "./img/garde-akhelienne-deferlante/gardes-ishlaen.webp",
  "./img/garde-akhelienne-deferlante/gardes-morrarr.webp",
  "./img/garde-akhelienne-deferlante/roi-akhelien.webp",
  "./img/grognemeute-chasse/armee.webp",
  "./img/grognemeute-chasse/cavalerie-grognemeute.webp",
  "./img/grognemeute-chasse/grogneboss.webp",
  "./img/grognemeute-chasse/rouleur-fauchesoleil.webp",
  "./img/grognemeute-chasse/suite-vils-leus.webp",
  "./img/grossbande-machefers/armee.webp",
  "./img/grossbande-machefers/brutes.webp",
  "./img/grossbande-machefers/durboyz.webp",
  "./img/grossbande-machefers/megaboss.webp",
  "./img/grossbande-machefers/rageux-brutes.webp",
  "./img/hachebande-saga/armee.webp",
  "./img/hachebande-saga/atregardes.webp",
  "./img/hachebande-saga/belliforgeron.webp",
  "./img/hachebande-saga/vulkites.webp",
  "./img/hashut/armee.webp",
  "./img/hashut/bombarde.webp",
  "./img/hashut/cohorte.webp",
  "./img/hashut/despote.webp",
  "./img/hashut/dominotaure.webp",
  "./img/khazalite/armee.webp",
  "./img/khazalite/boucliers.webp",
  "./img/khazalite/canon.webp",
  "./img/khazalite/gholems.webp",
  "./img/khazalite/hjulda.webp",
  "./img/lames-songe-criard/archers-ardillons.webp",
  "./img/lames-songe-criard/armee.webp",
  "./img/lames-songe-criard/eclatoracle.webp",
  "./img/lames-songe-criard/slaangors.webp",
  "./img/lames-songe-criard/traqueurs-fluidelames.webp",
  "./img/lapideurs/armee.webp",
  "./img/lapideurs/lance-rochers.webp",
  "./img/legion-soufflesang/armee.webp",
  "./img/legion-soufflesang/char-chaos.webp",
  "./img/legion-soufflesang/chevaliers-chaos.webp",
  "./img/legion-soufflesang/guerriers-chaos.webp",
  "./img/legion-soufflesang/seigneur-chaos.webp",
  "./img/liges-charognards/armee.webp",
  "./img/liges-charognards/chevaliers-morbheg.webp",
  "./img/liges-charognards/grand-regent.webp",
  "./img/liges-charognards/prevots-cryptes.webp",
  "./img/liges-charognards/varghulf.webp",
  "./img/mangeferraille/armee.webp",
  "./img/mangeferraille/gnoblars.webp",
  "./img/mangeferraille/lance-ferraille.webp",
  "./img/mangeferraille/trappeurs.webp",
  "./img/mangeferraille/ventres-durs.webp",
  "./img/meutegriffe-maletincelle/armee.webp",
  "./img/meutegriffe-maletincelle/canon-malefoudre.webp",
  "./img/meutegriffe-maletincelle/colosses-choc.webp",
  "./img/meutegriffe-maletincelle/prophete-gris.webp",
  "./img/meutegriffe-maletincelle/rats-clans.webp",
  "./img/meutegriffe-rongefestin/armee.webp",
  "./img/meutegriffe-rongefestin/griffarque.webp",
  "./img/meutegriffe-rongefestin/ingenieur.webp",
  "./img/meutegriffe-rongefestin/prophete-gris.webp",
  "./img/meutegriffe-rongefestin/rats-clans.webp",
  "./img/meutegriffe-rongefestin/rats-ogors.webp",
  "./img/ogors/armee.webp",
  "./img/ogors/cavalerie.webp",
  "./img/ogors/gloutons.webp",
  "./img/ogors/tyran.webp",
  "./img/ogors/ventres-durs.webp",
  "./img/ost-ecailles-etoiles/armee.webp",
  "./img/ost-ecailles-etoiles/guerriers-saurus.webp",
  "./img/ost-ecailles-etoiles/kroxigor.webp",
  "./img/ost-ecailles-etoiles/sang-ancien-carnosaure.webp",
  "./img/ost-lugubre/armee.webp",
  "./img/ost-lugubre/pesticrates.webp",
  "./img/ost-lugubre/portepestes.webp",
  "./img/ost-lugubre/rouillarque.webp",
  "./img/ost-lugubre/scribe-avarieur.webp",
  "./img/ost-tombes-raclemorts/armee.webp",
  "./img/ost-tombes-raclemorts/chevaliers-tertres.webp",
  "./img/ost-tombes-raclemorts/garde-tertres.webp",
  "./img/ost-tombes-raclemorts/roi-revenant.webp",
  "./img/ost-tombes-raclemorts/squelettes.webp",
  "./img/peloton-fusilier/armee.webp",
  "./img/peloton-fusilier/chasseurs.webp",
  "./img/peloton-fusilier/forgeguerre.webp",
  "./img/peloton-fusilier/fusil-major.webp",
  "./img/peloton-fusilier/fusiliers.webp",
  "./img/phalange-etincelante/armee.webp",
  "./img/phalange-etincelante/cathallar.webp",
  "./img/phalange-etincelante/gardes-auraliens.webp",
  "./img/phalange-etincelante/maitres-lames.webp",
  "./img/phalange-etincelante/sentinelles.webp",
  "./img/pietine-fracasse-murs/armee.webp",
  "./img/pietine-fracasse-murs/gargant-broyeur.webp",
  "./img/pietine-fracasse-murs/gargant.webp",
  "./img/pillards-noir-serment/armee.webp",
  "./img/pillards-noir-serment/cavaliers-cruels.webp",
  "./img/pillards-noir-serment/maraudeurs.webp",
  "./img/pillards-noir-serment/reine.webp",
  "./img/pillards-noir-serment/saccageurs.webp",
  "./img/rodeurs-marecages/armee.webp",
  "./img/rodeurs-marecages/bosskitu.webp",
  "./img/rodeurs-marecages/embrocheurs.webp",
  "./img/rodeurs-marecages/empaleuse.webp",
  "./img/rodeurs-marecages/eventreurs.webp",
  "./img/rodeurs-marecages/nobskur.webp",
  "./img/rodeurs-sang-solaire/armee.webp",
  "./img/rodeurs-sang-solaire/chasseurs-huanchi.webp",
  "./img/rodeurs-sang-solaire/guerriers-saurus.webp",
  "./img/rodeurs-sang-solaire/meute-sang-solaire.webp",
  "./img/rodeurs-sang-solaire/rejeton-chotec.webp",
  "./img/rodeurs-sang-solaire/terrapteres.webp",
  "./img/sable-et-os/art.webp",
  "./img/sable-et-os/bataille.webp",
  "./img/sable-et-os/decors.webp",
  "./img/sable-et-os/objectifs.webp",
  "./img/sifonnes-mauvaise-lune/armee.webp",
  "./img/sifonnes-mauvaise-lune/loufboss.webp",
  "./img/sifonnes-mauvaise-lune/squigaliers.webp",
  "./img/sifonnes-mauvaise-lune/troggoths.webp",
  "./img/sifonnes-mauvaise-lune/troueurs.webp",
  "./img/troupe-ecorche-coeur/armee.webp",
  "./img/troupe-ecorche-coeur/conjurateurs.webp",
  "./img/troupe-ecorche-coeur/erinyes.webp",
  "./img/troupe-ecorche-coeur/ferecaille.webp",
  "./img/troupe-ecorche-coeur/rodeuses.webp",
  "./img/troupeau-tzaangors/armee.webp",
  "./img/troupeau-tzaangors/chamane-tzaangor.webp",
  "./img/troupeau-tzaangors/tzaangors-eclaires.webp",
  "./img/troupeau-tzaangors/tzaangors-flambeciel.webp",
  "./img/troupeau-tzaangors/tzaangors.webp",
  "./img/volee-ailes-fielleuses/archers-diaphanes.webp",
  "./img/volee-ailes-fielleuses/archi-revenant.webp",
  "./img/volee-ailes-fielleuses/armee.webp",
  "./img/volee-ailes-fielleuses/lanciers-coursefiel.webp",
  "./img/volee-ailes-fielleuses/veneurs-revenants.webp",
  "./img/yndrasta/annihilators.webp",
  "./img/yndrasta/armee.webp",
  "./img/yndrasta/char-foudroyeur.webp",
  "./img/yndrasta/vexillor.webp",
  "./img/yndrasta/vincitors.webp",
  "./img/yndrasta/yndrasta.webp",
  "./img/zelotes-zenestra/armee.webp",
  "./img/zelotes-zenestra/chevalier-eminent.webp",
  "./img/zelotes-zenestra/heaumefers.webp",
  "./img/zelotes-zenestra/marechal.webp",
  "./img/zelotes-zenestra/prestelame.webp",
  "./img/zelotes-zenestra/zenestra.webp"
];
const IMG = "spearcounter-img";

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
