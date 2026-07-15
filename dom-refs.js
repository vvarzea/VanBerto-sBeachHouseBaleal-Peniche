/* WiFi da casa + referências DOM (modal, filtros) + ícones e imagens por categoria */
// --------- WiFi DA CASA (fonte única) ---------
const HOUSE_WIFI = {
  ssid: "VanBerto's",
  pass: "VanBertos2026"
};

// --------- WiFi: copiar password ---------
const wifiSsidEl = document.getElementById("wifi-ssid");
const wifiCopyBtn = document.getElementById("wifi-copy-btn");
const wifiPassEl = document.getElementById("wifi-pass");
if (wifiSsidEl) wifiSsidEl.textContent = HOUSE_WIFI.ssid;
if (wifiPassEl) wifiPassEl.textContent = HOUSE_WIFI.pass;
if (wifiCopyBtn && wifiPassEl){
  wifiCopyBtn.addEventListener("click", async () => {
    const pass = wifiPassEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(pass);
    } catch {
      // fallback para browsers/contextos sem Clipboard API (ex: http sem https)
      const tmp = document.createElement("textarea");
      tmp.value = pass;
      document.body.appendChild(tmp);
      tmp.select();
      try { document.execCommand("copy"); } catch (e) { console.warn(e); }
      document.body.removeChild(tmp);
    }
    const T = getHomeI18n();
    wifiCopyBtn.dataset.justCopied = "1";
    wifiCopyBtn.textContent = T.wifiCopied;
    setTimeout(() => {
      delete wifiCopyBtn.dataset.justCopied;
      wifiCopyBtn.textContent = getHomeI18n().wifiCopyBtn;
    }, 1800);
  });
}

