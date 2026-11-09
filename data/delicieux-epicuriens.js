// Spearhead : Hédonites de Slaanesh – Délicieux Épicuriens
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "delicieux-epicuriens",
  name: "Délicieux Épicuriens",
  faction: "Hédonites de Slaanesh",
  cover: "img/delicieux-epicuriens/armee.jpg",
  photos: { armee: "img/delicieux-epicuriens/armee.jpg", charnelles: "img/delicieux-epicuriens/charnelles.jpg", demonettes: "img/delicieux-epicuriens/demonettes.jpg", veneuses: "img/delicieux-epicuriens/veneuses.jpg", "triple-discorde": "img/delicieux-epicuriens/triple-discorde.jpg" },
  units: [
    {
      id: "triple-discorde",
      en: "La Triple Discorde",
      stats: { M: '6\"', S: 6, C: 2, Sv: "5+" },
      weapons: [
        { n: "Lames de la Discorde", range: "Mêlée", a: 6, h: 3, w: 3, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Dispute des Hérauts",
          x: [
            "Annonce : Choisissez une unité ennemie en mêlée avec cette unité.",
            "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée de cette unité qui ciblent la cible pour le restant de la phase."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE, PROTECTION (6+)"
    },
    {
      id: "charnelles",
      en: "Charnelles",
      stats: { M: '10\"', S: 4, C: 1, Sv: "5+" },
      weapons: [
        { n: "Pinces et Crinière Embelée", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "charge",
          t: "Une Fois par Tour (Armée), N'importe Quelle Phase de Charge",
          n: "Musc Soporifique",
          x: [
            "Annonce : Si cette unité n'est pas en mêlée, choisissez comme cible une unité ennemie visible et à 9\" d'elle. Si cette unité est en mêlée, choisissez comme cible une unité ennemie en mêlée avec elle.",
            "Effet : Jetez un dé. Sur 4+, la cible a FRAPPE EN DERNIER pour le restant du tour."
          ]
        }
      ],
      kw: "BÊTE, PROTECTION (6+)"
    },
    {
      id: "demonettes",
      en: "Démonettes",
      stats: { M: '6\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Pinces Perforantes", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Vives et Agiles",
          x: ["Effet : Ajoutez 1 à la caractéristique d'Attaques des Pinces Perforantes de cette unité si elle a chargé au même tour."]
        }
      ],
      kw: "INFANTERIE, RENFORTS, PROTECTION (6+)"
    },
    {
      id: "veneuses",
      en: "Veneuses",
      stats: { M: '14\"', S: 3, C: 1, Sv: "6+" },
      weapons: [
        { n: "Pinces d'Agonie", range: "Mêlée", a: 3, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Anti-Cavalerie (+1 Perf.)"] },
        { n: "Langue Venimeuse de Coursier", range: "Mêlée", a: 2, h: 3, w: 4, r: 0, d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Vitesse du Vif-Argent",
          x: ["Effet : Lorsque vous faites un jet de course pour cette unité, si vous obtenez 1-3, vous pouvez utiliser une valeur de 4 à la place."]
        }
      ],
      kw: "CAVALERIE, PROTECTION (6+)"
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
            n: "Faveur des Plus Volages",
            x: [
              "Effet : Les effets suivants s'appliquent en fonction du nombre d'unités amies sur le champ de bataille. Ces effets ne sont pas cumulatifs :",
              "• 5 unités ou plus : Ajoutez 2 à la caractéristique de Contrôle des unités amies.",
              "• 4 unités : Ajoutez 1 aux jets de touche et de blessure pour les attaques de mêlée des unités amies.",
              "• 3 unités ou moins : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée des unités amies."
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
            n: "Apôtres de la Déchéance",
            x: ["Effet : Quand les joueurs choisissent des unités à tour de rôle pour utiliser une aptitude de Corps à Corps, lorsque c'est votre tour de choisir une unité, vous pouvez choisir 2 unités de Démonettes amies au lieu de 1 unité. Résolvez la deuxième aptitude de Corps à Corps juste après la première."]
          },
          {
            c: "deploy",
            t: "Une Fois par Bataille, Phase de Déploiement",
            n: "Offensive Démoniaque",
            x: [
              "Annonce : Choisissez comme cible une unité de Veneuses ou de Charnelles amie entièrement à 12\" de votre général.",
              "Effet : La cible peut utiliser l'aptitude « Mouvement Normal » comme s'il s'agissait de votre phase de mouvement."
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
            n: "Grâce Dévoyée",
            x: ["Effet : Quand votre général fait un mouvement d'engagement, s'il a chargé au même tour, ajoutez D6\" à la distance qu'il peut parcourir."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Hauts Courtisans",
            x: ["Effet : Tant que votre général est entièrement à portée de mêlée d'une unité de Démonettes amie, ces deux unités ont une PROTECTION (5+)."]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
            n: "Excès de Violence",
            x: ["Effet : Votre général peut utiliser 2 aptitudes de Corps à Corps à cette phase."]
          },
          {
            c: "move",
            t: "Une Fois par Bataille, Votre Phase de Mouvement",
            n: "Éther Dépravé",
            x: ["Effet : Retirez votre général du champ de bataille et replacez-le à plus de 6\" des unités ennemies."]
          }
        ]
      }
    ]
  },
  when: {
    "Faveur des Plus Volages": ["hero"],
    "Apôtres de la Déchéance": ["fight", "fight-opp"],
    "Offensive Démoniaque": ["deploy"],
    "Grâce Dévoyée": ["charge"],
    "Hauts Courtisans": ["shoot-opp", "fight-opp"],
    "Excès de Violence": ["fight", "fight-opp"],
    "Éther Dépravé": ["move"],
    "Dispute des Hérauts": ["fight", "fight-opp"],
    "Musc Soporifique": ["charge"],
    "Vives et Agiles": ["charge"],
    "Vitesse du Vif-Argent": ["move"]
  }
});
