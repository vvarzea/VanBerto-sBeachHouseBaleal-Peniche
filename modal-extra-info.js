/* Modal: horário e link oficial do local */
/* ==============================
   INFO EXTRA: LINK + HORÁRIO
============================== */

function horarioLabel(){
  const map = { pt:"🕒 Horário", en:"🕒 Opening hours", es:"🕒 Horario", fr:"🕒 Horaires" };
  return map[currentLang] || map.en;
}

function linkLabel(){
  const map = { pt:"🔗 Link oficial", en:"🔗 Official link", es:"🔗 Enlace oficial", fr:"🔗 Lien officiel" };
  return map[currentLang] || map.en;
}

function getHorario(cat, item){
  if(!item) return "";

  // Usa horário definido, se existir
  if(currentLang === "pt" && item.horarioPT) return item.horarioPT;
  if(currentLang !== "pt" && item.horarioEN) return item.horarioEN;

  // Fallback: para sítios onde faz sentido mostrar horários
  const needsHours = ["Restaurantes","Bares","FastFood","Supermercados","Churrasqueiras","Locais","Farmacias"].includes(cat);
  if(needsHours){
    if(currentLang === "pt") return "Consulta o horário no Google Maps (pode variar por época).";
    if(currentLang === "es") return "Consulta el horario en Google Maps (puede variar).";
    if(currentLang === "fr") return "Consulte les horaires sur Google Maps (peuvent varier).";
    return "Check opening hours on Google Maps (may vary).";
  }

  return item.horarioPT || item.horarioEN || "";
}

function buildInfoHtml(cat, item){
  const baseTxt = desc(item);
  const parts = [`${escapeHtml(baseTxt)}`];

  // Horário
  const h = getHorario(cat, item);
  if(h){
    parts.push(`<br><br><strong>${horarioLabel()}</strong><br>${escapeHtml(h)}`);
  }

  // Link oficial
  if(item && item.link){
    const safeUrl = String(item.link);
    parts.push(`<br><br><a class="mini-cal-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel())}</a>`);
  }

  return parts.join("");
}

