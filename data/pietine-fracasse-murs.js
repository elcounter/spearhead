// Spearhead : Fils de Behemat – Piétine de Fracasse-murs
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "pietine-fracasse-murs",
  name: "Piétine de Fracasse-murs",
  faction: "Fils de Béhémat",
  cover: "img/pietine-fracasse-murs/armee.webp",
  photos: { armee: "img/pietine-fracasse-murs/armee.webp", gargant: "img/pietine-fracasse-murs/gargant.webp", "gargant-broyeur": "img/pietine-fracasse-murs/gargant-broyeur.webp" },
  units: [
    {
      id: "gargant-broyeur",
      en: "Gargant Broyeur d'Hommes",
      stats: { M: '10\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Massue Colossale", range: "Mêlée", a: 5, h: 4, w: 2, r: 2, d: "D6", crit: "none" },
        { n: "Pied Écrasant", range: "Mêlée", a: 2, h: 4, w: 2, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "shoot",
          t: "Votre Phase de Tir",
          n: "Lancer de Rocher",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 18\" de cette unité comme cible.",
            "Effet : Jetez un D6. Sur 2+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "HÉROS, MONSTRE"
    },
    {
      id: "gargant",
      en: "Gargant Broyeur d'Hommes",
      stats: { M: '10\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Massue Colossale", range: "Mêlée", a: 4, h: 4, w: 2, r: 2, d: "D6", crit: "none" },
        { n: "Pied Écrasant", range: "Mêlée", a: 2, h: 4, w: 2, r: 1, d: "D3", crit: "none" }
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
            n: "Force Titanesque",
            x: ["Effet : Ajoutez 1 aux jets de blessure pour les attaques de mêlée des unités amies qui ciblent une unité ennemie avec 5 figurines ou plus."]
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
            c: "fight",
            t: "Une Fois par Tour, N'importe Quelle Phase de Mêlée",
            n: "Piétinement Dévastateur",
            x: [
              "Annonce : Choisissez une unité amie en mêlée.",
              "Effet : Infligez D3 dégâts mortels à une unité ennemie en mêlée avec la cible."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Sacs de Butin",
            x: ["Effet : Ajoutez 1 au score de contrôle des unités amies."]
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
            n: "Plus Gros et Plus Méchant",
            x: ["Effet : Votre général a une PROTECTION (5+)."]
          },
          {
            c: "charge",
            t: "Votre Phase de Charge",
            n: "Charge de Géant",
            x: ["Effet : Votre général peut relancer ses jets de charge."]
          }
        ]
      }
    ]
  },
  when: {
    "Force Titanesque": ["fight"],
    "Piétinement Dévastateur": ["fight", "fight-opp"],
    "Sacs de Butin": ["hero"],
    "Plus Gros et Plus Méchant": ["shoot-opp", "fight-opp"],
    "Charge de Géant": ["charge"],
    "Lancer de Rocher": ["shoot"]
  }
});
