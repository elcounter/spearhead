// Spearhead : Hordegueules Ogors – Bande de Cherche-Gueule
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "bande-cherche-gueule",
 "name": "Bande de Cherche-Gueule",
 "faction": "Hordegueules Ogors",
 "units": [
  {
   "id": "boucher",
   "en": "Boucher",
   "stats": {
    "M": "6\"",
    "S": 8,
    "C": 3,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Outils du Boucher",
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
     "t": "Votre Phase des Héros",
     "n": "Gueule de Rouille",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie visible et à 12\" de cette unité. Puis faites un jet de lancement de 2D6.",
      "Effet : Sur 6+, jusqu'au début de votre prochain tour, soustrayez 1 à la caractéristique de Perforation des armes de mêlée de la cible."
     ]
    },
    {
     "c": "hero",
     "t": "Réaction : Vous avez annoncé l'aptitude « Gueule de Rouille »",
     "n": "Chaudron du Boucher",
     "x": [
      "Effet : Si le Chaudron du Boucher de cette unité est plein, jetez un D3. Sur 1, le Chaudron du Boucher de cette unité devient vide. Sur 2+, vous pouvez ajouter 2 au jet de lancement."
     ]
    }
   ],
   "kw": "HÉROS, SORCIER, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "hacheurs",
   "en": "Hacheurs",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Outils du Hacheur",
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
     "c": "passive",
     "t": "Passif",
     "n": "Le Goût du Mystique",
     "x": [
      "Effet : Les armes de mêlée de cette unité ont Crit (2 Touches) tant qu'elle est en mêlée avec un SORCIER ou un PRÊTRE ennemi."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "prophetripes",
   "en": "Prophétripes",
   "stats": {
    "M": "6\"",
    "S": 4,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Outils de Prophétripe",
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
     "c": "hero",
     "t": "Une Fois par Tour (Armée), N'importe Quelle Phase des Héros",
     "n": "Canaux de la Pansemagie",
     "x": [
      "Effet : La prochaine fois que l'aptitude « Gueule de Rouille » est utilisée par votre général, mesurez la portée et la visibilité de l'aptitude depuis cette unité au lieu de votre général."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "engorgeurs",
   "en": "Meutegueule d'Engorgeurs",
   "stats": {
    "M": "6\"",
    "S": 5,
    "C": 2,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Massues, Griffes et Mâchoires",
     "range": "Mêlée",
     "a": 5,
     "h": 4,
     "w": 2,
     "r": 1,
     "d": "2",
     "crit": "none"
    }
   ],
   "abilities": [
    {
     "c": "charge",
     "t": "Passif",
     "n": "Appétit Bestial",
     "x": [
      "Effet : À votre phase de charge, si cette unité n'est pas en mêlée et s'il y a une ou plusieurs unités ennemies à 12\" d'elle, elle doit utiliser l'aptitude « Charge », et si le jet de charge lui permet de finir le mouvement à ½\" d'une unité ennemie visible, elle doit le faire."
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
    "title": "Traits de bataille",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "start",
      "t": "Une Fois par Bataille, Début du Round de Bataille",
      "n": "Hors des Grottes",
      "x": [
       "Votre Meutegueule d'Engorgeurs n'est pas placée à la phase de déploiement. À la place, à partir du deuxième round de bataille, elle peut utiliser l'aptitude « Chasseurs Frénétiques ».",
       "Chasseurs Frénétiques – Effet : Placez cette unité à 1\" du bord du champ de bataille et à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Ya Plus d'Viande ?",
      "x": [
       "Effet : Le Chaudron du Boucher de votre général commence la bataille vide."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "J'tez-les dans la Marmite",
      "x": [
       "Annonce : Vous devez utiliser cette aptitude si une unité ennemie a été détruite à ce tour.",
       "Effet : Le Chaudron du Boucher de votre général devient plein."
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
      "t": "N'importe Quelle Phase de Mêlée",
      "n": "Goûteurs",
      "x": [
       "Annonce : Si le Chaudron du Boucher de votre général est plein, choisissez comme cible une unité amie visible et entièrement à 12\" de lui.",
       "Effet : Ajoutez 1 aux jets de touche pour les attaques de mêlée de la cible pour le restant du tour. Puis le Chaudron du Boucher de votre général devient vide."
      ]
     },
     {
      "c": "move",
      "t": "Passif",
      "n": "Pourvoyeurs Acharnés",
      "x": [
       "Effet : Tant que le Chaudron du Boucher de votre général est vide, ajoutez 2\" à la caractéristique de Mouvement des unités amies si elles sont entièrement à 12\" de votre général."
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
      "c": "start",
      "t": "Début du Premier Round de Bataille",
      "n": "Garde-manger Garni",
      "x": [
       "Effet : Le Chaudron du Boucher de votre général devient plein."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Portions Généreuses",
      "x": [
       "Effet : Si le Chaudron du Boucher de votre général est plein, Soignez (1) chaque unité amie visible et entièrement à 9\" de votre général."
      ]
     },
     {
      "c": "charge",
      "t": "Une Fois par Bataille, Réaction : L'adversaire a annoncé une aptitude de Charge pour une unité ennemie visible et à 12\" de cette unité",
      "n": "Bâfreur Écœurant",
      "x": [
       "Effet : Soustrayez D3 au jet de charge. Si le Chaudron du Boucher de votre général est plein, vous pouvez soustraire 3 au jet de charge au lieu de D3, mais dans ce cas, son Chaudron du Boucher devient vide après avoir résolu cette aptitude de Charge."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Phase de Mouvement Adverse",
      "n": "Crampes d'Estomac",
      "x": [
       "Effet : Chaque unité amie qui n'est pas en mêlée peut se déplacer de D3\". Si le Chaudron du Boucher de votre général est vide, les unités amies qui ne sont pas en mêlée et qui sont entièrement à 9\" de lui peuvent se déplacer de D6\" au lieu de D3\". Elles ne peuvent pas finir ces mouvements en mêlée."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Hors des Grottes": [
   "deploy",
   "start"
  ],
  "Ya Plus d'Viande ?": [
   "deploy"
  ],
  "J'tez-les dans la Marmite": [
   "end",
   "end-opp"
  ],
  "Goûteurs": [
   "fight",
   "fight-opp"
  ],
  "Pourvoyeurs Acharnés": [
   "move"
  ],
  "Garde-manger Garni": [
   "start"
  ],
  "Portions Généreuses": [
   "end",
   "end-opp"
  ],
  "Bâfreur Écœurant": [
   "charge-opp"
  ],
  "Crampes d'Estomac": [
   "move-opp"
  ],
  "Gueule de Rouille": [
   "hero"
  ],
  "Chaudron du Boucher": [
   "hero"
  ],
  "Le Goût du Mystique": [
   "fight",
   "fight-opp"
  ],
  "Canaux de la Pansemagie": [
   "hero",
   "hero-opp"
  ],
  "Appétit Bestial": [
   "charge"
  ]
 }
});
