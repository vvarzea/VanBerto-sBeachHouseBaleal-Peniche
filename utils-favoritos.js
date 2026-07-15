/* Utilitárias de texto + favoritos (localStorage) */
// --------- UTILITÁRIAS ---------
function labelCategoria(cat) {
  const labels = {
    pt: {
      Praias: "Praias",
      Locais: "Locais de interesse",
      Supermercados: "Supermercados",
      Restaurantes: "Restaurantes",
      Churrasqueiras: "Churrasqueiras",
      Bares: "Bares",
      FastFood: "Fast-Food",
      Farmacias: "Farmácias",
      Eventos: "Eventos"
    },
    en: {
      Praias: "Beaches",
      Locais: "Places of interest",
      Supermercados: "Supermarkets",
      Restaurantes: "Restaurants",
      Churrasqueiras: "Grill & BBQ",
      Bares: "Bars",
      FastFood: "Fast food",
      Farmacias: "Pharmacies",
      Eventos: "Local events"
    },
    es: {
      Praias: "Playas",
      Locais: "Lugares de interés",
      Supermercados: "Supermercados",
      Restaurantes: "Restaurantes",
      Churrasqueiras: "Parrillas",
      Bares: "Bares",
      FastFood: "Comida rápida",
      Farmacias: "Farmacias",
      Eventos: "Eventos locales"
    },
    fr: {
      Praias: "Plages",
      Locais: "Lieux d’intérêt",
      Supermercados: "Supermarchés",
      Restaurantes: "Restaurants",
      Churrasqueiras: "Grillades",
      Bares: "Bars",
      FastFood: "Fast-food",
      Farmacias: "Pharmacies",
      Eventos: "Événements locaux"
    }
  };

  const lang = labels[currentLang] ? currentLang : "en";
  return labels[lang][cat] || cat;
}

function desc(item) {
  if (currentLang === "pt") return item.descPT || item.descEN || "";
  if (currentLang === "en") return item.descEN || item.descPT || "";
  if (currentLang === "es") return item.descES || item.descEN || item.descPT || "";
  if (currentLang === "fr") return item.descFR || item.descEN || item.descPT || "";
  return item.descEN || item.descPT || "";
}

// --------- FAVORITOS (localStorage) ---------
function loadLanguage() {
  try {
    const saved = localStorage.getItem(LS_KEY_LANG);
    if (saved === "pt" || saved === "en" || saved === "es" || saved === "fr") return saved;
  } catch (e) { console.warn(e); }
  return "pt";
}

function saveLanguage(lang) {
  try { localStorage.setItem(LS_KEY_LANG, lang); } catch (e) { console.warn(e); }
}

function loadFavoritos() {
  try {
    const raw = localStorage.getItem(LS_KEY_FAVS);
    if (!raw) return;
    const arr = JSON.parse(raw);
    favoritos = new Set(arr);
  } catch (e) { console.warn(e); }
}

function saveFavoritos() {
  localStorage.setItem(LS_KEY_FAVS, JSON.stringify([...favoritos]));
}

function favKey(cat, nome) {
  return `${cat}|${nome}`;
}

function isFav(cat, nome) {
  return favoritos.has(favKey(cat, nome));
}

function toggleFav(cat, nome) {
  const key = favKey(cat, nome);
  if (favoritos.has(key)) favoritos.delete(key);
  else favoritos.add(key);
  saveFavoritos();
}

