// Spearhead : Cours de Mangechairs – Liges Charognards
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "liges-charognards",
 "name": "Liges Charognards",
 "faction": "Cours de Mangechairs",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "grand-regent",
   "en": "Grand Régent Abhorrant",
   "stats": {
    "M": "6\"",
    "S": 6,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Serres et Crocs Sanguinolents",
     "range": "Mêlée",
     "a": 5,
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
     "n": "Transformation Démente",
     "x": [
      "Annonce : Choisissez une unité amie visible entièrement à 18\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, jusqu'au début de votre prochain tour, ajoutez 2\" à la caractéristique de Mouvement de la cible et ajoutez 1 aux jets de blessure pour ses attaques."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "prevots-cryptes",
   "en": "Prévôts des Cryptes",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Arme Maudite",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Garde Royale",
     "x": [
      "Effet : Ajoutez 1 aux jets de protection pour les HÉROS amis qui sont entièrement à portée de mêlée de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS, PROTECTION (5+)"
  },
  {
   "id": "chevaliers-morbheg",
   "en": "Chevaliers de Morbheg",
   "stats": {
    "M": "12\"",
    "S": 4,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lance Sinistre",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Charge (+1 Dégât)"
     ]
    },
    {
     "n": "Griffes et Dents de Hurleur Nocturne",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
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
     "n": "Bond du Prédateur",
     "x": [
      "Effet : Cette unité peut utiliser des aptitudes de Charge même si elle a utilisé une aptitude de Repli au même tour. En outre, aucun dégât mortel n'est infligé à cette unité quand elle utilise des aptitudes de Repli."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL, PROTECTION (6+)"
  },
  {
   "id": "varghulf",
   "en": "Courtisan Varghulf",
   "stats": {
    "M": "10\"",
    "S": 8,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Griffes Immenses",
     "range": "Mêlée",
     "a": 7,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Crocs Acérés",
     "range": "Mêlée",
     "a": 1,
     "h": 3,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Banquet de Victoire",
     "x": [
      "Effet : Si une ou plusieurs figurines ont été tuées par cette unité à ce tour, Soignez (D6) cette unité, et cette unité peut aussitôt utiliser l'aptitude « Repli » sans qu'aucun dégât mortel ne lui soit infligé."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
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
      "n": "Actes de Noblesse",
      "x": [
       "Effet : Chaque fois qu'un HÉROS ami utilise une aptitude de Corps à Corps, après avoir résolu ses attaques, donnez au HÉROS autant de points d'actes de noblesse que de dégâts alloués par l'aptitude. Chaque HÉROS peut avoir un maximum de 6 points d'actes de noblesse à la fois."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Festin Frénétique",
      "x": [
       "Effet : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée utilisées par des unités amies tant qu'elles sont entièrement à 12\" d'un ou plusieurs HÉROS amis qui ont 6 points d'actes de noblesse."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Convoquer de Loyaux Sujets",
      "x": [
       "Annonce : Choisissez un HÉROS ami avec un ou plusieurs points d'actes de noblesse pour qu'il utilise cette aptitude.",
       "Effet : Dépensez n'importe quel nombre de points d'actes de noblesse de ce HÉROS comme suit : choisissez une unité de Prévôts des Cryptes amie à 9\" et dépensez 1 point pour ramener 1 figurine dans cette unité ; choisissez une unité de Chevaliers de Morbheg amie à 9\" et dépensez 2 points pour ramener 1 figurine dans cette unité."
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
      "t": "Passif",
      "n": "Armée de Croisade",
      "x": [
       "Effet : Ajoutez 1 aux jets de course et aux jets de charge pour les unités amies."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Défenseurs du Royaume",
      "x": [
       "Effet : Ajoutez 1 aux jets de sauvegarde pour les unités amies qui contestent un objectif que vous contrôlez."
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
      "c": "passive",
      "t": "Passif",
      "n": "Cape d'Ulgu",
      "x": [
       "Effet : Votre général n'est pas visible des figurines ennemies qui sont à plus de 12\" de lui."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille, Votre Phase des Héros",
      "n": "Calice du Fleuve de Sang",
      "x": [
       "Effet : Soignez (2D3) votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Discours Enflammé",
      "x": [
       "Effet : Jetez un dé pour chaque unité amie entièrement à 12\" de votre général. Ne jetez pas de dé pour votre général. Pour chaque 5+, donnez 1 point d'actes de noblesse à votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Orgie de Sang",
      "x": [
       "Annonce : Choisissez une unité ennemie visible à 18\" de votre général comme cible, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 6+, infligez D3 dégâts mortels à la cible. Puis, si votre unité de Prévôts des Cryptes est à 6\" de la cible, vous pouvez ramener 1 figurine tuée dans votre unité de Prévôts des Cryptes pour chaque dégât alloué par cette aptitude."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Actes de Noblesse": [
   "fight",
   "fight-opp"
  ],
  "Festin Frénétique": [
   "fight",
   "fight-opp"
  ],
  "Convoquer de Loyaux Sujets": [
   "move"
  ],
  "Armée de Croisade": [
   "move",
   "charge"
  ],
  "Défenseurs du Royaume": [
   "shoot-opp",
   "fight-opp"
  ],
  "Cape d'Ulgu": [
   "shoot-opp"
  ],
  "Calice du Fleuve de Sang": [
   "hero"
  ],
  "Discours Enflammé": [
   "hero"
  ],
  "Orgie de Sang": [
   "hero"
  ],
  "Transformation Démente": [
   "hero"
  ],
  "Garde Royale": [
   "shoot-opp",
   "fight-opp"
  ],
  "Bond du Prédateur": [
   "move",
   "charge"
  ],
  "Banquet de Victoire": [
   "end",
   "end-opp"
  ]
 }
});
