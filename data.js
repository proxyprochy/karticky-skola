const cardData = {
  elm: [
    {
      "question": "1) Chyby měření: třída přesnosti, chyba digitálního přístroje, šíření chyb ve výpočtech.",
      "answer": [
        "Třída přesnosti: Maximální povolená relativní chyba v % z měřicího rozsahu přístroje.",
        "Chyba digitálního přístroje: Součet chyby z měřené hodnoty (v %) a chyby z rozsahu (ve formě digitů).",
        "Např. ±(0,05 % + 2 digity): chyba se skládá z procenta měřené hodnoty a fixního počtu digitů.",
        "Při výpočtech: absolutní chyby se sčítají při sčítání/odčítání, relativní při násobení/dělení."
      ]
    }
    ,
    {
      "question": "2) Nejistoty měření: standardní nejistota typu A, typu B, kombinovaná a rozšířená nejistota.",
      "answer": [
        "Typ A: Statistická nejistota vyhodnocená z opakovaných měření (výběrová směrodatná odchylka).",
        "Typ B: Odhadnutá na základě jiných údajů (např. katalogové údaje přístroje).",
        "Kombinovaná nejistota: Vypočítána jako odmocnina ze součtu čtverců jednotlivých standardních nejistot.",
        "Rozšířená nejistota: Kombinovaná nejistota vynásobená koeficientem pokrytí (k), např. k=2 pro 95 %."
      ]
    }
    ,
    {
      "question": "3) Měření el. proudu: přístroje pro měření DC a AC proudu, AC/DC komparátor.",
      "answer": [
        "DC proud: Magnetoelektrické A-metry, digitální multimetry, zpětnovazební A-metry.",
        "AC proud: Elektrodynamické, ferodynamické, indukční přístroje, převodníky s Hallovou sondou.",
        "AC/DC komparátor: Srovnává stejné proudy různých typů pomocí přesného zesilovače a porovnání.",
        "Přesné měření malých proudů: zpětnovazební měřiče s operačním zesilovačem (např. TIA)."
      ]
    },
    {
      "question": "4) Měření el. napětí: přístroje pro měř. DC a AC napětí, AC/DC komparátor, kompenzátor DC napětí.",
      "answer": [
        "DC napětí: Magnetoelektrické voltmetry, digitální voltmetry, kompenzátory napětí.",
        "AC napětí: Elektrodynamické voltmetry, TRMS měřiče s usměrněním a digitalizací signálu.",
        "Kompenzátor: Měří napětí porovnáním s referenčním, dokud nezmizí proud mezi porovnávanými body.",
        "AC/DC komparátor: Srovnává AC napětí s DC referencí – využívá se v etalonizaci."
      ]
    },
    {
      "question": "5) Etalony el. napětí: Westonův článek, kvantový etalon napětí, elektronické etalony napětí.",
      "answer": [
        "Westonův článek: Stabilní elektrochemický článek s napětím 1,01865 V, citlivý na teplotu, nepoužívat při odběru proudu.",
        "Kvantový etalon: Využívá Josephsonův jev, extrémně přesné napětí odvozené z frekvence a fundamentálních konstant.",
        "Josephsonova konstanta: KJ90 = 483,5979 MHz/μV.",
        "Elektronické etalony: Zenerova dioda s kompenzací teploty, např. LM399 – stabilní referenční napětí ~6,95 V."
      ]
    }
    ,
    {
      "question": "6) Měření výkonu el. proudu: přístroje pro měření výkonu DC a AC proudu, konstanta W-metru.",
      "answer": [
        "DC výkon: Výpočet z U a I, nebo přímé měření W-metrem.",
        "AC výkon: Elektrodynamické, elektronické a digitální wattmetry (měří P = U·I·cos φ).",
        "W-metrová konstanta: Určuje rozsah a citlivost přístroje pro dané napětí a proud.",
        "Digitální wattmetry: Vzorkují napětí a proud, výkon se určuje integrací nebo DSP."
      ]
    }
    ,
    {
      "question": "7) Měření výkonu el. proudu v 3-fázové síti: metody měření činného a jalového výkonu.",
      "answer": [
        "Metoda 3 wattmetrů: Používá 3 W-metry, měří každou fázi zvlášť – přesná pro nevyvážené soustavy.",
        "Metoda 2 wattmetrů: Pro 3-fázové, 3-vodičové sítě – součet výkonů dvou přístrojů.",
        "Jalový výkon: Rozdíl mezi součtem výkonů a činným výkonem nebo samostatné měření pomocí fázového posunu.",
        "P = √3·U·I·cos φ, Q = √3·U·I·sin φ"
      ]
    }
    ,
    {
      "question": "8) Měření spotřeby el. energie: přístroje pro měření spotřeby.",
      "answer": [
        "Indukční elektroměry: Otáčející se kotouč, mechanický počet impulsů (Wh).",
        "Elektronické elektroměry: Vzorkování proudu a napětí, výpočet energie digitálně.",
        "Používají se integrace výkonu přes čas: E = ∫P(t)dt.",
        "Měřiče umožňují záznam denních i měsíčních profilů spotřeby."
      ]
    }
    ,
    {
      "question": "9) Zjišťování sledu fází.",
      "answer": [
        "Sledu fází lze určit přístrojem na bázi střídavého napětí – využití rotujícího magnetického pole.",
        "Tři fázová napětí se přivedou na indikátor, ten určí směr otáčení (např. otáčivý kotouč nebo světelné diody).",
        "Použití: Správné zapojení 3-fázových motorů, vyvarování se reverzního chodu.",
        "Změna sledu fází: výměna dvou fází mezi sebou (např. L1 a L2)."
      ]
    }
    ,
    {
      "question": "10) Měření frekvence: etalony frekvence, čítač – režimy provozu a použití.",
      "answer": [
        "Etalony frekvence: Krystalové oscilátory (stabilita až 10⁻⁹/rok), rubidiové (10⁻¹⁰/rok), cesiové (10⁻¹⁴/rok).",
        "Princip atomových etalonů: využití energetického přechodu atomu (např. Cs133 – 9,192631770 GHz).",
        "Čítač – režimy: měření frekvence, periody, intervalu, počtu impulsů.",
        "Použití: měření stabilních signálů, vhodné pro signály s vyšší úrovní a jednoduchou periodicitou."
      ]
    }
    ,
    {
      "question": "11) Měření frekvence: analogové měřiče frekvence, metoda Lissajousových obrazců, modulace jasu.",
      "answer": [
        "Analogové měřiče: Např. rezonanční obvod s indikací rezonance (napětí max při f₀).",
        "Lissajousovy obrazce: Na osciloskopu – vstupy do X a Y osy, počet průsečíků určuje poměr frekvencí.",
        "Použití pro měření poměrů frekvencí nebo kalibraci.",
        "Modulace jasu: Dvě sinusovky modulují jas paprsku na CRT obrazovce podle jejich rozdílové frekvence."
      ]
    }
    ,
    {
      "question": "12) Měření fázového posuvu: analogové a digitální fázoměry, použití osciloskopu a čítače k měření fáze.",
      "answer": [
        "Analogové fázoměry: Elektrodynamické nebo ferodynamické – ukazují fázový posuv přímo.",
        "Digitální fázoměry: Vzorkují průběhy napětí a proudu a určují fázový rozdíl výpočtem.",
        "Osciloskop: Porovnání nulových průchodů obou signálů, výpočet fázového rozdílu z časového posunu.",
        "Čítač: Měření doby mezi nulovými průchody dvou signálů – převod na úhel při známé periodě."
      ]
    }
    ,
    {
      "question": "13) Měření el. odporu: Ohmova metoda, srovnávací metody.",
      "answer": [
        "Ohmova metoda: Rx = U/I – buď v zapojení s voltmetrem nebo ampérmetrem ve vhodném místě.",
        "Chyby: Způsobené vnitřním odporem přístrojů, lze korigovat nebo minimalizovat výběrem zapojení.",
        "Srovnávací metoda: Porovnání měřeného odporu s etalonem při shodném napětí/proudu.",
        "Použití např. v mostových zapojeních nebo při přesném měření velkých odporů."
      ]
    }
    ,
    {
      "question": "14) Měření el. odporu: Wheatstoneův a Thomsonův můstek, dvouvodičové a čtyřvodičové připojení.",
      "answer": [
        "Wheatstoneův můstek: Měření odporu srovnáním poměru odporů v mostu – rovnováha indikována nulovým proudem.",
        "Thomsonův můstek: Modifikace pro přesné měření velmi malých odporů, odstraňuje chyby spojů.",
        "Dvouvodičové připojení: Zahrnuje odpor vodičů, nevhodné pro malé hodnoty.",
        "Čtyřvodičové připojení (Kelvinovo): Proud a napětí měřeny odděleně – přesné i pro malé odpory."
      ]
    }
    ,
    {
      "question": "15) Etalony odporu: vinutý odporový etalon, QHE.",
      "answer": [
        "Vinutý etalon: Vysoká stabilita, materiály jako manganin, použití bifilárního vinutí pro bezindukčnost.",
        "Vlastnosti: Odchylka typicky 0,001 %, velmi nízký teplotní koeficient.",
        "QHE (kvantový Hallův jev): Primární etalon odporu – přesnost až 10⁻⁸.",
        "Princip: Při vysoké magnetické indukci a nízké teplotě se odpor stává celočíselným násobkem konstanty RK = 25812,807 Ω."
      ]
    }
    ,
    {
      "question": "16) Měření impedancí: náhradní zapojení cívky a kondenzátoru, činitel jakosti, ztrátové číslo.",
      "answer": [
        "Cívka a kondenzátor mají sériovou nebo paralelní náhradu – kombinace ideálního prvku a odporu.",
        "Činitel jakosti (Q): Poměr reaktance k odporu (např. Q = ωL/R pro cívku).",
        "Ztrátové číslo (D): Inverzní hodnota činitele jakosti (např. D = R/ωL pro cívku, D = tgδ pro kondenzátor).",
        "Přepočet mezi náhradami umožňuje porovnání vlastností – důležité při měření parametru reálného prvku."
      ]
    }
    ,
    {
      "question": "17) Měření impedancí: měření V a A-metrem, měření V, A a W-metrem, metoda 3V resp. 3A.",
      "answer": [
        "V a A-metr: Změřením U a I určíme Z = U/I, vhodné pro jednoduché měření.",
        "V, A a W-metr: Umožňuje určit nejen impedanci, ale i činný výkon a fázový posun.",
        "Metoda tří voltmetrů: Měří se napětí na celé zátěži a na jejích částech – výpočet I a φ.",
        "Metoda tří ampérmetrů: Alternativa vhodná pro jiné topologie – výpočet pomocí známých proudů."
      ]
    }
    ,
    {
      "question": "18) Měření impedancí: můstkové metody, obecný střídavý můstek.",
      "answer": [
        "AC můstky: Umožňují měřit impedanci porovnáním s etalonem – např. Wienův, Scheringův, Maxwellův můstek.",
        "Obecný AC můstek: Skládá se ze čtyř ramen, jedno obsahuje měřenou impedanci, ostatní známé prvky.",
        "Rovnovážná podmínka: Napětí mezi diagonálou je nulové – z této podmínky vypočítáme Zx.",
        "Použití: Velmi přesné měření, vhodné i pro malé nebo velké impedanční hodnoty."
      ]
    }
    ,
    {
      "question": "19) Měření impedancí: rezonanční metody, Q-metr.",
      "answer": [
        "Rezonanční metoda: Zapojení laděno na rezonanci – impedance je reálná, napětí na cívce/kondenzátoru max.",
        "Z rezonance (f₀) se určí parametry prvků: f₀ = 1 / (2π√(LC)), Q = f₀ / Δf.",
        "Q-metr: Speciální přístroj pro měření činitele jakosti, indukčností a kapacit.",
        "Q-metr měří napětí a proud, ze kterých se přímo určí činitel jakosti Q."
      ]
    }
    ,
    {
      "question": "20) Měření impedancí: měření vzájemné indukčnosti a činitele vazby.",
      "answer": [
        "Vzájemná indukčnost (M): Vyjadřuje, jak silně je propojeno magnetické pole dvou cívek.",
        "Měří se pomocí zapojení se dvěma cívkami – měří se napětí indukované v druhé cívce.",
        "Činitel vazby (k): k = M / √(L₁·L₂), kde L₁ a L₂ jsou vlastní indukčnosti cívek.",
        "k ∈ (0,1), k=1 ideální vazba, k≈0 téměř žádná vazba."
      ]
    }
    ,
    {
      "question": "21) Měření impedancí: RLC měřič, princip, způsoby připojení, open/short kompenzace.",
      "answer": [
        "RLC měřič: Měří odpor, indukčnost a kapacitu pomocí střídavého signálu a fázové analýzy.",
        "Připojení: 2-vodičové (méně přesné), 4-vodičové (oddělený měřicí a proudový obvod – přesnější).",
        "Open/Short kompenzace: Odstranění vlivu parazitních impedancí (kabelů, svorek) před samotným měřením.",
        "Princip: Určení komplexní impedance Z = U/I, z níž se odvodí R, L, C podle typu prvku a fázového posunu."
      ]
    }
    ,
    //

    {
      "question": "22) Měření intenzity a indukce DC a AC magnetického pole.",
      "answer": [
        "DC pole: Fluxmetr – měří změnu magnetického toku, Hallova sonda – měří přímo B, Fluxgate senzor – měření malých polí, Magnetorezistory – AMR, GMR, SDT.",
        "AC pole: Snímací cívka – měří střední hodnotu usměrněného napětí, vztah pro Bm: Bm = Uav / (4NSf), Hallova sonda, Fluxgate senzor, Magnetorezistory.",
        "Rozsahy: Fluxgate: ~100 pT – 100 μT, Hallova sonda: ~10 μT – 10 T, Magnetorezistory: ~100 nT – 1 mT.",
        "Frekvenční rozsahy: Fluxgate: DC – ~1 kHz, Hallova sonda: DC – ~10 kHz, Magnetorezistory: DC – ~1 MHz."
      ]
    },
    {
      "question": "23) Měření dynamické hysterezní smyčky feromagnetika.",
      "answer": [
        "Záznam osciloskopem: osa X – proud budicí cívkou (měřen přes odpor), osa Y – napětí z integračního článku (úměrné B).",
        "Mx = 2Hm / a = (2√2 * IRMS * N1) / (π * ds * a), My = 2Bm / b = (2 * U2) / (4.44 * f * SFe * N2 * b).",
        "Tvar smyčky ovlivněn frekvencí – plocha roste s frekvencí.",
        "Napětí převáděna přes známé konstanty na H a B."
      ]
    },
    {
      "question": "24) Měření ztrát v železe.",
      "answer": [
        "Ztráty určeny z plochy dynamické hysterezní smyčky (měřené na osciloskopu).",
        "Alternativně: výpočtem z Uef, Ief a fázového posunu.",
        "Ztráty = plocha smyčky v jednotkách výkonu (W).",
        "Používají se jádra s měřeným průřezem a známou indukčností."
      ]
    },
    {
      "question": "25) Magnetoelektrický měřicí systém: konstrukce, značka, vlastnosti, použití.",
      "answer": [
        "Konstrukce: cívka se železným jádrem v permanentním magnetu, na hřídeli s pružinou a ukazatelem.",
        "Značka: kruh s „M“ a šipkou (symbol magnetoelektrického systému).",
        "Vlastnosti: velmi přesné, lineární v širokém rozsahu, malá spotřeba.",
        "Použití: měření DC proudu a napětí, laboratorní přístroje."
      ]
    },
    {
      "question": "26) Elektromagnetický měřicí systém: konstrukce, značka, vlastnosti, použití.",
      "answer": [
        "Konstrukce: železný kotouč se dvěma vinutími – pohyb v magnetickém poli.",
        "Značka: cívka s „E“ (symbol elektromagnetického systému).",
        "Vlastnosti: funguje pro DC i AC, menší přesnost než magnetoelektrický.",
        "Použití: jednoduché přístroje pro měření napětí a proudu."
      ]
    },
    {
      "question": "27) Elektrodynamické a ferodynamické ústrojí: konstrukce, značka, vlastnosti, použití.",
      "answer": [
        "Konstrukce: pevná a pohyblivá cívka, působení na sebe – moment.",
        "Značka: dva protilehlé oblouky se šipkami (elektrodynamický systém).",
        "Vlastnosti: měří efektivní hodnoty, použitelné pro AC i DC, pomalejší.",
        "Použití: wattmetry, měření výkonu, laboratorní přístroje."
      ]
    },
    {
      "question": "28) Indukční ústrojí: konstrukce, značka, vlastnosti, použití.",
      "answer": [
        "Konstrukce: hliníkový kotouč v proměnném magnetickém poli, moment vzniká vířivými proudy.",
        "Značka: obdélník se šipkami a kotoučem (symbol indukčního systému).",
        "Vlastnosti: pouze pro AC, nelineární, pomalá odezva.",
        "Použití: elektroměry, měření spotřeby energie."
      ]
    },
    {
      "question": "29) Tepelné ústrojí: konstrukce, značka, vlastnosti, použití.",
      "answer": [
        "Konstrukce: odporový vodič, zahříván proudem – deformace bimetalu, nebo termočlánek.",
        "Značka: vlnovka nebo symbol tepla.",
        "Vlastnosti: reaguje na efektivní hodnotu proudu, pomalá odezva.",
        "Použití: měření vysokofrekvenčních proudů a napětí."
      ]
    },

    {
      "question": "30) Změna rozsahu voltmetru a ampérmetru, různé způsoby pro různé systémy.",
      "answer": [
        "Voltmetr: Zvýšení rozsahu připojením předřadného odporu (R = (Umax - Un) / In).",
        "Ampérmetr: Zvýšení rozsahu připojením bočníku (shuntu) – odpor paralelně k měřidlu.",
        "Magnetoelektrický systém: funguje s bočníkem pro ampérmetr, s předřadníkem pro voltmetr.",
        "Jiné systémy (např. indukční): změna rozsahu pomocí přepínání závitů nebo pomocných transformátorů."
      ]
    },
    {
      "question": "31) Měřicí převodník: význam a použití, operační zesilovač - základní vlastnosti.",
      "answer": [
        "Měřicí převodník: převádí vstupní veličinu (např. I, U, R, T) na napěťový nebo proudový signál vhodný pro další zpracování.",
        "Použití: galvanické oddělení, úprava úrovní signálu, měření v náročných podmínkách.",
        "Operační zesilovač (OZ): velmi vysoký zisk, vysoký vstupní odpor, nízký výstupní odpor.",
        "Základní vlastnosti OZ: lineární zesílení, diferenční vstup, nulový výstup při nulovém rozdílu vstupů."
      ]
    },
    {
      "question": "32) Převodník U/U s OZ v invertujícím a neinvertujícím zapojení, převodník I/U s OZ.",
      "answer": [
        "U/U invertující: výstup je inverzní k vstupu, zesílení: -R2/R1.",
        "U/U neinvertující: výstup má stejnou fázi jako vstup, zesílení: 1 + R2/R1.",
        "I/U převodník: proud vstupuje do OZ přes odpor, výstupní napětí U = -Iin·R (typické pro fotodiodu, Hallovu sondu).",
        "Použití: zesílení signálů, převod analogového proudu na napětí."
      ]
    },
    {
      "question": "33) Měření součtu a rozdílu napětí: sumátor napětí, rozdílový zesilovač, přístrojový zesilovač.",
      "answer": [
        "Sumátor: OZ s více vstupy přes odpory – výstup je součet vážený podle poměru odporů.",
        "Rozdílový zesilovač: Zesiluje rozdíl mezi dvěma vstupy, potlačuje společný signál.",
        "Přístrojový zesilovač: Vysoce přesný rozdílový zesilovač s velkým CMRR, vysoký vstupní odpor.",
        "Použití: měření malých signálů na pozadí šumu, medicínské přístroje, senzory."
      ]
    },
    {
      "question": "34) Jednocestný a dvoucestný aktivní usměrňovač s OZ: zapojení, princip.",
      "answer": [
        "Jednocestný aktivní usměrňovač: OZ s diodou – propouští pouze jednu polaritu signálu (např. kladnou).",
        "Dvoucestný aktivní usměrňovač: dvě diody a OZ – převádí AC signál na pulsující DC.",
        "Výhoda: přesná usměrnění i pro malé napětí (na rozdíl od pasivních diodových).",
        "Použití: detekce signálů, RMS měření, indikátory."
      ]
    },
    {
      "question": "35) Převodníky pro měření True RMS: zapojení, princip, vlastnosti.",
      "answer": [
        "Základ: převodník provádí kvadratizaci signálu, jeho průměrování a následné odmocnění.",
        "Analogový: logaritmicko-antilogaritmická struktura, termické (např. AD536A).",
        "Digitální: výpočet RMS z digitalizovaného signálu pomocí DSP.",
        "Vlastnosti: přesné měření efektivní hodnoty i pro nelineární a nesinusové signály."
      ]
    },
    {
      "question": "36) Špičkové detektory: zapojení, princip.",
      "answer": [
        "Detekce maximální hodnoty signálu – drží nejvyšší dosaženou úroveň.",
        "Zapojení: OZ s diodou a kondenzátorem – dioda nabíjí kondenzátor na vrchol signálu.",
        "Použití: indikace špičky, ochrany, měření dynamiky.",
        "Nutná ochrana před přebíjením, doplnění vybíjecího odporu."
      ]
    },
    {
      "question": "37) Digitální multimetr: blokové schéma, princip, popis jednotlivých bloků.",
      "answer": [
        "Bloky: vstupní dělič, ochrana, analogový multiplexor, A/D převodník, procesor, displej.",
        "Princip: měření napětí/proudu/odporu pomocí A/D převodu a výpočtů v procesoru.",
        "Rozlišení: určeno počtem bitů A/D převodníku – běžně 3.5 nebo 4.5 číslice.",
        "Další funkce: měření frekvence, kapacity, test diod, akustická kontinuita."
      ]
    },
    {
      "question": "38) Vliv rušení na údaj digitálního voltmetru.",
      "answer": [
        "Rušení způsobuje chyby v měření – zejména při měření malých napětí.",
        "Typy rušení: síťové (50/60 Hz), VF rušení, zemní smyčky.",
        "Omezení rušení: stínění, symetrické vstupy, použití filtrů (např. dolní propust), averaging.",
        "Digitální filtrace v přístroji – více vzorků, zpoždění odečtu, zvýšení přesnosti."
      ]
    },
    {
      "question": "39) Analogový osciloskop: blokové schéma popis jednotlivých bloků, režim Y-t, režim X-Y, využití.",
      "answer": [
        "Bloky: vertikální zesilovač, časová základna, horizontální zesilovač, CRT obrazovka, napájení.",
        "Režim Y-t: osa X řízena časovou základnou, zobrazuje průběh v čase.",
        "Režim X-Y: signály přivedeny do obou os – slouží pro Lissajousovy obrazce, fázové posuvy.",
        "Využití: pozorování tvaru signálu, měření periody, amplitudy, fázových posunů."
      ]
    },
    {
      "question": "40) Digitální osciloskopy: typy osciloskopů, principy, způsoby vzorkování.",
      "answer": [
        "Typy: real-time (okamžité zobrazení), sampling (vzorkování opakovaných signálů).",
        "Princip: signál je digitalizován A/D převodníkem, uložen a zobrazen na displeji.",
        "Způsoby vzorkování: ekvivalentní (opakovaný signál), přímý (real-time), interpolace.",
        "Výhody: možnost ukládání, přesná analýza, zpracování dat v PC, auto-measure funkce."
      ]
    },
    {
      "question": "41) Osciloskopické sondy: vysokoimpedanční sonda 10:1 princip, vlastnosti a použití, další typy sond.",
      "answer": [
        "Sonda 10:1: odporový dělič (typicky 9 MΩ + 1 MΩ) – snižuje zatížení měřeného obvodu.",
        "Princip: zmenší měřené napětí 10x, kompenzace kapacity pomocí trimru.",
        "Vlastnosti: vysoký vstupní odpor (10 MΩ), malá kapacita, vhodné pro vysoké frekvence.",
        "Další sondy: proudové (měření I), diferenční (měření mezi dvěma body), aktivní (vysoká impedance, šířka pásma)."
      ]
    }
  ],
  eltm: [
    {
      "question": "1) Vodíková vazba – vlastnosti a zařazení",
      "answer": [
        "Vodíková vazba je slabší než kovalentní vazba.",
        "Patří mezi sekundární vazby, nikoli primární.",
        "Má elektrostatickou povahu – vzniká mezi vodíkem navázaným na elektronegativní atom (např. O, N, F) a jiným elektronegativním atomem.",
        "Typická je pro molekuly vody, DNA, bílkoviny apod."
      ]
    },
    {
      "question": "2) Co je to intersticiální atom?",
      "answer": [
        "Intersticiální atom (intersticiál) je atom umístěný v meziřízkové poloze krystalové mřížky.",
        "Jedná se o jednu z bodových poruch krystalové struktury.",
        "Nevzniká nahrazením jiného atomu – tím vzniká substituční porucha.",
        "Chybějící atom je naopak vakance, jiný typ bodové poruchy."
      ]
    },
    {
      "question": "3) Zkouška pevnosti v tahu – charakteristika",
      "answer": [
        "Zkouška pevnosti v tahu je destruktivní metoda – zkoušený vzorek se poruší.",
        "Slouží ke stanovení mechanických vlastností, např. meze kluzu nebo pevnosti v tahu.",
        "Jde o statickou zkoušku – síla narůstá pomalu, ne dynamicky.",
        "Používá se v materiálovém inženýrství k určení deformací a mezních hodnot."
      ]
    },
    {
      "question": "4) Jaké jsou vlastnosti litin oproti ocelím?",
      "answer": [
        "Litinou se označují slitiny železa s uhlíkem s obsahem > 2 % C.",
        "Litiny jsou křehčí než oceli – snadno se lámou, ale mají dobrou slévatelnost.",
        "Mají nižší houževnatost než oceli, nejsou vhodné pro dynamické namáhání.",
        "Používají se tam, kde je důležitá tvarovatelnost a tlaková pevnost (např. bloky motorů)."
      ]
    },
    {
      "question": "5) Které kovy mají vysokou teplotu tání?",
      "answer": [
        "Mezi kovy s velmi vysokou teplotou tání patří například wolfram (W), který má nejvyšší teplotu tání ze všech kovů (~3422 °C).",
        "Zirkonium má také poměrně vysokou teplotu tání (~1855 °C), používá se např. v jaderné energetice.",
        "Železo (~1538 °C) a nikl (~1455 °C) mají nižší teploty tání než wolfram.",
        "Vysoká teplota tání je důležitá pro materiály používané v extrémních teplotních podmínkách."
      ]
    },
    {
      "question": "6) Co říká pásová teorie o polovodičích?",
      "answer": [
        "Pásová teorie vysvětluje elektrické vlastnosti materiálů pomocí energetických pásů – valenční a vodivostní pás.",
        "U polovodičů je mezi valenčním a vodivostním pásem zakázaný pás (bandgap) menší než 3 eV.",
        "Vodivost vzniká přesunem elektronů z valenčního pásu do vodivostního, typicky zahřátím nebo dopingem.",
        "Zakázaný pás není totožný s vodivostním ani valenčním pásem, ale je mezi nimi."
      ]
    },
    {
      "question": "7) Supravodiče II. typu – vlastnosti",
      "answer": [
        "Supravodiče II. typu obsahují tzv. vortexy – oblasti, kde proniká magnetické pole skrze materiál.",
        "Mají dvě kritické teploty – mezi nimi je supravodivost částečně zachována.",
        "Není nutné je chladit kapalným heliem – některé lze chladit kapalným dusíkem (levnější a dostupnější).",
        "Používají se např. v silových aplikacích, MRI, magnetech pro urychlovače."
      ]
    },
    {
      "question": "8) Jaké vodivostní vlastnosti má stříbro?",
      "answer": [
        "Stříbro má nejvyšší elektrickou i tepelnou vodivost ze všech kovů.",
        "Ještě vodivější než měď, ale kvůli ceně se méně často používá v běžné elektroinstalaci.",
        "Používá se tam, kde je potřeba minimální odpor – např. konektory, kontakty.",
        "Tepelná vodivost je důležitá i pro chlazení, např. ve vysokofrekvenčních obvodech."
      ]
    },
    {
      "question": "9) Jaké jsou požadavky na kontaktní materiály?",
      "answer": [
        "Kontaktní materiály musí mít vysokou elektrickou i tepelnou vodivost – zajišťují přenos proudu a odvádění tepla.",
        "Dále musí mít nízký přechodový odpor (malý přechodový proud) pro co nejlepší spojení.",
        "Odolnost vůči korozi a opotřebení je také důležitá.",
        "Příkladem materiálů jsou stříbro, zlato nebo měděné slitiny."
      ]
    },
    {
      "question": "10) Pájecí slitiny typu SAC – vlastnosti",
      "answer": [
        "SAC pájky jsou bezolovnaté slitiny cínu s příměsí stříbra (Ag) a mědi (Cu).",
        "Mají teplotu tání okolo 217–221 °C, tedy vyšší než klasické olovnaté pájky (183 °C).",
        "Používají se zejména v ekologických a bezolovnatých výrobních procesech (RoHS).",
        "Označení SAC je odvozeno od prvků: Sn (Tin), Ag (Silver), Cu (Copper)."
      ]
    },
    {
      "question": "11) Co je to nevlastní vodivost v polovodičích?",
      "answer": [
        "Nevlastní vodivost vzniká dopováním – záměrné přidání atomů jiných prvků do polovodiče.",
        "Tyto prvky dodávají volné elektrony (donory) nebo díry (akceptory) do struktury.",
        "Tím se zvyšuje vodivost oproti čistému (vlastnímu) polovodiči.",
        "Používá se u křemíku, germania apod. – typy vodivosti N (negativní) a P (pozitivní)."
      ]
    },
    {
      "question": "12) Které lasery patří mezi plynové?",
      "answer": [
        "Plynové lasery využívají jako aktivní médium plyn – často směsi dvou nebo více plynů.",
        "Helium-neonový laser je klasický příklad – často se používá v měřicí technice.",
        "Argonový laser vyzařuje ve viditelné oblasti (např. modrozelené světlo) – využívá se např. v lékařství.",
        "Rubínový laser je krystalický (ne plynový), gallium-fosfidový je polovodičový (laserová dioda)."
      ]
    },
    {
      "question": "13) Co platí o magnetické indukci?",
      "answer": [
        "Magnetická indukce se značí písmenem B.",
        "Je to vektorová fyzikální veličina – má tedy směr i velikost.",
        "Jednotkou je tesla (T), nikoli A/m (to je jednotka magnetického pole H).",
        "Veličina H značí intenzitu magnetického pole, nikoli magnetickou indukci."
      ]
    },
    {
      "question": "14) Jaké magnetické vlastnosti mají diamagnetika?",
      "answer": [
        "Diamagnetika mají relativní permeabilitu menší než 1.",
        "Jsou odpuzována magnetickým polem, mají zápornou magnetickou susceptibilitu.",
        "Příklady: měď, bismut, zlato, voda.",
        "Nevzniká u nich vlastní magnetické pole – je to slabý efekt."
      ]
    },
    {
      "question": "15) Co jsou magneticky tvrdé materiály?",
      "answer": [
        "Magneticky tvrdé materiály si dlouhodobě uchovávají magnetizaci – používají se pro permanentní magnety.",
        "Příklady: NdFeB (neodym-železo-bór) a slitiny typu AlNiCo (hliník-nikl-kobalt).",
        "Mají vysokou koercitivní sílu a remanenci.",
        "Nejsou to např. magnetická skla nebo permendur – ty mají jiné vlastnosti."
      ]
    },
    {
      "question": "16) Z čeho se vyrábí permanentní magnety?",
      "answer": [
        "Permanentní magnety se vyrábí z feritů, slitin vzácných zemin (např. Sm, Nd) a slitin typu Al-Ni-Co.",
        "Vyznačují se stabilní magnetizací bez nutnosti napájení.",
        "Slitiny Fe-Ni (např. permalloy) se používají spíše v magneticky měkkých aplikacích (např. stínění).",
        "Použití: reproduktory, motory, senzory, HDD."
      ]
    },
    {
      "question": "17) Co jsou dielektrické materiály?",
      "answer": [
        "Dielektrika jsou izolační materiály, které nevedou elektrický proud.",
        "Mají schopnost polarizace – při působení elektrického pole se v nich přesouvají vazebné náboje.",
        "Používají se např. v kondenzátorech jako dielektrikum mezi elektrodami.",
        "Nevytváří samy o sobě vlastní elektrické pole – ale reagují na vnější."
      ]
    },
    {
      "question": "18) Jaké plyny patří mezi běžné izolanty?",
      "answer": [
        "Vzduch je nejběžnějším plynným izolantem – např. v rozvodech vysokého napětí.",
        "Dusík se také používá jako izolační plyn, např. v plynových izolátorech.",
        "Síra hexafluorid (SF₆) je výkonný izolační a zhášecí plyn v elektrických zařízeních.",
        "Helium má slabší izolační schopnosti, používá se méně často."
      ]
    },

    {
      "question": "19) K čemu slouží minerální oleje v elektrotechnice?",
      "answer": [
        "Minerální oleje se používají jako izolanty a chladiva v transformátorech.",
        "Získávají se rafinací ropy – nejsou syntetické ani získané z břidlic.",
        "Mají dobré izolační vlastnosti a vysokou teplotní stabilitu.",
        "Používají se také pro chlazení v některých typech motorů a rozvaděčů."
      ]
    },
    {
      "question": "20) Kde se v elektrotechnice používá slída?",
      "answer": [
        "Slída je vynikající elektrický izolant a má vysokou tepelnou odolnost.",
        "Používá se jako součást izolačních systémů ve vysokonapěťových zařízeních.",
        "Nachází využití také v kondenzátorech – mezi elektrodami jako dielektrikum.",
        "Má formu tenkých vrstev, které se snadno štěpí a vrstveně ukládají."
      ]
    },
    {
      "question": "21) Mezi pevné organické izolanty patří…",
      "answer": [
        "Papír a kalafuna jsou organické materiály používané jako izolanty.",
        "Papír bývá impregnován olejem, používá se např. v transformátorech.",
        "Kalafuna se používá zejména jako pájecí tavidlo, ale má i izolační vlastnosti.",
        "Slída a sklo jsou anorganické izolanty – vhodné pro vyšší teploty."
      ]
    },
    {
      "question": "22) Které plasty patří mezi termoplasty?",
      "answer": [
        "Polypropylen (PP) a polyethylen (PE) jsou typické termoplasty.",
        "Termoplasty se po zahřátí stávají tvárnými a po ochlazení tuhnou – tento proces je vratný.",
        "Nenasýcené polyesterové pryskyřice (UP) a epoxidy (EP) jsou termosety – po vytvrzení už se netaví.",
        "Termoplasty se často používají jako izolanty v kabelech a krytech."
      ]
    },
    {
      "question": "23) Co označuje zkratka PTFE?",
      "answer": [
        "PTFE = polytetrafluorethylen, známý pod obchodním názvem Teflon.",
        "Je to chemicky odolný polymer s výbornými izolačními vlastnostmi.",
        "Používá se v elektrotechnice, kuchyňském nádobí a průmyslu.",
        "Není totéž co PVC (polyvinylchlorid), PMMA (plexisklo) nebo polykarbonát."
      ]
    },
    {
      "question": "24) Co je to pyroelektrika?",
      "answer": [
        "Pyroelektrika označuje látky, u nichž vzniká elektrický náboj vlivem změny teploty.",
        "Při rychlé změně teploty dochází k polarizaci – využívá se např. v senzorech pohybu.",
        "Jsou to feroelektrické materiály, které se chovají jinak při dosažení Curieho teploty.",
        "Typicky se používají v infra senzorech, detektorech plamene, IR kamerách apod."
      ]
    },
    {
      "question": "25) Co platí o kovové vazbě?",
      "answer": [
        "Kovová vazba vzniká mezi kladnými ionty kovu a volnými elektrony – jde o tzv. elektronový plyn.",
        "Má kovový charakter, nikoli čistě elektrostatický.",
        "Je to primární chemická vazba, nikoliv sekundární jako vodíková nebo Van der Waalsova.",
        "Vyskytuje se ve všech kovech a kovových slitinách – zajišťuje jejich vodivost a kujnost."
      ]
    },
    {
      "question": "26) Jak vzniká iontová vazba?",
      "answer": [
        "Iontová vazba vzniká předáním elektronů z jednoho atomu (typicky kovu) na jiný (nekov).",
        "Mezi vzniklými ionty (kationt a aniont) pak působí elektrostatická přitažlivost.",
        "Nejsilnější je mezi prvky I. a VII. skupiny PSP (např. NaCl – sodík a chlor).",
        "Je typická pro soli a sloučeniny kovů s nekovy."
      ]
    },
    {
      "question": "27) Jaké vlastnosti má van der Waalsova vazba?",
      "answer": [
        "Van der Waalsova vazba je velmi slabá – je slabší než kovalentní nebo vodíková vazba.",
        "Patří mezi sekundární mezimolekulární interakce.",
        "Založena na vzájemném působení dipólů, indukovaných dipólů a Londonových sil.",
        "Významná je u nepolárních molekul a plynů (např. u vzácných plynů, vosků apod.)."
      ]
    },
    {
      "question": "28) Jak se liší čisté kovy a slitiny?",
      "answer": [
        "Čisté kovy mají lepší elektrickou vodivost než slitiny (např. měď, stříbro).",
        "Slitiny bývají tvrdší, pevnější, ale méně vodivé.",
        "Čisté kovy jsou často tvárnější a měkčí, vhodné pro vodiče.",
        "Slitiny se využívají tam, kde je důležitá mechanická pevnost, korozní odolnost nebo speciální vlastnosti."
      ]
    },
    {
      "question": "29) Na co se používají oceli v elektrotechnice?",
      "answer": [
        "Oceli se používají např. pro hřídele točivých strojů – díky pevnosti a houževnatosti.",
        "Také na stožáry vysokého a velmi vysokého napětí – vyžadují mechanickou pevnost a odolnost vůči povětrnosti.",
        "Nejsou vhodné pro vinutí elektromotorů – k tomu se používají měděné vodiče.",
        "Litiny se používají na méně namáhané odlitky – ocel je vhodnější pro pevnostní prvky."
      ]
    },
    {
      "question": "30) Z čeho se vyrábějí lehké a pevné konstrukční prvky?",
      "answer": [
        "Používají se slitiny hliníku – lehké, dobře obrobitelné, vhodné pro konstrukce.",
        "Slitiny titanu jsou pevné a odolné vůči korozi, ale drahé – využití v letectví a medicíně.",
        "Slitiny mědi a niklu se používají spíš pro elektrické vlastnosti, ne pro lehké konstrukce.",
        "Důležitá je kombinace: nízká hmotnost, pevnost, korozní odolnost a zpracovatelnost."
      ]
    },
    {
      "question": "31) Které poruchy jsou bodové?",
      "answer": [
        "Substituční atom – cizí atom nahradí atom v mřížce.",
        "Vakance – chybějící atom v krystalové struktuře.",
        "Intersticiál – atom v meziřízkové poloze.",
        "Dislokace je čárová porucha, nikoliv bodová."
      ]
    },
    {
      "question": "32) Co znamená žárupevnost materiálu?",
      "answer": [
        "Žárupevnost je schopnost materiálu snášet mechanické namáhání i při vysokých teplotách po delší dobu.",
        "Je důležitá např. u lopatek turbín, výfukových systémů, pecních dílů.",
        "Není totéž co žáruvzdornost (odolnost vůči teplotě) nebo houževnatost.",
        "Zajišťuje dlouhodobou funkčnost bez deformací nebo porušení."
      ]
    },
    {
      "question": "33) Co platí o slitinách železa?",
      "answer": [
        "Litiny jsou slitiny železa bohaté na uhlík (více než 2 % C).",
        "Oceli jsou slitiny železa chudé na uhlík (do 2 % C).",
        "Silikonizované oceli (s křemíkem) se používají pro elektrotechniku, nikoli pro polovodiče.",
        "Jako vodiče se používají měď nebo hliník – železné slitiny se používají hlavně pro mechanické vlastnosti."
      ]
    },
    {
      "question": "34) K čemu se používá zinek?",
      "answer": [
        "Zinek se využívá jako protikorozní ochrana oceli – tzv. galvanizace (zinkování).",
        "Je také součástí mosazných slitin (měď + zinek).",
        "Používá se i jako ochrana proti rentgenovému záření a pro výrobu suchých článků.",
        "Se železem se používá jen výjimečně – ne jako magnetický materiál."
      ]
    },
    {
      "question": "35) Co je zakázaný pás podle pásové teorie?",
      "answer": [
        "Zakázaný pás je energetický interval mezi valenčním a vodivostním pásem.",
        "U izolantů má tento pás šířku > 3 eV.",
        "U polovodičů je menší než 3 eV.",
        "Elektrony musí překonat tento pás, aby se materiál stal vodivým."
      ]
    },
    {
      "question": "36) K čemu se používají supravodiče?",
      "answer": [
        "Supravodiče vedou elektrický proud bez odporu při teplotách pod kritickou teplotou.",
        "Využívají se pro generování silných magnetických polí (např. MRI, urychlovače).",
        "Používají se v energetice, např. ve speciálních kabelech.",
        "Nepoužívají se pro ukládání energie – k tomu slouží jiné technologie."
      ]
    },
    {
      "question": "37) Jaké vlastnosti má hliník v elektrotechnice?",
      "answer": [
        "Hliník má nižší vodivost než měď – cca 60 %, ale je lehčí a levnější.",
        "Používá se pro elektrovodná lana (např. VN, VVN, ZVN vedení).",
        "Není vhodný pro jemné spoje – tvoří oxidy, hůře se pájí.",
        "V duralu (hliník + hořčík + měď) se používá v konstrukcích, ne jako vodič."
      ]
    },
    {
      "question": "38) Mezi nekovové odporové materiály patří…",
      "answer": [
        "Grafit – dobrý vodič, používá se v rezistorech a kartáčích motorů.",
        "Silit (karbid křemíku) – používá se v topných tělesech díky vysokému odporu a teplotní odolnosti.",
        "Dural a nikelin jsou kovové materiály – nikelin je slitina s vysokým odporem, ale kovová.",
        "Nekovové odporové materiály bývají stabilní při vysokých teplotách."
      ]
    },
    {
      "question": "39) Co platí pro polovodiče typu N?",
      "answer": [
        "U N-typu jsou majoritní nosiče elektrony.",
        "Vzniká dopováním donory – např. prvky V. skupiny (As, P, Sb).",
        "Elektrony přecházejí do vodivostního pásu – materiál se stává vodivým.",
        "Používá se v diodách, tranzistorech, solárních článcích atd."
      ]
    },
    {
      "question": "40) Co platí pro kovové pájky?",
      "answer": [
        "Kovové pájky se používají pro metalurgické spojování kovů (měkké a tvrdé pájení).",
        "Měkké pájení – do 450 °C (typicky cínové pájky).",
        "Tvrdé pájení – nad 450 °C (mosaz, stříbro, Ni-slitiny).",
        "Nejběžnější jsou pájky cínové, nikoli na bázi niklu a molybdenu."
      ]
    },
    {
      "question": "41) Co platí pro polovodiče typu P?",
      "answer": [
        "U P-typu jsou majoritní nosiče díry (chybějící elektrony ve valenčním pásu).",
        "Vzniká dopováním akceptory – např. prvky III. skupiny (B, In, Ga, Al).",
        "Díry se pohybují v opačném směru než elektrony.",
        "Používá se v diodách, tranzistorech – tvoří PN přechody."
      ]
    },
    {
      "question": "42) Jaká podmínka musí platit pro šíření signálu ve světlovodu?",
      "answer": [
        "Pro totální odraz světla musí být index lomu jádra n1 > n2 (n2 je plášť).",
        "Jinak by světlo unikalo z vlákna a nedošlo by k vedení.",
        "Tento princip se využívá v optických vláknech pro přenos dat (internet, medicína).",
        "Podmínka je zásadní pro efektivní šíření světla s minimálními ztrátami."
      ]
    },
    {
      "question": "43) Co platí o relativní permeabilitě?",
      "answer": [
        "Relativní permeabilita se značí μr.",
        "U paramagnetik má hodnotu mírně větší než 1.",
        "U diamagnetik má hodnotu menší než 1.",
        "Hodnota μr udává schopnost materiálu vést magnetické pole ve srovnání s vakuem."
      ]
    },
    {
      "question": "44) Co se stane po vložení paramagnetika do magnetického pole?",
      "answer": [
        "Dojde k mírnému zesílení magnetického pole.",
        "Paramagnetické látky mají kladnou susceptibilitu a magnetické dipóly se orientují ve směru pole.",
        "Typickým příkladem je hliník, hořčík nebo kyslík (v kapalném stavu).",
        "Oproti feromagnetikům je efekt mnohem slabší a není trvalý."
      ]
    },
    {
      "question": "45) Jaké jsou charakteristické vlastnosti magnetického materiálu?",
      "answer": [
        "Relativní permeabilita – udává schopnost vést magnetické pole.",
        "Remanentní indukce – zbytková magnetizace po odstranění pole.",
        "Koercitivní síla – odpor materiálu k rozmagnetování.",
        "Seebeckův koeficient a permitivita souvisí s elektrickými, ne magnetickými vlastnostmi."
      ]
    },
    {
      "question": "46) Co jsou magnetická kovová skla?",
      "answer": [
        "Jsou to amorfní materiály – nemají krystalovou strukturu.",
        "Většinou na bázi železa (Fe), někdy s přídavkem B, Si, Co.",
        "Patří mezi magneticky měkké materiály – snadno se magnetizují a demagnetizují.",
        "Používají se např. ve feritových jádrech, transformátorech a tlumivkách."
      ]
    },
    {
      "question": "47) Co je ztrátový úhel u dielektrik?",
      "answer": [
        "Ztrátový úhel udává míru ztrát energie ve formě tepla při střídavém elektrickém poli.",
        "Je to doplňkový úhel k fázovému posunu mezi napětím a proudem.",
        "Čím větší ztrátový úhel, tím horší izolační vlastnosti.",
        "Značí se δ nebo někdy tangens δ (tg δ)."
      ]
    },
    {
      "question": "48) Kde se používá fluorid sírový (SF₆)?",
      "answer": [
        "Fluorid sírový je výborný izolační a zhášecí plyn.",
        "Používá se hlavně v zapouzdřených rozvodnách vysokého napětí.",
        "Díky své stabilitě a vysoké dielektrické pevnosti nahradil vzduch v některých aplikacích.",
        "Kvůli vlivu na klima se jeho použití postupně omezuje."
      ]
    },
    {
      "question": "49) K čemu se používá keramika v elektrotechnice?",
      "answer": [
        "Keramika se používá pro výrobu průchodek a izolátorů.",
        "Má vysokou elektrickou pevnost a odolnost vůči teplotám.",
        "Není vhodná pro výrobu jader transformátorů – k tomu slouží ferity nebo plechy.",
        "Najde uplatnění také v kondenzátorech, pojistkách a senzorech."
      ]
    },
    {
      "question": "50) Co platí o kalafuně?",
      "answer": [
        "Kalafuna se používá jako tavidlo při pájení – usnadňuje smáčení spoje cínem.",
        "Je to organický pevný izolant, získávaný z pryskyřice jehličnatých stromů.",
        "Nepatří mezi živočišné produkty – je rostlinného původu.",
        "Používá se i v hudebních nástrojích (např. smyčce) a ve výtvarném umění."
      ]
    },
    {
      "question": "51) Které plasty mají vysokou tepelnou odolnost (> 200 °C)?",
      "answer": [
        "Polytetrafluorethylen (PTFE) (Teflon) – výborná chemická i tepelná odolnost.",
        "Silikon (SI) – pružný, dobře odolává teplotám i stárnutí.",
        "PVC a PMMA mají nižší teplotní odolnost – nejsou vhodné pro extrémní podmínky.",
        "Používají se v elektrotechnice jako izolace, v kuchyňství i ve zdravotnictví."
      ]
    },
    {
      "question": "52) Co platí pro termoplastické elastomery?",
      "answer": [
        "Jsou to materiály, které mají při pokojové teplotě vlastnosti elastomerů (pružnost).",
        "Zpracovávají se však jako termoplasty – tedy tavením, bez vulkanizace.",
        "Nejsou směsí dvou elastomerů, ale často kombinací tvrdých a měkkých segmentů.",
        "Používají se v automobilech, spotřebním zboží, těsněních apod."
      ]
    },
    {
      "question": "53) Mezi speciální dielektrika patří…",
      "answer": [
        "Pyroelektrika – jejich polarizace závisí na změně teploty.",
        "Piezoelektrika – polarizace vzniká při mechanické deformaci.",
        "Elektrety mají stálou polarizaci a nepodléhají běžným vnějším vlivům jako teplota či tlak.",
        "Tyto materiály se využívají v senzorech, zapalovačích a mikrofonech."
      ]
    },
    {
      "question": "54) Co platí o termotropních kapalných krystalech?",
      "answer": [
        "Termotropní kapalné krystaly se používají na výrobu displejů (LCD).",
        "Vznikají tavením pevných krystalů – ne z roztoku jako lyotropní.",
        "Jejich struktura závisí na teplotě – mění optické vlastnosti.",
        "Používají se ve vizualizaci tepla, zobrazovačích a senzorech."
      ]
    },
    {
      "question": "55) Co je vakance v krystalové mřížce?",
      "answer": [
        "Vakance je bodová porucha – chybí atom na svém místě v mřížce.",
        "Je to jeden z typů defektů – vedle substitučního atomu a intersticiálu.",
        "Nepatří mezi čárové poruchy (např. dislokace).",
        "Ovlivňuje vodivost, mechanické vlastnosti a difuzi atomů."
      ]
    },
    {
      "question": "56) Mezi kovy se střední nebo vysokou teplotou tání patří…",
      "answer": [
        "Chrom – vysoká teplota tání (~1907 °C), používá se v metalurgii a galvanickém pokovování.",
        "Měď má nižší teplotu tání (~1085 °C), lithium je měkký kov s nízkou teplotou tání.",
        "Bismut má také nízkou teplotu tání (~271 °C), není považován za vysoce tavitelný kov.",
        "Vysokotavitelné kovy se používají v extrémních teplotních aplikacích."
      ]
    },
    {
      "question": "57) Co říká pásová teorie o kovech?",
      "answer": [
        "U kovů se vodivostní pás překrývá s valenčním pásem.",
        "To umožňuje volný pohyb elektronů – vysoká elektrická vodivost.",
        "Není zde zakázaný pás jako u polovodičů a izolantů.",
        "Pásová struktura vysvětluje rozdíly v elektrické vodivosti materiálů."
      ]
    },
    {
      "question": "58) Co platí pro bimetaly?",
      "answer": [
        "Bimetaly se používají v tepelných jističích a termostatech.",
        "Jsou tvořeny dvěma různými kovy s rozdílnou roztažností.",
        "Při ohřevu dochází k deformaci – spínání/rozpínání kontaktu.",
        "Nejde o materiály určené do tavných pojistek."
      ]
    },
    {
      "question": "59) Co jsou slitiny mědi?",
      "answer": [
        "Mosazi – slitiny mědi a zinku.",
        "Bronzy – slitiny mědi a cínu, případně s jinými kovy, ale bez zinku.",
        "Mosaz může mít různé vlastnosti v závislosti na přísadách.",
        "Bronz je houževnatější a odolnější vůči korozi než mosaz."
      ]
    },
    {
      "question": "60) Co je vlastní (intrinsická) vodivost polovodiče?",
      "answer": [
        "Vlastní vodivost je určena vodivostí základního materiálu, bez dopování.",
        "Vzniká tepelným buzením elektronů z valenčního do vodivostního pásu.",
        "Vyskytuje se např. u čistého křemíku nebo germania.",
        "Na rozdíl od příměsové vodivosti není ovlivněna donory/akceptory."
      ]
    },
    {
      "question": "61) Jak se používá uhlík v elektrotechnice?",
      "answer": [
        "Uhlík se používá jako odporový materiál – např. v rezistorech, kartáčích motorů.",
        "Používá se i jako kontaktní materiál – odolný vůči jiskření a oxidaci.",
        "Najde uplatnění v bateriích, obloukových lampách a elektrolytických aplikacích.",
        "Není běžně použit v polovodičích nebo pojistkách."
      ]
    },
    {
      "question": "62) Které látky patří mezi diamagnetika?",
      "answer": [
        "Měď je diamagnetická – slabě odpuzována magnetickým polem.",
        "Supravodiče mají dokonalé diamagnetické chování (Meissnerův jev).",
        "Diamagnetika mají relativní permeabilitu menší než 1.",
        "Nikl je feromagnetický, transformátorové plechy jsou z magnetických materiálů."
      ]
    },
    {
      "question": "63) Jaká je přibližná relativní permitivita vody?",
      "answer": [
        "Voda jako polární látka má relativní permitivitu ~80 při pokojové teplotě.",
        "Díky tomu je vynikajícím dielektrikem v elektrolytech a kondenzátorech.",
        "Pro srovnání – vakuum má hodnotu 1, vzduch ~1,0006.",
        "Hodnota permitivity určuje schopnost materiálu uchovávat elektrickou energii."
      ]
    },
    {
      "question": "64) Které látky patří mezi magnetické měkké materiály?",
      "answer": [
        "Permalloy – slitina niklu a železa, s velmi nízkou koercivitou.",
        "Křemíkové oceli – používají se v jádrech transformátorů a elektromotorů.",
        "Mají vysokou permeabilitu a nízké ztráty při střídavém magnetickém poli.",
        "SmCo a magnetika na bázi vzácných zemin jsou tvrdé magnetické materiály."
      ]
    },
    {
      "question": "65) Charakteristické vlastnosti plynných izolantů",
      "answer": [
        "Mají nízké dielektrické ztráty, což je činí vhodnými pro vysokonapěťová zařízení.",
        "Dielektrické ztráty závisí na frekvenci, nejsou konstantní.",
        "Plynné izolanty neobnovují svou strukturu po průrazu – na rozdíl od některých kapalin.",
        "Používají se např. dusík, SF₆ (fluorid sírový), vzduch."
      ]
    },
    {
      "question": "66) Kapalné izolanty v elektrotechnice",
      "answer": [
        "Minerální oleje – nejčastěji používané kapalné izolanty v transformátorech.",
        "Syntetické oleje – např. silikonové, používají se při vyšších teplotách.",
        "Fluorid sírový (SF₆) je plyn, nikoli kapalina.",
        "Živočišné oleje se běžně v elektrotechnice nepoužívají."
      ]
    },
    {
      "question": "67) Vlastnosti polymerů s lineární strukturou",
      "answer": [
        "Lineární polymery jsou převážně termoplasty – dobře tvarovatelné teplem.",
        "Jsou většinou tavitelné – dají se recyklovat a znovu zpracovat.",
        "Na rozdíl od reaktoplastů nejsou po vytvrzení již nezměnitelné.",
        "Používají se např. polyethylen, polypropylen, PVC."
      ]
    },
    {
      "question": "68) Co jsou elastomery?",
      "answer": [
        "Jsou to materiály s velkými vratnými deformacemi při malém zatížení.",
        "Patří mezi ně např. kaučuky, silikony, TPU.",
        "Lze je částečně zpracovávat jako termoplasty (např. TPE).",
        "Mají nízkou tuhost, vysokou pružnost, často se používají v těsnění, rukavicích, pružných spojích."
      ]
    },
    {
      "question": "69) Co jsou ferolelektrika?",
      "answer": [
        "Ferolelektrika jsou látky, které mají spontánní polarizaci, měnitelnou elektrickým polem.",
        "Jsou analogické feromagnetikům, ale v elektrickém poli.",
        "Používají se jako dielektrika v kondenzátorech a senzorech.",
        "Příkladem je např. titanát barnatý (BaTiO₃)."
      ]
    },
    {
      "question": "70) Podmínky vzniku termotropních kapalných krystalů",
      "answer": [
        "Pro vznik termotropních kapalných krystalů je třeba určitá oblast teplot.",
        "Struktura těchto krystalů závisí na teplotních změnách.",
        "Na rozdíl od lyotropních nevyžadují roztok nebo rozpouštědlo.",
        "Používají se v LCD displejích, teplotních senzorech, optice."
      ]
    },
    {
      "question": "71) Co platí pro vodivé materiály?",
      "answer": [
        "Stříbro je nejlepší elektrický vodič – nejnižší odpor (~1,59×10⁻⁸ Ω·m).",
        "Vodivé materiály mají velmi nízkou rezistivitu (~10⁻⁸ Ω·m).",
        "Zlato je také dobrý vodič, ale horší než stříbro – používá se pro své chemické vlastnosti.",
        "Používají se v kabelech, spojích, elektrodách."
      ]
    },
    {
      "question": "72) Odporové materiály – příklady",
      "answer": [
        "Konstantan – slitina mědi a niklu, stabilní odpor, málo závislý na teplotě.",
        "Chromnikl (např. CrNi80) – vysoká odolnost, vhodný pro topné odpory.",
        "Mosaz není ideální pro odporové prvky, spíš pro kontakty.",
        "Ferit je magnetický materiál, nepoužívá se jako odporový."
      ]
    },
    {
      "question": "73) Materiály pro jádra optických vláken",
      "answer": [
        "Syntetický křemen – běžně používaný pro jádra optických vláken díky nízkému útlumu.",
        "Fluoridové sklo – speciální vlákna pro IR oblast.",
        "PMMA (polymethylmetakrylát) se používá v levnějších plastových vláknech.",
        "PTFE nemá vhodné optické vlastnosti pro jádro světlovodů."
      ]
    },
    {
      "question": "74) Magnetické momenty domén a jejich natáčení",
      "answer": [
        "Ve feromagnetikách se domény při působení magnetického pole natáčejí do jeho směru.",
        "To vede ke zvýšení celkové magnetizace.",
        "Ferimagnetika mají opačně orientované domény s nestejnou velikostí momentu.",
        "V paramagnetikách dochází k menšímu uspořádání, diamagnetika pole slabě odpuzují."
      ]
    },
    {
      "question": "74) Natáčení magnetických momentů domén podle směru vnějšího magnetického pole se vyskytuje",
      "answer": [
        "U feromagnetik – jejich domény se orientují podle vnějšího pole.",
        "Tento jev je klíčový pro jejich silnou magnetickou odezvu.",
        "Neprobíhá u diamagnetik ani paramagnetik, které nemají trvalé domény.",
        "Ferimagnetika mají podobné chování, ale jejich momenty nejsou zcela zarovnány."
      ]
    },
    {
      "question": "75) Mezi charakteristické vlastnosti magneticky měkkých materiálů patří",
      "answer": [
        "Úzká hysterezní smyčka – značí nízké ztráty při magnetizaci.",
        "Nízká koercitivní intenzita (typicky <1 kA/m) – snadné přemagnetování.",
        "Snadné zmagnetování i odmagnetování – vhodné pro elektromagnety, jádra transformátorů.",
        "Používají se v aplikacích, kde dochází k častým změnám magnetického pole."
      ]
    },
    {
      "question": "76) Plechy z křemíkových ocelí",
      "answer": [
        "Používají se k výrobě magnetických obvodů transformátorů.",
        "Obsahují křemík pro snížení ztrát vířivými proudy.",
        "Křemík zlepšuje elektrický odpor a snižuje ztráty při střídavém magnetickém poli."
      ]
    },
    {
      "question": "77) Minerální oleje se nepoužívají jako izolant",
      "answer": [
        "Minerální oleje se používají jako izolanty v transformátorech a některých motorech.",
        "Nepoužívají se jako izolanty ve výkonových polovodičích nebo v rezistorech.",
        "Jejich funkce zahrnuje jak chlazení, tak elektrickou izolaci."
      ]
    },
    {
      "question": "78) Základními oxidy používanými při výrobě skla jsou",
      "answer": [
        "Oxid křemičitý (SiO₂) – tvoří základní stavební jednotku většiny skel.",
        "Oxid boritý (B₂O₃) – snižuje teplotu tání a zvyšuje chemickou odolnost.",
        "Používají se i další oxidy, např. sodný nebo hlinitý, v menší míře jako přísady."
      ]
    },
    {
      "question": "79) Papír se v elektrotechnice používá",
      "answer": [
        "Jako výztuž levných desek plošných spojů.",
        "Ve formě speciálního izolačního papíru ve spojení s olejem v transformátorech.",
        "Méně často jako dielektrikum v elektrolytických kondenzátorech."
      ]
    },
    {
      "question": "80) Mezi speciální dielektrika patří",
      "answer": [
        "Pyroelektrika – jejich polarizace závisí na teplotě.",
        "Feroelektrika – vykazují spontánní polarizaci a hysterézi.",
        "Piezoelektrika – jejich polarizace závisí na mechanickém namáhání.",
        "Všechna výše uvedená jsou speciální dielektrika."
      ]
    },
    {
      "question": "81) Kapalné krystaly se mohou vyskytovat ve fázi",
      "answer": [
        "Nematické – molekuly jsou uspořádány orientačně, ale ne pozičně.",
        "Smektické – molekuly jsou uspořádány ve vrstvách.",
        "Cholesterické – derivát nematické fáze s spirálovým uspořádáním.",
        "Tyto fáze jsou základními typy uspořádání kapalných krystalů."
      ]
    }
  ]
};