/* Secções retráteis da home + checklist de saída com avaliação por estrelas */
/* ==============================
   SECÇÕES RETRÁTEIS (Meteorologia / Informação da Casa / Emergências)
============================== */
(function initCollapsibleHomeSections(){
  const LS_KEY = "vb_collapsed_sections_v1";

  function loadCollapsedState(){
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch { return {}; }
  }

  function saveCollapsedState(state){
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { console.warn(e); }
  }

  function applyState(section, toggleBtn, collapsed){
    section.classList.toggle("is-collapsed", collapsed);
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }

  const state = loadCollapsedState();
  const heads = document.querySelectorAll(".home-meteo-head[data-toggle-section]");

  heads.forEach(head => {
    const id = head.getAttribute("data-toggle-section");
    const section = document.getElementById(id);
    const toggleBtn = head.querySelector(".home-meteo-toggle");
    if (!section) return;

    // Aplica estado guardado (por omissão: fechado)
    const collapsed = state[id] === undefined ? true : !!state[id];
    applyState(section, toggleBtn, collapsed);

    head.addEventListener("click", (ev) => {
      // Evita fechar se o clique foi num link/botão interno com a sua própria ação (ex: copiar WiFi)
      if (ev.target.closest("#wifi-copy-btn")) return;

      const isCollapsed = section.classList.contains("is-collapsed");
      const next = !isCollapsed;
      applyState(section, toggleBtn, next);
      state[id] = next;
      saveCollapsedState(state);
    });
  });
})();



/* ==============================
   ANTES DE SAÍRES: avaliação por estrelas + checklist de saída
============================== */
const LS_KEY_CHECKOUT_CHECKLIST = "vb_checkout_checklist_v1";

// Cola aqui o link "Escrever uma avaliação" da ficha do Google Business do VanBerto's.
// Enquanto ficar vazio, o botão de avaliação no Google não aparece.
const GOOGLE_REVIEW_URL = "";

let checkoutRating = 0;

function loadChecklistState(){
  try {
    const raw = localStorage.getItem(LS_KEY_CHECKOUT_CHECKLIST);
    return raw ? (JSON.parse(raw) || {}) : {};
  } catch { return {}; }
}

function saveChecklistState(state){
  try { localStorage.setItem(LS_KEY_CHECKOUT_CHECKLIST, JSON.stringify(state)); } catch (e) { console.warn(e); }
}

function renderCheckoutChecklist(){
  const list = document.getElementById("checkout-checklist");
  const progressEl = document.getElementById("checkout-checklist-progress");
  const resetBtn = document.getElementById("checkout-checklist-reset");
  const nudgeEl = document.getElementById("checkout-checklist-nudge");
  if (!list) return;

  const T = getHomeI18n();
  const state = loadChecklistState();

  list.innerHTML = T.checklist.map(item => `
    <li>
      <label>
        <input type="checkbox" data-key="${item.key}" ${state[item.key] ? "checked" : ""} />
        <span>${item.label}</span>
      </label>
    </li>
  `).join("");

  const done = T.checklist.filter(item => state[item.key]).length;
  if (progressEl) progressEl.textContent = T.checklistProgress(done, T.checklist.length);
  if (resetBtn) resetBtn.hidden = done === 0;

  // Convite gentil a avaliar assim que a checklist fica completa (só se ainda não avaliou nesta visita)
  if (nudgeEl){
    const showNudge = done === T.checklist.length && checkoutRating < 1;
    nudgeEl.hidden = !showNudge;
    if (showNudge) nudgeEl.textContent = T.checklistAllDoneNudge;
  }

  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => {
      const s = loadChecklistState();
      s[cb.dataset.key] = cb.checked;
      saveChecklistState(s);
      renderCheckoutChecklist();
    });
  });
}

(function initCheckoutSection(){
  const starsWrap = document.getElementById("checkout-stars");
  const sendBtn = document.getElementById("checkout-send-btn");
  const commentEl = document.getElementById("checkout-comment");
  const resetBtn = document.getElementById("checkout-checklist-reset");
  const googleBtn = document.getElementById("checkout-google-btn");

  if (starsWrap){
    const stars = Array.from(starsWrap.querySelectorAll(".checkout-star"));

    function paintStars(value){
      stars.forEach(s => {
        const v = Number(s.dataset.value);
        s.classList.toggle("is-active", v <= value);
        s.textContent = v <= value ? "★" : "☆";
      });
      if (sendBtn) sendBtn.disabled = value < 1;
    }

    stars.forEach(s => {
      s.addEventListener("click", () => {
        checkoutRating = Number(s.dataset.value);
        paintStars(checkoutRating);
        renderCheckoutChecklist(); // esconde o nudge assim que já avaliou
      });
    });
  }

  if (sendBtn){
    sendBtn.addEventListener("click", () => {
      if (checkoutRating < 1) return;
      const T = getHomeI18n();
      const comment = commentEl ? commentEl.value.trim() : "";
      const msg = T.ratingWaMessage(checkoutRating, comment);
      window.open(houseWaLink(msg), "_blank", "noopener,noreferrer");

      // Só sugere o Google depois de enviar, e só para avaliações de 4-5 estrelas
      if (googleBtn && GOOGLE_REVIEW_URL && checkoutRating >= 4){
        googleBtn.hidden = false;
        googleBtn.textContent = getHomeI18n().googleReviewBtn;
      }
    });
  }

  if (googleBtn){
    googleBtn.addEventListener("click", () => {
      if (!GOOGLE_REVIEW_URL) return;
      window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
    });
  }

  if (resetBtn){
    resetBtn.addEventListener("click", () => {
      saveChecklistState({});
      renderCheckoutChecklist();
    });
  }

  // A primeira renderização do checklist acontece via applyHomeSectionsI18n()
  // (chamado mais abaixo, já com HOME_I18N disponível) e sempre que a língua muda.
})();


