// Spearhead : Clans Guerriers Orruks – Gross'bande de Mâchefers
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "grossbande-machefers",
  name: "Gross'bande de Mâchefers",
  faction: "Clans Guerriers Orruks",
  cover: "img/grossbande-machefers/armee.jpg",
  photos: { armee: "img/grossbande-machefers/armee.jpg", brutes: "img/grossbande-machefers/brutes.jpg", durboyz: "img/grossbande-machefers/durboyz.jpg", megaboss: "img/grossbande-machefers/megaboss.jpg", rageux-brutes: "img/grossbande-machefers/rageux-brutes.jpg" },
  units: [
    { id: "megaboss", en: "Mégaboss", stats: { M: '4\"', S: 7, C: 2, Sv: "3+" },
      weapons: [{ n: "Boss Choppa et Boss Shield", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Call da Boyz", x: ["Annonce : Choisissez une unité amie entièrement à 12\".", "Effet : Ajoutez 1 aux jets de touche de mêlée de la cible pour le restant de la phase."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "rageux-brutes", en: "Rageux Brutes", stats: { M: '5\"', S: 3, C: 1, Sv: "5+" },
      weapons: [{ n: "Choppas", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Fous Furieux", x: ["Effet : Cette unité a FRAPPE EN PREMIER si elle a chargé au même tour."] }],
      kw: "INFANTERIE" },
    { id: "durboyz", en: "Durboyz", stats: { M: '4\"', S: 2, C: 1, Sv: "3+" },
      weapons: [{ n: "Arrows et Choppa", range: '18\"', a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }, { n: "Choppa", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" },
    { id: "brutes", en: "Brutes", stats: { M: '4\"', S: 3, C: 1, Sv: "3+" },
      weapons: [{ n: "Gore-choppa", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "move", t: "Votre Phase de Mouvement", n: "Da Brutes Arrive", x: ["Votre unité de Brutes n'est pas placée pendant le déploiement. À partir du 2e round, elle peut arriver à plus de 6\" des ennemis."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "fight", t: "Une Fois par Tour, N'importe Quelle Phase de Mêlée", n: "Waaagh!", x: ["Annonce : Choisissez une unité amie en mêlée.", "Effet : Ajoutez 1 aux Attaques de mêlée de la cible pour le restant de la phase."] },
      { c: "passive", t: "Passif", n: "Regard Noir", x: ["Effet : Soustrayez 1 au score de contrôle des unités ennemies en mêlée avec une unité de Brutes amie."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Boss Armour", x: ["Effet : Votre général a une PROTECTION (5+)."] },
      { c: "charge", t: "Votre Phase de Charge", n: "Follow Me Boyz", x: ["Annonce : Choisissez une unité amie entièrement à 12\" de votre général.", "Effet : La cible peut relancer ses jets de charge."] }
    ]}
  ]},
  when: { "Da Brutes Arrive": ["move"], "Waaagh!": ["fight", "fight-opp"], "Regard Noir": ["hero"], "Boss Armour": ["shoot-opp", "fight-opp"], "Follow Me Boyz": ["charge"], "Call da Boyz": ["fight", "fight-opp"], "Fous Furieux": ["charge"] }
});
