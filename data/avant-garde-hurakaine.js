// Spearhead : Suzerains Lumineths – Avant-garde Hurakaine
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "avant-garde-hurakaine",
 "name": "Avant-garde Hurakaine",
 "faction": "Suzerains Lumineths",
 "cover": "img/avant-garde-hurakaine/armee.webp",
 "photos": {"armee": "img/avant-garde-hurakaine/armee.webp", "mage-vent": "img/avant-garde-hurakaine/mage-vent.webp", "esprit-vent": "img/avant-garde-hurakaine/esprit-vent.webp", "charge-vent": "img/avant-garde-hurakaine/charge-vent.webp", "gardes-auraliens": "img/avant-garde-hurakaine/gardes-auraliens.webp"},
 "units": [
  {
   "id": "mage-vent",
   "en": "Mage du Vent Hurakain",
   "stats": {
    "M": "12\"",
    "S": 5,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Souffle Tourbillonnant",
     "range": "12\"",
     "a": 1,
     "h": 2,
     "w": 3,
     "r": 2,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Aspiragillum",
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
     "n": "Guide des Rafales",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, pour le restant du tour : la cible peut utiliser des aptitudes de Repli et quand même utiliser des aptitudes de Tir et/ou de Charge au même tour ; aucun dégât mortel n'est infligé à la cible par les aptitudes de Repli."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, VOL"
  },
  {
   "id": "esprit-vent",
   "en": "Esprit du Vent Hurakain",
   "stats": {
    "M": "18\"",
    "S": 8,
    "C": 5,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Arc de la Vengeance du Vent",
     "range": "15\"",
     "a": 4,
     "h": 2,
     "w": 3,
     "r": 2,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Échardes Tournoyantes",
     "range": "Mêlée",
     "a": 6,
     "h": 2,
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
     "n": "Œil de la Tempête",
     "x": [
      "Effet : Soustrayez 1 aux jets de touche pour les attaques qui ciblent les unités amies tant qu'elles sont entièrement à 6\" de cette unité."
     ]
    },
    {
     "c": "shoot",
     "t": "N'importe Quelle Phase de Tir",
     "n": "Ouragan",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie à laquelle un ou plusieurs dégâts ont été alloués à ce tour par les attaques de tir de cette unité.",
      "Effet : Jetez un dé. Sur 3+, la cible a Frappe en Dernier pour le restant du tour."
     ]
    }
   ],
   "kw": "MONSTRE, VOL, PROTECTION (5+)"
  },
  {
   "id": "charge-vent",
   "en": "Charge-vent Hurakains",
   "stats": {
    "M": "14\"",
    "S": 3,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Arc de Charge-vent",
     "range": "12\"",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Lame de Charge-vent",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Griffes de Coursesylve",
     "range": "Mêlée",
     "a": 2,
     "h": 5,
     "w": 3,
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
     "c": "end",
     "t": "Fin de Votre Tour",
     "n": "Saut dans la Tempête",
     "x": [
      "Effet : Si cette unité n'est pas en mêlée, retirez-la du champ de bataille et replacez-la entièrement à 3\" du bord du champ de bataille sous le vent et à plus de 6\" des unités ennemies.",
      "Mot-clé : PORTÉ PAR L'OURAGAN"
     ]
    }
   ],
   "kw": "CAVALERIE"
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
     "n": "Pique et Lame de Garde",
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
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Mur de Lames",
     "x": [
      "Effet : Si cette unité n'a pas chargé à ce tour et si elle est en mêlée avec une unité ennemie qui a chargé à ce tour, jetez un dé. Ajoutez 1 au jet si l'unité ennemie a le mot-clé CAVALERIE. Sur 3+, cette unité de Gardes Auraliens Vanari a Frappe en Premier pour le restant du tour."
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
      "t": "Phase de Déploiement",
      "n": "La Tempête se Lève",
      "x": [
       "Annonce : Choisissez comme cible un bord du champ de bataille.",
       "Effet : Ce bord est sous le vent. Pour le restant de la bataille, chaque fois qu'une aptitude PORTÉE PAR L'OURAGAN amie est utilisée, après avoir résolu l'aptitude, remplacez le bord du champ de bataille sous le vent par le suivant dans le sens des aiguilles d'une montre."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Tour (Armée), N'importe Quelle Phase de Mouvement",
      "n": "Entraîné par les Vents",
      "x": [
       "Annonce : Choisissez comme cible une unité amie qui n'est pas en mêlée.",
       "Effet : La cible peut se déplacer d'un D6\", mais doit finir ce mouvement plus près du bord sous le vent. Elle peut traverser les portées de mêlée des unités ennemies, mais ne peut pas finir ce mouvement en mêlée.",
       "Mot-clé : PORTÉ PAR L'OURAGAN"
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Tour (Armée), Réaction : Vous avez annoncé une aptitude d'Attaque",
      "n": "Vent Violent",
      "x": [
       "Utilisé par : L'unité qui utilise l'aptitude d'Attaque annoncée.",
       "Effet : Ajoutez 1 aux jets de touche pour les attaques de l'aptitude d'Attaque si la cible est plus près du bord du champ de bataille sous le vent que l'unité qui utilise l'aptitude « Vent Violent ».",
       "Mot-clé : PORTÉ PAR L'OURAGAN"
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
      "t": "Votre Phase des Héros",
      "n": "Débris Soulevés",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui est plus près du bord du champ de bataille sous le vent que le grand élément de terrain en territoire ami.",
       "Effet : Jetez autant de dés que le numéro du round de bataille en cours. Pour chaque jet de 3+, infligez 1 dégât mortel à la cible.",
       "Mot-clé : PORTÉ PAR L'OURAGAN"
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille (Armée), Phase des Héros Adverse",
      "n": "Bourrasque Rugissante",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie.",
       "Effet : Pour le restant du tour, chaque fois que la cible utilise une aptitude de Mouvement, elle doit terminer ce mouvement plus près du bord du champ de bataille sous le vent."
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
      "n": "Dispersés par les Vents",
      "x": [
       "Effet : Soustrayez 1 aux scores de contrôle des unités ennemies à 6\" de votre général pour chaque aptitude PORTÉE PAR L'OURAGAN amie utilisée à ce round de bataille."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille (Armée), N'importe Quelle Phase des Héros",
      "n": "Murmure-aux-vents",
      "x": [
       "Annonce : Choisissez comme cible un bord du champ de bataille.",
       "Effet : Remplacez le bord du champ de bataille sous le vent par le bord du champ de bataille cible."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Gardiens du Temple",
      "x": [
       "Effet : Tant qu'une ou plusieurs unités d'INFANTERIE amies sont à portée de mêlée de votre général, ce dernier et ces unités d'INFANTERIE ont une Protection (5+)."
      ]
     },
     {
      "c": "shoot",
      "t": "Passif",
      "n": "Tirs Incurvés",
      "x": [
       "Effet : Vous pouvez mesurer la portée et la visibilité des attaques de tir de votre général depuis n'importe quel point du bord du champ de bataille sous le vent."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "La Tempête se Lève": [
   "deploy"
  ],
  "Entraîné par les Vents": [
   "move",
   "move-opp"
  ],
  "Vent Violent": [
   "shoot",
   "fight",
   "fight-opp"
  ],
  "Débris Soulevés": [
   "hero"
  ],
  "Bourrasque Rugissante": [
   "hero-opp"
  ],
  "Dispersés par les Vents": [
   "end",
   "end-opp"
  ],
  "Murmure-aux-vents": [
   "hero",
   "hero-opp"
  ],
  "Gardiens du Temple": [
   "shoot-opp",
   "fight-opp"
  ],
  "Tirs Incurvés": [
   "shoot"
  ],
  "Guide des Rafales": [
   "hero"
  ],
  "Œil de la Tempête": [
   "shoot-opp",
   "fight-opp"
  ],
  "Ouragan": [
   "shoot",
   "shoot-opp"
  ],
  "Saut dans la Tempête": [
   "end"
  ],
  "Mur de Lames": [
   "fight",
   "fight-opp"
  ]
 }
});
