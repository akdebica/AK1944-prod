import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Polityka wykorzystywania plików cookies na stronie AK1944 - ŚZŻAK",
};

export default function CookiesPolicyPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Polityka cookies
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Czym są pliki cookies?
            </p>
            <p className="leading-relaxed">
              Pliki cookies to niewielkie pliki tekstowe zapisywane na
              urządzeniu końcowym użytkownika (komputerze, tablecie,
              smartfonie) podczas korzystania ze strony internetowej. Cookies
              są powszechnie stosowane w celu zapewnienia prawidłowego
              działania stron internetowych, poprawy ich funkcjonalności oraz
              bezpieczeństwa.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              W jakim celu używamy plików cookies
            </p>
            <p className="leading-relaxed">
              Na stronie AK1944 pliki cookies wykorzystywane są wyłącznie w
              następujących celach:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>zapewnienia prawidłowego działania serwisu,</li>
              <li>
                zapamiętania decyzji użytkownika dotyczącej akceptacji plików
                cookies,
              </li>
              <li>
                zbierania anonimowych danych statystycznych i technicznych
                dotyczących wydajności strony (np. czasu ładowania, rodzaju
                urządzenia lub przeglądarki), w celu jej optymalizacji.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Strona nie wykorzystuje cookies marketingowych ani reklamowych.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Jakie rodzaje cookies stosujemy
            </p>
            <p className="leading-relaxed">
              Na stronie mogą być stosowane następujące rodzaje plików cookies:
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2 font-semibold text-greenMain">
                  Cookies niezbędne
                </p>
                <p className="leading-relaxed">
                  Są to cookies konieczne do prawidłowego funkcjonowania strony
                  internetowej, w tym umożliwiające zapamiętanie ustawień
                  użytkownika (np. informacji o zaakceptowaniu plików cookies).
                  Bez tych plików strona nie mogłaby działać poprawnie.
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-greenMain">
                  Cookies analityczne i techniczne
                </p>
                <p className="leading-relaxed">
                  Strona korzysta z narzędzi analitycznych i wydajnościowych
                  dostarczanych przez Vercel Inc. (Vercel Analytics oraz Speed
                  Insights). Narzędzia te służą do zbierania anonimowych danych
                  technicznych i statystycznych, takich jak liczba odwiedzin czy
                  parametry wydajności strony. Dane te nie służą do
                  identyfikacji użytkowników i nie są wykorzystywane w celach
                  marketingowych.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Zarządzanie plikami cookies
            </p>
            <p className="leading-relaxed">
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące
              plików cookies za pomocą ustawień swojej przeglądarki
              internetowej. Przeglądarki umożliwiają m.in.:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>blokowanie zapisywania plików cookies,</li>
              <li>usuwanie zapisanych plików cookies,</li>
              <li>ustawienie powiadomień o zapisywaniu cookies.</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Ograniczenie lub wyłączenie obsługi plików cookies może wpłynąć na
              niektóre funkcjonalności strony.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Zmiany polityki cookies
            </p>
            <p className="leading-relaxed">
              Polityka cookies może być okresowo aktualizowana w celu
              dostosowania jej do zmian w funkcjonowaniu strony lub
              obowiązujących przepisów prawa. Aktualna wersja dokumentu jest
              zawsze dostępna na stronie internetowej.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Kontakt
            </p>
            <p className="leading-relaxed">
              W przypadku pytań dotyczących plików cookies lub funkcjonowania
              strony internetowej prosimy o kontakt za pośrednictwem danych
              kontaktowych podanych na stronie.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
