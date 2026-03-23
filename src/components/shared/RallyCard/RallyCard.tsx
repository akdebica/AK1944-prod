import Link from "next/link";
import LogoAK from "@/icons/LogoAK";
import { CardHeader } from "@/app/(client)/wesprzyj/_components/SupportCard/CardHeader";
import { SupportCard } from "@/app/(client)/wesprzyj/_components/SupportCard";
import { Button } from "@/components/shared/Button/Button";
import { Routes } from "@/routes";

export const RallyCard = () => (
  <SupportCard className="gap-3.5 desktop:gap-6">
    <LogoAK className="h-auto w-1/2" />
    <CardHeader>Zapisz się na rajd</CardHeader>
    <Link href={Routes.SIGN_TO_RALLY}>
      <Button
        variant="primary"
        label="Zapisz się na rajd"
        ariaDescription="Przejdź do formularza zgłoszeniowego na rajd"
      />
    </Link>
  </SupportCard>
);
