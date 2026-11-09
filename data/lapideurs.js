// Spearhead : Fils de Béhémat – Lapideurs
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "lapideurs",
 "name": "Lapideurs",
 "faction": "Fils de Béhémat",
 "cover": "img/lapideurs/armee.jpg",
 "photos": {"armee": "img/lapideurs/armee.jpg", "lance-rochers": "img/lapideurs/lance-rochers.jpg"},
 "units": [
  {
   "id": "lance-rochers",
   "en": "Lance-rochers",
   "stats": {
    "M": "8\"",
    "S": 12,
    "C": 5,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Lancer de Rochers",
     "range": "12\"",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Coup de Boule",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    },
    {
     "n": "Gourdins Massifs et Rochers",
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
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Lâcher, Lancer ou Rouler",
     "x": [
      "Effet : Choisissez 1 des effets suivants qui s'applique à cette unité pour le restant du tour. Vous ne pouvez pas choisir le même effet pour une autre unité amie à ce tour.",
      "Lâcher : Les armes de tir de cette unité ont Tir en Mêlée.",
      "Lancer : Ajoutez 6\" à la caractéristique de Portée des armes de tir de cette unité.",
      "Rouler : Ajoutez 1 aux jets de touche pour les attaques de tir de cette unité."
     ]
    }
   ],
   "kw": "MONSTRE, RENFORTS"
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
      "n": "Cogne-roc",
      "x": [
       "Effet : Ajoutez le mot-clé HÉROS à la fiche d'unité de votre général et retirez-lui le mot-clé RENFORTS."
      ]
     },
     {
      "c": "shoot",
      "t": "Votre Phase de Tir",
      "n": "Renversé",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie à laquelle un ou plusieurs dégâts ont été alloués par les attaques de tir d'une unité amie à ce tour.",
       "Effet : Jetez un dé. Sur 3+, jusqu'au début de votre prochain tour, chaque fois que votre adversaire fait un jet de charge pour la cible, il doit changer le D6 le plus élevé pour qu'il soit égal au D6 le plus faible."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Fermer un Œil",
      "x": [
       "Annonce : Choisissez votre général pour utiliser cette aptitude, puis choisissez comme cible une autre unité amie entièrement à 12\" de lui.",
       "Effet : Ajoutez 1 aux jets de touche pour les attaques de tir de la cible pour le restant du tour."
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
      "n": "Mauvais Coucheurs",
      "x": [
       "Annonce : Choisissez comme cible une unité amie en mêlée.",
       "Effet : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de la cible pour le restant du tour."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Avides et Chapardeurs",
      "x": [
       "Effet : Ajoutez 5 au score de contrôle des unités amies."
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
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Tête Dure",
      "x": [
       "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée faites avec le Coup de Boule de votre général pour le restant du tour."
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Enjambées Gigantesques",
      "x": [
       "Effet : Ajoutez 1 aux jets de charge pour votre général."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Bataille, Votre Phase de Tir",
      "n": "Rocher Porte-bonheur",
      "x": [
       "Effet : Ajoutez 1 à la caractéristique d'Attaques du Lancer de Rochers de votre général pour le restant du tour."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Goinfre Affamé",
      "x": [
       "Effet : Si une ou plusieurs figurines ennemies ont été tuées par les attaques de mêlée de votre général à ce tour, Soignez (D3) votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Lâcher, Lancer ou Rouler": [
   "shoot"
  ],
  "Cogne-roc": [
   "deploy"
  ],
  "Renversé": [
   "shoot"
  ],
  "Fermer un Œil": [
   "hero"
  ],
  "Mauvais Coucheurs": [
   "fight",
   "fight-opp"
  ],
  "Avides et Chapardeurs": [
   "end"
  ],
  "Tête Dure": [
   "fight",
   "fight-opp"
  ],
  "Enjambées Gigantesques": [
   "charge"
  ],
  "Rocher Porte-bonheur": [
   "shoot"
  ],
  "Goinfre Affamé": [
   "end",
   "end-opp"
  ]
 }
});
