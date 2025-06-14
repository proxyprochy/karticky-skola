const cardData = {
  elm: [
    {
      "question": "1) Chyby měření: třída přesnosti, chyba digitálního přístroje, šíření chyb ve výpočtech.",
      "answer": [
        "Třída přesnosti: Maximální povolená relativní chyba v % z měřicího rozsahu přístroje.",
        "Chyba digitálního přístroje: Součet chyby čtení (v %) a chyby z rozsahu (ve formě digitů) - Např. ±(0,05 % + 2 digity).",
        "Při výpočtech při sčítání/odčítání se sčítají absolutní chyby, při násobení/delění relativní chyby."
      ]
    }
    ,
    {
      "question": "2) Nejistoty měření: standardní nejistota typu A, typu B, kombinovaná a rozšířená nejistota.",
      "answer": [
        "Typ A: Způsobena náhodnými jevy, určuje se statistickou analýzou opakovaných měření. Je to směrodatná odchylka aritmetického průměru měření, případně násobená korekčním koeficientem.",
        "Typ B: Pramení ze známých a odhadnutelných příčin (tolerance, podmínky).",
        "Kombinovaná nejistota: Vypočítána jako odmocnina ze součtu čtverců A a B.",
        "Rozšířená nejistota: Kombinovaná nejistota vynásobená koeficientem pokrytí (k), např. k=2 pro 95 %."
      ]
    }
    ,
    {
      "question": "3) Měření el. proudu: přístroje pro měření DC a AC proudu, AC/DC komparátor.",
      "answer": [
        "Vliv ampérmetru: Reálný ampérmetr má nenulový vnitřní odpor, což vnáší systematickou chybu",
        "DC proud: Magnetoelektrické A-metry: Levné, omezená přesnost, rozsahy ~10 μA až 1 A",
        "DC proud: Digitální multimetry: Vysoká přesnost, rozsahy ~100 μA až ~1 A, vysoké rozlišení (až 10 nA u lab. přístrojů)",
        "DC proud: Zpětnovazební A-metry: Měří velmi malé proudy (~1 pA až ~1 mA) s nulovým úbytkem na vstupu",
        "DC proud: I/U převodník s Hallovou sondou: Měří DC i AC proudy (~100 mA až ~10 kA), poskytuje galvanické oddělení",
        "AC proud: Magnetoelektrické s usměrňovači: Levné, omezená přesnost (kalibrováno pro sinus), frekvence do ~1 kHz.",
        "AC proud: Elektromagnetické přístroje: Měří přímo efektivní hodnotu bez ohledu na tvar, frekvence do ~100 Hz, vhodné jako panelové měřidlo.",
        "AC proud: Měřicí transformátory proudu: Pro AC, galvanické oddělení, vysoké proudy (~1 A až ~1 kA), dobrá přesnost.",
        "AC/DC komparátor proudu: Přesně porovnává tepelné účinky neznámého AC proudu a známého DC proudu pomocí topného tělesa s termočlánkem k určení efektivní hodnoty)",
      ]
    },
    {
      "question": "4) Měření el. napětí: přístroje pro měř. DC a AC napětí, AC/DC komparátor, kompenzátor DC napětí.",
      "answer": [
        "Vliv voltmetru: Reálný voltmetr má konečný vnitřní odpor, což způsobuje systematickou chybu.",

        "DC napětí: Magnetoelektrické V-metry: Levné, omezená přesnost, rozsahy ~0,1 V - ~100 V.",
        "DC napětí: Elektrostatické voltmetry: Měří velká napětí (až ~100 kV) s téměř nekonečným vnitřním odporem; elektronické verze pro nižší napětí.",
        "DC napětí: Digitální multimetry: Vysoká přesnost, rozlišení ~0,1 μV (lab. přístroje), rozsahy ~0,1 V - ~1 kV.",

        "Kompenzátor DC napětí: Porovnávání neznámého napětí s nastavitelným známým napětím. Vy vykompenzovaném stavu nezatěžuje měřený zdroj (ideální voltmetr)",

        "AC napětí: Elektromagnetické přístroje: Měří efektivní hodnotu bez ohledu na tvar průběhu, rozsahy ~10 V až ~100 V, frekvence do ~100 Hz, vyšší vlastní spotřeba.",
        "AC napětí: Magnetoelektrické s usměrňovači: Rozsahy ~1 V až ~100 V, problém tvaru průběhu (kalibrováno pro sinus), frekvence do ~10 kHz.",
        "AC napětí: Digitální multimetry: Rozsahy ~0.1 V až ~100 V, často s True RMS převodníkem, frekvence do ~100 kHz",
        "AC napětí: Měřicí transformátory napětí: Pro vysoká AC napětí (až ~10 kV), galvanické oddělení, pevný transformační poměr",
      ]
    },
    {
      "question": "5) Etalony el. napětí: Westonův článek, kvantový etalon napětí, elektronické etalony napětí.",
      "answer": [
        "Westonův článek: Stabilní elektrochemický článek dávající zatíženém stavu konstantní DC napětí velikosti 1,01865 V. Problém: značná teplotní závislost a nedostatečná životnost (koroze přívodních vodičů a následné praskaní skleněné baňky).",
        "Kvantový etalon: Využívá Josephsonova jevu (tunelování elektronů mezi supravodiči při 4 K). Generuje napětí kvantovaně na základě frekvence (f = 2eU/h), což poskytuje extrémně stabilní a přesnou referenci.",
        "Josephsonova konstanta: KJ90 = 483,5979 MHz/μV.",
        "Elektronické etalony: Zenerovy diody: Využívají stabilní průrazné napětí Zenerových diod."
      ]
    }
    ,
    {
      "question": "6) Měření výkonu el. proudu: přístroje pro měření výkonu DC a AC proudu, konstanta W-metru.",
      "answer": [
        "Přístroje pro měření výkonu: voltmetry a ampérmetry (ručkové, elektronické, digitální).",
        "Nepřímé měření (V-metrem a A-metrem).",
        "Elektrodynamické W-metry: Přímé měření DC i AC výkonu, frekvenční rozsah DC až 100 Hz.",
        "Ferodynamické W-metry: Přímé měření AC proudu, obvykle pro 50 Hz.",
        "AC výkon: Elektrodynamické, elektronické a digitální wattmetry (měří P = U·I·cos φ).",
        "Elektronické W-metry: Přímé měření DC i AC výkonu, frekvenční rozsah do 100 kHz.",
        "Konstanta W-metru (kW): Koeficient přepočtu výchylky ručky na měřenou hodnotu. kW = (Un * In) / (αm * cosφjm), kde Un a In jsou napěťový a proudový rozsah, αm je max. výchylka stupnice a cosφjm je jmenovitý účiník W-metru.",
      ]
    }
    ,
    {
      "question": "7) Měření výkonu el. proudu v 3-fázové síti: metody měření činného a jalového výkonu.",
      "answer": [
        "Blondelův teorém: Pro měření celkového činného výkonu v n-vodičové soustavě je potřeba minimálně (n-1) wattmetrů",
        "Měření činného výkonu ve čtyřvodičové síti (3 W-metry): Každý wattmetr měří výkon jedné fáze (proud jedné fáze, napětí fáze proti neutrálu). Celkový výkon je součet indikací: PZ = PW1 + PW2 + PW3",
        "Měření činného výkonu ve třívodičové síti (3 W-metry s umělou nulou): Napěťové cívky wattmetrů se připojují na uměle vytvořený neutrální bod. Celkový výkon je součet indikací: PZ = PW1 + PW2 + PW3",
        "Měření činného a jalového výkonu ve třívodičové síti – Aronovo zapojení (2 W-metry):",
        "Blondelův teorém: Pro měření celkového činného výkonu v n-vodičové soustavě je potřeba minimálně (n-1) wattmetrů",
        "Měření jalového výkonu ve třífázové síti pomocí 3 W-metrů (dle zdroje): Q3f = (PW1 + PW2 + PW3) / 3. (Pozn.: Tato konfigurace se pro měření jalového výkonu používá méně často než Aronovo zapojení.)",
      ]
    }
    ,
    {
      "question": "8) Měření spotřeby el. energie: přístroje pro měření spotřeby.",
      "answer": [
        "Spotřeba el. energie je integrál okamžitého výkonu v čase (E = ∫p(t)dt). Měřič energie funguje jako integrační wattmetr. Jednotka je obvykle kWh (1 kWh = 3.6 MJ)",
        "Indukční elektroměry: Využívají Ferrarisův stroj s točivým magnetickým polem a počítadlem. Otáčky kotouče jsou úměrné spotřebované energii. Pouze pro 50/60 Hz. Relativně nízká přesnost (TP=2). Nízká citlivost, problémy s neharmonickými průběhy. Vysoká vlastní spotřeba, ale velká přetížitelnost a robustnost. Relativně levné",
        "Elektronické (statické) elektroměry: Výhody: Větší přesnost, menší vlastní spotřeba, přesné měření i při malých odběrech a neharmonických průbězích. Nabízejí měření dalších parametrů (P, Q, S, U_RMS, I_RMS), časový záznam, SW konfiguraci, digitální/pulzní výstup a komunikaci (např. po síti)",
        "Měřiče umožňují záznam denních i měsíčních profilů spotřeby."
      ]
    }
    ,
    {
      "question": "9) Zjišťování sledu fází.",
      "answer": [
        "Zjišťování sledu fází je klíčové pro správné zapojení třífázových systémů.",
        "Měřič sledu fází: Využívá principu asynchronního motoru – směr otáčení rotoru indikuje sled fází.",
        "RC obvod s V-metrem: Podobně jako vadaska, ale místo doutnavky se používá voltmetr. Při správném sledu fází ukazuje voltmetr vyšší napětí než sdružené napětí sítě.",
        "Měření jalového výkonu na kapacitní zátěži pomocí W-metru: Wattmetr registruje jalový výkon. Při správném sledu fází a kapacitní zátěži bude výchylka přístroje záporná.",
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
        "Analogové měřiče frekvence: Určují frekvenci z četnosti kladných impulzů definovaného tvaru. Četnost pulzů se měří jako střední hodnota průběhu (magnetoelektrický systém). Používají se například v otáčkoměrech.",
        "Porovnávání frekvencí metodou Lissajousových obrazců: Princip: Na osciloskopu v režimu XY se zobrazí obrazec vzniklý ze dvou signálů (měřený a referenční etalonový). Poměr frekvencí je dán převráceným poměrem počtu dotyků křivky s osami x a y. Pokud poměr není celočíselný, obrazec 'rotuje'",
        "Porovnávání frekvencí metodou modulace jasu: Princip: Osciloskop pracuje v režimu XY, kde etalonový generátor vytvoří referenční elipsu. Měřený signál moduluje jas (vstup Z) osciloskopu. Počet přerušení obrazce (k) určuje, kolikrát je neznámý kmitočet větší než etalonový (fx = k*fn). Pokud k není celé číslo, obrazec 'rotuje'",
      ]
    }
    ,
    {
      "question": "12) Měření fázového posuvu: analogové a digitální fázoměry, použití osciloskopu a čítače k měření fáze.",
      "answer": [
        "Fázový posuv vyjadřuje vzájemnou polohu dvou sinusových průběhů stejného kmitočtu. Udává se ve stupních (360°/perioda) nebo radiánech (2π/perioda). Jde o měření časového posunutí (např. mezi průchody nulou)",
        "Analogové fázoměry: Fázový posuv je převeden na šířku impulzu s konstantní výškou. Střední hodnota takového signálu je úměrná fázovému posuvu",
        "Digitální fázoměry: Podobně jako analogové, ale výstup bistabilního klopného obvodu hradluje signál z oscilátoru. Počet čítaných pulzů je úměrný fázovému posuvu.",
        "Měření fázového posuvu osciloskopem: Režim Y-t: Zobrazení obou signálů v čase. Časový posuv (∆t) a perioda (T) se odečítají z rastru. Fázový posuv φ = 2π * (∆t / T)",
        "Měření fázového posuvu osciloskopem: Režim X-Y (Lissajousovy obrazce): Jeden signál na osu X, druhý na Y. Vznikne elipsa. Fázový posuv se vypočítá z poměru průsečíků elipsy s osami (např. sinφ = a/A).",
        "Měření fázového posuvu čítačem: Signály jsou přivedeny na vstupy dvoukanálového čítače. Měří se perioda T a časové intervaly t_nn (pro průchody nahoru) a t_dd (pro průchody dolů).."
      ]
    }
    ,
    {
      "question": "13) Měření el. odporu: Ohmova metoda, srovnávací metody.",
      "answer": [
        "Dvouvodičové připojení: Odpor přívodních vodičů se přičítá k měřenému odporu. Vhodné pro velké odpory.",
        "Čtyřvodičové (Kelvinovo) připojení: Oddělené proudové a napěťové svorky eliminují vliv odporů přívodních vodičů, ideální pro přesné měření malých odporů.",
        "Ohmova metoda: Odpor se určí z poměru měřeného napětí a proudu (Rx* = UV / IA).",
        "Ohmova metoda: Zapojení I. (Voltmetr za ampérmetrem): Měřicí chyba je způsobena vlastní spotřebou voltmetru. Vhodné pro měření malých odporů (Rx << RV).",
        "Ohmova metoda: Zapojení II. (Ampérmetr za voltmetrem): Měřicí chyba je způsobena vlastní spotřebou ampérmetru. Vhodné pro měření velkých odporů (Rx >> RA).",
        "Srovnávací metody: Využívají Kirchhoffových zákonů pro děliče napětí/proudu s jedním známým odporem.",
        "Srovnávací metody: Zapojení I. (Napěťový dělič s V-metry): Odpor se určí z poměru napětí na měřeném a referenčním odporu. Je vhodné pro malé odpory (Rx << RV).",
        "Srovnávací metody: Zapojení II. (Proudový dělič s A-metry): Odpor se určí z poměru proudů měřeným a referenčním odporem. Je vhodné pro velké odpory (Rx >> RA). V obou srovnávacích metodách je třeba korigovat chyby způsobené vlastní spotřebou měřicích přístrojů.",
      ]
    }
    ,
    {
      "question": "14) Měření el. odporu: Wheatstoneův a Thomsonův můstek, dvouvodičové a čtyřvodičové připojení.",
      "answer": [
        "Dvouvodičové připojení: Měří odpor vzorku plus odpor přívodních vodičů. Není přesné pro malé odpory, kde je odpor vodičů významný.",
        "Čtyřvodičové (Kelvinovo) připojení: Má oddělené proudové a napěťové svorky. Proud prochází proudovými svorkami, ale napětí se měří na napěťových svorkách přímo na vzorku, což eliminuje vliv odporu přívodních vodičů",
        "Wheatstoneův můstek: Princip Skládá se ze čtyř odporů v můstku a nulového indikátoru v diagonále",
        "Wheatstoneův můstek: Rovnovážný stav: Napětí v diagonále je nulové. Podmínka rovnováhy: Rx/R2 = R3/R4, z čehož lze vypočítat Rx",
        "Thomsonův můstek (Kelvinův můstek): Princip: Rozšíření Wheatstoneova můstku s přídavnými odpory, které umožňují čtyřvodičové připojení měřeného odporu. Tím se eliminuje vliv přechodových odporů mezi normálovým odporem a přívody",
      ]
    }
    ,
    {
      "question": "15) Etalony odporu: vinutý odporový etalon, QHE.",
      "answer": [
        "Sekundární etalony odporu (vinuté rezistory): Vinuté rezistory z kovových slitin (např. manganin), s bifilárním (bezindukčním) vinutím.",
        "Vlastnosti: Odchylka typicky 0,001 %, velmi nízký teplotní koeficient.",
        "Primární etalon odporu (kvantový Hallův jev - QHE): Založeno na kvantovém Hallově jevu, který se projevuje na tenkovrstvých polovodičových strukturách (2D polovodiče) při teplotách blízkých absolutní nule a silném magnetickém poli. Podélný odpor klesá k nule a příčný odpor nabývá celočíselných násobků von Klitzingovy konstanty (K90 = 25812.807 Ω).",
      ]
    }
    ,
    {
      "question": "16) Měření impedancí: náhradní zapojení cívky a kondenzátoru, činitel jakosti, ztrátové číslo.",
      "answer": [
        "Impedance (Z): Komplexní vyjádření odporu obvodu pro střídavý proud (Z = R + jX).",
        "Cívka a kondenzátor mají sériovou nebo paralelní náhradu - kombinace ideálního prvku a odporu.",
        "Činitel jakosti (Q): Vyjadřuje 'kvalitu' cívky. Je to poměr reaktance k sériovému odporu (Q = ωLs/Rs) nebo paralelnímu odporu k reaktanci (Q = Rp/ωLp). Čím vyšší Q, tím menší ztráty.",
        "Ztrátové číslo (D):  Vyjadřuje míru ztrát v kondenzátoru. Je to převrácená hodnota činitele jakosti (D = 1/Q) a rovná se tg𝛿."
      ]
    }
    ,
    {
      "question": "17) Měření impedancí: měření V a A-metrem, měření V, A a W-metrem, metoda 3V resp. 3A.",
      "answer": [
        "Měření impedancí V-metrem a A-metrem: Princip: Využívá Ohmův zákon pro AC obvody (Z = U/I). Určuje pouze velikost impedance, nikoli její reálnou a imaginární složku (fázi). Pro cívky/kondenzátory se DC odpor/vodivost používá nepřesně pro složku R.",
        "Měření impedancí V-metrem, A-metrem a W-metrem:: Princip: Kombinuje měření U, I a činného výkonu (P). Ze vztahu R = P/I^2 lze určit reálnou složku odporu. Z impedance Z = U/I a reálné složky se pak určí imaginární složka",
        "Metoda tří V-metrů: Princip: Měřená impedance (Zx) a známý normálový rezistor (Rn) jsou zapojeny do série se zdrojem napětí. Měří se napětí na Zx, Rn a celkové napětí. Z naměřených hodnot lze vypočítat fázový posuv a následně reálnou a imaginární složku impedance. Předpokládá ideální voltmetry",
        "Metoda tří A-metrů : Princip: Měřená impedance (Zx) a známý normálový rezistor (Rn) jsou zapojeny paralelně ke zdroji proudu. Měří se proudy do Zx, Rn a celkový proud. Z naměřených hodnot lze vypočítat fázový posuv a následně složky impedance. Předpokládá ideální ampérmetry"
      ]
    }
    ,
    {
      "question": "18) Měření impedancí: můstkové metody, obecný střídavý můstek.",
      "answer": [
        "Můstkové metody: Pro přesné měření impedancí (odporů, kapacit, indukčností). Principem je porovnání neznámé impedance se známými normálovými impedancemi",
        "Obecný střídavý můstek (Wheatstoneova typu): Princip: Skládá se ze čtyř impedancí zapojených do můstku. yvažování: Můstek se vyvažuje na minimální střídavé napětí v měřicí diagonále. Podmínky rovnováhy: Musí se rovnat poměr magnitud impedancí a také rozdíly fází na protilehlých větvích můstku",
        "Rovnovážná podmínka: Napětí mezi diagonálou je nulové - z této podmínky vypočítáme Zx.",
        "Můstky pro měření kondenzátorů: Např. Wienův můstek a Scheringův můstek.",
        "Můstky pro měření cívek: Např. Owenův můstek, Maxwell-Wienův můstek a Belfisův můstek."
      ]
    }
    ,
    {
      "question": "19) Měření impedancí: rezonanční metody, Q-metr.",
      "answer": [
        "Rezonanční metody: Využívají princip rezonance LC obvodu. Rezonance je dosažena změnou kapacity ladicího kondenzátoru (CN) nebo změnou frekvence oscilátoru (f)",
        "Q-metr: Rezonanční přístroj měřící činitel jakosti Q. Princip: Při rezonanci je výstupní napětí (U2) úměrné činiteli jakosti (Q), zatímco vstupní napětí (U1) je udržováno konstantní. Q = U2/U1 = ωLx/Rx. Měření indukčnosti a jakosti cívky: Cívka se připojí, najde se rezonanční frekvence (f) a kapacita (CN). Indukčnost (Lx) se vypočítá z rezonanční rovnice (Lx = 1/(4π^2f^2CN)), Q se odečte přímo",
        "Q-metr: Měření kapacit kondenzátorů: Malé kapacity (Cx < CNmax): Měří se ve dvou krocích - změnou CN při konstantní f. Cx = CN1 - CN2 (rozdíl rezonančních kapacit bez a s Cx). Velké kapacity (Cx > CNmax): Měří se změnou f při konstantní CN. Cx = CN * (f1^2 - f2^2) / f2^2",
        "Q-metr: Určení vlastní kapacity cívky (CL): Lze určit dvojím měřením nebo extrapolací"
      ]
    }
    ,
    {
      "question": "20) Měření impedancí: měření vzájemné indukčnosti a činitele vazby.",
      "answer": [
        "Vzájemná indukčnost (Mx): Vyjadřuje magnetickou vazbu mezi dvěma obvody.",
        "Měření vzájemné indukčnosti pomocí A-metru a V-metru: Princip: Měří se proud (I1) procházející jednou cívkou a indukované napětí (U2) na druhé cívce",
        "Měření vzájemné indukčnosti z vlastních indukčností: Princip: Dvě cívky se zapojí sériově dvěma způsoby: aditivně (tak, aby se indukčnosti sčítaly, L_a) a subtraktivně (tak, aby se odečítaly, L_b)",
        "Činitel vazby: ?"
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
  eltm:
    [
      {
        "question": "1) Vodíková vazba",
        "answer": [
          "patří mezi sekundární vazby; je slabší než vazba kovalentní.",
          "Vysvětlení: Vodíková vazba je klasifikována jako sekundární vazba (interakce). Je přibližně o dva řády slabší než primární kovalentní či iontová vazba. Vzniká jako přitažlivá síla mezi atomy vodíku a atomy s volným elektronovým párem v sousedních molekulách, typicky pokud je vodík kovalentně vázán na silně elektronegativní prvek, jako je kyslík nebo dusík."
        ]
      },
      {
        "question": "2) Označení intersticiální atom (intersticiál) se používá",
        "answer": [
          "pro atom umístěný v mezimřížkové poloze; pro jednu z bodových poruch.",
          "Vysvětlení: Intersticiál (intersticiální atom) je jednou z bodových poruch ve struktuře krystalických látek. Tato porucha představuje atom umístěný v mezimřížkové poloze, narušující pravidelnost struktury v jednom bodě."
        ]
      },
      {
        "question": "3) Zkouška pevnosti v tahu",
        "answer": [
          "patří z hlediska rychlosti nárůstu síly mezi zkoušky statické; může sloužit k určení meze kluzu; je zkouška destruktivní.",
          "Vysvětlení: Zkouška pevnosti v tahu je nejčastěji prováděnou mechanickou zkouškou. Z hlediska rychlosti nárůstu síly se řadí mezi statické zkoušky, protože je charakterizována konstantní rychlostí nárůstu síly. Slouží k zjištění pevnostních a plastických vlastností materiálu, přičemž výsledkem je tahový diagram, z něhož lze určit mez kluzu (napětí, při kterém dochází k prvním trvalým deformacím). Zkouška spočívá v postupném zatěžování zkušební tyče do přetržení, což ji činí destruktivní."
        ]
      },
      {
        "question": "4) Která tvrzení o litinách jsou pravdivé",
        "answer": [
          "jsou méně houževnaté než oceli; jsou křehčí než oceli.",
          "Vysvětlení: Litiny jsou slitiny železa s uhlíkem, které obsahují více než přibližně 2 % uhlíku. Ve srovnání s ocelemi se vyznačují vysokou křehkostí a nízkou pružností, což znamená, že jsou méně houževnaté."
        ]
      },
      {
        "question": "5) Mezi kovy s vysokou teplotou tání patří",
        "answer": [
          "wolfram; zirkonium.",
          "Vysvětlení: Mezi kovy s vysokou teplotou tání, které jsou definovány jako kovy s teplotou tání přibližně nad 2000 °C, patří wolfram a zirkonium. Wolfram má teplotu tání 3420 °C, což je nejvyšší ze všech kovů. Zirkonium má teplotu tání 1854 °C a je také zařazeno do této kategorie."
        ]
      },
      {
        "question": "6) V pásové teorii vodivosti pevných látek u polovodičů",
        "answer": [
          "je valenční a vodivostní pás oddělen zakázaným pásem menším než 3eV.",
          "Vysvětlení: Podle pásové teorie vodivosti pevných látek je u polovodičů valenční pás zcela zaplněn elektrony, zatímco vodivostní pás je od něj oddělen zakázaným pásem s malou šířkou, obvykle menší než 3 eV."
        ]
      },
      {
        "question": "7) Supravodiče II. typu",
        "answer": [
          "obsahují tzv. vortexy; je možné chladit kapalným dusíkem nebo vodíkem.",
          "Vysvětlení: Supravodiče II. typu jsou převážně slitiny, intermetalické sloučeniny a keramické materiály. Na rozdíl od supravodičů I. typu se u nich v mezistavu vyskytuje magnetické pole uvnitř supravodiče ve formě takzvaných vírů (vortexů). Mnoho supravodičů II. typu, zejména vysokoteplotní supravodiče s kritickou teplotou nad 30 K, lze chladit výrazně levnějšími médii, jako je kapalný vodík (LH2, 20,3 K) nebo kapalný dusík (LN2, 77,4 K), na rozdíl od nízkoteplotních supravodičů, které vyžadují kapalné helium (LHe, 4,2 K)."
        ]
      },
      {
        "question": "8) Stříbro má",
        "answer": [
          "elektrickou i tepelnou vodivost nejvyšší ze všech kovů.",
          "Vysvětlení: Stříbro se vyznačuje nejvyšší elektrickou i tepelnou vodivostí ze všech kovů. Jeho měrná vodivost je 63,0 x 10^6 S.m^-1, což je nejvyšší hodnota mezi uvedenými materiály v tabulce."
        ]
      },
      {
        "question": "9) Mezi požadavky na kontaktové materiály patří",
        "answer": [
          "velká tepelná vodivost; vysoká elektrická vodivost; malý přechodový odpor.",
          "Vysvětlení: Na materiály používané pro kontakty se klade několik klíčových požadavků pro zajištění spolehlivého spojení dvou vodičů, kterými prochází elektrický proud. Mezi tyto požadavky patří malý přechodový odpor, velká elektrická vodivost a velká tepelná vodivost. Dále se požaduje odolnost proti erozi způsobené elektrickým obloukem, mechanickému opotřebení a oxidaci."
        ]
      },
      {
        "question": "10) Pájky typu SAC",
        "answer": [
          "mají teplotu tání cca 220 stupňů; mají teplotu tání vyšší než pájky olovnaté.",
          "Vysvětlení: Pájky typu SAC (obvykle slitiny cínu, stříbra a mědi, např. SnAgCu) patří mezi měkké pájky s teplotou tání do 450 °C. Jejich typická teplota tání se pohybuje kolem 220 °C, což je vyšší hodnota než u tradičních olovnatých pájek (např. SnPb eutektikum taje při 183 °C). Používají se pro méně mechanicky namáhané spoje."
        ]
      },
      {
        "question": "11) Nevlastní vodivost u polovodičových materiálů",
        "answer": [
          "je způsobena donory a akceptory; je vyvolána procesem tzv. dopování.",
          "Vysvětlení: Nevlastní vodivost u polovodičových materiálů je výsledkem procesu zvaného dotování neboli dopování. Při tomto procesu jsou atomy polovodiče nahrazeny atomy cizích prvků, které fungují buď jako donory (prvky z V. skupiny, např. fosfor, antimon, arsen), dodávající přebytek elektronů a vytvářející polovodič typu N, nebo jako akceptory (prvky z III. skupiny, např. bor, indium, galium, hliník), které vytvářejí díry a vedou k polovodiči typu P."
        ]
      },
      {
        "question": "12) Mezi plynové lasery patří",
        "answer": [
          "helium-neonový laser; argonový laser.",
          "Vysvětlení: Plynové lasery generují paprsek v plynném prostředí. Mezi typické plynové lasery patří například helium-neonový (He-Ne) laser, argonový (Ar) laser a CO2 laser."
        ]
      },
      {
        "question": "13) Magnetická indukce",
        "answer": [
          "se značí B; je vektor.",
          "Vysvětlení: Magnetická indukce je jednou z veličin používaných pro makroskopický popis magnetik. Značí se písmenem B a její jednotkou je Tesla (T). Magnetická indukce v materiálu je vyjádřena vztahem B = μ * H, kde μ je permeabilita a H je intenzita magnetického pole. (Informace, že magnetická indukce je vektorová veličina, není explicitně uvedena v poskytnutých zdrojích, avšak v kontextu fyziky magnetických polí je B chápáno jako vektor.)"
        ]
      },
      {
        "question": "14) Diamagnetika mají",
        "answer": [
          "relativní permeabilitu menší než 1.",
          "Vysvětlení: Diamagnetika jsou látky, které po vložení do vnějšího magnetického pole vytváří pole opačné orientace, čímž zeslabují celkové magnetické pole. Jejich magnetická susceptibilita (χm) je záporná a relativní permeabilita (μr) je menší než 1. Příkladem diamagnetických látek jsou vzácné plyny, voda, sklo, grafit nebo některé kovy jako měď a zlato, a také supravodiče."
        ]
      },
      {
        "question": "15) Mezi magnetické tvrdé materiály patří",
        "answer": [
          "slitiny typu AlNiCo; materiály typu NdBFe.",
          "Vysvětlení: Magneticky tvrdé materiály jsou charakteristické tím, že se obtížně magnetizují, ale zároveň si magnetizaci dlouhodobě uchovávají. Používají se především k výrobě permanentních magnetů. Mezi nejčastěji používané skupiny patří slitinové magnety AlNiCo (slitiny železa s hliníkem, niklem a kobaltem) a magnety na bázi vzácných zemin, jako jsou neodymové magnety (intermetalické sloučeniny Nd2Fe14B), které patří mezi nejsilnější magnety s nejvyššími hodnotami energetického součinu."
        ]
      },
      {
        "question": "16) Na výrobu permanentních magnetů se používají materiály na bázi",
        "answer": [
          "feritů; slitin Al-Ni-Co; vzácných zemin(Sm, Nd).",
          "Vysvětlení: Pro výrobu permanentních magnetů se využívají magneticky tvrdé materiály, které si po zmagnetování uchovávají silnou magnetizaci. Mezi nejčastěji používané materiály patří slitiny Al-Ni-Co, tvrdé ferity a magnety na bázi vzácných zemin, jako jsou sloučeniny samaria (Sm) a neodymu (Nd). Tyto materiály mají širokou hysterezní smyčku a vysoké hodnoty remanentní indukce."
        ]
      },
      {
        "question": "17) Dielektrické materiály",
        "answer": [
          "se používají jako elektrické izolanty; mají schopnost polarizovat.",
          "Vysvětlení: Dielektrické materiály jsou látky, které se používají jako elektrické izolanty, tedy materiály, které nevedou elektrický proud a slouží k oddělování míst s různým elektrickým potenciálem. Jejich základní charakteristikou je schopnost polarizace ve vnějším elektrickém poli, což znamená narušení symetrie rozdělení elektrického náboje v materiálu."
        ]
      },
      {
        "question": "18) Mezi běžné plynné izolanty patří",
        "answer": [
          "dusík; vzduch.",
          "Vysvětlení: Plynné izolanty se dělí na běžné plyny, vzácné plyny a elektronegativní plyny. Mezi běžné plynné izolanty, které jsou složkami vzduchu, patří vzduch samotný (směs plynů, z níž 78 % tvoří dusík a 21 % kyslík) a dusík. Vzduch je nejběžnějším plynným izolantem používaným například ve venkovním vedení nebo vzduchových kondenzátorech, zatímco dusík je inertní plyn používaný k plnění vysokonapěťových kabelů nebo jako chladící médium."
        ]
      },
      {
        "question": "19) Minerální oleje",
        "answer": [
          "se získávají rafinací z ropy; se používají jako izolanty v transformátorech.",
          "Vysvětlení: Minerální oleje jsou směsi uhlovodíků, které se získávají destilací ropy. V elektrotechnice se široce používají jako kapalné izolanty, zejména ve vysokonapěťových a velmi vysokonapěťových transformátorech, kde plní nejen izolační, ale i chladicí funkci. Je však třeba dbát na jejich stárnutí a vlhkost, které zhoršují izolační vlastnosti."
        ]
      },
      {
        "question": "20) Slída se v elektrotechnice používá",
        "answer": [
          "jako součást izolačních systémů vn zařízení; v kondenzátorech.",
          "Vysvětlení: Slída je krystalický vrstevnatý minerál s velmi dobrými elektrickými vlastnostmi, vysokou elektrickou pevností (až 100 kV/mm) a vysokou teplotní odolností (až 900 °C). V elektrotechnice se používá v různých formách. Lístková slída se využívá v kondenzátorech, jako podložky pod výkonové součástky nebo v topných elementech. Rekonstruovaná slída, zvaná remika, se používá jako součást izolačních systémů ve vysokonapěťových (VN) zařízeních, například pro izolaci vodičů velkých elektrických točivých strojů nebo v ohniodolných kabelech."
        ]
      },
      {
        "question": "21) Mezi pevné organické izolanty patří",
        "answer": [
          "papír; kalafuna.",
          "Vysvětlení: Pevné organické izolanty jsou sloučeniny uhlíku, vodíku, kyslíku a dalších prvků, často ve formě makromolekulárních látek. Mezi přírodní organické izolanty patří papír, který se vyrábí z buničiny měkkého dřeva a často se používá v kombinaci s oleji nebo impregnovaný. Dále sem patří kalafuna, destilační zbytek z pryskyřice borovic, která se používá jako tavidlo pro pájení a součást elektroizolačních laků."
        ]
      },
      {
        "question": "22) Do skupiny termoplastů patří",
        "answer": [
          "polypropylen(PP); polyethylen(PE).",
          "Vysvětlení: Termoplasty jsou syntetické organické izolační materiály, které při zahřívání měknou a lze je tvářet, přecházejí do taveniny a po ochlazení opět ztuhnou, přičemž tento proces je opakovatelný. Jsou složeny z lineárních makromolekul, spojených slabými nevazebnými interakcemi. Do této skupiny patří například polyethylen (PE) a polypropylen (PP). Často se používají jako izolace vodičů a kabelů, k výrobě izolátorů nebo fólií."
        ]
      },
      {
        "question": "23) Zkratkou PTFE označujeme polymer",
        "answer": [
          "polytetrafluorethylen.",
          "Vysvětlení: Zkratkou PTFE se označuje polymer polytetrafluorethylen. Tento termoplastický materiál se vyznačuje vysokou elektrickou pevností (60–70 kV/mm) a nízkou relativní permitivitou (2,0–2,1)."
        ]
      },
      {
        "question": "24) Pyroelektrika",
        "answer": [
          "se využívají jako detektory pohybu; patří do skupiny feroelektrických látek; mají teplotní závislost polarizace.",
          "Vysvětlení: Pyroelektrika jsou podskupinou piezoelektrických materiálů, které se vyznačují samovolnou polarizací měnící se s teplotou. Feroelektrické materiály jsou pak speciálním případem pyroelektrik. Velikost dipólového momentu pyroelektrických látek je přímo úměrná změně teploty. Využívají se například jako teplotní čidla pro infračervené záření nebo jako detektory pohybu."
        ]
      },
      {
        "question": "25) Kovová vazba",
        "answer": [
          "má elektrostatický charakter; je tvořena kladnými ionty a volnými elektrony.",
          "Vysvětlení: Kovová vazba je typ primární chemické vazby, která je charakteristická pro kovy. Je tvořena kationty kovu uspořádanými v mřížce a volnými elektrony, které se pohybují v celém objemu látky (tzv. elektronový plyn). Tato vazba má elektrostatický charakter."
        ]
      },
      {
        "question": "26) Iontová vazba",
        "answer": [
          "vznikne předáním elektronů jednoho prvku druhému; je nejsilnější mezi prvky I. a VII. skupiny PSP; má elektrostatický charakter.",
          "Vysvětlení: Iontová vazba je chemická vazba, která vzniká předáním jednoho či více elektronů mezi atomy, což vede ke vzniku iontů s opačným znaménkem (kationtů a aniontů). Tato vazba má elektrostatický charakter a je typická pro iontové krystaly, jako jsou soli alkalických kovů (např. NaCl). Je nejsilnější při reakci prvků I. a VII. skupiny periodické soustavy prvků, kde je velký rozdíl v elektronegativitě."
        ]
      },
      {
        "question": "27) Van der Waalsova vazba",
        "answer": [
          "je slabší než vazba kovalentní; je založena na vzájemném působením dipólů v molekulách; patří mezi sekundární vazby.",
          "Vysvětlení: Van der Waalsova vazba (síla) patří mezi sekundární vazby (interakce). Je přibližně o dva řády slabší než primární kovalentní či iontová vazba. Tato vazba je založena na vzájemném působení molekulových dipólů, které vznikají díky okamžitému nerovnoměrnému rozložení elektronů v neutrálních molekulách."
        ]
      },
      {
        "question": "28) Čisté kovy jsou ve srovnání se slitinami",
        "answer": [
          "zpravidla měkké, tvárné, odolné pro korozi; lépe elektricky vodivé.",
          "Vysvětlení: Čisté kovy se ve srovnání se slitinami obecně vyznačují tím, že jsou měkké, tvárné a mají menší pevnost. Zároveň jsou velmi dobře elektricky vodivé a odolné proti korozi. Naproti tomu slitiny kovů jsou tvrdší, pevnější, ale hůře tvárné a mají horší elektrickou vodivost."
        ]
      },
      {
        "question": "29) Oceli se ve elektrotechnice používají na výrobu",
        "answer": [
          "stožárů vn a vvn; hřídelí točivých strojů.",
          "Vysvětlení: Oceli jsou technicky nejvýznamnější kovy a v elektrotechnice nacházejí široké uplatnění, zejména ve formě konstrukčních ocelí. Používají se například na výrobu stožárů velmi vysokého napětí (VVN), hřídelí točivých strojů, malých rotorů, svorníků transformátorů, koster asynchronních motorů a těles ložisek synchronních generátorů."
        ]
      },
      {
        "question": "30) Na výrobu lehkých a pevných konstrukčních prvků se používají slitiny",
        "answer": [
          "hliníku; titan.",
          "Vysvětlení: Pro výrobu lehkých a pevných konstrukčních prvků se často využívají slitiny lehkých kovů. Hliník je lehký kov (hustota 2700 kg/m³) a jeho lehké pevné slitiny, jako je dural (Al+Mg+Cu) nebo siluminy (Al+Si), nacházejí uplatnění v leteckém a automobilovém průmyslu, strojírenství a elektrotechnice. Titan je také velmi lehký (hustota 4500 kg/m³) a vyznačuje se vysokou pevností (vyšší než ocel) a výbornou korozní odolností, což ho činí vhodným pro leteckou, kosmickou a lékařskou techniku."
        ]
      },
      {
        "question": "31) Mezi bodové poruchy patří",
        "answer": [
          "vakance; intersticiál; substituční atom.",
          "Vysvětlení: Bodové poruchy v krystalických látkách představují narušení pravidelnosti struktury v jednom místě. Mezi tyto poruchy patří vakance (chybějící atom v mřížce), intersticiál (atom umístěný v mezimřížkové poloze) a substituční atom (příměs nahrazující atom v mřížce)."
        ]
      },
      {
        "question": "32) Žárupevnost materiálu je",
        "answer": [
          "schopnost materiálu dlouhodobě snášet větší namáhaní za vyšších teplot.",
          "Vysvětlení: Žárupevnost je mechanická vlastnost materiálu, která vyjadřuje jeho schopnost dlouhodobě přenášet větší namáhání za vyšších teplot. Jedná se tedy o pevnost materiálu za zvýšených teplot."
        ]
      },
      {
        "question": "33) Slitiny železa",
        "answer": [
          "bohaté na uhlík označujeme jako litiny; chudé na uhlík označujeme jako oceli.",
          "Vysvětlení: Slitiny železa s uhlíkem se dělí podle obsahu uhlíku. Slitiny s obsahem uhlíku přibližně do 2 % se označují jako oceli (tedy jsou chudé na uhlík), zatímco slitiny s obsahem uhlíku nad 2 % se nazývají litiny (tedy jsou bohaté na uhlík)."
        ]
      },
      {
        "question": "34) Zinek se používá",
        "answer": [
          "s mědí jako součást mosazných slitin; jako protikorozní ochrana ocelí.",
          "Vysvětlení: Zinek je bílošedý kov s teplotou tání 419 °C. Používá se jako protikorozní ochrana ocelových výrobků prostřednictvím pozinkování. Dále je důležitou součástí slitin, například s mědí tvoří mosazi."
        ]
      },
      {
        "question": "35) V pásové teorii pevných látek zakázaný pás",
        "answer": [
          "má u izolantů šířku větší než 3 eV; u izolantů odděluje vodivostní a valenční pás.",
          "Vysvětlení: V pásové teorii vodivosti pevných látek je zakázaný pás energetická mezera, která odděluje valenční pás (poslední pás obsahující elektrony) od vodivostního pásu (první neobsazený pás orbitalů). U izolantů má tento zakázaný pás velkou šířku, typicky větší než 3 eV, což brání elektronům v přesunu do vodivostního pásu a způsobuje nízkou elektrickou vodivost materiálu."
        ]
      },
      {
        "question": "36) Supravodiče",
        "answer": [
          "se používají pro generování silných magnetických polí; se používají ve speciálních přenosových kabelech v energetice; se dají využít k akumulaci elektrické energie.",
          "Vysvětlení: Supravodiče jsou materiály, u nichž při velmi nízkých teplotách skokově klesá rezistivita na téměř nulovou hodnotu, což umožňuje vedení proudu bez Jouleových ztrát. Díky těmto vlastnostem mají řadu aplikací, včetně generování silných magnetických polí pomocí supravodivých magnetů, bezeztrátového přenosu elektrické energie ve speciálních kabelech a uchování (akumulace) elektrické energie."
        ]
      },
      {
        "question": "37) Která tvrzení o hliníku jsou pravdivá",
        "answer": [
          "jeho elektrická vodivost dosahuje přibližně 60% vodivosti mědi; používá se na elektrovodná lana vn, vvn, zvn.",
          "Vysvětlení: Hliník je bílošedý lehký kov. Jeho elektrická vodivost dosahuje přibližně 60 % elektrické vodivosti mědi, což ho řadí mezi nejlepší vodiče. Díky své nízké hustotě a dobré vodivosti se široce používá na elektrovodná lana pro vysoké a velmi vysoké napětí (VN, VVN) a také v silnoproudých kabelech."
        ]
      },
      {
        "question": "38) Mezi nekovové odporové materiály patří",
        "answer": [
          "silit; grafit.",
          "Vysvětlení: Mezi nekovové odporové materiály, které se používají pro vyšší pracovní teploty, patří Silit (karbid křemíku, SiC) a uhlíkové nebo grafitové topné materiály. Silit je křehký, ale použitelný až do 1600 °C, zatímco uhlíkové a grafitové materiály mohou pracovat až do 2500 °C ve vakuu nebo ochranné atmosféře."
        ]
      },
      {
        "question": "39) U polovodičů typu N platí, že",
        "answer": [
          "jako příměsi se používají donory, např. As, P, Sb; majoritním nosičem jsou elektrony.",
          "Vysvětlení: U polovodičů typu N, které vznikají procesem dopování (dotování) základního polovodiče, se jako příměsi používají donory. Jde o prvky z V. skupiny periodické tabulky, jako je fosfor (P), antimon (Sb) nebo arsen (As). Tyto atomy dodávají do struktury přebytečné elektrony, které se stávají majoritními nosiči náboje."
        ]
      },
      {
        "question": "40) Pro kovové pájky platí, že",
        "answer": [
          "hranice mezi měkkými a tvrdými pájkami je 450 stupňů; se používají metalurgické spojování kovů.",
          "Vysvětlení: Pájení je proces metalurgického spojení materiálů za použití přídavného materiálu – pájky. Kovové pájky se dělí na měkké a tvrdé, přičemž hranice mezi nimi je stanovena teplotou tání 450 °C; měkké pájky mají teplotu tání do 450 °C, zatímco tvrdé pájky nad 450 °C."
        ]
      },
      {
        "question": "41) U polovodičů typu P platí, že",
        "answer": [
          "jako příměsi se používají akceptory, např. B, In, Ga, Al; majoritním nosičem jsou díry.",
          "Vysvětlení: U polovodičů typu P se jako příměsi používají akceptory. Jsou to prvky z III. skupiny periodické tabulky, například bor (B), indium (In), galium (Ga) nebo hliník (Al). Tyto příměsi vytvářejí v polovodiči díry, které se stávají majoritními nosiči náboje."
        ]
      },
      {
        "question": "42) Pro šíření optického signálu světlovodem musí pro index lomu jádra n1 a index lomu pláště n2 platit podmínka",
        "answer": [
          "n1 > n2.",
          "Vysvětlení: Pro správné šíření optického signálu ve vláknovém světlovodu, který slouží k přenosu informace na optických kmitočtech, je klíčová podmínka pro indexy lomu jádra (n1) a pláště (n2). Index lomu jádra (n1) musí být větší než index lomu pláště (n2). Tato podmínka zajišťuje totální vnitřní odraz signálu uvnitř jádra a jeho efektivní přenos na velké vzdálenosti."
        ]
      },
      {
        "question": "43) Relativní permeabilita",
        "answer": [
          "má u paramagnetik hodnotu >1; má u diamagnetik hodnotu <1; se značí μr.",
          "Vysvětlení: Relativní permeabilita (μr) je materiálová veličina, která udává, kolikrát silnější je magnetické pole v materiálu v porovnání s polem stejné intenzity ve vakuu. U diamagnetik má relativní permeabilita hodnotu menší než 1 (μr < 1), zatímco u paramagnetik má hodnotu větší než 1 (μr > 1)."
        ]
      },
      {
        "question": "44) Po vložení paramagnetika do magnetického pole dojde",
        "answer": [
          "k mírnému zesílení magnetického pole.",
          "Vysvětlení: Paramagnetika jsou látky, jejichž částice mají nevykompenzované magnetické momenty. Po vložení paramagnetika do vnějšího magnetického pole se tyto částice orientují ve shodě s vnějším polem, což vede k mírnému zesílení magnetického pole."
        ]
      },
      {
        "question": "45) Mezi charakteristické vlastnosti magnetického materiálu patří",
        "answer": [
          "relativní permeabilita; remanentní indukce.",
          "Vysvětlení: Mezi charakteristické vlastnosti magnetických materiálů, které popisují jejich chování v magnetickém poli, patří relativní permeabilita (μr), jež udává, kolikrát silnější je magnetické pole v materiálu oproti vakuu. Dále je důležitá remanentní indukce (Br), což je hodnota magnetické indukce, která v materiálu zůstane po zmagnetování v uzavřeném obvodu a snížení intenzity magnetického pole na nulu."
        ]
      },
      {
        "question": "46) Magnetická kovová skla",
        "answer": [
          "jsou amorfní magnetické materiály, většinou na bázi Fe; patří mezi magneticky měkké materiály.",
          "Vysvětlení: Magnetická kovová skla, známá také jako amorfní kovové slitiny, jsou materiály, u nichž v důsledku prudkého ochlazení nedošlo k vytvoření krystalické mřížky, a proto mají amorfní strukturu. Patří mezi magneticky měkké materiály, což znamená, že se snadno magnetizují i odmagnetovávají. Jejich složení je často na bázi železa, kobaltu nebo niklu s přídavkem boru, uhlíku, fosforu nebo křemíku, například METGLAS."
        ]
      },
      {
        "question": "47) Ztrátový úhel u dielektrických materiálů",
        "answer": [
          "představuje míru energie přeměněnou na teplo; je doplňkový úhel do 90° k úhlu φ.",
          "Vysvětlení: Ztrátový úhel (δ) u dielektrických materiálů je klíčový parametr související s dielektrickými ztrátami. Tyto ztráty představují elektrickou energii přeměněnou na teplo za jednotku času v jednotce objemu. Ztrátový úhel δ je doplňkový úhel do 90° k úhlu fázového posunu φ mezi proudem a napětím (δ = 90° - φ). Jeho tangens (tg δ) je pak nazýván ztrátovým činitelem a obvyklé hodnoty se pohybují v rozmezí 10^-1 až 10^-5."
        ]
      },
      {
        "question": "48) Fluorid sírový se v elektrotechnice používá",
        "answer": [
          "v zapouzdřených rozvodnách.",
          "Vysvětlení: Fluorid sírový (SF6) je elektronegativní plyn vyznačující se vysokou elektrickou pevností (až 5x vyšší než vzduch při stejném tlaku). V elektrotechnice se používá k plnění suchých transformátorů, vysokonapěťových vypínačů a jako izolační náplň v zapouzdřených rozvodnách a některých typech silových kabelů."
        ]
      },
      {
        "question": "49) Keramika se používá na výrobu",
        "answer": [
          "izolátorů; průchodek.",
          "Vysvětlení: Keramika je pevný, polykrystalický materiál, který vzniká vypálením anorganických nekovových surovin. V elektrotechnice se široce používá pro své výborné izolační vlastnosti, velkou pevnost a tvrdost i za vysokých teplot. Konkrétně silikátové keramiky, jako je porcelán nebo steatit, se využívají na výrobu izolátorů pro elektrická vedení a průchodek transformátorů a dalších zařízení."
        ]
      },
      {
        "question": "50) Kalafuna",
        "answer": [
          "se získávají ze smoly jehličnanů; se používá jako tavidlo při pájení; se řadí do skupiny organických pevných izolantů.",
          "Vysvětlení: Kalafuna je přírodní organický pevný izolant, který je destilačním zbytkem z pryskyřice borovic, tvořený zejména organickými kyselinami. V elektrotechnice se hojně používá jako tavidlo pro pájení, protože horká kalafuna reaguje podobně jako silné kyseliny a rozpouští kovy i jejich oxidy, čímž usnadňuje tvorbu pájeného spoje."
        ]
      },
      {
        "question": "51) Mezi plasty s vysokou tepelnou odolností (více než 200 stupňů) patří",
        "answer": [
          "silikon (SI); polytetrafluorethylen (PTFE).",
          "Vysvětlení: Mezi plasty vyznačující se vysokou tepelnou odolností, tedy schopností pracovat při teplotách přesahujících 200 °C, patří silikon (SI) a polytetrafluorethylen (PTFE). Silikony jsou organokřemičité polymery s výbornou odolností proti teplu v rozsahu -60 až 350 °C. Polytetrafluorethylen (PTFE) je termoplastický materiál. (Přesný teplotní rozsah pro PTFE není v poskytnutých zdrojích explicitně uveden, nicméně je obecně řazen mezi vysokoteplotní polymery.)"
        ]
      },
      {
        "question": "52) Termoplastické elastomery",
        "answer": [
          "se zpracovávají stejnými technologiemi jako termoplasty; mají při pokojové teplotě vlastnosti elastomerů.",
          "Vysvětlení: Termoplastické elastomery (TPE) jsou polymerní systémy, které kombinují aplikační vlastnosti elastomerů, jako je vysoká elasticita při pokojové teplotě, se zpracovatelskými vlastnostmi termoplastů. To znamená, že je lze snadno zpracovávat stejnými technologiemi jako termoplasty, aniž by byla nutná vulkanizace."
        ]
      },
      {
        "question": "53) Mezi speciální dielektrika patří",
        "answer": [
          "piezoelektrika - jejich polarizace závisí na mechanické deformaci; pyroelektrika - mají teplotní závislost polarizace.",
          "Vysvětlení: Speciální dielektrické materiály jsou látky, u nichž polarizace závisí na jiných faktorech než jen na intenzitě elektrického pole. Mezi ně patří piezoelektrika, u nichž je polarizace vyvolána pružnou mechanickou deformací. Dále sem patří pyroelektrika, což jsou látky se samovolnou polarizací, která se mění v závislosti na teplotě."
        ]
      },
      {
        "question": "54) Termotropní kapalné krystaly",
        "answer": [
          "se používají na výrobu displejů; vznikají tavením pevných krystalů.",
          "Vysvětlení: Termotropní kapalné krystaly jsou organické krystalické polární látky, u nichž přechod do parakrystalického stavu (mezofáze) je způsoben změnou teploty (ohřevem, tedy tavením pevných krystalů). Tento stav je charakteristický tím, že se chovají jako kapaliny, ale molekuly jsou pravidelně uspořádány jako v krystalech. Jejich hlavní aplikací je zobrazovací technika, kde se využívají k výrobě různých typů displejů (LCD)."
        ]
      },
      {
        "question": "55) Vakance se používá pro označení",
        "answer": [
          "pro chybějící atom v krystalové mřížce; pro jednu z bodových poruch.",
          "Vysvětlení: Vakance je typ bodové poruchy v krystalické struktuře látek, která představuje chybějící atom v krystalové mřížce. Jedná se o narušení pravidelnosti struktury v jediném bodě."
        ]
      },
      {
        "question": "56) Mezi kovy se střední nebo vysokou teplotou tání patří",
        "answer": [
          "Měď; Chrom.",
          "Vysvětlení: Kovy se dělí podle teploty tání na kovy s nízkou (do 500 °C), střední (do 1500 °C) a vysokou (nad 2000 °C) teplotou tání. Mezi kovy se střední teplotou tání patří měď (Cu), která má teplotu tání 1084 °C. Chrom (Cr) je zařazen mezi kovy s vysokou teplotou tání."
        ]
      },
      {
        "question": "57) V pásové teorii vodivosti pevných látek u kovů",
        "answer": [
          "se vodivostní pás překrývá s valenčním pásem.",
          "Vysvětlení: Podle pásové teorie vodivosti pevných látek je u kovů valenční pás buď zcela zaplněn elektrony, nebo se překrývá s vodivostním pásem. Absence energetické bariéry mezi těmito pásy a delokalizace elektronových orbitalů umožňují volný pohyb elektronů, což je důsledkem vysoké elektrické a tepelné vodivosti kovů."
        ]
      },
      {
        "question": "58) Bimetaly",
        "answer": [
          "se používají v tepelných jističích a termostatech; jsou tvořeny dvěma mechanicky spojenými kovy s různou délkovou roztažností.",
          "Vysvětlení: Bimetaly jsou dvojkovové materiály složené ze dvou různých kovů nebo slitin s odlišnou délkovou roztažností, které jsou spolu mechanicky nebo metalurgicky spojeny. Při změně teploty dochází k různým změnám délky obou vrstev, což způsobuje ohyb bimetalického pásku. Tato vlastnost se využívá v tepelných jističích, termostatech a vratných tepelných pojistkách."
        ]
      },
      {
        "question": "59) Slitiny mědi",
        "answer": [
          "mosazi - slitiny mědi a zinku, kde část zinku může být nahrazena jiným kovem; bronzy - všechny slitiny mědi, kromě mosazí.",
          "Vysvětlení: Slitiny mědi se obecně dělí na mosazi a bronzy. Mosazi jsou slitiny mědi a zinku, které jsou tvrdší a pevnější než čistá měď a lépe obrobitelné. Bronzy jsou pak definovány jako všechny ostatní slitiny mědi kromě mosazí, přičemž jsou označovány podle přidaného kovu, například cínový, hliníkový nebo niklový bronz."
        ]
      },
      {
        "question": "60) Vlastní (intrinsická) vodivost u polovodičových materiálů",
        "answer": [
          "je určena vodivostí základního materiálu.",
          "Vysvětlení: Vlastní neboli intrinsická vodivost se vyskytuje ve všech polovodičích. Je dána inherentními vlastnostmi základního polovodičového materiálu, kde při teplotách nad 0 K dochází k excitaci některých elektronů z valenčního pásu do vodivostního pásu (elektronová vodivost) a zároveň vznikají volná místa (díry) ve valenčním pásu (děrová vodivost). Počet děr se rovná počtu vodivostních elektronů."
        ]
      },
      {
        "question": "61) Uhlík se v elektrotechnice používá",
        "answer": [
          "jako odporový materiál; jako kontaktový materiál.",
          "Vysvětlení: Uhlík nachází v elektrotechnice uplatnění jako odporový materiál a také jako kontaktní materiál. Díky svým vlastnostem, jako je dobrá elektrická vodivost a nízký součinitel tření (samomaznost), je uhlík vhodný pro kluzné kontakty, například ve formě uhlíkových kartáčů v elektrických točivých strojích nebo sběračů proudu v elektrické trakci."
        ]
      },
      {
        "question": "62) Mezi diamagnetika patří",
        "answer": [
          "supravodiče; měď.",
          "Vysvětlení: Diamagnetika jsou látky, které po vložení do vnějšího magnetického pole vytvářejí pole opačné orientace, čímž zeslabují magnetické pole. Mezi diamagnetické materiály patří některé kovy, jako je měď (Cu), a také supravodiče. Supravodiče jsou považovány za ideální diamagnetické materiály, neboť zcela vytlačují magnetické pole ze svého objemu, což je známé jako Meissnerův-(Ochsenfeldův) jev."
        ]
      },
      {
        "question": "63) Relativní permitivita vody jako silně polární látky je přibližně",
        "answer": [
          "80.",
          "Vysvětlení: Relativní permitivita (εr) je materiálová veličina, která udává, kolikrát je schopnost polarizace daného materiálu vyšší než schopnost polarizace vakua. Voda je silně polární látka a její relativní permitivita je přibližně 80."
        ]
      },
      {
        "question": "64) Mezi magneticky měkké materiály patří",
        "answer": [
          "křemíkové oceli; Permalloye.",
          "Vysvětlení: Magneticky měkké materiály se vyznačují snadným zmagnetováním a odmagnetováním, úzkou hysterezní smyčkou a vysokou permeabilitou. Používají se pro obvody se střídavou magnetizací. Mezi tyto materiály patří elektrotechnické (křemíkové) oceli, které se používají pro stavbu magnetických obvodů transformátorů a motorů, a také slitiny Fe-Ni, známé jako Permalloye, které mají velmi vysokou počáteční permeabilitu."
        ]
      },
      {
        "question": "65) Mezi charakteristické vlastnosti plynných izolantů patří",
        "answer": [
          "nízké dielektrické ztráty; schopnost regenerace po průrazu; dielektrické ztráty nezávislé na frekvenci.",
          "Vysvětlení: Plynné izolanty se vyznačují několika charakteristickými vlastnostmi, které je činí vhodnými pro specifické aplikace. Mají nízké dielektrické ztráty, které jsou prakticky nezávislé na frekvenci. Důležitou vlastností je také jejich schopnost regenerace, což znamená, že po elektrickém průrazu (přeskoku) jsou schopny obnovit své izolační schopnosti. Dále mají nízkou relativní permitivitu (o málo vyšší než 1) a rovnoměrně vyplňují prostor."
        ]
      },
      {
        "question": "66) Jako kapalné izolanty se v elektrotechnice používají",
        "answer": [
          "minerální oleje; syntetické oleje.",
          "Vysvětlení: Kapalné izolanty se v elektrotechnice používají pro své výhody, jako je vysoká elektrická pevnost, dobrý odvod tepla a schopnost vyplňovat póry a dutiny. Dělí se podle původu na minerální oleje, které se získávají destilací ropy, a syntetické kapaliny (syntetické oleje), což jsou uměle připravené chemické sloučeniny. Minerální oleje se využívají například v transformátorech, zatímco syntetické kapaliny, jako silikonové oleje, se používají jako náhrada minerálních olejů v zařízeních, kde je vyžadována vyšší permitivita nebo nižší hořlavost."
        ]
      },
      {
        "question": "67) Polymery s lineární strukturou jsou",
        "answer": [
          "převážně termoplasty; většinou dobře tavitelné.",
          "Vysvětlení: Polymery s lineární strukturou makromolekul jsou převážně termoplasty. Tyto materiály jsou složeny z dlouhých lineárních řetězců spojených slabými nevazebnými interakcemi. Díky tomu při zahřívání měknou a přecházejí do taveniny, což je činí dobře tavitelnými a tvarovatelnými. Po ochlazení opět ztuhnou, a tento proces je opakovatelný."
        ]
      },
      {
        "question": "68) Elastomery",
        "answer": [
          "jsou materiály, u kterých již při působení malých sil dochází k velké vratné deformaci.",
          "Vysvětlení: Elastomery jsou polymery, které se vyznačují vysokou hodnotou mezní elastické deformace. To znamená, že již při působení malých mechanických sil u nich dochází k velkým vratným rozměrovým změnám. Příkladem elastomerů jsou pryže, jejichž struktura je tvořena dlouhými deformovanými lineárními molekulami se sítí vzájemných kovalentních vazeb, což umožňuje tuto vratnou deformaci."
        ]
      },
      {
        "question": "69) Feroelektrika jsou",
        "answer": [
          "materiály používané jako dielektrika v kondenzátorech; obdobou feromagnetických látek v elektrickém poli.",
          "Vysvětlení: Feroelektrika jsou speciálním typem pyroelektrických materiálů. Vyznačují se tím, že se v elektrickém poli chovají obdobně jako feromagnetické látky v magnetickém poli, a to díky podobné doménové struktuře a závislosti polarizace na intenzitě elektrického pole, která vytváří hysterezní smyčku. Díky velmi vysokým hodnotám permitivity (10^2 – 10^4) se feroelektrické materiály, jako je barium titanát (BaTiO3), často používají jako dielektrika v kondenzátorech."
        ]
      },
      {
        "question": "70) Pro vznik termotropních kapalných krystalů je potřeba",
        "answer": [
          "určitá oblast teplot.",
          "Vysvětlení: Pro vznik termotropních kapalných krystalů je nezbytná určitá oblast teplot. U těchto organických krystalických látek dochází k přechodu do parakrystalického stavu (mezofáze) působením změny teploty, tj. ohřevem. Tato mezofáze existuje mezi teplotou tání (Tm) a teplotou vyjasnění (Tc)."
        ]
      },
      {
        "question": "71) Pro vodivé materiály platí, že",
        "answer": [
          "nejlepší elektrickým vodičem je stříbro; nejlepší mají rezistivitu v řádu 0,00000001 Ωm.",
          "Vysvětlení: Pro vodivé materiály platí, že nejlepším elektrickým vodičem je stříbro, které má ze všech kovů nejvyšší elektrickou vodivost. Měrný odpor stříbra je 0,0159 x 10^-6 Ω·m, což odpovídá řádu 0,00000001 Ω·m."
        ]
      },
      {
        "question": "72) Jako odporový materiál se používá",
        "answer": [
          "chromnikl; konstantan.",
          "Vysvětlení: Jako odporové materiály se používají látky s vyšší rezistivitou než běžné vodiče. Mezi drátové odporové materiály patří například chromnikl (slitina Ni-Cr) a konstantan (slitina mědi s niklem). Chromnikl se využívá pro topné elementy v elektrotepelných zařízeních, které pracují při teplotách nad 1000 °C, zatímco konstantan se používá pro běžné rezistory a termoelektrické články."
        ]
      },
      {
        "question": "73) Pro výrobu jader optických vláknových světlovodů se používají",
        "answer": [
          "fluoridové sklo; syntetický křemen; polymethylmetakrylát.",
          "Vysvětlení: Pro výrobu jader optických vláknových světlovodů, které slouží k přenosu informace na velké vzdálenosti, se používají materiály s specifickými optickými vlastnostmi. Mezi ně patří syntetický křemen (SiO2), který je nejběžnějším materiálem pro jádra, dále fluoridová skla, využívaná zejména pro infračervené pásmo, a také polymery, nejčastěji polymethylmetakrylát (PMMA), který je levnější alternativou."
        ]
      },
      {
        "question": "74) Natáčení magnetických momentů domén podle směru vnějšího magnetického pole se vyskytuje",
        "answer": [
          "feromagnetika; ferimagnetika.",
          "Vysvětlení: Natáčení magnetických momentů domén podle směru vnějšího magnetického pole je charakteristické pro materiály s doménovou strukturou, jako jsou feromagnetika a ferimagnetika. U feromagnetik jsou to oblasti, kde jsou magnetické momenty atomů uspořádány paralelně. Ferimagnetika, jako jsou ferity, mají také doménovou strukturu, ale s neúplně kompenzovaným antiparalelním uspořádáním magnetických momentů."
        ]
      },
      {
        "question": "75) Mezi charakteristické vlastnosti magneticky měkkých materiálů patří",
        "answer": [
          "snadné zmagnetování i odmagnetování; koercitivní intenzita menší než 1kA/m; úzká hysterezní smyčka.",
          "Vysvětlení: Magneticky měkké materiály jsou charakteristické tím, že se snadno magnetizují i odmagnetovávají. Projevuje se u nich úzká hysterezní smyčka, což znamená malou koercitivní intenzitu (Hc) – typicky menší než 1 kA/m. Tyto materiály se používají pro obvody se střídavou magnetizací."
        ]
      },
      {
        "question": "76) Plechy z křemíkových ocelí",
        "answer": [
          "se používají k výrobě magnetických obvodů transformátorů; obsahují křemík pro snížení ztrát vířivými proudy.",
          "Vysvětlení: Plechy z křemíkových ocelí se používají pro stavbu magnetických obvodů transformátorů, motorů a generátorů. Křemík se přidává do oceli, aby se zvýšila její rezistivita. Vyšší rezistivita následně vede ke snížení ztrát vířivými proudy, které jsou důsledkem elektrické vodivosti feromagnetik."
        ]
      },
      {
        "question": "77) Minerální oleje se nepoužívají jako izolant",
        "answer": [
          "v motorech; v rezistorech; ve výkonových polovodičích.",
          "Vysvětlení: Minerální oleje se v elektrotechnice používají jako kapalné izolanty a chladiva především ve vysokonapěťových transformátorech, průchodkách, olejových vypínačích a VN kondenzátorech. (Dostupné zdroje explicitně neuvádějí, ve kterých z uvedených aplikací, jako jsou motory, rezistory nebo výkonové polovodiče, se minerální oleje nepoužívají, pouze vymezují oblasti jejich použití.)"
        ]
      },
      {
        "question": "78) Základními oxidy používanými při výrobě skla jsou",
        "answer": [
          "oxid křemičitý; oxid hlinitý; oxid boritý; oxid sodný.",
          "Vysvětlení: Sklo je anorganická amorfní pevná látka, která se vyrábí tavením základních surovin. Mezi klíčové sklotvorné oxidy patří oxid křemičitý (SiO2), který tvoří základ křemičitých a boritokřemičitých skel. Dále se přidávají oxid boritý (B2O3) pro boritokřemičitá skla, oxid hlinitý (Al2O3) a oxid sodný (Na2O), který slouží jako tavivo a pomáhá snížit teplotu tavení a stabilizovat sklovinu."
        ]
      },
      {
        "question": "79) Papír se v elektrotechnice používá",
        "answer": [
          "spolu s olejem jako izolační systém transformátorů; jako výztuž levných desek plošných spojů.",
          "Vysvětlení: Elektrotechnický papír je porézní materiál vyráběný z buničiny, který se v suchém stavu vyznačuje dobrou rezistivitou, ale nízkou elektrickou pevností kvůli vzduchu v pórech. V elektrotechnice se proto často používá v kombinaci s oleji, tvořící izolační systém olej-papír, například v olejových transformátorech a kondenzátorech. Dále slouží jako výztuž pro výrobu levných desek plošných spojů (např. FR-1, FR-2)."
        ]
      },
      {
        "question": "80) Mezi speciální dielektrika patří",
        "answer": [
          "pyroelektrika; piezoelektrika; feroelektrika.",
          "Vysvětlení: Speciální dielektrické materiály se liší od klasických dielektrik tím, že jejich polarizace může být ovlivněna i jinými faktory než jen vnějším elektrickým polem. Mezi tuto skupinu patří piezoelektrika, jejichž polarizace je vyvolána mechanickou deformací, pyroelektrika, která mají samovolnou polarizaci měnící se s teplotou, a feroelektrika, u nichž se samovolná polarizace mění s vnějším elektrickým polem, podobně jako feromagnetika v magnetickém poli."
        ]
      },
      {
        "question": "81) Kapalné krystaly se mohou vyskytovat ve fázi",
        "answer": [
          "smektické; nematické; cholesterické.",
          "Vysvětlení: Kapalné krystaly jsou organické polární látky, které se v mezofázi (parakrystalickém stavu) chovají jako kapaliny, ale zároveň mají molekuly pravidelně uspořádané jako v krystalech. V této mezofázi se termotropní kapalné krystaly mohou vyskytovat v několika fázích uspořádání: smektické, kde jsou molekuly uspořádány v rovnoběžných vrstvách; nematické, kde jsou molekuly rovnoběžné, ale nejsou ve vrstvách; a cholesterické (chirální nematika), kde jsou molekuly uspořádány ve vrstvách s postupně pootočenými osami."
        ]
      }
    ]
};