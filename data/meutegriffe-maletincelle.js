// Spearhead : Skavens – Meutegriffe Malétincelle
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "meutegriffe-maletincelle",
 "name": "Meutegriffe Malétincelle",
 "faction": "Skavens",
 "cover": "img/meutegriffe-maletincelle/armee.jpg",
 "photos": {"armee": "img/meutegriffe-maletincelle/armee.jpg", "prophete-gris": "img/meutegriffe-maletincelle/prophete-gris.jpg", "colosses-choc": "img/meutegriffe-maletincelle/colosses-choc.jpg", "canon-malefoudre": "img/meutegriffe-maletincelle/canon-malefoudre.jpg", "rats-clans": "img/meutegriffe-maletincelle/rats-clans.jpg"},
 "units": [
  {
   "id": "prophete-gris",
   "en": "Prophète Gris",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Bâton de Malepierre",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 4,
     "r": 1,
     "d": "D3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Volonté du Roi Cornu",
     "x": [
      "Annonce : Choisissez une unité amie entièrement à 13\" de cette unité comme cible, puis jetez un dé.",
      "Effet : Sur 3+, ajoutez le résultat du jet au score de contrôle de la cible jusqu'au début de votre prochain tour."
     ]
    },
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Flétrissement",
     "x": [
      "Annonce : Choisissez une unité ennemie visible à 13\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, infligez D3 dégâts mortels à la cible."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE"
  },
  {
   "id": "colosses-choc",
   "en": "Colosses de Choc",
   "stats": {
    "M": "6\"",
    "S": 6,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Canons Ratlings",
     "range": "15\"",
     "a": "3D6",
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Bombardes à Globes Toxiques",
     "range": "15\"",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 2,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Gantelets Choc",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Coups de Massue",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 0,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Composition",
     "x": [
      "Effet : Cette unité a 1 Colosse de Choc armé de Gantelets Choc, 1 Colosse de Choc armé de Bombardes à Globes Toxiques et Coups de Massue, et 1 Colosse de Choc armé de Canons Ratlings et Coups de Massue."
     ]
    },
    {
     "c": "fight",
     "t": "Passif",
     "n": "Gantelets Choc",
     "x": [
      "Effet : Chaque fois qu'une attaque faite avec les Gantelets Choc de cette unité cause une touche critique, cette attaque cause D6 touches au lieu de 1 (faites un jet de blessure séparé pour chaque touche)."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "canon-malefoudre",
   "en": "Canon à Malefoudre",
   "stats": {
    "M": "3\"",
    "S": 8,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Décharge de Malefoudre",
     "range": "20\"",
     "a": "2D6",
     "h": 4,
     "w": "-",
     "r": "-",
     "d": "-",
     "crit": "none",
     "extra": [
      "Voir ci-dessous"
     ]
    },
    {
     "n": "Dents et Poignards de Servants",
     "range": "Mêlée",
     "a": "D6",
     "h": 4,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Passif",
     "n": "Décharge de Malefoudre",
     "x": [
      "Effet : Chaque attaque faite avec cette arme à une phase donnée doit cibler la même unité ennemie. Chaque touche inflige 1 dégât mortel à la cible et la séquence d'attaque s'arrête."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  },
  {
   "id": "rats-clans",
   "en": "Rats des Clans",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Lame Rouillée",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
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
     "n": "Nuée Grouillante",
     "x": [
      "Effet : Vous pouvez ramener D3 figurines tuées dans cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
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
      "t": "Une Fois par Phase, Phase de Mouvement Adverse",
      "n": "Toujours Trois Coups de Griffes d'Avance",
      "x": [
       "Annonce : Choisissez une unité amie qui n'est pas en mêlée.",
       "Effet : L'unité peut utiliser l'aptitude \"Mouvement Normal\" comme s'il s'agissait de votre phase de mouvement."
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
      "c": "defense",
      "t": "Une Fois par Bataille, Réaction : L'adversaire a annoncé une aptitude d'Attaque et ciblé votre unité Colosses de Choc",
      "n": "Armure Sertie de Malepierre",
      "x": [
       "Utilisé Par : Votre unité de Colosses de Choc.",
       "Effet : Votre unité de Colosses de Choc a une Protection (5+) pour le restant du tour."
      ]
     },
     {
      "c": "end",
      "t": "Passif",
      "n": "Nuée de Rats sans Fin",
      "x": [
       "Effet : Quand une unité de Rats des Clans amie utilise son aptitude \"Nuée Grouillante\", vous pouvez ramener D6 figurines tuées dans l'unité au lieu d'un D3."
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
      "c": "defense",
      "t": "Passif",
      "n": "Manipulateur Habile",
      "x": [
       "Effet : Votre général a une Protection (4+) tant qu'il est à 1\" d'une ou plusieurs unités de Rats des Clans amies."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Évasion",
      "x": [
       "Annonce : Faites un jet de lancement de 2D6.",
       "Effet : Sur 6+, retirez votre général du champ de bataille et placez-le à nouveau sur le champ de bataille à plus de 6\" des unités ennemies. Il ne peut utiliser aucune aptitude de Mouvement à la phase de mouvement suivante."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Cage de Malefoudre",
      "x": [
       "Annonce : Choisissez une unité ennemie visible à 6\" de votre général et jetez un dé.",
       "Effet : Sur 2+, cette unité ennemie a Frappe en Dernier à cette phase. Sur 1, infligez 1 dégât mortel à votre général."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Sauve-qui-peut",
      "x": [
       "Effet : Jetez un dé. Sur 3+, cette unité peut aussitôt utiliser l'aptitude \"Repli\" comme s'il s'agissait de votre phase de mouvement. Si elle le fait, aucun dégât mortel ne lui est infligé."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Volonté du Roi Cornu": [
   "hero"
  ],
  "Flétrissement": [
   "hero"
  ],
  "Composition": [
   "deploy"
  ],
  "Gantelets Choc": [
   "fight",
   "fight-opp"
  ],
  "Décharge de Malefoudre": [
   "shoot"
  ],
  "Nuée Grouillante": [
   "end",
   "end-opp"
  ],
  "Toujours Trois Coups de Griffes d'Avance": [
   "move-opp"
  ],
  "Armure Sertie de Malepierre": [
   "shoot-opp",
   "fight-opp"
  ],
  "Nuée de Rats sans Fin": [
   "end",
   "end-opp"
  ],
  "Manipulateur Habile": [
   "shoot-opp",
   "fight-opp"
  ],
  "Évasion": [
   "hero"
  ],
  "Cage de Malefoudre": [
   "fight",
   "fight-opp"
  ],
  "Sauve-qui-peut": [
   "fight",
   "fight-opp"
  ]
 }
});
