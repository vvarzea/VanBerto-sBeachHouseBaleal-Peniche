/* Modal de detalhes: abrir/fechar, favorito, separadores, aviso de mapa offline */
// --------- MODAL ---------
function abrirModal(cat, item) {
  // Reset botões rápidos (evita "ficar preso" de modais anteriores)
  if (typeof modalActions !== "undefined" && modalActions) modalActions.hidden = true;
  if (typeof btnCall !== "undefined" && btnCall) { btnCall.hidden = true; btnCall.onclick = null; }
  if (typeof btnWhatsapp !== "undefined" && btnWhatsapp) { btnWhatsapp.hidden = true; btnWhatsapp.onclick = null; }

  lastFocusEl = document.activeElement;
  itemAtual = { ...item, cat };
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => { modalCloseBtn?.focus(); }, 0);

  modalTitle.textContent = item.nome;
  modalCategory.textContent = labelCategoria(cat);
  try{
    modalDesc.innerHTML = buildInfoHtml(cat, item);
  }catch(e){
    console.warn(e);
    modalDesc.textContent = desc(item); // fallback simples se buildInfoHtml falhar
  }

  // Dica da Vanda e do Berto
  const _tipBox = document.getElementById("modal-owner-tip");
  const _tipTxt = document.getElementById("modal-owner-tip-text");
  if (_tipBox && _tipTxt) {
    if (item.tipVB) {
      _tipTxt.textContent = item.tipVB;
      _tipBox.style.display = "flex";
    } else {
      _tipBox.style.display = "none";
    }
  }

  // Foto real (se existir)
  const photo = item.img || item.imagem || (imgByCat && imgByCat[cat]) || "";
  if (modalPhoto && photo) {
    modalPhoto.src = photo;
    modalPhoto.alt = item.nome || "";
    modalPhoto.hidden = false;
  } else if (modalPhoto) {
    modalPhoto.removeAttribute('src');
    modalPhoto.alt = "";
    modalPhoto.hidden = true;
  }

  // Botões rápidos (Ligar / WhatsApp)
  if(!isFoodBizCategory(cat)){
    if(modalActions){ modalActions.hidden = true; }
    if(btnCall){ btnCall.hidden = true; btnCall.onclick = null; }
    if(btnWhatsapp){ btnWhatsapp.hidden = true; btnWhatsapp.onclick = null; }
  } else {
    setupQuickActions(item, cat);
  }

  // Evento: mostra/oculta separador e painel
  if (tabEvent) {
    const isEvent = cat === "Eventos";
    tabEvent.style.display = isEvent ? "" : "none";
    const panelEvent = document.getElementById("panel-event");
    if (panelEvent) panelEvent.style.display = isEvent ? "" : "none";
    if (isEvent) fillEventPanel(cat, item);
  }

  const mapMsg = modalMapText.dataset[currentLang] || modalMapText.dataset.en || "";
  modalMapText.textContent = mapMsg;

  // Mini-mapa embutido (iframe) — com aviso quando não há ligação à internet
  if (modalMapIframe) {
    const destino = item.mapa || item.nome;
    const embed = "https://www.google.com/maps?q=" + encodeURIComponent(destino) + "&output=embed";
    modalMapIframe.src = embed;
  }
  atualizarEstadoMapaOffline();

  atualizarFavToggle();
  ativarTab("info");

  modalOpenMapsBtn.textContent = modalOpenMapsBtn.dataset[currentLang] || modalOpenMapsBtn.dataset.en || modalOpenMapsBtn.textContent;
  modalOpenMapsBtn.onclick = () => {
    const destino = item.mapa || item.nome;
    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(destino);
    window.location.href = url;
  };
}

function fecharModal() {
  modal.classList.remove("show");
  
  
  if(modalPhoto){ modalPhoto.hidden = true; modalPhoto.removeAttribute("src"); }
  if(modalActions){ modalActions.hidden = true; }
clearFoodDetails();
modal.setAttribute("aria-hidden", "true");
  itemAtual = null;
  try { lastFocusEl?.focus?.(); } catch (e) { console.warn(e); }
}

function atualizarFavToggle() {
  if (!itemAtual) return;
  const fav = isFav(itemAtual.cat, itemAtual.nome);
  favToggleBtn.textContent = fav ? "★" : "☆";
}

function ativarTab(tabName) {
  tabButtons.forEach(btn => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  tabPanels.forEach(panel =>
    panel.classList.toggle("active", panel.id === "panel-" + tabName)
  );
  if (tabName === "map") atualizarEstadoMapaOffline();
}

// --------- MAPA: aviso quando não há ligação à internet ---------
function atualizarEstadoMapaOffline() {
  const offline = !navigator.onLine;
  if (mapOfflineMsg) mapOfflineMsg.hidden = !offline;
  if (modalMapIframe) modalMapIframe.style.visibility = offline ? "hidden" : "visible";
}

window.addEventListener("online", atualizarEstadoMapaOffline);
window.addEventListener("offline", atualizarEstadoMapaOffline);

if (mapOfflineBtn) {
  mapOfflineBtn.addEventListener("click", () => {
    if (!itemAtual) return;
    const destino = itemAtual.mapa || itemAtual.nome;
    window.location.href =
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(destino);
  });
}

