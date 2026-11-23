// Spearhead : Forts Khazalites – Magmic Fyrd
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "fyrd-magmatique",
 "name": "Magmic Fyrd",
 "faction": "Forts Khazalites",
 "units": [
  {
   "id": "runefather",
   "en": "Auric Runefather on Magmadroth",
   "stats": {"M": "10\"", "S": 14, "C": 5, "Sv": "4+"},
   "weapons": [
    {"n": "Roaring Fyrestream", "range": "10\"", "a": 4, "h": 3, "w": 3, "r": 1, "d": "D3", "crit": "none", "extra": ["Compagnon"]},
    {"n": "Latchkey Grandaxe", "range": "Mêlée", "a": 4, "h": 3, "w": 3, "r": 2, "d": "3", "crit": "none"},
    {"n": "Magmadroth's Maw, Claws and Horns", "range": "Mêlée", "a": 6, "h": 4, "w": 2, "r": 2, "d": "3", "crit": "none", "extra": ["Compagnon"]}
   ],
   "abilities": [
    {
     "c": "passive",
     "t": "Passif",
     "n": "Volcanic Blood",
     "x": [
      "Effet : Soustrayez 1 au score de contrôle des unités ennemies en mêlée avec cette unité."
     ]
    },
    {
     "c": "passive",
     "t": "Passif",
     "n": "Battle Damaged",
     "x": [
      "Effet : Tant que cette unité a 10 points de dégâts ou plus, la caractéristique d'Attaques de ses Magmadroth's Maw, Claws and Horns est de 4 au lieu de 6."
     ]
    }
   ],
   "kw": "HÉROS, MONSTRE, PROTECTION (6+)"
  },
  {
   "id": "runesmiter",
   "en": "Auric Runesmiter",
   "stats": {"M": "4\"", "S": 5, "C": 2, "Sv": "5+"},
   "weapons": [
    {"n": "Latch-axe", "range": "Mêlée", "a": 4, "h": 3, "w": 3, "r": 1, "d": "2", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Awaken the Runes",
     "x": [
      "Annonce : Choisissez comme cible une unité amie visible et entièrement à 12\" de cette unité, puis faites un jet de psalmodie de D6.",
      "Effet : Sur 3+, soustrayez 1 aux jets de blessure des attaques de mêlée qui ciblent la cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, PRÊTRE, INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "flameseekers",
   "en": "Vulkyn Flameseekers (8 + 1 Kyndledroth)",
   "stats": {"M": "4\"", "S": 2, "C": 1, "Sv": "5+"},
   "weapons": [
    {"n": "Vulkyn Weapons", "range": "Mêlée", "a": 3, "h": 3, "w": 3, "r": 1, "d": "1", "crit": "none"},
    {"n": "Kyndledroth's Fangs", "range": "Mêlée", "a": 1, "h": 3, "w": 3, "r": 0, "d": "2", "crit": "none", "extra": ["Compagnon"]}
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Confounded Beast!",
     "x": [
      "Annonce : Le Kyndledroth de cette unité doit être en vie. Choisissez comme cible une unité ennemie en mêlée avec cette unité.",
      "Effet : Jetez un dé. Sur 3+, soustrayez 1 aux jets de touche des attaques de mêlée de la cible pour le restant du tour."
     ]
    }
   ],
   "kw": "INFANTERIE, PROTECTION (6+)"
  },
  {
   "id": "hearthguard",
   "en": "Auric Hearthguard",
   "stats": {"M": "4\"", "S": 2, "C": 1, "Sv": "6+"},
   "weapons": [
    {"n": "Magmapike", "range": "12\"", "a": 2, "h": 4, "w": 3, "r": 1, "d": "1", "crit": "none"},
    {"n": "Magmapike", "range": "Mêlée", "a": 1, "h": 3, "w": 3, "r": 1, "d": "1", "crit": "none"}
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Votre Phase de Tir",
     "n": "Molten Rock Bolts",
     "x": [
      "Annonce : Choisissez comme cible une unité ennemie à laquelle des points de dégâts ont été attribués par les attaques de tir de cette unité à ce tour.",
      "Effet : Jetez un dé. Sur 3+, soustrayez 1\" à la caractéristique de Mouvement de la cible jusqu'au début de votre prochain tour."
     ]
    },
    {
     "c": "start",
     "t": "Début de Votre Tour (à partir du 3e round)",
     "n": "Fiery Reinforcements",
     "x": [
      "Cette unité n'est pas placée pendant la phase de déploiement.",
      "Effet : À partir du troisième round de bataille, placez cette unité à 1\" d'un bord du champ de bataille et à plus de 6\" de toutes les unités ennemies."
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
      "c": "passive",
      "t": "Passif",
      "n": "Fury for the Fallen",
      "x": [
       "Effet : Ajoutez 1 à la caractéristique d'Attaques des armes de mêlée (sauf Compagnon) des unités amies tant que l'une de ces conditions est remplie : les Flameseekers ont 4 figurines ou moins ; les Hearthguard ont 2 figurines ou moins ; le Runesmiter a 3 points de dégâts ou plus ; votre général a 8 points de dégâts ou plus."
      ]
     },
     {
      "c": "charge",
      "t": "Une Fois par Bataille (Armée), Réaction : Vous avez annoncé une aptitude de Charge pour une unité amie",
      "n": "Berserk Charge",
      "x": [
       "Effet : Relancez ce jet de charge. Si vous le faites et que l'unité a chargé à ce tour, elle a Frappe en Premier jusqu'au début de votre prochain tour."
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
      "c": "deploy",
      "t": "Une Fois par Bataille (Armée), Phase de Déploiement",
      "n": "Eager for Battle",
      "x": [
       "Annonce : Choisissez comme cible une unité amie non-MONSTRE.",
       "Effet : La cible peut effectuer un Mouvement Normal comme si c'était votre phase de mouvement."
      ]
     },
     {
      "c": "end",
      "t": "Une Fois par Tour (Armée), Fin du Tour Adverse",
      "n": "Flaming Runes",
      "x": [
       "Annonce : Choisissez une unité amie, puis comme cible une unité ennemie en mêlée avec elle.",
       "Effet : Jetez 6 dés. Pour chaque 4+, infligez 1 dégât mortel à la cible. L'unité amie ne peut plus utiliser cette aptitude pour le restant de la bataille."
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
      "c": "defense",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Halo of Flames",
      "x": [
       "Effet : Votre général a une Protection (4+) pour le restant du tour. À partir du début du tour suivant, soustrayez 1 à ses jets de protection pour le restant de la bataille."
      ]
     },
     {
      "c": "shoot",
      "t": "Une Fois par Bataille, Votre Phase de Tir",
      "n": "Stoke the Fire",
      "x": [
       "Effet : Pour cette phase, le Roaring Fyrestream a D3+4 Attaques. Pour chaque jet de touche de tir non modifié de 1, attribuez D3 points de dégâts à votre général une fois l'aptitude de Tir résolue. Aucun jet de protection n'est possible contre ces points de dégâts."
      ]
     },
     {
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Fyrespawn",
      "x": [
       "Annonce : Choisissez comme cible une unité ennemie en mêlée avec votre général.",
       "Effet : Infligez 1 dégât mortel à la cible."
      ]
     },
     {
      "c": "passive",
      "t": "Passif",
      "n": "Lodgefather",
      "x": [
       "Effet : Ajoutez 1 aux jets de protection des unités amies non-MONSTRE entièrement à 3\" de votre général."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Fury for the Fallen": ["fight", "fight-opp"],
  "Berserk Charge": ["charge"],
  "Eager for Battle": ["deploy"],
  "Flaming Runes": ["end-opp"],
  "Halo of Flames": ["fight", "fight-opp"],
  "Stoke the Fire": ["shoot"],
  "Fyrespawn": ["end", "end-opp"],
  "Lodgefather": ["shoot-opp", "fight-opp"],
  "Volcanic Blood": ["end", "end-opp"],
  "Battle Damaged": ["fight", "fight-opp"],
  "Awaken the Runes": ["hero"],
  "Confounded Beast!": ["fight", "fight-opp"],
  "Molten Rock Bolts": ["shoot"],
  "Fiery Reinforcements": ["start"]
 }
});
