// Spearhead : Cités de Sigmar – Peloton Fusilier
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "peloton-fusilier",
  name: "Peloton Fusilier",
  faction: "Cités de Sigmar",
  cover: "img/peloton-fusilier/armee.jpg",
  photos: { armee: "img/peloton-fusilier/armee.jpg" },
  units: [
    {
      id: "fusil-major",
      en: "Fusil-Major sur Ogor d'Affût",
      stats: { M: '5\"', S: 8, C: 2, Sv: "3+" },
      weapons: [
        { n: "Long Fusil", range: '24\"', a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Masse d'Affût", range: "Mêlée", a: 4, h: 4, w: 2, r: 2, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "shoot",
          t: "Votre Phase de Tir",
          n: "Cibles Identifiées",
          x: [
            "Annonce : Choisissez comme cible une unité ennemie qui a été ciblée par les attaques de tir de cette unité à ce tour.",
            "Effet : Ajoutez 1 aux jets de touche pour les attaques de tir des unités amies qui ciblent l'unité cible pour le restant du tour."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE, CASTELAIN"
    },
    {
      id: "forgeguerre",
      en: "Forgeguerre Alchimite",
      stats: { M: '5\"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Bâton à Pinces", range: "Mêlée", a: 3, h: 4, w: 4, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Armes Ardentes",
          x: [
            "Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de cette unité, puis faites un jet de lancement de 2D6.",
            "Effet : Sur 6+, les armes de mêlée de la cible ont Crit (Mortel) jusqu'au début de votre prochain tour."
          ]
        }
      ],
      kw: "HÉROS, SORCIER, INFANTERIE"
    },
    {
      id: "fusiliers",
      en: "Fusiliers des Guildes Franches",
      stats: { M: '5\"', S: 1, C: 1, Sv: "4+" },
      weapons: [
        { n: "Canon-fusil", range: '15\"', a: 2, h: 4, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Baïonnette", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Écuyer-balistite",
          x: ["Effet : Tant que cette unité a un pion d'Écuyer-balistite, ses armes de tir ont Tir en Mêlée."]
        },
        {
          c: "shoot",
          t: "Une Fois par Tour (Armée), Votre Phase de Tir",
          n: "Je Repars !",
          x: [
            "Annonce : Choisissez comme cible une autre unité de Fusiliers des Guildes Franches amie.",
            "Effet : Retirez le pion d'Écuyer-balistite de cette unité du champ de bataille, puis donnez-le à la cible."
          ]
        }
      ],
      kw: "INFANTERIE, CASTELAIN, RENFORTS"
    },
    {
      id: "chasseurs",
      en: "Chasseurs du Corps d'Éclaireurs",
      stats: { M: '5\"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arbalète de Chasse", range: '15\"', a: 2, h: 4, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Armes de Chasse", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" },
        { n: "Morsure Féroce de Chien Courant", range: "Mêlée", a: 2, h: 4, w: 3, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "deploy",
          t: "Phase de Déploiement",
          n: "Traqueurs Experts",
          x: ["Effet : Cette unité peut utiliser l'aptitude « Mouvement Normal » comme s'il s'agissait de votre phase de mouvement."]
        }
      ],
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
            c: "passive",
            t: "Passif",
            n: "Fortifiez la Position",
            x: ["Effet : Soustrayez 1 à la caractéristique de Perforation des armes utilisées pour les attaques qui ciblent les unités CASTELAINES amies si elles n'ont utilisé aucune aptitude de MOUVEMENT au même tour."]
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
            t: "Une Fois par Tour (Armée), Votre Phase de Tir",
            n: "Bien Approvisionnés",
            x: [
              "Annonce : Choisissez comme cible une unité amie autre qu'un HÉROS.",
              "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de blessure pour les attaques de tir de la cible pour le restant de la phase."
            ]
          },
          {
            c: "deploy",
            t: "Une Fois par Bataille, Phase de Déploiement",
            n: "Chef Respecté",
            x: ["Effet : Les unités de Chasseurs du Corps d'Éclaireurs amies gagnent le mot-clé RENFORTS."]
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
            c: "move",
            t: "Une Fois par Bataille, Votre Phase de Mouvement",
            n: "Tacticien Expert",
            x: [
              "Annonce : Choisissez 2 unités de Fusiliers des Guildes Franches amies qui ont été détruites et qui n'ont pas encore été remplacées.",
              "Effet : Placez une seule unité de Fusiliers des Guildes Franches de remplacement de 10 figurines à plus de 6\" des unités ennemies."
            ]
          },
          {
            c: "move",
            t: "Une Fois par Tour, Votre Phase de Mouvement",
            n: "Coup de Bouclier",
            x: [
              "Annonce : Choisissez comme cible une unité d'INFANTERIE, de MACHINE DE GUERRE ou de CAVALERIE ennemie qui est en mêlée avec votre général.",
              "Effet : Jetez un dé. Sur 3+, la cible doit utiliser immédiatement l'aptitude « Repli », comme s'il s'agissait de la phase de mouvement adverse."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Accrochez-vous !",
            x: ["Effet : Votre général a une PROTECTION (5+)."]
          },
          {
            c: "fight",
            t: "Une Fois par Tour, Phase de Mêlée Adverse",
            n: "Volée à Bout Portant",
            x: [
              "Annonce : Choisissez comme cible une unité ennemie en mêlée avec votre général.",
              "Effet : Jetez un D3. Sur 2+, infligez autant de dégâts mortels que le jet à la cible."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Fortifiez la Position": ["shoot-opp", "fight-opp"],
    "Bien Approvisionnés": ["shoot"],
    "Chef Respecté": ["deploy"],
    "Tacticien Expert": ["move"],
    "Coup de Bouclier": ["move"],
    "Accrochez-vous !": ["shoot-opp", "fight-opp"],
    "Volée à Bout Portant": ["fight-opp"],
    "Cibles Identifiées": ["shoot"],
    "Armes Ardentes": ["hero"],
    "Je Repars !": ["shoot"],
    "Traqueurs Experts": ["deploy"]
  }
});
