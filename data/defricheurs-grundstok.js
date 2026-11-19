// Spearhead : Magnats Kharadrons – Défricheurs Grundstok
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "defricheurs-grundstok",
  name: "Défricheurs Grundstok",
  faction: "Magnats Kharadrons",
  cover: "img/defricheurs-grundstok/armee.webp",
  photos: { armee: "img/defricheurs-grundstok/armee.webp", canonniere: "img/defricheurs-grundstok/canonniere.webp", endringreeurs: "img/defricheurs-grundstok/endringreeurs.webp", foudroyeurs: "img/defricheurs-grundstok/foudroyeurs.webp", "maitre-endrinieur": "img/defricheurs-grundstok/maitre-endrinieur.webp" },
  units: [
    { id: "maitre-endrinieur", en: "Maître-endrinieur avec Dirigeable Dorsal", stats: { M: '12"', S: 8, C: 2, Sv: "3+" },
      weapons: [
        { n: "Éthercanon", range: '18"', a: 1, h: 3, w: 3, r: 2, d: "3", crit: "none" },
        { n: "Batterie d'Armes de Dirigeable Dorsal", range: '12"', a: 6, h: 3, w: 3, r: 1, d: "1", crit: "none" },
        { n: "Scie Éthermatique Améliorée", range: "Mêlée", a: 4, h: 3, w: 3, r: 2, d: "2", crit: "none" }
      ],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Talent de Maître-endrinieur", x: ["Annonce : Choisissez comme cible une unité amie qui a le mot-clé VOL et qui est entièrement à 12\" de cette unité.", "Effet : Jetez un D3. Sur 2+, Soignez (X) la cible, où X est égal au résultat du jet."] }],
      kw: "HÉROS, INFANTERIE, VOL" },
    { id: "foudroyeurs", en: "Foudroyeurs Grundstok", stats: { M: '4"', S: 2, C: 1, Sv: "3+" },
      weapons: [
        { n: "Fusil à Munitions Éthériques", range: '18"', a: 2, h: 3, w: 4, r: 1, d: "1", crit: "none", extra: ["1 figurine"] },
        { n: "Fumigateur Éthérique ou Balayeuse", range: '10"', a: 5, h: 3, w: 4, r: "-", d: "1", crit: "none", extra: ["Tir en Mêlée", "1 figurine chacun"] },
        { n: "Mortier Grundstok ou Éthercanon", range: '18"', a: 2, h: 4, w: 3, r: 1, d: "2", crit: "none", extra: ["1 figurine chacun"] },
        { n: "Crosse", range: "Mêlée", a: 1, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["Toutes les figurines"] }
      ],
      abilities: [{ c: "shoot", t: "Une Fois par Bataille (Armée), N'importe Quelle Phase de Tir", n: "Munitions Incapacitantes", x: ["Annonce : Choisissez comme cible une unité ennemie à laquelle un ou plusieurs dégâts ont été alloués à cette phase par les attaques de tir de cette unité.", "Effet : Soustrayez D6 au score de contrôle de la cible pour le restant du tour."] }],
      kw: "INFANTERIE, RENFORTS" },
    { id: "canonniere", en: "Canonnière Grundstok", stats: { M: '12"', S: 8, C: 2, Sv: "3+" },
      weapons: [{ n: "Canons Aether", range: '18"', a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none" }, { n: "Éperon", range: "Mêlée", a: 2, h: 4, w: 3, r: 1, d: "2", crit: "none" }], abilities: [], kw: "MACHINE DE GUERRE, VOL" },
    { id: "endringreeurs", en: "Endringréeurs", stats: { M: '4"', S: 2, C: 1, Sv: "4+" },
      weapons: [{ n: "Aethermatic Weapons", range: '12"', a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }, { n: "Tools", range: "Mêlée", a: 2, h: 4, w: 4, r: 0, d: "1", crit: "none" }], abilities: [], kw: "INFANTERIE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "defense", t: "Passif", n: "Canonnière d'Escorte", x: ["Effet : Soustrayez 1 aux jets de touche pour les attaques qui ciblent des unités d'INFANTERIE de MAGNATS KHARADRONS amies tant qu'elles sont entièrement à 6\" d'une Canonnière Grundstok amie."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "move", t: "Une Fois par Bataille (Armée), Votre Phase de Mouvement", n: "Relocalisation Rapide", x: ["Annonce : Choisissez comme cible une unité amie qui a le mot-clé VOL.", "Effet : Retirez la cible du champ de bataille et replacez-la n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies. La cible ne peut utiliser aucune aptitude de CHARGE à ce tour."] },
      { c: "charge", t: "Passif", n: "Courant d'Hélice Descendant", x: ["Effet : Soustrayez 1 aux jets de charge pour les unités ennemies tant qu'elles sont à 9\" d'une Canonnière Grundstok amie."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "fight", t: "Une Fois par Bataille (Armée), N'importe Quelle Phase de Mêlée", n: "Capsule d'Injection de Carburant d'Urgence", x: ["Effet : Votre général a Frappe en Premier pour le restant du tour."] },
      { c: "end", t: "Passif", n: "Prospecteur et Pionnier", x: ["Effet : Ajoutez 2 au score de contrôle de votre général."] },
      { c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Mini-bombes au Célestium", x: ["Annonce : Choisissez comme cible une unité ennemie qui est en mêlée avec votre général.", "Effet : Jetez un dé. Sur 3+, on ne peut faire aucun jet de protection pour la cible pour le restant du tour."] },
      { c: "defense", t: "Passif", n: "Largage d'Urgence", x: ["Effet : Soustrayez 1 aux dégâts infligés à cette unité quand elle utilise une aptitude de REPLI."] }
    ]}
  ]},
  when: { "Canonnière d'Escorte": ["shoot-opp", "fight-opp"], "Relocalisation Rapide": ["move"], "Courant d'Hélice Descendant": ["charge-opp"], "Capsule d'Injection de Carburant d'Urgence": ["fight", "fight-opp"], "Prospecteur et Pionnier": ["end", "end-opp"], "Mini-bombes au Célestium": ["fight", "fight-opp"], "Largage d'Urgence": ["move"], "Talent de Maître-endrinieur": ["hero"], "Munitions Incapacitantes": ["shoot", "shoot-opp"] }
});
