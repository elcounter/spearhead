// Spearhead : Gardes Claniques de Drakkblud (Forts Khazalites)
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "khazalite",
 "name": "Gardes Claniques de Drakkblud",
 "faction": "Forts Khazalites",
 "cover": "img/khazalite/armee.webp",
 "photos": {
  "armee": "img/khazalite/armee.webp",
  "boucliers": "img/khazalite/boucliers.webp",
  "canon": "img/khazalite/canon.webp",
  "gholems": "img/khazalite/gholems.webp",
  "hjulda": "img/khazalite/hjulda.webp"
 },
 "units": [
  {
   "id": "hjulda",
   "en": "Hjulda Drakkblud",
   "stats": {
    "M": "4\"",
    "S": 5,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Azangrom",
     "range": "Mêlée",
     "a": 6,
     "h": 3,
     "w": 3,
     "r": 2,
     "d": "2",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre phase des héros",
     "n": "Intimidante",
     "x": [
      "Annonce : choisissez comme cible une unité de Boucliers Claniques amie visible et entièrement à 12\" de ce HÉROS.",
      "Effet : jetez un dé. Si ce HÉROS a une ou plusieurs marques de rancune, vous pouvez relancer le jet. Sur 3+, ajoutez 1 à la caractéristique de Perforation des armes de mêlée de la cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "boucliers",
   "en": "Boucliers Claniques",
   "stats": {
    "M": "4\"",
    "S": 1,
    "C": 1,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Arme de Kromdron",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none",
     "extra": [
      "Anti-INFANTERIE (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "Passif",
     "n": "Durs comme la Pierre",
     "x": [
      "Effet : soustrayez 1 à la caractéristique de Perforation des armes utilisées pour les attaques de mêlée qui ciblent cette unité tant que toutes ses figurines contestent un objectif que vous contrôlez.",
      "À la place, tant que cette unité a une ou plusieurs marques de rancune, soustrayez 1 à la caractéristique de Perforation des armes utilisées pour les attaques qui ciblent cette unité tant qu'elle est entièrement en territoire ennemi."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
  },
  {
   "id": "gholems",
   "en": "Gholems de Gazul",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Grand Marteau de Gazul",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Passif",
     "n": "Puissance de Gazul",
     "x": [
      "Effet : ajoutez 2 au score de contrôle de cette unité si elle a chargé au même tour."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  },
  {
   "id": "canon",
   "en": "Canon Garde-serment",
   "stats": {
    "M": "4\"",
    "S": 6,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Obus Garde-serment",
     "range": "24\"",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "D3+2",
     "crit": "none"
    },
    {
     "n": "Outils de Servants de Garde-serment",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Une fois par tour (armée), votre phase de tir",
     "n": "Apprenti Taperune de Garde-serment",
     "x": [
      "Annonce : choisissez comme cible une unité ennemie qui a été ciblée par toutes les attaques de tir de cette unité à ce tour.",
      "Effet : jetez un dé. Tant que cette unité a une ou plusieurs marques de rancune, vous pouvez relancer le jet. Sur 3+, choisissez 1 des effets suivants :",
      "Rune de Fracture : jusqu'au début de votre prochain tour, soustrayez 1 aux jets de blessure pour les attaques de mêlée de la cible. Vous ne pouvez pas choisir cet effet à votre prochain tour.",
      "Rune de Brûlure : pour le restant du tour, ajoutez 1 aux jets de touche pour les attaques de mêlée qui ciblent l'unité ennemie. Vous ne pouvez pas choisir cet effet à votre prochain tour.",
      "Rune de Choc : la cible a FRAPPE EN DERNIER pour le restant du tour. Vous ne pouvez pas choisir cet effet à votre prochain tour."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  }
 ],
 "army": {
  "sections": [
   {
    "key": "trait",
    "title": "Trait de bataille",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "hero",
      "t": "Une fois par tour, votre phase des héros",
      "n": "Rendez-leur les Honneurs de Gazul",
      "x": [
       "Effet : donnez 1 marque de rancune à une unité amie."
      ]
     }
    ]
   },
   {
    "key": "regiment",
    "title": "Aptitude de régiment",
    "who": "Aptitude de régiment",
    "abilities": [
     {
      "c": "hero",
      "t": "Une fois par bataille, n'importe quelle phase des héros",
      "n": "Guidés par Inghilde",
      "x": [
       "Annonce : choisissez comme cible une unité d'INFANTERIE amie.",
       "Effet : retirez la cible du champ de bataille et replacez-la sur le champ de bataille, à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "passive",
      "t": "Une fois par bataille, phase de déploiement",
      "n": "Soldez la Rancune",
      "x": [
       "Annonce : choisissez une unité ennemie qui sera l'objet de rancune.",
       "Effet : pour le restant de la bataille, vous pouvez relancer les jets de touche de 1 pour les attaques de mêlée des unités d'INFANTERIE amies qui ciblent l'objet de rancune."
      ]
     }
    ],
    "pick": true
   },
   {
    "key": "opti",
    "title": "Optimisation du général",
    "who": "Optimisation (général)",
    "abilities": [
     {
      "c": "fight",
      "t": "Passif",
      "n": "Bière de Cobalt de Ragnisson",
      "x": [
       "Effet : ajoutez 2 à la caractéristique d'Attaques des armes de mêlée de votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Une fois par bataille, votre phase des héros",
      "n": "Intimidation Hardie",
      "x": [
       "Annonce : choisissez comme cible une unité ennemie visible et à 12\" de votre général.",
       "Effet : soustrayez D6 au score de contrôle de la cible jusqu'au début de votre prochain tour."
      ]
     },
     {
      "c": "move",
      "t": "Une fois par bataille, votre phase de mouvement",
      "n": "Tactiques Bien Rodées",
      "x": [
       "Annonce : choisissez comme cible une unité amie visible et entièrement à 12\" de votre général.",
       "Effet : la cible peut utiliser des aptitudes de REPLI et quand même utiliser des aptitudes de CHARGE au même tour. De plus, aucun dégât mortel n'est infligé à la cible par les aptitudes de REPLI qu'elle utilise à ce tour."
      ]
     },
     {
      "c": "shoot",
      "t": "Phase de tir adverse",
      "n": "Châtiment Rancunier",
      "x": [
       "Annonce : choisissez comme cible une unité amie qui n'est pas en mêlée et à qui un ou plusieurs dégâts ont été alloués à cette phase.",
       "Effet : la cible peut utiliser l'aptitude « Mouvement Normal » comme si c'était votre phase de mouvement."
      ]
     }
    ],
    "pick": true
   }
  ]
 },
 "when": {
  "Rendez-leur les Honneurs de Gazul": [
   "hero"
  ],
  "Guidés par Inghilde": [
   "hero",
   "hero-opp"
  ],
  "Soldez la Rancune": [
   "deploy"
  ],
  "Intimidation Hardie": [
   "hero"
  ],
  "Tactiques Bien Rodées": [
   "move"
  ],
  "Bière de Cobalt de Ragnisson": [
   "fight",
   "fight-opp"
  ],
  "Châtiment Rancunier": [
   "shoot-opp"
  ],
  "Intimidante": [
   "hero"
  ],
  "Durs comme la Pierre": [
   "fight",
   "fight-opp",
   "shoot-opp"
  ],
  "Puissance de Gazul": [
   "end"
  ],
  "Apprenti Taperune de Garde-serment": [
   "shoot"
  ]
 }
});
