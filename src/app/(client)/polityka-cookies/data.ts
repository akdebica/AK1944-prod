type CookiesPolicySection =
  | {
      title: string;
      content: string;
      list?: string[];
      footer?: string;
    }
  | {
      title: string;
      content: string;
      types: Array<{
        title: string;
        description: string;
      }>;
    };

export const cookiesPolicyData: {
  sections: CookiesPolicySection[];
} = {
  sections: [
    {
      title: "Czym są pliki cookies?",
      content:
        "Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika (komputerze, tablecie, smartfonie) podczas korzystania ze strony internetowej. Cookies są powszechnie stosowane w celu zapewnienia prawidłowego działania stron internetowych, poprawy ich funkcjonalności oraz bezpieczeństwa.",
    },
    {
      title: "W jakim celu używamy plików cookies",
      content:
        "Na stronie AK1944 pliki cookies wykorzystywane są wyłącznie w następujących celach:",
      list: [
        "zapewnienia prawidłowego działania serwisu,",
        "zapamiętania decyzji użytkownika dotyczącej akceptacji plików cookies,",
        "zbierania anonimowych danych statystycznych i technicznych dotyczących wydajności strony (np. czasu ładowania, rodzaju urządzenia lub przeglądarki), w celu jej optymalizacji.",
      ],
      footer:
        "Strona nie wykorzystuje cookies marketingowych ani reklamowych.",
    },
    {
      title: "Jakie rodzaje cookies stosujemy",
      content:
        "Na stronie mogą być stosowane następujące rodzaje plików cookies:",
      types: [
        {
          title: "Cookies niezbędne",
          description:
            "Są to cookies konieczne do prawidłowego funkcjonowania strony internetowej, w tym umożliwiające zapamiętanie ustawień użytkownika (np. informacji o zaakceptowaniu plików cookies). Bez tych plików strona nie mogłaby działać poprawnie.",
        },
        {
          title: "Cookies analityczne i techniczne",
          description:
            "Strona korzysta z narzędzi analitycznych i wydajnościowych dostarczanych przez Vercel Inc. (Vercel Analytics oraz Speed Insights). Narzędzia te służą do zbierania anonimowych danych technicznych i statystycznych, takich jak liczba odwiedzin czy parametry wydajności strony. Dane te nie służą do identyfikacji użytkowników i nie są wykorzystywane w celach marketingowych.",
        },
      ],
    },
    {
      title: "Zarządzanie plikami cookies",
      content:
        "Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies za pomocą ustawień swojej przeglądarki internetowej. Przeglądarki umożliwiają m.in.:",
      list: [
        "blokowanie zapisywania plików cookies,",
        "usuwanie zapisanych plików cookies,",
        "ustawienie powiadomień o zapisywaniu cookies.",
      ],
      footer:
        "Ograniczenie lub wyłączenie obsługi plików cookies może wpłynąć na niektóre funkcjonalności strony.",
    },
    {
      title: "Zmiany polityki cookies",
      content:
        "Polityka cookies może być okresowo aktualizowana w celu dostosowania jej do zmian w funkcjonowaniu strony lub obowiązujących przepisów prawa. Aktualna wersja dokumentu jest zawsze dostępna na stronie internetowej.",
    },
    {
      title: "Kontakt",
      content:
        "W przypadku pytań dotyczących plików cookies lub funkcjonowania strony internetowej prosimy o kontakt za pośrednictwem danych kontaktowych podanych na stronie.",
    },
  ],
};
