// Spearhead : Disciples de Tzeentch – Coterie de Lameflux
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "coterie-lameflux",
  name: "Coterie de Lameflux",
  faction: "Disciples de Tzeentch",
  cover: "img/coterie-lameflux/armee.jpg",
  photos: { acolytes: "img/coterie-lameflux/acolytes.jpg", armee: "img/coterie-lameflux/armee.jpg", incendiaires: "img/coterie-lameflux/incendiaires.jpg", "magister-disque": "img/coterie-lameflux/magister-disque.jpg", tzaangors: "img/coterie-lameflux/tzaangors.jpg", "hurleurs": "img/coterie-lameflux/hurleurs.jpg" },
  units: [
    {
      id: "magister-disque",
      en: "Magister sur Disque de Tzeentch",
      stats: { M: '12\"', S: 6, C: 2, Sv: "5+" },
      weapons: [
        { n: "Éclairs de Tzeentch", range: '18\"', a: 3, h: 3, w: 3, r: 1, d: "D3", crit: "none" },
        { n: "Bâton du Changement", range: "Mêlée", a: 2, h: 4, w: 3, r: 1, d: "D3", crit: "none" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Maleflammes",
          x: [
            "Annonce : Choisissez une unité ennemie visible à 12\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
            "Effet : Sur 6+, infligez D3 dégâts mortels à la cible."
          ]
        }
      ],
      kw: "HÉROS, SORCIER, CAVALERIE, VOL"
    },
    {
      id: "incendiaires",
      en: "Incendiaires de Tzeentch",
      stats: { M: '6\"', S: 2, C: 1, Sv: "5+" },
      weapons: [
        { n: "Torrent de Feu Mutagène", range: '12\"', a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none" },
        { n: "Griffes et Crocs", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "INFANTERIE, VOL"
    },
    {
      id: "hurleurs",
      en: "Hurleurs de Tzeentch",
      stats: { M: '12\"', S: 3, C: 1, Sv: "5+" },
      weapons: [
        { n: "Crocs et Griffes", range: "Mêlée", a: 4, h: 3, w: 3, r: 1, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "BÊTE, VOL"
    },
    {
      id: "tzaangors",
      en: "Tzaangors",
      stats: { M: '6\"', S: 2, C: 1, Sv: "5+" },
      weapons: [
        { n: "Lames de Tzaangor", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }
      ],
      abilities: [],
      kw: "INFANTERIE, RENFORTS"
    },
    {
      id: "acolytes",
      en: "Acolytes Kairiques",
      stats: { M: '5\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Armes Kairiques", range: "Mêlée", a: 1, h: 4, w: 4, r: 0, d: "1", crit: "none" }
      ],
      abilities: [],
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
            c: "deploy",
            t: "Une Fois par Bataille, Début du Premier Round de Bataille",
            n: "Maîtres du Destin",
            x: [
              "Effet : Jetez 9 dés et mettez-les de côté. Ce sont vos dés de destin. Pendant la bataille, au lieu de jeter les dés pour l'un des jets de la liste, vous pouvez choisir un de vos dés de destin et l'utiliser à la place. Une fois utilisé, il est défaussé.",
              "Jets pouvant être remplacés : Jets de lancement, de course, de charge, de touche, de blessure, de sauvegarde."
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
            n: "Formes Éphémères",
            x: ["Effet : Jetez un dé chaque fois qu'une figurine d'Acolyte Kairique amie est tuée à la phase de mêlée. Sur 4+, vous pouvez ramener 1 figurine tuée dans une unité de Tzaangors amie à 9\" de la figurine tuée."]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Conflagration Éternelle",
            x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de tir utilisées par les unités d'Incendiaires de Tzeentch amies."]
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
            n: "Disque de Tzeentch",
            x: ["Effet : Votre général a une PROTECTION (5+)."]
          },
          {
            c: "hero",
            t: "Votre Phase des Héros",
            n: "Clairvoyance du Changement",
            x: [
              "Annonce : Choisissez une unité ennemie visible.",
              "Effet : Jusqu'au début de votre prochain tour, ajoutez 1 aux jets de touche pour les attaques qui ciblent cette unité."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Maîtres du Destin": ["deploy"],
    "Formes Éphémères": ["fight", "fight-opp"],
    "Conflagration Éternelle": ["shoot"],
    "Disque de Tzeentch": ["shoot-opp", "fight-opp"],
    "Clairvoyance du Changement": ["hero"],
    "Maleflammes": ["hero"]
  }
});
