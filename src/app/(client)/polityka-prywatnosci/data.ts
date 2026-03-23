type PrivacyPolicySection =
  | {
      title: string;
      content: string;
    }
  | {
      title: string;
      content: string;
      list: string[];
    }
  | {
      title: string;
      content: string;
      detailedList: Array<{
        title: string;
        description: string;
      }>;
      footer?: string;
    }
  | {
      title: string;
      paragraphs: string[];
    };

export const privacyPolicyData: {
  sections: PrivacyPolicySection[];
} = {
  sections: [
    {
      title: "Administrator danych",
      content:
        "Administratorem danych osobowych użytkowników strony jest Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy. Kontakt w sprawach ochrony danych osobowych jest możliwy za pośrednictwem danych kontaktowych dostępnych na stronie internetowej.",
    },
    {
      title: "Zakres zbieranych danych",
      content:
        "Związek zbiera i przetwarza dane osobowe podane przez użytkownika w związku z korzystaniem z usług i funkcjonalności strony. Są to w szczególności:",
      list: [
        "imię i nazwisko, adres e-mail, treść wiadomości – w przypadku zgłoszenia na rajd lub kontaktu przez formularz kontaktowy,",
        "dane z plików cookies oraz informacje techniczne (adres IP, rodzaj przeglądarki, czas wizyty) zbierane automatycznie w celu zapewnienia prawidłowego działania strony i zbierania anonimowych statystyk.",
      ],
    },
    {
      title: "Cele i podstawa prawna przetwarzania",
      content:
        "Dane użytkownika przetwarzane są wyłącznie w celach związanych z działalnością Związku, tj.:",
      detailedList: [
        {
          title: "Obsługa zgłoszenia na rajd",
          description:
            "przetwarzanie zgłoszenia, kontakt z użytkownikiem przed i po wydarzeniu (Art. 6 ust. 1 lit. b RODO – przetwarzanie niezbędne do wykonania umowy, której stroną jest użytkownik).",
        },
        {
          title: "Wypełnienie obowiązków prawnych",
          description:
            "np. przechowywanie dokumentacji zawierającej dane użytkowników (Art. 6 ust. 1 lit. c RODO – obowiązek prawny ciążący na administratorze).",
        },
        {
          title: "Cele informacyjne i promocyjne",
          description:
            "za odrębną zgodą użytkownika jego dane (np. adres e-mail) mogą być użyte do wysyłania informacji o wydarzeniach i działalności Związku (Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą). Użytkownik ma prawo odmówić takiej zgody bez wpływu na możliwość korzystania ze strony.",
        },
        {
          title: "Ochrona prawna",
          description:
            "w razie konieczności dane mogą być przetwarzane w celu dochodzenia roszczeń lub obrony przed roszczeniami (Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora).",
        },
      ],
    },
    {
      title: "Dobrowolność podania danych",
      content:
        "Podanie danych osobowych jest dobrowolne, ale niezbędne do skorzystania z niektórych funkcjonalności strony (np. zgłoszenia na rajd). Użytkownik musi podać prawdziwe dane kontaktowe – w przeciwnym razie Związek nie będzie mógł przetworzyć zgłoszenia.",
    },
    {
      title: "Udostępnianie danych",
      content:
        "Dane osobowe użytkownika są poufne. Związek nie sprzedaje ani nie udostępnia danych użytkowników osobom trzecim, za wyjątkiem sytuacji, w których obowiązek taki wynika z przepisów prawa (np. na żądanie uprawnionych organów państwowych) lub jest niezbędny do realizacji usługi (np. dostawcy usług hostingowych, systemów mailingowych – zawsze na podstawie umowy powierzenia i z zapewnieniem poufności).",
    },
    {
      title: "Okres przechowywania",
      content:
        "Dane użytkownika będą przechowywane tylko tak długo, jak jest to konieczne do realizacji celów, dla których zostały zebrane:",
      list: [
        "Dane dotyczące zgłoszeń na rajdy – przez okres niezbędny do organizacji wydarzenia oraz dla celów archiwizacyjnych (nie dłużej niż 3 lata).",
        "Dane kontaktowe dla celów informacyjnych – do momentu wycofania zgody przez użytkownika.",
        "Dane techniczne i cookies – zgodnie z polityką cookies dostępną na stronie.",
      ],
    },
    {
      title: "Prawa użytkownika",
      content: "Zgodnie z RODO, użytkownikowi przysługują następujące prawa:",
      detailedList: [
        {
          title: "dostępu do treści swoich danych",
          description:
            "możliwość uzyskania informacji o przetwarzanych danych,",
        },
        {
          title: "sprostowania (poprawienia) danych",
          description:
            "aktualizacja nieprawidłowych lub niekompletnych danych,",
        },
        {
          title: "usunięcia danych",
          description: "(tzw. prawo do bycia zapomnianym),",
        },
        {
          title: "ograniczenia przetwarzania",
          description: "w określonych sytuacjach,",
        },
        {
          title: "przenoszenia danych",
          description: "w zakresie danych przetwarzanych automatycznie,",
        },
        {
          title: "sprzeciwu wobec przetwarzania",
          description:
            "w oparciu o uzasadniony interes lub do celów marketingowych.",
        },
      ],
      footer:
        "Ponadto, jeśli przetwarzanie odbywa się na podstawie zgody, użytkownik ma prawo tę zgodę w dowolnym momencie wycofać.",
    },
    {
      title: "Realizacja praw",
      content:
        "W celu realizacji swoich praw należy skontaktować się z administratorem danych poprzez formularz kontaktowy dostępny na stronie lub za pośrednictwem danych kontaktowych. Związek spełni żądania w zakresie przewidzianym przez przepisy i poinformuje użytkownika o podjętych działaniach najpóźniej w terminie miesiąca.",
    },
    {
      title: "Bezpieczeństwo danych",
      content:
        "Związek stosuje odpowiednie środki organizacyjne i techniczne, aby chronić dane użytkowników przed nieuprawnionym dostępem, utratą czy uszkodzeniem. Dostęp do danych mają wyłącznie upoważnione osoby w zakresie niezbędnym do wykonywania obowiązków. Dane elektroniczne są przechowywane na zabezpieczonych systemach, a transmisja danych odbywa się z użyciem szyfrowania (protokół HTTPS).",
    },
    {
      title: "Skargi dotyczące danych",
      content:
        "Użytkownik ma prawo wnieść skargę do organu nadzorczego ds. ochrony danych osobowych (w Polsce: Prezes Urzędu Ochrony Danych Osobowych), jeśli uzna, że jego dane są przetwarzane niezgodnie z obowiązującym prawem. Jednakże zachęcamy w pierwszej kolejności do kontaktu ze Związkiem – chętnie wyjaśnimy wszelkie wątpliwości i naprawimy ewentualne uchybienia.",
    },
    {
      title: "Postanowienia końcowe",
      paragraphs: [
        "Niniejsza Polityka Prywatności obowiązuje od 22 marca 2026 r. i jest dostępna do wglądu na stronie internetowej. Związek może wprowadzać zmiany w Polityce – w przypadku istotnych zmian zostaną one ogłoszone na stronie. Zmiany wchodzą w życie z dniem publikacji zaktualizowanej Polityki, chyba że określono inny termin.",
        "W sprawach nieuregulowanych niniejszą Polityką zastosowanie mają odpowiednie przepisy prawa polskiego, w szczególności Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawy o ochronie danych osobowych.",
        "Wszelkie pytania lub wątpliwości związane z niniejszą Polityką Prywatności prosimy kierować poprzez formularz kontaktowy – chętnie je wyjaśnimy.",
      ],
    },
  ],
};
