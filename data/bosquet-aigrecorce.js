// Spearhead : Sylvaneths – Bosquet d'Aigrécorce
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "bosquet-aigrecorce",
  name: "Bosquet d'Aigrécorce",
  faction: "Sylvaneths",
  cover: "img/bosquet-aigrecorce/armee.jpg",
  photos: { armee: "img/bosquet-aigrecorce/armee.jpg" },
  units: [
    {
      id: "branchanteresse",
      en: "Branchanteresse",
      stats: { M: '5\"', S: 6, C: 2, Sv: "5+" },
      weapons: [
        { n: "Faux de Ronce", range: "Mêlée", a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Magie Verdoyante",
          x: [
            "Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
            "Effet : Sur 5+, Soignez (D3) la cible ou ajoutez 1 à la caractéristique de Perforation des armes de mêlée de la cible jusqu'au début de votre prochain tour."
          ]
        }
      ],
      kw: "HÉROS, SORCIER, INFANTERIE"
    },
    {
      id: "sylviarque",
      en: "Sylviarque",
      stats: { M: '5\"', S: 12, C: 5, Sv: "4+" },
      weapons: [
        { n: "Attaques de Balayage", range: "Mêlée", a: 5, h: 4, w: 2, r: 1, d: "2", crit: "none" },
        { n: "Massives Griffes Empaleuses", range: "Mêlée", a: 2, h: 4, w: 2, r: 2, d: "3", crit: "none" }
      ],
      abilities: [
        {
          c: "fight",
          t: "N'importe Quelle Phase de Mêlée",
          n: "Trembleterre",
          x: [
            "Annonce : Choisissez une unité ennemie en mêlée avec cette unité comme cible, puis jetez un dé.",
            "Effet : Sur 4+, la cible a FRAPPE EN DERNIER à cette phase."
          ]
        },
        {
          c: "passive",
          t: "Passif",
          n: "Stigmates de Guerre",
          x: ["Effet : Tant que cette unité a 10 dégâts ou plus, la caractéristique d'Attaques de ses Massives Griffes Empaleuses est de 1."]
        }
      ],
      kw: "MONSTRE"
    },
    {
      id: "chasseurs-kurnoth",
      en: "Chasseurs de Kurnoth",
      stats: { M: '5\"', S: 5, C: 2, Sv: "4+" },
      weapons: [
        { n: "Grand Arc de Kurnoth", range: '18\"', a: 2, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Âpres Griffes", range: "Mêlée", a: 3, h: 3, w: 3, r: 0, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Harmonie des Racines",
          x: ["Effet : Cette unité peut utiliser des aptitudes de TIR même si elle est en mêlée."]
        }
      ],
      kw: "INFANTERIE"
    },
    {
      id: "sylve-revenants",
      en: "Sylve-revenants",
      stats: { M: '6\"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Lames Ancestrales", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Mémoires des Ancêtres",
          x: ["Effet : Ajoutez 1 aux jets de sauvegarde pour cette unité tant qu'elle conteste un objectif."]
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
            t: "Votre Phase des Héros",
            n: "Chant de l'Aspect Estival",
            x: ["Effet : Soignez (1) chaque unité amie qui est à 3\" d'un ou plusieurs éléments de terrain."]
          },
          {
            c: "end",
            t: "Fin de n'importe quel Tour",
            n: "Racines Vivantes",
            x: [
              "Annonce : Choisissez une unité amie qui a utilisé une aptitude de Corps à Corps à ce tour et est à 3\" d'un ou plusieurs éléments de terrain, puis jetez un dé.",
              "Effet : Sur 2+, retirez cette unité du champ de bataille et placez-la à nouveau de sorte que chacune de ses figurines soit à 3\" d'un ou plusieurs éléments de terrain et à plus de 6\" des unités ennemies."
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
            t: "Une Fois par Tour, Fin de n'importe quel Tour",
            n: "Esprits Vengeurs des Terres",
            x: [
              "Annonce : Choisissez une unité ennemie qui conteste un objectif et jetez un dé.",
              "Effet : Sur 4+, infligez D3 dégâts mortels à cette unité ennemie."
            ]
          },
          {
            c: "move",
            t: "Une Fois par Tour, Votre Phase de Mouvement",
            n: "Arpenteurs des Sentiers Cachés",
            x: [
              "Annonce : Choisissez une unité amie qui est à 3\" d'un ou plusieurs éléments de terrain et n'est pas en mêlée.",
              "Effet : Retirez cette unité du champ de bataille et placez-la à nouveau à plus de 6\" des unités ennemies. Cette unité ne peut pas utiliser d'aptitudes de Mouvement jusqu'à la fin de la phase."
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
            t: "Votre Phase des Héros",
            n: "Repousse",
            x: [
              "Annonce : Choisissez une unité amie visible entièrement à 18\" de votre général comme cible, puis faites un jet de lancement de 2D6.",
              "Effet : Sur 5+, Soignez (D6) la cible."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Guerrier Noueux",
            x: ["Effet : Ignorez les modificateurs négatifs aux jets de sauvegarde pour votre général."]
          }
        ]
      }
    ]
  },
  when: {
    "Chant de l'Aspect Estival": ["hero"],
    "Racines Vivantes": ["end"],
    "Esprits Vengeurs des Terres": ["end"],
    "Arpenteurs des Sentiers Cachés": ["move"],
    "Repousse": ["hero"],
    "Guerrier Noueux": ["shoot-opp", "fight-opp"],
    "Magie Verdoyante": ["hero"],
    "Trembleterre": ["fight", "fight-opp"],
    "Stigmates de Guerre": ["fight"],
    "Harmonie des Racines": ["shoot"],
    "Mémoires des Ancêtres": ["hero"]
  }
});
