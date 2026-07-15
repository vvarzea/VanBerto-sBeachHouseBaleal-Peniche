/* Traduções das secções fixas da home (meteorologia, casa, emergências) */
/* ==============================
   I18N DAS SECÇÕES FIXAS DA HOME
   (Meteorologia / Informação da Casa / Emergências / Praticidades)
============================== */

const HOME_I18N = {
  pt: {
    meteoTitle: "🌤️ Meteorologia · Peniche & Baleal",
    todayTitle: "Hoje",
    tomorrowTitle: "Amanhã",
    surfTitle: "🌊 Mar & Surf",

    houseTitle: "🏠 Informação da Casa",
    wifiTitle: "📶 WiFi",
    wifiPasswordLabel: "Password:",
    wifiCopyBtn: "📋 Copiar",
    wifiCopied: "✅ Copiado!",
    checkinTitle: "🔑 Check-in / Check-out",
    checkinSub: "Entrega das chaves em mão — o horário é combinado convosco antes da chegada.",
    rulesTitle: "📋 Regras da casa",
    rules: [
      "🔇 Silêncio das 23h às 7h (período de descanso previsto na lei portuguesa)",
      "🚭 Não é permitido fumar dentro de casa",
      "🐾 Animais de estimação só mediante autorização prévia — fala connosco antes de reservar",
      "🗑️ Lixo: coloca no contentor verde do parque de estacionamento, junto ao prédio",
      "♻️ Reciclagem: ecoponto (papel/plástico/vidro) no início da rua, junto ao edifício \"Shark's\""
    ],

    sosTitle: "🚨 Emergências & Saúde",
    sosEmergencyTitle: "Emergência nacional",
    sosPharmacyTitle: "Farmácia de serviço hoje",
    sosPharmacyMain: "💊 Ver farmácia",
    sosPoliceTitle: "PSP Peniche (não urgente)",
    sosNote: "Em caso de emergência, liga sempre primeiro para o 112.",

    practicalTitle: "🚗 Praticidades do dia a dia",
    parkingTitle: "🅿️ Estacionamento",
    parkingMain: "Grátis, mesmo à porta",
    parkingSub: "O parque junto ao prédio é gratuito e sem restrições — podes deixar lá o carro durante toda a estadia.",
    transportTitle: "🚕 Transportes, táxi & Uber",
    transportMain: "Uber e Bolt funcionam, mas com menos carros",
    transportSub: "Peniche não tem uma rede de transportes públicos muito forte, por isso ter carro é o mais prático. Uber e Bolt existem na zona, mas com menos motoristas do que em Lisboa — a espera pode ser maior. Preferes táxi? Liga para <a href=\"tel:262782687\">262 782 687</a> ou <a href=\"tel:917296771\">917 296 771</a>.",
    atmTitle: "🏧 Onde levantar dinheiro",
    atmMain: "Multibanco na Estrada do Baleal",
    atmSub: "O mais perto de casa fica na Estrada do Baleal, em Casais do Baleal, a poucos minutos. Há mais opções no centro de Peniche. Quase todos os estabelecimentos aceitam cartão, por isso raramente precisas de dinheiro vivo.",

    checkoutTitle: "🌅 Antes de saíres",
    ratingTitle: "⭐ Avaliar a estadia",
    ratingPrompt: "Como foi a tua estadia? A tua opinião ajuda-nos a melhorar.",
    ratingPlaceholder: "Comentário opcional… (fica entre nós)",
    ratingSendBtn: "💬 Enviar avaliação",
    ratingWaMessage: (stars, comment) =>
      `Olá Vanda e Berto! 🙌\nAcabámos a nossa estadia no VanBerto's Beach House e queríamos deixar uma avaliação:\n\n${"⭐".repeat(stars)} (${stars}/5)` +
      (comment ? `\n\n💬 ${comment}` : ""),
    checklistTitle: "✅ Checklist de saída",
    checklist: [
      { key: "luzes", label: "💡 Luzes apagadas" },
      { key: "lixo", label: "🗑️ Lixo despejado no contentor" },
      { key: "chave", label: "🔑 Chave no local combinado" }
    ],
    checklistProgress: (done, total) => `${done}/${total} concluído${done === total ? " 🎉" : ""}`,
    checklistReset: "🔄 Repor",
    checklistAllDoneNudge: "✅ Tudo pronto! Já agora, que tal deixares a tua avaliação? ⭐",
    googleReviewBtn: "⭐ Deixar também no Google",

    iosInstallMsg: 'Toca em <strong>Partilhar</strong> e depois em <strong>"Adicionar ao ecrã principal"</strong> para instalares esta app.',
    updateBannerMsg: "Nova versão disponível — toca para atualizar",
    mapOfflineMsg: "Precisas de ligação à internet para ver o mapa aqui.",
    mapOfflineBtn: "📍 Abrir no Google Maps",

    weekdays: ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"],

    updated: "Atualizado",
    unavailable: "Meteorologia indisponível",
    offlineData: "Dados guardados",
    justNow: "agora mesmo",
    minutesAgo: (n) => `há ${n} min`,
    hoursAgo: (n) => `há ${n}h`,
    loadingWeather: "A carregar meteorologia…",
    loadingUpdated: "A carregar…",
    waveHeight: "Altura",
    wavePeriod: "Período",
    waveDirection: "Direção",
    waves: "Ondas",
    windUpTo: "até",
    surfGood: "🔥 Bom",
    surfOk: "👍 Razoável",
    surfWeak: "🙂 Fraco",
    tapToSeeAll: (label) => `Tocar para ver todas as opções de ${label.toLowerCase()}.`,
    vanBertoSuggestions: "Sugestões do VanBerto's",
    tapForDetails: "Tocar para ver detalhes",
    noResults: "Nenhum resultado para esta pesquisa.",
    defaultHorario: "Confirmar no Google Maps",
    defaultTipo: "Restaurante/Bar",
    defaultReservas: "Opcional",
    defaultTakeaway: "Depende do local",
    callBtn: "📞 Ligar",
    callBtnGoogle: "📞 Contacto (Google)",
    weatherCodes: {
      0:"☀️ Céu limpo", 1:"🌤️ Pouco nublado", 2:"⛅ Parcialmente nublado", 3:"☁️ Nublado",
      45:"🌫️ Nevoeiro", 48:"🌫️ Nevoeiro", 51:"🌦️ Chuva fraca", 53:"🌦️ Chuva fraca", 55:"🌦️ Chuva fraca",
      61:"🌦️ Chuva fraca", 63:"🌧️ Chuva", 65:"⛈️ Chuva forte", 71:"❄️ Neve fraca", 73:"❄️ Neve", 75:"❄️ Neve forte",
      80:"🌦️ Aguaceiros", 81:"🌦️ Aguaceiros", 82:"🌧️ Aguaceiros fortes", 95:"⛈️ Trovoada", 96:"⛈️ Trovoada", 99:"⛈️ Trovoada"
    }
  },
  en: {
    meteoTitle: "🌤️ Weather · Peniche & Baleal",
    todayTitle: "Today",
    tomorrowTitle: "Tomorrow",
    surfTitle: "🌊 Sea & Surf",

    houseTitle: "🏠 House Information",
    wifiTitle: "📶 WiFi",
    wifiPasswordLabel: "Password:",
    wifiCopyBtn: "📋 Copy",
    wifiCopied: "✅ Copied!",
    checkinTitle: "🔑 Check-in / Check-out",
    checkinSub: "Keys handed over in person — the time is arranged with you before arrival.",
    rulesTitle: "📋 House rules",
    rules: [
      "🔇 Quiet hours from 11pm to 7am (rest period required by Portuguese law)",
      "🚭 No smoking inside the house",
      "🐾 Pets only with prior authorisation — talk to us before booking",
      "🗑️ Rubbish: use the green bin in the car park, next to the building",
      "♻️ Recycling: recycling point (paper/plastic/glass) at the start of the street, next to the \"Shark's\" building"
    ],

    sosTitle: "🚨 Emergencies & Health",
    sosEmergencyTitle: "National emergency",
    sosPharmacyTitle: "Pharmacy on duty today",
    sosPharmacyMain: "💊 View pharmacy",
    sosPoliceTitle: "PSP Peniche (non-urgent)",
    sosNote: "In an emergency, always call 112 first.",

    practicalTitle: "🚗 Everyday practicalities",
    parkingTitle: "🅿️ Parking",
    parkingMain: "Free, right at the door",
    parkingSub: "The car park next to the building is free and unrestricted — you can leave your car there for your whole stay.",
    transportTitle: "🚕 Transport, taxi & Uber",
    transportMain: "Uber and Bolt work, but with fewer cars",
    transportSub: "Peniche doesn't have a very strong public transport network, so having a car is the most practical option. Uber and Bolt operate in the area, but with fewer drivers than in Lisbon — waiting times can be longer. Prefer a taxi? Call <a href=\"tel:262782687\">262 782 687</a> or <a href=\"tel:917296771\">917 296 771</a>.",
    atmTitle: "🏧 Where to withdraw cash",
    atmMain: "ATM on Estrada do Baleal",
    atmSub: "The closest one to the house is on Estrada do Baleal, in Casais do Baleal, a few minutes away. There are more options in central Peniche. Almost every place accepts card, so you rarely need cash.",

    checkoutTitle: "🌅 Before you leave",
    ratingTitle: "⭐ Rate your stay",
    ratingPrompt: "How was your stay? Your feedback helps us improve.",
    ratingPlaceholder: "Optional comment… (just between us)",
    ratingSendBtn: "💬 Send review",
    ratingWaMessage: (stars, comment) =>
      `Hi Vanda and Berto! 🙌\nWe just finished our stay at VanBerto's Beach House and wanted to leave a review:\n\n${"⭐".repeat(stars)} (${stars}/5)` +
      (comment ? `\n\n💬 ${comment}` : ""),
    checklistTitle: "✅ Departure checklist",
    checklist: [
      { key: "luzes", label: "💡 Lights off" },
      { key: "lixo", label: "🗑️ Rubbish taken to the bin" },
      { key: "chave", label: "🔑 Key left in the agreed spot" }
    ],
    checklistProgress: (done, total) => `${done}/${total} done${done === total ? " 🎉" : ""}`,
    checklistReset: "🔄 Reset",
    checklistAllDoneNudge: "✅ All set! While you're at it, why not leave a review? ⭐",
    googleReviewBtn: "⭐ Also leave it on Google",

    iosInstallMsg: 'Tap <strong>Share</strong>, then <strong>"Add to Home Screen"</strong> to install this app.',
    updateBannerMsg: "New version available — tap to update",
    mapOfflineMsg: "You need an internet connection to see the map here.",
    mapOfflineBtn: "📍 Open in Google Maps",

    weekdays: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

    updated: "Updated",
    unavailable: "Weather unavailable",
    offlineData: "Saved data",
    justNow: "just now",
    minutesAgo: (n) => `${n} min ago`,
    hoursAgo: (n) => `${n}h ago`,
    loadingWeather: "Loading weather…",
    loadingUpdated: "Loading…",
    waveHeight: "Height",
    wavePeriod: "Period",
    waveDirection: "Direction",
    waves: "Waves",
    windUpTo: "up to",
    surfGood: "🔥 Good",
    surfOk: "👍 Fair",
    surfWeak: "🙂 Weak",
    tapToSeeAll: (label) => `Tap to see all ${label.toLowerCase()}.`,
    vanBertoSuggestions: "VanBerto's suggestions",
    tapForDetails: "Tap for details",
    noResults: "No results for this search.",
    defaultHorario: "Check on Google Maps",
    defaultTipo: "Restaurant/Bar",
    defaultReservas: "Optional",
    defaultTakeaway: "Depends on venue",
    callBtn: "📞 Call",
    callBtnGoogle: "📞 Contact (Google)",
    weatherCodes: {
      0:"☀️ Clear sky", 1:"🌤️ Mostly clear", 2:"⛅ Partly cloudy", 3:"☁️ Cloudy",
      45:"🌫️ Fog", 48:"🌫️ Fog", 51:"🌦️ Light drizzle", 53:"🌦️ Drizzle", 55:"🌦️ Dense drizzle",
      61:"🌦️ Light rain", 63:"🌧️ Rain", 65:"⛈️ Heavy rain", 71:"❄️ Light snow", 73:"❄️ Snow", 75:"❄️ Heavy snow",
      80:"🌦️ Showers", 81:"🌦️ Showers", 82:"🌧️ Heavy showers", 95:"⛈️ Thunderstorm", 96:"⛈️ Thunderstorm", 99:"⛈️ Thunderstorm"
    }
  },
  es: {
    meteoTitle: "🌤️ Meteorología · Peniche & Baleal",
    todayTitle: "Hoy",
    tomorrowTitle: "Mañana",
    surfTitle: "🌊 Mar & Surf",

    houseTitle: "🏠 Información de la casa",
    wifiTitle: "📶 WiFi",
    wifiPasswordLabel: "Contraseña:",
    wifiCopyBtn: "📋 Copiar",
    wifiCopied: "✅ ¡Copiado!",
    checkinTitle: "🔑 Check-in / Check-out",
    checkinSub: "Entrega de llaves en mano — la hora se acuerda contigo antes de la llegada.",
    rulesTitle: "📋 Normas de la casa",
    rules: [
      "🔇 Silencio de 23h a 7h (periodo de descanso previsto por la ley portuguesa)",
      "🚭 No se permite fumar dentro de la casa",
      "🐾 Mascotas solo con autorización previa — habla con nosotros antes de reservar",
      "🗑️ Basura: en el contenedor verde del parking, junto al edificio",
      "♻️ Reciclaje: punto verde (papel/plástico/vidrio) al principio de la calle, junto al edificio \"Shark's\""
    ],

    sosTitle: "🚨 Emergencias & Salud",
    sosEmergencyTitle: "Emergencia nacional",
    sosPharmacyTitle: "Farmacia de guardia hoy",
    sosPharmacyMain: "💊 Ver farmacia",
    sosPoliceTitle: "PSP Peniche (no urgente)",
    sosNote: "En caso de emergencia, llama siempre primero al 112.",

    practicalTitle: "🚗 Cosas prácticas del día a día",
    parkingTitle: "🅿️ Aparcamiento",
    parkingMain: "Gratis, justo en la puerta",
    parkingSub: "El aparcamiento junto al edificio es gratuito y sin restricciones — puedes dejar el coche allí durante toda tu estancia.",
    transportTitle: "🚕 Transporte, taxi & Uber",
    transportMain: "Uber y Bolt funcionan, pero con menos coches",
    transportSub: "Peniche no tiene una red de transporte público muy fuerte, así que tener coche es lo más práctico. Uber y Bolt existen en la zona, pero con menos conductores que en Lisboa — la espera puede ser mayor. ¿Prefieres taxi? Llama al <a href=\"tel:262782687\">262 782 687</a> o al <a href=\"tel:917296771\">917 296 771</a>.",
    atmTitle: "🏧 Dónde sacar dinero",
    atmMain: "Cajero en la Estrada do Baleal",
    atmSub: "El más cercano a la casa está en la Estrada do Baleal, en Casais do Baleal, a pocos minutos. Hay más opciones en el centro de Peniche. Casi todos los establecimientos aceptan tarjeta, así que raramente necesitas dinero en efectivo.",

    checkoutTitle: "🌅 Antes de irte",
    ratingTitle: "⭐ Valorar la estancia",
    ratingPrompt: "¿Qué tal la estancia? Tu opinión nos ayuda a mejorar.",
    ratingPlaceholder: "Comentario opcional… (queda entre nosotros)",
    ratingSendBtn: "💬 Enviar valoración",
    ratingWaMessage: (stars, comment) =>
      `¡Hola Vanda y Berto! 🙌\nAcabamos nuestra estancia en VanBerto's Beach House y queríamos dejar una valoración:\n\n${"⭐".repeat(stars)} (${stars}/5)` +
      (comment ? `\n\n💬 ${comment}` : ""),
    checklistTitle: "✅ Checklist de salida",
    checklist: [
      { key: "luzes", label: "💡 Luces apagadas" },
      { key: "lixo", label: "🗑️ Basura en el contenedor" },
      { key: "chave", label: "🔑 Llave en el lugar acordado" }
    ],
    checklistProgress: (done, total) => `${done}/${total} completado${done === total ? " 🎉" : ""}`,
    checklistReset: "🔄 Reiniciar",
    checklistAllDoneNudge: "✅ ¡Todo listo! Ya que estás, ¿qué tal dejar tu valoración? ⭐",
    googleReviewBtn: "⭐ Dejarla también en Google",

    iosInstallMsg: 'Toca en <strong>Compartir</strong> y luego en <strong>"Añadir a pantalla de inicio"</strong> para instalar esta app.',
    updateBannerMsg: "Nueva versión disponible — toca para actualizar",
    mapOfflineMsg: "Necesitas conexión a internet para ver el mapa aquí.",
    mapOfflineBtn: "📍 Abrir en Google Maps",

    weekdays: ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],

    updated: "Actualizado",
    unavailable: "Meteorología no disponible",
    offlineData: "Datos guardados",
    justNow: "ahora mismo",
    minutesAgo: (n) => `hace ${n} min`,
    hoursAgo: (n) => `hace ${n}h`,
    loadingWeather: "Cargando meteorología…",
    loadingUpdated: "Cargando…",
    waveHeight: "Altura",
    wavePeriod: "Período",
    waveDirection: "Dirección",
    waves: "Olas",
    windUpTo: "hasta",
    surfGood: "🔥 Bueno",
    surfOk: "👍 Razonable",
    surfWeak: "🙂 Flojo",
    tapToSeeAll: (label) => `Toca para ver todas las opciones de ${label.toLowerCase()}.`,
    vanBertoSuggestions: "Sugerencias de VanBerto's",
    tapForDetails: "Toca para ver detalles",
    noResults: "Sin resultados para esta búsqueda.",
    defaultHorario: "Consultar en Google Maps",
    defaultTipo: "Restaurante/Bar",
    defaultReservas: "Opcional",
    defaultTakeaway: "Depende del local",
    callBtn: "📞 Llamar",
    callBtnGoogle: "📞 Contacto (Google)",
    weatherCodes: {
      0:"☀️ Cielo despejado", 1:"🌤️ Poco nublado", 2:"⛅ Parcialmente nublado", 3:"☁️ Nublado",
      45:"🌫️ Niebla", 48:"🌫️ Niebla", 51:"🌦️ Llovizna leve", 53:"🌦️ Llovizna", 55:"🌦️ Llovizna densa",
      61:"🌦️ Lluvia leve", 63:"🌧️ Lluvia", 65:"⛈️ Lluvia fuerte", 71:"❄️ Nieve leve", 73:"❄️ Nieve", 75:"❄️ Nieve fuerte",
      80:"🌦️ Chubascos", 81:"🌦️ Chubascos", 82:"🌧️ Chubascos fuertes", 95:"⛈️ Tormenta", 96:"⛈️ Tormenta", 99:"⛈️ Tormenta"
    }
  },
  fr: {
    meteoTitle: "🌤️ Météo · Peniche & Baleal",
    todayTitle: "Aujourd'hui",
    tomorrowTitle: "Demain",
    surfTitle: "🌊 Mer & Surf",

    houseTitle: "🏠 Informations sur la maison",
    wifiTitle: "📶 WiFi",
    wifiPasswordLabel: "Mot de passe :",
    wifiCopyBtn: "📋 Copier",
    wifiCopied: "✅ Copié !",
    checkinTitle: "🔑 Arrivée / Départ",
    checkinSub: "Remise des clés en main propre — l'heure est convenue avec vous avant l'arrivée.",
    rulesTitle: "📋 Règlement de la maison",
    rules: [
      "🔇 Silence de 23h à 7h (période de repos prévue par la loi portugaise)",
      "🚭 Il est interdit de fumer à l'intérieur de la maison",
      "🐾 Animaux uniquement avec autorisation préalable — contacte-nous avant de réserver",
      "🗑️ Déchets : à déposer dans le conteneur vert du parking, près du bâtiment",
      "♻️ Recyclage : point de collecte (papier/plastique/verre) au début de la rue, près du bâtiment \"Shark's\""
    ],

    sosTitle: "🚨 Urgences & Santé",
    sosEmergencyTitle: "Urgence nationale",
    sosPharmacyTitle: "Pharmacie de garde aujourd'hui",
    sosPharmacyMain: "💊 Voir la pharmacie",
    sosPoliceTitle: "PSP Peniche (non urgent)",
    sosNote: "En cas d'urgence, appelle toujours d'abord le 112.",

    practicalTitle: "🚗 Pratique au quotidien",
    parkingTitle: "🅿️ Stationnement",
    parkingMain: "Gratuit, juste devant la porte",
    parkingSub: "Le parking près du bâtiment est gratuit et sans restriction — tu peux y laisser la voiture pendant tout ton séjour.",
    transportTitle: "🚕 Transports, taxi & Uber",
    transportMain: "Uber et Bolt fonctionnent, mais avec moins de voitures",
    transportSub: "Peniche n'a pas un réseau de transports publics très développé, donc avoir une voiture est le plus pratique. Uber et Bolt existent dans la région, mais avec moins de chauffeurs qu'à Lisbonne — l'attente peut être plus longue. Tu préfères un taxi ? Appelle le <a href=\"tel:262782687\">262 782 687</a> ou le <a href=\"tel:917296771\">917 296 771</a>.",
    atmTitle: "🏧 Où retirer de l'argent",
    atmMain: "Distributeur sur l'Estrada do Baleal",
    atmSub: "Le plus proche de la maison se trouve sur l'Estrada do Baleal, à Casais do Baleal, à quelques minutes. Il y a plus d'options dans le centre de Peniche. Presque tous les établissements acceptent la carte, donc tu as rarement besoin d'argent liquide.",

    checkoutTitle: "🌅 Avant de partir",
    ratingTitle: "⭐ Évaluer le séjour",
    ratingPrompt: "Comment s'est passé ton séjour ? Ton avis nous aide à nous améliorer.",
    ratingPlaceholder: "Commentaire facultatif… (juste entre nous)",
    ratingSendBtn: "💬 Envoyer l'avis",
    ratingWaMessage: (stars, comment) =>
      `Salut Vanda et Berto ! 🙌\nNous venons de terminer notre séjour au VanBerto's Beach House et voulions laisser un avis :\n\n${"⭐".repeat(stars)} (${stars}/5)` +
      (comment ? `\n\n💬 ${comment}` : ""),
    checklistTitle: "✅ Checklist de départ",
    checklist: [
      { key: "luzes", label: "💡 Lumières éteintes" },
      { key: "lixo", label: "🗑️ Poubelles sorties" },
      { key: "chave", label: "🔑 Clé à l'endroit convenu" }
    ],
    checklistProgress: (done, total) => `${done}/${total} fait${done === total ? " 🎉" : ""}`,
    checklistReset: "🔄 Réinitialiser",
    checklistAllDoneNudge: "✅ Tout est prêt ! Pendant que tu y es, pourquoi ne pas laisser un avis ? ⭐",
    googleReviewBtn: "⭐ Le laisser aussi sur Google",

    iosInstallMsg: 'Appuie sur <strong>Partager</strong>, puis sur <strong>« Sur l\'écran d\'accueil »</strong> pour installer cette app.',
    updateBannerMsg: "Nouvelle version disponible — appuie pour mettre à jour",
    mapOfflineMsg: "Une connexion internet est nécessaire pour voir la carte ici.",
    mapOfflineBtn: "📍 Ouvrir dans Google Maps",

    weekdays: ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],

    updated: "Mis à jour",
    unavailable: "Météo indisponible",
    offlineData: "Données enregistrées",
    justNow: "à l'instant",
    minutesAgo: (n) => `il y a ${n} min`,
    hoursAgo: (n) => `il y a ${n}h`,
    loadingWeather: "Chargement de la météo…",
    loadingUpdated: "Chargement…",
    waveHeight: "Hauteur",
    wavePeriod: "Période",
    waveDirection: "Direction",
    waves: "Vagues",
    windUpTo: "jusqu'à",
    surfGood: "🔥 Bon",
    surfOk: "👍 Correct",
    surfWeak: "🙂 Faible",
    tapToSeeAll: (label) => `Touche pour voir toutes les options de ${label.toLowerCase()}.`,
    vanBertoSuggestions: "Suggestions de VanBerto's",
    tapForDetails: "Touche pour voir les détails",
    noResults: "Aucun résultat pour cette recherche.",
    defaultHorario: "Vérifier sur Google Maps",
    defaultTipo: "Restaurant/Bar",
    defaultReservas: "Facultatif",
    defaultTakeaway: "Selon l'établissement",
    callBtn: "📞 Appeler",
    callBtnGoogle: "📞 Contact (Google)",
    weatherCodes: {
      0:"☀️ Ciel dégagé", 1:"🌤️ Peu nuageux", 2:"⛅ Partiellement nuageux", 3:"☁️ Nuageux",
      45:"🌫️ Brouillard", 48:"🌫️ Brouillard", 51:"🌦️ Bruine légère", 53:"🌦️ Bruine", 55:"🌦️ Bruine dense",
      61:"🌦️ Pluie légère", 63:"🌧️ Pluie", 65:"⛈️ Pluie forte", 71:"❄️ Neige légère", 73:"❄️ Neige", 75:"❄️ Neige forte",
      80:"🌦️ Averses", 81:"🌦️ Averses", 82:"🌧️ Fortes averses", 95:"⛈️ Orage", 96:"⛈️ Orage", 99:"⛈️ Orage"
    }
  }
};

