// Spearhead : Éternels de l'Orage – Fer de Lance d'Yndrasta
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "yndrasta",
  name: "Fer de Lance d'Yndrasta",
  faction: "Éternels de l'Orage",
  cover: "img/yndrasta/armee.jpg",
  photos: { armee: "img/yndrasta/armee.jpg", char-foudroyeur: "img/yndrasta/char-foudroyeur.jpg", vexillor: "img/yndrasta/vexillor.jpg", vincitors: "img/yndrasta/vincitors.jpg", yndrasta: "img/yndrasta/yndrasta.jpg" },
  units: [
    {
      id: "yndrasta",
      en: "Yndrasta, la Lance Céleste",
      stats: { M: '12\"', S: 8, C: 2, Sv: "3+" },
      weapons: [
        { n: "Thengavar", range: '12\"', a: 1, h: 2, w: 2, r: 3, d: "D6", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Lame des Hauts Cieux", range: "Mêlée", a: 5, h: 3, w: 3, r: 2, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "Une Fois par Bataille, N'importe quelle Phase de Mêlée",
          n: "Championne de Sigmar",
          x: ["Effet : Cette unité a une PROTECTION (5+) à cette phase."]
        }
      ],
      kw: "HÉROS, INFANTERIE, VOL, PROTECTION (6+)"
    },
    {
      id: "vexillor",
      en: "Chevalier-Vexillor",
      stats: { M: '5\"', S: 5, C: 2, Sv: "3+" },
      weapons: [
        { n: "Lame de Guerre de Sigmarite", range: "Mêlée", a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "La Bannière des Reforgés",
          x: [
            "Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible.",
            "Effet : Soignez (D3) la cible. De plus, ajoutez 3 au score de contrôle de l'unité choisie jusqu'au début de votre prochain tour."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE"
    },
    {
      id: "annihilators",
      en: "Annihilators",
      stats: { M: '4\"', S: 3, C: 1, Sv: "2+" },
      weapons: [
        { n: "Marteau Météorique", range: "Mêlée", a: 3, h: 3, w: 3, r: 2, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "charge",
          t: "N'importe quelle Phase de Charge",
          n: "La Force d'une Étoile Filante",
          x: [
            "Annonce : Si cette unité a chargé à cette phase et si le jet de charge non modifié était 8+, choisissez une unité ennemie à 1\" d'elle comme cible.",
            "Effet : La cible a FRAPPE EN DERNIER à ce tour."
          ]
        }
      ],
      kw: "INFANTERIE"
    },
    {
      id: "vincitors",
      en: "Vincitors",
      stats: { M: '5\"', S: 2, C: 1, Sv: "3+" },
      weapons: [
        { n: "Longue Épée Céleste", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Frappes d'Éclairs",
          x: [
            "Effet : Ajoutez 1 à la caractéristique de Dégâts des Longues Épées Célestes de cette unité pour les attaques qui ciblent une unité ennemie qui a 5 figurines ou plus."
          ]
        }
      ],
      kw: "INFANTERIE"
    },
    {
      id: "char-foudroyeur",
      en: "Char Foudroyeur",
      stats: { M: '10\"', S: 8, C: 2, Sv: "3+" },
      weapons: [
        { n: "Grand Arc d'Orage", range: '18\"', a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" },
        { n: "Hache Foudroyeuse", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none" },
        { n: "Becs et Griffes de Gryph-destriens", range: "Mêlée", a: 6, h: 4, w: 3, r: 1, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "charge",
          t: "N'importe quelle Phase de Charge",
          n: "Azyr Déchaîné",
          x: [
            "Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie à 1\" d'elle comme cible et jetez un dé.",
            "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "MACHINE DE GUERRE"
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
            n: "Descendants de l'Orage",
            x: [
              "Yndrasta et votre unité d'Annihilators ne sont pas placés pendant la phase de déploiement. À la place, à partir du troisième round de bataille, ils peuvent utiliser l'aptitude suivante :",
              "Arrivée Foudroyante : Placez cette unité n'importe où sur le champ de bataille à plus de 6\" des unités ennemies."
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
            c: "end",
            t: "Fin de n'importe quel Tour",
            n: "Repoussez-les",
            x: [
              "Annonce : Choisissez n'importe quel nombre d'unités amies qui contestent un objectif et sont en mêlée.",
              "Effet : Chacune de ces unités peut faire un mouvement d'engagement (Règles de Base, 15.3). Pour chaque unité faisant ainsi, choisissez une unité ennemie à 1\" d'elle et jetez un dé. Sur 4+, infligez 1 dégât mortel à l'unité ennemie."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Défendre jusqu'au Bout",
            x: ["Effet : Les unités amies ont une PROTECTION (6+) tant qu'elles contestent un objectif que vous contrôlez."]
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
            n: "La Prime Chasseresse",
            x: ["Effet : La caractéristique de Dégâts de Thengavar (la lance d'Yndrasta) est de 2D6 pour les attaques qui ciblent un MONSTRE."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Frappez avec la Rage de la Tempête",
            x: ["Effet : Votre général a FRAPPE EN PREMIER s'il a chargé au même tour."]
          },
          {
            c: "move",
            t: "Une Fois par Bataille, Votre Phase de Mouvement",
            n: "Éclat Éblouissant",
            x: [
              "Annonce : Choisissez votre général pour qu'il utilise cette aptitude s'il a été placé à cette phase.",
              "Effet : Vous pouvez ramener 1 figurine tuée dans chaque unité amie entièrement à 12\" de votre général."
            ]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe quelle Phase de Mêlée",
            n: "Gerfaut Céleste",
            x: [
              "Effet : Jusqu'à la fin de la phase, ajoutez 1 aux jets de touche pour les attaques des unités amies tant qu'elles sont entièrement à 12\" de votre général."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Descendants de l'Orage": ["move"],
    "Repoussez-les": ["end"],
    "Défendre jusqu'au Bout": ["shoot-opp", "fight-opp"],
    "La Prime Chasseresse": ["shoot", "fight"],
    "Frappez avec la Rage de la Tempête": ["charge"],
    "Éclat Éblouissant": ["move"],
    "Gerfaut Céleste": ["fight", "fight-opp"],
    "Championne de Sigmar": ["fight", "fight-opp"],
    "La Bannière des Reforgés": ["hero"],
    "La Force d'une Étoile Filante": ["charge"],
    "Frappes d'Éclairs": ["fight"],
    "Azyr Déchaîné": ["charge"]
  }
});
