// Spearhead : Hordegueules Ogors – Mangeferraille
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "mangeferraille",
 "name": "Mangeferraille",
 "faction": "Hordegueules Ogors",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "trappeurs",
   "en": "Trappeurs",
   "stats": {
    "M": "6\"",
    "S": 7,
    "C": 5,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arbalète de Trappeur",
     "range": "12\"",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Mâchoire de Croc de Givre",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    },
    {
     "n": "Couteau de Boucherie",
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
     "c": "passive",
     "t": "Passif",
     "n": "Rester Utile",
     "x": [
      "Effet : Tant qu'un ou plusieurs pions de Gnoblar ou de Croc de Givre de cette unité sont sur le champ de bataille, cette unité a une Protection (5+). Chaque fois que vous réussissez un jet de protection pour cette unité, retirez 1 de ses pions du champ de bataille.",
      "Si le pion de Croc de Givre de cette unité est retiré, elle ne peut plus attaquer avec sa Mâchoire de Croc de Givre."
     ]
    },
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "On s'Remue !",
     "x": [
      "Annonce : Choisissez une unité d'INFANTERIE amie qui est entièrement à 12\" de cette unité.",
      "Effet : Jetez un dé. Sur 3+, ajoutez le résultat au score de contrôle de la cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "lance-ferraille",
   "en": "Lance-ferraille Gnoblar",
   "stats": {
    "M": "9\"",
    "S": 9,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Tas de Ferraille",
     "range": "24\"",
     "a": "3D6",
     "h": 4,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "auto"
    },
    {
     "n": "Poignards de Ferrailleurs",
     "range": "Mêlée",
     "a": 7,
     "h": 5,
     "w": 5,
     "r": 0,
     "d": "1",
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
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Pluie de Ferraille",
     "x": [
      "Annonce : Choisissez une unité ennemie dont une ou plusieurs figurines ont été tuées à ce tour par les attaques de tir de cette unité.",
      "Effet : Soustrayez 1 aux jets de touche pour les attaques de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  },
  {
   "id": "gnoblars",
   "en": "Gnoblars",
   "stats": {
    "M": "5\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Trucs Pointus",
     "range": "8\"",
     "a": 1,
     "h": 4,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Armes Hétéroclites",
     "range": "Mêlée",
     "a": 1,
     "h": 5,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Jamais à Court de Volontaires",
     "x": [
      "Effet : Vous pouvez ramener D3 figurines dans cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
  },
  {
   "id": "ventres-durs",
   "en": "Ventres-durs",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arme de Ventre-dur",
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
     "c": "passive",
     "t": "Passif",
     "n": "Aux Ventres-durs de Jouer",
     "x": [
      "Effet : Ignorez les modificateurs négatifs au score de contrôle de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE"
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
      "n": "Mieux Vaut Tard que Jamais",
      "x": [
       "L'unité de Ventres-durs de 4 figurines n'est pas placée pendant la phase de déploiement. À la place, au troisième round de bataille, cette unité peut utiliser l'aptitude « On va au Charbon ».",
       "On va au Charbon – Effet : Placez cette unité entièrement en territoire ami, entièrement à 6\" du bord du champ de bataille, et hors de mêlée."
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
      "c": "hero",
      "t": "N'importe Quelle Phase des Héros",
      "n": "On n'a pas une Vie Facile",
      "x": [
       "Annonce : Choisissez comme cible une unité de Gnoblars amie à portée de mêlée de votre général.",
       "Effet : Jetez un D3. Sur 2+ : Soignez (X) votre général, où X est égal au jet, et 1 figurine de l'unité de Gnoblars cible est tuée."
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Artillerie Frénétique",
      "x": [
       "Effet : Si le jet de charge non modifié pour un Lance-ferraille Gnoblar ami est 6+, ajoutez 3 à la caractéristique d'Attaques de ses armes de Compagnon pour le restant du tour."
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
      "c": "fight",
      "t": "Réaction : Vous avez annoncé une aptitude de Corps à Corps pour votre général",
      "n": "Instinct Sauvage",
      "x": [
       "Effet : Choisissez comme cible une unité amie qui n'a pas utilisé une aptitude de Corps à Corps à ce tour et qui est à portée de mêlée de votre général. La cible peut être choisie pour utiliser une aptitude de Corps à Corps juste après que l'aptitude de Corps à Corps utilisée par votre général a été résolue."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Votre Phase de Mouvement",
      "n": "Vilain Piège",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui est à 12\" de votre général.",
       "Effet : Donnez le pion de Piège de votre général à la cible. Tant qu'elle a un pion de Piège, chaque fois qu'elle est choisie pour utiliser une aptitude de Mouvement ou de Charge, jetez un dé. Sur 4+, l'aptitude de Mouvement ou de Charge n'a aucun effet et le pion de Piège de la cible est retiré."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Corpulence Remarquable",
      "x": [
       "Effet : Ajoutez 2 à la caractéristique de Santé de votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille, N'importe Quelle Phase des Héros",
      "n": "Chasseur Vétéran",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui est à 12\" de votre général.",
       "Effet : Pour le restant du tour, ajoutez 1 à la caractéristique de Perforation des attaques de mêlée de votre général qui ciblent l'unité ennemie choisie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Mieux Vaut Tard que Jamais": [
   "deploy",
   "move"
  ],
  "On n'a pas une Vie Facile": [
   "hero",
   "hero-opp"
  ],
  "Artillerie Frénétique": [
   "charge"
  ],
  "Instinct Sauvage": [
   "fight",
   "fight-opp"
  ],
  "Vilain Piège": [
   "move"
  ],
  "Corpulence Remarquable": [
   "shoot-opp",
   "fight-opp"
  ],
  "Chasseur Vétéran": [
   "hero",
   "hero-opp"
  ],
  "Rester Utile": [
   "shoot-opp",
   "fight-opp"
  ],
  "On s'Remue !": [
   "hero"
  ],
  "Pluie de Ferraille": [
   "shoot"
  ],
  "Jamais à Court de Volontaires": [
   "end",
   "end-opp"
  ],
  "Aux Ventres-durs de Jouer": [
   "end",
   "end-opp"
  ]
 }
});
