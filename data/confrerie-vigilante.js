// Spearhead : Éternels de l'Orage – Confrérie Vigilante
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "confrerie-vigilante",
  name: "Confrérie Vigilante",
  faction: "Éternels de l'Orage",
  cover: "img/confrerie-vigilante/armee.jpg",
  photos: { armee: "img/confrerie-vigilante/armee.jpg", liberators: "img/confrerie-vigilante/liberators.jpg", "seigneur-vigilant": "img/confrerie-vigilante/seigneur-vigilant.jpg", prosecutors: "img/confrerie-vigilante/prosecutors.jpg", "seigneur-veritant": "img/confrerie-vigilante/seigneur-veritant.jpg" },
  units: [
    {
      id: "seigneurvigilant",
      en: "Seigneur-Vigilant sur Gryph-rôdeur",
      stats: { M: '12\"', S: 8, C: 2, Sv: "3+" },
      weapons: [
        { n: "Grande Hache Sanctifiée", range: "Mêlée", a: 5, h: 3, w: 3, r: 2, d: "2", crit: "none" },
        { n: "Bec et Serres de Gryph-rôdeur", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "fight",
          t: "Une Fois par Bataille, N'importe quelle Phase de Mêlée",
          n: "Prononcer la Sentence",
          x: [
            "Annonce : Choisissez une unité amie qui n'est pas un HÉROS entièrement à 12\" de cette unité comme cible.",
            "Effet : La cible peut utiliser 2 aptitudes de CORPS À CORPS à cette phase. Après avoir utilisé la première, toutefois, elle a FRAPPE EN DERNIER pour le reste de la phase."
          ]
        },
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Planifier l'Attaque",
          x: [
            "Annonce : Choisissez un objectif que vous ne contrôlez pas.",
            "Effet : Jusqu'à la fin du tour, ajoutez 1 aux jets de touche des attaques de mêlée des unités amies qui ciblent les unités ennemies contestant l'objectif."
          ]
        }
      ],
      kw: "HÉROS, CAVALERIE"
    },
    {
      id: "seigneur-veritant",
      en: "Seigneur-Véritant",
      stats: { M: '5\"', S: 6, C: 2, Sv: "3+" },
      weapons: [
        { n: "Bâton d'Abjuration", range: "Mêlée", a: 1, h: 3, w: 3, r: 1, d: "3", crit: "none" },
        { n: "Lame de Jugement", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "D3", crit: "none", extra: ["Anti-Sorcier (+1 Perf.)", "Anti-Prêtre (+1 Perf.)"] }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Sentir la Sorcellerie Impie",
          x: [
            "Effet : Le Gryph-corbeau de cette unité est un pion. Cette unité a une PROTECTION (5+) tant que son Gryph-corbeau est sur le champ de bataille.",
            "Si vous faites un jet de protection non modifié de 1 pour cette unité, retirez son Gryph-corbeau du champ de bataille."
          ]
        },
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Feux Purificateurs",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 12\" de cette unité comme cible, puis faites un jet de récitation d'un D6.",
            "Effet : Sur 3+, jetez un dé pour chaque figurine de l'unité cible. Pour chaque 5+, infligez 1 dégât mortel à l'unité cible."
          ]
        }
      ],
      kw: "HÉROS, PRÊTRE, INFANTERIE"
    },
    {
      id: "prosecutors",
      en: "Prosécutors",
      stats: { M: '12\"', S: 2, C: 1, Sv: "3+" },
      weapons: [
        { n: "Javeline d'Orage", range: '10\"', a: 1, h: 3, w: 3, r: 1, d: "D3", crit: "none" },
        { n: "Javeline d'Orage (mêlée)", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Tirailleurs",
          x: ["Effet : Cette unité a une portée de cohésion de 2\"."]
        },
        {
          c: "passive",
          t: "Passif",
          n: "Hérauts de Vertu",
          x: ["Effet : Quand vous faites un jet de charge pour cette unité, jetez 1 dé supplémentaire."]
        }
      ],
      kw: "INFANTERIE, VOL, RENFORTS"
    },
    {
      id: "liberators",
      en: "Libérators",
      stats: { M: '5\"', S: 2, C: 1, Sv: "3+" },
      weapons: [
        { n: "Marteau de Guerre", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "mortal" },
        { n: "Grand Marteau", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "2", crit: "mortal" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Solides Défenseurs",
          x: ["Effet : Ajoutez 3 au score de contrôle de cette unité tant qu'elle conteste un objectif entièrement en territoire ami."]
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
            t: "Une Fois par Tour, Votre Phase des Héros",
            n: "Bouclier d'Azyr",
            x: [
              "Annonce : Choisissez une unité amie.",
              "Effet : Jusqu'à la fin de votre prochain tour, cette unité a une PROTECTION (5+)."
            ]
          },
          {
            c: "charge",
            t: "Une Fois par Bataille, Votre Phase de Charge",
            n: "Charge de l'Orage",
            x: [
              "Annonce : Choisissez une unité amie qui n'est pas en mêlée.",
              "Effet : Cette unité peut utiliser des aptitudes de CHARGE à ce tour même si elle a utilisé une aptitude de COURSE au même tour."
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
            t: "Une Fois par Bataille, Réaction : Vous avez annoncé une aptitude de REPLI",
            n: "Frappez où c'est Nécessaire",
            x: [
              "Utilisé Par : L'unité qui utilise l'aptitude de REPLI.",
              "Effet : Aucun dégât mortel n'est infligé à cette unité par l'aptitude REPLI. En outre, cette unité peut utiliser des aptitudes de CHARGE à ce tour même si elle a utilisé une aptitude REPLI."
            ]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe quelle Phase de Mêlée",
            n: "Flamboiement de Gloire",
            x: [
              "Annonce : Choisissez une unité amie qui est en mêlée.",
              "Effet : Jusqu'à la fin de la phase, chaque fois qu'une figurine de cette unité est tuée, faites un jet de vengeance d'un D6. Sur 4+, infligez 1 dégât mortel à une unité ennemie en mêlée avec cette unité."
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
            n: "Parchemins Sacrés",
            x: ["Effet : Votre général a une PROTECTION (5+)."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Serre de Morrda",
            x: ["Effet : La Grande Hache Sanctifiée de votre général a Crit (Mortel)."]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe quelle Phase de Mêlée",
            n: "Breuvage de Vif-Argent",
            x: ["Effet : Votre général a FRAPPE EN PREMIER à cette phase."]
          },
          {
            c: "end",
            t: "Une Fois par Bataille, Fin de n'importe quel Tour",
            n: "Pendentif du Néant",
            x: [
              "Annonce : Jetez un dé pour chaque unité ennemie qui conteste le même objectif que votre général.",
              "Effet : Sur 2+, soustrayez le résultat du jet au score de contrôle de l'unité ennemie à ce tour."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Bouclier d'Azyr": ["hero"],
    "Charge de l'Orage": ["charge"],
    "Frappez où c'est Nécessaire": ["move"],
    "Flamboiement de Gloire": ["fight", "fight-opp"],
    "Parchemins Sacrés": ["shoot-opp", "fight-opp"],
    "Serre de Morrda": ["fight"],
    "Breuvage de Vif-Argent": ["fight", "fight-opp"],
    "Pendentif du Néant": ["end"],
    "Prononcer la Sentence": ["fight", "fight-opp"],
    "Planifier l'Attaque": ["hero"],
    "Sentir la Sorcellerie Impie": ["shoot-opp", "fight-opp"],
    "Feux Purificateurs": ["hero"],
    "Tirailleurs": ["move"],
    "Hérauts de Vertu": ["charge"],
    "Solides Défenseurs": ["hero"]
  }
});
