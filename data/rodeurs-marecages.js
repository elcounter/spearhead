// Spearhead : Clans Guerriers Orruks – Rôdeurs des Marécages
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "rodeurs-marecages",
 "name": "Rôdeurs des Marécages",
 "faction": "Clans Guerriers Orruks",
 "cover": "img/rodeurs-marecages/armee.jpg",
 "photos": {"armee": "img/rodeurs-marecages/armee.jpg", "bosskitu": "img/rodeurs-marecages/bosskitu.jpg", "empaleuse": "img/rodeurs-marecages/empaleuse.jpg", "nobskur": "img/rodeurs-marecages/nobskur.jpg", "eventreurs": "img/rodeurs-marecages/eventreurs.jpg", "embrocheurs": "img/rodeurs-marecages/embrocheurs.jpg"},
 "units": [
  {
   "id": "bosskitu",
   "en": "Bosskitu' sur Bruxodonte",
   "stats": {
    "M": "10\"",
    "S": 10,
    "C": 2,
    "Sv": "3+"
   },
   "weapons": [
    {
     "n": "Kitrou' Dentelé de Boss",
     "range": "Mêlée",
     "a": 4,
     "h": 3,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "mortal"
    },
    {
     "n": "Crocs Casse-os de Bruxodonte",
     "range": "Mêlée",
     "a": 5,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "none",
     "extra": [
      "Compagnon"
     ]
    }
   ],
   "abilities": [
    {
     "c": "hero",
     "t": "Votre Phase des Héros",
     "n": "Ça Fait Partie du Plan",
     "x": [
      "Annonce : Choisissez une unité amie entièrement à 9\" de cette unité comme cible. Vous ne pouvez pas choisir l'unité qui a cette aptitude.",
      "Effet : Ajoutez 3 au score de contrôle de la cible jusqu'au début de votre prochain tour."
     ]
    }
   ],
   "kw": "HÉROS, CAVALERIE"
  },
  {
   "id": "empaleuse",
   "en": "Empaleuse",
   "stats": {
    "M": "5\"",
    "S": 5,
    "C": 2,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Traits d'Empaleuse",
     "range": "24\"",
     "a": 2,
     "h": 4,
     "w": 2,
     "r": 2,
     "d": "D6",
     "crit": "auto"
    },
    {
     "n": "Lames Dentées",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Passif",
     "n": "Embroché",
     "x": [
      "Effet : La caractéristique de Dégâts des Traits d'Empaleuse de cette unité est de 6 au lieu d'un D6 si la cible est un MONSTRE."
     ]
    }
   ],
   "kw": "MACHINE DE GUERRE"
  },
  {
   "id": "nobskur",
   "en": "Nobskur avec Rotétendard",
   "stats": {
    "M": "5\"",
    "S": 6,
    "C": 5,
    "Sv": "4+"
   },
   "weapons": [
    {
     "n": "Fendoir de Nobskur",
     "range": "Mêlée",
     "a": 4,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Souffle des Fange-dracs",
     "x": [
      "Annonce : Jetez un dé pour chaque unité ennemie en mêlée avec cette unité.",
      "Effet : Sur 1, rien ne se passe. Sur 2-5, infligez 1 dégât mortel à l'unité ennemie. Sur 6, infligez D3 dégâts mortels à l'unité ennemie."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE"
  },
  {
   "id": "eventreurs",
   "en": "Éventreurs",
   "stats": {
    "M": "5\"",
    "S": 2,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Fendoir Kruel",
     "range": "Mêlée",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "N'importe Quelle Phase de Mêlée",
     "n": "Taktik Kintimide",
     "x": [
      "Effet : Jetez un dé. Sur 3+, soustrayez 1 aux jets de touche pour les attaques qui ciblent cette unité à cette phase. Cela n'a aucun effet sur les attaques faites par des HÉROS."
     ]
    }
   ],
   "kw": "INFANTERIE"
  },
  {
   "id": "embrocheurs",
   "en": "Embrocheurs",
   "stats": {
    "M": "5\"",
    "S": 2,
    "C": 1,
    "Sv": "5+"
   },
   "weapons": [
    {
     "n": "Arbalète Embrocheuse",
     "range": "18\"",
     "a": 2,
     "h": 4,
     "w": 3,
     "r": 1,
     "d": "2",
     "crit": "auto"
    },
    {
     "n": "Lame Dentée",
     "range": "Mêlée",
     "a": 1,
     "h": 4,
     "w": 3,
     "r": 0,
     "d": "1",
     "crit": "mortal"
    }
   ],
   "abilities": [
    {
     "c": "shoot",
     "t": "Passif",
     "n": "Descendez-les",
     "x": [
      "Effet : Ajoutez 1 aux jets de touche pour les attaques de tir de cette unité si elle n'a pas utilisé une aptitude de Mouvement à ce tour."
     ]
    }
   ],
   "kw": "INFANTERIE"
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
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Waaagh! Kruelboyz",
      "x": [
       "Annonce : Choisissez votre général pour qu'il utilise cette aptitude, puis choisissez une autre unité amie entièrement à 12\" de lui comme cible.",
       "Effet : Votre général et la cible ont Frappe en Premier à cette phase."
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
      "n": "Vacarme",
      "x": [
       "Effet : Soustrayez 1 aux jets de blessure pour les attaques faites par les unités ennemies au premier round de bataille."
      ]
     },
     {
      "c": "passive",
      "t": "Une Fois par Tour (Armée), Début du Premier Round de Bataille",
      "n": "Couverts de Boue",
      "x": [
       "Annonce : Choisissez une unité amie pour qu'elle utilise cette aptitude.",
       "Effet : Dans cette bataille, l'unité n'est pas visible des figurines ennemies qui sont à plus de 12\" d'elle."
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
      "t": "Passif",
      "n": "Egomaniak",
      "x": [
       "Effet : Si une ou plusieurs autres unités amies sont à portée de mêlée de votre général, avant que vous allouiez un dégât à votre général, jetez un dé. Sur 4+, vous devez allouer le dégât à une de ces unités à la place."
      ]
     },
     {
      "c": "move",
      "t": "Une Fois par Bataille, Phase de Mouvement Adverse",
      "n": "Kaillou en Œil-de-Mork",
      "x": [
       "Effet : À la phase de tir suivante, les unités amies ont une Protection (5+) tant qu'elles sont entièrement à 12\" de votre général."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Tour, Votre Phase des Héros",
      "n": "Plan Ruzés",
      "x": [
       "Annonce : Choisissez une unité amie entièrement à 12\" de votre général.",
       "Effet : Si cette unité utilise une aptitude de Repli à ce tour, aucun dégât mortel ne lui est infligé et elle peut quand même utiliser des aptitudes de Tir et/ou de Charge plus tard pendant le tour."
      ]
     },
     {
      "c": "fight",
      "t": "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
      "n": "Cendre ki Pik' les Zeuils",
      "x": [
       "Annonce : Choisissez une unité ennemie en mêlée avec votre général et jetez un dé.",
       "Effet : Sur 1-4, soustrayez 1 aux jets de touche pour les attaques faites par l'unité jusqu'à la fin de la phase. Sur 5+, soustrayez 1 aux jets de touche pour les attaques faites par l'unité jusqu'à la fin de la bataille."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Waaagh! Kruelboyz": [
   "fight",
   "fight-opp"
  ],
  "Vacarme": [
   "shoot-opp",
   "fight-opp"
  ],
  "Couverts de Boue": [
   "start"
  ],
  "Egomaniak": [
   "shoot-opp",
   "fight-opp"
  ],
  "Kaillou en Œil-de-Mork": [
   "move-opp",
   "shoot-opp"
  ],
  "Plan Ruzés": [
   "hero"
  ],
  "Cendre ki Pik' les Zeuils": [
   "fight",
   "fight-opp"
  ],
  "Ça Fait Partie du Plan": [
   "hero"
  ],
  "Embroché": [
   "shoot"
  ],
  "Souffle des Fange-dracs": [
   "fight",
   "fight-opp"
  ],
  "Taktik Kintimide": [
   "fight",
   "fight-opp"
  ],
  "Descendez-les": [
   "shoot"
  ]
 }
});
