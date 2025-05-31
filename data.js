const cardData = {
  elm: [
    {
      question: "1) Chyby měření: třída přesnosti, chyba digitálního přístroje, šíření chyb ve výpočtech.",
      answer: [
        "Třída přesnosti (TP): Maximální povolená absolutní chyba v % z měřicího rozsahu.",
        "Chyba digitálního přístroje: součet chyby čtení (procento z hodnoty) a chyby z rozsahu (procento nebo digity).",
        "Příklad: ±(0,05 % + 2 digity) znamená chybu podle hodnoty i podle posledního čísla.",
        "Při výpočtech se absolutní chyby sčítají při sčítání a odčítání, relativní chyby při násobení a dělení."
      ]
    },
    {
      question: "2) Nejistoty měření: standardní nejistota typu A, typu B, kombinovaná a rozšířená nejistota.",
      answer: [
        "Typ A: získaná statistickou analýzou opakovaných měření (směrodatná odchylka).",
        "Typ B: odhadnutá na základě zkušeností, specifikací, kalibrací.",
        "Kombinovaná nejistota: výpočet kvadratickým součtem nejistot typu A a B.",
        "Rozšířená nejistota: kombinovaná nejistota × koeficient pokrytí (např. k = 2 pro 95 % pravděpodobnost)."
      ]
    },
    {
      question: "3) Měření el. proudu: přístroje pro měření DC a AC proudu, AC/DC komparátor.",
      answer: [
        "DC proud: měřen magnetoelektrickými přístroji, digitálními multimetry nebo zesilovači s TIA.",
        "AC proud: magnetoelektrické přístroje s usměrňovačem, elektromagnetické přístroje, měřicí transformátory, Hallovy sondy.",
        "AC/DC komparátor: měří přesnou efektivní hodnotu porovnáním tepelného účinku AC a DC proudu pomocí termočlánku."
      ]
    },
    {
      question: "4) Měření el. napětí: přístroje pro měř. DC a AC napětí, AC/DC komparátor, kompenzátor DC napětí.",
      answer: [
        "DC napětí: magnetoelektrické přístroje (např. MX1), digitální multimetry (např. Keysight 34401A), elektrostatické voltmetry.",
        "AC napětí: měření pomocí usměrňovače, elektromagnetických nebo elektrostatických přístrojů.",
        "Kompenzátor DC napětí: bezzátěžové měření, princip: nastaví se napětí Un tak, aby byl nulový proud v indikátoru.",
        "AC/DC komparátor: metoda srovnání tepelných účinků (termopáry, odpor)."
      ]
    },
    {
      question: "5) Etalony el. napětí: Westonův článek, kvantový etalon napětí, elektronické etalony napětí.",
      answer: [
        "Westonův článek: elektrochemický článek s výstupem 1,01865 V, používán do 1990 jako primární etalon.",
        "Kvantový etalon: využívá Josephsonův jev, přesnost řádu nanovoltů, od 2004 v ČR pro 1 V, od 2009 pro 10 V.",
        "Elektronické etalony: Zenerovy diody s teplotní kompenzací (např. LM399), stabilní referenční napětí pro kalibraci."
      ]
    },
    {
      question: "6) Etalony el. proudu: etalon stejnosměrného proudu, elektronické etalony proudu, kvantové etalony.",
      answer: [
        "Etalon DC proudu: přesný odpor a napěťový etalon → výpočet proudu.",
        "Elektronické etalony: proudové zdroje s přesnou regulací, TIA.",
        "Kvantové etalony: experimentální, využívající jednotkový přenos náboje (např. jednoelektronové pumpy)."
      ]
    },
    {
      question: "7) Měření odporu: přímá a nepřímá metoda, 2vodičové a 4vodičové měření, měřicí proud.",
      answer: [
        "Přímá metoda: výpočet R = U / I.",
        "Nepřímá metoda: srovnávání s etalonem, můstky (Wheatstone).",
        "2vodičové: vodiče zavedou chybu, vhodné pro vyšší odpory.",
        "4vodičové: eliminuje odpor vodičů, vhodné pro nízké odpory.",
        "Měřicí proud: nesmí způsobit ohřev – jinak mění výsledek."
      ]
    },
    {
      question: "8) Měření frekvence: čítače, osciloskopy, nejistoty, omezení.",
      answer: [
        "Čítače: přímé počítání impulzů v čase – velmi přesné.",
        "Osciloskopy: měření periody a převod na frekvenci.",
        "Omezení: rychlost vzorkování, rozlišení, jitter.",
        "Nejistota: daná stabilitou časové základny, šumem."
      ]
    },
    {
      question: "9) Měření fázového posuvu: metody, přístroje, využití.",
      answer: [
        "Metoda Lissajousových obrazců na osciloskopu.",
        "Čítače s funkcí fázového posunu.",
        "Digitální analyzátory – FFT metoda.",
        "Využití: výkonová měření, kompenzace, regulace."
      ]
    },
    {
      question: "10) Měření výkonu: metody, přístroje, chyby.",
      answer: [
        "Činný výkon: P = U·I·cosφ – měřen watmetry.",
        "Jalový výkon: Q = U·I·sinφ.",
        "Zdánlivý výkon: S = U·I.",
        "Přístroje: analogové i digitální wattmetry.",
        "Chyby: fázový posun, zkreslení, rozsah přístrojů."
      ]
    },
    {
      question: "11) Měření spotřeby el. energie: elektroměry, chyby, zátěžové profily.",
      answer: [
        "Elektromechanické elektroměry: kotouč, integrace výkonu v čase.",
        "Elektronické elektroměry: měření proudu, napětí a výpočty výkonu.",
        "Chyby: nízký proud, nesymetrie, teplota.",
        "Zátěžové profily: spotřeba v čase – pro optimalizaci tarifů."
      ]
    },
    {
      question: "12) Měření impedance: odpor, indukčnost, kapacita – metody, přístroje.",
      answer: [
        "Přímé metody: RLC můstky, měření fázového posunu.",
        "Indirektní metody: vektorové analyzátory, LCR metry.",
        "Impedance = komplexní odpor – závisí na frekvenci.",
        "Využití: charakterizace obvodů, materiálů, prvků."
      ]
    },
    {
      question: "13) Měření výkonu a spotřeby: analogové a digitální wattmetry, chyby.",
      answer: [
        "Analogové: elektrodynamické, ferodynamické.",
        "Digitální: vzorkování U a I, výpočty.",
        "Chyby: fázový posun, harmonické, teplotní závislost.",
        "Spotřeba: integrace výkonu v čase – elektroměr."
      ]
    },
    {
      question: "14) Elektromechanické přístroje: typy, princip, využití.",
      answer: [
        "Magnetoelektrické: pro DC, lineární odezva.",
        "Elektrodynamické: pro DC i AC, princip sil.",
        "Feromagnetické: odolné, menší přesnost.",
        "Využití: měření proudu, napětí, výkonu."
      ]
    },
    {
      question: "15) Digitální multimetry: funkce, parametry, chyby.",
      answer: [
        "Měří napětí, proud, odpor, frekvenci, teplotu.",
        "Parametry: rozlišení, přesnost, vstupní odpor.",
        "Chyby: offset, noise, špatné přepočty rozsahů.",
        "Funkce: auto-range, hold, min/max, statistiky."
      ]
    },
    {
      question: "16) Osciloskopy: princip, použití, chyby.",
      answer: [
        "Zobrazují průběh napětí v čase.",
        "Typy: analogové, digitální (DSO).",
        "Chyby: časová základna, vstupní kapacita, aliasing.",
        "Použití: analýza signálů, detekce poruch, ladění."
      ]
    },
    {
      question: "17) Měření magnetických veličin: pole, indukce, permeabilita.",
      answer: [
        "Pole (H): pomocí magnetometrů (např. Hall sondy).",
        "Indukce (B): integrací napětí na cívce.",
        "Permeabilita: výpočty z H a B, materiálová konstanta.",
        "Použití: materiálový výzkum, EMC, motory."
      ]
    },
    {
      question: "18) Měřicí převodníky: princip, typy, použití.",
      answer: [
        "Převádí fyzikální veličiny na elektrické signály.",
        "Typy: napěťové, proudové, digitální.",
        "Principy: odporový, indukční, kapacitní, optický.",
        "Použití: průmysl, senzory, měřicí systémy."
      ]
    },
    {
      question: "19) Analogově-digitální převod: typy, parametry, chyby.",
      answer: [
        "Typy: SAR, sigma-delta, flash, pipeline.",
        "Parametry: rozlišení (bitů), rychlost, přesnost.",
        "Chyby: kvantizační, offset, šum.",
        "Vliv: na výslednou přesnost měření signálu."
      ]
    },
    {
      question: "20) Digitálně-analogový převod: princip, chyby, aplikace.",
      answer: [
        "Princip: převod čísla na napětí/proud.",
        "Typy: R-2R, váhové DAC, sigma-delta.",
        "Chyby: nelinearita, šum, offset.",
        "Použití: řízení, generátory signálů, zvukové karty."
      ]
    },
    {
      question: "21) Měření malých napětí a proudů: problémy, řešení.",
      answer: [
        "Problémy: šum, offset, termoelektrické napětí.",
        "Řešení: stínění, nízkošumové zesilovače, diferenciální měření.",
        "Použití: biosignály, termočlánky, senzory."
      ]
    },
    {
      question: "22) Měření vysokých napětí a proudů: děliče, převodníky.",
      answer: [
        "Napěťové děliče: odporové, kapacitní.",
        "Proudové převodníky: Hall sondy, Rogowského cívky, měřicí transformátory.",
        "Bezpečnost: galvanické oddělení, ochrany."
      ]
    },
    {
      question: "23) Měření v energetice: specifika, přístroje.",
      answer: [
        "Specifika: vysoké napětí, velké výkony, EMC.",
        "Přístroje: elektroměry, analyzátory sítě, převodníky.",
        "Požadavky: přesnost, bezpečnost, dlouhodobá stabilita."
      ]
    },
    {
      question: "24) Kompenzační metody měření: princip, výhody.",
      answer: [
        "Princip: nastavení protinapětí tak, aby nulový proud tekl měřicím obvodem.",
        "Výhoda: měření bez zatěžování měřeného zdroje.",
        "Použití: přesné laboratorní měření napětí (kompenzátory)."
      ]
    },
    {
      question: "25) Přístroje s nulovou indikací: typy, použití.",
      answer: [
        "Typy: galvanometr, nulový detektor.",
        "Použití: kompenzační metody, můstky.",
        "Výhoda: vysoká přesnost, malý vliv na měřený obvod."
      ]
    },
    {
      question: "26) Můstkové metody měření: typy, aplikace.",
      answer: [
        "Typy: Wheatstoneův (odpor), Maxwellův (indukčnost), Scheringův (kapacita).",
        "Použití: laboratorní měření, kalibrace.",
        "Přesnost závisí na symetrii, citlivosti detektoru."
      ]
    },
    {
      question: "27) Měření efektivní hodnoty: metody, přístroje.",
      answer: [
        "Metody: výpočet z usměrněného signálu, tepelné účinky.",
        "Přístroje: true RMS multimetry, termočlánky.",
        "Důležité při měření neharmonických signálů."
      ]
    },
    {
      question: "28) Přenos signálů v měřicích systémech: analog, digitál.",
      answer: [
        "Analog: jednoduchý, náchylný k rušení.",
        "Digitál: vyšší odolnost, možnost korekce.",
        "Protokoly: RS232, USB, Ethernet, SPI, I2C."
      ]
    },
    {
      question: "29) Kalibrace měřidel: význam, postup.",
      answer: [
        "Kalibrace: porovnání s etalonem, určení odchylky.",
        "Postup: referenční měření, výpočet chyby, záznam.",
        "Význam: zajištění správnosti měření, kvalita, certifikace."
      ]
    },
    {
      question: "30) Měřicí řetězec: prvky, funkce.",
      answer: [
        "Prvky: snímač – převodník – A/D – zpracování – výstup.",
        "Funkce: převod fyzikální veličiny na použitelný signál.",
        "Klíčová je přesnost každého článku řetězce."
      ]
    },
    {
      question: "31) Vliv teploty na měření: příklady, kompenzace.",
      answer: [
        "Přístroje i snímače mohou měnit charakteristiky s teplotou.",
        "Příklady: změna odporu vodiče, offset zesilovače.",
        "Kompenzace: teplotní čidla, korekční algoritmy, stabilizace teploty."
      ]
    },
    {
      question: "32) Měření se záznamem: dataloggery, formáty dat.",
      answer: [
        "Dataloggery: automatizované záznamové přístroje.",
        "Formáty: CSV, XML, binární – podle aplikace.",
        "Důležité: přesné časové značky, vzorkování, validace dat."
      ]
    },
    {
      question: "33) Software pro měření: příklady, požadavky.",
      answer: [
        "Příklady: LabVIEW, MATLAB, Python (PyVisa), proprietary software.",
        "Požadavky: ovladače, stabilita, uživatelská přívětivost.",
        "Možnosti: automatizace, záznam, analýza, vzdálený přístup."
      ]
    },
    {
      question: "34) EMC (elektromagnetická kompatibilita): vliv na měření.",
      answer: [
        "EMC: schopnost zařízení správně fungovat i v přítomnosti rušení.",
        "Vliv na měření: šum, rušení signálů, chybná data.",
        "Řešení: stínění, filtrace, optické oddělení, správné uzemnění."
      ]
    },
    {
      question: "35) Měření v reálném čase: požadavky, aplikace.",
      answer: [
        "Požadavky: nízké zpoždění, rychlé A/D převody, efektivní software.",
        "Aplikace: řízení procesů, ochranné systémy, monitorování.",
        "Přenos: často digitální, přes sběrnice (např. CAN, Ethernet)."
      ]
    },
    {
      question: "36) Vliv napájení a zemnění na přesnost měření.",
      answer: [
        "Nestabilní napájení může způsobit kolísání výstupu.",
        "Špatné zemnění = vznik zemních smyček, rušení.",
        "Řešení: kvalitní zdroje, oddělení analog/digitál, hvězdicová topologie zemnění."
      ]
    },
    {
      question: "37) Interní testování přístrojů: funkce, význam.",
      answer: [
        "Self-test: zjištění funkčnosti bez externího signálu.",
        "Význam: diagnostika chyb, rychlé ověření.",
        "Součástí moderních DMM, osciloskopů i převodníků."
      ]
    },
    {
      question: "38) Autokalibrace: princip, výhody, nevýhody.",
      answer: [
        "Princip: interní srovnání se stabilním referenčním zdrojem.",
        "Výhody: kompenzace driftu, bez obsluhy.",
        "Nevýhody: závislost na vnitřním etalonu, není vhodné pro všechny aplikace."
      ]
    },
    {
      question: "39) Normalizované signály: rozsahy, důvody použití.",
      answer: [
        "Rozsahy: 0–10 V, 4–20 mA, ±10 V, 0–5 V apod.",
        "Důvody: kompatibilita, odolnost vůči rušení, jednoduchost.",
        "Použití: v průmyslu, řídicích systémech, PLC."
      ]
    },
    {
      question: "40) Redundance v měření: význam, příklady.",
      answer: [
        "Význam: zvýšení spolehlivosti, detekce poruch.",
        "Příklady: duální snímače, vícenásobné měření téže veličiny.",
        "Používáno v kritických systémech (letectví, jaderná energetika)."
      ]
    },
    {
      question: "41) Trendy v měření: IoT, bezdrátové senzory, AI.",
      answer: [
        "IoT: propojení měřicích zařízení přes síť – vzdálený přístup.",
        "Bezdrátové senzory: snadná instalace, mobilita, bateriové napájení.",
        "AI: zpracování měření, predikce, diagnostika."
      ]
    }
  ]
};