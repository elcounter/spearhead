// Spearhead : Collecteurs Ossiarques – Échelon Collecteur de Dîme
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "echelon-collecteur-dime",
 "name": "Échelon Collecteur de Dîme",
 "faction": "Collecteurs Ossiarques",
 "cover": "img/echelon-collecteur-dime/armee.webp",
 "photos": {"armee": "img/echelon-collecteur-dime/armee.webp", "faucheur-ames": "img/echelon-collecteur-dime/faucheur-ames.webp", "garde-mortek": "img/echelon-collecteur-dime/garde-mortek.webp", "juchemorts": "img/echelon-collecteur-dime/juchemorts.webp", "gothizzar": "img/echelon-collecteur-dime/gothizzar.webp"},
 "units": [
  {
   "id": "faucheur-ames",
   "en": "Mortisan Faucheur d'Âmes",
   "stats": {
    "M": "5\"",
    "S": 5,
    "C": 2,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Faux de Faucheur d'Âmes",
     "range": "Mêlée",
     "a": 3,
     "h": 4,
     "w": 3,
     "r": 2,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Siphonnage de Vitalité",
     "x": [
      "Annonce : Choisissez une unité ennemie visible à 18\" de cette unité comme cible, puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, soustrayez 1 aux jets de touche pour les attaques faites par l'unité cible jusqu'au début de votre prochain tour."
     ]
    },
    {
     "c": "move",
     "t": "Votre Phase de Mouvement",
     "n": "Réparer les Amalgames",
     "x": [
      "Annonce : Choisissez une unité amie entièrement à 12\" de cette unité et qui n'est pas en mêlée comme cible.",
      "Effet : Soignez (D3) la cible. Si l'unité cible n'est pas endommagée, vous pouvez à la place ramener un nombre de figurines tuées dans l'unité qui ont une caractéristique de Santé combinée de D3 ou moins.",
      "Mot-clé : ORDRE OSSIARQUE"
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "garde-mortek",
   "en": "Garde Mortek",
   "stats": {
    "M": "4\"",
    "S": 1,
    "C": 1,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Lance de Nadirite",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 4,
     "r": 0,
     "d": "1",
     "crit": "none",
     "extra": [
      "Anti-Charge (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Assaut de Nadirite",
     "x": [
      "Effet : Jusqu'à la fin de la phase, les armes de mêlée de cette unité ont Crit (2 Touches).",
      "Mot-clé : ORDRE OSSIARQUE"
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
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
     "n": "Lance de Nadirite",
     "range": "Mêlée",
     "a": 3,
     "h": 3,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Charge (+1 Dégât)"
     ]
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
     "c": "charge",
     "t": "Votre Phase de Charge",
     "n": "Flèche des Juchemorts",
     "x": [
      "Effet : Les effets suivants s'appliquent à cette phase : les figurines de cette unité peuvent se déplacer à travers les figurines d'INFANTERIE ennemies comme si cette unité avait le mot-clé VOL ; après que cette unité a chargé, vous pouvez choisir une unité ennemie à travers laquelle elle s'est déplacée et jeter un dé. Sur 2+, infligez D3 dégâts mortels à cette unité ennemie.",
      "Mot-clé : ORDRE OSSIARQUE"
     ]
    }
   ],
   "kw": "CAVALERIE, PROTECTION (6+)"
  },
  {
   "id": "gothizzar",
   "en": "Moissonneur Gothizzar",
   "stats": {
    "M": "6\"",
    "S": 10,
    "C": 5,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Mâchoires de Tête de Mort",
     "range": "12\"",
     "a": 4,
     "h": 4,
     "w": 4,
     "r": 1,
     "d": "1",
     "crit": "none"
    },
    {
     "n": "Massues Broyeuses d'Âmes",
     "range": "Mêlée",
     "a": 6,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "2",
     "crit": "none"
    },
    {
     "n": "Sabots et Queue Ossifiés",
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
     "t": "Passif",
     "n": "Moisson d'Os",
     "x": [
      "Effet : Chaque fois qu'une figurine ennemie en mêlée avec cette unité est tuée, cette unité gagne 1 point de dîme d'os. Elle ne peut jamais avoir plus de 6 points de dîme d'os."
     ]
    },
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Réparer les Amalgames (Moissonneur)",
     "x": [
      "Annonce : Choisissez une unité de Garde Mortek amie à 6\" de cette unité comme cible. Puis, jetez un dé pour chaque point de dîme d'os qu'a l'unité ayant cette aptitude.",
      "Effet : Pour chaque 4+, vous pouvez ramener 1 figurine tuée dans l'unité cible. Puis, réduisez les points de dîme d'os de cette unité à 0."
     ]
    }
   ],
   "kw": "MONSTRE, PROTECTION (6+)"
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
      "n": "Contingent de Réserve",
      "x": [
       "Une de vos unités de Garde Mortek n'est pas placée à la phase de déploiement. À la place, à partir du troisième round de bataille, elle peut utiliser l'aptitude « Arrivée de Contingent ».",
       "Arrivée de Contingent – Effet : Placez cette unité n'importe où sur le champ de bataille entièrement à 3\" du bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "passive",
      "t": "Début du Round de Bataille",
      "n": "Ordres Ossiarques",
      "x": [
       "Les Ordres Ossiarques sont des aptitudes qui peuvent être utilisées seulement en dépensant des points d'ordre ossiarque.",
       "Au début du round de bataille, vous recevez 2 points d'ordre ossiarque. Chaque Ordre Ossiarque coûte 1 point d'ordre ossiarque pour être utilisé. La même unité ne peut pas utiliser plus d'un Ordre Ossiarque à la même phase. À la fin du round de bataille, tous les points d'ordre ossiarque restants sont perdus."
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
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Rangs Impénétrables",
      "x": [
       "Annonce : Choisissez une unité amie pour qu'elle utilise cette aptitude.",
       "Effet : Jusqu'à la fin de la phase, ajoutez 1 aux jets de protection pour cette unité.",
       "Mot-clé : ORDRE OSSIARQUE"
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Votre Phase de Mouvement",
      "n": "Reformez les Rangs",
      "x": [
       "Annonce : Choisissez une unité de Garde Mortek amie en mêlée pour qu'elle utilise cette aptitude.",
       "Effet : Cette unité peut utiliser une aptitude de Repli à cette phase sans qu'aucun dégât mortel ne lui soit infligé.",
       "Mot-clé : ORDRE OSSIARQUE"
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
      "n": "Renforcement d'Armes de Nadirite",
      "x": [
       "Annonce : Choisissez une unité de Garde Mortek amie visible entièrement à 12\" de votre général, puis faites un jet de lancement de 2D6.",
       "Effet : Sur 5+, jusqu'au début de votre prochain tour, ajoutez 1 à la caractéristique de Perforation des armes de mêlée de cette unité."
      ]
     },
     {
      "c": "move",
      "t": "Votre Phase de Mouvement",
      "n": "Commandant Inexorable",
      "x": [
       "Annonce : Choisissez une unité de Garde Mortek amie entièrement à 12\" de votre général, puis jetez un dé.",
       "Effet : Sur 2+, ajoutez 3\" à la caractéristique de Mouvement de cette unité à cette phase."
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Poussée Meurtrière",
      "x": [
       "Effet : La Faux de Faucheur d'Âmes de votre général a Crit (2 Touches)."
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Pacte de Moelle",
      "x": [
       "Effet : Chaque fois que votre général utilise une aptitude de Corps à Corps, après avoir résolu toutes ses attaques, Soignez (X) votre général, X étant le nombre de dégâts alloués par ces attaques."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Contingent de Réserve": [
   "deploy",
   "move"
  ],
  "Ordres Ossiarques": [
   "start"
  ],
  "Rangs Impénétrables": [
   "fight",
   "fight-opp"
  ],
  "Reformez les Rangs": [
   "move"
  ],
  "Renforcement d'Armes de Nadirite": [
   "hero"
  ],
  "Commandant Inexorable": [
   "move"
  ],
  "Poussée Meurtrière": [
   "fight",
   "fight-opp"
  ],
  "Pacte de Moelle": [
   "fight",
   "fight-opp"
  ],
  "Siphonnage de Vitalité": [
   "hero"
  ],
  "Réparer les Amalgames": [
   "move"
  ],
  "Assaut de Nadirite": [
   "fight",
   "fight-opp"
  ],
  "Flèche des Juchemorts": [
   "charge"
  ],
  "Moisson d'Os": [
   "fight",
   "fight-opp"
  ],
  "Réparer les Amalgames (Moissonneur)": [
   "end",
   "end-opp"
  ]
 }
});
