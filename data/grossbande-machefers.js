// Spearhead : Clans Guerriers Orruks – Gross'bande de Mâchefers
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "grossbande-machefers",
  name: "Gross'bande de Mâchefers",
  faction: "Clans Guerriers Orruks",
  cover: "img/grossbande-machefers/armee.webp",
  photos: { armee: "img/grossbande-machefers/armee.webp", brutes: "img/grossbande-machefers/brutes.webp", durboyz: "img/grossbande-machefers/durboyz.webp", megaboss: "img/grossbande-machefers/megaboss.webp", "rageux-brutes": "img/grossbande-machefers/rageux-brutes.webp" },
  units: [
    { id: "megaboss", en: "Mégaboss", stats: { M: '4"', S: 8, C: 2, Sv: "3+" },
      weapons: [{ n: "Kikoup' de Boss", range: "Mêlée", a: 8, h: 4, w: 2, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Au Kontakt !", x: ["Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de cette unité.", "Effet : Jetez un dé. Sur 2+, ajoutez 1 à la caractéristique d'Attaques des armes de mêlée de la cible jusqu'au début de votre prochain tour."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "rageux-brutes", en: "Rageux Brutes", stats: { M: '4"', S: 3, C: 1, Sv: "5+" },
      weapons: [{ n: "Armes de Rageux", range: "Mêlée", a: 3, h: 4, w: 2, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Rage Débridée", x: ["Effet : Cette unité a Frappe en Premier si elle a chargé au même tour."] }],
      kw: "INFANTERIE, BRUTE, RENFORTS" },
    { id: "durboyz", en: "Durboyz", stats: { M: '4"', S: 2, C: 1, Sv: "3+" },
      weapons: [{ n: "Kikoup' ou Kitrou'", range: "Mêlée", a: 2, h: 4, w: 3, r: 1, d: "1", crit: "none", extra: ["Anti-charge (+1 Perf.)"] }],
      abilities: [{ c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Koups d'Boukliers", x: ["Annonce : Choisissez comme cible une unité ennemie à 1\" de cette unité.", "Effet : Faites un jet de koup d'bouklier d'un D6 pour chaque figurine de cette unité qui est à 3\" de la cible. Pour chaque jet de 6+, infligez 1 dégât mortel à la cible."] }],
      kw: "INFANTERIE" },
    { id: "brutes", en: "Brutes", stats: { M: '4"', S: 3, C: 1, Sv: "3+" },
      weapons: [{ n: "Armes de Brute", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Tu Cherches la Bagar' ?", x: ["Effet : Les unités ennemies qui ont une caractéristique de Santé de 1 ou 2 ne peuvent pas contester d'objectifs tant qu'elles sont en mêlée avec cette unité."] }],
      kw: "INFANTERIE, BRUTE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Traits de bataille", who: "Trait de bataille", abilities: [
      { c: "move", t: "Votre Phase de Mouvement", n: "On y va !", x: ["Votre unité de Brutes n'est pas placée pendant la phase de déploiement. À la place, à partir du troisième round de bataille, elle peut utiliser cette aptitude.", "Effet : Placez cette unité n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies."] },
      { c: "hero", t: "Une Fois par Tour (Armée), N'importe Quelle Phase des Héros", n: "Puissants Destructeurs", x: ["Annonce : Choisissez comme cible une unité amie qui n'a pas été placée à ce tour.", "Effet : La cible peut se déplacer de jusqu'à 3\". Elle peut entrer en mêlée. Si elle était en mêlée au début du mouvement, elle doit terminer ce mouvement en mêlée."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "charge", t: "Passif", n: "Catastrophe Naturelle", x: ["Effet : Si vous faites un jet de charge non modifié de 8+ pour une unité amie, ajoutez 1 à la caractéristique d'Attaques de ses armes de mêlée pour le restant du tour."] },
      { c: "hero", t: "Une Fois par Bataille, Réaction : vous avez annoncé l'aptitude « Puissants Destructeurs »", n: "Bagarre en Bonne et Due Forme", x: ["Effet : Toutes les unités amies sur le champ de bataille qui n'ont pas été placées à ce tour sont la cible de cette aptitude à la place."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "passive", t: "Passif", n: "Pierre à Aiguiser d'Ambrivoire", x: ["Effet : La caractéristique de Perforation des armes de mêlée de votre général est 2."] },
      { c: "passive", t: "Passif", n: "Crânes-Trophées", x: ["Effet : La caractéristique de Contrôle de votre général est 5."] },
      { c: "defense", t: "Passif", n: "Armure de Gork", x: ["Effet : Votre général a une Protection (6+)."] },
      { c: "charge", t: "Passif", n: "Méga Bossesque", x: ["Effet : Si cette unité a chargé à ce tour, pour le restant du tour, ajoutez 1 aux jets de charge pour les unités amies tant qu'elles sont entièrement à 12\" d'elle."] }
    ]}
  ]},
  when: { "On y va !": ["move"], "Puissants Destructeurs": ["hero", "hero-opp"], "Catastrophe Naturelle": ["charge"], "Bagarre en Bonne et Due Forme": ["hero", "hero-opp"], "Pierre à Aiguiser d'Ambrivoire": ["fight", "fight-opp"], "Crânes-Trophées": ["end"], "Armure de Gork": ["shoot-opp", "fight-opp"], "Méga Bossesque": ["charge"], "Au Kontakt !": ["hero"], "Rage Débridée": ["fight", "fight-opp"], "Koups d'Boukliers": ["fight", "fight-opp"], "Tu Cherches la Bagar' ?": ["end", "end-opp"] }
});
