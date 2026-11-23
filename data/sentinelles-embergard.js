// Spearhead : Cités de Sigmar – Sentinelles d'Embergard
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "sentinelles-embergard",
 "name": "Sentinelles d'Embergard",
 "faction": "Cités de Sigmar",
 "units": [
  {
   "id": "kreel",
   "en": "Jorvan Kreel, Héritier du Kraken",
   "stats": {"M": "6\"", "S": 5, "C": 2, "Sv": "4+"},
   "weapons": [
    {"n": "Lames de Rôdeur", "range": "Mêlée", "a": 6, "h": 3, "w": 4, "r": 1, "d": "2", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Tirailleurs Vétérans",
     "x": [
      "Annonce : Choisissez comme cible une unité amie entièrement à 12\" de cette unité.",
      "Effet : Jetez un dé. Sur 3+, pour le restant du tour, ajoutez 2\" à la caractéristique de Mouvement de la cible, mais elle ne peut pas utiliser d'aptitudes de Course."
     ]
    },
    {
     "c": "end",
     "t": "Fin de N'importe Quel Tour",
     "n": "Panthère de Cendre Rôdeuse",
     "x": [
      "Effet : Si cette unité a le pion de Thexa, donnez ce pion à une unité ennemie à 6\" de cette unité.",
      "Si une unité ennemie a le pion de Thexa, infligez D3 dégâts mortels à cette unité ennemie. Puis donnez le pion de Thexa à cette unité."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "forgepretre",
   "en": "Forgeprêtre Mallus",
   "stats": {"M": "5\"", "S": 5, "C": 2, "Sv": "4+"},
   "weapons": [
    {"n": "Marteau de Guerre en Sigmarite", "range": "Mêlée", "a": 4, "h": 4, "w": 3, "r": 1, "d": "D3", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Consacrer la Terre",
     "x": [
      "Annonce : Choisissez un objectif à 12\" de cette unité, puis faites un jet de psalmodie de D6.",
      "Effet : Sur 3+, pour le restant du tour, les unités amies ont une Protection (5+) tant qu'elles contestent cet objectif."
     ]
    }
   ],
   "kw": "HÉROS, PRÊTRE, INFANTERIE"
  },
  {
   "id": "galants",
   "en": "Galants des Guildes Franches",
   "stats": {"M": "5\"", "S": 2, "C": 1, "Sv": "3+"},
   "weapons": [
    {"n": "Armes de Bravoure", "range": "Mêlée", "a": 2, "h": 3, "w": 4, "r": 1, "d": "1", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Volonté Inébranlable",
     "x": [
      "Annonce : Si cette unité n'a pas chargé à ce tour, choisissez comme cible une unité ennemie en mêlée avec elle.",
      "Effet : Pour le restant du tour, soustrayez 1 à la caractéristique de Perforation des armes de la cible pour les attaques qui ciblent cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "grenadiers",
   "en": "Grenadiers des Guildes Franches (×2 unités)",
   "stats": {"M": "5\"", "S": 1, "C": 1, "Sv": "4+"},
   "weapons": [
    {"n": "Arsenal Balaie-ruines", "range": "10\"", "a": 1, "h": 4, "w": 2, "r": 2, "d": "1", "crit": "none"},
    {"n": "Vouge de Grenadier", "range": "Mêlée", "a": 2, "h": 4, "w": 4, "r": 1, "d": "2", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "end",
     "t": "Une Fois par Tour (Armée), Fin de N'importe Quel Tour",
     "n": "Cendre et Braise",
     "x": [
      "Annonce : Choisissez jusqu'à 1 élément de décor contesté par cette unité et jusqu'à 1 objectif contesté par cette unité, puis choisissez comme cibles toutes les unités ennemies qui les contestent aussi.",
      "Effet : Jetez un dé pour chaque cible. Sur 3+, infligez 1 dégât mortel à la cible."
     ]
    }
   ],
   "kw": "INFANTERIE, RENFORTS"
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
      "c": "move",
      "t": "Une Fois par Tour (Armée), Réaction : Vous avez annoncé une aptitude de Corps à Corps pour votre général ou une unité amie non-HÉROS entièrement à 12\" de votre général",
      "n": "Doctrines de Rôdeur",
      "x": [
       "Utilisée par : L'unité qui utilise cette aptitude de Corps à Corps.",
       "Effet : Juste après la résolution de cette aptitude de Corps à Corps, choisissez un point du champ de bataille à 6\" de votre général. Retirez l'unité qui utilise cette aptitude du champ de bataille et placez-la à nouveau à 1\" de ce point et hors de mêlée."
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
      "c": "shoot",
      "t": "Passif",
      "n": "Entraînement au Corps à Corps",
      "x": [
       "Effet : Les armes de tir des unités amies ont Tir en Mêlée, mais vous devez soustraire 1 aux jets de touche de leurs attaques de tir tant qu'elles sont en mêlée."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Venez la Prendre, Bandits !",
      "x": [
       "Effet : Ajoutez 5 au score de contrôle des unités amies non-HÉROS tant qu'elles sont en mêlée avec une ou plusieurs unités ennemies qui ont 6 figurines ou plus ou une caractéristique de Santé de 3 ou plus."
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
      "c": "shoot",
      "t": "N'importe Quelle Phase de Tir",
      "n": "Couteaux de Lancer",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie visible à 10\" de votre général.",
       "Effet : Jetez un dé. Sur 3+, infligez 1 dégât mortel à la cible."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Votre Phase de Mouvement",
      "n": "Rôdeur Aguerri",
      "x": [
       "Annonce : Choisissez comme cible une unité amie entièrement à 6\" d'un bord du champ de bataille.",
       "Effet : Retirez la cible du champ de bataille et placez-la à nouveau entièrement à 3\" d'un bord du champ de bataille et à plus de 6\" de toutes les unités ennemies."
      ]
     },
     {
      "c": "charge",
      "t": "Passif",
      "n": "Endurance Fougueuse",
      "x": [
       "Effet : Votre général peut utiliser des aptitudes de Charge même s'il a utilisé une aptitude de Course ou de Retraite au même tour, et les aptitudes de Retraite ne lui infligent aucun dégât mortel."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Lame du Kraken",
      "x": [
       "Effet : Doublez la caractéristique d'Attaques des armes de mêlée de votre général pour le restant du tour."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Doctrines de Rôdeur": ["fight", "fight-opp"],
  "Entraînement au Corps à Corps": ["shoot", "shoot-opp"],
  "Venez la Prendre, Bandits !": ["end", "end-opp"],
  "Couteaux de Lancer": ["shoot", "shoot-opp"],
  "Rôdeur Aguerri": ["move"],
  "Endurance Fougueuse": ["move", "charge"],
  "Lame du Kraken": ["fight", "fight-opp"],
  "Tirailleurs Vétérans": ["hero"],
  "Panthère de Cendre Rôdeuse": ["end", "end-opp"],
  "Consacrer la Terre": ["hero"],
  "Volonté Inébranlable": ["fight", "fight-opp"],
  "Cendre et Braise": ["end", "end-opp"]
 }
});
