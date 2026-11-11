// Spearhead : Meute-meurtrière de Crixxit (Skavens)
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "crixxit",
 "name": "Meute-meurtrière de Crixxit",
 "faction": "Skavens",
 "cover": "img/crixxit/armee.webp",
 "photos": {
  "crixxit": "img/crixxit/crixxit.webp",
  "maitremort": "img/crixxit/maitremort.webp",
  "egouts": "img/crixxit/egouts.webp",
  "nocturnes": "img/crixxit/nocturnes.webp",
  "armee": "img/crixxit/armee.webp"
 },
 "units": [
  {
   "id": "crixxit",
   "en": "Maîtremort Crixxit",
   "stats": {
    "M": "7\"",
    "S": 6,
    "C": 2,
    "Sv": "5+",
    "W": "5+"
   },
   "weapons": [
    {
     "n": "Les Lames des Treize Entailles",
     "range": "Mêlée",
     "a": 13,
     "h": 2,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre phase des héros",
     "n": "Attrapez-les, Vite-vite",
     "x": [
      "Annonce : choisissez comme cible une unité amie de Coureurs d'Égouts visible entièrement à 12\" de cette unité. Puis, jetez un dé.",
      "Effet : sur 3+, ajoutez 1 aux jets de charge de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (5+)"
  },
  {
   "id": "maitremort",
   "en": "Maîtremort",
   "stats": {
    "M": "7\"",
    "S": 5,
    "C": 2,
    "Sv": "5+",
    "W": "6+"
   },
   "weapons": [
    {
     "n": "Lame Suintante",
     "range": "Mêlée",
     "a": 5,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "D3",
     "crit": "mortal",
     "extra": [
      "Anti-HÉROS (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "Passif",
     "n": "Tueurs de l'Ombre",
     "x": [
      "Effet : si le jet de touche non modifié pour une attaque qui cible cette unité est 1-4, l'attaque rate et la séquence d'attaque s'arrête."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "egouts",
   "en": "Coureurs d'Égouts",
   "stats": {
    "M": "7\"",
    "S": 1,
    "C": 1,
    "Sv": "6+",
    "W": "6+"
   },
   "weapons": [
    {
     "n": "Lames de Spécialiste Eshin",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "charge",
     "t": "Une fois par tour (armée), votre phase de charge",
     "n": "Rats-bombes",
     "x": [
      "Annonce : vous pouvez utiliser cette aptitude seulement si cette unité a un pion de Rat-bombe. Choisissez comme cible une unité ennemie qui est à 9\" de cette unité. Puis jetez un dé.",
      "Effet : sur 3+, infligez 1 dégât mortel à la cible. Sur 1-2, retirez le pion de Rat-bombe de cette unité du champ de bataille.",
      "Chaque unité de Coureurs d'Égouts possède 1 pion de Rat-bombe."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS, PROTECTION (6+)"
  },
  {
   "id": "nocturnes",
   "en": "Coureurs Nocturnes",
   "stats": {
    "M": "7\"",
    "S": 1,
    "C": 1,
    "Sv": "6+",
    "W": "6+"
   },
   "weapons": [
    {
     "n": "Frondes et Étoiles Empoisonnées",
     "range": "10\"",
     "a": 2,
     "h": 4,
     "w": 4,
     "r": "-",
     "d": "1",
     "crit": "auto",
     "extra": [
      "Tir en mêlée"
     ]
    },
    {
     "n": "Lames Empoisonnées",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 5,
     "r": "-",
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "move",
     "t": "Une fois par tour (armée), n'importe quelle phase de mêlée",
     "n": "Bombes Fumigènes",
     "x": [
      "Annonce : cette unité peut utiliser cette aptitude seulement si elle est en mêlée. Jetez un dé.",
      "Effet : sur 4+, cette unité peut aussitôt utiliser l'aptitude « Repli » comme si c'était votre phase de mouvement."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS, PROTECTION (6+)"
  }
 ],
 "army": {
  "sections": [
   {
    "key": "trait",
    "title": "Trait de bataille",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "move",
      "t": "Une fois par tour (armée), n'importe quelle phase de mêlée",
      "n": "Drapés d'Ombres",
      "x": [
       "Annonce : choisissez un HÉROS ami pour utiliser cette aptitude. Puis choisissez comme cible une unité amie différente qui a 2 figurines ou plus.",
       "Effet : faites un jet de mouvement d'ombre d'un D6. Sur 3+, retirez le HÉROS utilisant cette aptitude du champ de bataille et replacez-le sur le champ de bataille entièrement à 6\" de la cible. Il peut être placé en mêlée avec des unités ennemies déjà en mêlée."
      ]
     }
    ]
   },
   {
    "key": "regiment",
    "title": "Aptitude de régiment",
    "who": "Aptitude de régiment",
    "pick": true,
    "abilities": [
     {
      "c": "move",
      "t": "Une fois par bataille (armée), votre phase de mouvement",
      "n": "Voie de l'Ombre Fuyante",
      "x": [
       "Annonce : choisissez comme cible une unité amie entièrement à 6\" d'un bord du champ de bataille.",
       "Effet : retirez la cible du champ de bataille et replacez-la entièrement à 3\" d'un bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "fight",
      "t": "Une fois par bataille (armée), n'importe quelle phase de mêlée",
      "n": "Voie de la Griffe Perfide",
      "x": [
       "Annonce : choisissez comme cible un HÉROS ami.",
       "Effet : la cible a Frappe en Premier pour le restant du tour."
      ]
     }
    ]
   },
   {
    "key": "opti",
    "title": "Optimisation du général",
    "who": "Optimisation (général)",
    "pick": true,
    "abilities": [
     {
      "c": "charge",
      "t": "Passif",
      "n": "Acrobaties Meurtrières",
      "x": [
       "Effet : quand votre général utilise l'aptitude « Charge », il peut passer à travers les figurines ennemies."
      ]
     },
     {
      "c": "move",
      "t": "Passif",
      "n": "Maître des Ombres",
      "x": [
       "Effet : quand votre général utilise l'aptitude « Drapés d'Ombres », ajoutez 1 au jet de mouvement d'ombre."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Juste une Ombre Quelconque",
      "x": [
       "Effet : quand votre général est entièrement à portée de mêlée d'une unité amie qui a 3 figurines ou plus, votre général a une PROTECTION (4+)."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe quelle phase de mêlée",
      "n": "Le Piaillement qui Tue",
      "x": [
       "Annonce : choisissez comme cible une unité ennemie à 6\" de votre général.",
       "Effet : jetez un dé. Sur 3+, pour le restant du tour, soustrayez 1 aux jets de touche des attaques de la cible."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Drapés d'Ombres": [
   "fight",
   "fight-opp"
  ],
  "Voie de l'Ombre Fuyante": [
   "move"
  ],
  "Voie de la Griffe Perfide": [
   "fight",
   "fight-opp"
  ],
  "Acrobaties Meurtrières": [
   "charge"
  ],
  "Maître des Ombres": [],
  "Juste une Ombre Quelconque": [],
  "Le Piaillement qui Tue": [
   "fight",
   "fight-opp"
  ],
  "Attrapez-les, Vite-vite": [
   "hero"
  ],
  "Tueurs de l'Ombre": [],
  "Rats-bombes": [
   "charge"
  ],
  "Bombes Fumigènes": [
   "fight",
   "fight-opp"
  ]
 }
});
