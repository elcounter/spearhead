// Spearhead : Hantenuits – Slasher Host
(window.SPEARHEADS = window.SPEARHEADS || []).push({
 "id": "slasher-host",
 "name": "Slasher Host",
 "faction": "Hantenuits",
 "units": [
  {
   "id": "knight-of-shrouds",
   "en": "Knight of Shrouds",
   "stats": {"M": "8\"", "S": 5, "C": 2, "Sv": "4+"},
   "weapons": [
    {"n": "Sword of Stolen Hours", "range": "Mêlée", "a": 5, "h": 4, "w": 3, "r": 1, "d": "2", "crit": "auto"}
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "Votre Phase des Héros",
     "n": "Discorporate",
     "x": [
      "Annonce : Choisissez comme cible une unité amie entièrement à 9\" de cette unité.",
      "Effet : Jusqu'au début de votre prochain tour, la cible a une Protection (5+)."
     ]
    }
   ],
   "kw": "HÉROS, INFANTERIE, VOL, PROTECTION (6+)"
  },
  {
   "id": "spirit-hosts",
   "en": "Spirit Hosts",
   "stats": {"M": "8\"", "S": 3, "C": 1, "Sv": "4+"},
   "weapons": [
    {"n": "Spectral Claws and Daggers", "range": "Mêlée", "a": 6, "h": 4, "w": 4, "r": 0, "d": "1", "crit": "auto"}
   ],
   "abilities": [
    {
     "c": "defense",
     "t": "Passif",
     "n": "Drawn to War",
     "x": [
      "Effet : Votre général a une Protection (4+) tant qu'il est à 1\" de cette unité."
     ]
    }
   ],
   "kw": "INFANTERIE, VOL, PROTECTION (6+)"
  },
  {
   "id": "grimghast-reapers",
   "en": "Grimghast Reapers (×2 unités)",
   "stats": {"M": "8\"", "S": 1, "C": 1, "Sv": "4+"},
   "weapons": [
    {"n": "Slasher Scythe", "range": "Mêlée", "a": 2, "h": 4, "w": 3, "r": 1, "d": "1", "crit": "auto"}
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Passif",
     "n": "Reaped Like Corn",
     "x": [
      "Effet : Les attaques de mêlée de cette unité infligent des touches critiques sur des jets de touche non modifiés de 5+ si l'unité cible a 5 figurines ou plus."
     ]
    }
   ],
   "kw": "INFANTERIE, VOL, PROTECTION (6+)"
  },
  {
   "id": "chainrasps",
   "en": "Chainrasps (×2 unités)",
   "stats": {"M": "8\"", "S": 1, "C": 1, "Sv": "5+"},
   "weapons": [
    {"n": "Malignant Weapon", "range": "Mêlée", "a": 2, "h": 4, "w": 5, "r": 0, "d": "1", "crit": "auto"}
   ],
   "abilities": [
    {
     "c": "fight",
     "t": "Passif",
     "n": "Chilling Horde",
     "x": [
      "Effet : Ajoutez 1 aux jets de blessure des attaques de mêlée de cette unité si elle a chargé au même tour."
     ]
    }
   ],
   "kw": "INFANTERIE, VOL, RENFORTS, PROTECTION (6+)"
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
      "c": "charge",
      "t": "N'importe Quelle Phase de Charge",
      "n": "Wave of Terror",
      "x": [
       "Annonce : Choisissez une unité amie pour utiliser cette aptitude si elle a chargé à cette phase et que le jet de charge était de 10+. Puis choisissez comme cible une unité ennemie à 1\" d'elle.",
       "Effet : La cible a Frappe en Dernier à ce tour."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Ethereal",
      "x": [
       "Effet : Ignorez tous les modificateurs aux jets de sauvegarde des unités amies (positifs et négatifs)."
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
      "c": "start",
      "t": "Début du Premier Round de Bataille",
      "n": "Death Stalkers",
      "x": [
       "Annonce : Choisissez une unité ennemie sur le champ de bataille.",
       "Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée utilisées pour les attaques qui ciblent cette unité."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Chorus of Terror",
      "x": [
       "Effet : Soustrayez 1 aux jets de touche des attaques de mêlée qui ciblent une unité amie qui a chargé au même tour."
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
      "c": "end",
      "t": "Fin de N'importe Quel Tour",
      "n": "Soulfire Ring",
      "x": [
       "Effet : Si des figurines ont été tuées par votre général à ce tour, Soignez (D6) votre général."
      ]
     },
     {
      "c": "defense",
      "t": "Passif",
      "n": "Cloaked in Shadow",
      "x": [
       "Effet : Pas plus d'une unité ennemie peut cibler votre général avec des attaques (de tir ou de mêlée) par phase."
      ]
     },
     {
      "c": "hero",
      "t": "Une Fois par Bataille, Votre Phase des Héros",
      "n": "Beacon of Nagashizzar",
      "x": [
       "Effet : Ramenez 1 figurine tuée dans chaque unité amie sur le champ de bataille."
      ]
     },
     {
      "c": "fight",
      "t": "Passif",
      "n": "Shadow's Edge",
      "x": [
       "Effet : La Sword of Stolen Hours de votre général a Crit (Mortel)."
      ]
     }
    ]
   }
  ]
 },
 "when": {
  "Wave of Terror": ["charge", "charge-opp"],
  "Ethereal": ["shoot-opp", "fight-opp"],
  "Death Stalkers": ["start"],
  "Chorus of Terror": ["fight", "fight-opp"],
  "Soulfire Ring": ["end", "end-opp"],
  "Cloaked in Shadow": ["shoot-opp", "fight-opp"],
  "Beacon of Nagashizzar": ["hero"],
  "Shadow's Edge": ["fight", "fight-opp"],
  "Discorporate": ["hero"],
  "Drawn to War": ["shoot-opp", "fight-opp"],
  "Reaped Like Corn": ["fight", "fight-opp"],
  "Chilling Horde": ["fight", "fight-opp"]
 }
});
