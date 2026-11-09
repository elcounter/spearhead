// Spearhead : Hantenuits – Bagnehorde Maudite
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id: "bagnehorde-maudite",
  name: "Bagnehorde Maudite",
  faction: "Hantenuits",
  cover: "img/bagnehorde-maudite/armee.jpg",
  photos: { armee: "img/bagnehorde-maudite/armee.jpg", carognes: "img/bagnehorde-maudite/carognes.jpg", "esprit-tourmenteur": "img/bagnehorde-maudite/esprit-tourmenteur.jpg", manes: "img/bagnehorde-maudite/manes.jpg", "lamemanes": "img/bagnehorde-maudite/lamemanes.jpg", "ecumeurs": "img/bagnehorde-maudite/ecumeurs.jpg" },
  units: [
    {
      id: "esprit-tourmenteur",
      en: "Esprit Tourmenteur",
      stats: { M: '8\"', S: 5, C: 2, Sv: "5+" },
      weapons: [
        { n: "Chaînes Bagnespectre", range: "Mêlée", a: 5, h: 4, w: 3, r: 1, d: "2", crit: "auto" }
      ],
      abilities: [
        {
          c: "hero",
          t: "Votre Phase des Héros",
          n: "Énergie d'Âmes Captives",
          x: [
            "Annonce : Choisissez comme cible une unité amie qui est entièrement à 12\" de cette unité.",
            "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de blessure pour les attaques de mêlée de la cible pour le restant du tour."
          ]
        }
      ],
      kw: "HÉROS, INFANTERIE, VOL, PROTECTION (5+)"
    },
    {
      id: "manes",
      en: "Mânes Enchaînés",
      stats: { M: '8\"', S: 3, C: 2, Sv: "6+" },
      weapons: [
        { n: "Fléaux Spectraux", range: '12\"', a: 2, h: 4, w: 3, r: 2, d: "1", crit: "auto" },
        { n: "Fléaux Spectraux (mêlée)", range: "Mêlée", a: 2, h: 4, w: 3, r: 2, d: "1", crit: "auto" }
      ],
      abilities: [
        {
          c: "fight",
          t: "Votre Phase de Mêlée",
          n: "Un Maillon de la Chaîne",
          x: [
            "Effet : Jetez un dé. Ajoutez 1 au jet si cette unité est entièrement à 12\" d'un ou plusieurs Esprits Tourmenteurs amis. Sur 3+, pour le restant du tour, ajoutez 1 aux jets de touche pour les attaques de mêlée des unités amies tant qu'elles sont entièrement à 12\" de cette unité."
          ]
        }
      ],
      kw: "INFANTERIE, VOL, PROTECTION (5+)"
    },
    {
      id: "lamemanes",
      en: "Revenants Lamemânes",
      stats: { M: '8\"', S: 2, C: 1, Sv: "6+" },
      weapons: [
        { n: "Grande Lame de la Tombe", range: "Mêlée", a: 2, h: 3, w: 3, r: 1, d: "1", crit: "auto" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Désespoir Forcené",
          x: [
            "Effet : Tant que cette unité conteste un objectif que vous contrôlez, les unités ennemies ne peuvent pas finir un mouvement de charge à ½\" d'elle, sauf si le jet de charge non modifié était 5 ou plus."
          ]
        }
      ],
      kw: "INFANTERIE, VOL, PROTECTION (5+)"
    },
    {
      id: "carognes",
      en: "Carognes Faucheuses",
      stats: { M: '8\"', S: 1, C: 1, Sv: "6+" },
      weapons: [
        { n: "Membres Faucheurs", range: "Mêlée", a: 3, h: 4, w: 4, r: 1, d: "1", crit: "auto" }
      ],
      abilities: [
        {
          c: "passive",
          t: "Passif",
          n: "Hurlements Atroces",
          x: [
            "Effet : On ne peut pas ramener des figurines tuées dans les unités ennemies, et elles ne peuvent pas être soignées, tant qu'elles sont en mêlée avec cette unité."
          ]
        }
      ],
      kw: "INFANTERIE, VOL, PROTECTION (5+)"
    },
    {
      id: "ecumeurs",
      en: "Écumeurs Affrelames",
      stats: { M: '12\"', S: 3, C: 1, Sv: "6+" },
      weapons: [
        { n: "Affrelame", range: "Mêlée", a: 4, h: 4, w: 3, r: 1, d: "2", crit: "auto" },
        { n: "Sabots et Dents Fantomatiques de Coursier Éthéré", range: "Mêlée", a: 3, h: 5, w: 3, r: 0, d: "1", crit: "auto", extra: ["Compagnon"] }
      ],
      abilities: [
        {
          c: "move",
          t: "Une Fois par Bataille, Votre Phase de Mouvement",
          n: "Dématérialisation",
          x: ["Effet : Retirez cette unité du champ de bataille et replacez-la sur le champ de bataille à plus de 6\" des unités ennemies."]
        }
      ],
      kw: "CAVALERIE, VOL, PROTECTION (5+)"
    }
  ],
  army: {
    id: "armee",
    en: "Règles de l'armée",
    sections: [
      {
        key: "trait",
        title: "Trait de bataille",
        who: "Trait de bataille",
        abilities: [
          {
            c: "move",
            t: "Une Fois par Tour (Armée), Votre Phase de Mouvement",
            n: "Procession Spectrale",
            x: [
              "1 de vos unités de Revenants Lamemânes et 1 de vos unités de Carognes Faucheuses commencent la bataille en réserve. À partir du deuxième round de bataille, vous pouvez utiliser l'aptitude suivante :",
              "Arrivée Ricanante : Choisissez 1 de vos unités en réserve. Placez cette unité n'importe où sur le champ de bataille, à plus de 6\" des unités ennemies."
            ]
          },
          {
            c: "passive",
            t: "Passif",
            n: "Éthérés",
            x: ["Effet : Ignorez les modificateurs négatifs aux jets de sauvegarde pour les unités amies."]
          }
        ]
      },
      {
        key: "regiment",
        pick: true,
        title: "Aptitude de régiment",
        who: "Aptitude de régiment",
        abilities: [
          {
            c: "hero",
            t: "Une Fois par Tour (Armée), N'importe Quelle Phase des Héros",
            n: "Incorporels",
            x: [
              "Annonce : Choisissez comme cible une unité amie.",
              "Effet : Jetez un dé. Sur 3+, ajoutez 1 aux jets de sauvegarde pour la cible pour le restant du tour."
            ]
          },
          {
            c: "end",
            t: "Une Fois par Tour (Armée), Fin de N'importe Quel Tour",
            n: "Effroi Croissant",
            x: [
              "Annonce : Choisissez comme cible une unité amie.",
              "Effet : Jetez un dé. Sur 2+, soustrayez le numéro du round de bataille actuel aux scores de contrôle des unités ennemies tant qu'elles sont en mêlée avec la cible."
            ]
          }
        ]
      },
      {
        key: "opti",
        pick: true,
        title: "Optimisation du général",
        who: "Optimisation (général)",
        abilities: [
          {
            c: "hero",
            t: "Votre Phase des Héros",
            n: "Visage Impie",
            x: [
              "Annonce : Choisissez comme cible une unité ennemie visible et à 6\" de votre général.",
              "Effet : Jetez un dé. Sur 3+, la cible doit immédiatement utiliser une aptitude de REPLI comme si c'était la phase de mouvement adverse."
            ]
          },
          {
            c: "fight",
            t: "Une Fois par Bataille, N'importe Quelle Phase de Mêlée",
            n: "Récits d'Horreur",
            x: [
              "Annonce : Choisissez comme cible une unité d'INFANTERIE ou de CAVALERIE ennemie à 6\" de votre général.",
              "Effet : Pour le restant de la bataille, si la cible est remplacée à l'aide de l'aptitude « Appeler des Renforts », divisez par deux le nombre de figurines dans l'unité de remplacement, en arrondissant au supérieur."
            ]
          },
          {
            c: "fight",
            t: "N'importe Quelle Phase de Mêlée",
            n: "Possesseur Funeste",
            x: [
              "Annonce : Choisissez comme cible un HÉROS ennemi à 12\" de votre général, puis choisissez comme victime une autre unité ennemie à portée de mêlée de la cible.",
              "Effet : Jetez un D3. Sur 2+, choisissez 1 de ces effets :",
              "• Infligez à la cible autant de dégâts mortels que le jet.",
              "• Infligez à la victime autant de dégâts mortels que le jet."
            ]
          },
          {
            c: "hero",
            t: "Une Fois par Bataille, N'importe Quelle Phase des Héros",
            n: "Hurlement Spectral",
            x: [
              "Annonce : Choisissez comme cible une unité ennemie à 12\" de votre général.",
              "Effet : Pour le restant du tour, soustrayez 1 au nombre de dés jetés lorsqu'on fait des jets de charge pour la cible, jusqu'à un minimum de 1."
            ]
          }
        ]
      }
    ]
  },
  when: {
    "Procession Spectrale": ["move"],
    "Éthérés": ["shoot-opp", "fight-opp"],
    "Incorporels": ["hero", "hero-opp"],
    "Effroi Croissant": ["end"],
    "Visage Impie": ["hero"],
    "Récits d'Horreur": ["fight", "fight-opp"],
    "Possesseur Funeste": ["fight", "fight-opp"],
    "Hurlement Spectral": ["hero", "hero-opp"],
    "Énergie d'Âmes Captives": ["hero"],
    "Un Maillon de la Chaîne": ["fight"],
    "Désespoir Forcené": ["charge-opp"],
    "Hurlements Atroces": ["fight-opp"],
    "Dématérialisation": ["move"]
  }
});
