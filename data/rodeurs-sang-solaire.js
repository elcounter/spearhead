// Spearhead : Séraphons – Rôdeurs au Sang Solaire
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "rodeurs-sang-solaire",
 "name": "Rôdeurs au Sang Solaire",
 "faction": "Séraphons",
 "cover": "img/rodeurs-sang-solaire/armee.webp",
 "photos": {"armee": "img/rodeurs-sang-solaire/armee.webp", "meute-sang-solaire": "img/rodeurs-sang-solaire/meute-sang-solaire.webp", "rejeton-chotec": "img/rodeurs-sang-solaire/rejeton-chotec.webp", "guerriers-saurus": "img/rodeurs-sang-solaire/guerriers-saurus.webp", "chasseurs-huanchi": "img/rodeurs-sang-solaire/chasseurs-huanchi.webp", "terrapteres": "img/rodeurs-sang-solaire/terrapteres.webp"},
 "units": [
  {
   "id": "meute-sang-solaire",
   "en": "Meute Sang Solaire",
   "stats": {
    "M": "5\"",
    "S": 3,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Armes de Célestite",
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
     "n": "Composition",
     "x": [
      "Effet : Les figurines de cette unité sont 1 Sang Solaire et 2 Gardes du Corps Saurus. Chaque figurine est équipée d'Armes de Célestite. Les Venimions de cette unité sont un pion."
     ]
    },
    {
     "c": "defense",
     "t": "Passif",
     "n": "Protecteurs Écailleux",
     "x": [
      "Effet : Tant que cette unité inclut un Sang Solaire, ignorez le premier dégât censé être alloué à cette unité à chaque phase et ajoutez 1 au score de contrôle de cette unité."
     ]
    },
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Beuglement Sauvage",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité et jetez un dé.",
      "Effet : Sur 3+, les armes de la cible ont Crit (2 Touches) pour le restant du tour, y compris les armes de Compagnon."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, SAURUS"
  },
  {
   "id": "rejeton-chotec",
   "en": "Rejeton de Chotec",
   "stats": {
    "M": "5\"",
    "S": 8,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Crachat de Feu Caustique",
     "range": "16\"",
     "a": 1,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "D3+3",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    },
    {
     "n": "Mâchoire Brûlante",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 3,
     "r": 2,
     "d": "3",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Acolytes Solaires",
     "x": [
      "Effet : Cette unité a 3 Acolytes Solaires qui sont des pions. Ajoutez 1 au score de contrôle de cette unité pour chaque Acolyte Solaire qu'elle a. Si elle n'a aucun Acolyte Solaire, elle a un score de contrôle maximum de 1. Chaque fois que vous faites un jet de sauvegarde non modifié de 1 pour cette unité, retirez 1 de ses Acolytes Solaires du champ de bataille après que l'aptitude d'Attaque a été résolue (le dégât est quand même infligé)."
     ]
    }
   ],
   "kw": "BÊTE, SKINK"
  },
  {
   "id": "guerriers-saurus",
   "en": "Guerriers Saurus",
   "stats": {
    "M": "5\"",
    "S": 2,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Massue de Célestite",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "Passif",
     "n": "Cohortes Ordonnées",
     "x": [
      "Effet : Ajoutez 1 aux jets de sauvegarde pour cette unité tant qu'elle conteste un objectif que vous contrôlez."
     ]
    }
   ],
   "kw": "INFANTERIE, SAURUS"
  },
  {
   "id": "chasseurs-huanchi",
   "en": "Chasseurs de Huanchi",
   "stats": {
    "M": "8\"",
    "S": 1,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Sarbacane",
     "range": "10\"",
     "a": 2,
     "h": 3,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Piètres Griffes",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 5,
     "r": 0,
     "d": "1",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "N'importe Quelle Phase de Tir",
     "n": "Poison Stellaire",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie qui a eu un ou plusieurs dégâts alloués à ce tour par des attaques faites avec les Sarbacanes de cette unité.",
      "Effet : Jetez un dé. Sur 2+, soustrayez 1 aux jets de blessure pour les attaques de mêlée de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "INFANTERIE, SKINK"
  },
  {
   "id": "terrapteres",
   "en": "Terraptères",
   "stats": {
    "M": "12\"",
    "S": 2,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Bec Claqueur",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 4,
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
     "n": "Hurlements Perçants",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie qui est en mêlée avec cette unité.",
      "Effet : Jetez un dé. Sur 4+, soustrayez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "BÊTE, VOL, RENFORTS"
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
      "c": "deploy",
      "t": "Déploiement",
      "n": "Chasseurs Dissimulés",
      "x": [
       "Vos 2 unités de Chasseurs de Huanchi et le Rejeton de Chotec ne sont pas placés pendant la phase de déploiement. Au lieu de cela, à partir du troisième round de bataille, ils peuvent utiliser l'aptitude \"Embuscade de Caméléons\"."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Embuscade de Caméléons",
      "x": [
       "Effet : Placez cette unité n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Vengeance d'Azyr",
      "x": [
       "Annonce : Choisissez comme cibles toutes les unités ennemies qui sont en mêlée avec une unité de Saurus amie.",
       "Effet : Jetez un dé pour chaque cible. Sur 4+, infligez 1 dégât mortel à la cible."
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
      "t": "Une Fois par Tour (Armée), Votre Phase des Héros",
      "n": "Égide Écailleuse",
      "x": [
       "Annonce : Choisissez comme cible une unité de Saurus amie.",
       "Effet : Jetez un dé. Sur 3+, la cible a une Protection (6+) jusqu'au début de votre prochain tour."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Tour (Armée), Votre Phase de Tir",
      "n": "Adeptes de Huanchi",
      "x": [
       "Annonce : Choisissez comme cible une unité de Skinks amie.",
       "Effet : Jetez un dé. Sur 3+, les armes de tir de la cible ont Crit (Blessure Auto.) pour le restant du tour, y compris les armes de Compagnon."
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
      "n": "Chef Instinctif",
      "x": [
       "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de votre général, et qui n'est pas en mêlée.",
       "Effet : Jetez un dé. Sur 3+, la cible peut utiliser immédiatement l'aptitude \"Mouvement Normal\", comme si c'était votre phase de mouvement."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Brutalité Sauvage",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui est en mêlée avec votre général.",
       "Effet : On ne peut faire aucun jet de protection pour la cible pour le restant du tour."
      ]
     },
     {
      "c": "fight",
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Nuées de Venimions",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie qui est en mêlée avec votre général.",
       "Effet : Si le pion de Venimions de votre général est sur le champ de bataille, jetez un D3. Sur un jet de 1, retirez le pion du champ de bataille. Sur 2+, infligez autant de dégâts mortels que le jet à la cible."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Bénis par les Anciens",
      "x": [
       "Annonce : Votre général doit utiliser cette aptitude s'il a été détruit. Jetez un dé.",
       "Effet : Sur 2+, vous pouvez placer une unité de remplacement composée de 1 figurine de Sang Solaire n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Composition": [
   "deploy"
  ],
  "Protecteurs Écailleux": [
   "shoot-opp",
   "fight-opp"
  ],
  "Beuglement Sauvage": [
   "hero"
  ],
  "Acolytes Solaires": [
   "shoot-opp",
   "fight-opp"
  ],
  "Cohortes Ordonnées": [
   "shoot-opp",
   "fight-opp"
  ],
  "Poison Stellaire": [
   "shoot",
   "shoot-opp"
  ],
  "Hurlements Perçants": [
   "fight",
   "fight-opp"
  ],
  "Chasseurs Dissimulés": [
   "deploy"
  ],
  "Embuscade de Caméléons": [
   "move"
  ],
  "Vengeance d'Azyr": [
   "end",
   "end-opp"
  ],
  "Égide Écailleuse": [
   "hero"
  ],
  "Adeptes de Huanchi": [
   "shoot"
  ],
  "Chef Instinctif": [
   "hero"
  ],
  "Brutalité Sauvage": [
   "fight",
   "fight-opp"
  ],
  "Nuées de Venimions": [
   "fight",
   "fight-opp"
  ],
  "Bénis par les Anciens": [
   "end",
   "end-opp"
  ]
 }
});
