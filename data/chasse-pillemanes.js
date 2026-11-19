// Spearhead : Abyssaux Idoneths – Chasse Pillemânes
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "chasse-pillemanes",
  name: "Chasse Pillemânes",
  faction: "Abyssaux Idoneths",
  cover: "img/chasse-pillemanes/armee.webp",
  photos: { allopex: "img/chasse-pillemanes/allopex.webp", armee: "img/chasse-pillemanes/armee.webp", "gardes-morrarr-2": "img/chasse-pillemanes/gardes-morrarr-2.webp", "hilotes-namarti": "img/chasse-pillemanes/hilotes-namarti.webp", "scruteur-ames": "img/chasse-pillemanes/scruteur-ames.webp" },
  units: [
    { id: "scruteur-ames", en: "Scruteur d'Âmes Isharann", stats: { M: '6"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Banc de Poissons-prophètes", range: '10"', a: 8, h: 5, w: 5, r: "-", d: "1", crit: "none", extra: ["Tir en Mêlée", "Compagnon"] },
        { n: "Toucher Abyssal", range: "Mêlée", a: 3, h: 3, w: 4, r: "-", d: "D3", crit: "none" }
      ],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Rituel de la Brume Rampante", x: ["Annonce : Choisissez une unité amie visible entièrement à 12\" de cette unité comme cible, puis jetez un dé.", "Effet : Sur 3+, jusqu'au début de votre prochain tour, soustrayez 1 aux jets de blessure pour les attaques faites contre l'unité cible."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "gardes-morrarr-2", en: "Garde Morrsarr Akhélienne", stats: { M: '14"', S: 4, C: 1, Sv: "4+" },
      weapons: [
        { n: "Lance Choc", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] },
        { n: "Crocs et Queue Fouetteuse de Sécodonte", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "D3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "charge", t: "Une Fois par Bataille, N'importe Quelle Phase de Charge", n: "Décharge Biovoltaïque", x: ["Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie à 1\" d'elle comme cible, puis jetez autant de dés que le nombre de figurines dans l'unité ayant cette aptitude.", "Effet : Pour chaque 4-5, infligez 1 dégât mortel à la cible. Pour chaque 6+, infligez D3 dégâts mortels à la cible. Ajoutez 1 à chaque jet s'il y a plus de figurines dans l'unité cible que dans l'unité ayant cette aptitude."] }],
      kw: "CAVALERIE, VOL" },
    { id: "allopex", en: "Allopex Akhélien", stats: { M: '12"', S: 8, C: 2, Sv: "4+" },
      weapons: [
        { n: "Lance-harpons à Clams-rasoirs", range: '18"', a: 2, h: 3, w: 2, r: 1, d: "3", crit: "none", extra: ["Anti-MONSTRE (+1 Perf.)"] },
        { n: "Lames et Crochets Dentelés", range: "Mêlée", a: 4, h: 3, w: 4, r: 1, d: "1", crit: "none" },
        { n: "Morsure Féroce d'Allopex", range: "Mêlée", a: 3, h: 4, w: 2, r: 2, d: "2", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "passive", t: "Passif", n: "Prédateurs Assoiffés de Sang", x: ["Effet : Ajoutez 1 à la caractéristique d'Attaques de la Morsure Féroce d'Allopex de cette unité si elle est à 6\" d'une ou plusieurs unités ennemies endommagées ou si elle est à 6\" d'une ou plusieurs unités ennemies qui ont eu une ou plusieurs figurines tuées à ce tour."] }],
      kw: "CAVALERIE, RENFORTS, VOL" },
    { id: "hilotes-namarti", en: "Hilotes Namarti", stats: { M: '6"', S: 1, C: 1, Sv: "5+" },
      weapons: [{ n: "Lanmari", range: "Mêlée", a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["Anti-INFANTERIE (+1 Perf.)"] }],
      abilities: [{ c: "passive", t: "Passif", n: "Coups de Taille", x: ["Effet : Ajoutez 1 à la caractéristique de Dégâts des Lanmari de cette unité pour les attaques qui ciblent un MONSTRE ennemi."] }],
      kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille : Marée Mortelle", who: "Marée Mortelle", abilities: [
      { c: "passive", t: "Passif, 1er round de bataille (toutes les unités amies)", n: "Marée Basse", x: ["Effet : Soustrayez 1 aux jets de touche pour les attaques de tir qui ciblent cette unité."] },
      { c: "passive", t: "Passif, 2e round de bataille (toutes les unités amies)", n: "Marée Montante", x: ["Effet : Cette unité peut utiliser une aptitude de Course et quand même utiliser des aptitudes de Tir et/ou de Charge plus tard pendant le tour."] },
      { c: "passive", t: "Passif, 3e round de bataille (toutes les unités amies)", n: "Marée Haute", x: ["Effet : Cette unité a Frappe en Premier."] },
      { c: "passive", t: "Passif, 4e round de bataille (toutes les unités amies)", n: "Marée Descendante", x: ["Effet : Cette unité peut utiliser une aptitude de Repli et quand même utiliser des aptitudes de Tir et/ou de Charge plus tard pendant le tour."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "passive", t: "Passif", n: "Voie de la Vague de Crête", x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée utilisées par les unités d'Hilotes Namarti amies qui ont chargé au même tour."] },
      { c: "end", t: "Une Fois par Tour (Armée), Fin de N'importe Quel Tour", n: "Prédateurs Éthermarins", x: ["Effet : Choisissez une unité de CAVALERIE amie qui a utilisé une aptitude de Corps à Corps à ce tour. Soignez (D3) cette unité."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "hero", t: "Passif", n: "Archi-ritualiste", x: ["Effet : Ajoutez 1 aux jets pour l'aptitude « Rituel de la Brume Rampante » de votre général."] },
      { c: "defense", t: "Passif", n: "Armure de Coquille Ferreuse", x: ["Effet : Ignorez tous les modificateurs aux jets de sauvegarde pour votre général (positifs et négatifs)."] },
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Illumination Mentale", x: ["Annonce : Choisissez une unité ennemie en mêlée avec votre général.", "Effet : Jusqu'à la fin de la phase, les attaques faites par cette unité ennemie causent des touches seulement sur des jets de touche non modifiés de 6."] },
      { c: "hero", t: "Votre Phase des Héros", n: "Morceaux Délicieux", x: ["Effet : Soignez (1) chaque unité de CAVALERIE amie à portée de mêlée de votre général."] }
    ]}
  ]},
  when: { "Marée Basse": ["shoot-opp"], "Marée Montante": ["move"], "Marée Haute": ["fight", "fight-opp"], "Marée Descendante": ["move"], "Voie de la Vague de Crête": ["fight"], "Prédateurs Éthermarins": ["end", "end-opp"], "Archi-ritualiste": ["hero"], "Armure de Coquille Ferreuse": ["shoot-opp", "fight-opp"], "Illumination Mentale": ["fight", "fight-opp"], "Morceaux Délicieux": ["hero"], "Rituel de la Brume Rampante": ["hero"], "Décharge Biovoltaïque": ["charge", "charge-opp"], "Prédateurs Assoiffés de Sang": ["fight", "fight-opp"], "Coups de Taille": ["fight", "fight-opp"] }
});
