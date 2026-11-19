// Spearhead : Fils de Behemat – Piétine de Fracasse-murs
(function(){
  const W = () => [
    { n: "Lancer de Pierres", range: '12"', a: 1, h: 5, w: 2, r: 2, d: "D3", crit: "none" },
    { n: "Massue Colossale", range: "Mêlée", a: 4, h: 4, w: 2, r: 1, d: "2", crit: "none" },
    { n: "Coup d'Boule", range: "Mêlée", a: 1, h: 4, w: 2, r: 2, d: "4", crit: "none" },
    { n: "Grand Coup de Pied", range: "Mêlée", a: 1, h: 4, w: 2, r: 2, d: "D3", crit: "none" }
  ];
  const AB = () => [
    { c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Besace Bien Remplie", x: ["Annonce : Choisissez une unité ennemie en mêlée avec cette unité comme cible, puis jetez un dé.", "Effet : Si le résultat du jet est au moins le double de la caractéristique de Santé de l'unité cible, 1 figurine de l'unité cible est tuée."] },
    { c: "passive", t: "Passif", n: "Chute", x: ["Effet : Si cette figurine est tuée, avant de la retirer du champ de bataille, les joueurs doivent tirer au dé. Le gagnant choisit un point sur le champ de bataille jusqu'à 3\" de cette figurine. Infligez D3 dégâts mortels à chaque unité ennemie à 2\" du point choisi. Cette figurine est alors retirée du champ de bataille."] }
  ];
  (window.SPEARHEADS = window.SPEARHEADS || []).push({
    id: "pietine-fracasse-murs",
    name: "Piétine de Fracasse-murs",
    faction: "Fils de Béhémat",
    cover: "img/pietine-fracasse-murs/armee.webp",
    photos: { armee: "img/pietine-fracasse-murs/armee.webp", gargant: "img/pietine-fracasse-murs/gargant.webp", "gargant-broyeur": "img/pietine-fracasse-murs/gargant-broyeur.webp" },
    units: [
      { id: "gargant-broyeur", en: "Gargant Broyeur d'Hommes (général, Foule-taureau)", stats: { M: '8"', S: 12, C: 10, Sv: "5+" }, weapons: W(), abilities: AB(), kw: "HÉROS, MONSTRE" },
      { id: "gargant", en: "Gargant Broyeur d'Hommes (×2)", stats: { M: '8"', S: 12, C: 10, Sv: "5+" }, weapons: W(), abilities: [], kw: "MONSTRE, RENFORTS" }
    ],
    army: { id: "armee", en: "Règles de l'armée", sections: [
      { key: "trait", title: "Traits de bataille", who: "Trait de bataille", abilities: [
        { c: "passive", t: "Passif", n: "Foule-taureau", x: ["Votre général a le mot-clé HÉROS (en plus du mot-clé MONSTRE) mais n'a pas le mot-clé RENFORTS ni l'icône associée."] },
        { c: "defense", t: "N'importe Quelle Phase de Mêlée", n: "Beuglement Fracassant", x: ["Annonce : Choisissez une unité amie pour qu'elle utilise cette aptitude, choisissez une unité ennemie en mêlée avec elle comme cible, puis jetez un dé.", "Effet : Sur 2+, soustrayez 1 aux jets de touche pour les attaques faites par l'unité cible à cette phase."] },
        { c: "shoot", t: "Votre Phase des Héros", n: "Attrapez ces Pierres et Jetez-les !", x: ["Annonce : Choisissez votre général pour qu'il utilise cette aptitude, puis choisissez une autre unité amie entièrement à 12\" de lui.", "Effet : Ajoutez 1 à la caractéristique d'Attaques du Lancer de Pierres de l'unité à ce tour."] }
      ]},
      { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
        { c: "defense", t: "Passif", n: "Mâche-ennemis", x: ["Effet : Chaque fois qu'une figurine ennemie est tuée par l'aptitude « Besace Bien Remplie » d'une unité amie, Soignez (D3) cette unité amie."] },
        { c: "defense", t: "Une Fois par Phase (Armée), N'importe Quelle Phase de Charge", n: "Charge Tremble-terre", x: ["Annonce : Choisissez une unité amie qui a chargé à cette phase pour qu'elle utilise cette aptitude, puis jetez un dé pour chaque unité ennemie en mêlée avec elle.", "Effet : Sur 3+, l'unité ennemie concernée par le jet a Frappe en Dernier à ce tour."] }
      ]},
      { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
        { c: "defense", t: "Passif", n: "Monstrueusement Robuste", x: ["Effet : Votre général a une caractéristique de Santé de 15 au lieu de 12."] },
        { c: "fight", t: "Passif", n: "Gros Sac en Rab", x: ["Effet : Quand votre général utilise son aptitude « Besace Bien Remplie », vous pouvez choisir 2 unités ennemies au lieu de 1 (faites un jet séparé pour chacune)."] },
        { c: "charge", t: "Passif", n: "Grands Dadais", x: ["Effet : Quand vous faites un jet de charge pour votre général, jetez 3D6 au lieu de 2D6."] },
        { c: "fight", t: "Passif", n: "Férocement Territorial", x: ["Effet : Ajoutez 1 aux jets de touche pour les attaques faites par votre général qui ciblent une unité ennemie qui conteste un objectif que vous ne contrôlez pas."] }
      ]}
    ]},
    when: { "Foule-taureau": [], "Beuglement Fracassant": ["fight", "fight-opp"], "Attrapez ces Pierres et Jetez-les !": ["hero"], "Mâche-ennemis": ["fight", "fight-opp"], "Charge Tremble-terre": ["charge", "charge-opp"], "Monstrueusement Robuste": [], "Gros Sac en Rab": ["fight", "fight-opp"], "Grands Dadais": ["charge"], "Férocement Territorial": ["shoot", "fight", "fight-opp"], "Besace Bien Remplie": ["fight", "fight-opp"], "Chute": ["shoot", "shoot-opp", "fight", "fight-opp"] }
  });
})();
