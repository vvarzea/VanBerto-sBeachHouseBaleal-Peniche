/* Arranque da app + botão voltar ao topo + partilha de favoritos (link/QR) */
// --------- INICIAL ---------
loadFavoritos();
setLanguage(loadLanguage());
currentCategory = "tudo";
renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }


// --------- VOLTAR AO TOPO ---------
function updateScrollTopVisibility() {
  if (!scrollTopBtn) return;
  const show = window.scrollY > 450;
  scrollTopBtn.classList.toggle("show", show);
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
  updateScrollTopVisibility();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (modal.classList.contains("show")) fecharModal();
    if (qrModal && qrModal.classList.contains("show")) fecharQrModal();
  }
});


// --------- PARTILHAR FAVORITOS (LINK + QR) ---------
function encodeFavState() {
  const payload = {
    v: 1,
    lang: currentLang,
    favs: [...favoritos]
  };
  // base64 url-safe
  const jsonStr = JSON.stringify(payload);
  const b64 = btoa(unescape(encodeURIComponent(jsonStr)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
  return b64;
}

function decodeFavState(b64) {
  try {
    const padded = b64.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((b64.length + 3) % 4);
    const jsonStr = decodeURIComponent(escape(atob(padded)));
    const obj = JSON.parse(jsonStr);
    if (!obj || !Array.isArray(obj.favs)) return null;
    return obj;
  } catch {
    return null;
  }
}

function buildShareLink() {
  const token = encodeFavState();
  const baseUrl = window.location.href.split("#")[0];
  return baseUrl + "#favs=" + token;
}

function abrirQrModal() {
  if (!qrModal) return;
  qrModal.classList.add("show");
  qrModal.setAttribute("aria-hidden", "false");
  setTimeout(() => { qrCloseBtn?.focus(); }, 0);

  const link = buildShareLink();
  if (qrText) qrText.textContent = qrText.textContent || "";
  drawQrToCanvas(link, qrCanvas);

  if (qrCopyBtn) {
    qrCopyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(link);
        qrCopyBtn.textContent = "✅";
        setTimeout(() => atualizarTextosEstaticos(), 900);
      } catch {
        // fallback
        prompt("Copia o link:", link);
      }
    };
  }

  if (qrClearBtn) {
    qrClearBtn.onclick = () => {
      favoritos = new Set();
      saveFavoritos();
      renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
      fecharQrModal();
    };
  }
}

function fecharQrModal() {
  if (!qrModal) return;
  qrModal.classList.remove("show");
  qrModal.setAttribute("aria-hidden", "true");
}

if (shareFavsBtn) shareFavsBtn.addEventListener("click", abrirQrModal);
if (qrCloseBtn) qrCloseBtn.addEventListener("click", fecharQrModal);
if (qrModal) qrModal.addEventListener("click", e => {
  if (e.target.classList.contains("modal-backdrop")) fecharQrModal();
});

maybeImportFromHash();

// Se escolher Eventos, limpa a pesquisa para evitar lista vazia por filtro anterior
if (btnEventos) {
  btnEventos.addEventListener("click", () => {
    if (searchInput && searchInput.value) {
      searchInput.value = "";
      searchTerm = "";
    }
  });
}


