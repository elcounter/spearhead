// Spearhead : Lames de Khorne – Crocs du Dieu du Sang
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "crocs-dieu-sang",
 "name": "Crocs du Dieu du Sang",
 "faction": "Lames de Khorne",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "karanak",
   "en": "Karanak",
   "stats": {
    "M": "8\"",
    "S": 7,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Gueules Sauvages et Griffes Trempées de Sang",
     "range": "Mêlée",
     "a": 6,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none",
     "extra": [
      "Anti-Héros (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "N'importe Quelle Phase des Héros",
     "n": "Traquer la Proie",
     "x": [
      "Effet : Cette unité peut se déplacer de D6\". Elle ne peut pas finir ce mouvement en mêlée sauf si elle était en mêlée au début de ce mouvement et, s'il y a une proie ennemie sur le champ de bataille, elle doit terminer ce mouvement plus près de la proie."
     ]
    }
   ],
   "kw": "HÉROS, BÊTE, PROTECTION (6+)"
  },
  {
   "id": "molosses",
   "en": "Molosses de Khorne",
   "stats": {
    "M": "8\"",
    "S": 2,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Griffes Sang-noir",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Chasseurs Infatigables",
     "x": [
      "Effet : Ajoutez 1 aux jets de charge pour cette unité."
     ]
    }
   ],
   "kw": "BÊTE, PROTECTION (6+), RENFORTS"
  },
  {
   "id": "griffes-karanak",
   "en": "Griffes de Karanak",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Armes de la Chasse",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "2hits"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Chasseurs en Meute",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie en mêlée avec à la fois cette unité et une unité de Molosses de Khorne amie.",
      "Effet : Pour le restant du tour, les attaques de mêlée de cette unité qui ciblent l'unité ennemie causent des touches critiques sur des jets non modifiés de 5+."
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
    "title": "Trait de batailles",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "passive",
      "t": "Début du Round de Bataille",
      "n": "La Proie",
      "x": [
       "Effet : Si aucune unité ennemie n'est la proie, choisissez comme proie une unité ennemie (vous pouvez choisir une unité ennemie qui est en réserve)."
      ]
     },
     {
      "c": "end",
      "t": "Une Fois par Tour, Fin de N'importe Quel Tour",
      "n": "Trempés de Sang",
      "x": [
       "Annonce : Choisissez comme cible une unité amie qui a tué une ou plusieurs figurines ennemies en utilisant une aptitude de Corps à Corps à ce tour.",
       "Effet : Pour le restant de la bataille, les armes de mêlée de la cible ont Crit (Mortel)."
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
      "t": "Passif",
      "n": "Le Fumet du Sang",
      "x": [
       "Effet : Ajoutez 1 aux jets de touche et de blessure pour les attaques de mêlée qui ciblent une unité ennemie ayant subi un ou plusieurs dégâts à ce tour."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Déferlement de Sauvagerie",
      "x": [
       "Annonce : Choisissez comme cible une unité amie en mêlée.",
       "Effet : Pour le restant du tour, ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de la cible. Si la cible est un HÉROS, ajoutez D3 à la caractéristique d'Attaques de ses armes de mêlée au lieu de 1."
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
      "n": "Sustenté par le Sang",
      "x": [
       "Effet : Soignez (D3) votre général."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Chasseur Insaisissable",
      "x": [
       "Effet : Soustrayez 1 aux jets de touche et aux jets de blessure pour les attaques de tir qui ciblent votre général."
      ]
     },
     {
      "c": "charge",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Charge",
      "n": "Bond Fatal",
      "x": [
       "Effet : Pour le restant du tour, quand vous faites des jets de charge pour votre général, vous pouvez jeter un dé supplémentaire, jusqu'à un maximum de 3 dés, mais il doit finir la charge en mêlée avec la proie."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Morsures Furieuses",
      "x": [
       "Effet : Si votre général est en mêlée avec la proie, infligez D3 dégâts mortels à la proie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "La Proie": [
   "start"
  ],
  "Trempés de Sang": [
   "end",
   "end-opp"
  ],
  "Le Fumet du Sang": [
   "fight",
   "fight-opp"
  ],
  "Déferlement de Sauvagerie": [
   "fight",
   "fight-opp"
  ],
  "Sustenté par le Sang": [
   "end",
   "end-opp"
  ],
  "Chasseur Insaisissable": [
   "shoot-opp"
  ],
  "Bond Fatal": [
   "charge",
   "charge-opp"
  ],
  "Morsures Furieuses": [
   "end",
   "end-opp"
  ],
  "Traquer la Proie": [
   "hero",
   "hero-opp"
  ],
  "Chasseurs Infatigables": [
   "charge"
  ],
  "Chasseurs en Meute": [
   "fight",
   "fight-opp"
  ]
 }
});
