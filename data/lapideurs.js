// Spearhead : Fils de Behemat – Lapideurs
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "lapideurs",
  name: "Lapideurs",
  faction: "Fils de Behemat",
  cover: "img/lapideurs/armee.jpg",
  photos: { armee: "img/lapideurs/armee.jpg" },
  units: [
    {
      id: "lance-rochers",
      en: "Lance-rochers",
      stats: { M: '10\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Rocher Lancé", range: '18\"', a: 1, h: 4, w: 2, r: 2, d: "D6", crit: "none" },
        { n: "Massue", range: "Mêlée", a: 4, h: 4, w: 2, r: 2, d: "D6", crit: "none" }
      ],
      abilities: [
        {
          c: "shoot",
          t: "Votre Phase de Tir",
          n: "Pluie de Rocher",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 18\" de cette unité.",
            "Effet : Jetez un dé. Sur 3+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "HÉROS, MONSTRE"
    },
    {
      id: "lance-rochers-2",
      en: "Lance-rochers",
      stats: { M: '10\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Rocher Lancé", range: '18\"', a: 1, h: 4, w: 2, r: 2, d: "D6", crit: "none" },
        { n: "Massue", range: "Mêlée", a: 4, h: 4, w: 2, r: 2, d: "D6", crit: "none" }
      ],
      abilities: [],
      kw: "MONSTRE"
    }
  ],
  army: {
    id: "armee",
    en: "Règles de l'armée",
    sections: [
      {
        key: "trait",
        title: "Trait de bataille",
        who: "Trait de bataille",
        abilities: [
          {
            c: "passive",
            t: "Passif",
            n: "Jeu de Roches",
            x: ["Effet : Ajoutez 1 aux jets de touche pour les attaques de tir des unités amies."]
          }
        ]
      },
      {
        key: "regiment",
        pick: true,
        title: "Aptitude de régiment",
        who: "Aptitude de régiment",
        abilities: [
          {
            c: "shoot",
            t: "Une Fois par Tour, Votre Phase de Tir",
            n: "Cogne-roc",
            x: [
              "Annonce : Choisissez une unité amie.",
              "Effet : Ajoutez 1 à la caractéristique de Dégâts des armes de tir de la cible pour le restant de la phase."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Aplatir les Avortons",
            x: ["Effet : Ajoutez 1 aux jets de blessure pour les attaques de tir qui ciblent une unité d'INFANTERIE."]
          }
        ]
      },
      {
        key: "opti",
        pick: true,
        title: "Optimisation du général",
        who: "Optimisation (général)",
        abilities: [
          {
            c: "passive",
            t: "Passif",
            n: "Meilleur Lanceur",
            x: ["Effet : Votre général peut relancer 1 jet de touche par phase pour ses attaques de tir."]
          },
          {
            c: "shoot",
            t: "Une Fois par Bataille, Votre Phase de Tir",
            n: "Rocher Énorme",
            x: ["Effet : La caractéristique de Dégâts de l'arme de tir de votre général est de 2D6 pour le restant de la phase."]
          }
        ]
      }
    ]
  },
  when: {
    "Jeu de Roches": ["shoot"],
    "Cogne-roc": ["shoot"],
    "Aplatir les Avortons": ["shoot"],
    "Meilleur Lanceur": ["shoot"],
    "Rocher Énorme": ["shoot"],
    "Pluie de Rocher": ["shoot"]
  }
});
