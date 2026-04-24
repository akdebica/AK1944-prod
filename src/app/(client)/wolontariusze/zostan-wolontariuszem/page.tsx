import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { ContactForm } from "@/components/shared/ContactForm/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zostań wolontariuszem",
  description:
    "Formularz zgłoszeniowy dla wolontariuszy Związku Strzelców II Zgrupowania Armii Krajowej",
};

export default function VolunteerFormPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Zostań wolontariuszem
        </Heading>
        <div className="max-w-2xl">
          <p className="mb-8 font-sourceSans text-18 text-textDarkGreen">
            Wypełnij poniższy formularz, aby zgłosić swój udział jako
            wolontariusz. Razem możemy więcej niż tylko opowiadać historię –
            możemy ją przeżywać, przekazywać dalej i sprawić, by nigdy nie
            została zapomniana.
          </p>
          <ContactForm
            successMessage="Twoje zgłoszenie zostało przyjęte. Skontaktujemy się z Tobą wkrótce."
            consentPurpose="zgłoszenia wolontariusza"
          />
        </div>
      </Container>
    </div>
  );
}
