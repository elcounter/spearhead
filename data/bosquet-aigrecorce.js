// Spearhead : Sylvaneths – Bosquet d'Aigrécorce
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "bosquet-aigrecorce",
  name: "Bosquet d'Aigrécorce",
  faction: "Sylvaneths",
  cover: "img/bosquet-aigrecorce/armee.webp",
  photos: { armee: "img/bosquet-aigrecorce/armee.webp", branchanteresse: "img/bosquet-aigrecorce/branchanteresse.webp", sylviarque: "img/bosquet-aigrecorce/sylviarque.webp", "chasseurs-kurnoth": "img/bosquet-aigrecorce/chasseurs-kurnoth.webp", "sylve-revenants": "img/bosquet-aigrecorce/sylve-revenants.webp" },
  units: [
    { id: "branchanteresse", en: "Branchanteresse", stats: { M: '6"', S: 5, C: 2, Sv: "5+" },
      weapons: [{ n: "Faux de Vert-bois et Âprelarve", range: "Mêlée", a: 3, h: 3, w: 4, r: 1, d: "D3", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Harmonie Luxuriante", x: ["Annonce : Choisissez une unité amie visible entièrement à 18\" de cette unité comme cible, puis faites un jet de lancement de 2D6.", "Effet : Sur 7+, vous pouvez ramener 1 figurine tuée dans l'unité cible. Si vous avez choisi une unité de Sylve-revenants, vous pouvez y ramener D3 figurines tuées au lieu de 1."] }],
      kw: "HÉROS, SORCIER, INFANTERIE" },
    { id: "sylviarque", en: "Sylviarque", stats: { M: '5"', S: 14, C: 5, Sv: "3+" },
      weapons: [
        { n: "Racines Étrangleuses", range: '10"', a: 3, h: 3, w: 2, r: 1, d: "2", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Attaques de Balayage", range: "Mêlée", a: 5, h: 4, w: 2, r: 1, d: "2", crit: "none" },
        { n: "Massives Griffes Empaleuses", range: "Mêlée", a: 2, h: 4, w: 2, r: 2, d: "3", crit: "none" }
      ],
      abilities: [
        { c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Trembleterre", x: ["Annonce : Choisissez une unité ennemie en mêlée avec cette unité comme cible, puis jetez un dé.", "Effet : Sur 4+, la cible a Frappe en Dernier à cette phase."] },
        { c: "passive", t: "Passif", n: "Stigmates de Guerre", x: ["Effet : Tant que cette unité a 10 dégâts ou plus, la caractéristique d'Attaques de ses Massives Griffes Empaleuses est de 1."] }
      ],
      kw: "MONSTRE" },
    { id: "chasseurs-kurnoth", en: "Chasseurs de Kurnoth", stats: { M: '5"', S: 5, C: 2, Sv: "4+" },
      weapons: [
        { n: "Grand Arc de Kurnoth", range: '18"', a: 2, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Âpres Griffes", range: "Mêlée", a: 3, h: 3, w: 3, r: "-", d: "1", crit: "none" }
      ],
      abilities: [{ c: "defense", t: "Passif", n: "Envoyés de la Reine Éternelle", x: ["Effet : Tant que cette unité conteste un objectif, les unités amies qui contestent cet objectif ont une Protection (6+)."] }],
      kw: "INFANTERIE" },
    { id: "sylve-revenants", en: "Sylve-revenants", stats: { M: '6"', S: 2, C: 1, Sv: "5+" },
      weapons: [{ n: "Lame Enchantée", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Mémoires Martiales", x: ["Effet : Choisissez 1 des effets suivants à appliquer à cette unité à cette phase :", "Mémoires de la Guerre : Ajoutez 1 aux jets de touche pour les attaques faites par cette unité.", "Mémoires de la Paix : Ajoutez 1 aux jets de sauvegarde pour cette unité."] }],
      kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Traits de bataille", who: "Trait de bataille", abilities: [
      { c: "end", t: "Une Fois par Tour, Fin de N'importe Quel Tour", n: "Lignes Telluriques", x: ["Effet : Soignez (1) chaque unité amie qui est à 3\" d'un ou plusieurs éléments de terrain."] },
      { c: "end", t: "Une Fois par Tour, Fin de N'importe Quel Tour", n: "Frapper et Disparaître", x: ["Annonce : Choisissez une unité amie qui a utilisé une aptitude de Corps à Corps à ce tour et est à 3\" d'un ou plusieurs éléments de terrain, puis jetez un dé.", "Effet : Sur 2+, retirez cette unité du champ de bataille et placez-la à nouveau de sorte que chacune de ses figurines soit à 3\" d'un ou plusieurs éléments de terrain et à plus de 6\" des unités ennemies."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "end", t: "Une Fois par Tour, Fin de N'importe Quel Tour", n: "Esprits Vengeurs des Terres", x: ["Annonce : Choisissez une unité ennemie qui conteste un objectif et jetez un dé.", "Effet : Sur 4+, infligez D3 dégâts mortels à cette unité ennemie."] },
      { c: "move", t: "Une Fois par Tour, Votre Phase de Mouvement", n: "Arpenteurs des Sentiers Cachés", x: ["Annonce : Choisissez une unité amie qui est à 3\" d'un ou plusieurs éléments de terrain et n'est pas en mêlée.", "Effet : Retirez cette unité du champ de bataille et placez-la à nouveau à plus de 6\" des unités ennemies. Cette unité ne peut pas utiliser d'aptitudes de Mouvement jusqu'à la fin de la phase."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "hero", t: "Votre Phase des Héros", n: "Repousse", x: ["Annonce : Choisissez une unité amie visible entièrement à 18\" de votre général comme cible, puis faites un jet de lancement de 2D6.", "Effet : Sur 5+, Soignez (D6) la cible."] },
      { c: "defense", t: "Passif", n: "Guerrier Noueux", x: ["Effet : Ignorez les modificateurs négatifs aux jets de sauvegarde pour votre général."] },
      { c: "hero", t: "Votre Phase des Héros", n: "Chant des Arbres", x: ["Annonce : Choisissez une unité amie visible entièrement à 12\" de votre général comme cible, puis faites un jet de lancement de 2D6.", "Effet : Sur 7+, ajoutez 1 à la caractéristique de Perforation des armes de mêlée de la cible jusqu'au début de votre prochain tour."] },
      { c: "defense", t: "Passif", n: "Graine de Renaissance", x: ["Effet : Si votre général est censé être détruit, avant de le retirer du jeu, jetez un dé. Sur 3+, votre général n'est pas détruit et les dégâts restant à lui infliger n'ont aucun effet. Puis, Soignez (1) votre général. Cette unité ne peut plus utiliser cette aptitude pour le restant de la bataille."] }
    ]}
  ]},
  when: { "Lignes Telluriques": ["end", "end-opp"], "Frapper et Disparaître": ["end", "end-opp"], "Esprits Vengeurs des Terres": ["end", "end-opp"], "Arpenteurs des Sentiers Cachés": ["move"], "Repousse": ["hero"], "Guerrier Noueux": ["shoot-opp", "fight-opp"], "Chant des Arbres": ["hero"], "Graine de Renaissance": ["shoot-opp", "fight-opp"], "Harmonie Luxuriante": ["hero"], "Trembleterre": ["fight", "fight-opp"], "Stigmates de Guerre": ["fight", "fight-opp"], "Envoyés de la Reine Éternelle": ["shoot-opp", "fight-opp"], "Mémoires Martiales": ["fight", "fight-opp"] }
});
