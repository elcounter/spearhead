// Spearhead : Hordegueules Ogors – Beuglement du Tyran
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "beuglement-tyran",
 "name": "Beuglement du Tyran",
 "faction": "Hordegueules Ogors",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "tyran",
   "en": "Tyran",
   "stats": {
    "M": "6\"",
    "S": 8,
    "C": 5,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Pistolets Ogors",
     "range": "10\"",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "D3",
     "crit": "none",
     "extra": [
      "Tir en Mêlée"
     ]
    },
    {
     "n": "Masse-tonnerre",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    },
    {
     "n": "Haste Embrocheuse",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none",
     "extra": [
      "Anti-Monstre (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Brute de Premier Ordre",
     "x": [
      "Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible. Vous ne pouvez pas choisir l'unité ayant cette aptitude.",
      "Effet : Ajoutez 3 au score de contrôle de la cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "boute-fer",
   "en": "Boute-fer",
   "stats": {
    "M": "9\"",
    "S": 9,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Canon Boute-fer",
     "range": "18\"",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "D3+3",
     "crit": "none"
    },
    {
     "n": "Massue",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 0,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Cornes Pointues de Rhinox",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "D3",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "charge",
     "t": "Passif",
     "n": "Charge de Rhinox",
     "x": [
      "Effet : La caractéristique de Dégâts des Cornes Pointues de Rhinox de cette unité est de 3 si elle a chargé au même tour."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  },
  {
   "id": "crache-plomb",
   "en": "Crache-plomb",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Canon Crache-plomb",
     "range": "15\"",
     "a": "D3",
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Coup Fracassant",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 0,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Passif",
     "n": "Tir Calé sur la Panse",
     "x": [
      "Effet : Ajoutez 1 aux jets de touche pour les attaques de tir de cette unité si elle n'a utilisé aucune aptitude de Mouvement à ce tour."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "gloutons",
   "en": "Gloutons Ogors",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Armes d'Ogor",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "charge",
     "t": "Passif",
     "n": "Poussés par la Faim",
     "x": [
      "Effet : Ajoutez 1 aux jets de charge pour cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "mornecrocs",
   "en": "Meute de Mornecrocs",
   "stats": {
    "M": "9\"",
    "S": 6,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Battoir et Hachoir à Proie",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Défenses de Mornecroc",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Briseurs de Ligne",
     "x": [
      "Effet : Soustrayez 1 aux jets de blessure pour les attaques de tir qui ciblent cette unité."
     ]
    }
   ],
   "kw": "CAVALERIE"
  }
 ],
 "army": {
  "id": "armee",
  "en": "Règles de l'armée",
  "sections": [
   {
    "key": "trait",
    "title": "Trait de bataille",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Sur la Voie de la Gueule",
      "x": [
       "Votre unité de Boute-fer et celle de Meute de Mornecrocs ne sont pas placées à la phase de déploiement. À la place, à partir du troisième round de bataille, elles peuvent utiliser l'aptitude « Arrivée Grondante ».",
       "Arrivée Grondante – Effet : Placez cette unité n'importe où sur le champ de bataille, à 1\" du bord du champ de bataille et à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     }
    ]
   },
   {
    "key": "regiment",
    "pick": true,
    "title": "Aptitude de régiment",
    "who": "Aptitude de régiment",
    "abilities": [
     {
      "c": "charge",
      "t": "Une Fois par Phase, N'importe Quelle Phase de Charge",
      "n": "Masse Broyeuse",
      "x": [
       "Annonce : Choisissez n'importe quel nombre d'unités amies qui ont chargé à cette phase.",
       "Effet : Pour chacune de ces unités, choisissez une unité ennemie en mêlée avec elle et jetez un dé. Sur 4+, infligez 1 dégât mortel à l'unité ennemie."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Élevés pour leur Robustesse",
      "x": [
       "Effet : Ajoutez 1 à la caractéristique de Santé de votre unité de Boute-fer et de Meute de Mornecrocs."
      ]
     }
    ]
   },
   {
    "key": "opti",
    "pick": true,
    "title": "Optimisation du général",
    "who": "Optimisation (général)",
    "abilities": [
     {
      "c": "move",
      "t": "Passif",
      "n": "Longues-jambes",
      "x": [
       "Effet : Votre général a une caractéristique de Mouvement de 8\" au lieu de 6\"."
      ]
     },
     {
      "c": "passive",
      "t": "Une Fois par Bataille, Réaction : L'adversaire a annoncé une aptitude d'Attaque et ciblé votre général",
      "n": "Flasque de Sang de Mastauroc",
      "x": [
       "Effet : Votre général a une Protection (3+) à cette phase."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Rugissement Tonitruant",
      "x": [
       "Effet : Jetez un dé. Sur 4+, soustrayez 1 aux jets de touche pour les attaques faites par les unités ennemies à cette phase tant qu'elles sont à 9\" de votre général."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mouvement",
      "n": "Lard-larves",
      "x": [
       "Annonce : Choisissez votre unité de Boute-fer ou de Meute de Mornecrocs si elle est à portée de mêlée de votre général.",
       "Effet : Soignez (D6) l'unité choisie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Sur la Voie de la Gueule": [
   "deploy",
   "move"
  ],
  "Masse Broyeuse": [
   "charge",
   "charge-opp"
  ],
  "Élevés pour leur Robustesse": [
   "shoot-opp",
   "fight-opp"
  ],
  "Longues-jambes": [
   "move"
  ],
  "Flasque de Sang de Mastauroc": [
   "shoot-opp",
   "fight-opp"
  ],
  "Rugissement Tonitruant": [
   "fight",
   "fight-opp"
  ],
  "Lard-larves": [
   "move",
   "move-opp"
  ],
  "Brute de Premier Ordre": [
   "hero"
  ],
  "Charge de Rhinox": [
   "charge",
   "fight"
  ],
  "Tir Calé sur la Panse": [
   "shoot"
  ],
  "Poussés par la Faim": [
   "charge"
  ],
  "Briseurs de Ligne": [
   "shoot-opp"
  ]
 }
});
