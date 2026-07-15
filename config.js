/* Configuração da casa (localização, telefone) + estado global + DOM da instalação PWA/iOS */

function isFoodBizCategory(cat){
  return cat === "Restaurantes" || cat === "Bares" || cat === "FastFood" || cat === "Churrasqueiras" || cat === "Farmacias";
}

// --------- LOCALIZAÇÃO DA CASA ---------
const HOUSE_LOCATION = {
  nome: "VanBerto's Beach House",
  morada: "Rua do Salgado 1, Ferrel, Peniche",
  lat: 39.356494,
  lng: -9.354807
};
function houseMapsUrl(){
  return "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(HOUSE_LOCATION.lat + "," + HOUSE_LOCATION.lng);
}
function houseDirectionsUrl(){
  return "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(HOUSE_LOCATION.lat + "," + HOUSE_LOCATION.lng);
}

// --------- CONTACTO DA CASA (fonte única do número) ---------
const HOUSE_PHONE_INTL = "+351966944973";      // usar sempre este formato para tel:/wa.me
const HOUSE_PHONE_DISPLAY = "966 944 973";     // formato legível para mostrar ao hóspede

function houseWaLink(prefilledText){
  const digits = HOUSE_PHONE_INTL.replace(/[^\d]/g, "");
  const base = "https://wa.me/" + digits;
  return prefilledText ? base + "?text=" + encodeURIComponent(prefilledText) : base;
}

// --------- ESTADO GLOBAL ---------
let currentLang = "pt";
let currentCategory = "tudo";
let searchTerm = "";
let favoritos = new Set(); // "categoria|nome"
let itemAtual = null;      // item aberto no modal
let lastFocusEl = null;

const LS_KEY_FAVS = "vb_favoritos_v1";
const LS_KEY_LANG = "vb_lang_v1";

// --------- ELEMENTOS DOM ---------
const cardsContainer = document.getElementById("cards-container");

// Botão Instalar (PWA)
const installBtn = document.getElementById("btn-install");
const directionsBtn = document.getElementById("directions-btn");
let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBtn) installBtn.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBtn) installBtn.hidden = true;
});

// --------- INSTALAÇÃO NO IOS/SAFARI (não existe beforeinstallprompt) ---------
const iosInstallBanner = document.getElementById("ios-install-banner");
const iosInstallCloseBtn = document.getElementById("ios-install-close");
const LS_KEY_IOS_BANNER_DISMISSED = "vb_ios_banner_dismissed_v1";

function isIosDevice() {
  const ua = navigator.userAgent || "";
  return /iphone|ipad|ipod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // iPadOS 13+
}
function isStandaloneDisplay() {
  return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
    navigator.standalone === true;
}

if (
  iosInstallBanner &&
  isIosDevice() &&
  !isStandaloneDisplay() &&
  localStorage.getItem(LS_KEY_IOS_BANNER_DISMISSED) !== "1"
) {
  iosInstallBanner.hidden = false;
}

if (iosInstallCloseBtn) {
  iosInstallCloseBtn.addEventListener("click", () => {
    if (iosInstallBanner) iosInstallBanner.hidden = true;
    try { localStorage.setItem(LS_KEY_IOS_BANNER_DISMISSED, "1"); } catch (e) { console.warn(e); }
  });
}

if (directionsBtn){
  directionsBtn.href = houseDirectionsUrl();
}

// Contactos: href sempre gerado a partir de HOUSE_PHONE_INTL (fonte única)
const contactBtnEl = document.getElementById("contact-btn");
if (contactBtnEl) contactBtnEl.href = "tel:" + HOUSE_PHONE_INTL;

const whatsappContactBtn = document.getElementById("whatsapp-contact-btn");
if (whatsappContactBtn) whatsappContactBtn.href = houseWaLink();

