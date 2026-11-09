// Spearhead : Magnats Kharadrons – Défricheurs Grundstok
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "defricheurs-grundstok",
  name: "Défricheurs Grundstok",
  faction: "Magnats Kharadrons",
  cover: "img/defricheurs-grundstok/armee.jpg",
  photos: { armee: "img/defricheurs-grundstok/armee.jpg", canonniere: "img/defricheurs-grundstok/canonniere.jpg", endringreeurs: "img/defricheurs-grundstok/endringreeurs.jpg", foudroyeurs: "img/defricheurs-grundstok/foudroyeurs.jpg", "maitre-endrinieur": "img/defricheurs-grundstok/maitre-endrinieur.jpg" },
  units: [
    { id: "maitre-endrinieur", en: "Maître-endrinieur avec Dirigeable Dorsal", stats: { M: '12\"', S: 5, C: 2, Sv: "3+" },
      weapons: [{ n: "Aethermatic Saw", range: "Mêlée", a: 3, h: 3, w: 3, r: 2, d: "2", crit: "none" }, { n: "Pistol", range: '9\"', a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Réparation d'Endrin", x: ["Annonce : Choisissez une MACHINE DE GUERRE amie entièrement à 3\".", "Effet : Soignez (D3) la cible."] }],
      kw: "HÉROS, INFANTERIE, VOL" },
    { id: "foudroyeurs", en: "Foudroyeurs Grundstok", stats: { M: '4\"', S: 1, C: 1, Sv: "4+" },
      weapons: [{ n: "Grundstok Mortar / Rifle", range: '18\"', a: 1, h: 3, w: 3, r: 1, d: "D3", crit: "none" }, { n: "Hache", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" },
    { id: "canonniere", en: "Canonnère Grundstok", stats: { M: '12\"', S: 8, C: 2, Sv: "3+" },
      weapons: [{ n: "Canons Aether", range: '18\"', a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }, { n: "Éperon", range: "Mêlée", a: 2, h: 4, w: 3, r: 1, d: "2", crit: "none" }], abilities: [], kw: "MACHINE DE GUERRE, VOL" },
    { id: "endringreeurs", en: "Endringréeurs", stats: { M: '4\"', S: 2, C: 1, Sv: "4+" },
      weapons: [{ n: "Aethermatic Weapons", range: '12\"', a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }, { n: "Tools", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "passive", t: "Passif", n: "Avant-garde Grundstok", x: ["Effet : Les unités amies peuvent se déployer à 3\" plus loin dans le territoire ami."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "shoot", t: "Une Fois par Tour, Votre Phase de Tir", n: "Bazz-Grummund", x: ["Annonce : Choisissez une unité de Foudroyeurs amie.", "Effet : Ajoutez 1 à la Perforation de ses armes de tir pour le restant de la phase."] },
      { c: "passive", t: "Passif", n: "Munitions Éthermatiques", x: ["Effet : Les armes de tir de la Canonnère Grundstok amie ont Crit (Mortel)."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Dirigeable Amélioré", x: ["Effet : Votre général a Mouvement 14\"."] },
      { c: "hero", t: "Une Fois par Bataille, Votre Phase des Héros", n: "Contrat Grundcorps", x: ["Effet : Ramenez D3 figurines tuées dans une unité de Foudroyeurs amie."] }
    ]}
  ]},
  when: { "Avant-garde Grundstok": ["deploy"], "Bazz-Grummund": ["shoot"], "Munitions Éthermatiques": ["shoot"], "Dirigeable Amélioré": ["move"], "Contrat Grundcorps": ["hero"], "Réparation d'Endrin": ["hero"] }
});
