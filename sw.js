// Service worker : fonctionnement hors ligne.
// Changer VERSION à chaque mise à jour du site pour forcer le rafraîchissement du cache.
// ASSETS (app et données, légers) : mis en cache à l'installation. IMAGES : cache séparé et durable, rempli en arrière-plan.
// Ces deux listes sont régénérées par sync.py.
const VERSION = "spearcounter-2.3.7";
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
  "./img/avant-garde-hurakaine/armee.jpg",
  "./img/avant-garde-hurakaine/charge-vent.jpg",
  "./img/avant-garde-hurakaine/esprit-vent.jpg",
  "./img/avant-garde-hurakaine/gardes-auraliens.jpg",
  "./img/avant-garde-hurakaine/mage-vent.jpg",
  "./img/avant-garde-kavalos/armee.jpg",
  "./img/avant-garde-kavalos/cohorte-teratique.jpg",
  "./img/avant-garde-kavalos/juchemorts.jpg",
  "./img/avant-garde-kavalos/suzerain-kavalos.jpg",
  "./img/bagnehorde-maudite/armee.jpg",
  "./img/bagnehorde-maudite/carognes.jpg",
  "./img/bagnehorde-maudite/ecumeurs.jpg",
  "./img/bagnehorde-maudite/esprit-tourmenteur.jpg",
  "./img/bagnehorde-maudite/lamemanes.jpg",
  "./img/bagnehorde-maudite/manes.jpg",
  "./img/beuglement-tyran/armee.jpg",
  "./img/beuglement-tyran/boute-fer.jpg",
  "./img/beuglement-tyran/crache-plomb.jpg",
  "./img/beuglement-tyran/gloutons.jpg",
  "./img/beuglement-tyran/mornecrocs.jpg",
  "./img/beuglement-tyran/tyran.jpg",
  "./img/bosquet-aigrecorce/armee.jpg",
  "./img/bosquet-aigrecorce/branchanteresse.jpg",
  "./img/bosquet-aigrecorce/chasseurs-kurnoth.jpg",
  "./img/bosquet-aigrecorce/sylve-revenants.jpg",
  "./img/bosquet-aigrecorce/sylviarque.jpg",
  "./img/carneguet/armee.jpg",
  "./img/carneguet/depeceurs.jpg",
  "./img/carneguet/fleaux-cryptes.jpg",
  "./img/carneguet/horreurs-cryptes.jpg",
  "./img/carneguet/sangtinelle.jpg",
  "./img/carnepelerins-sang-lies/armee.jpg",
  "./img/carnepelerins-sang-lies/guerriers-sang.jpg",
  "./img/carnepelerins-sang-lies/massacreurs.jpg",
  "./img/carnepelerins-sang-lies/pillards-sang.jpg",
  "./img/carnepelerins-sang-lies/pretre-carnage.jpg",
  "./img/cellule-bubonique/armee.jpg",
  "./img/cellule-bubonique/bete-nurgle.jpg",
  "./img/cellule-bubonique/credo-putrefange.jpg",
  "./img/cellule-bubonique/nurglings.jpg",
  "./img/cellule-bubonique/sorcier-gangreneur.jpg",
  "./img/chasse-pillemanes/allopex.jpg",
  "./img/chasse-pillemanes/armee.jpg",
  "./img/chasse-pillemanes/gardes-morrarr-2.jpg",
  "./img/chasse-pillemanes/hilotes-namarti.jpg",
  "./img/chasse-pillemanes/scruteur-ames.jpg",
  "./img/chasse-sanguivore/armee.jpg",
  "./img/chasse-sanguivore/chevaliers-sang.jpg",
  "./img/chasse-sanguivore/seigneur-vampire.jpg",
  "./img/chasse-sanguivore/squelettes.jpg",
  "./img/chasse-sanguivore/vargheists.jpg",
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
  "./img/compagnie-castelaine/armee.jpg",
  "./img/compagnie-castelaine/cavaliers.jpg",
  "./img/compagnie-castelaine/grand-canon.jpg",
  "./img/compagnie-castelaine/heaumefers.jpg",
  "./img/compagnie-castelaine/marechal-cavalier.jpg",
  "./img/confrerie-vigilante/armee.jpg",
  "./img/confrerie-vigilante/liberators.jpg",
  "./img/confrerie-vigilante/prosecutors.jpg",
  "./img/confrerie-vigilante/seigneur-veritant.jpg",
  "./img/confrerie-vigilante/seigneur-vigilant.jpg",
  "./img/coterie-lameflux/acolytes.jpg",
  "./img/coterie-lameflux/armee.jpg",
  "./img/coterie-lameflux/hurleurs.jpg",
  "./img/coterie-lameflux/incendiaires.jpg",
  "./img/coterie-lameflux/magister-disque.jpg",
  "./img/coterie-lameflux/tzaangors.jpg",
  "./img/coterie-ombre-khainite/armee.jpg",
  "./img/coterie-ombre-khainite/meduse.jpg",
  "./img/coterie-ombre-khainite/reine-massacre.jpg",
  "./img/coterie-ombre-khainite/reine-matriarche.jpg",
  "./img/coterie-ombre-khainite/rodeurs-ombre.jpg",
  "./img/coterie-ombre-khainite/soeurs-massacre.jpg",
  "./img/crixxit/armee.jpg",
  "./img/crixxit/crixxit.jpg",
  "./img/crixxit/egouts.jpg",
  "./img/crixxit/maitremort.jpg",
  "./img/crixxit/nocturnes.jpg",
  "./img/crocs-dieu-sang/armee.jpg",
  "./img/crocs-dieu-sang/griffes-karanak.jpg",
  "./img/crocs-dieu-sang/karanak.jpg",
  "./img/crocs-dieu-sang/molosses.jpg",
  "./img/defricheurs-grundstok/armee.jpg",
  "./img/defricheurs-grundstok/canonniere.jpg",
  "./img/defricheurs-grundstok/endringreeurs.jpg",
  "./img/defricheurs-grundstok/foudroyeurs.jpg",
  "./img/defricheurs-grundstok/maitre-endrinieur.jpg",
  "./img/delicieux-epicuriens/armee.jpg",
  "./img/delicieux-epicuriens/charnelles.jpg",
  "./img/delicieux-epicuriens/demonettes.jpg",
  "./img/delicieux-epicuriens/triple-discorde.jpg",
  "./img/delicieux-epicuriens/veneuses.jpg",
  "./img/double/bataille-droite.jpg",
  "./img/double/bataille-gauche.jpg",
  "./img/double/bataille.jpg",
  "./img/double/deux-plateaux.jpg",
  "./img/echelon-collecteur-dime/armee.jpg",
  "./img/echelon-collecteur-dime/faucheur-ames.jpg",
  "./img/echelon-collecteur-dime/garde-mortek.jpg",
  "./img/echelon-collecteur-dime/gothizzar.jpg",
  "./img/echelon-collecteur-dime/juchemorts.jpg",
  "./img/elite-mortisans/armee.jpg",
  "./img/elite-mortisans/immortis.jpg",
  "./img/elite-mortisans/morghasts.jpg",
  "./img/elite-mortisans/ossifacteur.jpg",
  "./img/elite-mortisans/rodeurs-necropole.jpg",
  "./img/feu-et-jade/art.jpg",
  "./img/feu-et-jade/bataille.jpg",
  "./img/feu-et-jade/decors.jpg",
  "./img/feu-et-jade/objectifs.jpg",
  "./img/force-marteau-celeste/amiral-arkanaute.jpg",
  "./img/force-marteau-celeste/armee.jpg",
  "./img/force-marteau-celeste/compagnie-arkanautes.jpg",
  "./img/force-marteau-celeste/fregate-arkanaute.jpg",
  "./img/force-marteau-celeste/stratogardes.jpg",
  "./img/garde-akhelienne-deferlante/armee.jpg",
  "./img/garde-akhelienne-deferlante/ecumeurs-namarti.jpg",
  "./img/garde-akhelienne-deferlante/gardes-ishlaen.jpg",
  "./img/garde-akhelienne-deferlante/gardes-morrarr.jpg",
  "./img/garde-akhelienne-deferlante/roi-akhelien.jpg",
  "./img/grognemeute-chasse/armee.jpg",
  "./img/grognemeute-chasse/cavalerie-grognemeute.jpg",
  "./img/grognemeute-chasse/grogneboss.jpg",
  "./img/grognemeute-chasse/rouleur-fauchesoleil.jpg",
  "./img/grognemeute-chasse/suite-vils-leus.jpg",
  "./img/grossbande-machefers/armee.jpg",
  "./img/grossbande-machefers/brutes.jpg",
  "./img/grossbande-machefers/durboyz.jpg",
  "./img/grossbande-machefers/megaboss.jpg",
  "./img/grossbande-machefers/rageux-brutes.jpg",
  "./img/hachebande-saga/armee.jpg",
  "./img/hachebande-saga/atregardes.jpg",
  "./img/hachebande-saga/belliforgeron.jpg",
  "./img/hachebande-saga/vulkites.jpg",
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
  "./img/lames-songe-criard/archers-ardillons.jpg",
  "./img/lames-songe-criard/armee.jpg",
  "./img/lames-songe-criard/eclatoracle.jpg",
  "./img/lames-songe-criard/slaangors.jpg",
  "./img/lames-songe-criard/traqueurs-fluidelames.jpg",
  "./img/lapideurs/armee.jpg",
  "./img/lapideurs/lance-rochers.jpg",
  "./img/legion-soufflesang/armee.jpg",
  "./img/legion-soufflesang/char-chaos.jpg",
  "./img/legion-soufflesang/chevaliers-chaos.jpg",
  "./img/legion-soufflesang/guerriers-chaos.jpg",
  "./img/legion-soufflesang/seigneur-chaos.jpg",
  "./img/liges-charognards/armee.jpg",
  "./img/liges-charognards/chevaliers-morbheg.jpg",
  "./img/liges-charognards/grand-regent.jpg",
  "./img/liges-charognards/prevots-cryptes.jpg",
  "./img/liges-charognards/varghulf.jpg",
  "./img/mangeferraille/armee.jpg",
  "./img/mangeferraille/gnoblars.jpg",
  "./img/mangeferraille/lance-ferraille.jpg",
  "./img/mangeferraille/trappeurs.jpg",
  "./img/mangeferraille/ventres-durs.jpg",
  "./img/meutegriffe-maletincelle/armee.jpg",
  "./img/meutegriffe-maletincelle/canon-malefoudre.jpg",
  "./img/meutegriffe-maletincelle/colosses-choc.jpg",
  "./img/meutegriffe-maletincelle/prophete-gris.jpg",
  "./img/meutegriffe-maletincelle/rats-clans.jpg",
  "./img/meutegriffe-rongefestin/armee.jpg",
  "./img/meutegriffe-rongefestin/griffarque.jpg",
  "./img/meutegriffe-rongefestin/ingenieur.jpg",
  "./img/meutegriffe-rongefestin/prophete-gris.jpg",
  "./img/meutegriffe-rongefestin/rats-clans.jpg",
  "./img/meutegriffe-rongefestin/rats-ogors.jpg",
  "./img/ogors/armee.jpg",
  "./img/ogors/cavalerie.jpg",
  "./img/ogors/gloutons.jpg",
  "./img/ogors/tyran.jpg",
  "./img/ogors/ventres-durs.jpg",
  "./img/ost-ecailles-etoiles/armee.jpg",
  "./img/ost-ecailles-etoiles/guerriers-saurus.jpg",
  "./img/ost-ecailles-etoiles/kroxigor.jpg",
  "./img/ost-ecailles-etoiles/sang-ancien-carnosaure.jpg",
  "./img/ost-lugubre/armee.jpg",
  "./img/ost-lugubre/pesticrates.jpg",
  "./img/ost-lugubre/portepestes.jpg",
  "./img/ost-lugubre/rouillarque.jpg",
  "./img/ost-lugubre/scribe-avarieur.jpg",
  "./img/ost-tombes-raclemorts/armee.jpg",
  "./img/ost-tombes-raclemorts/chevaliers-tertres.jpg",
  "./img/ost-tombes-raclemorts/garde-tertres.jpg",
  "./img/ost-tombes-raclemorts/roi-revenant.jpg",
  "./img/ost-tombes-raclemorts/squelettes.jpg",
  "./img/peloton-fusilier/armee.jpg",
  "./img/peloton-fusilier/chasseurs.jpg",
  "./img/peloton-fusilier/forgeguerre.jpg",
  "./img/peloton-fusilier/fusil-major.jpg",
  "./img/peloton-fusilier/fusiliers.jpg",
  "./img/phalange-etincelante/armee.jpg",
  "./img/phalange-etincelante/cathallar.jpg",
  "./img/phalange-etincelante/gardes-auraliens.jpg",
  "./img/phalange-etincelante/maitres-lames.jpg",
  "./img/phalange-etincelante/sentinelles.jpg",
  "./img/pietine-fracasse-murs/armee.jpg",
  "./img/pietine-fracasse-murs/gargant-broyeur.jpg",
  "./img/pietine-fracasse-murs/gargant.jpg",
  "./img/pillards-noir-serment/armee.jpg",
  "./img/pillards-noir-serment/cavaliers-cruels.jpg",
  "./img/pillards-noir-serment/maraudeurs.jpg",
  "./img/pillards-noir-serment/reine.jpg",
  "./img/pillards-noir-serment/saccageurs.jpg",
  "./img/rodeurs-marecages/armee.jpg",
  "./img/rodeurs-marecages/bosskitu.jpg",
  "./img/rodeurs-marecages/embrocheurs.jpg",
  "./img/rodeurs-marecages/empaleuse.jpg",
  "./img/rodeurs-marecages/eventreurs.jpg",
  "./img/rodeurs-marecages/nobskur.jpg",
  "./img/rodeurs-sang-solaire/armee.jpg",
  "./img/rodeurs-sang-solaire/chasseurs-huanchi.jpg",
  "./img/rodeurs-sang-solaire/guerriers-saurus.jpg",
  "./img/rodeurs-sang-solaire/meute-sang-solaire.jpg",
  "./img/rodeurs-sang-solaire/rejeton-chotec.jpg",
  "./img/rodeurs-sang-solaire/terrapteres.jpg",
  "./img/sable-et-os/art.jpg",
  "./img/sable-et-os/bataille.jpg",
  "./img/sable-et-os/decors.jpg",
  "./img/sable-et-os/objectifs.jpg",
  "./img/sifonnes-mauvaise-lune/armee.jpg",
  "./img/sifonnes-mauvaise-lune/loufboss.jpg",
  "./img/sifonnes-mauvaise-lune/squigaliers.jpg",
  "./img/sifonnes-mauvaise-lune/troggoths.jpg",
  "./img/sifonnes-mauvaise-lune/troueurs.jpg",
  "./img/troupe-ecorche-coeur/armee.jpg",
  "./img/troupe-ecorche-coeur/conjurateurs.jpg",
  "./img/troupe-ecorche-coeur/erinyes.jpg",
  "./img/troupe-ecorche-coeur/ferecaille.jpg",
  "./img/troupe-ecorche-coeur/rodeuses.jpg",
  "./img/troupeau-tzaangors/armee.jpg",
  "./img/troupeau-tzaangors/chamane-tzaangor.jpg",
  "./img/troupeau-tzaangors/tzaangors-eclaires.jpg",
  "./img/troupeau-tzaangors/tzaangors-flambeciel.jpg",
  "./img/troupeau-tzaangors/tzaangors.jpg",
  "./img/volee-ailes-fielleuses/archers-diaphanes.jpg",
  "./img/volee-ailes-fielleuses/archi-revenant.jpg",
  "./img/volee-ailes-fielleuses/armee.jpg",
  "./img/volee-ailes-fielleuses/lanciers-coursefiel.jpg",
  "./img/volee-ailes-fielleuses/veneurs-revenants.jpg",
  "./img/yndrasta/annihilators.jpg",
  "./img/yndrasta/armee.jpg",
  "./img/yndrasta/char-foudroyeur.jpg",
  "./img/yndrasta/vexillor.jpg",
  "./img/yndrasta/vincitors.jpg",
  "./img/yndrasta/yndrasta.jpg",
  "./img/zelotes-zenestra/armee.jpg",
  "./img/zelotes-zenestra/chevalier-eminent.jpg",
  "./img/zelotes-zenestra/heaumefers.jpg",
  "./img/zelotes-zenestra/marechal.jpg",
  "./img/zelotes-zenestra/prestelame.jpg",
  "./img/zelotes-zenestra/zenestra.jpg"
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
