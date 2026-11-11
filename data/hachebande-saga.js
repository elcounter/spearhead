// Spearhead : Pyrotueurs – Hachebande de Saga
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "hachebande-saga",
 "name": "Hachebande de Saga",
 "faction": "Pyrotueurs",
 "cover": "img/hachebande-saga/armee.webp",
 "photos": {"armee": "img/hachebande-saga/armee.webp", "belliforgeron": "img/hachebande-saga/belliforgeron.webp", "atregardes": "img/hachebande-saga/atregardes.webp", "vulkites": "img/hachebande-saga/vulkites.webp"},
 "units": [
  {
   "id": "belliforgeron",
   "en": "Belliforgeron",
   "stats": {
    "M": "4\"",
    "S": 5,
    "C": 5,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Bipenne Ancestrale",
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
     "c": "passive",
     "t": "Passif",
     "n": "Icône de Grimnir",
     "x": [
      "Effet : Ajoutez 1 aux jets de sauvegarde pour les unités amies tant qu'elles sont entièrement à 12\" de cette unité."
     ]
    },
    {
     "c": "hero",
     "t": "Une Fois par Bataille, N'importe Quelle Phase des Héros",
     "n": "Planter l'Icône",
     "x": [
      "Effet : Jusqu'à la fin du tour, les unités amies ont une Protection (5+) tant qu'elles sont entièrement à 12\" de cette unité."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "atregardes",
   "en": "Berserkers Âtregardes",
   "stats": {
    "M": "4\"",
    "S": 2,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Bardiche Claqueflamme",
     "range": "Mêlée",
     "a": 2,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Le Devoir jusqu'à la Mort",
     "x": [
      "Effet : Tant que votre général est entièrement à portée de mêlée de cette unité, cette dernière et votre général ont une Protection (5+)."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "vulkites",
   "en": "Berserkers Vulkites",
   "stats": {
    "M": "4\"",
    "S": 2,
    "C": 1,
    "Sv": "6+"
   },
   "weapons": [
    {
     "n": "Haches de Pyracier",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "1",
     "crit": "none",
     "extra": [
      "Anti-charge (+1 Perf.)"
     ]
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Passif",
     "n": "Tourbillon de Destruction",
     "x": [
      "Effet : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de cette unité si elle a chargé au même tour."
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
    "title": "Trait de bataille",
    "who": "Trait de bataille",
    "abilities": [
     {
      "c": "hero",
      "t": "Une Fois par Round de Bataille, Début de Votre Tour",
      "n": "Éveiller les Runes",
      "x": [
       "Annonce : Choisissez 1 des runes d'ur-or ci-dessous, puis faites un jet d'activation d'un D6. Chaque rune d'ur-or peut être activée une seule fois par bataille.",
       "Effet : Sur 1-5, l'effet standard de la rune s'applique. Sur 6, l'effet optimisé s'applique également. Les effets durent jusqu'au début de votre prochain tour.",
       "Rune de Fureur – Standard : Ajoutez 1 aux jets de touche pour les attaques de mêlée faites par les unités amies. Optimisé : De plus, ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de vos unités.",
       "Rune d'Incandescence – Standard : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de vos unités. Optimisé : De plus, ajoutez 1 à la caractéristique de Dégâts des armes de mêlée de vos unités.",
       "Rune de Détermination Ardente – Standard : Vos unités ont une Protection (5+). Optimisé : De plus, ajoutez 1 aux jets de sauvegarde pour les unités amies.",
       "Rune du Zèle Implacable – Standard : Ajoutez 2\" à la caractéristique de Mouvement de vos unités. Optimisé : De plus, ajoutez 2 aux jets de charge de vos unités."
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
      "t": "Une Fois par Bataille, Début du Premier Round de Bataille",
      "n": "Tunnels Magmatiques",
      "x": [
       "Effet : Choisissez jusqu'à 2 unités amies. Retirez-les du champ de bataille et placez-les à nouveau n'importe où sur le champ de bataille à plus de 6\" des unités ennemies."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Tour (Armée), Votre Phase de Tir",
      "n": "Haches de Jet de Pyracier",
      "x": [
       "Annonce : Choisissez n'importe quel nombre d'unités amies qui ne sont pas en mêlée et sont à 10\" d'une ou plusieurs unités ennemies.",
       "Effet : Pour chacune de ces unités, choisissez une unité ennemie visible à 10\" d'elle et jetez un dé. Sur 4+, infligez D3 dégâts mortels à cette unité ennemie."
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
      "t": "Début de N'importe Quel Tour",
      "n": "Trop Têtu pour Mourir",
      "x": [
       "Effet : Soignez (D3) votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Passif",
      "n": "Esprit de Grimnir",
      "x": [
       "Effet : Vous pouvez relancer les jets d'activation pour l'aptitude « Éveiller les Runes »."
      ]
     },
     {
      "c": "hero",
      "t": "Votre Phase des Héros",
      "n": "Cor de Grimnir",
      "x": [
       "Annonce : Choisissez votre général pour utiliser cette aptitude s'il n'est pas en mêlée.",
       "Effet : Jetez un dé pour chaque unité amie sur le champ de bataille qui a une ou plusieurs figurines tuées. Sur 3+, vous pouvez ramener 1 figurine tuée dans cette unité."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Présence Impressionnante",
      "x": [
       "Effet : Ajoutez 3 au score de contrôle de votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Éveiller les Runes": [
   "start"
  ],
  "Tunnels Magmatiques": [
   "start"
  ],
  "Haches de Jet de Pyracier": [
   "shoot"
  ],
  "Trop Têtu pour Mourir": [
   "start",
   "start-opp"
  ],
  "Esprit de Grimnir": [
   "start"
  ],
  "Cor de Grimnir": [
   "hero"
  ],
  "Présence Impressionnante": [
   "end",
   "end-opp"
  ],
  "Icône de Grimnir": [
   "shoot-opp",
   "fight-opp"
  ],
  "Planter l'Icône": [
   "hero",
   "hero-opp"
  ],
  "Le Devoir jusqu'à la Mort": [
   "shoot-opp",
   "fight-opp"
  ],
  "Tourbillon de Destruction": [
   "fight"
  ]
 }
});
