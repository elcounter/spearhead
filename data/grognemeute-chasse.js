// Spearhead : Vils du Fielobscur – Grognemeute de Chasse
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "grognemeute-chasse",
  name: "Grognemeute de Chasse",
  faction: "Vils du Fielobscur",
  cover: "img/grognemeute-chasse/armee.webp",
  photos: { armee: "img/grognemeute-chasse/armee.webp", "cavalerie-grognemeute": "img/grognemeute-chasse/cavalerie-grognemeute.webp", grogneboss: "img/grognemeute-chasse/grogneboss.webp", "suite-vils-leus": "img/grognemeute-chasse/suite-vils-leus.webp", "rouleur-fauchesoleil": "img/grognemeute-chasse/rouleur-fauchesoleil.webp" },
  units: [
    { id: "grogneboss", en: "Grogneboss", stats: { M: '12"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Kitaill' de Boss", range: "Mêlée", a: 5, h: 4, w: 4, r: 1, d: "2", crit: "none" },
        { n: "Mâchoires Écumantes de Grognecroc", range: "Mêlée", a: 2, h: 4, w: 3, r: "-", d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "hero", t: "Une Fois par Tour (Armée), Votre Phase des Héros", n: "Hurlement Hargneux", x: ["Annonce : Choisissez comme cibles cette unité et une autre unité amie à portée de mêlée d'elle.", "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux caractéristiques d'Attaques et de Perforation des armes de mêlée de Compagnon des cibles pour le restant du tour."] }],
      kw: "HÉROS, CAVALERIE" },
    { id: "suite-vils-leus", en: "Suite de Vils-leus", stats: { M: '12"', S: 2, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arc Grot", range: '15"', a: 2, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["1 figurine"] },
        { n: "Kitrou' Troueur", range: "Mêlée", a: 2, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["1 figurine"] },
        { n: "Mâchoires Écumantes de Grognecroc", range: "Mêlée", a: 2, h: 4, w: 3, r: "-", d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "defense", t: "Passif", n: "M'en Charj', Boss", x: ["Effet : Tant qu'un Grogneboss ami est à portée de mêlée de cette unité, l'unité et ce Grogneboss ont une Protection (5+)."] }],
      kw: "CAVALERIE" },
    { id: "cavalerie-grognemeute", en: "Cavalerie Grognemeute", stats: { M: '12"', S: 3, C: 1, Sv: "4+" },
      weapons: [
        { n: "Embrocheuzes Pointues", range: "Mêlée", a: 4, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] },
        { n: "Mâchoires de Grognecroc Géant", range: "Mêlée", a: 3, h: 4, w: 3, r: "-", d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "passive", t: "Passif", n: "Débris Krèvbrûlé", x: ["Effet : Cette unité a Frappe en Premier si elle a chargé au même tour."] }],
      kw: "CAVALERIE" },
    { id: "rouleur-fauchesoleil", en: "Rouleur Fauchesoleil", stats: { M: '12"', S: 6, C: 2, Sv: "4+" },
      weapons: [
        { n: "Arc Grot", range: '15"', a: 2, h: 4, w: 5, r: "-", d: "1", crit: "none" },
        { n: "Trancheuses de Rouleur et Kitrou' Troueur", range: "Mêlée", a: 4, h: 4, w: 4, r: "-", d: "1", crit: "none" },
        { n: "Mâchoires Écumantes de Grognecroc", range: "Mêlée", a: 4, h: 4, w: 3, r: "-", d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "move", t: "Votre Phase de Mouvement", n: "Course Destructrice", x: ["Effet : Cette unité peut se déplacer d'une distance inférieure ou égale à sa caractéristique de Mouvement. Elle peut traverser d'autres figurines et les portées de mêlée des unités ennemies, mais elle ne peut pas terminer ce mouvement en mêlée. Vous pouvez ensuite choisir comme cible 1 unité d'INFANTERIE ennemie que cette unité a traversée au cours de ce mouvement. Infligez D3 dégâts mortels à la cible.", "Note du Concepteur : Cette unité peut utiliser cette aptitude même si elle est en mêlée."] }],
      kw: "MACHINE DE GUERRE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "passive", t: "Passif", n: "Vif comme Krèvzyeux", x: ["Effet : Les unités amies peuvent utiliser les aptitudes de Charge même si elles ont utilisé une aptitude de Repli au même tour. De plus, aucun dégât mortel n'est infligé aux unités amies par les aptitudes de Repli."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "deploy", t: "Une Fois par Bataille, Phase de Déploiement", n: "Force d'Enserklement", x: ["Effet : Choisissez jusqu'à 2 unités amies. Retirez-les du champ de bataille et replacez-les n'importe où sur le champ de bataille à plus de 6\" des unités ennemies."] },
      { c: "passive", t: "Passif", n: "Krèveboom", x: ["Effet : Chaque fois qu'une MACHINE DE GUERRE amie est détruite, avant de la retirer du jeu, choisissez une unité ennemie à 3\" d'elle et jetez un D3. Sur 2+, infligez à l'unité choisie autant de dégâts mortels que le résultat du jet."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Ruzé Kom' un Grognecroc", x: ["Effet : Pour le restant du tour, ajoutez 1 à la caractéristique de Perforation des armes de mêlée des unités amies tant qu'elles sont entièrement à 12\" du porteur."] },
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Éclat de Krèvzyeux", x: ["Annonce : Choisissez comme cible une unité ennemie en mêlée avec votre général.", "Effet : Soustrayez 1 aux jets de touche pour les attaques de la cible pour le restant du tour."] },
      { c: "defense", t: "Une Fois par Bataille, Phase de Mouvement Adverse", n: "Fragment de Fauchesoleil", x: ["Effet : Pour le restant du tour, les unités amies ne peuvent pas être ciblées par les attaques de tir tant qu'elles sont entièrement à 6\" de cette unité, à moins que l'unité attaquante soit en mêlée avec l'unité cible."] },
      { c: "end", t: "Fin de N'importe Quel Tour", n: "Perfide Surineur", x: ["Annonce : Choisissez comme cible un HÉROS ennemi en mêlée avec cette unité.", "Effet : Jetez un D3. Sur 2+, infligez à la cible autant de dégâts mortels que le résultat du jet."] }
    ]}
  ]},
  when: { "Vif comme Krèvzyeux": ["move", "charge"], "Force d'Enserklement": ["deploy"], "Krèveboom": ["shoot", "shoot-opp", "fight", "fight-opp"], "Ruzé Kom' un Grognecroc": ["fight", "fight-opp"], "Éclat de Krèvzyeux": ["fight", "fight-opp"], "Fragment de Fauchesoleil": ["move-opp"], "Perfide Surineur": ["end", "end-opp"], "Hurlement Hargneux": ["hero"], "M'en Charj', Boss": ["shoot-opp", "fight-opp"], "Débris Krèvbrûlé": ["fight", "fight-opp"], "Course Destructrice": ["move"] }
});
