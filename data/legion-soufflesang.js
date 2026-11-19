// Spearhead : Esclaves des Ténèbres – Légion de Soufflesang
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "legion-soufflesang",
  name: "Légion de Soufflesang",
  faction: "Esclaves des Ténèbres",
  cover: "img/legion-soufflesang/armee.webp",
  photos: { armee: "img/legion-soufflesang/armee.webp", "char-chaos": "img/legion-soufflesang/char-chaos.webp", "chevaliers-chaos": "img/legion-soufflesang/chevaliers-chaos.webp", "guerriers-chaos": "img/legion-soufflesang/guerriers-chaos.webp", "seigneur-chaos": "img/legion-soufflesang/seigneur-chaos.webp" },
  units: [
    { id: "seigneur-chaos", en: "Seigneur du Chaos", stats: { M: '5"', S: 6, C: 2, Sv: "3+" },
      weapons: [{ n: "Fauchard", range: "Mêlée", a: 5, h: 3, w: 3, r: 1, d: "2", crit: "mortal" }],
      abilities: [
        { c: "hero", t: "Votre Phase des Héros", n: "Favori du Panthéon", x: ["Effet : Jetez un dé. Sur 4+, vous pouvez faire un jet sur le tableau de l'Œil des Dieux pour cette unité."] },
        { c: "fight", t: "N'importe Quelle Phase de Mêlée", n: "Champion à Volonté de Fer", x: ["Annonce : Choisissez une unité amie entièrement à 12\" de cette unité comme cible et jetez un dé. Vous ne pouvez pas choisir l'unité qui a cette aptitude.", "Effet : Sur 2+, ajoutez 1 aux jets de touche pour les attaques faites par l'unité cible à cette phase."] }
      ],
      kw: "HÉROS, INFANTERIE" },
    { id: "char-chaos", en: "Char du Chaos", stats: { M: '10"', S: 7, C: 2, Sv: "4+" },
      weapons: [
        { n: "Fléau de Guerre du Chaos", range: "Mêlée", a: 6, h: 3, w: 3, r: "-", d: "1", crit: "none" },
        { n: "Fouet d'Aurige", range: "Mêlée", a: 2, h: 4, w: 4, r: "-", d: "1", crit: "none" },
        { n: "Sabots Écrasants de Destrier", range: "Mêlée", a: 4, h: 5, w: 3, r: "-", d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "charge", t: "Votre Phase de Charge", n: "Mort Rapide", x: ["Annonce : Si cette unité a chargé à cette phase, choisissez une unité ennemie à 1\" d'elle comme cible et jetez un dé.", "Effet : Sur 2+, infligez D3 dégâts mortels à la cible."] }],
      kw: "MACHINE DE GUERRE" },
    { id: "guerriers-chaos", en: "Guerriers du Chaos", stats: { M: '5"', S: 2, C: 1, Sv: "3+" },
      weapons: [{ n: "Hallebarde Gravée de Runes", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "none" }],
      abilities: [{ c: "fight", t: "Passif", n: "Porteurs de Désolation", x: ["Effet : Ajoutez 1 aux jets de blessure pour les attaques de mêlée faites par cette unité qui ciblent une unité ennemie qui conteste un objectif que vous ne contrôlez pas."] }],
      kw: "INFANTERIE" },
    { id: "chevaliers-chaos", en: "Chevaliers du Chaos", stats: { M: '10"', S: 4, C: 1, Sv: "3+" },
      weapons: [
        { n: "Lance Maudite", range: "Mêlée", a: 3, h: 3, w: 3, r: 1, d: "1", crit: "none", extra: ["Charge (+1 Dégât)"] },
        { n: "Sabots Écrasants de Monture du Chaos", range: "Mêlée", a: 2, h: 5, w: 3, r: "-", d: "1", crit: "none", extra: ["Compagnon"] }
      ],
      abilities: [{ c: "fight", t: "Passif", n: "Charge Empaleuse", x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des Lances Maudites de cette unité si elle a chargé au même tour."] }],
      kw: "CAVALERIE" }
  ],
  army: { id: "armee", en: "Règles de l'armée", sections: [
    { key: "trait", title: "Trait de bataille", who: "Trait de bataille", abilities: [
      { c: "end", t: "Une Fois par Tour, Fin de N'importe Quel Tour", n: "Œil des Dieux", x: [
        "Annonce : Choisissez 1 des unités amies suivantes pour qu'elle utilise cette aptitude : une unité qui conteste un objectif qui n'est pas contrôlé par l'adversaire et qui n'est pas en mêlée, ou une unité qui a détruit une unité ennemie à ce tour.",
        "Effet : Faites un jet sur le tableau de l'Œil des Dieux pour l'unité. Cette unité gagne l'aptitude passive d'Œil des Dieux qui correspond au jet (l'unité conserve toutes les aptitudes d'Œil des Dieux gagnées aux tours précédents). Si une même unité gagne la même aptitude plus d'une fois pendant la bataille, les effets ne sont pas cumulatifs.",
        "1 – Ignoré des Dieux : pas d'effet.",
        "2 – Protection de Tzeentch : cette unité a une Protection (6+).",
        "3 – Grâce de Slaanesh : ajoutez 1 aux jets de course pour cette unité.",
        "4 – Bénédiction de Nurgle : soustrayez 1 aux jets de blessure pour les attaques qui ciblent cette unité.",
        "5 – Fureur de Khorne : ajoutez 1 à la caractéristique de Perforation des armes de mêlée de cette unité.",
        "6 – Champion du Chaos : choisissez n'importe quelle aptitude de ce tableau."
      ] }
    ]},
    { key: "regiment", pick: true, title: "Aptitude de régiment", who: "Aptitude de régiment", abilities: [
      { c: "start", t: "Une Fois par Bataille, Début du Premier Round de Bataille", n: "La Bannière d'Effroi", x: ["Annonce : Choisissez une unité de Guerriers du Chaos ou Chevaliers du Chaos amie.", "Effet : Vous pouvez aussitôt faire un jet sur le tableau de l'Œil des Dieux pour l'unité."] },
      { c: "end", t: "Passif", n: "Conquérants Féroces", x: ["Effet : Ajoutez 3 aux scores de contrôle des unités de Guerriers du Chaos amies."] }
    ]},
    { key: "opti", pick: true, title: "Optimisation du général", who: "Optimisation (général)", abilities: [
      { c: "fight", t: "Passif", n: "Marque de Khorne", x: ["Effet : Ajoutez 1 à la caractéristique de Perforation des armes de mêlée de votre général s'il a chargé au même tour."] },
      { c: "move", t: "Une Fois par Bataille, Votre Phase de Mouvement", n: "Marque de Tzeentch", x: ["Annonce : Choisissez une unité amie sur le champ de bataille. Vous ne pouvez pas choisir votre général.", "Effet : Retirez l'unité du champ de bataille et placez-la à nouveau entièrement à 6\" de votre général et à plus de 6\" des unités ennemies. Elle ne peut utiliser aucune aptitude de Mouvement jusqu'à la fin de la phase."] },
      { c: "defense", t: "Passif", n: "Marque de Nurgle", x: ["Effet : Soustrayez 1 aux jets de blessure pour les attaques de mêlée qui ciblent votre général."] },
      { c: "fight", t: "Passif", n: "Marque de Slaanesh", x: ["Effet : Votre général a Frappe en Premier."] }
    ]}
  ]},
  when: { "Œil des Dieux": ["end", "end-opp"], "La Bannière d'Effroi": ["start"], "Conquérants Féroces": ["end", "end-opp"], "Marque de Khorne": ["fight", "fight-opp"], "Marque de Tzeentch": ["move"], "Marque de Nurgle": ["fight-opp"], "Marque de Slaanesh": ["fight", "fight-opp"], "Favori du Panthéon": ["hero"], "Champion à Volonté de Fer": ["fight", "fight-opp"], "Mort Rapide": ["charge"], "Porteurs de Désolation": ["fight", "fight-opp"], "Charge Empaleuse": ["fight", "fight-opp"] }
});
