// Spearhead : Héros Esclaves des Ténèbres – Pillards Noir-serment
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "pillards-noir-serment",
  name: "Pillards Noir-serment",
  faction: "Héros Esclaves des Ténèbres",
  cover: "img/pillards-noir-serment/armee.jpg",
  photos: { armee: "img/pillards-noir-serment/armee.jpg" },
  units: [
    {
      id: "reine",
      en: "Reine de Guerre Noir-serment",
      stats: { M: '5\"', S: 8, C: 2, Sv: "5+" },
      weapons: [
        { n: "Hache Gravée de Runes", range: "Mêlée", a: 5, h: 4, w: 3, r: 1, d: "2", crit: "mortal" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Serment de Suprématie",
          x: [
            "Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de votre général.",
            "Effet : Jusqu'au début de votre prochain tour, ajoutez 1 aux jets de touche pour les attaques de la cible."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE, PROTECTION (5+)"
    },
    {
      id: "saccageurs",
      en: "Saccageurs Noir-serment",
      stats: { M: '5\"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Armes du Noir-serment", range: "Mêlée", a: 2, h: 4, w: 3, r: 0, d: "1", crit: "mortal" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Visions de Gloire",
          x: [
            "Effet : Si cette unité inclut une Bouche des Dieux, jetez 8 dés. Pour chaque jet de 4+, jusqu'au début de votre prochain tour, vous pouvez relancer 1 jet de touche, de blessure, de course ou de sauvegarde pour cette unité."
          ]
        }
      ],
      kw: "INFANTERIE"
    },
    {
      id: "cavaliers-cruels",
      en: "Cavaliers Cruels Noir-serment",
      stats: { M: '12\"', S: 3, C: 1, Sv: "5+" },
      weapons: [
        { n: "Lames de Cavaliers Cruels", range: "Mêlée", a: 2, h: 4, w: 3, r: 0, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] },
        { n: "Sabots de Monture de Guerre", range: "Mêlée", a: 2, h: 5, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Assaillants Véloces",
          x: ["Effet : Soustrayez 1 aux jets de touche pour les attaques de tir qui ciblent cette unité."]
        }
      ],
      kw: "CAVALERIE, RENFORTS"
    },
    {
      id: "maraudeurs",
      en: "Maraudeurs Noir-serment",
      stats: { M: '5\"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Armes de Pillard", range: "Mêlée", a: 2, h: 4, w: 3, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Glorieux Trépas",
          x: [
            "Effet : Chaque fois qu'une figurine de cette unité est tuée par une attaque de mêlée et que la figurine était en mêlée avec l'unité attaquante, jetez un dé. Sur 5+, infligez 1 dégât mortel à l'unité attaquante après que l'aptitude de CORPS À CORPS a été résolue."
          ]
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
            c: "hero",
            t: "Une Fois par Tour (Armée), Votre Phase des Héros",
            n: "Serments Ténébreux",
            x: [
              "Effet : Vous pouvez révéler 1 carte de tactique de bataille de votre main à votre adversaire. Si vous le faites, cette carte de tactique de bataille devient votre serment pour le restant du tour.",
              "Tant que cette tactique de bataille est votre serment, vous pouvez toujours utiliser son ordre, ou tenter de marquer la tactique de bataille qui y figure, comme d'habitude.",
              "Si vous marquez la tactique de bataille de votre serment à ce tour, votre serment est accompli. Au lieu de défausser la carte, elle est mise de côté mais vous pouvez quand même utiliser l'ordre qui y figure. Une fois l'ordre utilisé, la carte est défaussée normalement. Les serments accomplis et mis de côté de cette façon ne comptent pas dans les 3 cartes de tactique de bataille que vous pouvez avoir en main.",
              "Si vous utilisez l'ordre de votre serment avant qu'il soit marqué, il est défaussé normalement. À la fin du tour, si le serment est toujours dans votre main et n'a pas été accompli, il cesse d'être votre serment."
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
            c: "fight",
            t: "Une Fois par Tour (Armée), N'importe Quelle Phase de Mêlée",
            n: "Rage d'Arkhar",
            x: [
              "Annonce : Choisissez comme cible une unité amie en mêlée.",
              "Effet : Ajoutez 1 aux caractéristiques d'Attaques et de Perforation des armes de mêlée de la cible pour le restant du tour.",
              "Note du Concepteur : Cela n'affecte pas les armes de Compagnon."
            ]
          },
          {
            c: "move",
            t: "Une Fois par Tour (Armée), Votre Phase de Mouvement",
            n: "Envahisseurs Impavides",
            x: [
              "Annonce : Choisissez comme cible une unité amie en mêlée.",
              "Effet : Si la cible utilise une aptitude de REPLI à ce tour, aucun dégât mortel ne lui est infligé et elle peut quand même utiliser une aptitude de CHARGE au même tour."
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
            n: "Lame Assoiffée de Sang",
            x: ["Effet : La caractéristique de Perforation de la Hache Gravée de Runes de votre général est 2."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Talisman d'Ombre Divine",
            x: ["Effet : Votre général a une PROTECTION (4+)."]
          },
          {
            c: "charge",
            t: "Votre Phase de Charge",
            n: "Champion des Raids",
            x: [
              "Annonce : Choisissez comme cible une autre unité amie qui est entièrement à 12\" de votre général.",
              "Effet : La cible peut relancer ses jets de charge pour le restant du tour."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Horrible Ritualiste",
            x: [
              "Effet : Chaque fois que vous piochez des cartes de tactique de bataille, si votre général est sur le champ de bataille, vous pouvez choisir de piocher 1 carte de tactique de bataille supplémentaire, puis de mettre sous votre pile de tactiques de bataille 1 des cartes de tactique de bataille de votre main."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Serments Ténébreux": ["hero"],
    "Rage d'Arkhar": ["fight", "fight-opp"],
    "Envahisseurs Impavides": ["move"],
    "Lame Assoiffée de Sang": ["fight"],
    "Talisman d'Ombre Divine": ["shoot-opp", "fight-opp"],
    "Champion des Raids": ["charge"],
    "Horrible Ritualiste": ["hero"],
    "Serment de Suprématie": ["hero"],
    "Visions de Gloire": ["hero"],
    "Assaillants Véloces": ["shoot-opp"],
    "Glorieux Trépas": ["fight-opp"]
  }
});
