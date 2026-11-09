// Spearhead : Filles de Khaine – Troupe Écorche-cœur
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "troupe-ecorche-coeur",
  name: "Troupe Écorche-cœur",
  faction: "Filles de Khaine",
  cover: "img/troupe-ecorche-coeur/armee.jpg",
  photos: { armee: "img/troupe-ecorche-coeur/armee.jpg", conjurateurs: "img/troupe-ecorche-coeur/conjurateurs.jpg", erinyes: "img/troupe-ecorche-coeur/erinyes.jpg", ferecaille: "img/troupe-ecorche-coeur/ferecaille.jpg", rodeuses: "img/troupe-ecorche-coeur/rodeuses.jpg" },
  units: [
    {
      id: "ferecaille",
      en: "Ferécaille Melusaï",
      stats: { M: '8\"', S: 6, C: 2, Sv: "5+" },
      weapons: [
        { n: "Keldrisaïth", range: '12\"', a: 2, h: 3, w: 3, r: 1, d: "D3", crit: "none" },
        { n: "Keldrisaïth (mêlée)", range: "Mêlée", a: 6, h: 3, w: 4, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Massacre Total",
          x: [
            "Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible. Vous ne pouvez pas choisir l'unité qui a cette aptitude.",
            "Effet : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de la cible pour le restant du tour."
          ]
        },
        {
          c: "end",
          t: "Fin de n'importe quel Tour",
          n: "Transmuté en Cristal",
          x: [
            "Annonce : Choisissez une unité ennemie à 1\" de cette unité comme cible et jetez un dé.",
            "Effet : Sur 2+, infligez 1 dégât mortel à la cible."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE, PROTECTION (6+)"
    },
    {
      id: "rodeuses",
      en: "Rôdeuses de Sang",
      stats: { M: '8\"', S: 2, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arc Cherchecœur", range: '18\"', a: 3, h: 3, w: 4, r: 1, d: "1", crit: "auto" },
        { n: "Scianlar", range: "Mêlée", a: 2, h: 3, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Cherchecœurs",
          x: [
            "Effet : Les attaques de tir faites par cette unité causent des touches critiques sur des jets de touche non modifiés de 5+ si cette unité n'a utilisé aucune aptitude de MOUVEMENT au même tour."
          ]
        }
      ],
      kw: "INFANTERIE, PROTECTION (6+)"
    },
    {
      id: "conjurateurs",
      en: "Conjurateurs du Feu Maudit",
      stats: { M: '14\"', S: 3, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arbalète de Feu Maudit", range: '10\"', a: 2, h: 3, w: 4, r: 0, d: "1", crit: "none" },
        { n: "Cimeterre Maudit", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Morsure Cruelle de Coursier Noir", range: "Mêlée", a: 2, h: 5, w: 3, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Feu Maudit",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 12\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
            "Effet : Sur 6+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "CAVALERIE, PROTECTION (6+)"
    },
    {
      id: "erinyes",
      en: "Érinyes",
      stats: { M: '6\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Sciansá Appairées", range: "Mêlée", a: 3, h: 3, w: 4, r: 0, d: "1", crit: "auto" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Ferveur Frénétique",
          x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de cette unité si elle a chargé au même tour."]
        }
      ],
      kw: "INFANTERIE, RENFORTS, PROTECTION (6+)"
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
            t: "Passif (début de chaque round)",
            n: "Rites de Sang",
            x: [
              "Au début de chaque round de bataille, toutes les unités amies gagnent l'aptitude passive de Rites de Sang qui correspond au numéro du round de bataille en cours (les unités conservent toutes les aptitudes gagnées aux rounds précédents) :",
              "Round 1 – Soif de Sang Effrénée : Ajoutez 1 aux jets de course pour cette unité.",
              "Round 2 – Fureur Insensée : Ajoutez 1 aux jets de charge pour cette unité.",
              "Round 3 – Rage Zélatrice : Ajoutez 1 aux jets de touche pour les attaques de mêlée faites par cette unité.",
              "Round 4 – Force du Massacreur : Ajoutez 1 aux jets de blessure pour les attaques de mêlée faites par cette unité."
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
            c: "hero",
            t: "Une Fois par Bataille, Votre Phase des Héros",
            n: "Illumination Meurtrière",
            x: [
              "Effet : Toutes les unités amies gagnent l'aptitude passive de Rites de Sang qu'elles auraient gagnées au début du prochain round de bataille (elles conservent cette aptitude jusqu'à la fin de la bataille, mais ne la gagnent pas une deuxième fois au début du prochain round de bataille)."
            ]
          },
          {
            c: "fight",
            t: "Une Fois par Tour (Armée), N'importe Quelle Phase de Mêlée",
            n: "Bénédiction de Khaine",
            x: [
              "Annonce : Choisissez une unité amie entièrement à 12\" de votre général. Vous ne pouvez pas choisir votre général.",
              "Effet : Ajoutez 1 aux jets de protection pour cette unité amie à cette phase."
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
            n: "Baignée dans le Sang",
            x: ["Effet : Chaque fois qu'une figurine est tuée par votre général, Soignez (1) votre général."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Poussée par la Vengeance",
            x: [
              "Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée utilisées par les unités de Rôdeuses de Sang amies tant qu'elles sont entièrement à 12\" de votre général."
            ]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
            n: "Flasque d'Ombre Brume",
            x: [
              "Effet : Jusqu'à la fin de la phase, soustrayez 1 aux jets de touche pour les attaques qui ciblent des unités amies tant qu'elles sont entièrement à 12\" de votre général."
            ]
          },
          {
            c: "hero",
            t: "Votre Phase des Héros",
            n: "Oratrice Zélée",
            x: [
              "Annonce : Choisissez une unité amie entièrement à 9\" de votre général et qui n'est pas en mêlée. Jetez un dé pour chaque figurine tuée de cette unité amie.",
              "Effet : Pour chaque 5+, vous pouvez ramener 1 figurine tuée dans cette unité amie."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Rites de Sang": ["hero"],
    "Illumination Meurtrière": ["hero"],
    "Bénédiction de Khaine": ["fight", "fight-opp"],
    "Baignée dans le Sang": ["fight"],
    "Poussée par la Vengeance": ["fight"],
    "Flasque d'Ombre Brume": ["fight", "fight-opp"],
    "Oratrice Zélée": ["hero"],
    "Massacre Total": ["hero"],
    "Transmuté en Cristal": ["end"],
    "Cherchecœurs": ["shoot"],
    "Feu Maudit": ["hero"],
    "Ferveur Frénétique": ["charge"]
  }
});
