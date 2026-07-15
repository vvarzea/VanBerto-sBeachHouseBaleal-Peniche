/* Mapa com todas as localizações + pesquisa com debounce */
// --------- MAPA COM TODAS AS LOCALIZAÇÕES ---------
function abrirTodasNoMapa() {
  const todos = [];
  Object.values(data).forEach(lista => {
    lista.forEach(item => {
      if (item.mapa) todos.push(item.mapa);
    });
  });

  const waypoints = todos.map(encodeURIComponent).join("|");
  const destino = encodeURIComponent(HOUSE_LOCATION.lat + "," + HOUSE_LOCATION.lng);
  const url =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    destino +
    "&waypoints=" +
    waypoints;

  window.location.href = url;
}

// --------- EVENTOS ---------
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    currentCategory = btn.dataset.category;
    renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
  });
});

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

let searchDebounceTimer = null;
searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    searchTerm = searchInput.value;
    renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
  }, 200);
});

document
  .getElementById("btn-map-all")
  .addEventListener("click", abrirTodasNoMapa);

modalCloseBtn.addEventListener("click", fecharModal);
modal.addEventListener("click", e => {
  if (e.target.classList.contains("modal-backdrop")) fecharModal();
});

favToggleBtn.addEventListener("click", () => {
  if (!itemAtual) return;
  toggleFav(itemAtual.cat, itemAtual.nome);
  atualizarFavToggle();
  renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
});

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    ativarTab(btn.dataset.tab);
  });
});


