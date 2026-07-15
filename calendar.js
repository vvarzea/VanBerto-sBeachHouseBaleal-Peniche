/* Mini-calendário de eventos da home */
/* ==============================
   MINI_CALENDAR_UI (homepage)
============================== */

function toISODateLocal(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const da = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${da}`;
}

function monthLabelPT(d){
  const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function monthLabelEN(d){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function monthLabelES(d){
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function monthLabelFR(d){
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getMonthLabel(d){
  if (currentLang === "pt") return monthLabelPT(d);
  if (currentLang === "es") return monthLabelES(d);
  if (currentLang === "fr") return monthLabelFR(d);
  return monthLabelEN(d);
}

function getCalStrings(){
  const map = {
    pt: { title:"📅 Calendário de eventos", pick:"Seleciona um dia para ver eventos.", events:"Eventos", open:"Abrir", add:"Adicionar", none:"Sem eventos para este dia." },
    en: { title:"📅 Events calendar", pick:"Pick a day to see events.", events:"Events", open:"Open", add:"Add", none:"No events on this day." },
    es: { title:"📅 Calendario de eventos", pick:"Elige un día para ver eventos.", events:"Eventos", open:"Abrir", add:"Añadir", none:"Sin eventos este día." },
    fr: { title:"📅 Calendrier des événements", pick:"Choisis un jour pour voir les événements.", events:"Événements", open:"Ouvrir", add:"Ajouter", none:"Aucun événement ce jour-là." }
  };
  return map[currentLang] || map.en;
}

function buildEventsByDate(){
  const out = {};
  (data.Eventos || []).forEach(ev => {
    if(!ev.dataISO) return;
    if(!out[ev.dataISO]) out[ev.dataISO] = [];
    out[ev.dataISO].push(ev);
  });
  return out;
}

function renderMiniCalendar(){
  const grid = document.getElementById("cal-grid");
  const monthEl = document.getElementById("cal-month");
  const listEl = document.getElementById("cal-events-list");
  const titleEl = document.querySelector("#mini-cal .mini-cal-title");
  const eventsTitleEl = document.getElementById("cal-events-title");
  const prevBtn = document.getElementById("cal-prev");
  const nextBtn = document.getElementById("cal-next");

  if(!grid || !monthEl || !listEl || !prevBtn || !nextBtn) return;

  const T = getCalStrings();
  if(titleEl) titleEl.textContent = T.title;
  if(eventsTitleEl) eventsTitleEl.textContent = T.events;

  const eventsByDate = buildEventsByDate();
  const today = new Date();
  let view = window.__CAL_VIEW_DATE || new Date(today.getFullYear(), today.getMonth(), 1);
  window.__CAL_VIEW_DATE = view;

  monthEl.textContent = getMonthLabel(view);

  // Monday-first index: JS getDay(): Sun=0..Sat=6
  const firstDay = new Date(view.getFullYear(), view.getMonth(), 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // Mon=0..Sun=6
  const daysInMonth = new Date(view.getFullYear(), view.getMonth()+1, 0).getDate();

  // Build cells: leading blanks
  const cells = [];
  for(let i=0;i<firstWeekday;i++){
    cells.push({ empty:true });
  }
  for(let day=1; day<=daysInMonth; day++){
    const d = new Date(view.getFullYear(), view.getMonth(), day);
    const iso = toISODateLocal(d);
    cells.push({ empty:false, day, iso, isToday: iso===toISODateLocal(today), hasEvents: !!eventsByDate[iso] });
  }
  // trailing to complete weeks
  while(cells.length % 7 !== 0) cells.push({ empty:true });

  // Selected date
  const selectedISO = window.__CAL_SELECTED_ISO || toISODateLocal(today);
  window.__CAL_SELECTED_ISO = selectedISO;

  grid.innerHTML = "";
  cells.forEach(c => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cal-day";
    if(c.empty){
      btn.classList.add("is-muted");
      btn.disabled = true;
      btn.textContent = "";
    }else{
      btn.textContent = c.day;
      if(c.isToday) btn.classList.add("is-today");
      if(c.iso === selectedISO) btn.classList.add("is-selected");
      if(c.hasEvents){
        const dot = document.createElement("span");
        dot.className = "cal-dot";
        dot.setAttribute("aria-hidden","true");
        btn.appendChild(dot);
      }
      btn.addEventListener("click", () => {
        window.__CAL_SELECTED_ISO = c.iso;
        renderMiniCalendar();
      });
    }
    grid.appendChild(btn);
  });

  function renderList(){
    const evs = eventsByDate[selectedISO] || [];
    if(!evs.length){
      listEl.textContent = T.none;
      return;
    }

    listEl.innerHTML = "";
    evs.forEach(ev => {
      const box = document.createElement("div");
      box.className = "mini-cal-event-item";

      const top = document.createElement("div");
      top.className = "mini-cal-event-top";

      const name = document.createElement("div");
      name.textContent = ev.nome;

      const time = document.createElement("div");
      time.className = "mini-cal-event-time";
      const tA = ev.horaInicio ? ev.horaInicio : "";
      const tB = ev.horaFim ? ("–" + ev.horaFim) : "";
      time.textContent = (tA ? (tA + tB) : "");

      top.appendChild(name);
      top.appendChild(time);

      const d = document.createElement("div");
      d.className = "mini-cal-event-desc";
      d.textContent = desc(ev);

      const actions = document.createElement("div");
      actions.className = "mini-cal-event-actions";

      const openBtn = document.createElement("button");
      openBtn.className = "mini-cal-link";
      openBtn.type = "button";
      openBtn.textContent = "🗺️ " + T.open;
      openBtn.addEventListener("click", () => {
        const destino = ev.mapa || ev.nome;
        window.location.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(destino);
      });

      const addBtn = document.createElement("button");
      addBtn.className = "mini-cal-link";
      addBtn.type = "button";
      addBtn.textContent = "📅 " + T.add;
      addBtn.disabled = !ev.dataISO;
      addBtn.addEventListener("click", () => {
        if(!ev.dataISO) return;
        const start = toICSDateTime(ev.dataISO, ev.horaInicio || "12:00");
        const end = toICSDateTime(ev.dataISO, ev.horaFim || ev.horaInicio || "13:00");
        const ics = makeICS({
          title: ev.nome,
          description: desc(ev),
          location: ev.local || ev.mapa || "",
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
      });

      actions.appendChild(openBtn);
      actions.appendChild(addBtn);

      box.appendChild(top);
      box.appendChild(d);
      box.appendChild(actions);
      listEl.appendChild(box);
    });
  }

  renderList();

  prevBtn.onclick = () => {
    const v = window.__CAL_VIEW_DATE || view;
    window.__CAL_VIEW_DATE = new Date(v.getFullYear(), v.getMonth()-1, 1);
    renderMiniCalendar();
  };
  nextBtn.onclick = () => {
    const v = window.__CAL_VIEW_DATE || view;
    window.__CAL_VIEW_DATE = new Date(v.getFullYear(), v.getMonth()+1, 1);
    renderMiniCalendar();
  };
}

// Inicializa quando o DOM estiver pronto
try{ renderMiniCalendar(); }catch(e){ console.warn(e); }


/* ==============================
   SHOW_CALENDAR_ONLY_IN_EVENTOS
============================== */
function toggleEventsCalendar(show){
  const sec = document.getElementById("events-calendar-section");
  if(!sec) return;
  sec.hidden = !show;
  if(show){
    try{ renderMiniCalendar(); }catch(e){ console.warn(e); }
  }
}




