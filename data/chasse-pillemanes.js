// Spearhead : Abyssaux Idoneths – Chasse Pillemânes
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "chasse-pillemanes",
  name: "Chasse Pillemânes",
  faction: "Abyssaux Idoneths",
  cover: "img/chasse-pillemanes/armee.jpg",
  photos: { allopex: "img/chasse-pillemanes/allopex.jpg", armee: "img/chasse-pillemanes/armee.jpg", gardes-morrarr-2: "img/chasse-pillemanes/gardes-morrarr-2.jpg", hilotes-namarti: "img/chasse-pillemanes/hilotes-namarti.jpg", scruteur-ames: "img/chasse-pillemanes/scruteur-ames.jpg" },
  units: [
    { id: "scruteur-ames", en: "Scruteur d'Âmes Isharann", stats: { M: '6\"', S: 5, C: 2, Sv: "5+" },
      weapons: [{ n: "Bâton d'Âmes", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "D3", crit: "none" }],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Récolte d'Âmes", x: ["Annonce : Choisissez une unité ennemie visible à 12\".", "Effet : Jetez un dé. Sur 3+, infligez 1 dégât mortel. Si une figurine est tuée, Soignez (1) une unité amie à 12\"."] }],
      kw: "HÉROS, PRÊTRE, INFANTERIE" },
    { id: "gardes-morrarr-2", en: "Gardes Morrarr Akhéliens", stats: { M: '14\"', S: 3, C: 1, Sv: "4+" },
      weapons: [{ n: "Lance Voltaïque", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none" }], abilities: [], kw: "CAVALERIE" },
    { id: "allopex", en: "Allopex Akhélien", stats: { M: '12\"', S: 8, C: 2, Sv: "4+" },
      weapons: [{ n: "Lance-harpon", range: '12\"', a: 2, h: 3, w: 3, r: 1, d: "D3", crit: "none" }, { n: "Mâchoires d'Allopex", range: "Mêlée", a: 4, h: 3, w: 2, r: 2, d: "2", crit: "none", extra: ["Compagnon"] }], abilities: [], kw: "MONSTRE, CAVALERIE" },
    { id: "hilotes-namarti", en: "Hilotes Namarti", stats: { M: '6\"', S: 1, C: 1, Sv: "5+" },
      weapons: [{ n: "Lames Lanmari", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "passive", t: "Passif", n: "Marée Mortelle", x: ["Effet : Au début de chaque round, les unités amies gagnent un bonus selon le numéro du round."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "move", t: "Une Fois par Tour, Votre Phase de Mouvement", n: "Embuscade Océanique", x: ["Annonce : Choisissez une unité amie.", "Effet : Retirez-la et replacez-la à plus de 6\" des ennemis."] },
      { c: "passive", t: "Passif", n: "Banc de Prédateurs", x: ["Effet : Ajoutez 1 aux jets de charge pour les unités de Hilotes Namarti amies."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "hero", t: "Votre Phase des Héros", n: "Secrets de l'Océan", x: ["Annonce : Choisissez une unité ennemie visible.", "Effet : Soustrayez 1 aux jets de sauvegarde de la cible jusqu'au début de votre prochain tour."] },
      { c: "passive", t: "Passif", n: "Guide des Âmes", x: ["Effet : Votre général a une PROTECTION (5+)."] }
    ]}
  ]},
  when: { "Marée Mortelle": ["hero"], "Embuscade Océanique": ["move"], "Banc de Prédateurs": ["charge"], "Secrets de l'Océan": ["hero"], "Guide des Âmes": ["shoot-opp", "fight-opp"], "Récolte d'Âmes": ["hero"] }
});
