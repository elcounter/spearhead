// Spearhead : Cités de Sigmar – Compagnie Castelaine
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "compagnie-castelaine",
  name: "Compagnie Castelaine",
  faction: "Cités de Sigmar",
  cover: "img/compagnie-castelaine/armee.webp",
  photos: { armee: "img/compagnie-castelaine/armee.webp", cavaliers: "img/compagnie-castelaine/cavaliers.webp", "grand-canon": "img/compagnie-castelaine/grand-canon.webp", heaumefers: "img/compagnie-castelaine/heaumefers.webp", "marechal-cavalier": "img/compagnie-castelaine/marechal-cavalier.webp" },
  units: [
    {
      id: "marechal-cavalier",
      en: "Maréchal-Cavalier des Guildes Franches",
      stats: { M: '10\"', S: 7, C: 2, Sv: "3+" },
      weapons: [
        { n: "Pistolet de Dragon", range: '10\"', a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Épée Bâtarde de Maître", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" },
        { n: "Sabots d'Acier de Cheval de Bataille", range: "Mêlée", a: 2, h: 5, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Commandant Décisif",
          x: [
            "Annonce : Choisissez une unité de Heaumefers des Guildes Franches amie entièrement à 12\" de cette unité comme cible et jetez un dé.",
            "Effet : Sur 2+, faites 1 choix parmi ce qui suit :",
            "Debout ! : Si l'unité cible n'est pas en mêlée, vous pouvez y ramener D3 figurines tuées.",
            "Pas de Quartier ! : Ajoutez 3 au score de contrôle de l'unité cible jusqu'au début de votre prochain tour."
          ]
        }
      ],
      kw: "HÉROS, CAVALERIE"
    },
    {
      id: "heaumefers",
      en: "Heaumefers des Guildes Franches",
      stats: { M: '5\"', S: 1, C: 1, Sv: "4+" },
      weapons: [
        { n: "Arme des Guildes Franches", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "move",
          t: "Votre Phase de Mouvement",
          n: "Consacrer la Terre",
          x: [
            "Annonce : Si cette unité conteste un objectif que vous contrôlez et qui n'est pas contesté par une ou plusieurs figurines ennemies, jetez un dé.",
            "Effet : Sur 3+, vous considérez l'objectif comme étant consacré. Les unités amies ont une PROTECTION (6+) tant qu'elles contestent un objectif consacré. Si votre adversaire prend le contrôle d'un objectif consacré, il n'est plus consacré."
          ]
        }
      ],
      kw: "INFANTERIE, RENFORTS"
    },
    {
      id: "cavaliers",
      en: "Cavaliers des Guildes Franches",
      stats: { M: '10\"', S: 3, C: 1, Sv: "3+" },
      weapons: [
        { n: "Arme de Cavalier", range: "Mêlée", a: 3, h: 4, w: 4, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégâts)"] },
        { n: "Sabots d'Acier de Cheval de Bataille", range: "Mêlée", a: 2, h: 5, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "charge",
          t: "N'importe quelle Phase de Charge",
          n: "Charge Dévastatrice",
          x: [
            "Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie en mêlée avec elle comme cible et jetez un dé.",
            "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "CAVALERIE, RENFORTS"
    },
    {
      id: "grand-canon",
      en: "Grand Canon Soudefer",
      stats: { M: '3\"', S: 8, C: 2, Sv: "4+" },
      weapons: [
        { n: "Grand Canon : Boulet de Canon", range: '24\"', a: 2, h: 4, w: 2, r: 2, d: "D3+2", crit: "none" },
        { n: "Grand Canon : Mitraille", range: '12\"', a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Outils et Armes de Servants", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Balles et Obus",
          x: [
            "Effet : Chaque fois que cette unité utilise une aptitude de TIR, choisissez la caractéristique d'arme de Boulet de Canon ou celle de Mitraille pour toutes les attaques faites avec son Grand Canon. Le Boulet de Canon peut être choisi seulement si cette unité n'a pas utilisé d'aptitude de MOUVEMENT à ce tour."
          ]
        }
      ],
      kw: "MACHINE DE GUERRE, RENFORTS"
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
            c: "hero",
            t: "Une Fois par Round de Bataille, Début du Round de Bataille",
            n: "L'Ordre de l'Officier",
            x: [
              "Annonce : Choisissez une carte de tactique de bataille de votre main et placez-la face cachée à côté de vos autres cartes de tactique de bataille. Cette carte est toujours cachée pour votre adversaire, mais assurez-vous qu'elle est bien isolée de vos autres cartes. La carte reste isolée jusqu'à ce que vous utilisiez son ordre ou marquiez sa tactique de bataille.",
              "Effet : Quand vous utilisez l'ordre de cette carte, elle n'est pas défaussée mais revient dans votre main. Votre adversaire peut vérifier l'information de la carte avant qu'elle revienne dans votre main. La carte est de nouveau une carte de tactique de bataille normale, à l'exception du fait que vous ne pouvez pas utiliser son ordre à la phase où elle est revenue dans votre main.",
              "Si vous n'avez pas utilisé l'ordre sur la carte que vous avez isolée, vous pouvez toujours marquer sa tactique de bataille à la fin de votre tour normalement si vous remplissez ses conditions. En ce cas, défaussez-la normalement. Si vous n'avez pas utilisé l'ordre ni marqué la tactique de bataille de cette carte, elle revient automatiquement dans votre main à la fin de votre tour."
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
            n: "Pour Sigmar, Chargez !",
            x: ["Effet : Les unités de CAVALERIE amies ont FRAPPE EN PREMIER si elles ont chargé au même tour."]
          },
          {
            c: "shoot",
            t: "Une Fois par Tour, Phase de Tir Adverse",
            n: "Discipline Soudefer",
            x: [
              "Annonce : Choisissez votre Grand Canon Soudefer pour utiliser cette aptitude.",
              "Effet : Jetez un dé. Sur 3+, il peut utiliser l'aptitude « Tir » comme s'il s'agissait de votre phase de tir."
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
            c: "hero",
            t: "Une Fois par Bataille, Début de n'importe quel Tour",
            n: "Flasque d'Aigue-Sombre de Lethis",
            x: ["Effet : Soignez (D6) votre général."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Lame Patrimoniale",
            x: ["Effet : Ajoutez 1 à la caractéristique de Perforation de l'Épée Bâtarde de Maître de votre général."]
          },
          {
            c: "end",
            t: "Fin de n'importe quel Tour",
            n: "Brasero de Flammes Bénites",
            x: [
              "Annonce : Choisissez une unité de Heaumefers des Guildes Franches amie à portée de mêlée de votre général.",
              "Effet : Vous pouvez ramener jusqu'à D3 figurines tuées dans l'unité choisie."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Miroitant",
            x: ["Effet : À chaque phase, vous pouvez relancer 1 jet de touche, ou 1 jet de blessure, ou 1 jet de sauvegarde fait pour votre général."]
          }
        ]
      }
    ]
  },
  when: {
    "L'Ordre de l'Officier": ["hero"],
    "Pour Sigmar, Chargez !": ["charge"],
    "Discipline Soudefer": ["shoot-opp"],
    "Flasque d'Aigue-Sombre de Lethis": ["hero"],
    "Lame Patrimoniale": ["fight"],
    "Brasero de Flammes Bénites": ["end"],
    "Miroitant": ["shoot", "fight", "hero"],
    "Commandant Décisif": ["hero"],
    "Consacrer la Terre": ["move"],
    "Charge Dévastatrice": ["charge"],
    "Balles et Obus": ["shoot"]
  }
});
