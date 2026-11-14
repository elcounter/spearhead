// Onglet Partie : feuille de bataille Spearhead (Le Feu et le Jade, Le Sable et l'Os, Cité de Cendre), 4 rounds
(function(){
  "use strict";
  const ROUNDS = 4;
  const LKEY = "spearcounter-parties", HKEY = "spearcounter-historique";
  // Packs de bataille jouables et faces de leur champ de bataille de royaume
  const PACKS = [
    {id:"feu-et-jade", n:"Le Feu et le Jade", faces:{aqshy:"Aqshy", ghyran:"Ghyran"}},
    {id:"sable-et-os", n:"Le Sable et l'Os", faces:{dolorum:"Dolorum", ossie:"Ossie"}},
    {id:"cite-de-cendre", n:"Cité de Cendre", faces:{bastion:"Bastion de Cendre", croisement:"Croisement Brisé"}}
  ];
  const packOf = g => PACKS.find(x => x.id === (g.pack || "cite-de-cendre"));
  const faceName = g => g.face ? packOf(g).faces[g.face] || "" : "";
  const packLine = g => packOf(g).n + (g.face ? " · " + faceName(g) : "");
  const OBJ = ["Au moins 1 objectif", "Au moins 2 objectifs", "Plus d'objectifs que l'adversaire"];
  const TRASH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>';
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const SHS = () => window.SPEARHEADS || [];
  const shName = id => { const s = SHS().find(x => x.id === id); return s ? s.name : ""; };
  // Faction saisie librement ; si elle correspond à une Spearhead de l'app, on propose ses phases
  const norm = t => String(t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const facOf = P => (P.fac || "").trim() || shName(P.sh);
  function shMatch(P){
    if (P.sh && !P.fac) return SHS().find(x => x.id === P.sh) || null;
    const f = norm(P.fac); if (f.length < 3) return null;
    return SHS().find(x => [x.name, x.faction, x.id].some(n => { const v = norm(n); return v && (v.includes(f) || f.includes(v)); })) || null;
  }

  // ---------- Sauvegarde locale ----------
  const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const store = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  function newGame(){
    return {id:"p" + Date.now(), status:"setup", view:"setup", label:"", pack:null, face:null, attacker:null,
      players:[0,1].map(() => ({name:"", fac:""})),
      rounds:Array.from({length:ROUNDS}, () => ({first:null, s:[[0,0,0,0,0],[0,0,0,0,0]]}))};
  }
  let GAMES = load(LKEY, []);
  GAMES.forEach(g => { if (!g.pack && g.face) g.pack = "cite-de-cendre"; });
  GAMES.forEach(g => g.players.forEach(P => { if (P.sh && !P.fac && g.status === "setup") delete P.sh; }));
  let G = null, view = "home", histG = null;
  const cur = load(LKEY + "-courante", null);
  if (cur) { G = GAMES.find(g => g.id === cur.id) || null; if (G) view = cur.view || G.view || "setup"; }
  const remember = () => store(LKEY + "-courante", G && !view.startsWith("hist:") && view !== "home" ? {id:G.id, view} : null);
  const save = () => { if (G) { G.updated = Date.now(); if (!GAMES.includes(G)) GAMES.unshift(G); store(LKEY, GAMES); } remember(); };
  const withG = (g, f) => { const k = G; G = g; try { return f(); } finally { G = k; } };

  // ---------- Calculs ----------
  const other = p => 1 - p;
  const roundScore = (p, r) => G.rounds[r-1].s[p].reduce((t, v) => t + v, 0);
  const objScore = (p, r) => { const s = G.rounds[r-1].s[p]; return s[0] + s[1] + s[2]; };
  function total(p, upTo){ let t = 0; const n = upTo == null ? ROUNDS : upTo; for (let r = 1; r <= n; r++) t += roundScore(p, r); return t; }
  // Outsider : le joueur qui a le moins de PV au début du round (aucun en cas d'égalité)
  function outsider(r){ const a = total(0, r-1), b = total(1, r-1); return a < b ? 0 : b < a ? 1 : null; }
  // Initiative : celui qui jouait en second au round précédent joue en premier
  function initiative(r){
    if (r < 2) return null;
    const pf = G.rounds[r-2].first, cf = G.rounds[r-1].first;
    if (pf == null || cf == null || cf === pf) return null;
    const gap = Math.abs(total(0, r-1) - total(1, r-1));
    return {p:cf, draws: outsider(r) === cf && gap >= 5};
  }

  // ---------- Fenêtre ----------
  function openModal(title, html){
    $("g-sheet").innerHTML = `<h2 class="g-sec dark"><span>${esc(title)}</span><button class="g-x" type="button" data-act="close" aria-label="Fermer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></h2><div class="g-body">${html}</div>`;
    $("g-modal").hidden = false;
  }
  const closeModal = () => { $("g-modal").hidden = true; $("g-sheet").innerHTML = ""; };
  $("g-modal").addEventListener("click", e => { if (e.target === $("g-modal")) closeModal(); });

  // ---------- Vues ----------
  const STEPS = ["setup","start","r1","r2","r3","r4","summary"];
  const rawName = p => (G.players[p].name || "").trim() || ("Joueur " + (p+1));
  const pname = p => esc(rawName(p));
  const pick = (act, val, r) => `<div class="g-two">${[0,1].map(p => `<button class="g-pick" type="button" data-act="${act}" data-p="${p}"${r != null ? ` data-r="${r}"` : ""} aria-pressed="${val === p}">${pname(p)}</button>`).join("")}</div>`;
  const stepper = (act, p, r, v, label) => `<div class="g-switch"><span><b>${label}</b></span><div class="g-stepper"><button type="button" data-act="${act}" data-p="${p}" data-r="${r}" data-d="-1" aria-label="Moins">−</button><output>${v}</output><button type="button" data-act="${act}" data-p="${p}" data-r="${r}" data-d="1" aria-label="Plus">+</button></div></div>`;

  const res = (m, o) => m > o ? `<b class="g-win">(Victoire)</b>` : m < o ? `<b class="g-loss">(Défaite)</b>` : `<b class="g-draw">(Égalité)</b>`;
  // ---------- Statistiques (parties terminées) ----------
  function statsHtml(hist){
    if (!hist.length) return "";
    const P = {}, S = {}, K = {};
    const add = (M, k, r) => { if (!k) return; const o = M[k] = M[k] || {n:0, v:0, d:0, e:0}; o.n++; o[r]++; };
    hist.forEach(x => {
      const g = x.g, sc = [x.sa, x.sb], nm = [x.a, x.b];
      [0,1].forEach(p => {
        const r = sc[p] > sc[1-p] ? "v" : sc[p] < sc[1-p] ? "d" : "e";
        add(P, (nm[p] || "").trim(), r);
        if (g && g.players && g.players[p]) { const m = shMatch(g.players[p]); add(S, m ? m.name : facOf(g.players[p]), r); }
      });
      if (g) add(K, packOf(g).n, "v");
    });
    const pct = o => Math.round(100 * o.v / o.n) + " %";
    const tab = (title, M, cols) => {
      const rows = Object.entries(M).sort((a, b) => b[1].n - a[1].n || b[1].v - a[1].v || a[0].localeCompare(b[0], "fr"));
      if (!rows.length) return "";
      return `<span class="g-lbl">${title}</span><div class="g-scroll"><table class="g-st"><thead><tr><th></th>${cols.map(c => `<th>${c[0]}</th>`).join("")}</tr></thead><tbody>
        ${rows.map(([k, o]) => `<tr><td>${esc(k)}</td>${cols.map(c => `<td>${c[1](o)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    };
    const full = [["Parties", o => o.n], ["V", o => `<b class="g-win">${o.v}</b>`], ["D", o => `<b class="g-loss">${o.d}</b>`], ["É", o => o.e], ["Taux", pct]];
    return `<details class="g-panel g-stats"><summary class="g-sec">Statistiques</summary><div class="g-body">
      <p class="g-hint">Sur ${hist.length} partie${hist.length > 1 ? "s" : ""} terminée${hist.length > 1 ? "s" : ""}. Taux = part de victoires.</p>
      ${tab("Par joueur", P, full)}${tab("Par Spearhead", S, full)}${tab("Par pack de bataille", K, [["Parties", o => o.n]])}
    </div></details>`;
  }
  // Liste déroulante des Spearheads, groupées par alliance puis triées par faction
  function facSelect(P, p){
    const AL = window.SC_ALLIANCE, by = {};
    SHS().forEach(x => { const a = AL ? AL.of(x) : "Spearheads"; (by[a] = by[a] || []).push(x); });
    const keys = (AL ? AL.order.filter(a => by[a]) : []).concat(Object.keys(by).filter(a => !AL || !AL.order.includes(a)));
    const cur = P.sh && !P.fac ? P.sh : (shMatch(P) || {}).id || "";
    const bySort = (x, y) => (x.faction || "").localeCompare(y.faction || "", "fr") || x.name.localeCompare(y.name, "fr");
    const opt = (x, sel) => `<option value="${x.id}"${sel ? " selected" : ""}>${esc(x.faction)} · ${esc(x.name)}</option>`;
    const favIds = load("spearcounter-favoris", []), F = SHS().filter(x => Array.isArray(favIds) && favIds.includes(x.id)).sort(bySort);
    const curFav = F.some(x => x.id === cur);
    const legacy = P.fac && !shMatch(P) ? `<option value="__fac" selected>${esc(P.fac)}</option>` : "";
    return `<select id="g-s${p}" class="g-sel${cur || legacy ? "" : " empty"}" data-set="sh" data-p="${p}">
      <option value=""${cur || legacy ? "" : " selected"}>Choisir une Spearhead</option>${legacy}
      ${F.length ? `<optgroup label="Mes favorites">${F.map(x => opt(x, x.id === cur)).join("")}</optgroup>` : ""}
      ${keys.map(a => `<optgroup label="${esc(a)}">${by[a].sort(bySort).map(x => opt(x, !curFav && x.id === cur)).join("")}</optgroup>`).join("")}
    </select>`;
  }
  function vHome(){
    const hist = load(HKEY, []);
    let h = `<button class="g-btn primary" type="button" data-act="new">Nouvelle partie</button>`;
    const live = GAMES.slice().sort((x, y) => (y.updated || 0) - (x.updated || 0));
    if (live.length) h += `<div><span class="g-lbl">Parties en cours</span><div class="g-stack">${live.map(g => withG(g, () => {
      const where = g.view === "setup" ? "Préparation" : g.view === "start" ? "Début de partie" : g.view === "summary" ? "Récapitulatif" : g.view && g.view[0] === "r" ? "Round " + g.view.slice(1) : "";
      return `<div class="g-panel"><div class="g-body g-live">
        <div class="g-row"><div class="g-grow"><b>${pname(0)}</b> contre <b>${pname(1)}</b><div class="g-hint">${g.pack || g.face ? esc(packLine(g)) : "Pack à choisir"}${g.label ? " · " + esc(g.label) : ""}</div></div><div class="g-big">${total(0)} - ${total(1)}</div></div>
        <div class="g-row"><span class="g-tag">${where}</span><span class="g-grow"></span><button class="g-del" type="button" data-act="del" data-id="${g.id}" aria-label="Supprimer cette partie">${TRASH}</button><button class="g-btn gold" type="button" data-act="resume" data-id="${g.id}">Reprendre</button></div>
      </div></div>`; })).join("")}</div></div>`;
    else h += `<div class="g-panel g-hero"><h2>Aucune partie en cours</h2><p class="g-hint">Pack de bataille, joueurs et Spearheads, puis le score round par round.</p></div>`;
    if (hist.length) h += `<div><span class="g-lbl">Parties terminées</span><div class="g-hist">${hist.slice(0,15).map((x, i) => `<div><button class="g-grow g-hopen" type="button" data-act="hopen" data-i="${i}"><b>${esc(x.a)}</b> ${res(x.sa, x.sb)} ${x.sa} - ${x.sb} <b>${esc(x.b)}</b> ${res(x.sb, x.sa)}<br><span class="g-hint">${esc(x.f)} · ${esc(x.d)}</span></button><button class="g-del" type="button" data-act="hdel" data-i="${i}" aria-label="Supprimer cette partie">${TRASH}</button></div>`).join("")}</div></div>`;
    h += statsHtml(hist);
    return h;
  }

  function vSetup(){
    let h = `<div class="g-panel"><h2 class="g-sec">Partie</h2><div class="g-body">
      <div><label class="g-lbl" for="g-label">Nom de la partie (facultatif)</label><input type="text" id="g-label" data-set="label" value="${esc(G.label)}" placeholder="Ex. Partie avec ..."></div>
    </div></div>`;
    [0,1].forEach(p => {
      const P = G.players[p];
      h += `<div class="g-panel"><h2 class="g-sec">${p === 0 ? "Joueur" : "Adversaire"}</h2><div class="g-body">
        <div><label class="g-lbl" for="g-n${p}">Nom</label><input type="text" id="g-n${p}" data-set="name" data-p="${p}" value="${esc(P.name)}" placeholder="Joueur ${p+1}" autocomplete="off"></div>
        <div><label class="g-lbl" for="g-s${p}">Faction</label>${facSelect(P, p)}</div>
      </div></div>`;
    });
    h += `<p class="g-missing" id="g-missing" aria-live="polite"></p>`;
    return h;
  }
  function missing(){
    const m = [];
    if (!(G.players[0].name || "").trim()) m.push("nom du joueur");
    if (!(G.players[1].name || "").trim()) m.push("nom de l'adversaire");
    return m;
  }
  function missingStart(){
    const m = [];
    if (!G.pack) m.push("pack de bataille");
    if (G.attacker == null) m.push("attaquant");
    if (G.pack && !G.face) m.push("face du plateau");
    if (G.rounds[0].first == null) m.push("premier joueur");
    return m;
  }

  function vStart(){
    const def = G.attacker == null ? null : 1 - G.attacker;
    return `<div class="g-panel"><h2 class="g-sec">1. Pack de bataille</h2><div class="g-body">
        <div class="g-packs">${PACKS.map(k => `<button class="g-pick" type="button" data-act="pack" data-k="${k.id}" aria-pressed="${G.pack === k.id}">${esc(k.n)}</button>`).join("")}</div></div></div>
      <div class="g-panel"><h2 class="g-sec">2. Qui est l'attaquant ?</h2><div class="g-body">${pick("attacker", G.attacker)}
        <p class="g-hint">Tirez au dé : le gagnant choisit qui est l'attaquant et qui est le défenseur.</p></div></div>
      ${G.pack && def != null ? `<div class="g-panel"><h2 class="g-sec">3. Face du plateau</h2><div class="g-body">
        <div class="g-two">${Object.entries(packOf(G).faces).map(([k, n]) => `<button class="g-pick" type="button" data-act="face" data-f="${k}" aria-pressed="${G.face === k}">${esc(n)}</button>`).join("")}</div>
        <button class="g-btn ghost" type="button" data-act="rface">Face aléatoire</button>
        <p class="g-hint">C'est le défenseur (${pname(def)}) qui choisit.</p></div></div>` : ""}
      <div class="g-panel"><h2 class="g-sec">${G.pack && def != null ? "4" : "3"}. Qui joue en premier au round 1 ?</h2><div class="g-body">${pick("first", G.rounds[0].first, 1)}
        <p class="g-hint">C'est l'attaquant qui choisit.</p></div></div>
      <p class="g-missing" id="g-missing2" aria-live="polite"></p>
      ${G.pack ? `<a class="g-btn" href="#pack/${packOf(G).id}/avant">Revoir la séquence de pré-bataille</a>` : ""}`;
  }

  function vRound(r){
    const R = G.rounds[r-1], out = outsider(r), ini = initiative(r);
    let h = `<div class="g-panel"><h2 class="g-sec">Début du round ${r}</h2><div class="g-body">
      ${r >= 2 ? `<div><span class="g-lbl">Qui joue en premier ce round ?</span>${pick("first", R.first, r)}<p class="g-hint" style="margin-top:6px">Jet de priorité. En cas d'égalité, celui qui a joué en premier au round précédent décide.</p></div>` : ""}
      <p class="g-hint">Piochez la carte de péripétie, puis les cartes de tactique.</p></div></div>`;
    h += out != null ? `<div class="g-note gold"><b>Outsider : ${pname(out)}</b> · il applique l'effet « Outsider » de la péripétie.</div>`
                     : `<div class="g-note gold"><b>Pas d'outsider ce round</b> : égalité au score${r === 1 ? " (premier round)" : ""}.</div>`;
    if (ini) h += ini.draws
      ? `<div class="g-note"><b>${pname(ini.p)} prend l'initiative.</b> Il est outsider avec 5 PV de retard ou plus : il pioche quand même ses cartes de tactique.</div>`
      : `<div class="g-note"><b>${pname(ini.p)} prend l'initiative.</b> Il ne pioche pas de carte de tactique de bataille ce round.</div>`;
    const order = R.first != null ? [R.first, other(R.first)] : [0,1];
    order.forEach(p => {
      const s = R.s[p], P = G.players[p];
      const tags = [];
      if (R.first === p) tags.push(`<span class="g-tag first">Joue en premier</span>`);
      if (G.attacker === p) tags.push(`<span class="g-tag">Attaquant</span>`);
      if (out === p) tags.push(`<span class="g-tag out">Outsider</span>`);
      h += `<div class="g-panel"><h2 class="g-sec dark"><span>${pname(p)}</span><span>${total(p, r)} PV</span></h2><div class="g-body">
        ${tags.length ? `<div class="g-who">${tags.join("")}</div>` : ""}
        <div><span class="g-lbl">Fin de son tour : objectifs contrôlés</span><div class="g-chips">${OBJ.map((n, i) => `<button class="g-chip" type="button" data-act="obj" data-p="${p}" data-r="${r}" data-i="${i}" aria-pressed="${!!s[i]}">${n}<span class="v">1</span></button>`).join("")}</div></div>
        ${stepper("tac", p, r, s[3], "Tactiques exécutées")}
        ${stepper("extra", p, r, s[4], "PV des péripéties")}
        ${(m => m ? `<a class="g-btn g-memo" data-memo="1" href="#${m.id}/phases"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5z"/><path d="M9 10h6M9 14h6"/></svg><span>Mémo des phases<small>${esc(m.name)}</small></span></a>` : `<p class="g-hint">Choisis une Spearhead dans la préparation pour ouvrir ici son mémo des phases.</p>`)(shMatch(P))}
        <div class="g-sub"><span>Points ce round</span><b>${roundScore(p, r)} PV</b></div>
      </div></div>`;
    });
    return h;
  }

  function vSummary(ro){
    const a = total(0), b = total(1), done = G.status === "done";
    const st = !done ? `<span class="g-status">En cours</span>` : a === b ? `<span class="g-status">Égalité</span>` : `<span class="g-status win">Victoire de ${pname(a > b ? 0 : 1)}</span>`;
    const fac = p => esc(facOf(G.players[p]) || "Faction inconnue");
    let h = `<div class="g-panel g-final">${st}<div class="g-names"><span>${pname(0)}<br><span class="g-hint">${fac(0)}</span></span><span>${pname(1)}<br><span class="g-hint">${fac(1)}</span></span></div><div class="g-big">${a} - ${b}</div><span class="g-hint">${esc(packLine(G))}${G.label ? " · " + esc(G.label) : ""}</span></div>`;
    [0,1].forEach(p => {
      const line = (name, f) => `<tr><td>${name}</td>${[1,2,3,4].map(r => `<td class="cell"><span>${f(r) || "-"}</span></td>`).join("")}<td class="tot">${[1,2,3,4].reduce((t, r) => t + f(r), 0)}</td></tr>`;
      h += `<div class="g-panel"><h2 class="g-sec dark"><span>${pname(p)}</span><span>${total(p)} PV</span></h2><div class="g-body g-scroll">
        <table class="g-rt"><thead><tr><th>Source</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>Total</th></tr></thead><tbody>
        ${line("Objectifs", r => objScore(p, r))}${line("Tactiques", r => G.rounds[r-1].s[p][3])}${line("Péripéties", r => G.rounds[r-1].s[p][4])}
        </tbody></table>
        <p class="g-hint">${G.rounds[0].first === p ? "A commencé la partie" : "A joué en second au round 1"}${G.attacker === p ? " · Attaquant" : ""}</p></div></div>`;
    });
    h += `<div class="g-stack">
      ${ro ? `<button class="g-btn primary" type="button" data-act="home">Retour aux parties</button><button class="g-btn" type="button" data-act="hedit" data-i="${view.slice(5)}">Modifier la partie</button>` : `<button class="g-btn primary" type="button" data-act="finish">Terminer la partie</button><button class="g-btn" type="button" data-act="home">Retour aux parties</button>`}
      <button class="g-btn gold" type="button" data-act="share">Partager en image</button>
      <button class="g-btn" type="button" data-act="copy">Copier le résumé</button>
      ${ro ? "" : `<button class="g-btn ghost" type="button" data-act="del">Supprimer la partie</button>`}
      <p class="g-hint" id="g-copy" style="text-align:center" aria-live="polite"></p></div>`;
    return h;
  }

  // ---------- Rendu ----------
  let setHead = () => {};
  function render(keepScroll){
    const y = window.scrollY, hv = view.startsWith("hist:"), saved = G;
    let html = "", title = "Parties";
    if (hv) { histG = load(HKEY, [])[+view.slice(5)]; histG = histG && histG.g; if (!histG) { view = "home"; return render(false); } G = histG; }
    if (!G && view !== "home") view = "home";
    if (view === "home") html = vHome();
    else if (hv) { html = vSummary(true); title = "Partie terminée"; }
    else if (view === "setup") { html = vSetup(); title = "Préparation"; }
    else if (view === "start") { html = vStart(); title = "Début de partie"; }
    else if (view === "summary") { html = vSummary(false); title = "Récapitulatif"; }
    else { const r = +view.slice(1); html = vRound(r); title = "Round " + r + " sur " + ROUNDS; }
    $("g-view").innerHTML = html;
    setHead(title, view !== "home");
    const showScore = view[0] === "r" || view === "summary" || hv;
    $("g-score").hidden = !showScore;
    if (showScore) { $("g-sn0").textContent = rawName(0); $("g-sn1").textContent = rawName(1); $("g-pts").textContent = total(0) + " - " + total(1); }
    const i = STEPS.indexOf(view);
    $("g-foot").hidden = view === "home" || view === "summary" || hv;
    document.body.classList.toggle("g-has-foot", !$("g-foot").hidden);
    $("g-prev").textContent = i <= 0 ? "Parties" : "Précédent";
    $("g-next").textContent = view === "r4" ? "Récapitulatif" : view === "start" ? "Commencer" : view === "setup" ? "Suivant" : "Round suivant";
    $("g-next").disabled = (view === "setup" && missing().length > 0) || (view === "start" && missingStart().length > 0);
    const m2 = $("g-missing2"); if (m2) { const l = missingStart(); m2.textContent = l.length ? "Il manque : " + l.join(", ") + "." : ""; }
    const m = $("g-missing"); if (m) { const l = missing(); m.textContent = l.length ? "Il manque : " + l.join(", ") + "." : ""; }
    if (hv) G = saved;
    else if (G && view !== "home") { G.view = view; save(); } else remember();
    window.scrollTo(0, keepScroll ? y : 0);
  }
  function go(v){ view = v; if (G && G.status === "setup" && v !== "setup" && v !== "home") G.status = "live"; render(false); }
  function back(){ const i = STEPS.indexOf(view); go(i <= 0 ? "home" : STEPS[i-1]); }

  $("g-prev").addEventListener("click", back);
  $("g-next").addEventListener("click", () => { const i = STEPS.indexOf(view); if (i >= 0 && i < STEPS.length - 1) go(STEPS[i+1]); });

  $("g-view").addEventListener("change", e => {
    const el = e.target;

  });
  $("g-view").addEventListener("input", e => {
    const el = e.target, k = el.dataset.set;
    if (k === "name") { G.players[+el.dataset.p].name = el.value; save(); const m = missing(); $("g-next").disabled = m.length > 0; $("g-missing").textContent = m.length ? "Il manque : " + m.join(", ") + "." : ""; }
    else if (k === "label") { G.label = el.value; save(); }
    else if (k === "fac") { G.players[+el.dataset.p].fac = el.value; save(); }
    else if (k === "sh") { const P = G.players[+el.dataset.p]; if (el.value !== "__fac") { P.sh = el.value; P.fac = ""; } el.classList.toggle("empty", !el.value); save(); }
  });

  document.getElementById("view-partie").addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act, p = +b.dataset.p, r = +b.dataset.r;
    if (a === "close") return closeModal();
    if (a === "new") { G = newGame(); GAMES.unshift(G); save(); return go("setup"); }
    if (a === "resume") { const g = GAMES.find(x => x.id === b.dataset.id); if (!g) return; G = g; return go(g.view || "setup"); }
    if (a === "home") { closeModal(); return go("home"); }
    if (a === "hopen") return go("hist:" + b.dataset.i);
    if (a === "hedit") return openModal("Modifier la partie ?", `<p style="margin:0">La partie revient en cours, au round 1, pour corriger les scores. Termine-la ensuite pour mettre à jour l'historique et les statistiques.</p><div class="g-two"><button class="g-btn" type="button" data-act="close">Annuler</button><button class="g-btn primary" type="button" data-act="hedit-ok" data-i="${b.dataset.i}">Modifier</button></div>`);
    if (a === "hedit-ok") {
      const x = load(HKEY, [])[+b.dataset.i]; if (!x || !x.g) return closeModal();
      const g = JSON.parse(JSON.stringify(x.g)); delete g.status; g.edit = {id:g.id, d:x.d};
      GAMES = GAMES.filter(y => y.id !== g.id); GAMES.unshift(g); G = g; save();
      closeModal(); return go("r1");
    }
    if (a === "pack") { if (G.pack !== b.dataset.k) { G.pack = b.dataset.k; G.face = null; } save(); return render(true); }
    if (a === "face") { G.face = b.dataset.f; save(); return render(true); }
    if (a === "rface") { const f = Object.keys(packOf(G).faces); G.face = f[Math.floor(Math.random() * f.length)]; save(); return render(true); }
    if (a === "attacker") { G.attacker = p; save(); return render(true); }
    if (a === "first") { G.rounds[r-1].first = p; save(); return render(true); }
    if (a === "obj") {
      const S = G.rounds[r-1].s, i = +b.dataset.i, on = !S[p][i];
      S[p][i] = on ? 1 : 0;
      if (i === 1 && on) S[p][0] = 1;
      if (i === 0 && !on) S[p][1] = 0;
      save(); return render(true);
    }
    if (a === "tac" || a === "extra") { const S = G.rounds[r-1].s[p], k = a === "tac" ? 3 : 4; S[k] = Math.max(0, Math.min(a === "tac" ? 3 : 9, S[k] + +b.dataset.d)); save(); return render(true); }
    if (a === "del") { const g = b.dataset.id ? GAMES.find(x => x.id === b.dataset.id) : G; if (!g) return;
      return openModal("Supprimer la partie ?", withG(g, () => `<p style="margin:0">La partie entre <b>${pname(0)}</b> et <b>${pname(1)}</b> sera effacée de ce téléphone.</p>`) + `<div class="g-two"><button class="g-btn" type="button" data-act="close">Annuler</button><button class="g-btn primary" type="button" data-act="del-ok" data-id="${g.id}">Supprimer</button></div>`); }
    if (a === "del-ok") { GAMES = GAMES.filter(x => x.id !== b.dataset.id); store(LKEY, GAMES); if (G && G.id === b.dataset.id) G = null; closeModal(); return go("home"); }
    if (a === "hdel") { const x = load(HKEY, [])[+b.dataset.i]; if (!x) return;
      return openModal("Supprimer de l'historique ?", `<p style="margin:0"><b>${esc(x.a)}</b> ${x.sa} - ${x.sb} <b>${esc(x.b)}</b> · ${esc(x.d)}</p><div class="g-two"><button class="g-btn" type="button" data-act="close">Annuler</button><button class="g-btn primary" type="button" data-act="hdel-ok" data-i="${b.dataset.i}">Supprimer</button></div>`); }
    if (a === "hdel-ok") { const h = load(HKEY, []); h.splice(+b.dataset.i, 1); store(HKEY, h); closeModal(); return render(true); }
    if (a === "finish") return openModal("Terminer la partie ?", `<p style="margin:0">La partie passera dans les parties terminées, et son récapitulatif ne sera plus modifiable.</p><div class="g-two"><button class="g-btn" type="button" data-act="close">Annuler</button><button class="g-btn primary" type="button" data-act="finish-ok">Terminer</button></div>`);
    if (a === "finish-ok") {
      G.status = "done";
      const hist = load(HKEY, []), ed = G.edit; delete G.edit;
      const entry = {a:rawName(0), b:rawName(1), sa:total(0), sb:total(1), f:packLine(G), d:ed ? ed.d : new Date().toLocaleDateString("fr-FR"), g:JSON.parse(JSON.stringify(G))};
      const k = ed ? hist.findIndex(y => y.g && y.g.id === ed.id) : -1;
      if (k >= 0) hist[k] = entry; else hist.unshift(entry);
      store(HKEY, hist.slice(0, 50));
      GAMES = GAMES.filter(x => x.id !== G.id); store(LKEY, GAMES); G = null;
      closeModal(); return go("hist:" + Math.max(0, k));
    }
    if (a === "share") {
      const keep = G; if (view.startsWith("hist:") && histG) G = histG;
      const snap = shareData(); G = keep;
      shareImage(snap).catch(() => { $("g-copy").textContent = "Partage impossible sur cet appareil."; });
      return;
    }
    if (a === "copy") {
      const keep = G; if (view.startsWith("hist:") && histG) G = histG; const txt = summaryText(); G = keep;
      const fallback = () => openModal("Résumé de la partie", `<textarea readonly style="width:100%;min-height:200px;font:14px var(--body);padding:10px;border:2px solid var(--line);border-radius:6px">${esc(txt)}</textarea><p class="g-hint">Sélectionne le texte pour le copier.</p>`);
      try { navigator.clipboard.writeText(txt).then(() => { $("g-copy").textContent = "Résumé copié."; }, fallback); } catch (err) { fallback(); }
    }
  });
  function shareData(){
    const a = total(0), b = total(1);
    return {names:[rawName(0), rawName(1)], facs:[0,1].map(p => facOf(G.players[p]) || ""), sc:[a, b],
      rounds:[1,2,3,4].map(r => [roundScore(0, r), roundScore(1, r)]), pack:packLine(G), label:G.label || "",
      date:new Date(G.updated || Date.now()).toLocaleDateString("fr-FR")};
  }
  async function shareImage(D){
    const W = 1080, H = 1350, c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    try { await Promise.all(["700 60px Oswald", "400 30px Bitter", "700 30px Bitter"].map(f => document.fonts.load(f))); } catch (e) {}
    const DISP = "Oswald, 'Arial Narrow', sans-serif", BODY = "Bitter, Georgia, serif";
    const BG = "#6b2119", CREAM = "#f3ead8", GOLD = "#c9a24a", INK = "#1f1a17", MUT = "#7a6f66";
    const txt = (t, X, Y, f, col, al) => { x.font = f; x.fillStyle = col; x.textAlign = al || "center"; x.fillText(t, X, Y); };
    const fit = (t, f, max) => { let s = f.size; do { x.font = `${f.w} ${s}px ${f.fam}`; s -= 2; } while (x.measureText(t).width > max && s > 20); return `${f.w} ${s + 2}px ${f.fam}`; };
    x.fillStyle = "#efe9df"; x.fillRect(0, 0, W, H);
    x.fillStyle = BG; x.fillRect(0, 0, W, 260);
    txt("S", 120, 175, `700 130px ${DISP}`, CREAM); x.fillStyle = GOLD; x.fillRect(88, 198, 64, 10);
    txt("SPEARCOUNTER", 210, 130, `700 64px ${DISP}`, CREAM, "left");
    txt("FEUILLE DE PARTIE · WARHAMMER SPEARHEAD", 212, 185, `400 28px ${DISP}`, GOLD, "left");
    const [a, b] = D.sc, win = a === b ? -1 : a > b ? 0 : 1;
    x.fillStyle = "#fff"; x.beginPath(); x.roundRect(60, 310, W - 120, 560, 28); x.fill();
    txt(win < 0 ? "ÉGALITÉ" : "VICTOIRE DE " + D.names[win].toUpperCase(), W / 2, 395, fit(win < 0 ? "ÉGALITÉ" : "VICTOIRE DE " + D.names[win].toUpperCase(), {w:700, size:52, fam:DISP}, W - 200), win < 0 ? MUT : "#2e7d32");
    [0,1].forEach(p => {
      const X = p ? W * 0.75 : W * 0.25;
      txt(D.names[p], X, 490, fit(D.names[p], {w:700, size:50, fam:BODY}, 400), INK);
      txt(D.facs[p] || "", X, 540, fit(D.facs[p] || "", {w:400, size:30, fam:BODY}, 420), MUT);
      txt(win < 0 ? "Égalité" : win === p ? "Victoire" : "Défaite", X, 590, `700 32px ${BODY}`, win < 0 ? MUT : win === p ? "#2e7d32" : "#c62828");
    });
    txt(`${a}  -  ${b}`, W / 2, 760, `700 170px ${DISP}`, BG);
    txt("points de victoire", W / 2, 830, `400 30px ${BODY}`, MUT);
    // Tableau des rounds
    const top = 920, cw = (W - 120) / 6;
    x.fillStyle = "#fff"; x.beginPath(); x.roundRect(60, top, W - 120, 260, 28); x.fill();
    ["", "R1", "R2", "R3", "R4", "Total"].forEach((h, i) => txt(h, 60 + cw * i + cw / 2, top + 65, `700 32px ${DISP}`, MUT));
    [0,1].forEach(p => {
      const Y = top + 140 + p * 80;
      txt(D.names[p], 60 + cw / 2, Y, fit(D.names[p], {w:700, size:30, fam:BODY}, cw - 16), INK);
      D.rounds.forEach((r, i) => txt(String(r[p]), 60 + cw * (i + 1) + cw / 2, Y, `400 36px ${BODY}`, INK));
      txt(String(D.sc[p]), 60 + cw * 5 + cw / 2, Y, `700 40px ${BODY}`, BG);
    });
    txt(D.pack + (D.label ? " · " + D.label : "") + " · " + D.date, W / 2, 1250, fit(D.pack + (D.label ? " · " + D.label : "") + " · " + D.date, {w:400, size:32, fam:BODY}, W - 120), INK);
    txt("elcounter.github.io/spearhead", W / 2, 1305, `700 30px ${DISP}`, BG);
    const blob = await new Promise(r => c.toBlob(r, "image/png"));
    const name = `SpearCounter-${D.names[0]}-${D.names[1]}.png`.replace(/[^\w.-]+/g, "_");
    const file = new File([blob], name, {type:"image/png"});
    if (navigator.canShare && navigator.canShare({files:[file]})) {
      try { await navigator.share({files:[file], title:"SpearCounter", text:`${D.names[0]} ${a} - ${b} ${D.names[1]}`}); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    const u = URL.createObjectURL(blob), l = document.createElement("a"); l.href = u; l.download = name; document.body.appendChild(l); l.click(); l.remove();
    setTimeout(() => URL.revokeObjectURL(u), 4000);
    $("g-copy").textContent = "Image téléchargée.";
  }
  function summaryText(){
    const L = [`${rawName(0)} ${total(0)} - ${total(1)} ${rawName(1)}`, `${packLine(G)}${G.label ? " · " + G.label : ""}`];
    [0,1].forEach(p => {
      const sh = facOf(G.players[p]);
      L.push("", `${rawName(p)}${sh ? " (" + sh + ")" : ""}`);
      L.push(`Points par round : ${[1,2,3,4].map(r => roundScore(p, r)).join(" / ")}`);
    });
    return L.join("\n");
  }

  window.SC_PARTIE = {
    open(head){ setHead = head; render(false); },
    packName: () => G && G.pack && !view.startsWith("hist:") && view !== "home" ? packOf(G).n : "",
    back(){ if (view.startsWith("hist:")) go("home"); else back(); },
    atHome: () => view === "home",
    scoreLine: () => { const r = /^r(\d)$/.exec(view); return G && r ? `Round ${r[1]} · ${total(0)} - ${total(1)}` : (G ? `${total(0)} - ${total(1)}` : ""); }
  };
})();
