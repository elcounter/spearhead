// Spearhead : Vils du Fielobscur – Grognemeute de Chasse
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "grognemeute-chasse",
  name: "Grognemeute de Chasse",
  faction: "Vils du Fielobscur",
  cover: "img/grognemeute-chasse/armee.jpg",
  photos: { armee: "img/grognemeute-chasse/armee.jpg", "cavalerie-grognemeute": "img/grognemeute-chasse/cavalerie-grognemeute.jpg", grogneboss: "img/grognemeute-chasse/grogneboss.jpg", "suite-vils-leus": "img/grognemeute-chasse/suite-vils-leus.jpg", "rouleur-fauchesoleil": "img/grognemeute-chasse/rouleur-fauchesoleil.jpg" },
  units: [
    {
      id: "grogneboss",
      en: "Grogneboss",
      stats: { M: '12\"', S: 6, C: 2, Sv: "5+" },
      weapons: [{ n: "Armes de Grogneboss", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{
        c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "M'en Charj', Boss",
        x: ["Annonce : Choisissez cette unité et une autre unité amie à portée de mêlée d'elle.", "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux Attaques de mêlée des cibles pour le restant de la phase."]
      }],
      kw: "HÉROS, CAVALERIE"
    },
    {
      id: "suite-vils-leus",
      en: "Suite de Vils-leus",
      stats: { M: '12\"', S: 3, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arc et Lance", range: '12\"', a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" },
        { n: "Lance", range: "Mêlée", a: 2, h: 4, w: 4, r: 1, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "CAVALERIE"
    },
    {
      id: "cavalerie-grognemeute",
      en: "Cavalerie Grognemeute",
      stats: { M: '12\"', S: 3, C: 1, Sv: "5+" },
      weapons: [{ n: "Grandes Lances", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] }],
      abilities: [],
      kw: "CAVALERIE, RENFORTS"
    },
    {
      id: "rouleur-fauchesoleil",
      en: "Rouleur Fauchesoleil",
      stats: { M: '10\"', S: 6, C: 2, Sv: "4+" },
      weapons: [{ n: "Lames Fauchesoleil", range: "Mêlée", a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{
        c: "passive", t: "Passif", n: "Krèveboom",
        x: ["Effet : Quand cette unité est détruite, infligez D3 dégâts mortels à chaque unité ennemie à 3\" d'elle."]
      }],
      kw: "MACHINE DE GUERRE"
    }
  ],
  army: {
    id: "armee", en: "Règles de l'armée",
    sections: [
      { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
        { c: "passive", t: "Passif", n: "Toujours en Chasse", x: ["Effet : Les unités amies peuvent utiliser des aptitudes de CHARGE même si elles ont utilisé une aptitude de COURSE au même tour."] }
      ]},
      { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
        { c: "deploy", t: "Une Fois par Bataille, Phase de Déploiement", n: "Force d'Enserklement", x: ["Annonce : Choisissez une unité amie.", "Effet : Placez cette unité en réserve. Elle peut arriver à partir du 2e round à plus de 6\" des ennemis."] },
        { c: "passive", t: "Passif", n: "Krèveboom", x: ["Effet : Quand un Rouleur Fauchesoleil ami est détruit, les fragments infligent des dégâts aux ennemis proches."] }
      ]},
      { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
        { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Ruzé Kom' un Grognecroc", x: ["Effet : Pour le restant du tour, ajoutez 1 à la Perforation des armes de mêlée des unités amies entièrement à 12\" du porteur."] },
        { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Éclat de Krèvzyeux", x: ["Annonce : Choisissez une unité ennemie en mêlée avec votre général.", "Effet : Soustrayez 1 aux jets de touche de la cible pour le restant de la phase."] }
      ]}
    ]
  },
  when: {
    "Toujours en Chasse": ["charge"], "Force d'Enserklement": ["deploy"], "Krèveboom": ["fight-opp"],
    "Ruzé Kom' un Grognecroc": ["fight", "fight-opp"], "Éclat de Krèvzyeux": ["fight", "fight-opp"],
    "M'en Charj', Boss": ["fight", "fight-opp"]
  }
});
