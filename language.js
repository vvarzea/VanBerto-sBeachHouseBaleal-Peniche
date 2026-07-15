/* Textos estáticos da interface + troca de idioma (PT/EN/ES/FR) */
// --------- LÍNGUA ---------
function atualizarTextosEstaticos() {
  const T = {
    pt: {
      title: "VanBerto's Beach House – Dicas de Peniche",
      brandTitle: 'Peniche – "Capital da Onda e do Surf"',
      tagline: "Guia digital para hóspedes do VanBerto's Beach House",
      h1: "Dicas para aproveitar Peniche",
      subtitle:
        "Escolhe uma categoria, pesquisa por palavra-chave ou abre um local para ver mais detalhes e o percurso no Google Maps.",
      btnMain: "Menus principais",
      btnFavs: "⭐ Favoritos",
      btnPraias: "Praias",
      btnLocais: "Locais de interesse",
      btnSuper: "Supermercados",
      btnFarm: "Farmácias",
      btnRest: "Restaurantes",
      btnChurras: "Churrasqueiras",
      btnBares: "Bares",
      btnEventos: "📅 Eventos",
      btnFast: "Fast-Food",
      btnMapAll: "🗺️ Ver todas as localizações no mapa",
      btnShareFavs: "🔗 Partilhar favoritos (QR)",
      searchPh: "🔍 Procurar por praia, restaurante, pizza, sushi...",
      contact: "📱 " + HOUSE_PHONE_DISPLAY,
      directions: "📍 Como chegar à casa",
      footer1: "📍 VanBerto's Beach House · Baleal · Peniche",
      footer2: "🌊 Guia rápido para aproveitares o melhor da tua estadia",
      tabInfo: "ℹ️ Info",
      tabMap: "🗺️ Mapa",
      mapText: "Pré-visualização do mapa e ligação para abrir o trajeto no Google Maps.",
      mapsBtn: "📍 Abrir no Google Maps",
      qrTitle: "Partilhar favoritos",
      qrText: "A outra pessoa pode abrir este link ou ler o QR para importar os teus favoritos.",
      qrHint: "Dica: isto funciona melhor se estiveres num site (https) ou a usar Live Server.",
      qrCopy: "📋 Copiar link",
      qrClear: "🗑️ Limpar favoritos",
      importAsk: "Encontrámos favoritos no link. Queres importá-los?",
      importYes: "Importar",
      importNo: "Ignorar"
    },
    en: {
      title: "VanBerto's Beach House – Peniche Guide",
      brandTitle: 'Peniche – "Capital of the Waves and Surf"',
      tagline: "Digital guide for guests of VanBerto's Beach House",
      h1: "Tips to enjoy Peniche",
      subtitle:
        "Choose a category, search by keyword or open a place to see more details and the route on Google Maps.",
      btnMain: "Main menus",
      btnFavs: "⭐ Favourites",
      btnPraias: "Beaches",
      btnLocais: "Places of interest",
      btnSuper: "Supermarkets",
      btnFarm: "Pharmacies",
      btnRest: "Restaurants",
      btnChurras: "Grill & BBQ",
      btnBares: "Bars",
      btnEventos: "📅 Events",
      btnFast: "Fast food",
      btnMapAll: "🗺️ View all locations on the map",
      btnShareFavs: "🔗 Share favourites (QR)",
      searchPh: "🔍 Search for beach, restaurant, pizza, sushi...",
      contact: "📱 " + HOUSE_PHONE_DISPLAY,
      directions: "📍 Get directions to the house",
      footer1: "📍 VanBerto's Beach House · Baleal · Peniche",
      footer2: "🌊 Quick guide to enjoy the best of your stay",
      tabInfo: "ℹ️ Info",
      tabMap: "🗺️ Map",
      mapText: "Map preview and a link to open directions in Google Maps.",
      mapsBtn: "📍 Open in Google Maps",
      qrTitle: "Share favourites",
      qrText: "The other person can open this link or scan the QR to import your favourites.",
      qrHint: "Tip: this works best on a hosted site (https) or using Live Server.",
      qrCopy: "📋 Copy link",
      qrClear: "🗑️ Clear favourites",
      importAsk: "We found favourites in the link. Import them?",
      importYes: "Import",
      importNo: "Ignore"
    },
    es: {
      title: "VanBerto's Beach House – Guía de Peniche",
      brandTitle: 'Peniche – "Capital de las Olas y del Surf"',
      tagline: "Guía digital para huéspedes de VanBerto's Beach House",
      h1: "Consejos para disfrutar Peniche",
      subtitle:
        "Elige una categoría, busca por palabra clave o abre un lugar para ver más detalles y la ruta en Google Maps.",
      btnMain: "Menús",
      btnFavs: "⭐ Favoritos",
      btnPraias: "Playas",
      btnLocais: "Lugares de interés",
      btnSuper: "Supermercados",
      btnFarm: "Farmacias",
      btnRest: "Restaurantes",
      btnChurras: "Parrillas",
      btnBares: "Bares",
      btnEventos: "📅 Eventos",
      btnFast: "Comida rápida",
      btnMapAll: "🗺️ Ver todas las ubicaciones en el mapa",
      btnShareFavs: "🔗 Compartir favoritos (QR)",
      searchPh: "🔍 Buscar playa, restaurante, pizza, sushi...",
      contact: "📱 " + HOUSE_PHONE_DISPLAY,
      directions: "📍 Cómo llegar a la casa",
      footer1: "📍 VanBerto's Beach House · Baleal · Peniche",
      footer2: "🌊 Guía rápida para disfrutar tu estancia",
      tabInfo: "ℹ️ Info",
      tabMap: "🗺️ Mapa",
      mapText: "Vista previa del mapa y enlace para abrir la ruta en Google Maps.",
      mapsBtn: "📍 Abrir en Google Maps",
      qrTitle: "Compartir favoritos",
      qrText: "La otra persona puede abrir este enlace o escanear el QR para importar tus favoritos.",
      qrHint: "Consejo: funciona mejor en un sitio (https) o con Live Server.",
      qrCopy: "📋 Copiar enlace",
      qrClear: "🗑️ Borrar favoritos",
      importAsk: "Hemos encontrado favoritos en el enlace. ¿Importarlos?",
      importYes: "Importar",
      importNo: "Ignorar"
    },
    fr: {
      title: "VanBerto's Beach House – Guide de Peniche",
      brandTitle: 'Peniche – "Capitale des vagues et du surf"',
      tagline: "Guide digital pour les hôtes de VanBerto's Beach House",
      h1: "Conseils pour profiter de Peniche",
      subtitle:
        "Choisis une catégorie, cherche par mot-clé ou ouvre un lieu pour voir plus de détails et l’itinéraire sur Google Maps.",
      btnMain: "Menus",
      btnFavs: "⭐ Favoris",
      btnPraias: "Plages",
      btnLocais: "Lieux d’intérêt",
      btnSuper: "Supermarchés",
      btnFarm: "Pharmacies",
      btnRest: "Restaurants",
      btnChurras: "Grillades",
      btnBares: "Bars",
      btnEventos: "📅 Événements",
      btnFast: "Fast-food",
      btnMapAll: "🗺️ Voir toutes les localisations sur la carte",
      btnShareFavs: "🔗 Partager les favoris (QR)",
      searchPh: "🔍 Chercher plage, restaurant, pizza, sushi...",
      contact: "📱 " + HOUSE_PHONE_DISPLAY,
      directions: "📍 Comment venir à la maison",
      footer1: "📍 VanBerto's Beach House · Baleal · Peniche",
      footer2: "🌊 Guide rapide pour profiter de ton séjour",
      tabInfo: "ℹ️ Info",
      tabMap: "🗺️ Carte",
      mapText: "Aperçu de la carte et lien pour ouvrir l’itinéraire dans Google Maps.",
      mapsBtn: "📍 Ouvrir dans Google Maps",
      qrTitle: "Partager les favoris",
      qrText: "L’autre personne peut ouvrir ce lien ou scanner le QR pour importer tes favoris.",
      qrHint: "Astuce : ça marche mieux sur un site (https) ou avec Live Server.",
      qrCopy: "📋 Copier le lien",
      qrClear: "🗑️ Effacer les favoris",
      importAsk: "Nous avons trouvé des favoris dans le lien. Les importer ?",
      importYes: "Importer",
      importNo: "Ignorer"
    }
  };

  const lang = T[currentLang] ? currentLang : "en";
  const t = T[lang];

  document.title = t.title;
  brandTitleEl.textContent = t.brandTitle;
  brandTaglineEl.textContent = t.tagline;
  h1El.textContent = t.h1;
  subtitleEl.textContent = t.subtitle;

  btnMain.textContent = t.btnMain;
  if (btnFavs) btnFavs.textContent = t.btnFavs;
  btnPraias.textContent = t.btnPraias;
  btnLocais.textContent = t.btnLocais;
  btnSuper.textContent = t.btnSuper;
  if (btnFarm) btnFarm.textContent = t.btnFarm;
  btnRest.textContent = t.btnRest;
  btnChurras.textContent = t.btnChurras;
  btnBares.textContent = t.btnBares;
  if (btnEventos) btnEventos.textContent = t.btnEventos;
  btnFast.textContent = t.btnFast;
  btnMapAll.textContent = t.btnMapAll;
  if (shareFavsBtn) shareFavsBtn.textContent = t.btnShareFavs;

  searchInput.placeholder = t.searchPh;
  contactBtn.textContent = t.contact;
  if (directionsBtn) directionsBtn.textContent = t.directions;
  footer1.textContent = t.footer1;
  footer2.textContent = t.footer2;

  tabInfo.textContent = t.tabInfo;
  tabMap.textContent = t.tabMap;

  // Textos do modal (os restantes são preenchidos quando abre)
  if (qrTitle) qrTitle.textContent = t.qrTitle;
  if (qrText) qrText.textContent = t.qrText;
  if (qrHint) qrHint.textContent = t.qrHint;
  if (qrCopyBtn) qrCopyBtn.textContent = t.qrCopy;
  if (qrClearBtn) qrClearBtn.textContent = t.qrClear;

  // Ajusta texto do mapa (usado no abrirModal)
  modalMapText.dataset.pt = T.pt.mapText;
  modalMapText.dataset.en = T.en.mapText;
  modalMapText.dataset.es = T.es.mapText;
  modalMapText.dataset.fr = T.fr.mapText;

  modalOpenMapsBtn.dataset.pt = T.pt.mapsBtn;
  modalOpenMapsBtn.dataset.en = T.en.mapsBtn;
  modalOpenMapsBtn.dataset.es = T.es.mapsBtn;
  modalOpenMapsBtn.dataset.fr = T.fr.mapsBtn;

  // Guardar strings para import
  window.__IMPORT_T = {
    ask: t.importAsk,
    yes: t.importYes,
    no: t.importNo
  };
}

function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  langButtons.forEach(btn =>
    btn.classList.toggle("active", btn.dataset.lang === lang)
  );
  atualizarTextosEstaticos();
  try{ applyHomeSectionsI18n(); }catch(e){ console.warn(e); }
  renderAtual();
  try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
  try{ renderMiniCalendar(); }catch(e){ console.warn(e); } // re-render do mini-calendário no novo idioma
}

