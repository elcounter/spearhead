// Règles : packs de bataille Le Feu et le Jade, Le Sable et l'Os, Fer de Lance en Double
(window.RULEPACKS = window.RULEPACKS || []).push({
 "id": "feu-et-jade",
 "name": "Le Feu et le Jade",
 "sub": "Pack de bataille",
 "cover": "img/feu-et-jade/bataille.jpg",
 "imgs": {
  "decors": "img/feu-et-jade/decors.jpg",
  "objectifs": "img/feu-et-jade/objectifs.jpg",
  "art": "img/feu-et-jade/art.jpg",
  "bataille": "img/feu-et-jade/bataille.jpg"
 },
 "groups": [
  {
   "id": "avant",
   "en": "Avant la bataille",
   "blocks": [
    {
     "k": "p",
     "x": "Champ de bataille de royaume de 30\" x 22\" à double face : Aqshy, le Royaume du Feu, et Ghyran, le Royaume de la Vie."
    },
    {
     "k": "h",
     "x": "Séquence de pré-bataille"
    },
    {
     "k": "ol",
     "x": [
      "Tirez au dé. Le gagnant choisit qui est l'attaquant et qui est le défenseur.",
      "L'attaquant choisit son aptitude de régiment et son optimisation. Puis le défenseur fait de même.",
      "Le défenseur choisit sur quelle face du champ de bataille de royaume les joueurs combattent : Aqshy ou Ghyran.",
      "Le défenseur choisit 1 des cartes de déploiement et décide quel territoire appartient à quel joueur.",
      "Le défenseur place ses éléments de terrain, puis l'attaquant fait de même (voir Décors)."
     ]
    },
    {
     "k": "h",
     "x": "Préparer la pile de Fer de Lance"
    },
    {
     "k": "p",
     "x": "Un joueur prend la pile de péripéties de la face jouée (Aqshy ou Ghyran), la mélange et la place face cachée à côté du champ de bataille (l'autre pile n'est pas utilisée). Chaque joueur prend 1 pile de tactiques de bataille, la mélange et la place face cachée à portée de main."
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
   ],
   "img": "bataille"
  },
  {
   "id": "rounds",
   "en": "Rounds et victoire",
   "blocks": [
    {
     "k": "h",
     "x": "Début de chaque round de bataille"
    },
    {
     "k": "ol",
     "x": [
      "Premier round : l'attaquant choisit qui prend le premier tour. Rounds suivants : les joueurs font un jet de priorité (Règles de Base, 12.0).",
      "Déterminez l'outsider (Règles de Base, 12.0).",
      "Piochez la carte de péripétie et appliquez-la aussitôt.",
      "Les joueurs piochent des cartes de tactique de bataille.",
      "Utilisez les aptitudes ayant le timing « Début du round de bataille »."
     ]
    },
    {
     "k": "h",
     "x": "Cartes de tactique de bataille"
    },
    {
     "k": "ul",
     "x": [
      "Début du premier round : chaque joueur pioche une main de 3 cartes de tactique de bataille.",
      "Début des rounds suivants : chaque joueur peut d'abord défausser face visible n'importe quel nombre de cartes de sa main, puis pioche jusqu'à avoir à nouveau 3 cartes en main.",
      "Chaque carte a 2 parties : une tactique de bataille et un ordre. Vous pouvez soit exécuter la tactique à la fin de votre tour pour marquer des points de victoire, soit utiliser l'ordre pour un effet immédiat, mais pas les deux.",
      "Une fois l'ordre résolu, la carte est défaussée. Vous pouvez donner plusieurs ordres à la même unité à la même phase."
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
     "k": "h",
     "x": "Fin de la bataille : victoire glorieuse"
    },
    {
     "k": "p",
     "x": "Après 4 rounds, le joueur qui a marqué le plus de points de victoire est le vainqueur. En cas d'égalité, la bataille est une égalité."
    }
   ],
   "img": "art"
  },
  {
   "id": "decors",
   "en": "Décors",
   "blocks": [
    {
     "k": "p",
     "x": "Chaque bataille se joue autour de 2 grands éléments de terrain et 2 petits éléments de terrain."
    },
    {
     "k": "ul",
     "x": [
      "Avant le déploiement, chaque joueur place 1 grand et 1 petit élément de terrain entièrement dans son territoire (le défenseur en premier).",
      "Chaque élément de terrain doit être placé entièrement en territoire ami, à plus de 6\" des autres éléments de terrain et à plus de 3\" des deux grands bords du champ de bataille et du territoire ennemi. Les éléments de terrain ne peuvent pas être placés sur les objectifs, même partiellement."
     ]
    },
    {
     "k": "h",
     "x": "Aptitudes passives"
    },
    {
     "k": "ul",
     "x": [
      "Grand élément de terrain (Domicile en Ruine) : Couvert, Occultant, Instable.",
      "Petit élément de terrain (Autel Ravagé) : Couvert, Instable."
     ]
    },
    {
     "k": "note",
     "x": "Une unité est derrière un élément de terrain pour une attaque s'il est impossible de tracer une ligne droite entre le point le plus proche du socle de la figurine attaquante et le point le plus proche du socle d'une figurine de l'unité ciblée sans passer par-dessus cet élément de terrain."
    },
    {
     "k": "ab",
     "a": {
      "c": "defense",
      "t": "Passif · élément de terrain",
      "n": "Couvert",
      "x": [
       "Soustrayez 1 aux jets de touche pour les attaques qui ciblent une unité qui est derrière ou entièrement sur cet élément de terrain, sauf si elle a chargé au même tour ou si elle a le mot-clé VOL."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "c": "shoot",
      "t": "Passif · grand élément de terrain",
      "n": "Occultant",
      "x": [
       "Une unité ne peut pas être ciblée par des attaques de tir si elle est derrière ou entièrement sur cet élément de terrain, sauf si elle a le mot-clé VOL."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "c": "move",
      "t": "Passif · élément de terrain",
      "n": "Instable",
      "x": [
       "Les figurines peuvent se déplacer sur cet élément de terrain mais ne peuvent pas être placées ni finir tout type de mouvement sur des parties de cet élément plus hautes que 1\"."
      ]
     }
    }
   ],
   "img": "decors"
  },
  {
   "id": "objectifs",
   "en": "Objectifs et renforts",
   "blocks": [
    {
     "k": "p",
     "x": "Les objectifs sont imprimés sur le champ de bataille de royaume : l'objectif est tout le cercle, pas seulement le symbole au centre."
    },
    {
     "k": "p",
     "x": "Une figurine qui est sur un objectif, même partiellement, le conteste."
    },
    {
     "k": "p",
     "x": "Chaque objectif est nommé d'après un dieu-animal mythique : Dracothion, Ignax, Behemat, Vulcatrix et Nagendra."
    },
    {
     "k": "h",
     "x": "Renforts"
    },
    {
     "k": "p",
     "x": "Certaines unités ont le mot-clé RENFORTS. Une fois détruites, elles peuvent revenir sur le champ de bataille sous forme d'unités de remplacement (Règles de Base, 24.2)."
    },
    {
     "k": "ab",
     "a": {
      "c": "move",
      "t": "Une fois par tour, votre phase de mouvement",
      "n": "Appeler des Renforts",
      "x": [
       "Annonce : choisissez une unité de RENFORTS amie qui a été détruite.",
       "Effet : placez une unité de remplacement identique sur le champ de bataille, entièrement en territoire ami, entièrement à 6\" du bord du champ de bataille et hors de mêlée.",
       "Chaque unité de RENFORTS peut être remplacée une seule fois. Les unités de remplacement ne peuvent pas être remplacées elles-mêmes.",
       "Mot-clé : BASE"
      ]
     }
    }
   ],
   "img": "objectifs"
  }
 ]
});
(window.RULEPACKS = window.RULEPACKS || []).push({
 "id": "sable-et-os",
 "name": "Le Sable et l'Os",
 "sub": "Pack de bataille",
 "cover": "img/sable-et-os/dolorum.jpg",
 "imgs": {
  "dolorum": "img/sable-et-os/dolorum.jpg",
  "ossie": "img/sable-et-os/ossie.jpg"
 },
 "groups": [
  {
   "id": "avant",
   "en": "Avant la bataille",
   "blocks": [
    {
     "k": "p",
     "x": "Champ de bataille de royaume de 30\" x 22\" à double face, en Shyish : Dolorum (face verte), domaine d'Olynder, et Ossie (face violette), empire de Katakros."
    },
    {
     "k": "h",
     "x": "Séquence de pré-bataille"
    },
    {
     "k": "ol",
     "x": [
      "Tirez au dé. Le gagnant choisit qui est l'attaquant et qui est le défenseur.",
      "L'attaquant choisit son aptitude de régiment et son optimisation. Puis le défenseur fait de même.",
      "Le défenseur choisit sur quelle face du champ de bataille de royaume les joueurs combattent : Dolorum (face verte) ou Ossie (face violette).",
      "Le défenseur choisit 1 des cartes de déploiement et décide quel territoire appartient à quel joueur. Puis, si vous combattez sur Ossie, placez une Crypte de Sang au milieu du champ de bataille.",
      "Le défenseur choisit le Groupe de Terrains A ou B et le place. Puis l'attaquant prend l'autre groupe et le place (voir Décors)."
     ]
    },
    {
     "k": "h",
     "x": "Préparer la pile de Fer de Lance"
    },
    {
     "k": "p",
     "x": "Un joueur prend la pile de péripéties de la face jouée (Dolorum ou Ossie), la mélange et la place face cachée à côté du champ de bataille (l'autre pile n'est pas utilisée). Chaque joueur prend 1 pile de tactiques de bataille, la mélange et la place face cachée à portée de main."
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
   ],
   "img": "dolorum"
  },
  {
   "id": "rounds",
   "en": "Rounds et victoire",
   "blocks": [
    {
     "k": "h",
     "x": "Début de chaque round de bataille"
    },
    {
     "k": "ol",
     "x": [
      "Premier round : l'attaquant choisit qui prend le premier tour. Rounds suivants : les joueurs font un jet de priorité (Règles de Base, 12.0).",
      "Déterminez l'outsider (Règles de Base, 12.0).",
      "Piochez la carte de péripétie et appliquez-la aussitôt.",
      "Les joueurs piochent des cartes de tactique de bataille.",
      "Utilisez les aptitudes ayant le timing « Début du round de bataille »."
     ]
    },
    {
     "k": "h",
     "x": "Cartes de tactique de bataille"
    },
    {
     "k": "ul",
     "x": [
      "Début du premier round : chaque joueur pioche une main de 3 cartes de tactique de bataille.",
      "Début des rounds suivants : chaque joueur peut d'abord défausser face visible n'importe quel nombre de cartes de sa main, puis pioche jusqu'à avoir à nouveau 3 cartes en main.",
      "Chaque carte a 2 parties : une tactique de bataille et un ordre. Vous pouvez soit exécuter la tactique à la fin de votre tour pour marquer des points de victoire, soit utiliser l'ordre pour un effet immédiat, mais pas les deux.",
      "Une fois l'ordre résolu, la carte est défaussée. Vous pouvez donner plusieurs ordres à la même unité à la même phase."
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
     "k": "h",
     "x": "Fin de la bataille : victoire glorieuse"
    },
    {
     "k": "p",
     "x": "Après 4 rounds, le joueur qui a marqué le plus de points de victoire est le vainqueur. En cas d'égalité, la bataille est une égalité."
    }
   ],
   "img": "ossie"
  },
  {
   "id": "decors",
   "en": "Décors",
   "blocks": [
    {
     "k": "p",
     "x": "Chaque bataille se joue autour de 2 grands éléments de terrain et 2 petits éléments de terrain. Un élément de terrain mystique peut aussi être présent."
    },
    {
     "k": "h",
     "x": "Groupes de terrains"
    },
    {
     "k": "ul",
     "x": [
      "Groupe de Terrains A : Grand Mur et Petite Clôture.",
      "Groupe de Terrains B : Petit Mur et Grande Clôture.",
      "Chaque élément de terrain doit être placé entièrement en territoire ami, à plus de 6\" des autres éléments de terrain et à plus de 3\" des deux grands bords du champ de bataille et du territoire ennemi. Les éléments de terrain ne peuvent pas être placés sur les objectifs, même partiellement."
     ]
    },
    {
     "k": "h",
     "x": "Aptitudes passives"
    },
    {
     "k": "ul",
     "x": [
      "Grand élément de terrain (Grand Mur, Grande Clôture) : Couvert, Occultant, Instable.",
      "Petit élément de terrain (Petit Mur, Petite Clôture) : Couvert, Instable.",
      "Grand terrain mystique (Crypte de Sang) : Impie, Instable, Couvert.",
      "Petit terrain mystique (Icône de Nulahmia) : Inspirant, Instable, Couvert."
     ]
    },
    {
     "k": "note",
     "x": "Une unité est derrière un élément de terrain pour une attaque s'il est impossible de tracer une ligne droite entre le point le plus proche du socle de la figurine attaquante et le point le plus proche du socle d'une figurine de l'unité ciblée sans passer par-dessus cet élément de terrain."
    },
    {
     "k": "ab",
     "a": {
      "c": "defense",
      "t": "Passif · élément de terrain",
      "n": "Couvert",
      "x": [
       "Soustrayez 1 aux jets de touche pour les attaques qui ciblent une unité qui est derrière ou entièrement sur cet élément de terrain, sauf si elle a chargé au même tour ou si elle a le mot-clé VOL."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "c": "shoot",
      "t": "Passif · grand élément de terrain",
      "n": "Occultant",
      "x": [
       "Une unité ne peut pas être ciblée par des attaques de tir si elle est derrière ou entièrement sur cet élément de terrain, sauf si elle a le mot-clé VOL."
      ]
     }
    },
    {
     "k": "ab",
     "a": {
      "c": "move",
      "t": "Passif · élément de terrain",
      "n": "Instable",
      "x": [
       "Les figurines peuvent se déplacer sur cet élément de terrain mais ne peuvent pas être placées ni finir tout type de mouvement sur des parties de cet élément plus hautes que 1\"."
      ]
     }
    },
    {
     "k": "h",
     "x": "Terrains mystiques"
    },
    {
     "k": "ul",
     "x": [
      "Crypte de Sang : placée au milieu du champ de bataille si vous combattez sur Ossie.",
      "Icône de Nulahmia : révélée et placée par une carte de péripétie de Dolorum."
     ]
    },
    {
     "k": "p",
     "x": "Impie : tant que cet élément de terrain est sur le champ de bataille, les joueurs peuvent utiliser l'aptitude Breuvage Impie."
    },
    {
     "k": "ab",
     "a": {
      "c": "fight",
      "t": "Une fois par tour (armée), n'importe quelle phase de mêlée",
      "n": "Breuvage Impie",
      "x": [
       "Annonce : choisissez comme cible une unité amie à 6\" d'une Crypte de Sang.",
       "Effet : jetez un dé. Ajoutez 1 au jet si vous êtes l'outsider. Sur 4+, ajoutez 1 aux jets de touche des attaques de mêlée de la cible pour le restant du tour. Sinon, infligez D3 dégâts mortels à la cible."
      ]
     }
    },
    {
     "k": "p",
     "x": "Inspirant : tant que cet élément de terrain est sur le champ de bataille, les joueurs peuvent utiliser l'aptitude Promesses Voilées."
    },
    {
     "k": "ab",
     "a": {
      "c": "end",
      "t": "Une fois par tour (armée), fin de n'importe quel tour",
      "n": "Promesses Voilées",
      "x": [
       "Annonce : choisissez comme cible une unité amie à 6\" d'une Icône de Nulahmia.",
       "Effet : jetez un dé. Ajoutez 1 au jet si vous êtes l'outsider. Sur 4+, ajoutez 3 au score de contrôle de la cible pour le restant du tour. Sinon, soustrayez 3 au score de contrôle de la cible pour le restant du tour."
      ]
     }
    }
   ],
   "img": "dolorum"
  },
  {
   "id": "objectifs",
   "en": "Objectifs et renforts",
   "blocks": [
    {
     "k": "p",
     "x": "Les objectifs sont imprimés sur le champ de bataille de royaume : l'objectif est tout le cercle, pas seulement le symbole au centre. Certains objectifs sont plus grands que d'autres."
    },
    {
     "k": "p",
     "x": "Une figurine qui est sur un objectif, même partiellement, le conteste."
    },
    {
     "k": "h",
     "x": "Renforts"
    },
    {
     "k": "p",
     "x": "Certaines unités ont le mot-clé RENFORTS. Une fois détruites, elles peuvent revenir sur le champ de bataille sous forme d'unités de remplacement (Règles de Base, 24.2)."
    },
    {
     "k": "ab",
     "a": {
      "c": "move",
      "t": "Une fois par tour, votre phase de mouvement",
      "n": "Appeler des Renforts",
      "x": [
       "Annonce : choisissez une unité de RENFORTS amie qui a été détruite.",
       "Effet : placez une unité de remplacement identique sur le champ de bataille, entièrement en territoire ami, entièrement à 6\" du bord du champ de bataille et hors de mêlée.",
       "Chaque unité de RENFORTS peut être remplacée une seule fois. Les unités de remplacement ne peuvent pas être remplacées elles-mêmes.",
       "Mot-clé : BASE"
      ]
     }
    }
   ],
   "img": "ossie"
  }
 ]
});
(window.RULEPACKS = window.RULEPACKS || []).push({
 "id": "double",
 "name": "Fer de Lance en Double",
 "sub": "2 contre 2",
 "cover": "img/double/bataille.jpg",
 "imgs": {
  "bataille": "img/double/bataille.jpg",
  "gauche": "img/double/bataille-gauche.jpg",
  "droite": "img/double/bataille-droite.jpg",
  "plateaux": "img/double/deux-plateaux.jpg"
 },
 "groups": [
  {
   "id": "avant",
   "en": "Avant la bataille",
   "blocks": [
    {
     "k": "p",
     "x": "Vous faites équipe avec un ami contre une autre équipe de 2 joueurs. Il faut 2 packs de jeu (Le Feu et le Jade ou Le Sable et l'Os) et une armée de Fer de Lance par joueur. Décidez ensemble du pack utilisé."
    },
    {
     "k": "note",
     "x": "Variante : à 2 joueurs, chacun peut aussi aligner 2 armées de Fer de Lance avec ces règles."
    },
    {
     "k": "h",
     "x": "Séquence de pré-bataille"
    },
    {
     "k": "ol",
     "x": [
      "Chaque joueur choisit l'armée de Fer de Lance qu'il commandera. Les joueurs d'une même équipe doivent choisir des Fers de Lance différents.",
      "Les joueurs de chaque équipe tirent au dé pour désigner son suzerain. Quand une équipe n'arrive pas à se décider, le suzerain a le dernier mot.",
      "Double tir au dé : les joueurs de chaque équipe jettent un dé et additionnent leurs jets. L'équipe qui a le total le plus élevé décide quelle équipe est l'attaquante et laquelle est la défenseuse.",
      "Chaque joueur de l'équipe attaquante choisit l'aptitude de régiment et l'optimisation de son Fer de Lance. Puis chaque joueur de l'équipe défenseuse fait de même.",
      "L'équipe défenseuse choisit où se déroule la bataille : Aqshy ou Ghyran (Le Feu et le Jade), Ossie ou Dolorum (Le Sable et l'Os). Elle place ensuite 2 champs de bataille de royaume de ce lieu côte à côte.",
      "L'équipe défenseuse choisit 1 des cartes de déploiement et répartit les territoires entre les équipes.",
      "Le Sable et l'Os : l'équipe défenseuse place le terrain mystique comme indiqué sur la carte de déploiement (le cas échéant).",
      "Le Feu et le Jade : l'équipe défenseuse place 2 grands et 2 petits éléments de terrain, puis l'équipe attaquante fait de même. Le Sable et l'Os : l'équipe défenseuse place le Groupe de Terrains A (Grand Mur et Petite Clôture) et le Groupe de Terrains B (Petit Mur et Grande Clôture), puis l'équipe attaquante fait de même."
     ]
    },
    {
     "k": "p",
     "x": "Chaque élément de terrain doit être placé entièrement dans votre territoire, à plus de 6\" des autres éléments de terrain et à plus de 3\" des deux grands bords du champ de bataille et du territoire ennemi. Les éléments de terrain ne peuvent pas être placés sur les objectifs, même partiellement."
    },
    {
     "k": "h",
     "x": "Déploiement"
    },
    {
     "k": "p",
     "x": "Un joueur de l'équipe attaquante place toutes les unités de son armée en premier, puis un joueur de l'équipe défenseuse, puis l'autre joueur de l'équipe attaquante, et enfin l'autre joueur de l'équipe défenseuse. Chaque unité doit être placée entièrement dans son territoire et à plus de 6\" du territoire ennemi."
    },
    {
     "k": "h",
     "x": "Durée de la bataille"
    },
    {
     "k": "p",
     "x": "4 rounds de bataille."
    }
   ],
   "img": "bataille"
  },
  {
   "id": "cartes",
   "en": "Cartes de déploiement",
   "blocks": [
    {
     "k": "p",
     "x": "Deux champs de bataille de royaume placés côte à côte. Le trait plein marque la jonction entre les deux."
    },
    {
     "k": "h",
     "x": "Le Feu et le Jade"
    },
    {
     "k": "maps",
     "x": [
      [
       "Option 1",
       "<svg viewBox=\"0 0 440 300\" role=\"img\"><style>.d{stroke:#fff;stroke-dasharray:6 6;opacity:.6}</style><rect width=\"440\" height=\"300\" fill=\"#e6e3dc\"/><rect width=\"440\" height=\"150\" fill=\"#b8603c\"/><rect y=\"150\" width=\"440\" height=\"150\" fill=\"#3f7a9a\"/><line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"300\" class=\"d\"/><line x1=\"330\" y1=\"0\" x2=\"330\" y2=\"300\" class=\"d\"/><line x1=\"0\" y1=\"150\" x2=\"440\" y2=\"150\" class=\"d\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"300\" stroke=\"#1b1b1b\" stroke-width=\"3\"/><g fill=\"#fff\" font-family=\"Oswald, Arial Narrow, sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" letter-spacing=\"1\"><text x=\"220\" y=\"85\">TERRITOIRE B</text><text x=\"220\" y=\"235\">TERRITOIRE A</text></g><rect width=\"440\" height=\"300\" fill=\"none\" stroke=\"#1b1b1b\" stroke-width=\"3\"/></svg>"
      ],
      [
       "Option 2",
       "<svg viewBox=\"0 0 440 300\" role=\"img\"><style>.d{stroke:#fff;stroke-dasharray:6 6;opacity:.6}</style><rect width=\"440\" height=\"300\" fill=\"#e6e3dc\"/><polygon points=\"0,0 0,300 220,300\" fill=\"#3f7a9a\"/><polygon points=\"220,0 440,0 440,300\" fill=\"#b8603c\"/><line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"300\" class=\"d\"/><line x1=\"330\" y1=\"0\" x2=\"330\" y2=\"300\" class=\"d\"/><line x1=\"0\" y1=\"150\" x2=\"440\" y2=\"150\" class=\"d\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"300\" stroke=\"#1b1b1b\" stroke-width=\"3\"/><g fill=\"#fff\" font-family=\"Oswald, Arial Narrow, sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" letter-spacing=\"1\"><text x=\"70\" y=\"215\" transform=\"rotate(54 70 215)\">TERRITOIRE A</text><text x=\"370\" y=\"95\" transform=\"rotate(54 370 95)\">TERRITOIRE B</text></g><rect width=\"440\" height=\"300\" fill=\"none\" stroke=\"#1b1b1b\" stroke-width=\"3\"/></svg>"
      ]
     ]
    },
    {
     "k": "h",
     "x": "Le Sable et l'Os"
    },
    {
     "k": "maps",
     "x": [
      [
       "Option 1",
       "<svg viewBox=\"0 0 440 300\" role=\"img\"><style>.d{stroke:#fff;stroke-dasharray:6 6;opacity:.6}</style><rect width=\"440\" height=\"300\" fill=\"#e6e3dc\"/><rect width=\"440\" height=\"150\" fill=\"#3f7a9a\"/><rect y=\"150\" width=\"440\" height=\"150\" fill=\"#b8603c\"/><line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"300\" class=\"d\"/><line x1=\"330\" y1=\"0\" x2=\"330\" y2=\"300\" class=\"d\"/><line x1=\"0\" y1=\"150\" x2=\"440\" y2=\"150\" class=\"d\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"300\" stroke=\"#1b1b1b\" stroke-width=\"3\"/><g fill=\"#fff\" font-family=\"Oswald, Arial Narrow, sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" letter-spacing=\"1\"><text x=\"220\" y=\"85\">TERRITOIRE A</text><text x=\"220\" y=\"235\">TERRITOIRE B</text></g><rect width=\"440\" height=\"300\" fill=\"none\" stroke=\"#1b1b1b\" stroke-width=\"3\"/></svg>"
      ],
      [
       "Option 2",
       "<svg viewBox=\"0 0 440 300\" role=\"img\"><style>.d{stroke:#fff;stroke-dasharray:6 6;opacity:.6}</style><rect width=\"440\" height=\"300\" fill=\"#e6e3dc\"/><polygon points=\"0,0 220,0 0,300\" fill=\"#3f7a9a\"/><polygon points=\"440,0 440,300 220,300\" fill=\"#b8603c\"/><line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"300\" class=\"d\"/><line x1=\"330\" y1=\"0\" x2=\"330\" y2=\"300\" class=\"d\"/><line x1=\"0\" y1=\"150\" x2=\"440\" y2=\"150\" class=\"d\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"300\" stroke=\"#1b1b1b\" stroke-width=\"3\"/><ellipse cx=\"220\" cy=\"150\" rx=\"16\" ry=\"10\" fill=\"#8c7a2e\" stroke=\"#1b1b1b\" stroke-width=\"2\"/><text x=\"220\" y=\"185\" text-anchor=\"middle\" font-family=\"Bitter, Georgia, serif\" font-size=\"17\" font-style=\"italic\" fill=\"#1b1b1b\">Crypte de Sang</text><g fill=\"#fff\" font-family=\"Oswald, Arial Narrow, sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" letter-spacing=\"1\"><text x=\"70\" y=\"95\" transform=\"rotate(-54 70 95)\">TERRITOIRE A</text><text x=\"370\" y=\"215\" transform=\"rotate(-54 370 215)\">TERRITOIRE B</text></g><rect width=\"440\" height=\"300\" fill=\"none\" stroke=\"#1b1b1b\" stroke-width=\"3\"/></svg>"
      ]
     ]
    }
   ],
   "img": "plateaux"
  },
  {
   "id": "regles",
   "en": "Règles spéciales",
   "blocks": [
    {
     "k": "ul",
     "x": [
      "Les unités de votre coéquipier sont des unités amies, mais les règles de votre armée de Fer de Lance qui affectent ou ciblent des unités amies n'affectent ou ne ciblent que les unités de votre propre armée.",
      "Les unités des armées de l'équipe adverse sont des unités ennemies.",
      "Tactiques qui demandent de contrôler un objectif nommé (ex. « Contrôlez l'Estrade de Dracothion ») : votre équipe doit contrôler les deux objectifs qui portent ce nom.",
      "Tactiques qui demandent de contrôler un élément de terrain (ex. « le grand élément de terrain en territoire ennemi ») : votre équipe doit contrôler les deux éléments de terrain correspondants.",
      "Quand une règle dit « les joueurs tirent au dé », faites un double tir au dé à la place.",
      "Corps à corps à tour de rôle : une équipe choisit 1 unité de 1 de ses Fers de Lance, puis l'autre équipe fait de même, etc."
     ]
    },
    {
     "k": "h",
     "x": "Préparer la pile de Fer de Lance"
    },
    {
     "k": "p",
     "x": "Un joueur prend la pile de péripéties du pack utilisé et de la face choisie, la mélange et la pose face cachée à côté du champ de bataille (l'autre pile n'est pas utilisée). Chaque équipe prend 1 pile de tactiques de bataille du pack utilisé, la mélange et la pose face cachée à portée de main."
    },
    {
     "k": "h",
     "x": "Début de chaque round de bataille"
    },
    {
     "k": "p",
     "x": "Premier round : l'équipe attaquante choisit qui prend le premier tour. Rounds suivants : jet de priorité (Règles de Base, 12.0)."
    },
    {
     "k": "ol",
     "x": [
      "Désignez l'outsider (Règles de Base, 12.0).",
      "Piochez une carte de péripétie et appliquez-la aussitôt.",
      "Les équipes piochent des cartes de tactique de bataille.",
      "Utilisez les aptitudes ayant le timing « Début du round de bataille »."
     ]
    },
    {
     "k": "h",
     "x": "Cartes de tactique de bataille"
    },
    {
     "k": "ul",
     "x": [
      "Début du premier round : chaque équipe pioche une main commune de 3 cartes.",
      "Rounds suivants : chaque équipe peut d'abord défausser face visible autant de cartes qu'elle le souhaite, puis pioche jusqu'à avoir à nouveau 3 cartes en main.",
      "Les deux joueurs d'une équipe peuvent contribuer à exécuter les tactiques de leur équipe."
     ]
    },
    {
     "k": "h",
     "x": "Prendre l'initiative"
    },
    {
     "k": "p",
     "x": "Si l'équipe qui a joué en second au round précédent gagne le jet de priorité et décide de jouer en premier, elle prend l'initiative. Elle ne pioche alors pas de carte de tactique de bataille à ce round, sauf si elle est l'outsider et que l'écart de points de victoire entre les deux équipes est de 5 ou plus."
    }
   ],
   "img": "gauche"
  },
  {
   "id": "victoire",
   "en": "Points de victoire",
   "blocks": [
    {
     "k": "h",
     "x": "Fin de chacun des tours de votre équipe"
    },
    {
     "k": "ul",
     "x": [
      "1 point de victoire si vous contrôlez au moins 2 objectifs.",
      "1 point de victoire si vous contrôlez au moins 4 objectifs.",
      "1 point de victoire si vous contrôlez plus d'objectifs que l'équipe adverse.",
      "1 point de victoire pour chaque tactique de bataille que votre équipe a exécutée à ce tour."
     ]
    },
    {
     "k": "note",
     "x": "Attention : en Double, les seuils sont de 2 et 4 objectifs, contre 1 et 2 en partie classique."
    },
    {
     "k": "h",
     "x": "Victoire glorieuse"
    },
    {
     "k": "p",
     "x": "L'équipe qui a le plus de points de victoire à la fin de la bataille est la gagnante. Si les deux équipes en ont autant, la bataille est une égalité."
    }
   ],
   "img": "droite"
  }
 ]
});
