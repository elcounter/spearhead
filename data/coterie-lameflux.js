// Spearhead : Disciples de Tzeentch – Coterie de Lameflux
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "coterie-lameflux",
  name: "Coterie de Lameflux",
  faction: "Disciples de Tzeentch",
  cover: "img/coterie-lameflux/armee.webp",
  photos: { acolytes: "img/coterie-lameflux/acolytes.webp", armee: "img/coterie-lameflux/armee.webp", incendiaires: "img/coterie-lameflux/incendiaires.webp", "magister-disque": "img/coterie-lameflux/magister-disque.webp", tzaangors: "img/coterie-lameflux/tzaangors.webp", "hurleurs": "img/coterie-lameflux/hurleurs.webp" },
  units: [
    { id: "magister-disque", en: "Magister sur Disque de Tzeentch", stats: { M: '14"', S: 6, C: 2, Sv: "4+" },
      weapons: [
        { n: "Bâton Runique de Tzeentch", range: '18"', a: 1, h: 3, w: 4, r: "-", d: "D3", crit: "none" },
        { n: "Épée de Vilacier", range: "Mêlée", a: 3, h: 3, w: 4, r: "-", d: "D3", crit: "none" },
        { n: "Dents et Cornes de Disque", range: "Mêlée", a: 2, h: 4, w: 3, r: 1, d: "D3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Éclair du Changement", x: ["Annonce : Choisissez une unité ennemie visible à 18\" de cette unité comme cible, puis faites un jet de lancement de 2D6.", "Effet : Sur 6+, infligez D3 dégâts mortels à la cible. Si une ou plusieurs figurines sont tuées par cette aptitude, vous pouvez choisir une unité de Tzaangors amie entièrement à 18\" de cette unité et ramener 1 figurine tuée dans cette unité de Tzaangors."] }],
      kw: "HÉROS, SORCIER, CAVALERIE, VOL" },
    { id: "incendiaires", en: "Incendiaires de Tzeentch", stats: { M: '9"', S: 2, C: 1, Sv: "5+", W: "6+" },
      weapons: [
        { n: "Feu Surnaturel", range: '12"', a: 3, h: 3, w: 4, r: "-", d: "D3", crit: "none" },
        { n: "Gueules Enflammées", range: "Mêlée", a: 3, h: 3, w: 4, r: "-", d: "1", crit: "none" }
      ],
      abilities: [{ c: "passive", t: "Passif", n: "Feu Surnaturel Capricieux", x: ["Effet : Ajoutez 1 aux jets de touche pour les attaques faites par cette unité si l'unité cible a 5 figurines ou plus."] }],
      kw: "INFANTERIE, VOL, PROTECTION (6+)" },
    { id: "hurleurs", en: "Hurleurs de Tzeentch", stats: { M: '14"', S: 3, C: 1, Sv: "5+", W: "6+" },
      weapons: [{ n: "Morsure de Lamproie", range: "Mêlée", a: 3, h: 4, w: 3, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "move", t: "Votre Phase de Mouvement", n: "Ailerons Lacérateurs", x: ["Annonce : Choisissez une unité ennemie à travers laquelle une ou plusieurs figurines de cette unité se sont déplacées à cette phase comme cible, puis jetez un dé pour chaque figurine de cette unité qui s'est déplacée ainsi.", "Effet : Pour chaque 4+, infligez 1 dégât mortel à la cible."] }],
      kw: "BÊTE, VOL, PROTECTION (6+)" },
    { id: "tzaangors", en: "Tzaangors", stats: { M: '6"', S: 2, C: 1, Sv: "5+" },
      weapons: [{ n: "Lame Sauvage et Bec Acéré", range: "Mêlée", a: 2, h: 4, w: 3, r: "-", d: "1", crit: "none" }],
      abilities: [{ c: "passive", t: "Passif", n: "Attaque Planifiée de Longue Date", x: ["Effet : Tant que cette unité est entièrement en territoire ennemi, ses armes de mêlée ont Crit (2 Touches)."] }],
      kw: "INFANTERIE, RENFORTS" },
    { id: "acolytes", en: "Acolytes Kairiques", stats: { M: '5"', S: 1, C: 1, Sv: "5+" },
      weapons: [
        { n: "Éclairs de Sorcellerie", range: '18"', a: 1, h: 4, w: 3, r: "-", d: "1", crit: "none" },
        { n: "Lame Maudite", range: "Mêlée", a: 2, h: 4, w: 4, r: "-", d: "1", crit: "none" }
      ],
      abilities: [{ c: "shoot", t: "Votre Phase de Tir", n: "Sorcellerie Collégiale", x: ["Annonce : Faites un jet de lancement de 2D6.", "Effet : Sur 6+, ajoutez 1 à la caractéristique de Perforation des Éclairs de Sorcellerie de cette unité à cette phase."] }],
      kw: "INFANTERIE, RENFORTS" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "start", t: "Une Fois par Bataille, Début du Premier Round de Bataille", n: "Maîtres du Destin", x: [
        "Effet : Jetez 9 dés et mettez-les de côté. Ce sont vos dés de destin. Pendant la bataille, au lieu de jeter les dés pour l'un des jets de la liste ci-dessous, vous pouvez choisir un de vos dés de destin et l'utiliser à la place du jet. Une fois qu'un dé de destin a été utilisé, il est défaussé.",
        "Si vous voulez remplacer un jet qui utilise plus d'un D6, vous devez utiliser le même nombre de dés de destin (ex. il faudra utiliser 2 dés de destin à la place d'un jet de lancement de 2D6). Les jets qui sont remplacés comptent comme des jets non modifiés et ne peuvent pas être relancés ni modifiés sauf mention contraire.",
        "Jets pouvant être remplacés : jets de lancement, de course, de charge, de touche, de blessure, de sauvegarde (vous devez quand même modifier le jet de sauvegarde en fonction de la caractéristique de Perforation de l'arme attaquante)."
      ] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "passive", t: "Passif", n: "Formes Éphémères", x: ["Effet : Jetez un dé chaque fois qu'une figurine d'Acolyte Kairique amie est tuée à la phase de mêlée. Sur 4+, vous pouvez ramener 1 figurine tuée dans une unité de Tzaangors amie à 9\" de la figurine tuée."] },
      { c: "passive", t: "Passif", n: "Conflagration Éternelle", x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de tir utilisées par les unités d'Incendiaires de Tzeentch amies."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "hero", t: "Votre Phase des Héros", n: "Bouclier du Destin", x: ["Annonce : Choisissez une unité amie visible entièrement à 18\" de votre général, puis faites un jet de lancement de 2D6.", "Effet : Sur 6+, jusqu'au début de votre prochain tour, l'unité a une Protection (6+). Si l'unité a déjà une sauvegarde de protection, ajoutez 1 aux jets de protection pour l'unité jusqu'au début de votre prochain tour à la place."] },
      { c: "hero", t: "Votre Phase des Héros", n: "Lueur du Futur", x: ["Annonce : Si vous avez moins de 6 dés de destin, faites un jet de lancement de 2D6.", "Effet : Sur 7+, vous pouvez jeter un dé et l'ajouter à vos dés de destin."] },
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Cœur de Démon", x: ["Annonce : Choisissez une unité ennemie à 1\" de votre général.", "Effet : Infligez autant de dégâts mortels à cette unité ennemie que le numéro du round de bataille en cours."] },
      { c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Pendentif de Glisse Temporelle", x: ["Annonce : Choisissez une unité ennemie à 9\" de votre général.", "Effet : Cette unité ennemie a Frappe en Dernier à cette phase."] }
    ]}
  ]},
  when: { "Maîtres du Destin": ["start"], "Formes Éphémères": ["fight", "fight-opp"], "Conflagration Éternelle": ["shoot"], "Bouclier du Destin": ["hero"], "Lueur du Futur": ["hero"], "Cœur de Démon": ["fight", "fight-opp"], "Pendentif de Glisse Temporelle": ["fight", "fight-opp"], "Éclair du Changement": ["hero"], "Feu Surnaturel Capricieux": ["shoot", "fight", "fight-opp"], "Ailerons Lacérateurs": ["move"], "Attaque Planifiée de Longue Date": ["fight", "fight-opp"], "Sorcellerie Collégiale": ["shoot"] }
});
