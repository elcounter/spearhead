// Spearhead : Cours de Mangechairs – Carneguet
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "carneguet",
 "name": "Carneguet",
 "faction": "Cours de Mangechairs",
 "cover": null,
 "photos": {},
 "units": [
  {
   "id": "sangtinelle",
   "en": "Sangtinelle Abhorrante",
   "stats": {
    "M": "12\"",
    "S": 7,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Serres et Crocs Sanguinolents",
     "range": "Mêlée",
     "a": 5,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Sonnez la Traque !",
     "x": [
      "Annonce : Choisissez comme cible une unité amie entièrement à 12\" de cette unité, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, jusqu'au début de votre prochain tour, lorsque vous faites des jets de charge pour la cible, ajoutez 1 au nombre de dés jetés, jusqu'à un maximum de 3, puis retirez un dé de votre choix et utilisez les dés restant pour le jet de charge."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, VOL, PROTECTION (6+)"
  },
  {
   "id": "depeceurs",
   "en": "Dépeceurs Royaux",
   "stats": {
    "M": "6\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Armes de Dépeceurs",
     "range": "Mêlée",
     "a": 3,
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
     "t": "Votre Phase de Mouvement",
     "n": "Le Tour des Terres",
     "x": [
      "Effet : Si cette unité n'est pas en mêlée et est entièrement à 6\" du bord du champ de bataille, retirez-la du champ de bataille et replacez-la entièrement à 6\" du bord du champ de bataille et à plus de 6\" des unités ennemies."
     ]
    }
   ],
   "kw": "INFANTERIE, SERFS, PROTECTION (6+)"
  },
  {
   "id": "horreurs-cryptes",
   "en": "Horreurs des Cryptes",
   "stats": {
    "M": "7\"",
    "S": 4,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Massue et Serres Infectées",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Armes d'Os Sacrées",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie qui est en mêlée avec cette unité et qui a chargé à ce tour.",
      "Effet : Jetez un dé pour chaque figurine de l'unité cible. Pour chaque jet de 5+, infligez 1 dégât mortel à l'unité cible."
     ]
    }
   ],
   "kw": "INFANTERIE, CHEVALIERS, PROTECTION (6+), RENFORTS"
  },
  {
   "id": "fleaux-cryptes",
   "en": "Fléaux des Cryptes",
   "stats": {
    "M": "12\"",
    "S": 4,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Cri de Mort",
     "range": "10\"",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 2,
     "d": "1",
     "crit": "none",
     "extra": [
      "Tir en Mêlée"
     ]
    },
    {
     "n": "Serres Perforantes",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Chœur Impie",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie visible et à 10\" de cette unité.",
      "Effet : Pour le restant du tour, soustrayez au score de contrôle de la cible autant que le nombre de dégâts alloués à la cible à cette phase par les attaques de tir de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, CHEVALIERS, VOL, PROTECTION (6+)"
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
      "t": "Une Fois par Round de Bataille (Armée), Début du Round de Bataille",
      "n": "Délires et Folie",
      "x": [
       "Annonce : Vous devez utiliser cette aptitude au début de chaque round de bataille. Si c'est le premier round de bataille, choisissez un Délire. Sinon, faites un jet de délire en jetant un D6.",
       "Effet : Sur 1-3, vous devez choisir un Délire autre que celui que vous aviez choisi la fois précédente. Sur 4+, vous devez choisir le même Délire que la fois précédente. Pour le restant du round de bataille, vous croyez au Délire que vous avez choisi."
      ]
     },
     {
      "c": "end",
      "t": "Une Fois par Tour (Armée), Fin de N'importe Quel Tour",
      "n": "Délire du Grand Festin",
      "x": [
       "Annonce : Si vous croyez à ce Délire, choisissez comme cibles toutes les unités amies sur le champ de bataille.",
       "Effet : Soignez (1) chaque cible. Si la cible est une unité de SERFS, ramenez D3 figurines tuées dans l'unité à la place.",
       "Mot-clé : DÉLIRE"
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Délire de l'Ost Chevaleresque",
      "x": [
       "Effet : Tant que vous croyez à ce Délire, si le jet de charge non modifié pour une unité de HÉROS ou de CHEVALIERS amie est 8+, ajoutez 1 aux jets de touche pour les attaques de mêlée de l'unité pour le restant du tour.",
       "Mot-clé : DÉLIRE"
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
      "n": "Délire de la Sentinelle",
      "x": [
       "Effet : Tant que vous croyez à ce Délire, ajoutez 1 aux jets de protection pour les unités amies tant que chaque figurine de l'unité conteste un objectif.",
       "Mot-clé : DÉLIRE"
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Délire du Chasseur",
      "x": [
       "Effet : Tant que vous croyez à ce Délire, ajoutez 1 aux jets de blessure pour les attaques de mêlée des unités amies tant qu'aucune figurine de l'unité ne conteste un objectif.",
       "Mot-clé : DÉLIRE"
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
      "t": "Une Fois par Bataille, Réaction : Vous avez annoncé l'aptitude « Délires et Folie »",
      "n": "Presque Lucide",
      "x": [
       "Effet : Vous pouvez relancer le jet de délire."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Compagnon de Chasse",
      "x": [
       "Effet : Si votre général n'est pas en mêlée, il peut se déplacer de 3\". Il ne peut pas entrer en mêlée lors de ce mouvement."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Défi Honorable",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui a commencé la bataille avec 3 figurines ou moins et qui est en mêlée avec votre général.",
       "Effet : Votre adversaire doit décider si la cible accepte ou refuse le défi lancé par votre général. Si elle accepte, pour le restant de la phase, lorsque votre général et la cible sont choisis pour utiliser une aptitude de Corps à Corps, ils doivent se cibler mutuellement avec toutes leurs attaques. Si elle refuse, la cible a Frappe en Dernier pour le restant de la phase."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Bataille, Votre Phase de Tir",
      "n": "Maître du Chœur",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie visible et à 6\" de votre général.",
       "Effet : Pour le restant du tour, ajoutez 1 à la caractéristique de Dégâts des armes de tir des unités amies pour les attaques qui ciblent l'unité ennemie."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Délires et Folie": [
   "start"
  ],
  "Délire du Grand Festin": [
   "end",
   "end-opp"
  ],
  "Délire de l'Ost Chevaleresque": [
   "charge"
  ],
  "Délire de la Sentinelle": [
   "shoot-opp",
   "fight-opp"
  ],
  "Délire du Chasseur": [
   "fight",
   "fight-opp"
  ],
  "Presque Lucide": [
   "start"
  ],
  "Compagnon de Chasse": [
   "end",
   "end-opp"
  ],
  "Défi Honorable": [
   "fight",
   "fight-opp"
  ],
  "Maître du Chœur": [
   "shoot"
  ],
  "Sonnez la Traque !": [
   "hero"
  ],
  "Le Tour des Terres": [
   "move"
  ],
  "Armes d'Os Sacrées": [
   "fight",
   "fight-opp"
  ],
  "Chœur Impie": [
   "shoot"
  ]
 }
});
