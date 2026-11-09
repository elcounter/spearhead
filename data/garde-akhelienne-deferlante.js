// Spearhead : Abyssaux Idoneths – Garde Akhélienne Déferlante
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "garde-akhelienne-deferlante",
  name: "Garde Akhélienne Déferlante",
  faction: "Abyssaux Idoneths",
  cover: "img/garde-akhelienne-deferlante/armee.jpg",
  photos: { armee: "img/garde-akhelienne-deferlante/armee.jpg", "ecumeurs-namarti": "img/garde-akhelienne-deferlante/ecumeurs-namarti.jpg", "gardes-ishlaen": "img/garde-akhelienne-deferlante/gardes-ishlaen.jpg", "gardes-morrarr": "img/garde-akhelienne-deferlante/gardes-morrarr.jpg", "roi-akhelien": "img/garde-akhelienne-deferlante/roi-akhelien.jpg" },
  units: [
    { id: "roi-akhelien", en: "Roi Akhélien", stats: { M: '14\"', S: 7, C: 2, Sv: "3+" },
      weapons: [{ n: "Épée ou Lance Akhélienne", range: "Mêlée", a: 5, h: 3, w: 3, r: 2, d: "2", crit: "none" }, { n: "Morsure d'Abîmar", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "2", crit: "none", extra: ["Compagnon"] }],
      abilities: [{ c: "passive", t: "Passif", n: "Majesté Guerrière", x: ["Effet : Ajoutez 1 aux jets de touche pour les unités amies entièrement à 12\" de ce HÉROS."] }],
      kw: "HÉROS, CAVALERIE" },
    { id: "gardes-morrarr", en: "Gardes Morrarr Akhéliens", stats: { M: '14\"', S: 3, C: 1, Sv: "4+" },
      weapons: [{ n: "Lance Choc", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none", extra: ["Charge (+1 Dégât)"] }], abilities: [], kw: "CAVALERIE" },
    { id: "gardes-ishlaen", en: "Gardes Ishlaen Akhéliens", stats: { M: '14\"', S: 3, C: 1, Sv: "4+" },
      weapons: [{ n: "Lame et Bouclier", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Barrière Biovoltaïque", x: ["Effet : Cette unité a une PROTECTION (5+) tant qu'elle est entièrement à 6\" d'un Roi Akhélien ami."] }],
      kw: "CAVALERIE" },
    { id: "ecumeurs-namarti", en: "Écumeurs Namarti", stats: { M: '6\"', S: 1, C: 1, Sv: "5+" },
      weapons: [{ n: "Arc Namarti", range: '18\"', a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }, { n: "Lame", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "passive", t: "Passif", n: "Courants Marins", x: ["Effet : Les unités amies peuvent traverser les modèles ennemis lors d'un mouvement normal, mais doivent finir à plus de 3\" d'eux."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "charge", t: "Une Fois par Tour, Votre Phase de Charge", n: "Déferlante", x: ["Annonce : Choisissez une unité de Gardes Morrarr amie.", "Effet : La cible peut relancer ses jets de charge et a FRAPPE EN PREMIER si elle charge."] },
      { c: "passive", t: "Passif", n: "Garde du Corps", x: ["Effet : Tant qu'une unité de Gardes Ishlaen est entièrement à 3\" de votre général, votre général a une PROTECTION (5+)."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Abîmar Féroce", x: ["Effet : Ajoutez 1 à la Dégâts de la Morsure d'Abîmar de votre général."] },
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Victoire avant la Gloire", x: ["Effet : Votre général a FRAPPE EN PREMIER à cette phase."] }
    ]}
  ]},
  when: { "Courants Marins": ["move"], "Déferlante": ["charge"], "Garde du Corps": ["shoot-opp", "fight-opp"], "Abîmar Féroce": ["fight"], "Victoire avant la Gloire": ["fight", "fight-opp"], "Majesté Guerrière": ["fight"], "Barrière Biovoltaïque": ["shoot-opp", "fight-opp"] }
});