if (installBtn){
  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch (e) { console.warn(e); }
    deferredInstallPrompt = null;
    installBtn.hidden = true;
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const langButtons = document.querySelectorAll(".lang-btn");
const searchInput = document.getElementById("search-input");
const scrollTopBtn = document.getElementById("scroll-top");
const shareFavsBtn = document.getElementById("btn-share-favs");

// Modal
const modal = document.getElementById("detail-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDesc = document.getElementById("modal-desc");


const modalPhoto = document.getElementById("modal-photo");
const modalActions = document.getElementById("modal-actions");
const btnCall = document.getElementById("btn-call");
const btnWhatsapp = document.getElementById("btn-whatsapp");
const modalDetails = document.getElementById("modal-details");
const modalMapText = document.getElementById("modal-map-text");
const modalOpenMapsBtn = document.getElementById("modal-open-maps");
const modalMapIframe = document.getElementById("modal-map-iframe");
const mapOfflineMsg = document.getElementById("map-offline-msg");
const mapOfflineBtn = document.getElementById("map-offline-btn");
const favToggleBtn = document.getElementById("fav-toggle");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// QR Modal
const qrModal = document.getElementById("qr-modal");
const qrCloseBtn = document.getElementById("qr-close-btn");
const qrTitle = document.getElementById("qr-title");
const qrText = document.getElementById("qr-text");
const qrHint = document.getElementById("qr-hint");
const qrCanvas = document.getElementById("qr-canvas");
const qrCopyBtn = document.getElementById("qr-copy");
const qrClearBtn = document.getElementById("qr-clear");


// Outros textos estáticos
const brandTitleEl = document.getElementById("brand-title");
const brandTaglineEl = document.getElementById("brand-tagline");
const h1El = document.getElementById("main-heading");
const subtitleEl = document.getElementById("subtitle");
const btnMain = document.getElementById("btn-cat-main");
const btnFavs = document.getElementById("btn-cat-favs");
const btnPraias = document.getElementById("btn-cat-praias");
const btnLocais = document.getElementById("btn-cat-locais");
const btnSuper = document.getElementById("btn-cat-super");
const btnFarm = document.getElementById("btn-cat-farm");
const btnRest = document.getElementById("btn-cat-rest");
const btnChurras = document.getElementById("btn-cat-churras");
const btnBares = document.getElementById("btn-cat-bares");
const btnEventos = document.getElementById("btn-cat-eventos");
const btnFast = document.getElementById("btn-cat-fast");
const btnMapAll = document.getElementById("btn-map-all");
const contactBtn = document.getElementById("contact-btn");
const footer1 = document.getElementById("footer-line1");
const footer2 = document.getElementById("footer-line2");
const tabInfo = document.getElementById("tab-info");
const tabPhotos = document.getElementById("tab-photos");
const tabMap = document.getElementById("tab-map");
const tabEvent = document.getElementById("tab-event");
const eventDateEl = document.getElementById("event-date");
const eventMetaEl = document.getElementById("event-meta");
const eventAddCalBtn = document.getElementById("event-add-calendar");
const eventCopyBtn = document.getElementById("event-copy");
const eventNoteEl = document.getElementById("event-note");

// Ícones por categoria (SVG inline)
const iconByCat = {
  Praias:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 18c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1" />
      <path d="M3 21c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1" />
      <path d="M8 13c0-4 3-7 7-7" />
      <path d="M14 6c2 1 3 3 3 5" />
    </svg>`,
  Locais:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11z"/>
      <circle cx="12" cy="10" r="2.5"/>
    </svg>`,
  Supermercados:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 6h15l-1.5 8.5H7.5L6 6z"/>
      <path d="M6 6 5 3H2"/>
      <circle cx="9" cy="20" r="1.5"/>
      <circle cx="18" cy="20" r="1.5"/>
    </svg>`,
  Restaurantes:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 3v7a3 3 0 0 0 3 3v8" />
      <path d="M7 3v7" />
      <path d="M11 3v7a3 3 0 0 1-3 3" />
      <path d="M14 3v10a4 4 0 0 0 4 4h2" />
      <path d="M18 3v6" />
    </svg>`,
  Churrasqueiras:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2c2 2 3 4 1.5 6S10 11 12 14c2-2 4-3 5-6 1-3-1-5-5-6z"/>
      <path d="M6 22c2-3 4-5 6-6 2 1 4 3 6 6"/>
    </svg>`,
  Bares:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 3h14l-3 8v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9L5 3z"/>
      <path d="M8 11h8"/>
    </svg>`,
  FastFood:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 10c0-3 3-5 7-5s7 2 7 5"/>
      <path d="M4 13h16"/>
      <path d="M6 18h12"/>
    </svg>`,
  Farmacias:
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <path d="M12 8v8"/>
      <path d="M8 12h8"/>
    </svg>`
};


// Imagens por categoria (URLs genéricas mas reais)


// Imagem "offline" por categoria (SVG embutido) — fica bonito e funciona sem fotos
const imgByCat = {
  Praias: svgDataUri("Praias", "#0ea5e9", "#22c55e", "🏖️"),
  Locais: svgDataUri("Locais", "#a855f7", "#22d3ee", "📌"),
  Supermercados: svgDataUri("Supermercados", "#22c55e", "#bef264", "🛒"),
  Restaurantes: svgDataUri("Restaurantes", "#fb923c", "#ec4899", "🍽️"),
  Churrasqueiras: svgDataUri("Churrasqueiras", "#f97316", "#b91c1c", "🔥"),
  Bares: svgDataUri("Bares", "#0ea5e9", "#6366f1", "🍹"),
  FastFood: svgDataUri("Fast food", "#ec4899", "#facc15", "🍔"),
  Farmacias: svgDataUri("Farmácias", "#22c55e", "#0ea5e9", "💊"),
  Eventos: svgDataUri("Eventos", "#22c55e", "#0ea5e9", "📅")
};

function svgDataUri(title, c1, c2, emoji) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="rgba(0,0,0,0.35)"/>
      </filter>
    </defs>
    <rect width="800" height="420" rx="36" fill="url(#g)"/>
    <circle cx="660" cy="120" r="90" fill="rgba(255,255,255,0.22)"/>
    <circle cx="120" cy="320" r="140" fill="rgba(255,255,255,0.12)"/>
    <text x="58" y="130" font-size="78" font-family="Poppins, Arial, sans-serif" font-weight="800" fill="rgba(255,255,255,0.95)" filter="url(#s)">${emoji}</text>
    <text x="170" y="130" font-size="48" font-family="Poppins, Arial, sans-serif" font-weight="800" fill="rgba(255,255,255,0.95)" filter="url(#s)">${escapeXml(title)}</text>
    <text x="150" y="185" font-size="22" font-family="Poppins, Arial, sans-serif" font-weight="600" fill="rgba(255,255,255,0.88)">VanBerto's Beach House • Baleal</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg.trim());
}

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, ch => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;", "'":"&apos;", '"':"&quot;" }[ch]));
}


