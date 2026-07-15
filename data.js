/* Dados de todos os locais (PT/EN/ES/FR + dicas VanBerto Berto) */
// --------- DADOS (PT + EN + ES + FR + Dicas VanBerto's) ---------
const data = {
  Praias: [
    {
      nome: "Praia do Baleal – Norte e Sul",
      descPT: "Praia icónica de Peniche, excelente para surf e famílias. A nossa praia — fica mesmo aqui ao pé!",
      descEN: "Iconic beach in Peniche, great for surfing and families. Our beach — right on the doorstep!",
      descES: "Playa icónica de Peniche, perfecta para surf y familias. ¡Está justo aquí al lado!",
      descFR: "Plage iconique de Peniche, excellente pour le surf et les familles. Notre plage — juste à côté !",
      tipVB: "O lado Norte é melhor para surf, o Sul é mais calmo e ideal para famílias com crianças.",
      mapa: "Praia do Baleal Peniche"
    },
    {
      nome: "Praia de Peniche de Cima",
      descPT: "Areia extensa, ótima para caminhadas e banhos tranquilos.",
      descEN: "Long sandy beach, perfect for walks and swimming.",
      descES: "Playa extensa, ideal para paseos y baños tranquilos.",
      descFR: "Grande plage de sable, parfaite pour les promenades et la baignade.",
      tipVB: "Ótima para caminhadas ao amanhecer — o silêncio e a luz são únicos.",
      mapa: "Praia de Peniche de Cima"
    },
    {
      nome: "Praia da Gamboa",
      descPT: "Ambiente muito calmo e familiar, ideal para relaxar.",
      descEN: "Calm and family-friendly beach, ideal to relax.",
      descES: "Ambiente muy tranquilo y familiar, ideal para relajarse.",
      descFR: "Plage calme et familiale, idéale pour se détendre.",
      tipVB: "O bar da Gamboa tem o melhor pôr do sol de Peniche — não percas!",
      mapa: "Praia da Gamboa Peniche"
    },
    {
      nome: "Praia da Consolação",
      descPT: "Conhecida pelas rochas ricas em iodo e águas terapêuticas. Ótima para snorkel.",
      descEN: "Known for iodine-rich rocks and therapeutic waters. Great for snorkelling.",
      descES: "Famosa por sus rocas ricas en yodo y aguas terapéuticas. Ideal para snorkel.",
      descFR: "Connue pour ses rochers riches en iode et ses eaux thérapeutiques. Idéale pour le snorkeling.",
      tipVB: "Perfeita para quem tem problemas respiratórios — o iodo faz maravilhas!",
      mapa: "Praia da Consolação Peniche"
    },
    {
      nome: "Praia dos Supertubos",
      descPT: "Onda tubular de nível mundial, palco do campeonato WSL. Espetáculo mesmo sem entrar na água!",
      descEN: "World-class tubular wave, WSL championship spot. Amazing to watch even from the shore!",
      descES: "Ola tubular de clase mundial, sede del campeonato WSL. ¡Espectacular incluso desde la orilla!",
      descFR: "Vague tubulaire de classe mondiale, site du championnat WSL. Spectaculaire même depuis la plage !",
      tipVB: "Mesmo que não surfes, vale a pena ir ver os tubos. De outubro a fevereiro as ondas são gigantescas.",
      mapa: "Praia dos Supertubos"
    },
    {
      nome: "Praia do Portinho da Areia Sul",
      descPT: "Pequena baía abrigada, muito fotogénica e ideal para snorkel.",
      descEN: "Small sheltered bay, very picturesque and great for snorkelling.",
      descES: "Pequeña bahía resguardada, muy fotogénica e ideal para snorkel.",
      descFR: "Petite baie abritée, très photogénique et idéale pour le snorkeling.",
      tipVB: "Uma das praias mais bonitas da zona — leva a câmara porque as fotos ficam incríveis!",
      mapa: "Portinho da Areia Sul Peniche"
    },
    {
      nome: "Praia do Molhe Leste",
      descPT: "Boa para surf e pôr do sol junto ao molhe do porto.",
      descEN: "Popular for surf and sunsets near the harbour pier.",
      descES: "Popular para surf y atardeceres junto al muelle.",
      descFR: "Populaire pour le surf et les couchers de soleil près de la digue.",
      tipVB: "Fica mesmo ao lado do porto — combinam bem um passeio pela doca e um gelado no final.",
      mapa: "Praia do Molhe Leste"
    },
    {
      nome: "Praia de São Bernardino",
      descPT: "Praia familiar e sossegada, a poucos minutos de Peniche.",
      descEN: "Quiet family beach, a short drive from Peniche.",
      descES: "Playa familiar y tranquila, a pocos minutos de Peniche.",
      descFR: "Plage familiale et calme, à quelques minutes de Peniche.",
      tipVB: "Menos conhecida pelos turistas — se quiseres praia sossegada é esta!",
      mapa: "Praia de São Bernardino"
    }
  ],
  Locais: [
    {
      nome: "Ilha do Baleal",
      descPT: "Ilhote ligado por istmo de areia, perfeito para fotos e passeios ao pôr do sol.",
      descEN: "Small island connected by a sand isthmus, perfect for photos and sunset walks.",
      descES: "Pequeña isla unida por un istmo de arena, perfecta para fotos y paseos al atardecer.",
      descFR: "Petit îlot relié par un isthme de sable, parfait pour les photos et les promenades au coucher du soleil.",
      tipVB: "Fica mesmo à frente do VanBerto's! Dá uma volta ao ilhote — demora 20 minutos e vale cada segundo.",
      mapa: "Ilha do Baleal"
    },
    {
      nome: "Berlengas",
      descPT: "Reserva natural com águas cristalinas. Acesso de barco a partir de Peniche (45 min).",
      descEN: "Natural reserve with crystal clear waters. Boat trip from Peniche (45 min).",
      descES: "Reserva natural con aguas cristalinas. Barco desde Peniche (45 min).",
      descFR: "Réserve naturelle aux eaux cristallines. Bateau depuis Peniche (45 min).",
      tipVB: "Reserva o barco com antecedência — enche rápido no verão! Vale muito a pena, é um dia inesquecível.",
      mapa: "Ilhas Berlengas"
    },
    {
      nome: "Museu da Renda de Bilros de Peniche",
      horarioPT: "Terça a domingo 10h00–13h00 e 14h00–18h00. Encerra à segunda.",
      horarioEN: "Tue–Sun 10:00–13:00 and 14:00–18:00. Closed Mon.",
      descPT: "Museu dedicado à famosa renda de bilros de Peniche.",
      descEN: "Museum dedicated to Peniche’s traditional bobbin lace.",
      descES: "Museo dedicado al famoso encaje de bolillos de Peniche.",
      descFR: "Musée consacré à la célèbre dentelle aux fuseaux de Peniche.",
      mapa: "Museu da Renda de Bilros Peniche"
    },
    {
      nome: "Museu Nacional Resistência e Liberdade (Fortaleza)",
      horarioPT: "Terça a domingo 10h00–18h00 (última entrada 17h15). Encerra à segunda e em 1 jan, Domingo de Páscoa, 1 maio e 25 dez.",
      horarioEN: "Tue–Sun 10:00–18:00 (last entry 17:15). Closed Mon and on Jan 1, Easter Sunday, May 1, Dec 25.",
      descPT: "Antiga prisão política do Estado Novo, hoje museu de memória com vista para o mar.",
      descEN: "Former political prison during the dictatorship, now a moving memory museum.",
      descES: "Antigua prisión política, hoy museo de memoria con vistas al mar.",
      descFR: "Ancienne prison politique, aujourd'hui musée de mémoire avec vue sur la mer.",
      tipVB: "Um sítio muito especial. A vista do topo das muralhas para as Berlengas é de cortar a respiração.",
      mapa: "Fortaleza de Peniche"
    },
    {
      nome: "Farol do Cabo Carvoeiro + Miradouro",
      descPT: "Vista deslumbrante sobre o Atlântico e as ilhas Berlengas.",
      descEN: "Stunning views over the Atlantic and the Berlengas islands.",
      descES: "Vistas impresionantes al Atlántico y las islas Berlengas.",
      descFR: "Vue imprenable sur l'Atlantique et les îles Berlengas.",
      tipVB: "Obrigatório ao final da tarde — o pôr do sol daqui é simplesmente mágico. Leva um casaco!",
      mapa: "Cabo Carvoeiro"
    },
    {
      nome: "Castelo de Óbidos",
      descPT: "Vila medieval encantadora com muralhas intactas, a cerca de 25 minutos de Peniche.",
      descEN: "Charming medieval walled village, about 25 minutes away.",
      descES: "Encantadora villa medieval amurallada, a unos 25 minutos.",
      descFR: "Charmant village médiéval fortifié, à environ 25 minutes.",
      tipVB: "Experimenta a ginjinha em copinhos de chocolate — é a tradição local. Visita de manhã para evitar as multidões.",
      mapa: "Castelo de Óbidos"
    },
    {
      nome: "Dino Parque da Lourinhã",
      descPT: "Parque temático com dinossauros em tamanho real, ótimo para famílias.",
      descEN: "Outdoor dinosaur theme park, great for families.",
      descES: "Parque temático con dinosaurios a tamaño real, ideal para familias.",
      descFR: "Parc à thème avec des dinosaures grandeur nature, idéal pour les familles.",
      tipVB: "As crianças ficam loucas! Fica a 20 minutos — uma boa saída para um dia diferente.",
      mapa: "Dino Parque Lourinhã"
    },
    {
      nome: "Jardim Buddha Eden",
      descPT: "Grande jardim oriental com esculturas, lagos e budas gigantes.",
      descEN: "Huge oriental garden with giant sculptures, lakes and buddhas.",
      descES: "Enorme jardín oriental con esculturas gigantes, lagos y budas.",
      descFR: "Immense jardin oriental avec des sculptures géantes, des lacs et des bouddhas.",
      tipVB: "Um sítio surpreendente que pouca gente conhece — as fotos ficam incríveis e é muito tranquilo.",
      mapa: "Buddha Eden Bombarral"
    },
    {
      nome: "Praia da Foz do Arelho",
      descPT: "Onde a lagoa de Óbidos encontra o mar — ótima para famílias e desportos náuticos.",
      descEN: "Where the Óbidos lagoon meets the sea — great for families and water sports.",
      descES: "Donde la laguna de Óbidos se encuentra con el mar — ideal para familias y deportes náuticos.",
      descFR: "Là où le lagon d'Óbidos rencontre la mer — idéal pour les familles et les sports nautiques.",
      tipVB: "A lagoa é mais quente e calma que o mar — perfeita para crianças pequenas.",
      mapa: "Praia da Foz do Arelho"
    }
  ],
  Supermercados: [
    {
      nome: "Continente",
      descPT: "Maior supermercado de Peniche, com grande variedade de produtos.",
      descEN: "Largest supermarket in Peniche with a wide variety.",
      descES: "El supermercado más grande de Peniche, con gran variedad.",
      descFR: "Le plus grand supermarché de Peniche, avec une grande variété.",
      tipVB: "Tem tudo — frutas, peixe, bebidas, produtos de higiene. É a nossa escolha principal.",
      mapa: "Continente Peniche"
    },
    {
      nome: "Pingo Doce",
      descPT: "Bons produtos frescos e preços competitivos.",
      descEN: "Good fresh produce and competitive prices.",
      descES: "Buenos productos frescos y precios competitivos.",
      descFR: "Bons produits frais et prix compétitifs.",
      tipVB: "Os produtos de marca própria são muito bons e baratos. As refeições prontas são uma boa opção para um jantar rápido.",
      mapa: "Pingo Doce Peniche"
    },
    {
      nome: "Lidl",
      descPT: "Opção económica com produtos essenciais e boas promoções semanais.",
      descEN: "Budget-friendly with essentials and good weekly deals.",
      descES: "Opción económica con esenciales y buenas ofertas semanales.",
      descFR: "Option économique avec l'essentiel et de bonnes promotions hebdomadaires.",
      tipVB: "Ótimo para fruta, iogurtes e snacks. As promoções de quinta-feira são sempre uma surpresa!",
      mapa: "Lidl Peniche"
    },
    {
      nome: "Intermarché",
      descPT: "Supermercado completo com talho, peixaria e posto de combustível.",
      descEN: "Full supermarket with butcher, fishmonger and petrol station.",
      descES: "Supermercado completo con carnicería, pescadería y gasolinera.",
      descFR: "Supermarché complet avec boucherie, poissonnerie et station-service.",
      tipVB: "O peixe fresco daqui é muito bom — Peniche é terra de pesca e nota-se na qualidade!",
      mapa: "Intermarché Peniche"
    },
    {
      nome: "Aldi",
      descPT: "Prático para compras rápidas do dia-a-dia com bons preços.",
      descEN: "Practical for quick everyday shopping at good prices.",
      descES: "Práctico para compras rápidas del día a día a buenos precios.",
      descFR: "Pratique pour les courses rapides du quotidien à bons prix.",
      tipVB: "Muito perto do centro — ideal quando só precisas de algumas coisas.",
      mapa: "Aldi Peniche"
    }
  ],
  Farmacias: [
    {
      nome: "Farmácia Central",
      descPT: "Farmácia no centro de Peniche, na Rua José Estevão.",
      descEN: "Pharmacy in central Peniche, on Rua José Estevão.",
      descES: "Farmacia en el centro de Peniche, en la Rua José Estevão.",
      descFR: "Pharmacie au centre de Peniche, Rua José Estevão.",
      tipVB: "Fica mesmo no centro da cidade — fácil de combinar com outras compras.",
      mapa: "Farmácia Central, Rua José Estevão 16, Peniche",
      telefone: "262782135",
      horarioPT: "Confirma o horário ao telefone ou no Google Maps (pode variar por época).",
      horarioEN: "Confirm hours by phone or on Google Maps (may vary by season)."
    },
    {
      nome: "Farmácia Proença",
      descPT: "Farmácia na Praça Jacob Rodrigues Pereira, junto à zona da Ajuda.",
      descEN: "Pharmacy on Praça Jacob Rodrigues Pereira, near Ajuda.",
      descES: "Farmacia en la Praça Jacob Rodrigues Pereira, cerca de Ajuda.",
      descFR: "Pharmacie sur la Praça Jacob Rodrigues Pereira, près d'Ajuda.",
      tipVB: "Costuma ter horário alargado — boa opção se precisares mais tarde.",
      mapa: "Farmácia Proença, Praça Jacob Rodrigues Pereira 14-15, Peniche",
      telefone: "262782100",
      horarioPT: "Aproximadamente 09:00–19:00 (confirma localmente, pode variar).",
      horarioEN: "Roughly 09:00–19:00 (please confirm locally, may vary)."
    },
    {
      nome: "Farmácia Higiénica",
      descPT: "Farmácia na Rua António da Conceição Bento, em Peniche.",
      descEN: "Pharmacy on Rua António da Conceição Bento, in Peniche.",
      descES: "Farmacia en la Rua António da Conceição Bento, en Peniche.",
      descFR: "Pharmacie Rua António da Conceição Bento, à Peniche.",
      tipVB: "Boa opção alternativa se a farmácia central estiver cheia.",
      mapa: "Farmácia Higiénica, Rua António da Conceição Bento 21-B, Peniche",
      telefone: "262782415",
      horarioPT: "Confirma o horário ao telefone ou no Google Maps (pode variar por época).",
      horarioEN: "Confirm hours by phone or on Google Maps (may vary by season)."
    },
    {
      nome: "Farmácia Santo Estêvão",
      descPT: "Farmácia em Ferrel, muito perto do VanBerto's Beach House.",
      descEN: "Pharmacy in Ferrel, very close to VanBerto's Beach House.",
      descES: "Farmacia en Ferrel, muy cerca de VanBerto's Beach House.",
      descFR: "Pharmacie à Ferrel, tout près de VanBerto's Beach House.",
      tipVB: "A mais perto de casa! Ótima para uma emergência rápida sem ires até Peniche.",
      mapa: "Farmácia Santo Estêvão, Rua do Brejo 6-B, Ferrel, Peniche",
      telefone: "262758029",
      horarioPT: "Aproximadamente 09:00–13:00 e 14:30–19:30 (confirma localmente).",
      horarioEN: "Roughly 09:00–13:00 and 14:30–19:30 (please confirm locally)."
    },
    {
      nome: "Farmácia Serra",
      descPT: "Farmácia em Serra d'El-Rei, na Avenida da Liberdade (EN 114).",
      descEN: "Pharmacy in Serra d'El-Rei, on Avenida da Liberdade (EN 114).",
      descES: "Farmacia en Serra d'El-Rei, en la Avenida da Liberdade (EN 114).",
      descFR: "Pharmacie à Serra d'El-Rei, Avenida da Liberdade (EN 114).",
      tipVB: "Útil se estiveres a passar por Serra d'El-Rei ou vindo de Óbidos.",
      mapa: "Farmácia Serra, Avenida da Liberdade 78, Serra d'El-Rei",
      telefone: "262909122",
      horarioPT: "Confirma o horário ao telefone ou no Google Maps (pode variar por época).",
      horarioEN: "Confirm hours by phone or on Google Maps (may vary by season)."
    },
    {
      nome: "Farmácia Santa Luzia",
      descPT: "Farmácia em Atouguia da Baleia, junto à Praça Geraldes.",
      descEN: "Pharmacy in Atouguia da Baleia, near Praça Geraldes.",
      descES: "Farmacia en Atouguia da Baleia, junto a la Praça Geraldes.",
      descFR: "Pharmacie à Atouguia da Baleia, près de la Praça Geraldes.",
      tipVB: "Boa opção se estiveres do lado de Atouguia da Baleia.",
      mapa: "Farmácia Santa Luzia, Praça Geraldes 1, Atouguia da Baleia",
      telefone: "262769265",
      horarioPT: "Aproximadamente 09:00–13:00 e 15:00–20:00 (confirma localmente).",
      horarioEN: "Roughly 09:00–13:00 and 15:00–20:00 (please confirm locally)."
    },
    {
      nome: "Farmácia Confiança",
      descPT: "Farmácia na Rua José Augusto Vaz, do lado de Atouguia da Baleia.",
      descEN: "Pharmacy on Rua José Augusto Vaz, on the Atouguia da Baleia side.",
      descES: "Farmacia en la Rua José Augusto Vaz, del lado de Atouguia da Baleia.",
      descFR: "Pharmacie Rua José Augusto Vaz, côté Atouguia da Baleia.",
      tipVB: "Mais uma opção se as farmácias do centro estiverem fechadas.",
      mapa: "Farmácia Confiança, Rua José Augusto Vaz 5, Atouguia da Baleia",
      telefone: "262759171",
      horarioPT: "Confirma o horário ao telefone ou no Google Maps (pode variar por época).",
      horarioEN: "Confirm hours by phone or on Google Maps (may vary by season)."
    }
  ],
  Restaurantes: [
    {
      nome: "Tasca do Joel",
      descPT: "Restaurante clássico de Peniche para peixe fresco e marisco. Ambiente familiar e autêntico.",
      descEN: "Classic Peniche restaurant for fresh fish and seafood. Family and authentic feel.",
      descES: "Restaurante clásico de Peniche para pescado fresco y marisco. Ambiente familiar y auténtico.",
      descFR: "Restaurant classique de Peniche pour poisson frais et fruits de mer. Ambiance familiale et authentique.",
      tipVB: "Um dos nossos favoritos! O peixe grelhado e as amêijoas à Bulhão Pato são imperdíveis.",
      mapa: "Tasca do Joel Peniche"
    },
    {
      nome: "Taberna do Ganhão",
      descPT: "Petiscos e pratos típicos portugueses num espaço acolhedor e descontraído.",
      descEN: "Traditional Portuguese tapas and dishes in a warm, relaxed space.",
      descES: "Tapas y platos típicos portugueses en un espacio acogedor y relajado.",
      descFR: "Tapas et plats typiques portugais dans un espace chaleureux et décontracté.",
      tipVB: "Perfeito para um jantar tardio com amigos. O polvo à lagareiro é divinal!",
      mapa: "Taberna do Ganhão Peniche"
    },
    {
      nome: "O Pedro",
      descPT: "Excelente peixe grelhado e comida tradicional portuguesa com preços honestos.",
      descEN: "Excellent grilled fish and local cuisine at honest prices.",
      descES: "Excelente pescado a la brasa y cocina tradicional portuguesa a precios honestos.",
      descFR: "Excellent poisson grillé et cuisine locale à prix honnêtes.",
      tipVB: "Muito bom e sempre cheio — reserva mesa com antecedência no verão!",
      mapa: "Restaurante O Pedro Peniche"
    },
    {
      nome: "D Raiz",
      descPT: "Cozinha moderna com sabores regionais e ingredientes locais.",
      descEN: "Modern cuisine with regional flavours and local ingredients.",
      descES: "Cocina moderna con sabores regionales e ingredientes locales.",
      descFR: "Cuisine moderne aux saveurs régionales et aux ingrédients locaux.",
      tipVB: "Para uma refeição mais especial — a carta muda com a estação e está sempre deliciosa.",
      mapa: "D Raiz Peniche"
    },
    {
      nome: "Italiano O Outro",
      descPT: "Massas artesanais e pizzas num ambiente descontraído. Ótimo para famílias.",
      descEN: "Handmade pasta and pizzas in a relaxed atmosphere. Great for families.",
      descES: "Pasta artesanal y pizzas en ambiente relajado. Perfecto para familias.",
      descFR: "Pâtes maison et pizzas dans une ambiance décontractée. Idéal pour les familles.",
      tipVB: "A nossa escolha quando queremos pizza — as massas frescas são feitas na hora!",
      mapa: "Italiano O Outro Peniche"
    },
    {
      nome: "Mundano Baleal",
      descPT: "Restaurante jovem com vista para o mar, cocktails e ambiente animado.",
      descEN: "Trendy spot with sea view, cocktails and a lively vibe.",
      descES: "Restaurante moderno con vista al mar, cócteles y ambiente animado.",
      descFR: "Restaurant tendance avec vue sur la mer, cocktails et ambiance animée.",
      tipVB: "Ótimo para um jantar com vista para o oceano. Os cocktails são muito bons!",
      mapa: "Mundano Baleal"
    },
    {
      nome: "Maresia",
      descPT: "Restaurante mesmo na praia do Baleal, com boa comida e ambiente de verão.",
      descEN: "Right on Baleal beach, good food and summer vibes.",
      descES: "Justo en la playa de Baleal, buena comida y ambiente veraniego.",
      descFR: "Directement sur la plage de Baleal, bonne cuisine et ambiance estivale.",
      tipVB: "Adoramos o pequeno-almoço aqui ao fim de semana — os ovos Benedict são de outro mundo!",
      mapa: "Maresia Baleal"
    },
    {
      nome: "Miyabi Sushi",
      descPT: "Sushi fresco e variado, uma boa alternativa ao peixe grelhado.",
      descEN: "Fresh and varied sushi, a great alternative to grilled fish.",
      descES: "Sushi fresco y variado, una buena alternativa al pescado a la brasa.",
      descFR: "Sushis frais et variés, une bonne alternative au poisson grillé.",
      tipVB: "Surpreendentemente bom para uma cidade de praia! O sushi de peixe local é muito fresco.",
      mapa: "Miyabi Sushi Peniche"
    },
    {
      nome: "Marisqueira Mirandum",
      descPT: "Marisqueira muito procurada pelos visitantes, com marisco fresquíssimo.",
      descEN: "Very popular seafood restaurant with the freshest shellfish.",
      descES: "Marisquería muy popular entre los visitantes, con marisco fresquísimo.",
      descFR: "Restaurant de fruits de mer très populaire, avec des produits ultra-frais.",
      tipVB: "As lagostas e as gambas são espetaculares — para uma refeição especial!",
      mapa: "Marisqueira Mirandum Peniche"
    },
    {
      nome: "Marisqueira dos Cortiçais",
      descPT: "Marisco tradicional muito apreciado pelos locais — um sinal de qualidade.",
      descEN: "Traditional seafood, highly appreciated by locals — always a good sign.",
      descES: "Marisco tradicional muy apreciado por los lugareños — siempre buena señal.",
      descFR: "Fruits de mer traditionnels très appréciés des locaux — toujours bon signe.",
      tipVB: "O sítio preferido dos pescadores locais — quando os locais comem lá, é sempre bom sinal!",
      mapa: "Marisqueira dos Cortiçais Peniche"
    },
    {
      nome: "Bateira",
      descPT: "Restaurante descontraído junto ao mar com bons petiscos e refeições.",
      descEN: "Relaxed beachside spot for snacks and full meals.",
      descES: "Lugar relajado junto al mar para tapas y comidas completas.",
      descFR: "Endroit décontracté en bord de mer pour grignoter ou dîner.",
      tipVB: "Ótimo para um almoço rápido depois da praia — o prego no pão é muito bom!",
      mapa: "Restaurante Bateira Peniche"
    }
  ],
  Churrasqueiras: [
    {
      nome: "A Caseirinha",
      descPT: "Frango de churrasco muito saboroso — um clássico em Peniche.",
      descEN: "Very tasty grilled chicken — a Peniche classic.",
      descES: "Pollo a la brasa muy sabroso — un clásico en Peniche.",
      descFR: "Poulet grillé très savoureux — un classique à Peniche.",
      tipVB: "O nosso take-away de eleição! O frango com piri-piri daqui é fantástico. Chega cedo — esgota rápido!",
      mapa: "Churrasqueira A Caseirinha Peniche"
    },
    {
      nome: "Churrasqueira O Nortista",
      descPT: "Take-away muito popular entre os residentes, ótimo custo-benefício.",
      descEN: "Popular takeaway among locals, great value for money.",
      descES: "Comida para llevar muy popular entre los residentes, excelente relación calidad-precio.",
      descFR: "Plats à emporter très populaires chez les résidents, excellent rapport qualité-prix.",
      tipVB: "Rápido, barato e muito bom — ideal quando se quer uma refeição sem complicações.",
      mapa: "Churrasqueira O Nortista Peniche"
    },
    {
      nome: "Churrasqueira Vó Dina",
      descPT: "Refeições económicas, bem servidas e com sabor a casa.",
      descEN: "Budget-friendly, generous portions with a home-cooked feel.",
      descES: "Comidas económicas, bien servidas y con sabor casero.",
      descFR: "Repas économiques, bien servis et cuisinés maison.",
      tipVB: "Ótimo para um jantar económico sem abdicar da qualidade. A caldeirada é especial!",
      mapa: "Churrasqueira Vó Dina Peniche"
    }
  ],
  Bares: [
    {
      nome: "Danau Beach Bar",
      descPT: "Bar de praia com ambiente tropical e descontraído no Baleal.",
      descEN: "Tropical style beach bar in Baleal with a relaxed vibe.",
      descES: "Bar de playa con ambiente tropical y relajado en Baleal.",
      descFR: "Bar de plage au style tropical et décontracté à Baleal.",
      tipVB: "O nosso bar de praia favorito aqui no Baleal! Os caipirinhas são perfeitos ao fim do dia.",
      mapa: "Danau Beach Bar Baleal"
    },
    {
      nome: "Bar do Quebrado",
      descPT: "Bar junto à praia, ótimo para o final da tarde e ver o pôr do sol.",
      descEN: "Chilled beach bar, great for late afternoon and watching the sunset.",
      descES: "Bar junto a la playa, ideal para el final de la tarde y ver el atardecer.",
      descFR: "Bar de plage sympa, idéal pour la fin d'après-midi et le coucher du soleil.",
      tipVB: "Vista fantástica para o pôr do sol — um copo na mão e o sol a descer. Perfeito!",
      mapa: "Bar do Quebrado Peniche"
    },
    {
      nome: "Bar do Bruno",
      descPT: "Bar simples, animado e muito popular entre surfistas e locais.",
      descEN: "Simple and lively bar, very popular with surfers and locals.",
      descES: "Bar sencillo y animado, muy popular entre surfistas y lugareños.",
      descFR: "Bar simple et animé, très populaire parmi les surfeurs et les habitants.",
      tipVB: "Se quiseres conhecer a vibe local de Peniche, é aqui. Sempre com boa música!",
      mapa: "Bar do Bruno Peniche"
    },
    {
      nome: "Java House",
      descPT: "Café e bar com ambiente jovem, boa música e cocktails criativos.",
      descEN: "Cafe and bar with a young vibe, good music and creative cocktails.",
      descES: "Café y bar con ambiente joven, buena música y cócteles creativos.",
      descFR: "Café et bar avec une ambiance jeune, bonne musique et cocktails créatifs.",
      tipVB: "Ótimo para um brunch relaxado ou para começar a noite. O café é muito bom!",
      mapa: "Java House Peniche"
    },
    {
      nome: "Gamboa Bar",
      descPT: "Perfeito para ver o pôr do sol na Praia da Gamboa com uma bebida na mão.",
      descEN: "Perfect spot to watch the sunset at Gamboa beach with a drink in hand.",
      descES: "El lugar perfecto para ver el atardecer en la playa de Gamboa con una bebida.",
      descFR: "L'endroit parfait pour regarder le coucher de soleil à Gamboa avec un verre.",
      tipVB: "Um dos melhores pôres do sol de Peniche — chega um pouco antes para garantir lugar.",
      mapa: "Gamboa Bar Peniche"
    },
    {
      nome: "Tribo da Praia – Bar da Praia",
      descPT: "Bar alternativo e descontraído no Baleal, com música ao vivo e ambiente surf.",
      descEN: "Alternative and relaxed bar in Baleal, with live music and surf vibes.",
      descES: "Bar alternativo y relajado en Baleal, con música en vivo y ambiente surf.",
      descFR: "Bar alternatif et décontracté à Baleal, avec musique live et ambiance surf.",
      tipVB: "Às sextas-feiras têm música ao vivo — muito boa vibração!",
      mapa: "Tribo da Praia Baleal"
    },
    {
      nome: "The Base",
      descPT: "Bar animado com música e muita energia surfista no Baleal.",
      descEN: "Lively bar with music and lots of surf energy in Baleal.",
      descES: "Bar animado con música y mucha energía surfera en Baleal.",
      descFR: "Bar animé avec musique et plein d'énergie surf à Baleal.",
      tipVB: "Bom para noites mais animadas — fica mesmo na zona do Baleal, muito perto de casa!",
      mapa: "The Base Baleal"
    },
    {
      nome: "Supertubos Beach Bar",
      descPT: "Bar mesmo em frente às ondas de Supertubos, ótimo para ver surf.",
      descEN: "Bar right in front of Supertubos waves, great for watching surf.",
      descES: "Bar justo frente a las olas de Supertubos, ideal para ver surf.",
      descFR: "Bar directement devant les vagues de Supertubos, idéal pour regarder le surf.",
      tipVB: "Ver surf de copo na mão é uma experiência única — especialmente no inverno com ondas grandes!",
      mapa: "Supertubos Beach Bar"
    },
    {
      nome: "Bananas Beach Bar",
      descPT: "Bar colorido e divertido, diretamente na praia do Baleal.",
      descEN: "Colourful and fun beach bar right on Baleal beach.",
      descES: "Bar colorido y divertido, directamente en la playa de Baleal.",
      descFR: "Bar coloré et amusant, directement sur la plage de Baleal.",
      tipVB: "Ótimo para um almoço descontraído de pés na areia — os batidos são deliciosos!",
      mapa: "Bananas Beach Bar Baleal"
    }
  ],
  FastFood: [
    {
      nome: "Burger King",
      descPT: "Fast-food internacional perto da zona comercial de Peniche.",
      descEN: "International fast-food near Peniche's commercial area.",
      descES: "Comida rápida internacional cerca de la zona comercial de Peniche.",
      descFR: "Restauration rapide internationale près de la zone commerciale de Peniche.",
      tipVB: "Quando as crianças insistem! Fica no centro comercial a 5 minutos de carro.",
      mapa: "Burger King Peniche"
    },
    {
      nome: "Telepizza 🍕",
      descPT: "Pizzas para levar ou pedir entrega em casa — rápido e prático.",
      descEN: "Pizza for takeaway or home delivery — quick and convenient.",
      descES: "Pizzas para llevar o pedir a domicilio — rápido y práctico.",
      descFR: "Pizzas à emporter ou en livraison — rapide et pratique.",
      tipVB: "Boa opção para quando estão todos cansados e querem uma noite de filme com pizza!",
      mapa: "Telepizza Peniche"
    },
    {
      nome: "Duna Kebab",
      descPT: "Kebabs e refeições rápidas muito populares entre os surfistas.",
      descEN: "Kebabs and quick meals very popular with surfers.",
      descES: "Kebabs y comidas rápidas muy populares entre los surfistas.",
      descFR: "Kebabs et repas rapides très populaires parmi les surfeurs.",
      tipVB: "Depois de um dia de surf, um kebab grande resolve tudo! Atende tarde — ótimo para saídas noturnas.",
      mapa: "Duna Kebab Peniche"
    },
    {
      nome: "Yo-Yo Kebab e Pizzas 🍕",
      descPT: "Kebabs, pizzas e hambúrgueres — boa variedade para toda a família.",
      descEN: "Kebabs, pizzas and burgers — great variety for the whole family.",
      descES: "Kebabs, pizzas y hamburguesas — gran variedad para toda la familia.",
      descFR: "Kebabs, pizzas et burgers — grande variété pour toute la famille.",
      tipVB: "Prático e rápido quando o tempo escasseia. As pizzas são surpreendentemente boas!",
      mapa: "Yo Yo Kebab Peniche"
    },
    {
      nome: "Boina Verde Snack-Bar",
      descPT: "Petiscos e refeições rápidas num ambiente local e descontraído.",
      descEN: "Snacks and quick meals in a local, relaxed setting.",
      descES: "Tapas y comidas rápidas en un ambiente local y relajado.",
      descFR: "Snacks et repas rapides dans un cadre local et décontracté.",
      tipVB: "Um sítio simpático para um almoço rápido e sem pretensões. Os bifanas são muito bons!",
      mapa: "Boina Verde Peniche"
    }

  ],
  Eventos: [{
      nome: "Mercado Municipal de Peniche",
      descPT: "Bom local para ver peixe fresco, produtos regionais e sentir o ritmo da cidade.",
      descEN: "Great place to see fresh fish, regional products and the town vibe.",
      descES: "Buen lugar para ver pescado fresco, productos regionales y sentir el ritmo de la ciudad.",
      descFR: "Bon endroit pour voir du poisson frais, des produits régionaux et sentir le rythme de la ville.",
      mapa: "Mercado Municipal de Peniche"
    },
    {
      nome: "Cabo Carvoeiro (pôr do sol)",
      descPT: "Miradouro com vistas incríveis. Sugestão: ir ao final da tarde para ver o pôr do sol.",
      descEN: "Viewpoint with amazing scenery. Tip: go in the late afternoon for sunset.",
      descES: "Mirador con vistas increíbles. Consejo: ve al final de la tarde para ver la puesta de sol.",
      descFR: "Point de vue avec des paysages incroyables. Astuce : viens en fin d'après-midi pour voir le coucher de soleil.",
      mapa: "Cabo Carvoeiro"
    },
    {
      nome: "Praia dos Supertubos (surf em época)",
      descPT: "Quando há provas, Supertubos recebe competições de surf. Confirma cartazes e redes sociais na semana.",
      descEN: "During event weeks, Supertubos hosts surf competitions. Check posters and social media that week.",
      descES: "Cuando hay pruebas, Supertubos acoge competiciones de surf. Consulta carteles y redes sociales esa semana.",
      descFR: "Lors des semaines d'événements, Supertubos accueille des compétitions de surf. Vérifie les affiches et les réseaux sociaux cette semaine-là.",
      mapa: "Praia dos Supertubos"
    }
,
    {
      nome: "🇵🇹 Feriado: Ano Novo",
      descPT: "Feriado nacional em Portugal.",
      descEN: "National holiday in Portugal.",
      descES: "Festivo nacional en Portugal.",
      descFR: "Jour férié national au Portugal.",
      mapa: "Portugal",
      dataISO: "2026-01-01",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🎭 Carnaval (data habitual)",
      descPT: "Dia de Carnaval (tolerância de ponto em muitos locais). Confirma localmente.",
      descEN: "Carnival day (often optional). Please confirm locally.",
      descES: "Día de Carnaval (a menudo opcional). Confirma localmente.",
      descFR: "Jour de Carnaval (souvent facultatif). Merci de confirmer localement.",
      mapa: "Peniche",
      dataISO: "2026-02-17",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "✝️ Sexta-Feira Santa",
      descPT: "Feriado nacional (Sexta-Feira Santa).",
      descEN: "National holiday (Good Friday).",
      descES: "Festivo nacional (Viernes Santo).",
      descFR: "Jour férié national (Vendredi saint).",
      mapa: "Peniche",
      dataISO: "2026-04-03",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🇵🇹 25 de Abril",
      descPT: "Dia da Liberdade (feriado nacional).",
      descEN: "Freedom Day (national holiday).",
      descES: "Día de la Libertad (festivo nacional).",
      descFR: "Jour de la Liberté (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-04-25",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "👷 Dia do Trabalhador",
      descPT: "1 de Maio (feriado nacional).",
      descEN: "Labour Day (national holiday).",
      descES: "1 de mayo (festivo nacional).",
      descFR: "1er mai (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-05-01",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "⛪ Corpo de Deus",
      descPT: "Corpo de Deus (feriado nacional).",
      descEN: "Corpus Christi (national holiday).",
      descES: "Corpus Christi (festivo nacional).",
      descFR: "Fête-Dieu (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-06-04",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🇵🇹 Dia de Portugal",
      descPT: "10 de Junho (feriado nacional).",
      descEN: "Portugal Day (national holiday).",
      descES: "10 de junio (festivo nacional).",
      descFR: "10 juin (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-06-10",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🎉 Festa em honra de N.ª Sr.ª da Boa Viagem (Peniche) — início",
      descPT: "Festa de Peniche em honra de N.ª Sr.ª da Boa Viagem (datas anunciadas: 10 de julho a 3 de agosto de 2026). Confirma programa.",
      descEN: "Peniche festivities (announced dates: 10 July to 3 Aug 2026). Please confirm programme.",
      descES: "Fiesta de Peniche en honor de Nuestra Señora de la Buena Travesía (fechas anunciadas: 10 de julio a 3 de agosto de 2026). Confirma el programa.",
      descFR: "Fête de Peniche en l'honneur de Notre-Dame du Bon Voyage (dates annoncées : du 10 juillet au 3 août 2026). Merci de confirmer le programme.",
      mapa: "Ribeira Antiga Peniche",
      dataISO: "2026-07-10",
      horaInicio: "12:00",
      horaFim: "13:00",
      local: "Peniche"
    },
    {
      nome: "🏛️ Dia do Município / Feriado Municipal de Peniche",
      descPT: "Feriado municipal (Dia do Município) — 5 de agosto.",
      descEN: "Municipal holiday (Municipality Day) — 5 August.",
      descES: "Festivo municipal (Día del Municipio) — 5 de agosto.",
      descFR: "Jour férié municipal (Jour de la Municipalité) — 5 août.",
      mapa: "Câmara Municipal de Peniche",
      dataISO: "2026-08-05",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🙏 Assunção de Nossa Senhora",
      descPT: "15 de agosto (feriado nacional).",
      descEN: "Assumption Day (national holiday).",
      descES: "15 de agosto (festivo nacional).",
      descFR: "15 août (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-08-15",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🇵🇹 Implantação da República",
      descPT: "5 de outubro (feriado nacional).",
      descEN: "Republic Day (national holiday).",
      descES: "5 de octubre (festivo nacional).",
      descFR: "5 octobre (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-10-05",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🕯️ Dia de Todos os Santos",
      descPT: "1 de novembro (feriado nacional).",
      descEN: "All Saints' Day (national holiday).",
      descES: "1 de noviembre (festivo nacional).",
      descFR: "1er novembre (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-11-01",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🇵🇹 Restauração da Independência",
      descPT: "1 de dezembro (feriado nacional).",
      descEN: "Independence Restoration Day (national holiday).",
      descES: "1 de diciembre (festivo nacional).",
      descFR: "1er décembre (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-12-01",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "✨ Imaculada Conceição",
      descPT: "8 de dezembro (feriado nacional).",
      descEN: "Immaculate Conception (national holiday).",
      descES: "8 de diciembre (festivo nacional).",
      descFR: "8 décembre (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-12-08",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🎄 Natal",
      descPT: "25 de dezembro (feriado nacional).",
      descEN: "Christmas Day (national holiday).",
      descES: "25 de diciembre (festivo nacional).",
      descFR: "25 décembre (jour férié national).",
      mapa: "Peniche",
      dataISO: "2026-12-25",
      horaInicio: "09:00",
      horaFim: "10:00",
      local: "Peniche"
    },
    {
      nome: "🎶 Baleal Offshore Beats",
      link: "https://balealoffshorebeats.pt",
      descPT: "Festival no Baleal/Ferrel. Datas variam — consulta a agenda oficial.",
      descEN: "Festival in Baleal/Ferrel. Dates vary — check official agenda.",
      descES: "Festival en Baleal/Ferrel. Las fechas varían — consulta la agenda oficial.",
      descFR: "Festival à Baleal/Ferrel. Les dates varient — consulte l'agenda officiel.",
      mapa: "Baleal Ferrel",
      local: "Baleal"
    },
    {
      nome: "⛪ Festas de Santo Estêvão (Baleal)",
      descPT: "Festas com procissão à volta da ilha. Datas variam — confirma na página oficial.",
      descEN: "Local festivities with procession around the island. Dates vary — please confirm.",
      descES: "Fiestas con procesión alrededor de la isla. Las fechas varían — confirma en la página oficial.",
      descFR: "Fêtes avec procession autour de l'île. Les dates varient — merci de confirmer sur la page officielle.",
      mapa: "Ilha do Baleal",
      local: "Baleal"
    }
]
};

