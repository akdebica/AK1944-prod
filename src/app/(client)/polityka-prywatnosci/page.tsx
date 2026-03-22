import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności ŚZŻAK - Środowisko 5. Pułku Strzelców Konnych AK w Dębicy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Polityka prywatności
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Administrator danych
            </p>
            <p className="leading-relaxed">
              Administratorem danych osobowych użytkowników strony jest
              Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku
              Strzelców Konnych Armii Krajowej w Dębicy. Kontakt w sprawach
              ochrony danych osobowych jest możliwy za pośrednictwem danych
              kontaktowych dostępnych na stronie internetowej.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Zakres zbieranych danych
            </p>
            <p className="leading-relaxed">
              Związek zbiera i przetwarza dane osobowe podane przez użytkownika
              w związku z korzystaniem z usług i funkcjonalności strony. Są to
              w szczególności:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>
                imię i nazwisko, adres e-mail, treść wiadomości – w przypadku
                zgłoszenia na rajd lub kontaktu przez formularz kontaktowy,
              </li>
              <li>
                dane z plików cookies oraz informacje techniczne (adres IP,
                rodzaj przeglądarki, czas wizyty) zbierane automatycznie w celu
                zapewnienia prawidłowego działania strony i zbierania
                anonimowych statystyk.
              </li>
            </ul>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Cele i podstawa prawna przetwarzania
            </p>
            <p className="leading-relaxed">
              Dane użytkownika przetwarzane są wyłącznie w celach związanych z
              działalnością Związku, tj.:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <span className="font-semibold">
                  Obsługa zgłoszenia na rajd
                </span>{" "}
                – przetwarzanie zgłoszenia, kontakt z użytkownikiem przed i po
                wydarzeniu (Art. 6 ust. 1 lit. b RODO – przetwarzanie
                niezbędne do wykonania umowy, której stroną jest użytkownik).
              </li>
              <li>
                <span className="font-semibold">
                  Wypełnienie obowiązków prawnych
                </span>{" "}
                – np. przechowywanie dokumentacji zawierającej dane użytkowników
                (Art. 6 ust. 1 lit. c RODO – obowiązek prawny ciążący na
                administratorze).
              </li>
              <li>
                <span className="font-semibold">
                  Cele informacyjne i promocyjne
                </span>{" "}
                – za odrębną zgodą użytkownika jego dane (np. adres e-mail) mogą
                być użyte do wysyłania informacji o wydarzeniach i działalności
                Związku (Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane
                dotyczą). Użytkownik ma prawo odmówić takiej zgody bez wpływu na
                możliwość korzystania ze strony.
              </li>
              <li>
                <span className="font-semibold">Ochrona prawna</span> – w razie
                konieczności dane mogą być przetwarzane w celu dochodzenia
                roszczeń lub obrony przed roszczeniami (Art. 6 ust. 1 lit. f
                RODO – prawnie uzasadniony interes administratora).
              </li>
            </ul>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Dobrowolność podania danych
            </p>
            <p className="leading-relaxed">
              Podanie danych osobowych jest dobrowolne, ale niezbędne do
              skorzystania z niektórych funkcjonalności strony (np. zgłoszenia
              na rajd). Użytkownik musi podać prawdziwe dane kontaktowe – w
              przeciwnym razie Związek nie będzie mógł przetworzyć zgłoszenia.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Udostępnianie danych
            </p>
            <p className="leading-relaxed">
              Dane osobowe użytkownika są poufne. Związek nie sprzedaje ani nie
              udostępnia danych użytkowników osobom trzecim, za wyjątkiem
              sytuacji, w których obowiązek taki wynika z przepisów prawa (np.
              na żądanie uprawnionych organów państwowych) lub jest niezbędny do
              realizacji usługi (np. dostawcy usług hostingowych, systemów
              mailingowych – zawsze na podstawie umowy powierzenia i z
              zapewnieniem poufności).
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Okres przechowywania
            </p>
            <p className="leading-relaxed">
              Dane użytkownika będą przechowywane tylko tak długo, jak jest to
              konieczne do realizacji celów, dla których zostały zebrane:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Dane dotyczące zgłoszeń na rajdy – przez okres niezbędny do
                organizacji wydarzenia oraz dla celów archiwizacyjnych (nie
                dłużej niż 3 lata).
              </li>
              <li>
                Dane kontaktowe dla celów informacyjnych – do momentu wycofania
                zgody przez użytkownika.
              </li>
              <li>
                Dane techniczne i cookies – zgodnie z polityką cookies dostępną
                na stronie.
              </li>
            </ul>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Prawa użytkownika
            </p>
            <p className="leading-relaxed">
              Zgodnie z RODO, użytkownikowi przysługują następujące prawa:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <span className="font-semibold">
                  dostępu do treści swoich danych
                </span>{" "}
                – możliwość uzyskania informacji o przetwarzanych danych,
              </li>
              <li>
                <span className="font-semibold">
                  sprostowania (poprawienia) danych
                </span>{" "}
                – aktualizacja nieprawidłowych lub niekompletnych danych,
              </li>
              <li>
                <span className="font-semibold">usunięcia danych</span> (tzw.
                prawo do bycia zapomnianym),
              </li>
              <li>
                <span className="font-semibold">
                  ograniczenia przetwarzania
                </span>{" "}
                – w określonych sytuacjach,
              </li>
              <li>
                <span className="font-semibold">przenoszenia danych</span> – w
                zakresie danych przetwarzanych automatycznie,
              </li>
              <li>
                <span className="font-semibold">
                  sprzeciwu wobec przetwarzania
                </span>{" "}
                – w oparciu o uzasadniony interes lub do celów marketingowych.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Ponadto, jeśli przetwarzanie odbywa się na podstawie zgody,
              użytkownik ma prawo tę zgodę w dowolnym momencie wycofać.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Realizacja praw
            </p>
            <p className="leading-relaxed">
              W celu realizacji swoich praw należy skontaktować się z
              administratorem danych poprzez formularz kontaktowy dostępny na
              stronie lub za pośrednictwem danych kontaktowych. Związek spełni
              żądania w zakresie przewidzianym przez przepisy i poinformuje
              użytkownika o podjętych działaniach najpóźniej w terminie miesiąca.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Bezpieczeństwo danych
            </p>
            <p className="leading-relaxed">
              Związek stosuje odpowiednie środki organizacyjne i techniczne, aby
              chronić dane użytkowników przed nieuprawnionym dostępem, utratą czy
              uszkodzeniem. Dostęp do danych mają wyłącznie upoważnione osoby w
              zakresie niezbędnym do wykonywania obowiązków. Dane elektroniczne
              są przechowywane na zabezpieczonych systemach, a transmisja danych
              odbywa się z użyciem szyfrowania (protokół HTTPS).
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Skargi dotyczące danych
            </p>
            <p className="leading-relaxed">
              Użytkownik ma prawo wnieść skargę do organu nadzorczego ds.
              ochrony danych osobowych (w Polsce: Prezes Urzędu Ochrony Danych
              Osobowych), jeśli uzna, że jego dane są przetwarzane niezgodnie z
              obowiązującym prawem. Jednakże zachęcamy w pierwszej kolejności do
              kontaktu ze Związkiem – chętnie wyjaśnimy wszelkie wątpliwości i
              naprawimy ewentualne uchybienia.
            </p>
          </section>

          <section>
            <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              Postanowienia końcowe
            </p>
            <p className="leading-relaxed">
              Niniejsza Polityka Prywatności obowiązuje od 22 marca 2026 r. i
              jest dostępna do wglądu na stronie internetowej. Związek może
              wprowadzać zmiany w Polityce – w przypadku istotnych zmian zostaną
              one ogłoszone na stronie. Zmiany wchodzą w życie z dniem publikacji
              zaktualizowanej Polityki, chyba że określono inny termin.
            </p>
            <p className="mt-4 leading-relaxed">
              W sprawach nieuregulowanych niniejszą Polityką zastosowanie mają
              odpowiednie przepisy prawa polskiego, w szczególności
              Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
              (RODO) oraz ustawy o ochronie danych osobowych.
            </p>
            <p className="mt-4 leading-relaxed">
              Wszelkie pytania lub wątpliwości związane z niniejszą Polityką
              Prywatności prosimy kierować poprzez formularz kontaktowy – chętnie
              je wyjaśnimy.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
