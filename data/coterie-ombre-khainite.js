// Spearhead : Filles de Khaine – Coterie de l'Ombre Khainite
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "coterie-ombre-khainite",
  name: "Coterie de l'Ombre Khainite",
  faction: "Filles de Khaine",
  cover: "img/coterie-ombre-khainite/armee.jpg",
  photos: { armee: "img/coterie-ombre-khainite/armee.jpg" },
  units: [
    {
      id: "reine-massacre",
      en: "Reine du Massacre sur Chaudron de Sang",
      stats: { M: '6\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Lames de Gardiennes du Sanctuaire", range: "Mêlée", a: 9, h: 3, w: 4, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Révulsion Consacrée",
          x: [
            "Annonce : Choisissez comme cible une unité d'INFANTERIE amie visible et entièrement à 12\" de cette unité.",
            "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de sauvegarde pour la cible jusqu'au début de votre prochain tour."
          ]
        }
      ],
      kw: "HÉROS, PRÊTRE, MACHINE DE GUERRE, PROTECTION (6+)"
    },
    {
      id: "reine-matriarche",
      en: "Reine Matriarche",
      stats: { M: '6\"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Lame de Khaine", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Incitation Sanguinaire",
          x: [
            "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité.",
            "Effet : Si cette unité est en mêlée, les armes de mêlée de la cible ont Crit (Blessure Auto.) pour le restant du tour.",
            "Si cette unité n'est pas en mêlée, jetez un dé. Sur 3+, les armes de mêlée de la cible ont Crit (Blessure Auto.) pour le restant du tour."
          ]
        }
      ],
      kw: "HÉROS, PRÊTRE, INFANTERIE, PROTECTION (6+)"
    },
    {
      id: "meduse",
      en: "Méduse Incarnate",
      stats: { M: '8\"', S: 6, C: 2, Sv: "5+" },
      weapons: [
        { n: "Lance Incarnate", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "shoot",
          t: "Votre Phase de Tir",
          n: "Regard Exsanguinateur",
          x: [
            "Annonce : Si cette unité est en mêlée, choisissez comme cible une unité ennemie en mêlée avec elle. Sinon, choisissez comme cible une unité ennemie visible et à 12\" d'elle.",
            "Effet : Jetez un dé. Sur 3+, infligez 1 dégât mortel à la cible. Puis, si une figurine ennemie a été tuée par ce dégât mortel, infligez 1 dégât mortel supplémentaire à la cible."
          ]
        }
      ],
      kw: "HÉROS, SORCIER, INFANTERIE, PROTECTION (6+)"
    },
    {
      id: "soeurs-massacre",
      en: "Sœurs du Massacre",
      stats: { M: '6\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Fouet Barbelé", range: "Mêlée", a: 3, h: 3, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "Une Fois par Tour (Armée), Phase de Mêlée Adverse",
          n: "Danse de la Mort",
          x: [
            "Effet : Si cette unité est en mêlée, elle peut se déplacer de 2D6\". Elle peut traverser les portées de mêlée des unités ennemies, mais doit finir ce mouvement en mêlée."
          ]
        }
      ],
      kw: "INFANTERIE, RENFORTS, PROTECTION (6+)"
    },
    {
      id: "rodeurs-ombre",
      en: "Rôdeurs de l'Ombre Khainites",
      stats: { M: '6\"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Projectiles Maudits", range: '10\"', a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Lames Meurtrières", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "move",
          t: "Une Fois par Bataille, Votre Phase de Mouvement",
          n: "Bond de l'Ombre",
          x: ["Effet : Retirez cette unité du champ de bataille et replacez-la sur le champ de bataille, à plus de 6\" des unités ennemies."]
        }
      ],
      kw: "INFANTERIE, PROTECTION (6+)"
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
            c: "charge",
            t: "Une Fois par Tour, N'importe Quelle Phase de Charge",
            n: "Masqués par l'Ombre",
            x: [
              "Annonce : Choisissez comme cible une unité d'INFANTERIE amie qui est en mêlée et qui n'a pas chargé à ce tour.",
              "Effet : Soustrayez 1 aux jets de touche et aux jets de blessure pour les attaques de mêlée effectuées contre la cible pour le restant du tour."
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
            t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
            n: "Saignez-les à Blanc",
            x: [
              "Annonce : Choisissez comme cible une unité d'INFANTERIE amie qui est en mêlée et qui n'a pas chargé à ce tour.",
              "Effet : La cible peut se déplacer de 6\", mais elle ne peut pas finir ce mouvement en mêlée."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Frappe Meurtrière",
            x: [
              "Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée des unités d'INFANTERIE amies qui ont chargé au même tour."
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
            c: "fight",
            t: "Une Fois par Bataille, Votre Phase de Mêlée",
            n: "Avatar de l'Ombre",
            x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de votre général pour le restant du tour."]
          },
          {
            c: "shoot",
            t: "Votre Phase de Tir",
            n: "Sang Bouillonnant",
            x: [
              "Annonce : Choisissez comme cible une unité ennemie visible et à 12\" de votre général.",
              "Effet : Jetez un dé. Si le résultat est supérieur ou égal à la caractéristique de Sauvegarde de la cible, divisez par deux sa caractéristique de Mouvement jusqu'au début de votre prochain tour."
            ]
          },
          {
            c: "hero",
            t: "Votre Phase des Héros",
            n: "Exhortations Frénétiques",
            x: [
              "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général.",
              "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de protection pour la cible pour le restant du tour."
            ]
          },
          {
            c: "charge",
            t: "N'importe Quelle Phase de Charge",
            n: "Impact Tranchant",
            x: [
              "Annonce : Si votre général a chargé à cette phase, choisissez comme cible une unité ennemie à 1\" de lui.",
              "Effet : Jetez un D3. Sur 2+, infligez à la cible autant de dégâts mortels que le jet."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Masqués par l'Ombre": ["charge"],
    "Saignez-les à Blanc": ["fight", "fight-opp"],
    "Frappe Meurtrière": ["charge"],
    "Avatar de l'Ombre": ["fight"],
    "Sang Bouillonnant": ["shoot"],
    "Exhortations Frénétiques": ["hero"],
    "Impact Tranchant": ["charge"],
    "Révulsion Consacrée": ["hero"],
    "Incitation Sanguinaire": ["fight", "fight-opp"],
    "Regard Exsanguinateur": ["shoot"],
    "Danse de la Mort": ["fight-opp"],
    "Bond de l'Ombre": ["move"]
  }
});