function getHomeI18n(){
  return HOME_I18N[currentLang] || HOME_I18N.en;
}

function applyHomeSectionsI18n(){
  const T = getHomeI18n();
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHtml = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  // Meteorologia
  setText("i18n-meteo-title", T.meteoTitle);
  setText("i18n-today-title", T.todayTitle);
  setText("i18n-tomorrow-title", T.tomorrowTitle);
  setText("i18n-surf-title", T.surfTitle);
  const meteoUpdated = document.getElementById("home-meteo-updated");
  if (meteoUpdated && (meteoUpdated.textContent.trim() === "" || meteoUpdated.dataset.state === "loading")) {
    meteoUpdated.textContent = T.loadingUpdated;
  }

  // Informação da Casa
  setText("i18n-house-title", T.houseTitle);
  setText("i18n-wifi-title", T.wifiTitle);
  setText("i18n-wifi-password-label", T.wifiPasswordLabel);
  const wifiBtn = document.getElementById("wifi-copy-btn");
  if (wifiBtn && !wifiBtn.dataset.justCopied) wifiBtn.textContent = T.wifiCopyBtn;
  setText("i18n-checkin-title", T.checkinTitle);
  setText("i18n-checkin-sub", T.checkinSub);
  setText("i18n-rules-title", T.rulesTitle);
  const rulesList = document.getElementById("i18n-rules-list");
  if (rulesList) {
    rulesList.innerHTML = T.rules.map(r => `<li>${r}</li>`).join("");
  }

  // Emergências & Saúde
  setText("i18n-sos-title", T.sosTitle);
  setText("i18n-sos-emergency-title", T.sosEmergencyTitle);
  setText("i18n-sos-pharmacy-title", T.sosPharmacyTitle);
  setText("i18n-sos-pharmacy-main", T.sosPharmacyMain);
  setText("i18n-sos-police-title", T.sosPoliceTitle);
  setText("i18n-sos-note", T.sosNote);

  // Praticidades
  setText("i18n-practical-title", T.practicalTitle);
  setText("i18n-parking-title", T.parkingTitle);
  setText("i18n-parking-main", T.parkingMain);
  setText("i18n-parking-sub", T.parkingSub);
  setText("i18n-transport-title", T.transportTitle);
  setText("i18n-transport-main", T.transportMain);
  setHtml("i18n-transport-sub", T.transportSub);
  setText("i18n-atm-title", T.atmTitle);
  setText("i18n-atm-main", T.atmMain);
  setText("i18n-atm-sub", T.atmSub);

  // Antes de saíres (avaliação + checklist)
  setText("i18n-checkout-title", T.checkoutTitle);
  setText("i18n-rating-title", T.ratingTitle);
  setText("i18n-rating-prompt", T.ratingPrompt);
  const checkoutComment = document.getElementById("checkout-comment");
  if (checkoutComment) checkoutComment.placeholder = T.ratingPlaceholder;
  const checkoutSendBtn = document.getElementById("checkout-send-btn");
  if (checkoutSendBtn) checkoutSendBtn.textContent = T.ratingSendBtn;
  setText("i18n-checklist-title", T.checklistTitle);
  const checklistResetBtn = document.getElementById("checkout-checklist-reset");
  if (checklistResetBtn) checklistResetBtn.textContent = T.checklistReset;
  try { renderCheckoutChecklist(); } catch (e) { console.warn(e); }

  // Banners (instalação iOS / nova versão) & mini-mapa offline
  setHtml("ios-install-text", T.iosInstallMsg);
  setText("update-banner-text", T.updateBannerMsg);
  setText("map-offline-text", T.mapOfflineMsg);
  const mapOfflineBtnEl = document.getElementById("map-offline-btn");
  if (mapOfflineBtnEl) mapOfflineBtnEl.textContent = T.mapOfflineBtn;

  // Dias da semana do mini-calendário
  const weekRow = document.getElementById("mini-cal-week");
  if (weekRow) {
    const spans = weekRow.querySelectorAll("span");
    T.weekdays.forEach((d, i) => { if (spans[i]) spans[i].textContent = d; });
  }
}

// Corre logo ao carregar, para garantir estado inicial coerente com o idioma
try{ applyHomeSectionsI18n(); }catch(e){ console.warn(e); }

