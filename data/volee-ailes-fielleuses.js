// Spearhead : Sylvaneths – Volée d'Ailes Fielleuses
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "volee-ailes-fielleuses",
 "name": "Volée d'Ailes Fielleuses",
 "faction": "Sylvaneths",
 "cover": "img/volee-ailes-fielleuses/armee.webp",
 "photos": {"armee": "img/volee-ailes-fielleuses/armee.webp", "archi-revenant": "img/volee-ailes-fielleuses/archi-revenant.webp", "archers-diaphanes": "img/volee-ailes-fielleuses/archers-diaphanes.webp", "lanciers-coursefiel": "img/volee-ailes-fielleuses/lanciers-coursefiel.webp", "veneurs-revenants": "img/volee-ailes-fielleuses/veneurs-revenants.webp"},
 "units": [
  {
   "id": "archi-revenant",
   "en": "Archi-revenant",
   "stats": {
    "M": "12\"",
    "S": 6,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Vouge d'Archi-revenant",
     "range": "Mêlée",
     "a": 5,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Cor de Chasse de Cœurbois",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité.",
      "Effet : Jusqu'au début de votre prochain tour, pour déterminer quels effets de l'aptitude \"Chant de la Chasse\" s'appliquent à la cible, vous comptez comme ayant 1 accord supplémentaire."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, VOL"
  },
  {
   "id": "archers-diaphanes",
   "en": "Archers Diaphanes",
   "stats": {
    "M": "12\"",
    "S": 2,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arc Diaphane",
     "range": "12\"",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Tir en Mêlée"
     ]
    },
    {
     "n": "Serres Cruelles",
     "range": "Mêlée",
     "a": 1,
     "h": 3,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "move",
     "t": "Réaction : Vous avez annoncé une aptitude de Tir pour cette unité",
     "n": "Zéphrites",
     "x": [
      "Effet : Après avoir résolu l'aptitude de Tir annoncée, cette unité peut se déplacer de D6\" maximum. Elle ne peut pas entrer en mêlée en effectuant ce mouvement.",
      "Mots-clés : Mouvement"
     ]
    }
   ],
   "kw": "INFANTERIE, VOL"
  },
  {
   "id": "lanciers-coursefiel",
   "en": "Lanciers Coursefiel",
   "stats": {
    "M": "12\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lance de Coursefiel",
     "range": "Mêlée",
     "a": 3,
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
     "n": "Mandibules de Dragon-follet",
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
     "c": "charge",
     "t": "N'importe Quelle Phase de Charge",
     "n": "Charge de Coursefiel",
     "x": [
      "Annonce : Si cette unité a chargé à cette phase, choisissez comme cible une unité ennemie visible et à 1\" d'elle.",
      "Effet : Jetez un D3. Ajoutez 1 au jet si la cible est la proie ennemie. Sur 2+, infligez à la cible autant de dégâts mortels que le résultat du jet."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL"
  },
  {
   "id": "veneurs-revenants",
   "en": "Veneurs Revenants",
   "stats": {
    "M": "12\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Faucille de Revenant",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "mortal"
    },
    {
     "n": "Mandibules de Dragon-follet",
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
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Bourdonnement Assourdissant",
     "x": [
      "Annonce : Si cette unité n'a pas chargé à ce tour, choisissez comme cible une unité ennemie en mêlée avec elle.",
      "Effet : Jetez un dé. Si le résultat est supérieur à la caractéristique de Contrôle de la cible, soustrayez 1 à la caractéristique d'Attaques des armes de mêlée de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL"
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
      "c": "start",
      "t": "Une Fois par Round de Bataille (Armée), Début du Round de Bataille",
      "n": "Cible de Vengeance",
      "x": [
       "Annonce : S'il n'y a aucune proie ennemie sur le champ de bataille, choisissez comme cible une unité ennemie sur le champ de bataille.",
       "Effet : La cible est la proie pour le restant de la bataille."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Cohésion Aérienne",
      "x": [
       "Effet : Les unités amies ont une portée de cohésion de 2\"."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Chant de la Chasse",
      "x": [
       "Effet : Vous gagnez 1 accord chaque fois qu'une proie ennemie est détruite. Les effets cumulatifs suivants s'appliquent selon le nombre d'accords que vous avez :",
       "1 accord, Simple : Ajoutez 1 aux jets de course et aux jets de charge pour les unités amies tant qu'elles sont à 9\" de la proie ennemie.",
       "2 accords, Équilibré : Ajoutez 1 aux jets de touche pour les attaques des unités amies tant qu'elles sont à 9\" de la proie ennemie.",
       "3 accords ou plus, Mélodieux : Ajoutez 1 aux jets de blessure pour les attaques des unités amies tant qu'elles sont à 9\" de la proie ennemie."
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
      "c": "end",
      "t": "Une Fois par Bataille (Armée), Fin de N'importe Quel Tour",
      "n": "Des Feuilles dans le Vent",
      "x": [
       "Annonce : Choisissez comme cible une unité amie qui est en mêlée.",
       "Effet : La cible peut aussitôt utiliser l'aptitude \"Repli\", comme si c'était votre phase de mouvement, et aucun dégât mortel ne lui est infligé si elle le fait."
      ]
     },
     {
      "c": "end",
      "t": "Une Fois par Tour (Armée), Fin de N'importe Quel Tour",
      "n": "Empreints de Vie",
      "x": [
       "Effet : Soignez (D3) chaque unité amie."
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
      "t": "Passif",
      "n": "Chef de Chasse",
      "x": [
       "Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de votre général tant que la proie ennemie est à 9\" et visible de lui."
      ]
     },
     {
      "c": "fight",
      "t": "Réaction : Vous avez annoncé une aptitude de Corps à Corps pour votre général",
      "n": "Ami des Zéphrites",
      "x": [
       "Effet : Si votre général a chargé à ce tour, il peut se déplacer de 2D6\" maximum après avoir résolu l'aptitude de Corps à Corps. Il ne peut pas finir ce mouvement en mêlée."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille (Armée), N'importe Quelle Phase des Héros",
      "n": "Esprit Audacieux",
      "x": [
       "Effet : Pour le restant du tour, ajoutez 1 aux jets de blessure pour les attaques de mêlée des unités amies tant qu'elles sont à portée de mêlée de votre général."
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Traqueur Rusé",
      "x": [
       "Effet : Tant que votre général est en mêlée, ajoutez 1 aux jets de charge pour les unités amies entièrement à 12\" de lui. Ajoutez 2 au lieu de 1 tant que votre général est en mêlée avec la proie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Cor de Chasse de Cœurbois": [
   "hero"
  ],
  "Zéphrites": [
   "shoot"
  ],
  "Charge de Coursefiel": [
   "charge",
   "charge-opp"
  ],
  "Bourdonnement Assourdissant": [
   "fight",
   "fight-opp"
  ],
  "Cible de Vengeance": [
   "start",
   "start-opp"
  ],
  "Cohésion Aérienne": [
   "move"
  ],
  "Chant de la Chasse": [
   "move",
   "charge",
   "shoot",
   "fight",
   "fight-opp"
  ],
  "Des Feuilles dans le Vent": [
   "end",
   "end-opp"
  ],
  "Empreints de Vie": [
   "end",
   "end-opp"
  ],
  "Chef de Chasse": [
   "fight",
   "fight-opp"
  ],
  "Ami des Zéphrites": [
   "fight"
  ],
  "Esprit Audacieux": [
   "hero",
   "hero-opp"
  ],
  "Traqueur Rusé": [
   "charge"
  ]
 }
});
