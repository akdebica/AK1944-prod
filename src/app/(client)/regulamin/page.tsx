import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Regulamin korzystania ze strony internetowej ŚZŻAK - Środowisko 5. Pułku Strzelców Konnych AK w Dębicy",
};

export default function RegulationsPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Regulamin serwisu
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 1. Definicje
            </h2>
            <p className="mb-4 leading-relaxed">
              Pojęcia użyte w niniejszym Regulaminie oznaczają:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                <span className="font-semibold">Administrator</span> – Światowy
                Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców
                Konnych Armii Krajowej w Dębicy, zwany dalej „Związkiem".
              </li>
              <li>
                <span className="font-semibold">Serwis</span> – strona
                internetowa dostępna pod adresem ak1944.pl wraz ze wszystkimi
                podstronami i funkcjonalnościami.
              </li>
              <li>
                <span className="font-semibold">Użytkownik</span> – każda osoba
                korzystająca z Serwisu, w tym przeglądająca jego zawartość,
                wypełniająca formularze lub dokonująca darowizn.
              </li>
              <li>
                <span className="font-semibold">Rajd</span> – wydarzenie
                organizowane przez Związek, na które Użytkownik może zgłosić swój
                udział za pośrednictwem formularza dostępnego w Serwisie.
              </li>
              <li>
                <span className="font-semibold">Darowizna</span> – dobrowolna
                wpłata pieniężna na cele statutowe Związku, dokonywana przez
                Użytkownika za pośrednictwem Serwisu lub przelewu bankowego.
              </li>
              <li>
                <span className="font-semibold">RODO</span> – Rozporządzenie
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 2. Postanowienia ogólne
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Niniejszy Regulamin określa zasady i warunki korzystania z
                Serwisu internetowego prowadzonego przez Związek.
              </li>
              <li className="leading-relaxed">
                Celem Serwisu jest upowszechnianie wiedzy historycznej dotyczącej
                Armii Krajowej, w szczególności II Zgrupowania AK oraz 5. Pułku
                Strzelców Konnych AK, upamiętnianie żołnierzy i bohaterów,
                prezentacja działalności Związku, a także umożliwienie
                Użytkownikom wsparcia działań statutowych poprzez darowizny lub
                udział w wydarzeniach.
              </li>
              <li className="leading-relaxed">
                Korzystanie z Serwisu jest dobrowolne i nieodpłatne. Pewne
                funkcjonalności (np. zgłoszenie na Rajd, wpłata Darowizny)
                wymagają podania danych osobowych przez Użytkownika.
              </li>
              <li className="leading-relaxed">
                Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu
                oraz Polityki Prywatności i Polityki Cookies. Użytkownik
                zobowiązany jest do zapoznania się z tymi dokumentami przed
                rozpoczęciem korzystania z Serwisu.
              </li>
              <li className="leading-relaxed">
                Administrator zastrzega sobie prawo do zmiany Regulaminu. O
                wszelkich zmianach Użytkownicy zostaną poinformowani poprzez
                publikację zaktualizowanego Regulaminu w Serwisie. Zmiany wchodzą
                w życie w terminie wskazanym przez Administratora, nie krótszym
                niż 7 dni od daty publikacji. Korzystanie z Serwisu po wejściu w
                życie zmian oznacza ich akceptację.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 3. Warunki korzystania z Serwisu
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Użytkownik zobowiązuje się korzystać z Serwisu w sposób zgodny z
                prawem, dobrymi obyczajami oraz postanowieniami niniejszego
                Regulaminu.
              </li>
              <li className="leading-relaxed">
                Zabrania się wykorzystywania Serwisu w sposób naruszający prawa
                osób trzecich, w szczególności:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    publikowania treści niezgodnych z prawem, obraźliwych,
                    wulgarnych lub naruszających dobra osobiste,
                  </li>
                  <li>
                    podszywania się pod inne osoby lub podawania nieprawdziwych
                    danych,
                  </li>
                  <li>
                    rozpowszechniania wirusów, złośliwego oprogramowania lub
                    podejmowania działań mogących zakłócić funkcjonowanie Serwisu,
                  </li>
                  <li>
                    kopiowania, modyfikowania lub rozpowszechniania treści
                    objętych prawem autorskim bez zgody Administratora.
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Administrator zastrzega sobie prawo do czasowego lub trwałego
                zablokowania dostępu do Serwisu Użytkownikowi, który narusza
                postanowienia niniejszego Regulaminu.
              </li>
              <li className="leading-relaxed">
                Serwis może zawierać linki do stron internetowych podmiotów
                trzecich. Administrator nie ponosi odpowiedzialności za zawartość
                i politykę prywatności takich stron.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 4. Zgłoszenia na wydarzenia (Rajdy)
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Użytkownik może zgłosić swój udział w organizowanych przez
                Związek wydarzeniach (Rajdach) poprzez wypełnienie i przesłanie
                formularza zgłoszeniowego dostępnego w Serwisie.
              </li>
              <li className="leading-relaxed">
                Zgłoszenie wymaga podania danych osobowych: imienia, nazwiska,
                adresu e-mail oraz opcjonalnie dodatkowych informacji niezbędnych
                do organizacji wydarzenia. Podanie danych jest dobrowolne, ale
                konieczne do przyjęcia zgłoszenia.
              </li>
              <li className="leading-relaxed">
                Po przesłaniu formularza Użytkownik otrzyma potwierdzenie
                zgłoszenia na wskazany adres e-mail. Organizator skontaktuje się z
                Użytkownikiem w celu przekazania szczegółowych informacji o
                wydarzeniu.
              </li>
              <li className="leading-relaxed">
                Zgłoszenie na Rajd nie stanowi zobowiązania do udziału.
                Użytkownik może w każdej chwili zrezygnować z udziału,
                informując o tym organizatora drogą mailową lub telefoniczną.
                Zalecane jest odwołanie zgłoszenia z co najmniej 3-dniowym
                wyprzedzeniem.
              </li>
              <li className="leading-relaxed">
                Udział w Rajdzie może wiązać się z opłatą organizacyjną (np.
                pokrycie kosztów transportu, wyżywienia). Informacja o opłacie
                oraz sposobie jej uiszczenia zostanie przekazana Użytkownikowi po
                przyjęciu zgłoszenia.
              </li>
              <li className="leading-relaxed">
                Organizator zastrzega sobie prawo do odwołania lub zmiany terminu
                wydarzenia z przyczyn niezależnych od niego (np. warunki
                atmosferyczne, siła wyższa). W takim przypadku Użytkownicy
                zostaną niezwłocznie powiadomieni, a wpłacone opłaty organizacyjne
                zostaną zwrócone lub przeniesione na nowy termin.
              </li>
              <li className="leading-relaxed">
                Uczestnicy Rajdu zobowiązują się przestrzegać wskazówek
                organizatora oraz zasad bezpieczeństwa. Organizator nie ponosi
                odpowiedzialności za szkody wynikłe z nieprzestrzegania przez
                uczestników zasad lub z tytułu zdarzeń losowych.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 5. Darowizny i wsparcie finansowe
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Użytkownik może wesprzeć działalność statutową Związku poprzez
                dokonanie dobrowolnej Darowizny.
              </li>
              <li className="leading-relaxed">
                Darowizny można przekazywać:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    poprzez formularz płatności online dostępny w Serwisie
                    (obsługiwany przez operatora płatności Stripe Inc.),
                  </li>
                  <li>
                    poprzez tradycyjny przelew bankowy na rachunek Związku podany
                    w Serwisie, z tytułem przelewu: „Darowizna na cele
                    statutowe".
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Minimalna kwota Darowizny wynosi 1 PLN. Maksymalna kwota nie jest
                ograniczona.
              </li>
              <li className="leading-relaxed">
                Darowizny mają charakter nieodwołalny i bezzwrotny. Wpłacone
                środki przeznaczane są wyłącznie na cele statutowe Związku.
              </li>
              <li className="leading-relaxed">
                W przypadku płatności online Użytkownik zostanie przekierowany do
                bezpiecznego formularza płatności obsługiwanego przez Stripe Inc.
                Administrator nie przechowuje danych kart płatniczych
                Użytkowników. Przetwarzanie danych płatności odbywa się zgodnie z
                polityką prywatności Stripe Inc.
              </li>
              <li className="leading-relaxed">
                Po dokonaniu Darowizny online Użytkownik otrzyma potwierdzenie
                transakcji na wskazany adres e-mail. Na życzenie Użytkownika
                Związek wystawi potwierdzenie przyjęcia darowizny dla celów
                rozliczenia podatkowego.
              </li>
              <li className="leading-relaxed">
                Zwrot Darowizny jest możliwy jedynie w wyjątkowych przypadkach, w
                szczególności gdy:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    wpłata została dokonana omyłkowo (np. podwójnie, na błędną
                    kwotę),
                  </li>
                  <li>nastąpiło nieuprawnione obciążenie rachunku bankowego.</li>
                </ul>
                Wniosek o zwrot powinien zostać zgłoszony w terminie 14 dni od
                daty transakcji na adres e-mail Związku, wraz z uzasadnieniem i
                dowodem wpłaty. Zwrot następuje w ciągu 14 dni roboczych od daty
                pozytywnego rozpatrzenia wniosku.
              </li>
              <li className="leading-relaxed">
                Użytkownik może wesprzeć Związek, przekazując 1% podatku
                dochodowego. Numer KRS Związku oraz szczegółowe instrukcje
                znajdują się w sekcji „Wesprzyj" w Serwisie.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 6. Prawa autorskie i własność intelektualna
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Wszelkie treści publikowane w Serwisie, w tym teksty, fotografie,
                grafiki, materiały video, biografie, opracowania historyczne,
                logotypy oraz układ graficzny i kod źródłowy strony, podlegają
                ochronie prawa autorskiego i stanowią własność Związku lub
                podmiotów trzecich, które udzieliły Związkowi odpowiednich
                licencji.
              </li>
              <li className="leading-relaxed">
                Użytkownik może korzystać z materiałów dostępnych w Serwisie
                wyłącznie na użytek prywatny i w celach edukacyjnych, bez prawa
                do ich kopiowania, modyfikowania, rozpowszechniania lub
                wykorzystywania komercyjnego bez uprzedniej pisemnej zgody
                Związku.
              </li>
              <li className="leading-relaxed">
                Dozwolone jest:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    cytowanie fragmentów tekstów w celach edukacyjnych lub
                    informacyjnych, z podaniem źródła (link do Serwisu),
                  </li>
                  <li>
                    zamieszczanie linków do Serwisu na innych stronach
                    internetowych,
                  </li>
                  <li>
                    udostępnianie treści za pośrednictwem funkcji „Udostępnij" w
                    mediach społecznościowych.
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Zabrania się:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    pobierania, kopiowania lub wykorzystywania fotografii,
                    grafik, filmów lub innych materiałów multimedialnych bez
                    zgody Administratora,
                  </li>
                  <li>
                    publikowania treści z Serwisu jako własnych lub bez podania
                    źródła,
                  </li>
                  <li>
                    wykorzystywania materiałów w celach komercyjnych (np.
                    sprzedaż, reklama) bez licencji.
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Naruszenie praw autorskich może skutkować odpowiedzialnością cywilną
                i karną zgodnie z obowiązującymi przepisami prawa.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 7. Udział w wydarzeniach i publikacja wizerunku
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Podczas wydarzeń organizowanych przez Związek (w tym Rajdów,
                uroczystości, spotkań) mogą być wykonywane zdjęcia i nagrania
                video dokumentujące przebieg wydarzenia.
              </li>
              <li className="leading-relaxed">
                Materiały fotograficzne i filmowe mogą być publikowane w Serwisie,
                na profilach społecznościowych Związku (Facebook, Instagram,
                YouTube) oraz w materiałach promocyjno-informacyjnych (plakaty,
                ulotki, raporty).
              </li>
              <li className="leading-relaxed">
                Uczestnicząc w wydarzeniu organizowanym przez Związek, Użytkownik
                wyraża zgodę na utrwalenie swojego wizerunku oraz jego publikację
                w celach dokumentacyjnych i promocyjnych działalności Związku.
              </li>
              <li className="leading-relaxed">
                Użytkownik, który nie wyraża zgody na publikację swojego
                wizerunku, powinien zgłosić to organizatorowi przed lub w trakcie
                wydarzenia. W takim przypadku organizator dołoży starań, aby
                wizerunek Użytkownika nie był utrwalany lub został usunięty z
                publikowanych materiałów.
              </li>
              <li className="leading-relaxed">
                Użytkownik może w każdej chwili wycofać zgodę na wykorzystanie
                swojego wizerunku, kontaktując się z Administratorem. W takim
                przypadku Związek usunie wizerunek Użytkownika z materiałów
                przyszłych oraz, w miarę możliwości technicznych, z materiałów
                już opublikowanych.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 8. Ochrona danych osobowych
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Administratorem danych osobowych Użytkowników jest Związek.
                Szczegółowe informacje dotyczące przetwarzania danych osobowych,
                w tym celów, podstaw prawnych, okresu przechowywania oraz praw
                przysługujących osobom, których dane dotyczą, zawarte są w{" "}
                <a
                  href="/polityka-prywatnosci"
                  className="font-semibold text-greenMain underline contrast:text-yellowContrast"
                >
                  Polityce Prywatności
                </a>
                .
              </li>
              <li className="leading-relaxed">
                Dane osobowe zbierane są wyłącznie w zakresie niezbędnym do
                realizacji celów, dla których zostały podane (np. zgłoszenie na
                Rajd, kontakt, przetwarzanie Darowizny).
              </li>
              <li className="leading-relaxed">
                Użytkownik ma prawo dostępu do swoich danych, ich sprostowania,
                usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz
                prawo do wniesienia sprzeciwu wobec przetwarzania, a także prawo
                do wniesienia skargi do organu nadzorczego (Prezesa Urzędu
                Ochrony Danych Osobowych).
              </li>
              <li className="leading-relaxed">
                Dane osobowe są chronione przed nieuprawnionym dostępem, utratą
                lub zniszczeniem poprzez stosowanie odpowiednich środków
                technicznych i organizacyjnych.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 9. Odpowiedzialność
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Administrator dokłada wszelkich starań, aby Serwis działał
                prawidłowo, bezpiecznie i bez przerw. Niemniej jednak nie
                gwarantuje nieprzerwanego dostępu do Serwisu oraz braku błędów
                technicznych.
              </li>
              <li className="leading-relaxed">
                Administrator zastrzega sobie prawo do czasowego wyłączenia
                Serwisu lub jego poszczególnych funkcjonalności w celu
                przeprowadzenia prac konserwacyjnych, aktualizacji lub innych
                czynności technicznych. O planowanych przerwach Użytkownicy
                zostaną, w miarę możliwości, poinformowani z odpowiednim
                wyprzedzeniem.
              </li>
              <li className="leading-relaxed">
                Administrator nie ponosi odpowiedzialności za:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>
                    szkody wynikłe z korzystania lub niemożności korzystania z
                    Serwisu, w tym utratę danych lub zysków,
                  </li>
                  <li>
                    szkody spowodowane przez działania osób trzecich (np.
                    ataki hakerskie, wirusy), mimo zastosowania odpowiednich
                    zabezpieczeń,
                  </li>
                  <li>
                    treści zamieszczone przez Użytkowników (np. w formularzach
                    kontaktowych) lub na stronach internetowych podmiotów
                    trzecich linkowanych z Serwisu,
                  </li>
                  <li>
                    szkody powstałe w wyniku podania przez Użytkownika
                    nieprawdziwych lub niepełnych danych,
                  </li>
                  <li>
                    nieprawidłowe działanie Serwisu wynikające z przyczyn
                    niezależnych od Administratora (np. awaria sieci
                    teleinformatycznej, dostawcy usług hostingowych).
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                W przypadku uczestnictwa w wydarzeniach organizowanych przez
                Związek odpowiedzialność za bezpieczeństwo uczestników ogranicza
                się do zachowania należytej staranności przy organizacji
                wydarzenia. Uczestnicy biorą udział w wydarzeniach na własną
                odpowiedzialność, z zastrzeżeniem odpowiedzialności za szkody
                wynikłe z rażącego niedbalstwa lub winy umyślnej organizatora.
              </li>
              <li className="leading-relaxed">
                Administrator nie ponosi odpowiedzialności za transakcje
                płatnicze dokonywane za pośrednictwem zewnętrznych operatorów
                płatności (np. Stripe Inc.). Wszelkie reklamacje dotyczące
                płatności powinny być kierowane bezpośrednio do operatora
                płatności.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 10. Reklamacje i kontakt
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Użytkownik ma prawo zgłosić reklamację dotyczącą funkcjonowania
                Serwisu, nieprawidłowości w przetwarzaniu zgłoszeń lub innych
                kwestii związanych z korzystaniem z usług Związku.
              </li>
              <li className="leading-relaxed">
                Reklamacje należy kierować na adres e-mail Związku:{" "}
                <a
                  href="mailto:ak.debica@gmail.com"
                  className="font-semibold text-greenMain underline contrast:text-yellowContrast"
                >
                  ak.debica@gmail.com
                </a>{" "}
                lub w formie pisemnej na adres: 39-200 Dębica, ul. Rzeszowska 15.
              </li>
              <li className="leading-relaxed">
                Reklamacja powinna zawierać:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>imię, nazwisko i dane kontaktowe Użytkownika,</li>
                  <li>opis przedmiotu reklamacji,</li>
                  <li>żądanie Użytkownika,</li>
                  <li>
                    datę zdarzenia oraz wszelkie dokumenty lub informacje
                    pomocne w rozpatrzeniu reklamacji.
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Administrator rozpatrzy reklamację w terminie do 14 dni roboczych
                od daty jej otrzymania i powiadomi Użytkownika o wyniku
                rozpatrzenia drogą mailową lub pisemną.
              </li>
              <li className="leading-relaxed">
                W przypadku sporu, który nie zostanie rozwiązany polubownie,
                Użytkownik ma prawo skorzystać z pozasądowych sposobów
                rozpatrywania sporów (np. mediacja, arbitra) lub wystąpić na
                drogę sądową zgodnie z przepisami Kodeksu postępowania cywilnego.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
              § 11. Postanowienia końcowe
            </h2>
            <ol className="list-inside list-decimal space-y-3 pl-4">
              <li className="leading-relaxed">
                Niniejszy Regulamin wchodzi w życie z dniem publikacji w Serwisie.
              </li>
              <li className="leading-relaxed">
                W sprawach nieuregulowanych niniejszym Regulaminem mają
                zastosowanie przepisy prawa polskiego, w szczególności:
                <ul className="ml-6 mt-2 list-inside list-disc space-y-1">
                  <li>ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny,</li>
                  <li>
                    ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą
                    elektroniczną,
                  </li>
                  <li>
                    ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach
                    pokrewnych,
                  </li>
                  <li>RODO oraz inne przepisy dotyczące ochrony danych osobowych.</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                Administrator zastrzega sobie prawo do wprowadzania zmian w
                Regulaminie. Zmiany mogą być wprowadzane w szczególności z
                uwagi na rozwój funkcjonalności Serwisu, zmiany przepisów prawa
                lub z innych ważnych przyczyn organizacyjnych.
              </li>
              <li className="leading-relaxed">
                Wszelkie pytania, uwagi i sugestie dotyczące Serwisu oraz
                niniejszego Regulaminu można kierować na adres:{" "}
                <a
                  href="mailto:ak.debica@gmail.com"
                  className="font-semibold text-greenMain underline contrast:text-yellowContrast"
                >
                  ak.debica@gmail.com
                </a>
                .
              </li>
              <li className="leading-relaxed">
                Regulamin jest dostępny bezpłatnie w Serwisie oraz może być
                zapisany lub wydrukowany przez Użytkownika w dowolnym momencie.
              </li>
            </ol>
          </section>

          <div className="mt-10 border-t border-greenMain/20 pt-6 text-16 italic text-textDarkGreen/70">
            <p>
              Ostatnia aktualizacja: 22 marca 2026
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
