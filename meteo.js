/* Meteorologia e estado do mar/surf (Peniche & Baleal) */
/* ==============================
   🌤️ METEOROLOGIA PENICHE/BALEAL
============================== */

const meteoBox = document.getElementById("meteo-info");

function weatherCodePT(code){
  const map = getHomeI18n().weatherCodes || {};
  return map[code] || "—";
}

async function carregarMeteo(){
  if(!meteoBox) return;

  try{
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=39.355&longitude=-9.381&current=temperature_2m,wind_speed_10m,weather_code&timezone=Europe%2FLisbon"
    );

    const data = await res.json();
    const c = data.current;

    const Ti18n = getHomeI18n();
    meteoBox.innerHTML =
      `${c.temperature_2m}°C | 🌬️ ${c.wind_speed_10m} km/h | ${weatherCodePT(c.weather_code)}
       <br><small>${Ti18n.updated} ${c.time.split("T")[1].slice(0,5)}</small>`;

  }catch{
    meteoBox.textContent = getHomeI18n().unavailable;
  }
}

const originalAbrirModal = abrirModal;
abrirModal = function(cat, item){
  originalAbrirModal(cat, item);
  carregarMeteo();
};


/* ==============================
   HOME_FORECAST_PENICHE_BALEAL
   Hoje + Amanhã + Mar/Surf
============================== */

const HOME_LAT = 39.355;  // Peniche/Baleal (aprox.)
const HOME_LON = -9.381;

function pad2(n){ return String(n).padStart(2,"0"); }

function iconFromWeatherCode(code){
  // Ícones simples e consistentes
  if (code === 0) return "☀️";
  if (code === 1) return "🌤️";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if ([51,53,55].includes(code)) return "🌦️";
  if ([61,63,65].includes(code)) return "🌧️";
  if ([71,73,75].includes(code)) return "❄️";
  if ([80,81,82].includes(code)) return "🌦️";
  if ([95,96,99].includes(code)) return "⛈️";
  return "🌤️";
}

function humanDirFromDegrees(deg){
  if (deg === null || deg === undefined || isNaN(deg)) return "";
  const dirs = ["N","NE","E","SE","S","SO","O","NO"];
  const i = Math.round(((deg % 360) / 45)) % 8;
  return dirs[i];
}

function surfRating({ waveHeight, wavePeriod, windSpeed }){
  // Heurística simples (não substitui previsão oficial):
  // - Melhor surf costuma ser: ondas >= 1.2m, período >= 10s, vento <= 20 km/h
  // - Moderado: ondas >= 0.8m e período >= 8s e vento <= 28 km/h
  // - Caso contrário: fraco/irregular
  const T = getHomeI18n();
  if (waveHeight >= 1.2 && wavePeriod >= 10 && windSpeed <= 20) return { label:T.surfGood, emoji:"🏄‍♂️" };
  if (waveHeight >= 0.8 && wavePeriod >= 8 && windSpeed <= 28) return { label:T.surfOk, emoji:"🏄" };
  return { label:T.surfWeak, emoji:"🌊" };
}

const LS_KEY_METEO_CACHE = "vb_home_meteo_cache_v1";

function saveMeteoCache(payload){
  try {
    localStorage.setItem(LS_KEY_METEO_CACHE, JSON.stringify({ ...payload, savedAt: Date.now() }));
  } catch (e) { console.warn(e); }
}

