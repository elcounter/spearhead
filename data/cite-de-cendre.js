// Règles : Cité de Cendre (pack de bataille Spearhead)
(window.RULEPACKS = window.RULEPACKS || []).push({
 "id": "cite-de-cendre",
 "name": "Cité de Cendre",
 "sub": "Pack de bataille",
 "cover": "img/cite/plateau.jpg",
 "imgs": {
  "campagne": "img/cite/campagne.jpg",
  "decors": "img/cite/decors.jpg",
  "plan": "img/cite/plan.jpg",
  "plateau": "img/cite/plateau.jpg",
  "r-barricade": "img/cite/r-barricade.jpg",
  "r-caisse": "img/cite/r-caisse.jpg",
  "r-chausse": "img/cite/r-chausse.jpg",
  "r-egout": "img/cite/r-egout.jpg",
  "r-tonneau": "img/cite/r-tonneau.jpg",
  "reliques": "img/cite/reliques.jpg"
 },
 "groups": [
  {
   "id": "avant",
   "en": "Avant la bataille",
   "img": "plan",
   "blocks": [
    {
     "k": "h",
     "x": "Séquence de pré-bataille"
    },
    {
     "k": "ol",
     "x": [
      "Tirez au dé. Le gagnant choisit qui est l'attaquant et qui est le défenseur.",
      "L'attaquant choisit son aptitude de régiment et son optimisation. Puis le défenseur fait de même.",
      "Le défenseur choisit sur quelle face du champ de bataille de royaume les joueurs combattent : le Croisement Brisé ou le Bastion de Cendre.",
      "Le défenseur choisit 1 des cartes de déploiement et décide quel territoire appartient à quel joueur.",
      "Le défenseur place 1 grand élément de terrain entièrement dans son territoire et sur un coin d'un objectif rectangulaire, puis l'attaquant fait de même. Ces objectifs deviennent des objectifs fortifiés.",
      "Le défenseur choisit une des reliques de départ et la place entièrement dans son territoire. L'attaquant place ensuite l'autre relique de départ entièrement dans son territoire."
     ]
    },
    {
     "k": "h",
     "x": "Reliques de départ"
    },
    {
     "k": "ul",
     "x": [
      "Bastion de Cendre : Barricade de Fortune et Plaque d'Égout Discrète.",
      "Croisement Brisé : Tonneau de Braisepierre et Caisse d'Aqua Ghyranis."
     ]
    },
    {
     "k": "h",
     "x": "Préparer la pile de Fer de Lance"
    },
    {
     "k": "p",
     "x": "Un joueur prend la pile de péripéties de la face jouée, la mélange et la place face cachée à côté du champ de bataille (l'autre pile n'est pas utilisée). Chaque joueur prend 1 pile de tactiques de bataille, la mélange et la place face cachée à portée de main."
    },
    {
     "k": "h",
     "x": "Déploiement"
    },
    {
     "k": "p",
     "x": "L'attaquant place toutes les unités de son armée en premier, puis le défenseur. Chaque unité doit être placée entièrement en territoire ami et à plus de 6\" du territoire ennemi."
    },
    {
     "k": "h",
     "x": "Durée de la bataille"
    },
    {
     "k": "p",
     "x": "4 rounds de bataille."
    }
   ]
  },
  {
   "id": "rounds",
   "en": "Rounds et victoire",
   "img": "plateau",
   "blocks": [
    {
     "k": "h",
     "x": "Début de chaque round de bataille"
    },
    {
     "k": "ol",
     "x": [
      "Premier round : l'attaquant choisit qui prend le premier tour. Rounds suivants : les joueurs font un jet de priorité (Règles de Base, 12.0). En cas d'égalité, celui qui a joué en premier au round précédent décide.",
      "Déterminez l'outsider (Règles de Base, 12.0).",
      "Piochez la carte de péripétie et appliquez-la aussitôt.",
      "Les joueurs piochent des cartes de tactique de bataille.",
      "Utilisez les aptitudes ayant le timing « Début du round de bataille »."
     ]
    },
    {
     "k": "note",
     "x": "L'outsider est le joueur qui a le moins de points de victoire au début du round (Règles de Base, 12.0). En cas d'égalité, par exemple au premier round, il n'y a pas d'outsider."
    },
    {
     "k": "h",
     "x": "Cartes de péripétie"
    },
    {
     "k": "p",
     "x": "1 carte de péripétie est piochée au début de chaque round de bataille et s'applique aussitôt, pour ce round."
    },
    {
     "k": "h",
     "x": "Cartes de tactique de bataille"
    },
    {
     "k": "ul",
     "x": [
      "Début du premier round : chaque joueur pioche 3 cartes de tactique de bataille.",
      "Début des rounds suivants : chaque joueur peut d'abord défausser face visible n'importe quel nombre de cartes de sa main, puis pioche jusqu'à avoir à nouveau 3 cartes en main."
     ]
    },
    {
     "k": "h",
     "x": "Prendre l'initiative"
    },
    {
     "k": "p",
     "x": "Si le joueur qui jouait en second au round précédent remporte le jet de priorité et choisit de jouer en premier, il prend l'initiative. Il ne pioche alors pas de carte de tactique de bataille pour ce round, sauf s'il est l'outsider et que la différence de points de victoire entre les joueurs est de 5 ou plus."
    },
    {
     "k": "h",
     "x": "Fin de chacun de vos tours : points de victoire"
    },
    {
     "k": "ul",
     "x": [
      "1 point de victoire si vous contrôlez au moins 1 objectif.",
      "1 point de victoire si vous contrôlez au moins 2 objectifs.",
      "1 point de victoire si vous contrôlez plus d'objectifs que votre adversaire.",
      "1 point de victoire pour chaque tactique de bataille que vous avez exécutée à ce tour."
     ]
    },
    {
     "k": "p",
     "x": "Vérifie aussi les péripéties qui donnent des points de victoire supplémentaires à la fin du tour ou du round."
    },
    {
     "k": "h",
     "x": "Fin de la bataille : victoire glorieuse"
    },
    {
     "k": "p",
     "x": "Après 4 rounds, le joueur qui a marqué le plus de points de victoire est le vainqueur. En cas d'égalité, la bataille est une égalité."
    }
   ]
  },
  {
   "id": "decors",
   "en": "Décors",
   "blocks": [
    {
     "k": "p",
     "x": "Chaque bataille de la Cité de Cendre se joue autour de 2 grands éléments de terrain, les Manoirs en Ruine."
    },
    {
     "k": "ul",
     "x": [
      "Avant le déploiement, chaque joueur place 1 grand élément de terrain entièrement dans son territoire et sur un coin d'un objectif rectangulaire (le défenseur en premier).",
      "L'objectif concerné devient un objectif fortifié."
     ]
    },
    {
     "k": "h",
     "x": "Aptitudes passives"
    },
    {
     "k": "ab",
     "a": {
      "c": "defense",
      "t": "Passif · grand élément de terrain",
      "n": "Couvert",
      "x": [
       "Soustrayez 1 aux jets de touche pour les attaques ciblant une unité qui est derrière ou entièrement sur cet élément de terrain, sauf si elle a chargé au même tour, ou a le mot-clé VOL."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "c": "move",
      "t": "Passif · grand élément de terrain",
      "n": "Instable",
      "x": [
       "Les figurines peuvent se déplacer sur cet élément de terrain mais ne peuvent pas être placées ni finir tout type de mouvement sur des parties de cet élément plus hautes que 1\"."
      ]
     }
    }
   ]
  },
  {
   "id": "reliques",
   "en": "Reliques",
   "blocks": [
    {
     "k": "p",
     "x": "Des éclaireurs se disputent les trésors de Gardebraise, représentés par 5 reliques. Chaque relique a une aptitude unique utilisable par les 2 joueurs."
    },
    {
     "k": "ul",
     "x": [
      "Placement : entièrement sur le champ de bataille, à plus de 3\" des unités ennemies et à plus de 6\" des autres reliques.",
      "Les reliques sont contestées et contrôlées comme les éléments de terrain (Règles de Base, 32.3) et ont l'aptitude de terrain Instable."
     ]
    },
    {
     "k": "h",
     "x": "Reliques de départ"
    },
    {
     "k": "ul",
     "x": [
      "Bastion de Cendre : Barricade de Fortune et Plaque d'Égout Discrète.",
      "Croisement Brisé : Tonneau de Braisepierre et Caisse d'Aqua Ghyranis."
     ]
    },
    {
     "k": "h",
     "x": "Les 5 reliques"
    },
    {
     "k": "ab",
     "a": {
      "img": "r-tonneau",
      "c": "hero",
      "t": "Une fois par tour (armée), votre phase des héros",
      "n": "Tonneau de Braisepierre",
      "x": [
       "Annonce : choisissez comme cible une unité amie à 3\" de cette relique.",
       "Effet : ajoutez 1 aux jets de blessure pour les attaques de la cible pour le restant du tour."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "img": "r-caisse",
      "c": "defense",
      "t": "Passif",
      "n": "Caisse d'Aqua Ghyranis",
      "x": [
       "Effet : les unités entièrement à 6\" de cette relique ont une PROTECTION (5+)."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "img": "r-chausse",
      "c": "fight",
      "t": "Une fois par tour (armée), votre phase de combat",
      "n": "Chausse-trappes d'Ulgu",
      "x": [
       "Annonce : vous devez utiliser cette aptitude si cette relique est à 3\" d'une ou plusieurs unités (amies ou ennemies) qui ont chargé à ce tour. Choisissez ces unités comme cibles.",
       "Effet : jetez un D3 pour chaque cible. Sur 2+, infligez à la cible autant de dégâts mortels que le résultat du jet."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "img": "r-barricade",
      "c": "shoot",
      "t": "Passif",
      "n": "Barricade de Fortune",
      "x": [
       "Effet : les unités entièrement à 3\" de cette relique ne peuvent pas être ciblées par les attaques de tir sauf si la figurine attaquante est à portée de mêlée des unités."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "img": "r-egout",
      "c": "move",
      "t": "Une fois par tour (armée), votre phase de mouvement",
      "n": "Plaque d'Égout Discrète",
      "x": [
       "Annonce : choisissez comme cible une unité amie qui est entièrement à 3\" de cette relique.",
       "Effet : retirez la cible du champ de bataille et replacez-la entièrement en territoire ami et à plus de 6\" des unités ennemies."
      ]
     }
    }
   ]
  },
  {
   "id": "campagne",
   "en": "Campagne : Hidden in the Ashes",
   "blocks": [
    {
     "k": "p",
     "x": "Mini-campagne de 3 batailles liées entre 2 joueurs, qui cherchent à récupérer un trésor de braisepierre caché dans Gardebraise. Compte un après-midi ou une soirée. Elle utilise les règles du pack Cité de Cendre, plus les règles ci-dessous."
    },
    {
     "k": "h",
     "x": "Choisir son armée"
    },
    {
     "k": "p",
     "x": "Tirez au dé : le gagnant choisit une armée de Fer de Lance pour toute la campagne, puis l'adversaire fait de même. Prévue pour les Sentinelles de Gardebraise et la Meute-meurtrière de Crixxit, mais toute armée de Fer de Lance convient."
    },
    {
     "k": "h",
     "x": "Parcours"
    },
    {
     "k": "ol",
     "x": [
      "Escarmouche Fumante (Smouldering Skirmish), Bastion de Cendre.",
      "Blocus Ardent (Blazing Blockade), Croisement Brisé.",
      "Embrasement Final (Final Conflagration), Bastion de Cendre."
     ]
    },
    {
     "k": "h",
     "x": "Séquence de pré-bataille de campagne"
    },
    {
     "k": "ol",
     "x": [
      "Sauf indication contraire, tirez au dé. Le gagnant choisit qui est l'attaquant et le défenseur.",
      "L'attaquant choisit son aptitude de régiment et son optimisation, puis le défenseur.",
      "Sauf indication contraire, le défenseur choisit quel territoire appartient à quel joueur.",
      "Le défenseur place 1 grand élément de terrain entièrement dans son territoire, sur un coin d'un objectif rectangulaire, puis l'attaquant. Ces objectifs deviennent fortifiés.",
      "Le défenseur choisit une relique de départ et la place entièrement dans son territoire. L'attaquant place l'autre entièrement dans le sien."
     ]
    },
    {
     "k": "h",
     "x": "Règles communes"
    },
    {
     "k": "ul",
     "x": [
      "Déploiement : le défenseur place toutes ses unités en premier, entièrement dans son territoire. Puis l'attaquant, entièrement dans son territoire et à plus de 6\" du territoire ennemi. Le défenseur choisit qui prend le premier tour.",
      "Les armées commencent chaque bataille au complet.",
      "Chaque joueur additionne ses points de victoire de toutes les batailles jouées (total de campagne)."
     ]
    },
    {
     "k": "h",
     "x": "Bataille 1 : Escarmouche Fumante"
    },
    {
     "k": "ul",
     "x": [
      "Bastion de Cendre. Attaquant et défenseur : tirage au dé normal.",
      "Reliques de départ : Barricade de Fortune et Chausse-trappes d'Ulgu.",
      "Si une péripétie demande de placer les Chausse-trappes d'Ulgu, le joueur place la Plaque d'Égout Discrète à la place."
     ]
    },
    {
     "k": "h",
     "x": "Bataille 2 : Blocus Ardent"
    },
    {
     "k": "ul",
     "x": [
      "Croisement Brisé. À égalité au total : séquence normale.",
      "Si un joueur a plus de points au total : pas de tirage, le joueur qui en a le moins choisit qui est l'attaquant et le défenseur, et celui qui en a le plus choisit les 2 reliques de départ.",
      "Si une péripétie demande de placer une relique déjà en jeu, le joueur place le Tonneau de Braisepierre ou la Caisse d'Aqua Ghyranis à la place (celle qui n'est pas en jeu)."
     ]
    },
    {
     "k": "h",
     "x": "Bataille 3 : Embrasement Final"
    },
    {
     "k": "ul",
     "x": [
      "Bastion de Cendre. À égalité au total : séquence normale.",
      "Si un joueur a plus de points au total : pas de tirage, il est le défenseur. Le Tonneau de Braisepierre est une relique de départ, placée en premier au centre du champ de bataille. Ce joueur choisit l'autre relique de départ, que le défenseur place entièrement dans son territoire. L'attaquant ne place pas de relique.",
      "Si une péripétie demande de placer une relique déjà en jeu, le joueur place la Barricade de Fortune ou la Plaque d'Égout Discrète à la place (celle qui n'est pas en jeu)."
     ]
    },
    {
     "k": "h",
     "x": "Remporter la campagne (fin de la bataille 3)"
    },
    {
     "k": "ul",
     "x": [
      "Victoire majeure : un joueur contrôle le Tonneau de Braisepierre et a plus de points de victoire au total que son adversaire.",
      "Victoire mineure : un joueur contrôle le Tonneau de Braisepierre mais a moins de points au total ; ou personne ne le contrôle et un joueur a plus de points au total.",
      "Égalité : tout autre résultat."
     ]
    }
   ]
  }
 ],
 "tactics": [
  [
   "Prendre leur Bien",
   "Take What's Theirs",
   "Vous contrôlez une relique en territoire ennemi.",
   "Riposte Préparée",
   "Prepared Riposte",
   "Phase de mouvement adverse",
   "fight",
   [
    "move-opp"
   ],
   "Choisissez une unité amie. Pour le restant du tour, elle a FRAPPE EN PREMIER tant qu'elle est en mêlée avec une unité ennemie qui a chargé à ce tour."
  ],
  [
   "Meurtre Impitoyable",
   "Pitiless Murder",
   "Une unité ennemie a été la cible de toutes les attaques de mêlée d'au moins 2 unités amies différentes à ce tour.",
   "Motivés par l'Appât du Gain",
   "Motivated by Greed",
   "N'importe quelle phase des héros",
   "hero",
   [
    "hero",
    "hero-opp"
   ],
   "Choisissez une unité amie à 6\" d'une relique. Ajoutez D6 à son score de contrôle jusqu'au début de votre prochain tour."
  ],
  [
   "Prendre les Flancs",
   "Take the Flanks",
   "Il y a des unités amies à 3\" de chaque petit bord du champ de bataille.",
   "Explosifs Piégés",
   "Rigged Explosions",
   "Fin de n'importe quel tour",
   "end",
   [
    "end",
    "end-opp"
   ],
   "Choisissez une relique, puis chaque unité (amie et ennemie) à 3\" d'elle comme cible. Jetez un D3 pour chaque cible et infligez-lui autant de dégâts mortels."
  ],
  [
   "Décapiter",
   "Cut Off the Head",
   "Le général ennemi a été tué à ce tour, ou il a été tué à un tour précédent et au moins une unité ennemie a été détruite à ce tour.",
   "Contre-charge",
   "Counter-Charge",
   "Phase de charge adverse",
   "charge",
   [
    "charge-opp"
   ],
   "Choisissez une unité amie qui n'est pas en mêlée. Elle peut utiliser une aptitude de CHARGE comme si c'était votre phase de charge."
  ],
  [
   "Raid",
   "Raid",
   "Des unités amies sont entièrement en territoire ennemi et hors de mêlée.",
   "Course au Butin",
   "Race for the Loot",
   "N'importe quelle phase de charge",
   "charge",
   [
    "charge",
    "charge-opp"
   ],
   "Choisissez une relique. Pour le restant du tour, les unités amies peuvent finir leurs mouvements de charge à ½\" de cette relique comme s'il s'agissait d'une unité ennemie."
  ],
  [
   "Protéger le Butin",
   "Protect the Loot",
   "Une unité amie qui était à 3\" d'une relique a détruit une unité ennemie à ce tour.",
   "Effort Désespéré",
   "Last-Ditch Effort",
   "Votre phase des héros",
   "hero",
   [
    "hero"
   ],
   "Choisissez une unité amie détruite qui n'a pas encore été remplacée. Placez une unité de remplacement dont la Santé cumulée est de 4 maximum, ou une unité de remplacement d'une seule figurine avec X dégâts alloués (X = sa Santé moins 4). Elle doit être placée à plus de 6\" des unités ennemies."
  ],
  [
   "Tenir le Centre",
   "Hold the Centre",
   "Il y a au moins 2 unités amies à 3\" du centre du champ de bataille.",
   "Se Faufiler",
   "Slip Away",
   "N'importe quelle phase de mêlée",
   "fight",
   [
    "fight",
    "fight-opp"
   ],
   "Choisissez une unité amie en mêlée. Elle peut se déplacer de 5\" maximum. Elle peut traverser les portées de mêlée ennemies mais ne peut pas finir ce mouvement en mêlée."
  ],
  [
   "Raser",
   "Raze",
   "Des unités amies sont à 3\" du grand bord du champ de bataille situé en territoire ennemi.",
   "Frénésie Cupide",
   "Covetous Frenzy",
   "N'importe quelle phase de mêlée",
   "fight",
   [
    "fight",
    "fight-opp"
   ],
   "Choisissez une relique. Pour le restant du tour, ajoutez 1 aux jets de touche des attaques des unités amies tant qu'elles sont à 3\" de cette relique."
  ],
  [
   "Estrade de la Comète",
   "Dais of the Comet",
   "Vous contrôlez l'objectif de la Comète à Deux Queues.",
   "Mourir en Combattant",
   "Go Down Fighting",
   "N'importe quelle phase des héros",
   "hero",
   [
    "hero",
    "hero-opp"
   ],
   "Choisissez une unité amie. Pour le restant du tour, chaque jet de sauvegarde non modifié de 5+ contre une attaque de mêlée qui la cible inflige 1 dégât mortel à l'unité attaquante, une fois l'aptitude de CORPS À CORPS résolue."
  ],
  [
   "Estrade du Marteau",
   "Dais of the Hammer",
   "Vous contrôlez l'objectif de Ghal Maraz (le marteau).",
   "Or des Fous",
   "Fool's Gold",
   "Fin de n'importe quel tour",
   "end",
   [
    "end",
    "end-opp"
   ],
   "Choisissez une relique. Retirez-la, puis replacez-la à plus de 3\" des unités ennemies et à plus de 6\" des autres reliques."
  ],
  [
   "Ratisser la Zone",
   "Comb the Area",
   "Toutes les unités amies sont à 3\" d'une relique (pas forcément la même).",
   "Redéploiement",
   "Redeploy",
   "Phase de mouvement adverse",
   "move",
   [
    "move-opp"
   ],
   "Choisissez une unité amie qui n'est pas en mêlée. Elle peut se déplacer de D6\" maximum, sans traverser ni finir à portée de mêlée d'une unité ennemie."
  ],
  [
   "Gains Matériels",
   "Material Gains",
   "Vous contrôlez plus de reliques que votre adversaire.",
   "Réduire en Poussière",
   "Grind Them to Dust",
   "N'importe quelle phase de mêlée",
   "fight",
   [
    "fight",
    "fight-opp"
   ],
   "Choisissez une unité amie. Elle peut utiliser 2 aptitudes de CORPS À CORPS à cette phase. Après la première, elle subit D3 dégâts mortels et a FRAPPE EN DERNIER pour le restant du tour."
  ]
 ],
 "twists": {
  "bastion": [
   [
    "Postes d'Étape",
    "Staging Posts",
    "En commençant par le joueur actif, chaque joueur choisit un objectif. À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire pour chacun de ces objectifs qu'il contrôle.",
    "Il peut jeter un D6. Sur 3+, il peut obliger son adversaire à choisir un objectif différent."
   ],
   [
    "Trésor Maudit",
    "Cursed Treasure",
    "En commençant par le joueur actif, chaque joueur choisit une unité ennemie à 3\" d'une relique. Jusqu'à la fin du round de bataille, le score de contrôle maximal de cette unité est de 1.",
    "Il place les Chausse-trappes d'Ulgu. Sans outsider, tirez au dé : le gagnant les place."
   ],
   [
    "Escalades Équivalentes",
    "Equivalent Escalades",
    "À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire s'il contrôle le grand élément de terrain situé en territoire ennemi.",
    "Il place le Tonneau de Braisepierre. Sans outsider, tirez au dé : le gagnant le place."
   ],
   [
    "Une Sortie Opportune",
    "A Timely Exit",
    "À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire pour chaque bord du champ de bataille non obstrué sans unité ennemie à 3\" de celui-ci.",
    "Il peut choisir un bord du champ de bataille, qui est obstrué."
   ],
   [
    "On Te Couvre",
    "Got Your Back",
    "Jusqu'à la fin du round de bataille, ajoutez 1 aux jets de sauvegarde pour les unités amies tant qu'elles sont à 3\" d'autres unités amies (pour les 2 joueurs).",
    "Il place la Caisse d'Aqua Ghyranis. Sans outsider, tirez au dé : le gagnant la place."
   ],
   [
    "C'est à Nous !",
    "We'll Have That!",
    "À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire s'il contrôle la relique qui a été placée en territoire ennemi au début de la bataille.",
    "Il choisit une unité amie comme force d'assaut : ajoutez 2 à ses jets de charge jusqu'à la fin du round de bataille."
   ]
  ],
  "croisement": [
   [
    "Assassinat",
    "Assassinate",
    "En commençant par le joueur actif, chaque joueur choisit une unité ennemie comme cible désignée. À la fin du round de bataille, chaque joueur marque 1 point de victoire supplémentaire si la cible désignée ennemie a été détruite à ce round.",
    "Il place la Plaque d'Égout Discrète. Sans outsider, tirez au dé : le gagnant la place."
   ],
   [
    "Évaluation Agressive",
    "Aggressive Valuation",
    "En commençant par le joueur actif, chaque joueur choisit une unité amie qui garde le butin. À la fin du round de bataille, chaque joueur marque 1 point de victoire supplémentaire si l'unité ennemie qui garde le butin a été détruite à ce round.",
    "Il peut jeter un D6. Sur 3+, il peut obliger son adversaire à choisir une unité différente."
   ],
   [
    "Course aux Réserves",
    "Stockpiling Drive",
    "À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire pour chaque relique qu'il contrôle et qu'il ne contrôlait pas au début de son tour.",
    "Il place la Barricade de Fortune. Sans outsider, tirez au dé : le gagnant la place."
   ],
   [
    "Point Crucial",
    "Crux Point",
    "À la fin de chacun de ses tours, chaque joueur marque 1 point de victoire supplémentaire s'il contrôle le carrefour.",
    "Il place les Chausse-trappes d'Ulgu. Sans outsider, tirez au dé : le gagnant les place."
   ],
   [
    "Montée d'Adrénaline",
    "Adrenaline Rush",
    "En commençant par l'outsider, chaque joueur peut choisir jusqu'à 2 unités amies qui ne sont pas en mêlée et les déplacer chacune de 3\" maximum. Sans outsider, le joueur actif commence.",
    "Ses unités peuvent finir ces mouvements en mêlée."
   ],
   [
    "Manœuvres Rapides",
    "Rapid Manoeuvres",
    "Une unité entièrement sur les routes peut utiliser des aptitudes de CHARGE même si elle a utilisé une aptitude de COURSE à ce tour.",
    "Il choisit une unité amie : ses armes de mêlée ont Anti-charge (+1 Perf.) jusqu'à la fin du round de bataille."
   ]
  ]
 }
});
