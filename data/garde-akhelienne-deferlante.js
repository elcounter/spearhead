// Spearhead : Abyssaux Idoneths – Garde Akhélienne Déferlante
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "garde-akhelienne-deferlante",
  name: "Garde Akhélienne Déferlante",
  faction: "Abyssaux Idoneths",
  cover: "img/garde-akhelienne-deferlante/armee.webp",
  photos: { armee: "img/garde-akhelienne-deferlante/armee.webp", "ecumeurs-namarti": "img/garde-akhelienne-deferlante/ecumeurs-namarti.webp", "gardes-ishlaen": "img/garde-akhelienne-deferlante/gardes-ishlaen.webp", "gardes-morrarr": "img/garde-akhelienne-deferlante/gardes-morrarr.webp", "roi-akhelien": "img/garde-akhelienne-deferlante/roi-akhelien.webp" },
  units: [
    { id: "roi-akhelien", en: "Roi Akhélien", stats: { M: '12"', S: 7, C: 2, Sv: "3+" },
      weapons: [
        { n: "Armes Royales Akhéliennes", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" },
        { n: "Griffes, Crocs et Queues Fouetteuses d'Abimar", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        { c: "hero", t: "Votre Phase des Héros", n: "Pillard Déterminé", x: ["Annonce : Choisissez comme cible une autre unité amie entièrement à portée de mêlée de cette unité.", "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de sauvegarde pour la cible jusqu'au début de votre prochain tour."] },
        { c: "charge", t: "N'importe Quelle Phase de Charge", n: "Cavalier des Mers", x: ["Annonce : Si cette unité a chargé à cette phase, choisissez comme cible une unité ennemie à 1\" d'elle.", "Effet : Jetez un D3. Sur 2+, infligez à la cible autant de dégâts mortels que le résultat du jet."] }
      ],
      kw: "HÉROS, CAVALERIE, VOL" },
    { id: "gardes-morrarr", en: "Garde Morrsarr Akhélienne", stats: { M: '14"', S: 4, C: 1, Sv: "4+" },
      weapons: [
        { n: "Lance Choc", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] },
        { n: "Crocs et Queue Fouetteuse de Sécodonte", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "D3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "charge", t: "Une Fois par Bataille, N'importe Quelle Phase de Charge", n: "Décharge Biovoltaïque", x: ["Annonce : Si cette unité a chargé à cette phase, choisissez comme cible une unité ennemie à 1\" d'elle.", "Effet : Jetez autant de dés que le nombre de figurines de l'unité de Garde Morrsarr Akhélienne. Ajoutez 1 à chaque résultat s'il y a moins de figurines dans cette unité que dans l'unité cible. Pour chaque jet de 3+, infligez 1 dégât mortel à la cible."] }],
      kw: "CAVALERIE, VOL" },
    { id: "gardes-ishlaen", en: "Garde Ishlaen Akhélienne", stats: { M: '14"', S: 4, C: 1, Sv: "4+" },
      weapons: [
        { n: "Sabre Funeste", range: "Mêlée", a: 3, h: 3, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Crocs et Queue Fouetteuse de Sécodonte", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "D3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "defense", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Barrière Biovoltaïque", x: ["Annonce : Choisissez comme cible une unité ennemie en mêlée avec cette unité.", "Effet : Jetez un dé. Sur 3+, soustrayez 1 à la caractéristique d'Attaques des armes de la cible pour le restant du tour."] }],
      kw: "CAVALERIE, VOL" },
    { id: "ecumeurs-namarti", en: "Écumeurs Namarti", stats: { M: '7"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Arc-murmure", range: '12"', a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Lame Affûtée", range: "Mêlée", a: 1, h: 3, w: 4, r: "-", d: "1", crit: "none" }
      ],
      abilities: [{ c: "shoot", t: "Passif", n: "Tir en Mouvement", x: ["Effet : Cette unité peut utiliser des aptitudes de Tir même si elle a utilisé une aptitude de Course ou de Repli au même tour."] }],
      kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "fight", t: "Une Fois par Bataille (Armée), N'importe Quelle Phase de Mêlée", n: "Injonction Royale", x: ["Vous ne pouvez utiliser cette aptitude qu'au troisième round de bataille.", "Effet : Choisissez 1 des effets suivants à appliquer pour le restant du round de bataille :", "Percez la Ligne ! : Les unités amies ont Frappe en Premier.", "Assaut Précis : Les armes de mêlée des unités amies ont Crit (Mortel)."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "charge", t: "Une Fois par Tour (Armée), N'importe Quelle Phase de Charge", n: "La Lance d'Asphoren", x: ["Annonce : Choisissez une unité amie qui n'est pas en mêlée pour utiliser cette aptitude.", "Effet : Ajoutez 1 aux jets de charge pour l'unité pour le restant du tour."] },
      { c: "move", t: "Une Fois par Tour (Armée), Votre Phase de Mouvement", n: "Le Bouclier d'Ulchiss", x: ["Annonce : Choisissez une unité amie en mêlée pour utiliser cette aptitude.", "Effet : Pour le restant du tour, chaque fois que l'unité utilise une aptitude de Repli, aucun dégât mortel ne lui est infligé."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "hero", t: "Une Fois par Bataille, Votre Phase des Héros", n: "Âmes Assermentées", x: ["Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de votre général.", "Effet : Vous pouvez ramener 1 figurine tuée dans l'unité cible. Si la cible est une unité d'INFANTERIE, vous pouvez ramener D3 figurines tuées dans l'unité à la place."] },
      { c: "defense", t: "Passif", n: "Amulette Scintillante", x: ["Effet : Votre général a une Protection (5+)."] },
      { c: "fight", t: "Passif", n: "Charge Voltaïque", x: ["Effet : Les Armes Royales Akhéliennes de votre général ont Charge (+1 Dégât)."] },
      { c: "end", t: "Fin de N'importe Quel Tour", n: "Voleur d'Âmes", x: ["Effet : Si votre général est en mêlée, Soignez (D3) votre général."] }
    ]}
  ]},
  when: { "Injonction Royale": ["fight", "fight-opp"], "La Lance d'Asphoren": ["charge", "charge-opp"], "Le Bouclier d'Ulchiss": ["move"], "Âmes Assermentées": ["hero"], "Amulette Scintillante": ["shoot-opp", "fight-opp"], "Charge Voltaïque": ["fight", "fight-opp"], "Voleur d'Âmes": ["end", "end-opp"], "Pillard Déterminé": ["hero"], "Cavalier des Mers": ["charge", "charge-opp"], "Décharge Biovoltaïque": ["charge", "charge-opp"], "Barrière Biovoltaïque": ["fight", "fight-opp"], "Tir en Mouvement": ["shoot"] }
});
