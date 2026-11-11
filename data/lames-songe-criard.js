// Spearhead : Hédonites de Slaanesh – Lames du Songe Criard
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "lames-songe-criard",
 "name": "Lames du Songe Criard",
 "faction": "Hédonites de Slaanesh",
 "cover": "img/lames-songe-criard/armee.webp",
 "photos": {"armee": "img/lames-songe-criard/armee.webp", "eclatoracle": "img/lames-songe-criard/eclatoracle.webp", "traqueurs-fluidelames": "img/lames-songe-criard/traqueurs-fluidelames.webp", "slaangors": "img/lames-songe-criard/slaangors.webp", "archers-ardillons": "img/lames-songe-criard/archers-ardillons.webp"},
 "units": [
  {
   "id": "eclatoracle",
   "en": "Éclatoracle de Slaanesh",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Bâton de Brume",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
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
     "n": "Vision de Damnation",
     "x": [
      "Annonce : Faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, jetez 6 dés. Pour chaque 4+, vous recevez 1 point de dépravation."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE"
  },
  {
   "id": "traqueurs-fluidelames",
   "en": "Traqueurs Fluidelames",
   "stats": {
    "M": "12\"",
    "S": 4,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Haste Fluidelame",
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
     "n": "Langue Venimeuse de Coursier Exalté",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
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
     "t": "Passif",
     "n": "Vélocité Inégalée",
     "x": [
      "Effet : Vous pouvez relancer les jets de charge pour cette unité."
     ]
    }
   ],
   "kw": "CAVALERIE, RENFORTS"
  },
  {
   "id": "slaangors",
   "en": "Slaangors Sanguivores",
   "stats": {
    "M": "6\"",
    "S": 3,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Griffes Acérées",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Griffe Acérée et Arme à Dorures",
     "range": "Mêlée",
     "a": 5,
     "h": 4,
     "w": 3,
     "r": 1,
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
      "Cette unité a 2 Slaangors Sanguivores armés de Griffes Acérées, et 1 Slaangor Sanguivore armé de Griffe Acérée et Arme à Dorures."
     ]
    },
    {
     "c": "shoot",
     "t": "Phase de Tir Adverse",
     "n": "Le Massacre à Tout Prix",
     "x": [
      "Annonce : Cette unité peut utiliser cette aptitude si un ou plusieurs dégâts lui ont été alloués à ce tour.",
      "Effet : Cette unité peut utiliser l'aptitude « Mouvement Normal » comme s'il s'agissait de votre phase de mouvement."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
  },
  {
   "id": "archers-ardillons",
   "en": "Archers Ardillons",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Arc à Traits-béats",
     "range": "18\"",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Lame de Sybarite",
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
     "c": "passive",
     "t": "Passif",
     "n": "Composition (Archers)",
     "x": [
      "Une unité a 5 Archers Ardillons et 1 Homoncule Élixquis. L'autre unité a 5 Archers Ardillons. Les Archers Ardillons sont armés chacun d'un Arc à Traits-béats et d'une Lame de Sybarite. L'Homoncule Élixquis est armé d'une Lame de Sybarite."
     ]
    },
    {
     "c": "shoot",
     "t": "Passif",
     "n": "Tueurs au Pied Léger",
     "x": [
      "Effet : Cette unité peut utiliser des aptitudes de Tir même si elle a utilisé une aptitude de Course au même tour."
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
      "c": "passive",
      "t": "Début du Round de Bataille",
      "n": "Tentations de Slaanesh",
      "x": [
       "Au début du round de bataille, vous recevez 6 dés de tentation. Chaque fois que votre adversaire fait un jet de touche raté, un jet de blessure raté ou un jet de sauvegarde raté, vous pouvez lui offrir un dé de tentation. S'il accepte votre offre, ce jet est remplacé par 6. Les jets remplacés de la sorte ne peuvent pas être relancés ni modifiés.",
       "Chaque fois que votre adversaire accepte votre offre, vous gagnez D6 points de dépravation. Chaque fois qu'il la rejette, infligez D3 dégâts mortels à l'unité pour laquelle le jet a été fait.",
       "Vous ne pouvez pas offrir un dé de tentation pour la même unité ennemie plus d'une fois par phase. À la fin du round de bataille, tous les dés de tentation qu'il vous reste sont perdus.",
       "Toutes les unités amies gagnent les aptitudes passives suivantes selon vos points de dépravation (cumulatives) : 12+ Tourment Tentateur (peut utiliser une aptitude de Course et quand même utiliser des aptitudes de Charge plus tard pendant le tour) ; 18+ Sadisme Scélérat (armes de mêlée Crit (Mortel)) ; 24+ Assouvissement Insouciant (Protection (5+))."
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
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Vitesse Incomparable",
      "x": [
       "Annonce : Choisissez une unité amie pour qu'elle utilise cette aptitude.",
       "Effet : Cette unité a Frappe en Premier à cette phase."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Épicentre de Distraction",
      "x": [
       "Annonce : Choisissez une unité amie pour qu'elle utilise cette aptitude.",
       "Effet : Jusqu'à la fin du tour, l'unité peut utiliser une aptitude de Repli et quand même utiliser des aptitudes de Tir et/ou de Charge plus tard pendant le tour."
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
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Sceptre de Domination",
      "x": [
       "Annonce : Jetez un dé pour chaque unité ennemie en mêlée avec votre général.",
       "Effet : Sur 5+, l'unité concernée par le jet a Frappe en Dernier à cette phase."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Tour, Votre Phase de Tir",
      "n": "Miroir Dénaturant",
      "x": [
       "Annonce : Choisissez une unité ennemie à 9\" de votre général et jetez un dé.",
       "Effet : Sur 4+, soustrayez 1 aux jets de sauvegarde pour cette unité jusqu'au début de votre prochain tour."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Chœur Cacophonique",
      "x": [
       "Annonce : Faites un jet de lancement de 2D6.",
       "Effet : Sur 6+, faites un jet de cacophonie d'un D6. Infligez D3 dégâts mortels à chaque unité ennemie (faites un jet séparé pour chacune) à 6\" de votre général qui a une caractéristique de Contrôle inférieure à ce jet de cacophonie."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Pendentif de Slaanesh",
      "x": [
       "Effet : Soignez (D3) votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Tentations de Slaanesh": [
   "start",
   "shoot-opp",
   "fight-opp"
  ],
  "Vitesse Incomparable": [
   "fight",
   "fight-opp"
  ],
  "Épicentre de Distraction": [
   "move"
  ],
  "Sceptre de Domination": [
   "fight",
   "fight-opp"
  ],
  "Miroir Dénaturant": [
   "shoot"
  ],
  "Chœur Cacophonique": [
   "hero"
  ],
  "Pendentif de Slaanesh": [
   "hero"
  ],
  "Vision de Damnation": [
   "hero"
  ],
  "Vélocité Inégalée": [
   "charge"
  ],
  "Composition": [],
  "Le Massacre à Tout Prix": [
   "shoot-opp"
  ],
  "Composition (Archers)": [],
  "Tueurs au Pied Léger": [
   "move",
   "shoot"
  ]
 }
});
