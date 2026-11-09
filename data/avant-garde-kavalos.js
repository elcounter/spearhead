// Spearhead : Collecteurs Ossiarques – Avant-garde Kavalos
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "avant-garde-kavalos",
 "name": "Avant-garde Kavalos",
 "faction": "Collecteurs Ossiarques",
 "cover": "img/avant-garde-kavalos/armee.jpg",
 "photos": {"armee": "img/avant-garde-kavalos/armee.jpg", "suzerain-kavalos": "img/avant-garde-kavalos/suzerain-kavalos.jpg", "cohorte-teratique": "img/avant-garde-kavalos/cohorte-teratique.jpg", "juchemorts": "img/avant-garde-kavalos/juchemorts.jpg"},
 "units": [
  {
   "id": "suzerain-kavalos",
   "en": "Suzerain-Kavalos",
   "stats": {
    "M": "10\"",
    "S": 7,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Lame de Commandant",
     "range": "Mêlée",
     "a": 5,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "2",
     "crit": "none",
     "extra": [
      "Charge (+1 Dégât)"
     ]
    },
    {
     "n": "Dents, Sabots et Queues Barbelées de Destrier Kavalos",
     "range": "Mêlée",
     "a": 4,
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
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Signaler l'Avance",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité.",
      "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de charge pour la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "HÉROS, CAVALERIE, PROTECTION (6+)"
  },
  {
   "id": "cohorte-teratique",
   "en": "Cohorte Tératique",
   "stats": {
    "M": "7\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Armes de Cohorte",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "move",
     "t": "N'importe Quelle Phase de Mouvement",
     "n": "Sauvages jusqu'aux Os",
     "x": [
      "Effet : Cette unité peut se déplacer de 3\". Si elle peut entrer en mêlée, elle doit le faire. Si elle était en mêlée au début du mouvement, elle doit terminer ce mouvement en mêlée.",
      "Mots-clés : BASE, MOUVEMENT"
     ]
    }
   ],
   "kw": "BÊTE, PROTECTION (6+), RENFORTS"
  },
  {
   "id": "juchemorts",
   "en": "Juchemorts Kavalos",
   "stats": {
    "M": "10\"",
    "S": 3,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lames de Kavalos",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Dents et Sabots de Destrier Kavalos",
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
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Volte-face",
     "x": [
      "Effet : Si cette unité a chargé à ce tour, jetez un dé. Sur 3+, elle peut se déplacer d'une distance inférieure ou égale à sa caractéristique de Mouvement. Elle peut traverser les portées de mêlée des unités ennemies pendant ce mouvement, mais elle ne peut pas le finir en mêlée."
     ]
    }
   ],
   "kw": "CAVALERIE, PROTECTION (6+)"
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
      "c": "move",
      "t": "Passif",
      "n": "Feinte Calculée",
      "x": [
       "Effet : Aucun dégât mortel n'est infligé aux unités de CAVALERIE amies par les aptitudes de Repli."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour (Armée), Votre Phase des Héros",
      "n": "Lance Kavalos",
      "x": [
       "Annonce : Choisissez comme cible une unité amie.",
       "Effet : Pour le restant du tour, la cible peut passer par-dessus les figurines ennemies comme si elle avait le mot-clé VOL."
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
      "c": "move",
      "t": "Une Fois par Bataille, Votre Phase de Mouvement",
      "n": "Feinte de Retraite",
      "x": [
       "Effet : Pour le restant du tour, les unités amies peuvent utiliser des aptitudes de Charge même si elles ont utilisé une aptitude de Repli au même tour."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Amalgames Renforcés",
      "x": [
       "Annonce : Choisissez comme cible une unité amie.",
       "Effet : La cible a une Protection (5+) pour le restant du tour."
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
      "n": "Puissant Archéossien",
      "x": [
       "Effet : Votre général a une Protection (5+)."
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Lame Meurtrière",
      "x": [
       "Effet : La Lame de Commandant de votre général a Crit (2 Touches)."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Commandant Impérieux",
      "x": [
       "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général.",
       "Effet : Jetez un dé. Sur 3+, ajoutez 2\" à la caractéristique de Mouvement de la cible pour le restant du tour."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Froide Sauvagerie",
      "x": [
       "Annonce : Si votre général n'a pas chargé à ce tour et s'il est en mêlée, choisissez comme cible une unité amie visible et entièrement à 12\" de lui.",
       "Effet : Jetez un dé. Sur 3+, ajoutez 1 à la caractéristique de Perforation des armes de mêlée de la cible, y compris ses armes de Compagnon, pour le restant du tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Feinte Calculée": [
   "move"
  ],
  "Lance Kavalos": [
   "hero"
  ],
  "Feinte de Retraite": [
   "move"
  ],
  "Amalgames Renforcés": [
   "fight",
   "fight-opp"
  ],
  "Puissant Archéossien": [
   "shoot-opp",
   "fight-opp"
  ],
  "Lame Meurtrière": [
   "fight",
   "fight-opp"
  ],
  "Commandant Impérieux": [
   "move"
  ],
  "Froide Sauvagerie": [
   "fight",
   "fight-opp"
  ],
  "Signaler l'Avance": [
   "hero"
  ],
  "Sauvages jusqu'aux Os": [
   "move",
   "move-opp"
  ],
  "Volte-face": [
   "fight",
   "fight-opp"
  ]
 }
});
