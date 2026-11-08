// Spearhead : Cités de Sigmar – Zélotes de Zenestra
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "zelotes-zenestra",
  name: "Zélotes de Zenestra",
  faction: "Cités de Sigmar",
  cover: "img/zelotes-zenestra/armee.jpg",
  photos: { armee: "img/zelotes-zenestra/armee.jpg" },
  units: [
    {
      id: "marechal",
      en: "Maréchal des Guildes Franches et Estafette Reliquaire",
      stats: { M: '5\"', S: 5, C: 2, Sv: "3+" },
      weapons: [
        { n: "Pistolets de Duelliste", range: '10\"', a: 4, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Arme de Maître", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Ordres du Maréchal",
          x: [
            "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de ce HÉROS.",
            "Effet : Retirez du champ de bataille le pion d'Estafette Reliquaire de ce HÉROS, puis donnez-le à la cible."
          ]
        },
        {
          c: "passive",
          t: "Passif",
          n: "Estafette Reliquaire",
          x: [
            "Effet : Tant qu'une unité amie autre que ce HÉROS a le pion d'Estafette Reliquaire, ajoutez 1 aux jets de blessure pour les attaques de mêlée de l'unité.",
            "Si ce HÉROS est détruit, retirez le pion d'Estafette Reliquaire du champ de bataille."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE"
    },
    {
      id: "zenestra",
      en: "Pontifex Zenestra, Matriarche de la Grande Roue",
      stats: { M: '5\"', S: 9, C: 2, Sv: "5+" },
      weapons: [
        { n: "Sceptre de la Roue", range: "Mêlée", a: 3, h: 4, w: 4, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Réceptacle de Sigmar",
          x: [
            "Annonce : Choisissez comme cibles jusqu'à 3 unités amies ou ennemies visibles.",
            "Effet : Jetez un D3 pour chaque cible. Sur 2+ :",
            "• Si c'est une cible amie, elle a une PROTECTION (5+) jusqu'au début de votre prochain tour.",
            "• Si c'est une cible ennemie, infligez-lui autant de dégâts mortels que le résultat du jet."
          ]
        }
      ],
      kw: "HÉROS, PRÊTRE, INFANTERIE, PROTECTION (4+)"
    },
    {
      id: "prestelame",
      en: "Prestelame du Corps de Commandement des Guildes Franches",
      stats: { M: '5\"', S: 3, C: 1, Sv: "6+" },
      weapons: [
        { n: "Rapière Enchantée", range: "Mêlée", a: 4, h: 3, w: 4, r: 2, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Un Homme Averti en Vaut Deux",
          x: ["Effet : Tant que c'est votre tour, cette unité a FRAPPE EN PREMIER."]
        }
      ],
      kw: "INFANTERIE"
    },
    {
      id: "chevalier-eminent",
      en: "Chevalier Éminent et Suite du Corps de Commandement des Guildes Franches",
      stats: { M: '5\"', S: 2, C: 2, Sv: "4+" },
      weapons: [
        { n: "Armes de Commandement", range: "Mêlée", a: 3, h: 3, w: 4, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Une Fois par Tour, Réaction : Vous avez utilisé un ordre",
          n: "Champions Talentueux",
          x: [
            "Effet : Après avoir résolu l'ordre, remettez la carte dans votre main.",
            "Note des Concepteurs : Cela vous permet soit d'utiliser l'ordre une seconde fois, soit de marquer également la tactique de bataille présente sur cette carte."
          ]
        }
      ],
      kw: "INFANTERIE, RENFORTS"
    },
    {
      id: "heaumefers",
      en: "Heaumefers des Guildes Franches",
      stats: { M: '5\"', S: 1, C: 1, Sv: "4+" },
      weapons: [
        { n: "Armes des Guildes Franches", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Partisans Fanatiques",
          x: ["Effet : Ramenez 1 figurine tuée dans cette unité."]
        }
      ],
      kw: "INFANTERIE, RENFORTS"
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
            c: "move",
            t: "Votre Phase de Mouvement",
            n: "Maître-espion Insaisissable",
            x: [
              "Votre Prestelame n'est pas placé à la phase de déploiement. À la place, à partir du deuxième round de bataille, il peut utiliser l'aptitude suivante :",
              "Embuscade Soudaine : Placez cette unité à 6\" d'une unité ennemie et hors de mêlée."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Dame de la Roue",
            x: [
              "Effet : Chaque fois qu'une figurine amie est tuée par une attaque de mêlée, jetez autant de dés que la caractéristique de Santé de la figurine tuée. Pour chaque jet de 5+, infligez 1 dégât mortel à l'unité attaquante après avoir résolu l'aptitude de CORPS À CORPS."
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
            c: "move",
            t: "Une Fois par Tour (Armée), Votre Phase de Mouvement",
            n: "Ruée Fervente",
            x: [
              "Annonce : Choisissez une unité amie pour utiliser cette aptitude.",
              "Effet : Cette unité peut utiliser des aptitudes de CHARGE à ce tour même si elle a utilisé une aptitude de COURSE au même tour."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Zélotes Féroces",
            x: ["Effet : Ajoutez 3 aux scores de contrôle des unités de Heaumefers des Guildes Franches amies."]
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
            c: "fight",
            t: "N'importe Quelle Phase de Mêlée",
            n: "Exhortation Ardente",
            x: [
              "Annonce : Choisissez comme cible une unité amie autre qu'un HÉROS, visible et entièrement à 12\" de votre général.",
              "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant du tour."
            ]
          },
          {
            c: "move",
            t: "Une Fois par Tour, Réaction : Vous avez annoncé une aptitude de COURSE pour une unité autre qu'un HÉROS et entièrement à 12\" de votre général",
            n: "On se Presse !",
            x: [
              "Effet : Ne faites aucun jet de course pour cette aptitude de COURSE. À la place, ajoutez 6\" à la caractéristique de Mouvement de l'unité pour déterminer la distance que peut parcourir chaque figurine de l'unité dans le cadre de cette aptitude de COURSE."
            ]
          },
          {
            c: "hero",
            t: "Une Fois par Bataille, Votre Phase des Héros",
            n: "Tenez Bon, Camarades",
            x: [
              "Annonce : Choisissez comme cible une unité amie autre qu'un HÉROS, visible et entièrement à 12\" de votre général.",
              "Effet : La cible a une PROTECTION (4+) jusqu'au début du prochain round de bataille."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Pieux Commandant",
            x: ["Effet : Ajoutez 1 à la caractéristique d'Attaques et à la caractéristique de Perforation de l'Arme de Maître de votre général."]
          }
        ]
      }
    ]
  },
  when: {
    "Maître-espion Insaisissable": ["move"],
    "Dame de la Roue": ["fight-opp"],
    "Ruée Fervente": ["move"],
    "Zélotes Féroces": ["hero"],
    "Exhortation Ardente": ["fight", "fight-opp"],
    "On se Presse !": ["move"],
    "Tenez Bon, Camarades": ["hero"],
    "Pieux Commandant": ["fight"],
    "Ordres du Maréchal": ["hero"],
    "Estafette Reliquaire": ["fight"],
    "Réceptacle de Sigmar": ["hero"],
    "Un Homme Averti en Vaut Deux": ["fight"],
    "Champions Talentueux": ["hero"],
    "Partisans Fanatiques": ["fight", "fight-opp"]
  }
});
