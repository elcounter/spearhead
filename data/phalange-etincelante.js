// Spearhead : Suzerains Lumineths – Phalange Étincelante
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "phalange-etincelante",
 "name": "Phalange Étincelante",
 "faction": "Suzerains Lumineths",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "cathallar",
   "en": "Cathallar Scinari",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Caresse du Désespoir",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 0,
     "d": "D3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Ténèbres de l'Âme",
     "x": [
      "Annonce : Choisissez une unité ennemie à 12\" de cette unité comme cible, puis jetez un dé.",
      "Effet : Sur 3+, soustrayez D6 au score de contrôle de l'unité cible à ce tour."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE"
  },
  {
   "id": "maitres-lames",
   "en": "Maîtres des Lames Vanari",
   "stats": {
    "M": "6\"",
    "S": 2,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Grande Lame de Métal Solaire : Frappe Parfaite",
     "range": "Mêlée",
     "a": 1,
     "h": "-",
     "w": "-",
     "r": "-",
     "d": "-",
     "crit": "none",
     "extra": [
      "Voir « Maîtres des Épées »"
     ]
    },
    {
     "n": "Grande Lame de Métal Solaire : Grêle de Coups",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "mortal",
     "extra": [
      "Anti-Infanterie (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Passif",
     "n": "Maîtres des Épées",
     "x": [
      "Effet : Chaque fois que cette unité utilise une aptitude de Corps à Corps, vous devez choisir soit Frappe Parfaite soit Grêle de Coups pour toutes les attaques qu'elle fait avec sa Grande Lame de Métal Solaire.",
      "N'utilisez pas la séquence d'attaque pour une attaque faite avec Frappe Parfaite. À la place, jetez un dé. Sur 2+, infligez 1 dégât mortel à l'unité cible."
     ]
    },
    {
     "c": "passive",
     "t": "Passif",
     "n": "Gardiens",
     "x": [
      "Effet : Tant que votre général est entièrement à portée de mêlée de cette unité, cette dernière et votre général ont une Protection (5+)."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "sentinelles",
   "en": "Sentinelles Auraliennes Vanari",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arc Auralien",
     "range": "18\"",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "auto"
    },
    {
     "n": "Dague Vanari",
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
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Tirs en Cloche",
     "x": [
      "Effet : Jusqu'à la fin de la phase, ajoutez 6\" à la caractéristique de Portée des Arcs Auraliens de cette unité mais soustrayez 1 aux jets de touche pour les attaques de tir de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
  },
  {
   "id": "gardes-auraliens",
   "en": "Gardes Auraliens Vanari",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Pique de Garde",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "mortal",
     "extra": [
      "Anti-charge (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
     "n": "Flasque de Feu Lunaire",
     "x": [
      "Annonce : Choisissez une unité ennemie en mêlée avec cette unité et qui a chargé à ce tour comme cible, puis jetez un dé.",
      "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."
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
      "t": "Une Fois par Round de Bataille, Début du Round de Bataille",
      "n": "Facettes Martiales",
      "x": [
       "Effet : Vous devez utiliser cette aptitude au début du round de bataille. Choisissez 1 aptitude de FACETTE MARTIALE. Celle que vous avez choisie peut être utilisée à ce round de bataille mais pas les autres."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour (Armée), Votre Phase des Héros",
      "n": "Puissance de Hysh",
      "x": [
       "Annonce : Choisissez une unité amie.",
       "Effet : Jetez un dé. Sur 2+, jusqu'au début de votre prochain tour, les attaques faites par cette unité causent des touches critiques sur des jets de touche non modifiés de 5+.",
       "Mot-clé : FACETTE MARTIALE"
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Compagnie Scintillante",
      "x": [
       "Effet : Soustrayez 1 aux jets de touche pour les attaques qui ciblent les unités amies.",
       "Mot-clé : FACETTE MARTIALE"
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Réactions Foudroyantes",
      "x": [
       "Effet : Quand les joueurs choisissent à tour de rôle une unité pour utiliser une aptitude de Corps à Corps, quand c'est votre tour de choisir une unité, vous pouvez choisir 2 unités au lieu de 1. Résolvez la deuxième aptitude de Corps à Corps aussitôt après la première.",
       "Mot-clé : FACETTE MARTIALE"
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
      "n": "Talent Mystique",
      "x": [
       "Effet : Ajoutez 1 aux jets de lancement pour votre général.",
       "Mot-clé : FACETTE MARTIALE"
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Réflexes Accrus",
      "x": [
       "Effet : Ajoutez 1 aux jets de sauvegarde pour les unités amies qui utilisent une aptitude de Corps à Corps aussitôt après une autre unité amie en vertu de l'aptitude « Réactions Foudroyantes », jusqu'à la fin de la phase.",
       "Mot-clé : FACETTE MARTIALE"
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
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Chaleur Écrasante",
      "x": [
       "Annonce : Choisissez une unité ennemie visible à 24\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 7+, divisez par deux la caractéristique de Mouvement de cette unité ennemie jusqu'au début de votre prochain tour et jetez un dé. Si le jet est supérieur ou égal à la caractéristique de Sauvegarde de l'unité ennemie, infligez-lui D3 dégâts mortels."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Protection de Hysh",
      "x": [
       "Annonce : Choisissez une unité amie visible entièrement à 12\" de votre général comme cible, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 7+, la cible a une Protection (5+) jusqu'au début de votre prochain tour."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Pierre Gardienne",
      "x": [
       "Effet : Retirez votre général du champ de bataille et placez-le à nouveau n'importe où sur le champ de bataille à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Vitesse de Hysh",
      "x": [
       "Annonce : Choisissez une unité amie visible entièrement à 18\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 5+, doublez la caractéristique de Mouvement de l'unité choisie jusqu'au début de votre prochain tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Facettes Martiales": [
   "start"
  ],
  "Puissance de Hysh": [
   "hero"
  ],
  "Compagnie Scintillante": [
   "shoot-opp",
   "fight-opp"
  ],
  "Réactions Foudroyantes": [
   "fight",
   "fight-opp"
  ],
  "Talent Mystique": [
   "hero"
  ],
  "Réflexes Accrus": [
   "fight",
   "fight-opp"
  ],
  "Chaleur Écrasante": [
   "hero"
  ],
  "Protection de Hysh": [
   "hero"
  ],
  "Pierre Gardienne": [
   "move"
  ],
  "Vitesse de Hysh": [
   "hero"
  ],
  "Ténèbres de l'Âme": [
   "hero"
  ],
  "Maîtres des Épées": [
   "fight",
   "fight-opp"
  ],
  "Gardiens": [
   "shoot-opp",
   "fight-opp"
  ],
  "Tirs en Cloche": [
   "shoot"
  ],
  "Flasque de Feu Lunaire": [
   "fight",
   "fight-opp"
  ]
 }
});
