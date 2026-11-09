// Spearhead : Lames de Khorne – Carnepèlerins Sang-liés
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "carnepelerins-sang-lies",
 "name": "Carnepèlerins Sang-liés",
 "faction": "Lames de Khorne",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "pretre-carnage",
   "en": "Prêtre du Carnage",
   "stats": {
    "M": "5\"",
    "S": 6,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Entailleur et Marteau de Colère",
     "range": "Mêlée",
     "a": 4,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Sang Bouillant",
     "x": [
      "Annonce : Choisissez une unité ennemie visible à 16\" de cette unité comme cible, puis faites un jet de récitation d'un D6.",
      "Effet : Sur 4+, infligez D3 dégâts mortels à la cible."
     ]
    },
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Offrande de Sang",
     "x": [
      "Annonce : Choisissez une unité amie à la portée de mêlée de cette unité comme cible.",
      "Effet : Jetez un dé. Sur 2+, infligez D3 dégâts mortels à la cible et vous gagnez 1 point de dîme de sang."
     ]
    }
   ],
   "kw": "HÉROS, PRÊTRE, INFANTERIE"
  },
  {
   "id": "massacreurs",
   "en": "Massacreurs de Khorne",
   "stats": {
    "M": "8\"",
    "S": 5,
    "C": 2,
    "Sv": "2+"
   },
   "weapons": [
    {
     "n": "Lance de Sang",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Charge (+1 Dégât)"
     ]
    },
    {
     "n": "Sabots d'Airain de Juggernaut",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
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
     "t": "Votre Phase de Charge",
     "n": "Cavalcade d'Airain",
     "x": [
      "Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie à 1\" d'elle comme cible, puis jetez un dé.",
      "Effet : Sur 2+, infligez 1 dégât mortel à la cible."
     ]
    }
   ],
   "kw": "CAVALERIE"
  },
  {
   "id": "guerriers-sang",
   "en": "Guerriers de Sang",
   "stats": {
    "M": "5\"",
    "S": 2,
    "C": 1,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Hache Sanglante et Poing Sanglant",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Aucun Répit",
     "x": [
      "Effet : Chaque fois qu'une figurine de cette unité est tuée, vous pouvez choisir une unité ennemie en mêlée avec cette unité et jetez un dé. Sur 4+, infligez 1 dégât mortel à l'unité ennemie choisie."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "pillards-sang",
   "en": "Pillards de Sang",
   "stats": {
    "M": "5\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Lames de Pillard",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Dévotion Frénétique",
     "x": [
      "Effet : Si cette unité est à 8\" de votre général, vous pouvez ramener D3 figurines tuées dans cette unité."
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
    "title": "Trait de batailles",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "passive",
      "t": "Passif",
      "n": "La Dîme de Sang",
      "x": [
       "Effet : Chaque fois qu'une unité est détruite pendant la bataille, vous recevez 1 point de dîme de sang."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour, N'importe Quelle Phase des Héros",
      "n": "Soif de Meurtre",
      "x": [
       "Annonce : Dépensez 1 point de dîme de sang et choisissez jusqu'à D3 unités amies.",
       "Effet : Chacune de ces unités peut se déplacer d'un D6\" (faites un jet séparé pour chacune)."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour, N'importe Quelle Phase des Héros",
      "n": "Les Têtes Doivent Rouler",
      "x": [
       "Annonce : Dépensez 3 points de dîme de sang et choisissez jusqu'à 3 unités amies.",
       "Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de ces unités jusqu'au début de votre prochain tour."
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
      "c": "passive",
      "t": "Une Fois par Tour, Début de Votre Tour",
      "n": "Élus de Khorne",
      "x": [
       "Effet : Jetez un dé. Sur 2+, vous recevez 1 point de dîme de sang."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Runes Attisées par le Sang",
      "x": [
       "Effet : Les unités amies ont une Protection (5+) si elles ont utilisé une aptitude de Corps à Corps à la même phase."
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
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Resanguination",
      "x": [
       "Annonce : Choisissez une unité amie visible entièrement à 16\" de votre général, puis faites un jet de récitation d'un D6.",
       "Effet : Sur 3+, Soignez (D3) l'unité amie."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "L'Armure Écarlate",
      "x": [
       "Effet : Votre général a une Protection (5+)."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Chasseur de Têtes",
      "x": [
       "Annonce : Choisissez un HÉROS ennemi en mêlée avec votre général.",
       "Effet : Votre général a Frappe en Premier à cette phase, toutes les attaques qu'il fait cette phase doivent cibler ce HÉROS ennemi."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Flammes Impies",
      "x": [
       "Annonce : Choisissez une unité amie visible entièrement à 16\" de votre général, puis faites un jet de récitation d'un D6.",
       "Effet : Sur 4+, ajoutez 1 à la caractéristique de Perforation des armes de mêlée de l'unité jusqu'au début de votre prochain tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "La Dîme de Sang": [
   "end",
   "end-opp"
  ],
  "Soif de Meurtre": [
   "hero",
   "hero-opp"
  ],
  "Les Têtes Doivent Rouler": [
   "hero",
   "hero-opp"
  ],
  "Élus de Khorne": [
   "start"
  ],
  "Runes Attisées par le Sang": [
   "fight",
   "fight-opp"
  ],
  "Resanguination": [
   "hero"
  ],
  "L'Armure Écarlate": [
   "shoot-opp",
   "fight-opp"
  ],
  "Chasseur de Têtes": [
   "fight",
   "fight-opp"
  ],
  "Flammes Impies": [
   "hero"
  ],
  "Sang Bouillant": [
   "hero"
  ],
  "Offrande de Sang": [
   "hero"
  ],
  "Cavalcade d'Airain": [
   "charge"
  ],
  "Aucun Répit": [
   "fight",
   "fight-opp"
  ],
  "Dévotion Frénétique": [
   "end",
   "end-opp"
  ]
 }
});
