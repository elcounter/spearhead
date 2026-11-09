// Spearhead : Esclaves des Ténèbres – Légion de Soufflesang
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "legion-soufflesang",
  name: "Légion de Soufflesang",
  faction: "Esclaves des Ténèbres",
  cover: "img/legion-soufflesang/armee.jpg",
  photos: { armee: "img/legion-soufflesang/armee.jpg", char-chaos: "img/legion-soufflesang/char-chaos.jpg", chevaliers-chaos: "img/legion-soufflesang/chevaliers-chaos.jpg", guerriers-chaos: "img/legion-soufflesang/guerriers-chaos.jpg", seigneur-chaos: "img/legion-soufflesang/seigneur-chaos.jpg" },
  units: [
    { id: "seigneur-chaos", en: "Seigneur du Chaos", stats: { M: '5\"', S: 6, C: 2, Sv: "3+" },
      weapons: [{ n: "Fauchard du Chaos", range: "Mêlée", a: 5, h: 3, w: 3, r: 2, d: "2", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Œil des Dieux", x: ["Effet : Faites un jet sur le tableau de l'Œil des Dieux. Cette unité gagne l'aptitude passive correspondante."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "char-chaos", en: "Char du Chaos", stats: { M: '10\"', S: 8, C: 2, Sv: "3+" },
      weapons: [{ n: "Fléaux et Fouets", range: "Mêlée", a: 6, h: 3, w: 3, r: 1, d: "1", crit: "none" }, { n: "Sabots", range: "Mêlée", a: 4, h: 4, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }],
      abilities: [{ c: "charge", t: "N'importe Quelle Phase de Charge", n: "Écrasement", x: ["Annonce : Si cette unité a chargé, choisissez une unité ennemie en mêlée.", "Effet : Jetez un dé. Sur 2+, infligez D3 dégâts mortels."] }],
      kw: "CHAR, CAVALERIE" },
    { id: "guerriers-chaos", en: "Guerriers du Chaos", stats: { M: '5\"', S: 2, C: 1, Sv: "3+" },
      weapons: [{ n: "Armes du Chaos", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" },
    { id: "chevaliers-chaos", en: "Chevaliers du Chaos", stats: { M: '10\"', S: 3, C: 1, Sv: "3+" },
      weapons: [{ n: "Lances du Chaos", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] }, { n: "Sabots", range: "Mêlée", a: 2, h: 4, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }],
      abilities: [], kw: "CAVALERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "hero", t: "Votre Phase des Héros", n: "Chemin de la Gloire", x: ["Effet : Choisissez une unité amie. Faites un jet sur le tableau de l'Œil des Dieux."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "passive", t: "Passif", n: "Élite Sanglante", x: ["Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée des unités amies qui ont chargé au même tour."] },
      { c: "charge", t: "Une Fois par Tour, Votre Phase de Charge", n: "Charge Impitoyable", x: ["Annonce : Choisissez une unité amie.", "Effet : La cible peut relancer ses jets de charge."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Marque de Khorne", x: ["Effet : Ajoutez 1 à la Perforation des armes de mêlée de votre général."] },
      { c: "move", t: "Une Fois par Bataille, Votre Phase de Mouvement", n: "Marque de Tzeentch", x: ["Effet : Votre général peut se téléporter à plus de 6\" des unités ennemies."] }
    ]}
  ]},
  when: { "Chemin de la Gloire": ["hero"], "Élite Sanglante": ["charge"], "Charge Impitoyable": ["charge"], "Marque de Khorne": ["fight"], "Marque de Tzeentch": ["move"], "Œil des Dieux": ["hero"], "Écrasement": ["charge"] }
});
