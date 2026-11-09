// Spearhead : Putrescents de Nurgle – Cellule Bubonique
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "cellule-bubonique",
 "name": "Cellule Bubonique",
 "faction": "Putrescents de Nurgle",
 "cover": "img/cellule-bubonique/armee.jpg",
 "photos": {"armee": "img/cellule-bubonique/armee.jpg", "sorcier-gangreneur": "img/cellule-bubonique/sorcier-gangreneur.jpg", "nurglings": "img/cellule-bubonique/nurglings.jpg", "bete-nurgle": "img/cellule-bubonique/bete-nurgle.jpg", "credo-putrefange": "img/cellule-bubonique/credo-putrefange.jpg"},
 "units": [
  {
   "id": "sorcier-gangreneur",
   "en": "Sorcier Gangreneur",
   "stats": {
    "M": "4\"",
    "S": 6,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Bâton de Bois-pourri",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "D3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Abondance de Chair",
     "x": [
      "Annonce : Choisissez comme cible une unité amie entièrement à 12\" de cette unité, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, soustrayez 1 aux jets de blessure pour les attaques qui ciblent cette unité amie jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "nurglings",
   "en": "Nurglings",
   "stats": {
    "M": "4\"",
    "S": 4,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Dents Minuscules mais Acérées",
     "range": "Mêlée",
     "a": 5,
     "h": 5,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "auto"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Nuée sans Fin",
     "x": [
      "Effet : Soignez (D3) cette unité."
     ]
    }
   ],
   "kw": "BÊTE, PROTECTION (5+)"
  },
  {
   "id": "bete-nurgle",
   "en": "Bête de Nurgle",
   "stats": {
    "M": "7\"",
    "S": 8,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Griffes Crasseuses et Gueule Baveuse",
     "range": "Mêlée",
     "a": 5,
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
     "t": "N'importe Quelle Phase de Charge",
     "n": "En Quête d'Attention",
     "x": [
      "Annonce : Si cette unité a chargé à cette phase, choisissez comme cible une unité ennemie en mêlée avec elle.",
      "Effet : Jetez un D3. Sur 2+, infligez à la cible autant de dégâts mortels que le résultat du jet."
     ]
    }
   ],
   "kw": "BÊTE, PROTECTION (5+)"
  },
  {
   "id": "credo-putrefange",
   "en": "Credo de Putrefange",
   "stats": {
    "M": "5\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Sarbacanes de Contagion",
     "range": "12\"",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "auto"
    },
    {
     "n": "Armes de Bilebois",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "move",
     "t": "Passif",
     "n": "Échasses de Bilebois",
     "x": [
      "Effet : Aucun dégât mortel n'est infligé à cette unité quand elle utilise des aptitudes de Repli."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+), RENFORTS"
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
      "n": "Cycle de Corruption",
      "x": [
       "Si c'est le premier round de bataille, jetez un dé pour déterminer quelle aptitude de CYCLE peut être utilisée à ce round de bataille (1 : Nuée de Nuisibles, 2 : Peste Souffreteuse, 3 : Crasse Florissante, 4 : Révulsion Nauséeuse). Si vous obtenez 5 ou 6, relancez le dé.",
       "Si ce n'est pas le premier round de bataille, on utilise l'aptitude de CYCLE suivante de la séquence à ce round de bataille, qui remplace ainsi la précédente."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Nuée de Nuisibles",
      "x": [
       "Effet : Soustrayez 1 aux jets de touche pour les attaques qui ciblent des unités amies.",
       "Mot-clé : CYCLE"
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Peste Souffreteuse",
      "x": [
       "Effet : Tant que des unités ennemies sont à 6\" d'une ou plusieurs unités amies, elles ne peuvent pas utiliser d'aptitude qui soigne ou ramène des figurines tuées dans une unité.",
       "Mot-clé : CYCLE"
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Crasse Florissante",
      "x": [
       "Effet : Soustrayez 3 aux scores de contrôle des unités ennemies tant qu'elles sont en mêlée avec une ou plusieurs unités amies.",
       "Mot-clé : CYCLE"
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Révulsion Nauséeuse",
      "x": [
       "Effet : Soustrayez 1 aux jets de charge pour les unités ennemies.",
       "Mot-clé : CYCLE"
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
      "t": "Une Fois par Tour (Armée), Fin de Votre Tour",
      "n": "Corruption de la Terre",
      "x": [
       "Annonce : Choisissez un élément de terrain, puis jetez un dé pour chaque unité ennemie à 3\" de cet élément de terrain.",
       "Effet : Sur 4+, infligez D3 dégâts mortels à l'unité ennemie."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille, Phase des Héros Adverse",
      "n": "Sol Putréfié",
      "x": [
       "Effet : Pour le restant du tour, soustrayez 1 à la caractéristique de Mouvement des unités ennemies et soustrayez 1 aux jets de course pour les unités ennemies."
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
      "n": "Vitalité Contre-nature",
      "x": [
       "Effet : Votre général a une Protection (4+)."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Suppuration Sous-cutanée",
      "x": [
       "Effet : Soustrayez 1 aux jets de blessure pour les attaques qui ciblent votre général."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Émanation Gazeuse",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie à portée de mêlée de votre général.",
       "Effet : La cible a Frappe en Dernier pour le restant du tour."
      ]
     },
     {
      "c": "shoot",
      "t": "Votre Phase de Tir",
      "n": "Têtes de Mort Gâtées",
      "x": [
       "Annonce : Si votre général n'est pas en mêlée, choisissez comme cible une unité ennemie visible à 7\" de lui.",
       "Effet : Jetez un dé. Sur 4+, infligez 1 dégât mortel à la cible."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Cycle de Corruption": [
   "start"
  ],
  "Nuée de Nuisibles": [
   "shoot-opp",
   "fight-opp"
  ],
  "Peste Souffreteuse": [
   "end",
   "end-opp"
  ],
  "Crasse Florissante": [
   "end",
   "end-opp"
  ],
  "Révulsion Nauséeuse": [
   "charge-opp"
  ],
  "Corruption de la Terre": [
   "end"
  ],
  "Sol Putréfié": [
   "hero-opp"
  ],
  "Vitalité Contre-nature": [
   "shoot-opp",
   "fight-opp"
  ],
  "Suppuration Sous-cutanée": [
   "shoot-opp",
   "fight-opp"
  ],
  "Émanation Gazeuse": [
   "fight",
   "fight-opp"
  ],
  "Têtes de Mort Gâtées": [
   "shoot"
  ],
  "Abondance de Chair": [
   "hero"
  ],
  "Nuée sans Fin": [
   "end",
   "end-opp"
  ],
  "En Quête d'Attention": [
   "charge",
   "charge-opp"
  ],
  "Échasses de Bilebois": [
   "move"
  ]
 }
});
