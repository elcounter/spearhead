// Spearhead : Vils du Fielobscur – Sifonnés de la Mauvaise Lune
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "sifonnes-mauvaise-lune",
 "name": "Sifonnés de la Mauvaise Lune",
 "faction": "Vils du Fielobscur",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "loufboss",
   "en": "Loufboss",
   "stats": {
    "M": "5\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Tranche-lune",
     "range": "Mêlée",
     "a": 5,
     "h": 4,
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
     "n": "C'est Moi l'Boss",
     "x": [
      "Annonce : Choisissez une unité de Troueurs Luneclans amie entièrement à 12\" de cette unité comme cible.",
      "Effet : Faites 1 choix parmi ce qui suit. Guider les Hordes Lunatiques : si l'unité cible n'est pas en mêlée, vous pouvez ramener D6 figurines tuées dans l'unité cible. Frappez-les pour de Bon ! : ajoutez 1 aux jets de touche pour les attaques faites par l'unité cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "squigaliers",
   "en": "Squigaliers",
   "stats": {
    "M": "D6+8\"",
    "S": 2,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Kégorj'",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Gueule Garnie de Crocs de Squig",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "move",
     "t": "N'importe Quelle Phase de Mouvement",
     "n": "Boing ! Boing ! Boing !",
     "x": [
      "Annonce : Choisissez une unité ennemie par-dessus laquelle une ou plusieurs figurines de cette unité se sont déplacées à cette phase comme cible, puis jetez un dé pour chaque figurine de cette unité qui l'a fait.",
      "Effet : Pour chaque 4+, infligez 1 dégât mortel à la cible."
     ]
    }
   ],
   "kw": "CAVALERIE, VOL"
  },
  {
   "id": "troggoths",
   "en": "Troggoths Ventreroc",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Jet de Rochers",
     "range": "10\"",
     "a": 1,
     "h": 5,
     "w": 2,
     "r": 2,
     "d": "D3",
     "crit": "none"
    },
    {
     "n": "Énorme Masse de Pierre",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Début de N'importe Quel Tour",
     "n": "Régénération",
     "x": [
      "Effet : Soignez (D3) cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (5+)"
  },
  {
   "id": "troueurs",
   "en": "Troueurs Luneclans",
   "stats": {
    "M": "5\"",
    "S": 1,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Troueur",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Rétiaires",
     "x": [
      "Annonce : Choisissez une unité d'INFANTERIE ennemie en mêlée avec cette unité comme cible.",
      "Effet : Jetez un dé. Sur 2+, soustrayez 1 aux jets de touche pour les attaques faites par l'unité cible à cette phase."
     ]
    }
   ],
   "kw": "INFANTERIE"
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
      "t": "Une Fois par Bataille, Au Début du Premier Round de Bataille",
      "n": "Sous la Lueur de la Mauvaise Lune",
      "x": [
       "Annonce : Choisissez un territoire (territoire ami ou territoire ennemi) pour être sous la Lueur de la Mauvaise Lune. Si les deux joueurs peuvent utiliser cette aptitude, les joueurs tirent au dé et le gagnant choisit. Le territoire choisi reste sous la Lueur de la Mauvaise Lune au premier et au deuxième rounds de bataille. Au troisième et au quatrième rounds de bataille, l'autre territoire est sous la Lueur de la Mauvaise Lune.",
       "Effet : Tant qu'une unité amie est entièrement dans le territoire qui est sous la Lueur de la Mauvaise Lune : Zélotes Écumants (Troueurs Luneclans) : ajoutez 3 à son score de contrôle ; Squigs Lunatiques (Squigaliers) : aucun dégât mortel ne lui est infligé quand elle utilise des aptitudes de Repli ; Peau de Lune (Troggoths Ventreroc) : ajoutez 1 aux jets de sauvegarde pour elle."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Squigalanche",
      "x": [
       "Une de vos unités de Squigaliers n'est pas placée à la phase de déploiement. À partir du troisième round de bataille, elle peut utiliser cette aptitude.",
       "Effet : Placez cette unité entièrement dans votre territoire, entièrement à 3\" d'un bord du champ de bataille et à plus de 6\" des unités ennemies."
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
      "n": "Les Hordes Démentes",
      "x": [
       "Annonce : Choisissez une unité de Troueurs Luneclans amie pour qu'elle utilise cette aptitude.",
       "Effet : Vous pouvez ramener jusqu'à D3 figurines tuées dans cette unité."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille (Armée), Votre Phase de Mouvement",
      "n": "La Main de Gork",
      "x": [
       "Annonce : Choisissez une unité amie qui n'est pas en mêlée pour qu'elle utilise cette aptitude.",
       "Effet : Retirez cette unité du champ de bataille et placez-la à nouveau à plus de 9\" des unités ennemies.",
       "Mot-clé : BASE"
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
      "n": "Combattre un Autre Jour",
      "x": [
       "Annonce : Choisissez votre général pour qu'il utilise cette aptitude s'il a utilisé une aptitude de Corps à Corps à ce tour.",
       "Effet : Votre général peut faire un mouvement de 2D6\" mais il ne peut pas finir ce mouvement en mêlée."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "La Kagoule Moite",
      "x": [
       "Effet : Soustrayez 1 aux jets de touche pour les attaques qui ciblent votre général."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Brouets de Champis Hallucinogènes",
      "x": [
       "Effet : Votre général a une Protection (4+) au premier round de bataille, une Protection (5+) au deuxième round de bataille, et une Protection (6+) au troisième et au quatrième rounds de bataille."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Phase de Mouvement Adverse",
      "n": "Champignon d'Ombrenuit",
      "x": [
       "Annonce : Choisissez une unité amie à portée de mêlée de votre général.",
       "Effet : L'unité amie ne peut pas être ciblée par des attaques de tir à la prochaine phase de tir."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Sous la Lueur de la Mauvaise Lune": [
   "start"
  ],
  "Squigalanche": [
   "deploy",
   "move"
  ],
  "Les Hordes Démentes": [
   "hero"
  ],
  "La Main de Gork": [
   "move"
  ],
  "Combattre un Autre Jour": [
   "end",
   "end-opp"
  ],
  "La Kagoule Moite": [
   "shoot-opp",
   "fight-opp"
  ],
  "Brouets de Champis Hallucinogènes": [
   "shoot-opp",
   "fight-opp"
  ],
  "Champignon d'Ombrenuit": [
   "move-opp"
  ],
  "C'est Moi l'Boss": [
   "hero"
  ],
  "Boing ! Boing ! Boing !": [
   "move",
   "move-opp"
  ],
  "Régénération": [
   "start",
   "start-opp"
  ],
  "Rétiaires": [
   "fight",
   "fight-opp"
  ]
 }
});
