// Spearhead : Putrescents de Nurgle – Ost Lugubre
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "ost-lugubre",
 "name": "Ost Lugubre",
 "faction": "Putrescents de Nurgle",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "scribe-avarieur",
   "en": "Scribe Avarieur",
   "stats": {
    "M": "4\"",
    "S": 5,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Éternuements Dégoûtants",
     "range": "7\"",
     "a": "D6",
     "h": 2,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none",
     "extra": [
      "Tir en Mêlée"
     ]
    },
    {
     "n": "Bouche Distendue",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
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
     "n": "Continuez de Compter, je vous Surveille",
     "x": [
      "Annonce : Choisissez une unité de Portepestes amie entièrement à 14\" de cette unité comme cible.",
      "Effet : Faites 1 choix parmi ce qui suit. Les effets durent jusqu'au début de votre prochain tour. Décompte des Coups : ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de l'unité cible. Registre de la Robustesse : ajoutez 1 aux jets de sauvegarde pour l'unité cible."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (5+)"
  },
  {
   "id": "rouillarque",
   "en": "Rouillarque Putregouille",
   "stats": {
    "M": "8\"",
    "S": 8,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Faux Corrodée",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 3,
     "r": 2,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Rostre et Dard de Mouche à Peste",
     "range": "Mêlée",
     "a": 6,
     "h": 4,
     "w": 2,
     "r": 0,
     "d": "1",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "charge",
     "t": "N'importe Quelle Phase de Charge",
     "n": "Ruine et Ravages",
     "x": [
      "Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie à 1\" d'elle comme cible et jetez un dé.",
      "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL, PROTECTION (5+)"
  },
  {
   "id": "pesticrates",
   "en": "Pesticrates Putrides",
   "stats": {
    "M": "4\"",
    "S": 3,
    "C": 1,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Arme Corrodée",
     "range": "Mêlée",
     "a": 4,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Inexorables Assaillants",
     "x": [
      "Annonce : Choisissez une unité d'INFANTERIE ennemie en mêlée avec cette unité comme cible et jetez un dé pour chaque figurine de cette unité qui est à portée de combat de l'unité cible.",
      "Effet : Pour chaque jet supérieur à la caractéristique de Santé de la cible, infligez 1 dégât mortel à la cible."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (5+)"
  },
  {
   "id": "portepestes",
   "en": "Portepestes",
   "stats": {
    "M": "4\"",
    "S": 2,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Épée Pestilentielle",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Nuage de Mouches",
     "x": [
      "Effet : Soustrayez 1 aux jets de touche pour les attaques de tir qui ciblent cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (5+)"
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
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Les Osts Contagieux",
      "x": [
       "Un de vos Rouillarques Putregouilles et une de vos unités de Portepestes ne sont pas placés à la phase de déploiement. À la place, à partir du troisième round de bataille, ils peuvent utiliser l'aptitude « Invocation Démoniaque ».",
       "Invocation Démoniaque – Effet : Placez cette unité n'importe où sur le champ de bataille à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Maladif",
      "x": [
       "Effet : Chaque fois qu'une attaque faite par une figurine amie cause une touche critique, vous recevez 1 point de maladie, jusqu'à un maximum de 7."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Étreinte de Nurgle",
      "x": [
       "Effet : Dépensez n'importe quel nombre de vos points de maladie. Pour chaque point de maladie que vous dépensez, choisissez une unité ennemie en mêlée avec une ou plusieurs de vos unités et jetez un dé. Sur 5+, infligez 1 dégât mortel à cette unité ennemie (vous pouvez choisir la même unité ennemie plusieurs fois)."
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
      "t": "Une Fois par Phase, Votre Phase des Héros",
      "n": "Privilège de Fécondité",
      "x": [
       "Annonce : Choisissez une unité amie.",
       "Effet : Soignez (D3) cette unité."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Infestés de Merveilles",
      "x": [
       "Effet : Chaque fois qu'une figurine amie est tuée, avant de la retirer du jeu, vous pouvez choisir une unité ennemie à 1\" d'elle et jeter un dé. Sur 4+, infligez 1 dégât mortel à l'unité ennemie choisie."
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
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Invocateur de Portepestes",
      "x": [
       "Annonce : Choisissez une unité de Portepestes amie entièrement à 14\" de votre général.",
       "Effet : Ramenez 1 figurine tuée dans cette unité."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Jardinier de Nurgle",
      "x": [
       "Annonce : Si votre général conteste un objectif qui n'est contesté par aucune figurine ennemie, jetez un dé.",
       "Effet : Sur 3+, cet objectif est considéré comme étant profané par vous. Les unités amies ont une Protection (4+) tant qu'elles contestent un objectif profané. Si votre adversaire gagne le contrôle d'un objectif profané, ce dernier n'est plus profané."
      ]
     },
     {
      "c": "shoot",
      "t": "Votre Phase de Tir",
      "n": "Souffle Pestilentiel",
      "x": [
       "Annonce : Choisissez une unité ennemie à 7\" de votre général et jetez un dé pour chaque figurine de l'unité.",
       "Effet : Pour chaque 5+, infligez 1 dégât mortel à cette unité ennemie."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Don de Frénésie Fébrile",
      "x": [
       "Effet : Jusqu'à la fin de la phase, ajoutez 1 à la caractéristique d'Attaques des armes de mêlée utilisées par des unités amies tant qu'elles sont entièrement à 7\" de votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Les Osts Contagieux": [
   "deploy",
   "move"
  ],
  "Maladif": [
   "fight",
   "fight-opp"
  ],
  "Étreinte de Nurgle": [
   "end",
   "end-opp"
  ],
  "Privilège de Fécondité": [
   "hero"
  ],
  "Infestés de Merveilles": [
   "shoot-opp",
   "fight-opp"
  ],
  "Invocateur de Portepestes": [
   "end",
   "end-opp"
  ],
  "Jardinier de Nurgle": [
   "move"
  ],
  "Souffle Pestilentiel": [
   "shoot"
  ],
  "Don de Frénésie Fébrile": [
   "fight",
   "fight-opp"
  ],
  "Continuez de Compter, je vous Surveille": [
   "hero"
  ],
  "Ruine et Ravages": [
   "charge",
   "charge-opp"
  ],
  "Inexorables Assaillants": [
   "end",
   "end-opp"
  ],
  "Nuage de Mouches": [
   "shoot-opp"
  ]
 }
});
