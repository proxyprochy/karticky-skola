// data_KET_ELM.js

const cardData = {
  elm: [
    {
      question: "1) Chyby měření: třída přesnosti, chyba digitálního přístroje, šíření chyb ve výpočtech.",
      answer: [
        "Třída přesnosti (TP): Maximální povolená absolutní chyba v % z měřicího rozsahu.",
        "Chyba digitálního přístroje se skládá z části závislé na měřené hodnotě a z pevné složky (v % nebo digitů).",
        "Při nepřímých měřeních se chyby šíří dle matematických operací: např. při sčítání se sčítají absolutní chyby, při násobení relativní chyby.",
        "Relativní chyba: \u03b4 = \u0394 / x, Absolutní chyba: \u0394 = x - x₀."
      ]
    },
    {
      question: "2) Nejistoty měření: standardní nejistota typu A, typu B, kombinovaná a rozšířená nejistota.",
      answer: [
        "Typ A: určená statistickým zpracováním výsledků opakovaných měření (výběrová směrodatná odchylka).",
        "Typ B: založená na jiných údajích (např. katalogové listy, specifikace přístroje).",
        "Kombinovaná nejistota: výpočet ze všech dílčích nejistot (A i B) pomocí kvadratického součtu.",
        "Rozšířená nejistota: kombinovaná nejistota násobená koeficientem pokrytí (např. k = 2 pro 95% interval)."
      ]
    },
    {
      question: "3) Měření el. proudu: přístroje pro měření DC a AC proudu, AC/DC komparátor.",
      answer: [
        "DC proud: měří se magnetoelektrickými přístroji, digitálními multimetry nebo pomocí zpětnovazebních zesilovačů.",
        "AC proud: magnetoelektrické přístroje s usměrňovačem, elektromagnetické přístroje, měřicí transformátory.",
        "AC/DC komparátor: porovnává tepelný účinek střídavého proudu s přesně známým stejnosměrným proudem – metoda srovnání RMS hodnot přes termočlánek."
      ]
    },
    {
      question: "4) Měření el. napětí: přístroje pro měř. DC a AC napětí, AC/DC komparátor, kompenzátor DC napětí.",
      answer: [
        "DC napětí: magnetoelektrické přístroje (např. MX1), digitální multimetry (např. Keysight 34401A).",
        "AC napětí: magnetoelektrické s usměrňovačem, elektromagnetické, elektrostatické voltmetry.",
        "AC/DC komparátor: porovnává tepelné účinky AC a DC napětí (pomocí termočlánku a odporu).",
        "Kompenzátor napětí: nastavuje vyrovnávací napětí Un tak, aby proud nulovým indikátorem NI = 0 ⇒ Ux = Un (bezzátěžové měření)."
      ]
    },
    {
      question: "5) Etalony el. napětí: Westonův článek, kvantový etalon napětí, elektronické etalony napětí.",
      answer: [
        "Westonův článek: elektrochemický článek s napětím 1,01865 V, používaný do roku 1990 jako primární etalon.",
        "Kvantový etalon: využívá Josephsonův jev (etalon 1 V a 10 V, přesnost řádu nV).",
        "Elektronické etalony: referenční zdroje se Zenerovou diodou (např. LM399), stabilní napěťové výstupy pro kalibraci."
      ]
    }
  ]
};
