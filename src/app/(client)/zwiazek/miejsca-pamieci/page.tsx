import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import React, { Suspense } from "react";
import MemorialPlacesList from "./components/MemorialPlacesList";
import { SearchParamsProps } from "@/types";
import { Heading } from "@/components/shared/Heading/Heading";

export default function MiejscaPamieci({ searchParams }: SearchParamsProps) {
  const params = React.use(searchParams);
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;
  return (
    <Container className="mx-auto max-w-7xl px-4 tablet:pb-20 desktop:pb-150">
      <Breadcrumbs />
      <Heading color="green" contrast="yellow" variant="h3" className="mb-5 mt-5">
        Miejsca pamięci
      </Heading>
      <Suspense fallback={<p>Ładowanie listy miejsc pamięci...</p>}>
        <MemorialPlacesList currentPage={currentPage} />
      </Suspense>
    </Container>
  );
}
