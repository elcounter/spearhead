// Spearhead : Séraphons – Ost d'Écailles des Étoiles
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "ost-ecailles-etoiles",
  name: "Ost d'Écailles des Étoiles",
  faction: "Séraphons",
  cover: "img/ost-ecailles-etoiles/armee.webp",
  photos: { armee: "img/ost-ecailles-etoiles/armee.webp", "guerriers-saurus": "img/ost-ecailles-etoiles/guerriers-saurus.webp", kroxigor: "img/ost-ecailles-etoiles/kroxigor.webp", "sang-ancien-carnosaure": "img/ost-ecailles-etoiles/sang-ancien-carnosaure.webp" },
  units: [
    { id: "sang-ancien-carnosaure", en: "Sang-ancien Saurus sur Carnosaure", stats: { M: '10"', S: 14, C: 5, Sv: "4+" },
      weapons: [
        { n: "Gantelet d'Éclat Solaire", range: '12"', a: "D6", h: 3, w: 3, r: 1, d: "1", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Arme Relique de Célestite", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "none" },
        { n: "Immense Mâchoire de Carnosaure", range: "Mêlée", a: 3, h: 4, w: 2, r: 2, d: "3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [
        { c: "hero", t: "Votre Phase des Héros", n: "Seigneur de Guerre Ancestral", x: ["Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible. Vous ne pouvez pas choisir l'unité qui a cette aptitude.", "Effet : Jusqu'au début de votre prochain tour, ajoutez 1 aux jets de charge pour la cible."] },
        { c: "passive", t: "Passif", n: "Stigmates de Guerre", x: ["Effet : Tant que cette unité a 10 dégâts ou plus, la caractéristique d'Attaques de son Immense Mâchoire de Carnosaure est de 1."] }
      ],
      kw: "HÉROS, MONSTRE" },
    { id: "guerriers-saurus", en: "Guerriers Saurus", stats: { M: '5"', S: 2, C: 1, Sv: "4+" },
      weapons: [{ n: "Massue de Célestite", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "defense", t: "Passif", n: "Cohortes Ordonnées", x: ["Effet : Ajoutez 1 aux jets de sauvegarde pour cette unité tant qu'elle conteste un objectif que vous contrôlez."] }],
      kw: "INFANTERIE" },
    { id: "kroxigor", en: "Kroxigor", stats: { M: '5"', S: 6, C: 2, Sv: "4+" },
      weapons: [{ n: "Massue Mors-drac", range: "Mêlée", a: 4, h: 4, w: 2, r: 1, d: "2", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Coups Brutaux", x: ["Effet : Les armes de mêlée de cette unité ont Crit (2 Touches) si l'unité cible a 5 figurines ou plus."] }],
      kw: "INFANTERIE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Bêtes des Sombres Jungles", x: ["Annonce : Choisissez votre général pour qu'il utilise cette aptitude s'il est en mêlée.", "Effet : Faites 1 choix parmi ce qui suit :", "Mâchoires Gargantuesques : Choisissez une unité ennemie en mêlée avec votre général et jetez un dé. Si le jet est supérieur à la caractéristique de Santé de l'unité choisie, 1 figurine de cette unité est tuée.", "Rugissement : Choisissez une unité ennemie en mêlée avec votre général. Soustrayez D6 au score de contrôle de cette unité ennemie à ce tour."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "end", t: "Une Fois par Phase, Fin de N'importe Quel Tour", n: "Combattants Prédateurs", x: ["Annonce : Jetez un dé pour chaque unité ennemie en mêlée avec une ou plusieurs unités amies.", "Effet : Sur 3+, infligez 1 dégât mortel à l'unité concernée par le jet."] },
      { c: "defense", t: "Passif", n: "Gardiens des Cités-Temples", x: ["Effet : Les unités amies ont une Protection (6+) tant qu'elles sont entièrement en territoire ami."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "end", t: "Fin de N'importe Quel Tour", n: "Regard de Sotek", x: ["Effet : Jetez un dé. Ajoutez le résultat du jet au score de contrôle de votre général à ce tour."] },
      { c: "passive", t: "Passif", n: "Lame des Réalités", x: ["Effet : Ajoutez 1 à la caractéristique de Perforation de l'Arme Relique de Célestite de votre général."] },
      { c: "move", t: "Une Fois par Bataille, Phase de Mouvement Adverse", n: "Vénérable Stratège", x: ["Annonce : Choisissez une unité amie entièrement à 12\" de votre général. Vous ne pouvez pas choisir votre général.", "Effet : L'unité choisie peut utiliser l'aptitude « Mouvement Normal » comme s'il s'agissait de votre phase de mouvement."] },
      { c: "passive", t: "Passif", n: "La Colère de Chotec", x: ["Effet : La caractéristique d'Attaques du Gantelet d'Éclat Solaire de votre général est de 6 au lieu d'un D6."] }
    ]}
  ]},
  when: { "Bêtes des Sombres Jungles": ["fight", "fight-opp"], "Combattants Prédateurs": ["end", "end-opp"], "Gardiens des Cités-Temples": ["shoot-opp", "fight-opp"], "Regard de Sotek": ["end", "end-opp"], "Lame des Réalités": ["fight", "fight-opp"], "Vénérable Stratège": ["move-opp"], "La Colère de Chotec": ["shoot"], "Seigneur de Guerre Ancestral": ["hero"], "Stigmates de Guerre": ["fight", "fight-opp"], "Cohortes Ordonnées": ["shoot-opp", "fight-opp"], "Coups Brutaux": ["fight", "fight-opp"] }
});
