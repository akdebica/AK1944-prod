import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { RallyRegistrationForm } from "@/components/RallyRegistrationForm/RallyRegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapisz się na rajd",
  description:
    "Formularz zgłoszeniowy na rajd Szlakiem Partyzanckim II Zgrupowania Armii Krajowej",
};

export default function SignToRallyPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Zapisz się na rajd
        </Heading>
        <div className="max-w-2xl">
          <p className="mb-8 font-sourceSans text-18 text-textDarkGreen">
            Wypełnij poniższy formularz, aby zgłosić swój udział w rajdzie
            Szlakiem Partyzanckim II Zgrupowania Armii Krajowej. Po otrzymaniu
            zgłoszenia skontaktujemy się z Tobą z dodatkowymi informacjami.
          </p>
          <RallyRegistrationForm />
        </div>
      </Container>
    </div>
  );
}
