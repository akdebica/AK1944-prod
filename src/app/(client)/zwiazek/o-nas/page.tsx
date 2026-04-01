import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import Container from "@/components/shared/Container";

export default function AboutUsPage() {
  return (
    <section>
      <div className="relative h-full w-full overflow-hidden largeDesktop:h-[1600px]">
        <Image
          src="/images/become_donor_bg_1.webp"
          alt="AboutUs Background"
          fill
          priority
          className="object-cover object-center contrast:hidden tablet:object-[80%]"
        />
        <Container className="relative z-10 flex h-full flex-col items-start justify-center tablet:px-10 tablet:py-10 desktop:py-40 desktop:pl-24">
          <Breadcrumbs color="white" />

          <Heading
            contrast="yellow"
            color="white"
            className="my-4 self-start leading-9 tablet:mb-10 tablet:leading-10 tablet:text-white desktop:mt-5"
          >
            O nas
          </Heading>

          <article className="flex max-w-2xl flex-col items-center justify-center gap-6 pb-10 text-16 text-white tablet:text-18 desktop:text-justify">
            <p>
              Światowy Związek Żołnierzy Armii Krajowej (ŚZŻAK) to organizacja
              skupiająca byłych żołnierzy Armii Krajowej oraz ich sympatyków.
              Powstała w 1990 roku i ma na celu upamiętnienie dziedzictwa AK,
              ochronę dobrego imienia żołnierzy oraz krzewienie patriotyzmu.
              Obecnie działalność związku koncentruje się na działaniach
              edukacyjnych, organizacji uroczystości rocznicowych oraz
              upamiętnianiu miejsc walki i męczeństwa. ŚZŻAK angażuje się
              również w opiekę nad kombatantami, a także współpracuje z
              młodzieżą, szkołami i organizacjami społecznymi, promując historię
              Armii Krajowej.
            </p>

            <div className="hidden gap-6 tablet:flex tablet:flex-col">
              <AboutUs />
            </div>
          </article>
        </Container>
      </div>

      <Container className="mt-5 flex flex-col items-center justify-center gap-6 pb-10 text-16 text-textDarkGreen tablet:hidden tablet:text-18 desktop:text-justify">
        <AboutUs />
      </Container>
    </section>
  );
}

const AboutUs = () => (
  <>
    <p>
      Związek dba o zachowanie pamięci historycznej poprzez wydawnictwa,
      spotkania i współorganizowanie wydarzeń kulturalnych, takich jak wystawy i
      projekcje filmowe. W wielu regionach Polski działa w postaci lokalnych
      kół, które aktywnie włączają się w życie lokalnych społeczności.
    </p>
    <p>
      Ze względu na starzenie się kombatantów, organizacja zmienia swój
      charakter, coraz bardziej skupiając się na przekazywaniu wartości kolejnym
      pokoleniom. Wspierają ją także osoby niezwiązane bezpośrednio z AK, ale
      podzielające jej cele i misję.
    </p>
  </>
);
