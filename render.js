/* Renderização de cards, filtros de pesquisa, eventos e ações rápidas (ligar/WhatsApp) */
// --------- RENDER ---------
function passaFiltroPesquisa(item) {
  if (!searchTerm.trim()) return true;
  const termo = searchTerm.toLowerCase();
  return (
    (item.nome || "").toLowerCase().includes(termo) ||
    (item.descPT || "").toLowerCase().includes(termo) ||
    (item.descEN || "").toLowerCase().includes(termo) ||
    (item.descES || "").toLowerCase().includes(termo) ||
    (item.descFR || "").toLowerCase().includes(termo) ||
    (item.tipVB || "").toLowerCase().includes(termo)
  );
}

function gerarCategoriasPrincipais() {
  cardsContainer.innerHTML = "";
  Object.keys(data).forEach(cat => {
    const label = labelCategoria(cat);
    const icon = iconByCat[cat] || "📍";
    const texto = getHomeI18n().tapToSeeAll(label);

    const card = document.createElement("article");
    card.className = "card";
    card.dataset.cat = cat;

    const img = imgByCat[cat];
    card.innerHTML = `
      <img class="card-img" src="${img}" alt="${label}" loading="lazy" />
      <div class="card-header">
        <div class="card-title"><span class="card-ico">${icon}</span><span>${label}</span></div>
      </div>
      <div class="card-desc">${texto}</div>
      <div class="card-footer">
        <span class="card-meta">${getHomeI18n().vanBertoSuggestions}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      document.querySelector(`.filter-btn[data-category="${cat}"]`)?.click();
    });

    cardsContainer.appendChild(card);
  });
}



// ===== Eventos: cards mostram só o que é local/relevante (calendário pode ter tudo) =====
function isEventoParaCards(item){
  if(!item) return false;

  const nome = (item.nome || "").toLowerCase();
  const descpt = (item.descPT || "").toLowerCase();

  // Exclui feriados nacionais nos cards
  const isFeriadoNacional = descpt.includes("feriado nacional") || nome.includes("feriado:") || nome.startsWith("🇵🇹");

  if(isFeriadoNacional) return false;

  // Mantém eventos realmente locais/úteis
  const keep = [
    "boa viagem", "baleal offshore beats", "santo estêvão", "santo estevao",
    "município", "municipio", "peniche", "baleal", "supertubos", "wsl", "feira", "mercado"
  ];
  const isLocal = keep.some(k => nome.includes(k) || descpt.includes(k));

  // Se tiver data e for claramente local, mostra
  if(item.dataISO && isLocal) return true;

  // Se não tiver data, ainda pode ser local (festival anual)
  if(isLocal) return true;

  return false;
}

function gerarCardsDeCategoria(cat) {
  cardsContainer.innerHTML = "";
  const lista = data[cat] || [];
  const labelCat = labelCategoria(cat);
  const icon = iconByCat[cat] || "📍";

  lista
    .filter(passaFiltroPesquisa)
    .filter(item => (cat === "Eventos" ? isEventoParaCards(item) : true))
    .forEach(item => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.cat = cat;

      const fav = isFav(cat, item.nome);
      const descText = desc(item);

      const img = item.img || imgByCat[cat];
      card.innerHTML = `
        <img class="card-img" src="${img}" alt="${item.nome}" loading="lazy" />
        <div class="card-header">
          <div class="card-title"><span class="card-ico">${icon}</span><span>${item.nome}</span></div>
        </div>
        <div class="card-category">${labelCat}</div>
        <div class="card-desc">${descText}</div>
        <div class="card-footer">
          <span class="card-meta">${getHomeI18n().tapForDetails}</span>
          <button class="fav-btn" aria-label="Favorito">${fav ? "★" : "☆"}</button>
        </div>
      `;

      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", ev => {
        ev.stopPropagation();
        toggleFav(cat, item.nome);
        favBtn.textContent = isFav(cat, item.nome) ? "★" : "☆";
        if (itemAtual && itemAtual.nome === item.nome && itemAtual.cat === cat) {
          atualizarFavToggle();
        }
      });

      card.addEventListener("click", () => abrirModal(cat, item));

      cardsContainer.appendChild(card);
    });

  if (!cardsContainer.children.length) {
    const msg = document.createElement("p");
    msg.style.color = "#9ca3af";
    msg.style.fontSize = "13px";
    msg.textContent = getHomeI18n().noResults;
    cardsContainer.appendChild(msg);
  }
}


function gerarFavoritos() {
  cardsContainer.innerHTML = "";
  const itens = [];
  Object.keys(data).forEach(cat => {
    (data[cat] || []).forEach(item => {
      if (isFav(cat, item.nome)) itens.push({ cat, item });
    });
  });

  if (!itens.length) {
    const msg = document.createElement("p");
    msg.style.color = "#9ca3af";
    msg.style.fontSize = "13px";
    msg.textContent =
      currentLang === "pt"
        ? "Ainda não adicionaste favoritos. Toca numa estrela para guardares locais."
        : "No favourites yet. Tap a star to save places.";
    cardsContainer.appendChild(msg);
    return;
  }

  // Mantém a pesquisa a funcionar também nos favoritos
  itens
    .filter(({ item }) => passaFiltroPesquisa(item))
    .forEach(({ cat, item }) => {
      const labelCat = labelCategoria(cat);
      const icon = iconByCat[cat] || "📍";

      const card = document.createElement("article");
      card.className = "card";
      card.dataset.cat = cat;

      const descText = desc(item);

      const img = item.img || imgByCat[cat];
      card.innerHTML = `
        <img class="card-img" src="${img}" alt="${item.nome}" loading="lazy" />
        <div class="card-header">
          <div class="card-title"><span class="card-ico">${icon}</span><span>${item.nome}</span></div>
        </div>
        <div class="card-category">${labelCat}</div>
        <div class="card-desc">${descText}</div>
        <div class="card-footer">
          <span class="card-meta">${getHomeI18n().tapForDetails}</span>
          <button class="fav-btn" aria-label="Favorito">★</button>
        </div>
      `;

      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", ev => {
        ev.stopPropagation();
        toggleFav(cat, item.nome);
        // Se removeu, re-renderiza para tirar da lista
        renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
        if (itemAtual && itemAtual.nome === item.nome && itemAtual.cat === cat) {
          atualizarFavToggle();
        }
      });

      card.addEventListener("click", () => abrirModal(cat, item));

      cardsContainer.appendChild(card);
    });
}

function renderAtual() {
  // Transição suave ao trocar de vista
  cardsContainer.classList.add("fade-out");
  window.requestAnimationFrame(() => {
    if (currentCategory === "tudo") gerarCategoriasPrincipais();
    else if (currentCategory === "favoritos") gerarFavoritos();
    else gerarCardsDeCategoria(currentCategory);

    toggleEventsCalendar(currentCategory === "Eventos");

    window.requestAnimationFrame(() => {
      cardsContainer.classList.remove("fade-out");
    });
  });
}


function formatEventDate(item){
  // item.dataISO: YYYY-MM-DD, item.horaInicio: HH:MM, item.horaFim: HH:MM
  if (!item.dataISO) return null;
  const dateStr = item.dataISO;
  const timeA = item.horaInicio ? item.horaInicio : "";
  const timeB = item.horaFim ? ("–" + item.horaFim) : "";
  return `${dateStr}${timeA ? " · " + timeA + timeB : ""}`;
}

function makeICS({ title, description, location, startISO, endISO }){
  // startISO/endISO: YYYYMMDDTHHMMSSZ
  const uid = `${Date.now()}-${Math.random().toString(16).slice(2)}@vanbertos`;
  const dtstamp = new Date().toISOString().replace(/[-:]/g,"").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//VanBerto's//Peniche Guide//PT",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${startISO}`,
    `DTEND:${endISO}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description || "")}`,
    `LOCATION:${escapeICS(location || "")}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ];
  return lines.join("\r\n");
}

function escapeICS(s){
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
    .replace(/:/g, "\\:");
}

function toICSDateTime(dateISO, timeHHMM){
  // dateISO YYYY-MM-DD; timeHHMM HH:MM (local) -> create UTC-ish without tz conversions (good enough for simple use)
  const [y,m,d] = dateISO.split("-").map(Number);
  const [hh,mm] = (timeHHMM || "12:00").split(":").map(Number);
  const dt = new Date(Date.UTC(y, m-1, d, hh, mm, 0));
  return dt.toISOString().replace(/[-:]/g,"").split(".")[0] + "Z";
}

function fillEventPanel(cat, item){
  if (!eventDateEl || !eventMetaEl || !eventAddCalBtn || !eventCopyBtn || !eventNoteEl) return;

  const t = (function(){
    // tenta ir buscar strings do dicionário já usado
    const map = {
      pt: { add:"📅 Adicionar ao calendário", copy:"📋 Copiar detalhes", noDate:"Este evento não tem data definida. Confirma no próprio dia.", offlineMap:"O mini-mapa pode não aparecer offline. Usa o botão para abrir no Maps quando tiveres rede." },
      en: { add:"📅 Add to calendar", copy:"📋 Copy details", noDate:"This event has no fixed date. Please confirm on the day.", offlineMap:"The mini-map may not load offline. Use the button to open Maps when online." },
      es: { add:"📅 Añadir al calendario", copy:"📋 Copiar detalles", noDate:"Este evento no tiene fecha fija. Confirma el mismo día.", offlineMap:"El mini-mapa puede no cargarse offline. Usa el botón para abrir Maps cuando tengas internet." },
      fr: { add:"📅 Ajouter au calendrier", copy:"📋 Copier les détails", noDate:"Cet événement n’a pas de date fixe. Vérifie le jour même.", offlineMap:"La mini-carte peut ne pas charger hors ligne. Utilise le bouton pour ouvrir Maps quand tu es en ligne." }
    };
    return map[currentLang] || map.en;
  })();

  eventAddCalBtn.textContent = t.add;
  eventCopyBtn.textContent = t.copy;

  const d = formatEventDate(item);
  eventDateEl.textContent = d || "";
  const loc = item.local || (item.mapa || "");
  eventMetaEl.textContent = loc ? `📍 ${loc}` : "";

  // Nota: se não houver data fixa, mostrar aviso
  eventNoteEl.textContent = d ? t.offlineMap : t.noDate;

  eventCopyBtn.onclick = async () => {
    const txt = `${item.nome}\n${desc(item)}\n${loc ? "Local: " + loc + "\n" : ""}${d ? "Data: " + d : ""}`;
    try {
      await navigator.clipboard.writeText(txt);
      eventCopyBtn.textContent = "✅";
      setTimeout(() => { eventCopyBtn.textContent = t.copy; }, 900);
    } catch {
      prompt("Copiar:", txt);
    }
  };

  eventAddCalBtn.onclick = () => {
    // se não houver data, não gera calendário
    if (!item.dataISO) return;
    const start = toICSDateTime(item.dataISO, item.horaInicio || "12:00");
    const end = toICSDateTime(item.dataISO, item.horaFim || item.horaInicio || "13:00");
    const ics = makeICS({
      title: item.nome,
      description: desc(item),
      location: loc,
      startISO: start,
      endISO: end
    });
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "evento.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
}



function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function isFoodCategory(cat){
  // categorias com detalhes (comidas e bebidas)
  return cat === "Restaurantes" || cat === "Bares" || cat === "FastFood" || cat === "Churrasqueiras";
}

function clearFoodDetails(){
  if(!modalDetails) return;
  modalDetails.innerHTML = "";
  modalDetails.hidden = true;
}


function smartFoodTip(item){
  const txt = ((item.nome || "") + " " + (item.descPT || "") + " " + (item.descEN || "")).toLowerCase();

  const tips = {
    pt: {
      peixe: "Pergunta pelo peixe do dia e pelo que está mais fresco.",
      marisco: "Se gostas de marisco, pergunta o que está disponível no dia.",
      grelhado: "Para grelhados, pede recomendações do staff (ponto e acompanhamentos).",
      tradicional: "Pede o prato do dia — costuma ser a melhor escolha.",
      pizza: "Em horas de pico, é melhor reservar ou chegar cedo.",
      sushi: "Se fores em grupo, pergunta por menus/combos para partilhar.",
      vegetariano: "Pergunta por opções vegetarianas e acompanhamentos.",
      sobremesa: "Guarda espaço para a sobremesa da casa.",
      bar: "Confirma se há petiscos e se existe música ao vivo em certos dias.",
      default: "Pergunta pela especialidade da casa e pelo prato do dia."
    },
    en: {
      peixe: "Ask for the catch of the day and what’s freshest.",
      marisco: "If you like seafood, ask what’s available today.",
      grelhado: "For grilled dishes, ask the staff for their recommendations.",
      tradicional: "Ask for the dish of the day — often the best pick.",
      pizza: "At peak hours, it’s better to book or arrive early.",
      sushi: "For groups, ask for sharing menus/combos.",
      vegetariano: "Ask for vegetarian options and sides.",
      sobremesa: "Save room for the house dessert.",
      bar: "Check if they serve snacks and whether there’s live music on some days.",
      default: "Ask for the house specialty and the dish of the day."
    },
    es: {
      peixe: "Pregunta por el pescado del día y lo más fresco.",
      marisco: "Si te gusta el marisco, pregunta qué hay hoy.",
      grelhado: "Para platos a la parrilla, pide recomendaciones.",
      tradicional: "Pregunta por el plato del día — suele ser la mejor opción.",
      pizza: "En horas punta, mejor reservar o ir temprano.",
      sushi: "Para grupos, pregunta por menús/combos para compartir.",
      vegetariano: "Pregunta por opciones vegetarianas.",
      sobremesa: "Deja sitio para el postre de la casa.",
      bar: "Confirma si hay tapas y si hay música en directo algunos días.",
      default: "Pregunta por la especialidad de la casa y el plato del día."
    },
    fr: {
      peixe: "Demande le poisson du jour et ce qui est le plus frais.",
      marisco: "Si tu aimes les fruits de mer, demande ce qu’il y a aujourd’hui.",
      grelhado: "Pour les grillades, demande les conseils du personnel.",
      tradicional: "Demande le plat du jour — souvent le meilleur choix.",
      pizza: "Aux heures de pointe, mieux vaut réserver ou arriver tôt.",
      sushi: "Pour les groupes, demande des menus/combos à partager.",
      vegetariano: "Demande des options végétariennes.",
      sobremesa: "Garde de la place pour le dessert maison.",
      bar: "Vérifie s’il y a des snacks et de la musique live certains jours.",
      default: "Demande la spécialité de la maison et le plat du jour."
    }
  };

  const t = tips[currentLang] || tips.en;

  if (txt.includes("bar") || txt.includes("cocktail") || txt.includes("cerveja") || txt.includes("beer")) return t.bar;
  if (txt.includes("marisco") || txt.includes("seafood") || txt.includes("fruits de mer")) return t.marisco;
  if (txt.includes("peixe") || txt.includes("fish")) return t.peixe;
  if (txt.includes("grelh") || txt.includes("grill")) return t.grelhado;
  if (txt.includes("tradicion") || txt.includes("traditional") || txt.includes("caseir")) return t.tradicional;
  if (txt.includes("pizza")) return t.pizza;
  if (txt.includes("sushi")) return t.sushi;
  if (txt.includes("vegetar")) return t.vegetariano;
  if (txt.includes("sobremesa") || txt.includes("dessert")) return t.sobremesa;

  return t.default;
}

function renderFoodDetails(item){
  if(!modalDetails) return;

  const L = {
    pt: { horario:"Horário", preco:"Preço", tipo:"Tipo", reservas:"Reservas", takeaway:"Take-away", dica:"Dica" },
    en: { horario:"Hours", preco:"Price", tipo:"Type", reservas:"Bookings", takeaway:"Takeaway", dica:"Tip" },
    es: { horario:"Horario", preco:"Precio", tipo:"Tipo", reservas:"Reservas", takeaway:"Para llevar", dica:"Consejo" },
    fr: { horario:"Horaires", preco:"Prix", tipo:"Type", reservas:"Réservation", takeaway:"À emporter", dica:"Astuce" }
  };
  const l = L[currentLang] || L.en;

  // defaults leves (sem inventar factos específicos)
  const Tdef = getHomeI18n();
  const horario = item.horario || Tdef.defaultHorario;
  const preco = item.preco || "€€";
  const tipo = item.tipoComida || item.tipo || Tdef.defaultTipo;
  const reservas = item.reservas || Tdef.defaultReservas;
  const takeaway = item.takeaway || Tdef.defaultTakeaway;
  const dica = item.dica || smartFoodTip(item);

  const chips = [
    { ico:"⏰", k:l.horario, v:horario },
    { ico:"💶", k:l.preco, v:preco },
    { ico:"🍽️", k:l.tipo, v:tipo },
    { ico:"📌", k:l.reservas, v:reservas },
    { ico:"🥡", k:l.takeaway, v:takeaway },
    { ico:"⭐", k:l.dica, v:dica }
  ];

  modalDetails.innerHTML = chips.map(c => `
    <div class="detail-chip">
      <div class="detail-ico" aria-hidden="true">${c.ico}</div>
      <div class="detail-txt">
        <div class="detail-k">${c.k}</div>
        <div class="detail-v">${escapeHtml(c.v)}</div>
      </div>
    </div>
  `).join("");

  modalDetails.hidden = false;
}



function normalizePhone(raw){
  if(!raw) return "";
  const s = String(raw).trim();
  const digits = s.replace(/[^\d+]/g,"");
  // keep + if first char is +
  if(digits.startsWith("+")) return digits;
  // if it already looks like country code (11+ digits), keep
  const only = digits.replace(/[^\d]/g,"");
  if(only.length >= 11) return "+" + only;
  // PT heuristic: 9 digits -> +351
  if(only.length === 9) return "+351" + only;
  return "+" + only;
}

function waLinkFromPhone(raw){
  const p = normalizePhone(raw);
  const digits = p.replace(/[^\d]/g,"");
  if(!digits) return "";
  return "https://wa.me/" + digits;
}



function setupQuickActions(item, cat){
  if(!isFoodBizCategory(cat)){
    if(modalActions) modalActions.hidden = true;
    if(btnCall){ btnCall.hidden = true; btnCall.onclick = null; }
    if(btnWhatsapp){ btnWhatsapp.hidden = true; btnWhatsapp.onclick = null; }
    return;
  }
  if(!modalActions || !btnCall || !btnWhatsapp) return;

  const phone = item.telefone || item.tel || item.phone || "";
  const wa = item.whatsapp || phone;

  // Ligar
  if(phone){
    btnCall.hidden = false;
    btnCall.textContent = getHomeI18n().callBtn;
    btnCall.onclick = () => {
      const p = normalizePhone(phone);
      const digits = p.replace(/[^\d]/g,"");
      if(digits) window.location.href = "tel:" + digits;
    };
  } else {
    // fallback útil: abre o local no Google Maps para ver contacto
    btnCall.hidden = false;
    btnCall.textContent = getHomeI18n().callBtnGoogle;
    btnCall.onclick = () => window.open(mapsSearchUrl(item), "_blank", "noopener");
  }

  // WhatsApp
  const waUrl = waLinkFromPhone(wa);
  if(waUrl){
    btnWhatsapp.hidden = false;
    btnWhatsapp.onclick = () => window.open(waUrl, "_blank", "noopener");
  } else {
    btnWhatsapp.hidden = true;
    btnWhatsapp.onclick = null;
  }

  // mostrar/esconder container
  modalActions.hidden = (btnCall.hidden && btnWhatsapp.hidden);
}



function autoPhotoUrl(cat, item){
  // NOTA: o serviço "Unsplash Source" (source.unsplash.com) foi descontinuado
  // pela Unsplash em 2021 e já não responde (dá erro). Por isso deixámos de o usar.
  // Em vez disso, quando um local não tem item.img próprio, usamos o
  // placeholder SVG local (imgByCat) — que é 100% offline e sempre funciona.
  return (imgByCat && imgByCat[cat]) || imgByCat.Locais;
}



function mapsSearchUrl(item){
  const q = item && (item.mapsQuery || item.mapa || item.nome) ? (item.mapsQuery || item.mapa || item.nome) : "";
  if(!q) return "https://www.google.com/maps";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
}


