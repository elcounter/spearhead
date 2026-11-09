// Spearhead : Disciples de Tzeentch – Troupeau de Guerre de Tzaangors
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "troupeau-tzaangors",
 "name": "Troupeau de Guerre de Tzaangors",
 "faction": "Disciples de Tzeentch",
 "cover": "img/troupeau-tzaangors/armee.jpg",
 "photos": {"armee": "img/troupeau-tzaangors/armee.jpg", "chamane-tzaangor": "img/troupeau-tzaangors/chamane-tzaangor.jpg", "tzaangors-eclaires": "img/troupeau-tzaangors/tzaangors-eclaires.jpg", "tzaangors-flambeciel": "img/troupeau-tzaangors/tzaangors-flambeciel.jpg", "tzaangors": "img/troupeau-tzaangors/tzaangors.jpg"},
 "units": [
  {
   "id": "chamane-tzaangor",
   "en": "Chamane Tzaangor",
   "stats": {
    "M": "14\"",
    "S": 6,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Bâton du Changement et Dague Rituelle",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Dents et Cornes de Disque",
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
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Aura de Mutation",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie visible et à 18\" de cette unité, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 7+, jusqu'au début de votre prochain tour, chaque fois qu'un jet de touche non modifié pour une attaque de mêlée faite par la cible est 1, infligez 1 dégât mortel à la cible après avoir résolu l'aptitude de Corps à Corps."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, CAVALERIE, VOL"
  },
  {
   "id": "tzaangors-eclaires",
   "en": "Tzaangors Éclairés",
   "stats": {
    "M": "14\"",
    "S": 4,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lance de Tzeentch et Bec Acéré",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Dents et Cornes de Disque",
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
     "t": "Passif",
     "n": "Accomplir la Destinée",
     "x": [
      "Effet : Ajoutez 1 aux jets de charge pour cette unité tant que vous êtes l'outsider."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL"
  },
  {
   "id": "tzaangors-flambeciel",
   "en": "Tzaangors Flambeciel",
   "stats": {
    "M": "14\"",
    "S": 4,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Flèche du Destin",
     "range": "18\"",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Bois de Grand Arc et Bec Acéré",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Dents et Cornes de Disque",
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
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Proie Destinée",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie à laquelle un ou plusieurs dégâts ont été alloués par les attaques de tir de cette unité à cette phase.",
      "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée des unités amies qui ciblent l'unité ennemie pour le restant du tour."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL"
  },
  {
   "id": "tzaangors",
   "en": "Tzaangors",
   "stats": {
    "M": "6\"",
    "S": 2,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Lame Sauvage et Bec Acéré",
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
     "c": "fight",
     "t": "Passif",
     "n": "Pillards Ésotériques",
     "x": [
      "Effet : Ajoutez 1 aux jets de blessure pour les attaques de cette unité tant qu'elle est entièrement en territoire ennemi."
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
      "c": "deploy",
      "t": "Déploiement",
      "n": "Arrivée Fatidique (Déploiement)",
      "x": [
       "Votre unité de Tzaangors Éclairés n'est pas placée à la phase de déploiement. À partir du deuxième round de bataille, elle peut utiliser l'aptitude \"Arrivée Fatidique\"."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Arrivée Fatidique",
      "x": [
       "Effet : Placez cette unité entièrement dans votre territoire, à 1\" d'un bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Prédire l'Avenir",
      "x": [
       "Effet : Vous pouvez regarder jusqu'à 3 cartes au sommet de votre pile de tactiques de bataille sans les ajouter à votre main. Puis, dans l'ordre de votre choix, reposez chaque carte face cachée sur le sommet ou au bas de votre pile de tactiques de bataille."
      ]
     },
     {
      "c": "passive",
      "t": "Réaction : Vous avez utilisé un ordre sur une carte de tactique de bataille",
      "n": "Tromper le Destin",
      "x": [
       "Effet : Au lieu de défausser cette carte, reposez-la face cachée au bas de votre pile de tactiques de bataille."
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
      "t": "Passif",
      "n": "Flux Constant",
      "x": [
       "Effet : Tant que vous êtes l'outsider, soustrayez 1 à la caractéristique de Perforation des armes utilisées pour les attaques qui ciblent des unités amies."
      ]
     },
     {
      "c": "hero",
      "t": "Passif",
      "n": "Rites des Arcanes",
      "x": [
       "Effet : Ajoutez 1 aux jets de lancement pour votre général tant qu'il est entièrement à 6\" d'une autre unité amie."
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
      "t": "Une Fois par Bataille, Phase de Mouvement Adverse",
      "n": "Frappe Prédite",
      "x": [
       "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général, et qui n'est pas en mêlée.",
       "Effet : La cible peut se déplacer d'un D6\". Elle ne peut pas traverser la, ni finir à, portée de mêlée des unités ennemies."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Réalité Altérée",
      "x": [
       "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 6+, retirez la cible du champ de bataille et replacez-la entièrement à 12\" de votre général et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Portail Infernal",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie visible et à 18\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 5+, jetez soit 3 dés, soit autant de dés que le nombre de cartes de tactique de bataille que vous avez défaussées pendant cette bataille. Pour chaque jet de 4+, infligez 1 dégât mortel à la cible."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Sorcellerie Mutagène",
      "x": [
       "Annonce : Choisissez comme cible ennemie une unité ennemie visible et à 12\" de votre général. Choisissez ensuite comme cible amie une unité de Tzaangors amie en mêlée avec la cible ennemie.",
       "Effet : Jetez un D3. Sur 2+ : infligez autant de dégâts mortels à la cible ennemie que le résultat du jet ; vous pouvez ramener 1 figurine tuée dans la cible amie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Aura de Mutation": [
   "hero"
  ],
  "Accomplir la Destinée": [
   "charge"
  ],
  "Proie Destinée": [
   "shoot"
  ],
  "Pillards Ésotériques": [
   "fight",
   "fight-opp"
  ],
  "Arrivée Fatidique (Déploiement)": [
   "deploy"
  ],
  "Arrivée Fatidique": [
   "move"
  ],
  "Prédire l'Avenir": [
   "hero"
  ],
  "Tromper le Destin": [
   "hero",
   "end"
  ],
  "Flux Constant": [
   "shoot-opp",
   "fight-opp"
  ],
  "Rites des Arcanes": [
   "hero"
  ],
  "Frappe Prédite": [
   "move-opp"
  ],
  "Réalité Altérée": [
   "hero"
  ],
  "Portail Infernal": [
   "hero"
  ],
  "Sorcellerie Mutagène": [
   "end",
   "end-opp"
  ]
 }
});
