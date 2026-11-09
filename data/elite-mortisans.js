// Spearhead : Collecteurs Ossiarques – Élite des Mortisans
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "elite-mortisans",
 "name": "Élite des Mortisans",
 "faction": "Collecteurs Ossiarques",
 "cover": "img/elite-mortisans/armee.jpg",
 "photos": {"armee": "img/elite-mortisans/armee.jpg", "ossifacteur": "img/elite-mortisans/ossifacteur.jpg", "immortis": "img/elite-mortisans/immortis.jpg", "rodeurs-necropole": "img/elite-mortisans/rodeurs-necropole.jpg", "morghasts": "img/elite-mortisans/morghasts.jpg"},
 "units": [
  {
   "id": "ossifacteur",
   "en": "Mortisan Ossifacteur",
   "stats": {
    "M": "5\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Serres Ossifiées",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 4,
     "r": 0,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Créations Affinées",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 5+, les armes de mêlée de la cible ont Crit (2 Touches) jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "immortis",
   "en": "Gardes Immortis",
   "stats": {
    "M": "5\"",
    "S": 4,
    "C": 1,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Hallebarde d'Effroi",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
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
     "n": "Serment de Protection",
     "x": [
      "Effet : Votre général a une Protection (5+) tant qu'il est à portée de mêlée de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "rodeurs-necropole",
   "en": "Rôdeurs de la Nécropole",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lames de Rôdeurs",
     "range": "Mêlée",
     "a": 4,
     "h": 3,
     "w": 3,
     "r": 2,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Changement d'Aspect",
     "x": [
      "Effet : Choisissez 1 des effets suivants à appliquer pour le restant du tour :",
      "Aspect de Parade : Soustrayez 1 aux jets de touche pour les attaques de mêlée qui ciblent cette unité.",
      "Aspect du Destructeur : On ne peut pas faire de jets de protection contre les dégâts infligés par les attaques de mêlée de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "morghasts",
   "en": "Morghasts Archaï",
   "stats": {
    "M": "10\"",
    "S": 6,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Armes Spirituelles",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 2,
     "r": 2,
     "d": "3",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Hérauts de Nagash",
     "x": [
      "Effet : Ajoutez 1 aux jets de discipline pour cette unité tant qu'elle n'est pas entièrement à 12\" de votre général."
     ]
    }
   ],
   "kw": "INFANTERIE, VOL, PROTECTION (6+)"
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
      "t": "Une Fois par Tour (Armée), Votre Phase de Mouvement",
      "n": "Piqué de la Peur",
      "x": [
       "Votre unité de Morghasts Archaï n'est pas placée pendant la phase de déploiement. À la place, à partir du deuxième round de bataille, elle peut utiliser cette aptitude.",
       "Effet : Placez cette unité n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "passive",
      "t": "Une Fois par Phase (Armée)",
      "n": "Discipline Inflexible",
      "x": [
       "Annonce : Choisissez comme cible une unité amie.",
       "Effet : Faites un jet de discipline d'un D6. Ajoutez 1 au jet si la cible est entièrement à 12\" de votre général. Sur 4+, choisissez 1 des effets ci-dessous :",
       "Votre Phase de Mouvement : Ajoutez 2\" à la caractéristique de Mouvement de la cible pour le restant de la phase.",
       "Votre Phase de Charge : Ajoutez 1 aux jets de charge pour la cible pour le restant de la phase.",
       "N'importe Quelle Phase de Mêlée : Ajoutez 1 aux jets de blessure pour les attaques de mêlée de la cible pour le restant de la phase.",
       "N'importe Quelle Phase de Mêlée : La cible a une Protection (5+) pour le restant de la phase."
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
      "t": "Une Fois par Tour (Armée), Réaction : Vous avez annoncé l'aptitude « Discipline Inflexible »",
      "n": "Cohésion Inégalée",
      "x": [
       "Effet : Vous pouvez utiliser l'aptitude « Discipline Inflexible » une seconde fois à cette phase, mais vous devez choisir une cible différente de la première fois."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Commandement Impeccable",
      "x": [
       "Effet : Ajoutez 1 à vos jets de discipline."
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
      "n": "Tempête d'Éclats",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie visible et à 12\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 7+, jetez autant de dés que le nombre de figurines de l'unité cible. Pour chaque jet de 5+, infligez 1 dégât mortel à la cible."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Raccommoder les Amalgames",
      "x": [
       "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 6+, Soignez (D3) la cible."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Filon de Saturation",
      "x": [
       "Effet : Soustrayez 1 à la caractéristique de Perforation des armes de mêlée utilisées pour des attaques de mêlée qui ciblent ce général."
      ]
     },
     {
      "c": "end",
      "t": "Une Fois par Bataille, Fin de Votre Tour",
      "n": "Heaume de Tyrannie",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie à 12\" de votre général et jetez un dé.",
       "Effet : Sur 3+, soustrayez 3 au score de contrôle de la cible pour le restant du tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Piqué de la Peur": [
   "deploy",
   "move"
  ],
  "Discipline Inflexible": [
   "move",
   "charge",
   "fight",
   "fight-opp"
  ],
  "Cohésion Inégalée": [
   "move",
   "charge",
   "fight",
   "fight-opp"
  ],
  "Commandement Impeccable": [
   "move",
   "charge",
   "fight",
   "fight-opp"
  ],
  "Tempête d'Éclats": [
   "hero"
  ],
  "Raccommoder les Amalgames": [
   "hero"
  ],
  "Filon de Saturation": [
   "fight-opp"
  ],
  "Heaume de Tyrannie": [
   "end"
  ],
  "Créations Affinées": [
   "hero"
  ],
  "Serment de Protection": [
   "shoot-opp",
   "fight-opp"
  ],
  "Changement d'Aspect": [
   "fight",
   "fight-opp"
  ],
  "Hérauts de Nagash": [
   "move",
   "charge",
   "fight",
   "fight-opp"
  ]
 }
});
