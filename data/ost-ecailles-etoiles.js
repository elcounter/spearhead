// Spearhead : Séraphons – Ost d'Écailles des Étoiles
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "ost-ecailles-etoiles",
  name: "Ost d'Écailles des Étoiles",
  faction: "Séraphons",
  cover: "img/ost-ecailles-etoiles/armee.jpg",
  photos: { armee: "img/ost-ecailles-etoiles/armee.jpg", "guerriers-saurus": "img/ost-ecailles-etoiles/guerriers-saurus.jpg", kroxigor: "img/ost-ecailles-etoiles/kroxigor.jpg", "sang-ancien-carnosaure": "img/ost-ecailles-etoiles/sang-ancien-carnosaure.jpg" },
  units: [
    {
      id: "sang-ancien-carnosaure",
      en: "Sang-ancien Saurus sur Carnosaure",
      stats: { M: '8\"', S: 12, C: 5, Sv: "3+" },
      weapons: [
        { n: "Armes de Sang-ancien", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Mâchoires et Griffes de Carnosaure", range: "Mêlée", a: 5, h: 4, w: 2, r: 2, d: "3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Bêtes des Sombres Jungles",
          x: [
            "Annonce : Choisissez votre général pour qu'il utilise cette aptitude s'il est en mêlée.",
            "Effet : Faites 1 choix parmi ce qui suit :",
            "Mâchoires Gargantuesques : Choisissez une unité ennemie en mêlée avec votre général et jetez un dé. Si le jet est supérieur à la caractéristique de Santé de l'unité choisie, 1 figurine de cette unité est tuée.",
            "Rugissement : Choisissez une unité ennemie en mêlée avec votre général. Soustrayez D6 au score de contrôle de cette unité ennemie à ce tour."
          ]
        }
      ],
      kw: "HÉROS, MONSTRE, CAVALERIE"
    },
    {
      id: "guerriers-saurus",
      en: "Guerriers Saurus",
      stats: { M: '5\"', S: 2, C: 1, Sv: "4+" },
      weapons: [
        { n: "Celestite Club or Spear", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "INFANTERIE, RENFORTS"
    },
    {
      id: "kroxigor",
      en: "Kroxigor",
      stats: { M: '5\"', S: 5, C: 2, Sv: "4+" },
      weapons: [
        { n: "Massue de Kroxigor", range: "Mêlée", a: 3, h: 3, w: 2, r: 2, d: "3", crit: "none" }
      ],
      abilities: [],
      kw: "INFANTERIE"
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
            c: "fight",
            t: "N'importe Quelle Phase de Mêlée",
            n: "Bêtes des Sombres Jungles",
            x: ["Voir aptitude du général (Sang-ancien sur Carnosaure)."]
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
            c: "end",
            t: "Une Fois Par Phase, Fin de n'importe quel Tour",
            n: "Combattants Prédateurs",
            x: [
              "Annonce : Jetez un dé pour chaque unité ennemie en mêlée avec une ou plusieurs unités amies.",
              "Effet : Sur 3+, infligez 1 dégât mortel à l'unité concernée par le jet."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Gardiens des Cités-Temples",
            x: ["Effet : Les unités amies ont une PROTECTION (6+) tant qu'elles sont entièrement en territoire ami."]
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
            c: "end",
            t: "Fin de n'importe quel Tour",
            n: "Regard de Sotek",
            x: [
              "Annonce : Choisissez une unité ennemie visible à 12\" de votre général.",
              "Effet : Soustrayez 1 au score de contrôle de la cible à ce tour."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Lame des Réalités",
            x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de votre général."]
          }
        ]
      }
    ]
  },
  when: {
    "Bêtes des Sombres Jungles": ["fight", "fight-opp"],
    "Combattants Prédateurs": ["end"],
    "Gardiens des Cités-Temples": ["shoot-opp", "fight-opp"],
    "Regard de Sotek": ["end"],
    "Lame des Réalités": ["fight"]
  }
});
