// Spearhead : Seigneurs Ruinemânes – Ost des Tombes de Raclemorts
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "ost-tombes-raclemorts",
 "name": "Ost des Tombes de Raclemorts",
 "faction": "Seigneurs Ruinemânes",
 "cover": "img/ost-tombes-raclemorts/armee.webp",
 "photos": {"armee": "img/ost-tombes-raclemorts/armee.webp", "roi-revenant": "img/ost-tombes-raclemorts/roi-revenant.webp", "garde-tertres": "img/ost-tombes-raclemorts/garde-tertres.webp", "chevaliers-tertres": "img/ost-tombes-raclemorts/chevaliers-tertres.webp", "squelettes": "img/ost-tombes-raclemorts/squelettes.webp"},
 "units": [
  {
   "id": "roi-revenant",
   "en": "Roi Revenant",
   "stats": {
    "M": "4\"",
    "S": 5,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Lame Sépulcrale de l'Enfer",
     "range": "Mêlée",
     "a": 5,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Roi des Os Ambulants",
     "x": [
      "Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de cette unité.",
      "Effet : Jetez un dé. Sur 2+, ajoutez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "garde-tertres",
   "en": "Garde des Tertres",
   "stats": {
    "M": "4\"",
    "S": 1,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lame de Revenant",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Gardes Royaux",
     "x": [
      "Effet : Tant que votre général est à portée de mêlée de cette unité, ces deux unités ont une Protection (5+)."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "chevaliers-tertres",
   "en": "Chevaliers des Tertres",
   "stats": {
    "M": "10\"",
    "S": 3,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lance des Tertres",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "mortal",
     "extra": [
      "Charge (+1 Dégât)"
     ]
    },
    {
     "n": "Sabots et Dents de Coursier Squelette",
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
     "n": "Condamnés à Ressusciter Derechef",
     "x": [
      "Effet : Vous pouvez ramener dans cette unité 1 figurine tuée."
     ]
    }
   ],
   "kw": "CAVALERIE, PROTECTION (6+)"
  },
  {
   "id": "squelettes",
   "en": "Squelettes Raclemorts",
   "stats": {
    "M": "4\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arme Antique",
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
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Légion de Squelettes",
     "x": [
      "Effet : Vous pouvez ramener dans cette unité D3 figurines tuées."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
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
      "t": "Une Fois par Bataille (Armée), Votre Phase de Mouvement",
      "n": "Les Morts sans Repos",
      "x": [
       "Une de vos unités de Squelettes Raclemorts n'est pas placée pendant la phase de déploiement. À la place, à partir du troisième round de bataille, elle peut utiliser l'aptitude « Les Morts se Lèvent ».",
       "Les Morts se Lèvent – Effet : Placez cette unité entièrement à 3\" d'un bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Tour (Armée), Votre Phase de Mêlée",
      "n": "Aura Antique",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie en mêlée avec une unité amie.",
       "Effet : Jetez un dé. Sur 3+, soustrayez 1 à la caractéristique de Perforation des armes de mêlée de la cible jusqu'au début de votre prochain tour."
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
      "t": "Passif",
      "n": "Hordes Irrépressibles",
      "x": [
       "Effet : Ajoutez 1 aux jets de blessure pour les attaques de mêlée des unités amies n'étant pas des HÉROS et qui ciblent une unité ayant moins de figurines que l'unité attaquante."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour (Armée), Votre Phase des Héros",
      "n": "Marche de la Mort",
      "x": [
       "Annonce : Choisissez comme cible une unité amie n'étant pas un HÉROS et n'étant pas en mêlée.",
       "Effet : Pour le restant du tour, ajoutez 1\" à la caractéristique de Mouvement de la cible et 3 à son score de Contrôle."
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
      "n": "Lame de Shyish",
      "x": [
       "Effet : La caractéristique de Perforation de la Lame Sépulcrale de l'Enfer de votre général est 2."
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Esprit Volé",
      "x": [
       "Effet : Chaque fois que votre général inflige une touche critique, Soignez (2) votre général après que l'aptitude d'Attaque a été résolue."
      ]
     },
     {
      "c": "charge",
      "t": "Votre Phase de Charge",
      "n": "Mû par la Haine",
      "x": [
       "Annonce : Choisissez comme cible une autre unité amie entièrement à 12\" de votre général.",
       "Effet : Vous pouvez relancer les jets de charge de la cible pour le restant du tour."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Pendentif Mangeur d'Esprit",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie en mêlée avec votre général.",
       "Effet : Jetez un dé. Sur 2+, la cible a Frappe en Dernier pour le restant du tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Les Morts sans Repos": [
   "deploy",
   "move"
  ],
  "Aura Antique": [
   "fight"
  ],
  "Hordes Irrépressibles": [
   "fight",
   "fight-opp"
  ],
  "Marche de la Mort": [
   "hero"
  ],
  "Lame de Shyish": [
   "fight",
   "fight-opp"
  ],
  "Esprit Volé": [
   "fight",
   "fight-opp"
  ],
  "Mû par la Haine": [
   "charge"
  ],
  "Pendentif Mangeur d'Esprit": [
   "fight",
   "fight-opp"
  ],
  "Roi des Os Ambulants": [
   "hero"
  ],
  "Gardes Royaux": [
   "shoot-opp",
   "fight-opp"
  ],
  "Condamnés à Ressusciter Derechef": [
   "end"
  ],
  "Légion de Squelettes": [
   "end",
   "end-opp"
  ]
 }
});
