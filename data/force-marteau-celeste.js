// Spearhead : Magnats Kharadrons – Force Opérationnelle du Marteau Céleste
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "force-marteau-celeste",
  name: "Force Opérationnelle du Marteau Céleste",
  faction: "Magnats Kharadrons",
  cover: "img/force-marteau-celeste/armee.webp",
  photos: { "amiral-arkanaute": "img/force-marteau-celeste/amiral-arkanaute.webp", armee: "img/force-marteau-celeste/armee.webp", "compagnie-arkanautes": "img/force-marteau-celeste/compagnie-arkanautes.webp", stratogardes: "img/force-marteau-celeste/stratogardes.webp", "fregate-arkanaute": "img/force-marteau-celeste/fregate-arkanaute.webp" },
  units: [
    { id: "amiral-arkanaute", en: "Amiral Arkanaute", stats: { M: '4"', S: 6, C: 2, Sv: "3+" },
      weapons: [
        { n: "Chef-d'œuvre de Pistolet à Salve", range: '10"', a: 3, h: 3, w: 3, r: 1, d: "2", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Marteau de Skalf", range: "Mêlée", a: 3, h: 3, w: 2, r: 1, d: "3", crit: "none" }
      ],
      abilities: [{ c: "hero", t: "Votre Phase des Héros", n: "Prenez Toujours Votre Dû", x: ["Annonce : Choisissez une unité de Compagnie d'Arkanautes amie entièrement à 12\" de cette unité comme cible.", "Effet : Ajoutez D6 au score de contrôle de la cible jusqu'au début de votre prochain tour."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "compagnie-arkanautes", en: "Compagnie d'Arkanautes", stats: { M: '4"', S: 1, C: 1, Sv: "4+" },
      weapons: [
        { n: "Pistolet de Corsaire", range: '10"', a: 2, h: 4, w: 4, r: "-", d: "1", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Fusil Rotatif Éthermatique", range: '15"', a: "2D6", h: 4, w: 4, r: "-", d: "1", crit: "none", extra: ["2e unité : 1 figurine"] },
        { n: "Stratoharpon Léger", range: '15"', a: 1, h: 4, w: 3, r: 2, d: "D3", crit: "none", extra: ["2e unité : 1 figurine"] },
        { n: "Tranchoir d'Arkanaute", range: "Mêlée", a: 2, h: 4, w: 4, r: "-", d: "1", crit: "none" },
        { n: "Crosse", range: "Mêlée", a: 1, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["2e unité : 2 figurines"] },
        { n: "Stratopique", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "2", crit: "mortal", extra: ["1re unité : 1 figurine"] }
      ],
      abilities: [{ c: "passive", t: "Passif", n: "Cherche-gloire", x: ["Effet : Ajoutez 1 aux jets de touche pour les attaques de cette unité qui ciblent une unité qui conteste un objectif.", "Équipement : une unité a 4 Arkanautes armés d'un Pistolet de Corsaire et d'un Tranchoir d'Arkanaute, et 1 Arkanaute armé d'une Stratopique. L'autre unité a 3 Arkanautes armés d'un Pistolet de Corsaire et d'un Tranchoir d'Arkanaute, 1 Arkanaute armé d'un Fusil Rotatif Éthermatique et d'une Crosse, et 1 Arkanaute armé d'un Stratoharpon Léger et d'une Crosse."] }],
      kw: "INFANTERIE, RENFORTS" },
    { id: "stratogardes", en: "Stratogardes", stats: { M: '12"', S: 2, C: 1, Sv: "4+" },
      weapons: [
        { n: "Pistolet Volcaniseur", range: '10"', a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none", extra: ["Tir en Mêlée", "2 figurines"] },
        { n: "Fusil Rotatif Éthermatique", range: '15"', a: "2D6", h: 4, w: 4, r: "-", d: "1", crit: "none", extra: ["1 figurine"] },
        { n: "Stratopique", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "2", crit: "mortal", extra: ["2 figurines"] },
        { n: "Crosse", range: "Mêlée", a: 1, h: 4, w: 5, r: "-", d: "1", crit: "none", extra: ["1 figurine"] }
      ],
      abilities: [{ c: "end", t: "Fin de N'importe Quel Tour", n: "Charges à Retardement", x: ["Annonce : Choisissez une unité ennemie en mêlée avec cette unité comme cible, puis jetez un dé.", "Effet : Sur 2+, infligez 1 dégât mortel à la cible, et l'unité qui utilise cette aptitude peut aussitôt utiliser l'aptitude « Repli » sans qu'aucun dégât mortel ne lui soit infligé."] }],
      kw: "INFANTERIE, VOL, RENFORTS" },
    { id: "fregate-arkanaute", en: "Frégate Arkanaute", stats: { M: '12"', S: 15, C: 5, Sv: "3+" },
      weapons: [
        { n: "Stratoharpon Lourd", range: '24"', a: 2, h: 4, w: 3, r: 2, d: "D6", crit: "none" },
        { n: "Carabines à Munitions Éthériques", range: '12"', a: 4, h: 3, w: 3, r: 1, d: "2", crit: "none", extra: ["Tir en Mêlée"] },
        { n: "Armes d'Abordage de l'Équipage", range: "Mêlée", a: 8, h: 4, w: 4, r: "-", d: "1", crit: "none" }
      ],
      abilities: [
        { c: "passive", t: "Passif", n: "Stigmates de Guerre", x: ["Effet : Tant que cette unité a 10 dégâts ou plus, la caractéristique d'Attaques de son Stratoharpon Lourd est de 1."] },
        { c: "move", t: "Une Fois par Bataille, Votre Phase de Mouvement", n: "Râteliers à Bombes", x: ["Annonce : Choisissez une unité ennemie par-dessus laquelle cette unité est passée à cette phase comme cible, puis jetez un dé.", "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."] }
      ],
      kw: "MACHINE DE GUERRE, VOL" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "move", t: "Réaction : vous avez déclaré une aptitude de Mouvement qui n'est pas une Charge pour une Frégate Arkanaute", n: "Écumer les Cieux", x: ["Utilisé par : la Frégate Arkanaute qui utilise l'aptitude de Mouvement.", "Effet : Choisissez une unité d'INFANTERIE amie qui est entièrement à portée de mêlée de cette Frégate Arkanaute et qui n'est pas en mêlée afin qu'elle soit transportée. Retirez l'unité d'INFANTERIE du champ de bataille. Puis, quand la Frégate Arkanaute finit son mouvement, placez l'unité d'INFANTERIE à nouveau sur le champ de bataille, entièrement à portée de mêlée de la Frégate Arkanaute et non pas en mêlée. Une unité ne peut pas utiliser d'aptitudes de Charge si elle a été transportée au même tour."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "move", t: "Une Fois par Bataille, Votre Phase de Mouvement", n: "Navire d'Assaut", x: ["Annonce : Choisissez une unité amie qui a été transportée ce tour pour qu'elle utilise cette aptitude.", "Effet : Cette unité peut quand même utiliser des aptitudes de Charge plus tard pendant le tour."] },
      { c: "move", t: "Une Fois par Bataille, Votre Phase de Mouvement", n: "Désengagement", x: ["Annonce : Choisissez une Frégate Arkanaute amie pour qu'elle utilise cette aptitude.", "Effet : Si cette unité utilise une aptitude de Repli à cette phase, aucun dégât mortel ne lui est infligé, et elle peut quand même utiliser des aptitudes de Tir plus tard pendant le tour."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "defense", t: "Passif", n: "Armure de Maître", x: ["Effet : Votre général a une Protection (6+)."] },
      { c: "hero", t: "Une Fois par Bataille, N'importe Quelle Phase des Héros", n: "Flasque de Gorogna Millésimé", x: ["Effet : Soignez (D6) votre général."] },
      { c: "charge", t: "Une Fois par Bataille, Réaction : vous avez déclaré une aptitude de Charge pour une unité entièrement à 12\" de votre général", n: "Sans Risque, pas de Récompense", x: ["Effet : Vous pouvez relancer le jet de charge pour cette aptitude de Charge."] },
      { c: "hero", t: "Une Fois par Bataille, Votre Phase des Héros", n: "N'abandonnez Aucun Duardin", x: ["Annonce : Choisissez une unité de Compagnie d'Arkanautes amie entièrement à 12\" de votre général et jetez un dé pour chaque figurine tuée de cette unité.", "Effet : Pour chaque 4+, vous pouvez ramener 1 figurine tuée dans cette unité."] }
    ]}
  ]},
  when: { "Écumer les Cieux": ["move"], "Navire d'Assaut": ["move"], "Désengagement": ["move"], "Armure de Maître": ["shoot-opp", "fight-opp"], "Flasque de Gorogna Millésimé": ["hero", "hero-opp"], "Sans Risque, pas de Récompense": ["charge"], "N'abandonnez Aucun Duardin": ["hero"], "Prenez Toujours Votre Dû": ["hero"], "Cherche-gloire": ["shoot", "fight", "fight-opp"], "Charges à Retardement": ["end", "end-opp"], "Stigmates de Guerre": ["shoot"], "Râteliers à Bombes": ["move"] }
});
