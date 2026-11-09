// Spearhead : Seigneurs Ruinemânes – Chasse Sanguivore
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "chasse-sanguivore",
 "name": "Chasse Sanguivore",
 "faction": "Seigneurs Ruinemânes",
 "cover": "img/chasse-sanguivore/armee.jpg",
 "photos": {"armee": "img/chasse-sanguivore/armee.jpg", "seigneur-vampire": "img/chasse-sanguivore/seigneur-vampire.jpg", "chevaliers-sang": "img/chasse-sanguivore/chevaliers-sang.jpg", "vargheists": "img/chasse-sanguivore/vargheists.jpg", "squelettes": "img/chasse-sanguivore/squelettes.jpg"},
 "units": [
  {
   "id": "seigneur-vampire",
   "en": "Seigneur Vampire",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Relique de Guerre Dynastique",
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
     "n": "Vil Transfert",
     "x": [
      "Annonce : Choisissez une unité ennemie visible à 6\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, jetez autant de dés que la caractéristique de Santé de la cible. Pour chaque 5+, infligez 1 dégât mortel à la cible et Soignez (1) l'unité ayant cette aptitude."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, VAMPIRE, PROTECTION (6+)"
  },
  {
   "id": "chevaliers-sang",
   "en": "Chevaliers de Sang",
   "stats": {
    "M": "10\"",
    "S": 3,
    "C": 1,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Lance ou Lame de Templier",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Charge (+1 Dégât)"
     ]
    },
    {
     "n": "Dents et Sabots de Cauchemar",
     "range": "Mêlée",
     "a": 3,
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
     "c": "move",
     "t": "Passif",
     "n": "Cavaliers de la Ruine",
     "x": [
      "Effet : Les figurines de cette unité peuvent se déplacer à travers les figurines d'INFANTERIE ennemies comme si cette unité avait le mot-clé VOL."
     ]
    }
   ],
   "kw": "CAVALERIE, VAMPIRE, PROTECTION (6+)"
  },
  {
   "id": "vargheists",
   "en": "Vargheists",
   "stats": {
    "M": "12\"",
    "S": 4,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Serres et Crocs Meurtriers",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "2hits"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Passif",
     "n": "L'Odeur du Sang",
     "x": [
      "Effet : Ajoutez 1 aux jets de blessure pour les attaques faites par cette unité qui ciblent une unité endommagée."
     ]
    }
   ],
   "kw": "INFANTERIE, VAMPIRE, VOL, PROTECTION (6+)"
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
     "c": "fight",
     "t": "Votre Phase de Mêlée",
     "n": "Légion de Squelettes",
     "x": [
      "Effet : Pour chaque figurine tuée de cette unité, faites un jet de légion d'un D6. Pour chaque jet de 6, ramenez 1 figurine tuée dans cette unité."
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
      "t": "Votre Phase de Mouvement",
      "n": "Piqué de la Mort",
      "x": [
       "Votre unité de Vargheists n'est pas placée à la phase de déploiement. À la place, à partir du troisième round de bataille, elle peut utiliser l'aptitude « Descente en Piqué ».",
       "Descente en Piqué – Effet : Placez cette unité n'importe où sur le champ de bataille à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "La Faim",
      "x": [
       "Effet : Chaque fois qu'une unité de VAMPIRE amie utilise une aptitude de Corps à Corps, après avoir résolu toutes ses attaques, Soignez (X) cette unité de VAMPIRE, X étant le nombre de dégâts alloués par ces attaques."
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
      "n": "Légions sans Fin",
      "x": [
       "Annonce : Choisissez une unité de Squelettes Raclemorts amie qui a été détruite.",
       "Effet : Vous pouvez placer une unité de remplacement composée de D6 figurines, en territoire ami, à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     },
     {
      "c": "charge",
      "t": "N'importe Quelle Phase de Charge",
      "n": "Charge Destructrice",
      "x": [
       "Annonce : Choisissez votre unité de Chevaliers de Sang pour qu'elle utilise cette aptitude si elle a chargé à ce tour.",
       "Effet : Infligez D3 dégâts mortels à chaque unité ennemie qu'elle a traversée pendant cette aptitude de Charge."
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
      "t": "Une Fois par Bataille, Réaction : Vous avez annoncé l'aptitude « Légion de Squelettes » pour une unité à 9\" de votre général",
      "n": "Éclat de Sable Sépulcral",
      "x": [
       "Effet : Ajoutez 1 à chaque jet de légion pour l'unité."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Votre Phase de Mouvement",
      "n": "Nuage de Chauves-souris",
      "x": [
       "Effet : Retirez votre général du champ de bataille et placez-le à nouveau n'importe où sur le champ de bataille à plus de 6\" des unités ennemies.",
       "Mot-clé : BASE"
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Aura de Nuit",
      "x": [
       "Effet : Ignorez les modificateurs négatifs aux jets de sauvegarde pour les attaques de tir qui ciblent votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Vent Spectral",
      "x": [
       "Annonce : Faites un jet de lancement de 2D6.",
       "Effet : Sur 7+, infligez 1 dégât mortel à chaque unité ennemie sur le champ de bataille."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Piqué de la Mort": [
   "deploy",
   "move"
  ],
  "La Faim": [
   "fight",
   "fight-opp"
  ],
  "Légions sans Fin": [
   "move"
  ],
  "Charge Destructrice": [
   "charge",
   "charge-opp"
  ],
  "Éclat de Sable Sépulcral": [
   "fight"
  ],
  "Nuage de Chauves-souris": [
   "move"
  ],
  "Aura de Nuit": [
   "shoot-opp"
  ],
  "Vent Spectral": [
   "hero"
  ],
  "Vil Transfert": [
   "hero"
  ],
  "Cavaliers de la Ruine": [
   "move",
   "charge"
  ],
  "L'Odeur du Sang": [
   "fight",
   "fight-opp"
  ],
  "Légion de Squelettes": [
   "fight"
  ]
 }
});
