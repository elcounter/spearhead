// Spearhead : Skavens – Meutegriffe Rongefestin
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "meutegriffe-rongefestin",
  name: "Meutegriffe Rongefestin",
  faction: "Skavens",
  cover: "img/meutegriffe-rongefestin/armee.webp",
  photos: { armee: "img/meutegriffe-rongefestin/armee.webp", griffarque: "img/meutegriffe-rongefestin/griffarque.webp", "prophete-gris": "img/meutegriffe-rongefestin/prophete-gris.webp", "rats-clans": "img/meutegriffe-rongefestin/rats-clans.webp", "ingenieur": "img/meutegriffe-rongefestin/ingenieur.webp", "rats-ogors": "img/meutegriffe-rongefestin/rats-ogors.webp" },
  units: [
    { id: "griffarque", en: "Griffarque sur Ronge-bête", stats: { M: '9"', S: 7, C: 2, Sv: "4+", W: "6+" },
      weapons: [
        { n: "Pistolet Ratling", range: '10"', a: "D6", h: 3, w: 3, r: 1, d: "1", crit: "auto", extra: ["Tir en Mêlée"] },
        { n: "Hallebarde de Malmétal", range: "Mêlée", a: 5, h: 3, w: 4, r: 1, d: "2", crit: "none" },
        { n: "Dents Tranchantes de Ronge-bête", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "D3", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "passive", t: "Passif", n: "Rat Coincé", x: ["Effet : Tant que cette unité est endommagée, ajoutez 3 à la caractéristique d'Attaques de sa Hallebarde de Malmétal."] }],
      kw: "HÉROS, CAVALERIE, PROTECTION (6+)" },
    { id: "prophete-gris", en: "Prophète Gris", stats: { M: '6"', S: 5, C: 2, Sv: "6+" },
      weapons: [{ n: "Bâton de Malepierre", range: "Mêlée", a: 3, h: 4, w: 4, r: 1, d: "D3", crit: "none" }],
      abilities: [
        { c: "hero", t: "Votre Phase des Héros", n: "Volonté du Roi Cornu", x: ["Annonce : Choisissez une unité amie entièrement à 13\" de cette unité comme cible, puis jetez un dé.", "Effet : Sur 3+, ajoutez le résultat du jet au score de contrôle de la cible jusqu'au début de votre prochain tour."] },
        { c: "hero", t: "Votre Phase des Héros", n: "Flétrissement", x: ["Annonce : Choisissez une unité ennemie visible à 13\" de cette unité comme cible, puis faites un jet de lancement de 2D6.", "Effet : Sur 6+, infligez D3 dégâts mortels à la cible."] }
      ],
      kw: "HÉROS, SORCIER, INFANTERIE" },
    { id: "ingenieur", en: "Ingénieur Technomage", stats: { M: '6"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Mousquet à Malepierre", range: '24"', a: 2, h: 3, w: 3, r: 2, d: "D3", crit: "auto" },
        { n: "Dague de Malmétal", range: "Mêlée", a: 3, h: 4, w: 4, r: "-", d: "2", crit: "none" }
      ],
      abilities: [{ c: "shoot", t: "Réaction : vous avez annoncé une aptitude de Tir pour cette unité et elle n'a pas utilisé une aptitude de Mouvement à ce tour", n: "Plus-plus de Malénergie !", x: ["Effet : Jetez un dé. Sur 2+, fixez la caractéristique de Dégâts de son Mousquet à Malepierre à 3 à cette phase. Sur 1, infligez D3 dégâts mortels à cette unité."] }],
      kw: "HÉROS, INFANTERIE" },
    { id: "rats-clans", en: "Rats des Clans", stats: { M: '6"', S: 1, C: 1, Sv: "5+" },
      weapons: [{ n: "Lame Rouillée", range: "Mêlée", a: 2, h: 4, w: 5, r: "-", d: "1", crit: "none" }],
      abilities: [{ c: "end", t: "Fin de N'importe Quel Tour", n: "Nuée Grouillante", x: ["Effet : Vous pouvez ramener D3 figurines tuées dans cette unité."] }],
      kw: "INFANTERIE, RENFORTS" },
    { id: "rats-ogors", en: "Rats-ogors", stats: { M: '6"', S: 4, C: 1, Sv: "5+" },
      weapons: [
        { n: "Canon à Maleflamme", range: '10"', a: "2D6", h: 2, w: 4, r: 2, d: "1", crit: "none", extra: ["Tir en Mêlée", "1 figurine"] },
        { n: "Griffes, Lames et Dents", range: "Mêlée", a: 5, h: 4, w: 3, r: 1, d: "2", crit: "none" }
      ],
      abilities: [{ c: "fight", t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée", n: "Malefureur Déchaînée", x: ["Effet : Infligez D3 dégâts mortels à cette unité. Puis, ajoutez 1 à la caractéristique d'Attaques de ses armes de mêlée à cette phase."] }],
      kw: "INFANTERIE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Traits de bataille", who: "Trait de bataille", abilities: [
      { c: "deploy", t: "Une Fois par Bataille, Phase de Déploiement", n: "Le Raz-de-vermine Rampant", x: ["Annonce : Choisissez une unité amie qui n'a pas été déployée comme cible.", "Effet : L'unité cible est placée en réserve dans les tunnels en-dessous. Les unités dans les tunnels en-dessous qui n'ont pas utilisé l'aptitude « Embuscade par Trou de Vermine » avant la fin du troisième round de bataille sont détruites."] },
      { c: "move", t: "Votre Phase de Mouvement", n: "Embuscade par Trou de Vermine", x: ["Annonce : Choisissez une unité amie qui est dans les tunnels en-dessous pour qu'elle utilise cette aptitude.", "Effet : Placez cette unité entièrement à 6\" d'un coin du champ de bataille et à plus de 9\" des unités ennemies."] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "shoot", t: "Une Fois par Bataille, Votre Phase de Tir", n: "Balles Incrustées de Malepierre", x: ["Annonce : Choisissez une arme de tir dont une unité amie est armée.", "Effet : Cette arme a Crit (Mortel) à cette phase."] },
      { c: "move", t: "Passif", n: "Trop Rapide pour Toucher-toucher", x: ["Effet : Aucun dégât mortel n'est infligé aux unités amies quand elles utilisent des aptitudes de Repli."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "end", t: "Réaction : vous avez annoncé l'aptitude « Appeler des Renforts »", n: "Diriger la Horde Grouillante", x: ["Effet : Au lieu d'utiliser les instructions de placement de l'aptitude « Appeler des Renforts », l'unité de remplacement peut être placée entièrement à 13\" de cette unité et pas en mêlée."] },
      { c: "shoot", t: "Passif", n: "Relations au sein du Clan Skryre", x: ["Effet : Le Pistolet Ratling de votre général a une caractéristique d'Attaques de 2D6 au lieu d'un D6."] },
      { c: "fight", t: "Passif", n: "Breloque de Malepierre", x: ["Effet : Soustrayez 1 aux jets de sauvegarde pour les unités ennemies en mêlée avec votre général."] },
      { c: "defense", t: "Passif", n: "Cape des Victoires Cousues", x: ["Effet : Votre général a une Protection (5+)."] }
    ]}
  ]},
  when: { "Le Raz-de-vermine Rampant": ["deploy"], "Embuscade par Trou de Vermine": ["move"], "Balles Incrustées de Malepierre": ["shoot"], "Trop Rapide pour Toucher-toucher": ["move", "move-opp"], "Diriger la Horde Grouillante": ["end", "end-opp"], "Relations au sein du Clan Skryre": ["shoot"], "Breloque de Malepierre": ["fight", "fight-opp"], "Cape des Victoires Cousues": ["shoot-opp", "fight-opp"], "Rat Coincé": ["fight", "fight-opp"], "Volonté du Roi Cornu": ["hero"], "Flétrissement": ["hero"], "Plus-plus de Malénergie !": ["shoot"], "Nuée Grouillante": ["end", "end-opp"], "Malefureur Déchaînée": ["fight", "fight-opp"] }
});
