// Spearhead : Skavens – Meutegriffe Rongefestin
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "meutegriffe-rongefestin",
  name: "Meutegriffe Rongefestin",
  faction: "Skavens",
  cover: "img/meutegriffe-rongefestin/armee.jpg",
  photos: { armee: "img/meutegriffe-rongefestin/armee.jpg" },
  units: [
    {
      id: "griffarque",
      en: "Griffarque sur Ronge-bête",
      stats: { M: '10\"', S: 8, C: 2, Sv: "4+" },
      weapons: [
        { n: "Armes de Griffarque", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Crocs et Griffes de Ronge-bête", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Meneur de Meute",
          x: [
            "Annonce : Choisissez une unité de Rats des Clans amie entièrement à 12\" de cette unité.",
            "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant de la phase."
          ]
        }
      ],
      kw: "HÉROS, CAVALERIE"
    },
    {
      id: "prophete-gris",
      en: "Prophète Gris",
      stats: { M: '5\"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Bâton de Prophète", range: "Mêlée", a: 2, h: 4, w: 4, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Magie de la Vermine",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 12\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
            "Effet : Sur 6+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "HÉROS, SORCIER, INFANTERIE"
    },
    {
      id: "ingenieur",
      en: "Ingénieur Technomage",
      stats: { M: '5\"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Warplock Jezzail", range: '18\"', a: 1, h: 3, w: 3, r: 2, d: "D3", crit: "none" },
        { n: "Outils de Skryre", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "HÉROS, INFANTERIE"
    },
    {
      id: "rats-clans",
      en: "Rats des Clans",
      stats: { M: '6\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Armes de Clan", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "INFANTERIE, RENFORTS"
    },
    {
      id: "rats-ogors",
      en: "Rats-ogors",
      stats: { M: '6\"', S: 4, C: 1, Sv: "5+" },
      weapons: [
        { n: "Griffes et Crocs Massifs", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "2", crit: "none" }
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
            c: "deploy",
            t: "Une Fois par Bataille, Phase de Déploiement",
            n: "Le Raz-de-Vermine Rampant",
            x: [
              "Annonce : Choisissez une unité amie qui n'a pas été déployée comme cible.",
              "Effet : L'unité cible est placée en réserve dans les tunnels en-dessous. Les unités dans les tunnels qui n'ont pas utilisé l'aptitude Embuscade par Trou de Vermine avant la fin du 3e round sont détruites."
            ]
          },
          {
            c: "move",
            t: "Votre Phase de Mouvement",
            n: "Embuscade par Trou de Vermine",
            x: [
              "Annonce : Choisissez une unité amie qui est dans les tunnels en-dessous.",
              "Effet : Placez cette unité entièrement à 6\" d'un coin du champ de bataille et à plus de 9\" des unités ennemies."
            ]
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
            c: "passive",
            t: "Passif",
            n: "Marée Grouillante",
            x: ["Effet : Ajoutez 1 aux scores de contrôle des unités de Rats des Clans amies."]
          },
          {
            c: "fight",
            t: "Une Fois par Tour, N'importe Quelle Phase de Mêlée",
            n: "Frénésie Rongeuse",
            x: [
              "Annonce : Choisissez une unité amie en mêlée.",
              "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant de la phase."
            ]
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
            n: "Ronge-bête Affamée",
            x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de votre général."]
          },
          {
            c: "charge",
            t: "Votre Phase de Charge",
            n: "Charge Sacrificielle",
            x: [
              "Annonce : Choisissez une unité de Rats des Clans amie entièrement à 12\" de votre général.",
              "Effet : La cible peut relancer ses jets de charge pour le restant du tour."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Le Raz-de-Vermine Rampant": ["deploy"],
    "Embuscade par Trou de Vermine": ["move"],
    "Marée Grouillante": ["hero"],
    "Frénésie Rongeuse": ["fight", "fight-opp"],
    "Ronge-bête Affamée": ["fight"],
    "Charge Sacrificielle": ["charge"],
    "Meneur de Meute": ["fight", "fight-opp"],
    "Magie de la Vermine": ["hero"]
  }
});