function loadMeteoCache(){
  try {
    const raw = localStorage.getItem(LS_KEY_METEO_CACHE);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function relativeTimeLabel(savedAt){
  const T = getHomeI18n();
  const diffMin = Math.max(0, Math.round((Date.now() - savedAt) / 60000));
  if (diffMin < 1) return T.justNow;
  if (diffMin < 60) return T.minutesAgo(diffMin);
  const diffH = Math.round(diffMin / 60);
  return T.hoursAgo(diffH);
}

function renderHomeMeteoFromData({ today, tom, waveH, waveP, waveD }, { offline, savedAt } = {}){
  const elUpdated = document.getElementById("home-meteo-updated");
  const elToday = document.getElementById("home-meteo-today");
  const elTodayExtra = document.getElementById("home-meteo-today-extra");
  const elTom = document.getElementById("home-meteo-tomorrow");
  const elTomExtra = document.getElementById("home-meteo-tomorrow-extra");
  const elSurf = document.getElementById("home-surf");
  const elSurfExtra = document.getElementById("home-surf-extra");
  if (!elUpdated || !elToday || !elTom || !elSurf) return;

  const Ti18nA = getHomeI18n();
  const icToday = iconFromWeatherCode(today.code);
  const icTom = iconFromWeatherCode(tom.code);

  elToday.textContent = `${icToday} ${today.tmin}°–${today.tmax}°`;
  elTodayExtra.textContent = `🌅 ${today.sunrise ? today.sunrise.split("T")[1].slice(0,5) : "—"} · 🌇 ${today.sunset ? today.sunset.split("T")[1].slice(0,5) : "—"} · 🌬️ ${Ti18nA.windUpTo} ${today.windMax ?? "—"} km/h · 🌧️ ${today.rain ?? "—"} mm`;

  elTom.textContent = `${icTom} ${tom.tmin}°–${tom.tmax}°`;
  elTomExtra.textContent = `🌅 ${tom.sunrise ? tom.sunrise.split("T")[1].slice(0,5) : "—"} · 🌇 ${tom.sunset ? tom.sunset.split("T")[1].slice(0,5) : "—"} · 🌬️ ${Ti18nA.windUpTo} ${tom.windMax ?? "—"} km/h · 🌧️ ${tom.rain ?? "—"} mm`;

  const rating = surfRating({ waveHeight: waveH, wavePeriod: waveP, windSpeed: Number(today.windMax ?? 0) });
  const dirTxt = humanDirFromDegrees(waveD);
  elSurf.textContent = `${rating.emoji} ${rating.label}`;
  elSurfExtra.textContent = `${Ti18nA.waveHeight} ${waveH.toFixed(1)} m · ${Ti18nA.wavePeriod} ${waveP.toFixed(0)} s · ${Ti18nA.waveDirection} ${dirTxt || "—"}`;

  if (offline){
    elUpdated.textContent = `📴 ${Ti18nA.offlineData} · ${relativeTimeLabel(savedAt)}`;
  } else {
    const now = new Date();
    elUpdated.textContent = `${Ti18nA.updated} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
  }
}

async function carregarHomeMeteoESurf(){
  const elUpdated = document.getElementById("home-meteo-updated");
  const elToday = document.getElementById("home-meteo-today");
  const elTom = document.getElementById("home-meteo-tomorrow");
  const elSurf = document.getElementById("home-surf");

  // Se a homepage não tiver o bloco, não faz nada
  if (!elUpdated || !elToday || !elTom || !elSurf) return;

  try{
    // 1) Weather daily (hoje + amanhã) + vento máx
    const urlW = `https://api.open-meteo.com/v1/forecast?latitude=${HOME_LAT}&longitude=${HOME_LON}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,sunrise,sunset&timezone=Europe%2FLisbon`;
    const resW = await fetch(urlW);
    if(!resW.ok) throw new Error("Weather API");
    const dataW = await resW.json();
    const d = dataW.daily;

    const today = {
      code: d.weather_code?.[0],
      tmax: d.temperature_2m_max?.[0],
      tmin: d.temperature_2m_min?.[0],
      rain: d.precipitation_sum?.[0],
      windMax: d.wind_speed_10m_max?.[0],
      sunrise: d.sunrise?.[0],
      sunset: d.sunset?.[0],
      date: d.time?.[0]
    };
    const tom = {
      code: d.weather_code?.[1],
      tmax: d.temperature_2m_max?.[1],
      tmin: d.temperature_2m_min?.[1],
      rain: d.precipitation_sum?.[1],
      windMax: d.wind_speed_10m_max?.[1],
      sunrise: d.sunrise?.[1],
      sunset: d.sunset?.[1],
      date: d.time?.[1]
    };

    // 2) Marine (ondas) — usa hora mais próxima
    const urlM = `https://marine-api.open-meteo.com/v1/marine?latitude=${HOME_LAT}&longitude=${HOME_LON}&hourly=wave_height,wave_period,wave_direction&timezone=Europe%2FLisbon&forecast_days=2`;
    const resM = await fetch(urlM);
    if(!resM.ok) throw new Error("Marine API");
    const dataM = await resM.json();

    const times = dataM.hourly?.time || [];
    const waves = dataM.hourly?.wave_height || [];
    const period = dataM.hourly?.wave_period || [];
    const wdir = dataM.hourly?.wave_direction || [];

    // encontra índice da hora mais próxima do agora
    const now = new Date();
    let best = 0;
    let bestDiff = Infinity;
    for(let i=0;i<times.length;i++){
      const t = new Date(times[i]);
      const diff = Math.abs(t.getTime() - now.getTime());
      if (diff < bestDiff){ bestDiff = diff; best = i; }
    }

    const waveH = Number(waves[best] ?? 0);
    const waveP = Number(period[best] ?? 0);
    const waveD = Number(wdir[best] ?? NaN);

    const payload = { today, tom, waveH, waveP, waveD };
    renderHomeMeteoFromData(payload);
    saveMeteoCache(payload);

  }catch(e){
    const cached = loadMeteoCache();
    if (cached){
      renderHomeMeteoFromData(cached, { offline: true, savedAt: cached.savedAt });
    } else {
      const Ti18nErr = getHomeI18n();
      elUpdated.textContent = Ti18nErr.unavailable;
      elToday.textContent = "—";
      elTom.textContent = "—";
      elSurf.textContent = "—";
    }
  }
}

// Carrega na homepage
carregarHomeMeteoESurf();
// Atualiza a cada 30 minutos
setInterval(carregarHomeMeteoESurf, 30 * 60 * 1000);


/* ==============================
   MODAL_MAR_SURF (extra)
============================== */

async function carregarMeteoMarNoModal(){
  if(!meteoBox) return;
  try{
    const urlM = `https://marine-api.open-meteo.com/v1/marine?latitude=${HOME_LAT}&longitude=${HOME_LON}&hourly=wave_height,wave_period&timezone=Europe%2FLisbon&forecast_days=1`;
    const resM = await fetch(urlM);
    if(!resM.ok) return;

    const dataM = await resM.json();
    const times = dataM.hourly?.time || [];
    const waves = dataM.hourly?.wave_height || [];
    const period = dataM.hourly?.wave_period || [];

    const now = new Date();
    let best = 0, bestDiff = Infinity;
    for(let i=0;i<times.length;i++){
      const t = new Date(times[i]);
      const diff = Math.abs(t.getTime() - now.getTime());
      if (diff < bestDiff){ bestDiff = diff; best = i; }
    }

    const waveH = Number(waves[best] ?? 0);
    const waveP = Number(period[best] ?? 0);

    // acrescenta ao final do conteúdo do modal (sem “estragar” o que já lá está)
    const Ti18nWaves = getHomeI18n().waves;
    const extra = ` <br><small>🌊 ${Ti18nWaves} ${waveH.toFixed(1)} m · ${waveP.toFixed(0)} s</small>`;
    if (!meteoBox.innerHTML.includes("🌊")) meteoBox.innerHTML += extra;
  }catch(e){ console.warn(e); }
}

// Garante que também corre quando o modal abre
(function(){
  try{
    const prev = carregarMeteo;
    carregarMeteo = async function(){
      await prev();
      await carregarMeteoMarNoModal();
    };
  }catch(e){ console.warn(e); }
})();


