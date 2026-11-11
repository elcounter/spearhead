// Spearhead : Forgeruines de Hashut (Helsmiths of Hashut)
(window.SPEARHEADS = window.SPEARHEADS || []).push({
  id:"hashut",
  name:"Forgeruines de Hashut",
  faction:"Helsmiths of Hashut",
  cover:"img/hashut/armee.webp",
  photos:{armee:"img/hashut/armee.webp", bombarde:"img/hashut/bombarde.webp", cohorte:"img/hashut/cohorte.webp", despote:"img/hashut/despote.webp", dominotaure:"img/hashut/dominotaure.webp"},
  units: [
    {id:"despote", en:"Despote de Guerre",
      stats:{M:'4"', S:6, C:2, Sv:"3+"},
      weapons:[{n:"Vouge de Flambedémon", range:"Mêlée", a:5, h:3, w:3, r:1, d:"2", crit:"mortal"}],
      abilities:[
        {c:"end", t:"Passif", n:"Impitoyable Conquérant", x:[
          "Effet : si cette unité a au moins un point de pouvoir démoniaque, les unités amies ayant 0 point de pouvoir démoniaque comptent comme ayant 1 point de pouvoir démoniaque tant qu'elles sont entièrement à 6\" et visibles d'elle.",
          "Pour chaque point de pouvoir démoniaque qu'a cette unité, ajoutez 3\" à la portée de cette aptitude."]}
      ],
      kw:"HÉROS, INFANTERIE"},
    {id:"dominotaure", en:"Machine Dominotaure avec Canons d'Immolation",
      stats:{M:'6"', S:10, C:2, Sv:"2+"},
      weapons:[
        {n:"Canons d'Immolation", range:'8"', a:5, h:2, w:4, r:1, d:"D3", crit:"none", extra:["Tir en combat"]},
        {n:"Cornes et Coups Cinglants", range:"Mêlée", a:3, h:4, w:3, r:1, d:"D3", crit:"none"}
      ],
      abilities:[
        {c:"passive", t:"Passif", n:"Force Démoniaque", x:[
          "Effet : pour chaque point de pouvoir démoniaque de cette unité :",
          "Ajoutez 1\" à sa caractéristique de Mouvement.",
          "Ajoutez 1 à la caractéristique d'Attaques de ses armes."]}
      ],
      kw:"MACHINE DE GUERRE, RENFORTS"},
    {id:"bombarde", en:"Bombarde de Tourment",
      stats:{M:'4"', S:8, C:2, Sv:"3+"},
      weapons:[
        {n:"Torrent d'Énergie de la Ruine", range:'30"', a:4, h:3, w:3, r:1, d:"D3", crit:"none", extra:["Anti-CAVALERIE (+1 Perf.)","Anti-INFANTERIE (+1 Perf.)"]},
        {n:"Armes d'Artilleurs", range:"Mêlée", a:3, h:4, w:4, r:0, d:"1", crit:"none"}
      ],
      abilities:[
        {c:"shoot", t:"Passif", n:"Trajectoire Calculée", x:[
          "Effet : ajoutez 1 aux jets de touche des attaques de tir de cette unité qui ciblent une unité ennemie ayant au moins 5 figurines et se trouvant à plus de 12\" de cette unité."]},
        {c:"shoot", t:"Une fois par tour (armée), votre phase de tir", n:"Bombardement de la Ruine", x:[
          "Annonce : si cette unité a utilisé une aptitude de TIR à ce tour et que toutes ses attaques ont ciblé la même unité ennemie, cette dernière est la cible. Ensuite, vous pouvez choisir comme cibles supplémentaires un nombre d'unités ennemies à 6\" de la cible égal au nombre de points de pouvoir démoniaque de cette unité.",
          "Effet : jetez un dé pour chaque cible. Sur 3+, soustrayez 3 au score de contrôle de la cible pour le restant du tour."]}
      ],
      kw:"MACHINE DE GUERRE"},
    {id:"cohorte", en:"Cohorte Infernale avec Lances Hashutites",
      stats:{M:'4"', S:1, C:1, Sv:"3+"},
      weapons:[{n:"Lance Hashutite", range:"Mêlée", a:2, h:3, w:4, r:0, d:"1", crit:"none", extra:["Anti-charge (+1 Perf.)"]}],
      abilities:[
        {c:"hero", t:"Une fois par bataille, n'importe quelle phase des héros", n:"Frappez les Gongs", x:[
          "Effet : le Porteur de Gong de cette unité (s'il y en a un) est un pion. Vous pouvez retirer ce Porteur de Gong du champ de bataille et ramener D3 figurines tuées dans son unité."]},
        {c:"defense", t:"Passif", n:"Résilience Démoniaque", x:[
          "Effet : appliquez l'effet correspondant au nombre de points de pouvoir démoniaque (PPD) de cette unité :",
          "1 PPD : cette unité a PROTECTION (6+).",
          "2 PPD : cette unité a PROTECTION (5+).",
          "3 PPD : cette unité a PROTECTION (5+) et vous ignorez le premier point de dégât qui lui est alloué à chaque phase."]}
      ],
      kw:"INFANTERIE, RENFORTS"}
  ],
  army: {id:"armee", en:"Règles de l'armée", sections:[
    {key:"trait", title:"Trait de bataille", who:"Trait de bataille", abilities:[
      {c:"hero", t:"Une fois par tour (armée), votre phase des héros", n:"Dompter le Pouvoir Démoniaque", x:[
        "Effet : vous devez utiliser cette aptitude au début de chacune de vos phases des héros. Retirez tous les points de pouvoir démoniaque de chaque unité amie. Ensuite, gagnez autant de points de pouvoir démoniaque que le numéro du round de bataille en cours plus 1.",
        "Ensuite, allouez vos points de pouvoir démoniaque aux unités amies. Chaque unité peut avoir au maximum 3 points de pouvoir démoniaque. Ensuite, tous les points de pouvoir démoniaque non alloués sont perdus."]}
    ]},
    {key:"regiment", pick:true, title:"Aptitude de régiment", who:"Aptitude de régiment", abilities:[
      {c:"passive", t:"Une fois par bataille, phase de déploiement", n:"Progression Implacable", x:[
        "Annonce : choisissez comme cibles 2 unités de Cohortes Infernales amies.",
        "Effet : chaque cible peut immédiatement se déplacer de jusqu'à 3\" mais ne peut pas utiliser d'aptitude de CHARGE au premier round de bataille."]},
      {c:"shoot", t:"Une fois par tour, votre phase de tir", n:"Bombardement de Suppression", x:[
        "Annonce : choisissez comme cible une unité d'INFANTERIE ennemie à laquelle on a alloué au moins un point de dégât à ce tour à cause d'attaques de tir d'une Bombarde de Tourment amie.",
        "Effet : jusqu'au début de votre prochain tour, soustrayez 1 au nombre de dés jetés pour les jets de charge pour la cible, jusqu'à un minimum de 1."]}
    ]},
    {key:"opti", pick:true, title:"Optimisation du général", who:"Optimisation (général)", abilities:[
      {c:"hero", t:"Une fois par bataille, n'importe quelle phase des héros", n:"Parchemin de Pétrification", x:[
        "Effet : pour le restant du tour, votre général a une PROTECTION (2+) mais ne peut pas utiliser d'aptitude ni être la cible d'aptitude amie."]},
      {c:"shoot", t:"Une fois par bataille, votre phase de tir", n:"Calice de Ténèbres", x:[
        "Annonce : choisissez comme cible une unité ennemie visible à 12\" de votre général.",
        "Effet : infligez D3 dégâts mortels à la cible."]},
      {c:"defense", t:"Passif", n:"Talisman d'Obsidienne", x:[
        "Effet : ignorez le premier point de dégât alloué à votre général à chaque phase."]},
      {c:"fight", t:"Une fois par bataille, n'importe quelle phase de mêlée", n:"Amulette de Haine Brûlante", x:[
        "Effet : pour le restant du tour, les attaques de votre général infligent des touches critiques sur un jet de touche non modifié de 5+."]}
    ]}
  ]},
  when: {
    "Dompter le Pouvoir Démoniaque":["hero"],
    "Progression Implacable":["deploy"],
    "Bombardement de Suppression":["shoot"],
    "Parchemin de Pétrification":["hero","hero-opp"],
    "Calice de Ténèbres":["shoot"],
    "Talisman d'Obsidienne":["shoot-opp","fight-opp"],
    "Amulette de Haine Brûlante":["fight","fight-opp"],
    "Impitoyable Conquérant":["hero"],
    "Trajectoire Calculée":["shoot"],
    "Bombardement de la Ruine":["shoot"],
    "Frappez les Gongs":["hero","hero-opp"]
  }
});
