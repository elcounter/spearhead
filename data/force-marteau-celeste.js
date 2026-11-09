// Spearhead : Magnats Kharadrons – Force Opérationnelle du Marteau Céleste
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "force-marteau-celeste",
  name: "Force Opérationnelle du Marteau Céleste",
  faction: "Magnats Kharadrons",
  cover: "img/force-marteau-celeste/armee.jpg",
  photos: { amiral-arkanaute: "img/force-marteau-celeste/amiral-arkanaute.jpg", armee: "img/force-marteau-celeste/armee.jpg", compagnie-arkanautes: "img/force-marteau-celeste/compagnie-arkanautes.jpg", stratogardes: "img/force-marteau-celeste/stratogardes.jpg" },
  units: [
    { id: "amiral-arkanaute", en: "Amiral Arkanaute", stats: { M: '4\"', S: 5, C: 2, Sv: "3+" },
      weapons: [{ n: "Pistolet à Salve", range: '12\"', a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none" }, { n: "Hache ou Épée", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Ordres d'Amiral", x: ["Annonce : Choisissez une unité amie entièrement à 12\".", "Effet : Ajoutez 1 aux jets de touche de tir de la cible jusqu'au début de votre prochain tour."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "compagnie-arkanautes", en: "Compagnie d'Arkanautes", stats: { M: '4\"', S: 1, C: 1, Sv: "4+" },
      weapons: [{ n: "Armes Privées", range: '12\"', a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }, { n: "Hache Privée", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" },
    { id: "stratogardes", en: "Stratogardes", stats: { M: '12\"', S: 2, C: 1, Sv: "4+" },
      weapons: [{ n: "Fusil Aether", range: '18\"', a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }, { n: "Hache", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, VOL" },
    { id: "fregate-arkanaute", en: "Frégate Arkanaute", stats: { M: '12\"', S: 12, C: 5, Sv: "3+" },
      weapons: [{ n: "Canons Aether", range: '18\"', a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }, { n: "Éperon", range: "Mêlée", a: 3, h: 4, w: 2, r: 2, d: "D3", crit: "none" }],
      abilities: [{ c: "move", t: "Votre Phase de Mouvement", n: "Transport Aérien", x: ["Effet : Une unité d'Arkanautes amie entièrement à 3\" peut être embarquée et débarquer plus tard."] }],
      kw: "MACHINE DE GUERRE, VOL" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "passive", t: "Passif", n: "Puissance de Feu Décisive", x: ["Effet : Ajoutez 1 aux jets de touche de tir des unités amies si la cible est entièrement à 12\" ou moins."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "shoot", t: "Une Fois par Tour, Votre Phase de Tir", n: "Salve Concentrée", x: ["Annonce : Choisissez une unité amie.", "Effet : Ajoutez 1 à la Perforation des armes de tir de la cible pour le restant de la phase."] },
      { c: "passive", t: "Passif", n: "Endrins de Vol", x: ["Effet : Les Stratogardes amies ont Mouvement 14\"."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Pistolet Amélioré", x: ["Effet : Ajoutez 1 aux Attaques du Pistolet à Salve de votre général."] },
      { c: "hero", t: "Une Fois par Bataille, Votre Phase des Héros", n: "Ordre de l'Amiral", x: ["Effet : Toutes les unités amies peuvent relancer 1 jet de touche à la phase de tir suivante."] }
    ]}
  ]},
  when: { "Puissance de Feu Décisive": ["shoot"], "Salve Concentrée": ["shoot"], "Endrins de Vol": ["move"], "Pistolet Amélioré": ["shoot"], "Ordre de l'Amiral": ["hero"], "Ordres d'Amiral": ["hero"], "Transport Aérien": ["move"] }
});
