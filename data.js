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
  ]
};