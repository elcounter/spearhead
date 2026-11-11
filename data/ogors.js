// Spearhead : Maraudeurs Mangeguerres (Hordegueules Ogors)
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "ogors",
 "name": "Maraudeurs Mangeguerres",
 "faction": "Hordegueules Ogors",
 "cover": "img/ogors/armee.webp",
 "photos": {
  "armee": "img/ogors/armee.webp",
  "cavalerie": "img/ogors/cavalerie.webp",
  "gloutons": "img/ogors/gloutons.webp",
  "tyran": "img/ogors/tyran.webp",
  "ventres-durs": "img/ogors/ventres-durs.webp"
 },
 "units": [
  {
   "id": "tyran",
   "en": "Tyran",
   "stats": {
    "M": "6\"",
    "S": 8,
    "C": 3,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Trancheviandes de Tyran",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre phase des héros",
     "n": "Seigneur Guerrier Rugissant",
     "x": [
      "Annonce : choisissez comme cible une unité amie visible et à 12\" de cette unité.",
      "Effet : jetez un dé. Sur 3+, pour le restant du tour, ajoutez 1 aux jets de charge pour la cible."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "gloutons",
   "en": "Gloutons",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Armes de Glouton",
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
     "c": "defense",
     "t": "Passif",
     "n": "Mur de Viande",
     "x": [
      "Effet : ajoutez 1 aux jets de sauvegarde pour cette unité si elle n'a pas chargé au même tour."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "ventres-durs",
   "en": "Ventres-Durs",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Arme de Ventre-dur",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Passif",
     "n": "Maraudeurs Piétineurs",
     "x": [
      "Effet : ajoutez 2 au score de contrôle de cette unité si elle a chargé au même tour."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "cavalerie",
   "en": "Cavalerie Mutilante",
   "stats": {
    "M": "10\"",
    "S": 7,
    "C": 3,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Armes de Mord-tripes",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    },
    {
     "n": "Cornes et Crocs de Mutilante",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none",
     "companion": true,
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Une fois par tour (armée), votre phase de mêlée",
     "n": "Impact Sanglant",
     "x": [
      "Annonce : si cette unité a chargé à ce tour, choisissez comme cible une unité ennemie en mêlée avec elle.",
      "Effet : jetez un dé. Sur 3+, pour le restant du tour, soustrayez 1 aux jets de blessure pour les attaques de la cible."
     ]
    }
   ],
   "kw": "CAVALERIE"
  }
 ],
 "army": {
  "sections": [
   {
    "key": "trait",
    "title": "Trait de batailles",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "passive",
      "t": "Phase de déploiement",
      "n": "Guerriers Nomades",
      "x": [
       "Votre unité de Gloutons de 3 figurines et 1 de vos unités de Cavalerie Mutilante ne sont pas placées à la phase de déploiement. À la place, à partir du troisième round de bataille, elles peuvent utiliser l'aptitude « Encore plus d'Ogors ! »."
      ]
     },
     {
      "c": "move",
      "t": "Votre phase de mouvement (à partir du 3e round)",
      "n": "Encore plus d'Ogors !",
      "x": [
       "Effet : placez cette unité n'importe où sur le champ de bataille de sorte que chaque figurine soit à 1\" du bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "end",
      "t": "Fin de n'importe quel tour",
      "n": "Bâfrée de Chair Fraîche",
      "x": [
       "Annonce : si une unité ennemie a été détruite à ce tour, choisissez une unité amie qui a utilisé une aptitude de CORPS À CORPS à ce tour pour utiliser cette aptitude.",
       "Effet : choisissez 1 des effets suivants à appliquer à cette unité amie pour le restant de la bataille :",
       "Chair Fraîche et Saignante : ajoutez 1 aux jets de touche pour les attaques de mêlée de l'unité si elle a chargé au même tour.",
       "Abats Exotiques : soustrayez 1 aux jets de protection pour les dégâts infligés par les attaques de mêlée de l'unité.",
       "Cervelles Fumantes : ajoutez 3 au score de contrôle de l'unité."
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
      "c": "end",
      "t": "Une fois par bataille, fin de votre tour",
      "n": "Déboulement Brutal",
      "x": [
       "Annonce : choisissez comme cible une unité amie qui a chargé à ce tour.",
       "Effet : la cible peut se déplacer de 2D6\" maximum. Elle peut traverser les portées de mêlée des unités ennemies avec qui elle était en mêlée au début de ce mouvement, mais ne peut pas finir ce mouvement en mêlée."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Nuages de Poussière Aveuglants",
      "x": [
       "Effet : soustrayez 1 aux jets de touche pour les attaques qui ciblent des unités amies qui ont été placées au même tour."
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
      "c": "move",
      "t": "Passif",
      "n": "Ruine-Muraille",
      "x": [
       "Effet : votre général peut passer par-dessus les éléments de terrain comme s'il avait le mot-clé VOL."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Trompe-la-Mort",
      "x": [
       "Effet : votre général a une PROTECTION (6+) tant qu'il est à plus de 3\" de toutes les autres unités amies."
      ]
     },
     {
      "c": "move",
      "t": "Passif",
      "n": "Époumoneur",
      "x": [
       "Effet : quand vous faites des jets de course pour les unités amies qui sont entièrement à 9\" de votre général, si vous obtenez 1-3, vous pouvez utiliser une valeur de 4 à la place."
      ]
     },
     {
      "c": "end",
      "t": "Une fois par bataille, fin de n'importe quel tour",
      "n": "Mâche-Tendons",
      "x": [
       "Annonce : choisissez comme cibles toutes les unités ennemies en mêlée avec votre général.",
       "Effet : infligez D3 dégâts mortels à chaque cible. Puis Soignez (3) votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Guerriers Nomades": [
   "deploy"
  ],
  "Encore plus d'Ogors !": [
   "move"
  ],
  "Bâfrée de Chair Fraîche": [
   "end",
   "end-opp"
  ],
  "Déboulement Brutal": [
   "end"
  ],
  "Nuages de Poussière Aveuglants": [
   "move"
  ],
  "Ruine-Muraille": [
   "move"
  ],
  "Époumoneur": [
   "move"
  ],
  "Mâche-Tendons": [
   "end",
   "end-opp"
  ],
  "Seigneur Guerrier Rugissant": [
   "hero"
  ],
  "Maraudeurs Piétineurs": [
   "end"
  ],
  "Impact Sanglant": [
   "fight"
  ]
 }
});
